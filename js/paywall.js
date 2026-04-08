// ===== Paywall / Access Control System =====
// Manages demo vs full access, purchase flow, and license keys

const Paywall = {
  ACCESS_KEY: 'artquest250_access',
  DEMO_UNIT: 1, // Unit 1 is free

  // Access levels: 'none', 'demo', 'full'
  getAccess() {
    const stored = localStorage.getItem(this.ACCESS_KEY);
    if (stored === 'full') return 'full';
    if (stored === 'demo') return 'demo';
    return 'none';
  },

  setAccess(level) {
    localStorage.setItem(this.ACCESS_KEY, level);
  },

  isFullAccess() {
    return this.getAccess() === 'full';
  },

  // Check if a unit is accessible
  canAccessUnit(unitId) {
    if (this.isFullAccess()) return true;
    return unitId === this.DEMO_UNIT;
  },

  // Start the demo (Unit 1 only)
  startDemo() {
    this.setAccess('demo');
    document.getElementById('screen-landing').classList.remove('active');
    // Show loading then menu
    document.getElementById('screen-loading').classList.add('active');
    // Trigger the normal loading flow
    if (typeof initGame === 'function') initGame();
    // Show upgrade button in menu
    document.getElementById('upgrade-btn').style.display = '';
  },

  // Purchase flow — redirect to Gumroad or show license key input
  purchase() {
    // ============================================
    // CONFIGURE YOUR PAYMENT LINK HERE
    // Option 1: Gumroad
    // window.open('https://yourname.gumroad.com/l/artquest250', '_blank');
    //
    // Option 2: Lemonsqueezy
    // window.open('https://yourstore.lemonsqueezy.com/checkout/buy/xxx', '_blank');
    //
    // Option 3: Stripe Payment Link
    // window.open('https://buy.stripe.com/your-link', '_blank');
    // ============================================

    // For now, show a license key activation modal
    this.showActivation();
  },

  // Show license key activation
  showActivation() {
    UI.showModal(`
      <h2 style="font-family:'Cinzel',serif;margin-bottom:15px">Activate ArtQuest 250</h2>
      <p style="color:var(--text2);margin-bottom:20px">Enter your license key to unlock all 10 units.</p>

      <div style="margin:15px 0">
        <p style="color:var(--text2);font-size:.85rem;margin-bottom:10px">Purchase options:</p>
        <a href="#" onclick="Paywall.openPayment()" class="btn primary" style="display:block;text-align:center;margin-bottom:10px;text-decoration:none">Buy Now — $8</a>
        <p style="color:var(--text3);font-size:.75rem;text-align:center">You'll receive a license key after purchase</p>
      </div>

      <div style="margin:20px 0;padding-top:15px;border-top:1px solid #333">
        <p style="color:var(--text2);font-size:.85rem;margin-bottom:8px">Already purchased? Enter your key:</p>
        <input type="text" id="license-key-input" placeholder="XXXX-XXXX-XXXX-XXXX"
          style="width:100%;padding:12px;background:var(--bg);color:var(--text);border:2px solid #333;border-radius:8px;font-size:1rem;text-align:center;letter-spacing:2px;font-family:monospace"
          onkeyup="if(event.key==='Enter')Paywall.activate()">
        <button class="btn primary" onclick="Paywall.activate()" style="width:100%;margin-top:10px">Activate</button>
      </div>

      <div style="margin-top:15px;padding-top:15px;border-top:1px solid #333;text-align:center">
        <button class="btn secondary" onclick="Paywall.devUnlock()" style="font-size:.75rem;opacity:.5">Dev: Unlock (remove before production)</button>
      </div>
    `);
  },

  openPayment() {
    // Replace with your actual payment link
    alert('Set up your Gumroad/Stripe/Lemonsqueezy link in paywall.js!\n\nFor now, use the Dev Unlock button to test.');
  },

  // Validate and activate a license key
  activate() {
    const input = document.getElementById('license-key-input');
    if (!input) return;
    const key = input.value.trim().toUpperCase();

    if (!key) {
      UI.toast('Please enter a license key', 'error');
      return;
    }

    // ============================================
    // CONFIGURE YOUR LICENSE VALIDATION HERE
    //
    // Option 1: Simple key list (for small scale)
    // const VALID_KEYS = ['KEY1-KEY2-KEY3-KEY4', ...];
    // if (VALID_KEYS.includes(key)) { ... }
    //
    // Option 2: Server validation (recommended)
    // fetch('https://your-api.com/validate', {
    //   method: 'POST',
    //   body: JSON.stringify({ key }),
    // }).then(r => r.json()).then(data => { ... });
    //
    // Option 3: Gumroad license verification
    // fetch('https://api.gumroad.com/v2/licenses/verify', {
    //   method: 'POST',
    //   body: new URLSearchParams({
    //     product_id: 'YOUR_PRODUCT_ID',
    //     license_key: key,
    //   })
    // }).then(r => r.json()).then(data => {
    //   if (data.success) { this.grantFullAccess(); }
    // });
    // ============================================

    // Placeholder validation — replace with real validation
    if (key.length >= 8) {
      this.grantFullAccess();
    } else {
      UI.toast('Invalid license key. Check your email for the correct key.', 'error');
    }
  },

  // Dev unlock (remove before deploying to production!)
  devUnlock() {
    if (confirm('DEV MODE: Grant full access? (Remove this button before production)')) {
      this.grantFullAccess();
    }
  },

  grantFullAccess() {
    this.setAccess('full');
    UI.hideModal();
    document.getElementById('gate-overlay').classList.add('hidden');
    document.getElementById('upgrade-btn').style.display = 'none';
    UI.toast('Full access activated! All 10 units unlocked.', 'success');

    // If on landing page, start the game
    if (document.getElementById('screen-landing').classList.contains('active')) {
      this.startDemo(); // reuses the start flow
    }

    // Refresh units view if visible
    if (document.getElementById('screen-units').classList.contains('active')) {
      Units.render();
    }
  },

  // Show gate when demo user tries to access paid content
  showGate() {
    document.getElementById('gate-overlay').classList.remove('hidden');
  },

  // Show upgrade prompt in menu
  showUpgrade() {
    this.showActivation();
  },

  // Initialize — check access on load
  init() {
    const access = this.getAccess();
    if (access === 'full' || access === 'demo') {
      // Skip landing, go to game
      document.getElementById('screen-landing').classList.remove('active');
      document.getElementById('screen-loading').classList.add('active');
      if (access === 'demo') {
        document.getElementById('upgrade-btn').style.display = '';
      }
      return true; // proceed to game
    }
    // Show landing page
    this.populatePreviews();
    return false; // stay on landing
  },

  // Populate preview images on landing page
  populatePreviews() {
    const container = document.getElementById('landing-previews');
    if (!container || typeof IMAGE_MAP === 'undefined') return;
    const previewIds = [2, 8, 13, 17, 35, 46, 52, 65, 73, 88, 113, 201]; // iconic works
    previewIds.forEach(id => {
      if (IMAGE_MAP[id]) {
        const img = document.createElement('img');
        img.src = IMAGE_MAP[id];
        img.loading = 'lazy';
        img.alt = '';
        container.appendChild(img);
      }
    });
  }
};

// ===== Override Units.render to enforce paywall =====
const _origUnitsRender = typeof Units !== 'undefined' ? Units.render : null;

document.addEventListener('DOMContentLoaded', () => {
  // Patch Units.render to lock paid units in demo mode
  if (typeof Units !== 'undefined') {
    const origRender = Units.render.bind(Units);
    Units.render = function() {
      origRender();
      if (!Paywall.isFullAccess()) {
        // Lock units 2-10 for demo users
        document.querySelectorAll('.unit-card').forEach((card, idx) => {
          const unitId = idx + 1;
          if (unitId > Paywall.DEMO_UNIT) {
            card.classList.add('locked');
            card.onclick = (e) => { e.stopPropagation(); Paywall.showGate(); };
            // Add lock overlay
            if (!card.querySelector('.unit-lock-icon')) {
              const lock = document.createElement('div');
              lock.className = 'unit-lock-icon';
              lock.textContent = '🔒';
              card.appendChild(lock);
            }
          }
        });
      }
    };
  }

  // Check access and initialize
  const shouldStartGame = Paywall.init();
  if (shouldStartGame && typeof initGame === 'function') {
    initGame();
  }
});
