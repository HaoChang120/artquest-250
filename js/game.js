/* =====================================================
   AP Art History: Quest of the 250 — Game Engine v7
   ===================================================== */
console.log('[GAME] v7 — direct CDN URLs, no API calls');

// ───── Image Loader (Simple — uses IMAGE_MAP from images.js) ─────
const Img = {
  // Get the image URL for a work. Synchronous — no API calls.
  getUrl(work) {
    if (!work) return null;
    if (typeof IMAGE_MAP !== 'undefined' && IMAGE_MAP[work.id]) return IMAGE_MAP[work.id];
    return null;
  },

  // For compatibility with async callers
  async resolve(work) { return this.getUrl(work); },

  // Load image into an <img> element
  loadInto(imgEl, placeholderEl, work) {
    if (!work) return;
    var url = this.getUrl(work);
    if (url) {
      // Hide placeholder, show image container
      if (placeholderEl) placeholderEl.style.display = 'none';
      imgEl.style.display = 'block';
      imgEl.onerror = function() {
        imgEl.style.display = 'none';
        if (placeholderEl) { placeholderEl.style.display = 'flex'; placeholderEl.textContent = '🎨 ' + work.title; }
      };
      imgEl.src = url;
    } else {
      imgEl.style.display = 'none';
      imgEl.removeAttribute('src');
      if (placeholderEl) { placeholderEl.style.display = 'flex'; placeholderEl.textContent = '🎨 ' + work.title; }
    }
  },

  getCached(work) { return this.getUrl(work); },

  init() {
    // Clean up old caches
    ['ap_art_img_cache','ap_art_img_cache_v2','ap_art_img_cache_v4','ap_art_img_cache_v5','ap_art_img_cache_v6'].forEach(function(k) {
      try { localStorage.removeItem(k); } catch(e) {}
    });
  },

  async preload() {} // no-op, images are direct URLs now
};

// ───── Save / Load ─────
const Save = {
  KEY: 'ap_art_history_save',
  defaults() {
    return {
      coins: 100,
      totalCoinsEarned: 100,
      stars: 0,
      // per-unit: { unlocked, levelsCompleted, bossDefeated, stars }
      units: {},
      // per-work: { seen, timesCorrect, timesWrong, mastered }
      works: {},
      // powerups owned
      powerups: { '5050': 3, skip: 1, hint: 3, time: 2 },
      // stats
      totalCorrect: 0,
      totalWrong: 0,
      totalQuizzes: 0,
      bestStreak: 0,
      bossesDefeated: 0,
      // settings
      lastUnit: null,
      lastLevel: null
    };
  },
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) {
        const d = JSON.parse(raw);
        const def = this.defaults();
        // merge missing keys
        for (const k in def) { if (!(k in d)) d[k] = def[k]; }
        if (!d.powerups) d.powerups = def.powerups;
        return d;
      }
    } catch(e) {}
    return this.defaults();
  },
  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch(e) {}
  },
  reset() {
    localStorage.removeItem(this.KEY);
    location.reload();
  }
};

let state = Save.load();
// Ensure unit 1 is always unlocked
if (!state.units[1]) state.units[1] = { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
state.units[1].unlocked = true;

// ───── UI helpers ─────
const UI = {
  go(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + screen);
    if (el) { el.classList.add('active'); }
    // refresh screen
    if (screen === 'menu') this.renderMenu();
    if (screen === 'units') Units.render();
    if (screen === 'levels') Levels.render();
    if (screen === 'shop') Shop.render();
    if (screen === 'collection') Collection.render();
    if (screen === 'study') Study.init();
    if (screen === 'stats') Stats.render();
    window.scrollTo(0, 0);
  },
  renderMenu() {
    const mastered = Object.values(state.works).filter(w => w.mastered).length;
    document.getElementById('menu-stats').innerHTML = `
      <div class="s">🪙 <b>${state.coins}</b></div>
      <div class="s">⭐ <b>${state.stars}</b></div>
      <div class="s">🎨 <b>${mastered}/250</b> mastered</div>
      <div class="s">🔥 Best streak: <b>${state.bestStreak}</b></div>
    `;
  },
  showModal(html) {
    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal').classList.remove('hidden');
  },
  hideModal() { document.getElementById('modal').classList.add('hidden'); },
  closeModal(e) { if (e.target === e.currentTarget) this.hideModal(); },
  toast(msg, type='') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast ' + type;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.add('hidden'), 2500);
  },
  coins(el) { if (el) el.innerHTML = '🪙 ' + state.coins; }
};

// ───── Units ─────
const Units = {
  render() {
    UI.coins(document.getElementById('units-coins'));
    const grid = document.getElementById('units-grid');
    grid.innerHTML = '';
    AP_ART_DATA.units.forEach(u => {
      const us = state.units[u.id] || { unlocked: false, levelsCompleted: 0, bossDefeated: false, stars: 0 };
      const works = AP_ART_DATA.works.filter(w => w.unit === u.id);
      const mastered = works.filter(w => state.works[w.id]?.mastered).length;
      const pct = Math.round((mastered / works.length) * 100);
      const locked = !us.unlocked;
      const card = document.createElement('div');
      card.className = 'unit-card' + (locked ? ' locked' : '');
      const unitImgId = `unit-img-${u.id}`;
      card.innerHTML = `
        <img class="unit-img" id="${unitImgId}" src="" alt="${u.name}" style="background:var(--card2)">
        <div class="unit-body">
          <div class="unit-badge">Unit ${u.id}</div>
          <h3>${u.name}</h3>
          <p>${u.dateRange} · ${works.length} works</p>
          <div class="unit-progress"><div class="unit-progress-fill" style="width:${pct}%"></div></div>
          <p style="font-size:.75rem;color:var(--text2);margin-top:4px">${mastered}/${works.length} mastered · ${pct}%</p>
          <div class="unit-stars">${us.bossDefeated ? '👑 Boss Defeated' : ''}</div>
        </div>
        ${locked ? '<div class="unit-lock-icon">🔒</div>' : ''}
      `;
      if (!locked) card.onclick = () => { currentUnit = u.id; UI.go('levels'); };
      grid.appendChild(card);
      // Load unit thumbnail from first work in unit
      const firstWork = works[0];
      if (firstWork) {
        Img.resolve(firstWork).then(url => {
          const el = document.getElementById(unitImgId);
          if (el && url) el.src = url;
        });
      }
    });
  }
};

let currentUnit = 1;
let currentLevel = 1;

// ───── Levels ─────
const Levels = {
  getWorksForUnit(unitId) {
    return AP_ART_DATA.works.filter(w => w.unit === unitId);
  },
  getLevelsForUnit(unitId) {
    const works = this.getWorksForUnit(unitId);
    const levels = [];
    const chunkSize = 5;
    for (let i = 0; i < works.length; i += chunkSize) {
      levels.push({
        num: levels.length + 1,
        works: works.slice(i, i + chunkSize),
        type: 'quiz'
      });
    }
    // Add boss level at the end
    levels.push({ num: levels.length + 1, works: works, type: 'boss' });
    return levels;
  },
  render() {
    UI.coins(document.getElementById('levels-coins'));
    const unit = AP_ART_DATA.units.find(u => u.id === currentUnit);
    const us = state.units[currentUnit] || { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
    document.getElementById('levels-title').textContent = `Unit ${unit.id}: ${unit.name}`;
    document.getElementById('level-banner').innerHTML = `
      <img id="level-banner-img" src="" alt="" style="background:var(--card2)">
      <div class="level-banner-info">
        <h3>${unit.name}</h3>
        <p>${unit.dateRange} · ${unit.description}</p>
        <p style="margin-top:6px;font-size:.82rem">Boss: <b style="color:var(--accent)">${unit.bossName}</b> — ${unit.bossTitle}</p>
      </div>
    `;
    const bannerWork = AP_ART_DATA.works.find(w => w.unit === currentUnit);
    if (bannerWork) Img.resolve(bannerWork).then(url => {
      const el = document.getElementById('level-banner-img');
      if (el && url) el.src = url;
    });
    const levels = this.getLevelsForUnit(currentUnit);
    const grid = document.getElementById('levels-grid');
    grid.innerHTML = '';
    levels.forEach((lv, i) => {
      const isUnlocked = i === 0 || i <= us.levelsCompleted;
      const isCompleted = i < us.levelsCompleted || (lv.type === 'boss' && us.bossDefeated);
      const isBoss = lv.type === 'boss';
      const node = document.createElement('div');
      node.className = 'level-node' +
        (!isUnlocked ? ' locked' : '') +
        (isCompleted ? ' completed' : '') +
        (isBoss ? ' boss' : '');
      if (isBoss) {
        node.innerHTML = `
          <div class="level-num">💀</div>
          <div class="level-label">BOSS BATTLE</div>
          <div class="level-stars-row">${isCompleted ? '👑' : ''}</div>
        `;
      } else {
        const stars = this.getLevelStars(currentUnit, i);
        const passes = us[`level_${i}_passes`] || 0;
        const mastered = passes >= 2 && isCompleted;
        node.innerHTML = `
          <div class="level-num">${lv.num}</div>
          <div class="level-label">${lv.works.length} works</div>
          <div class="level-stars-row">${'★'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
          <div style="font-size:.65rem;color:${mastered ? 'var(--gold)' : passes > 0 ? 'var(--warn)' : 'var(--text3)'};margin-top:3px">${mastered ? '✅ Mastered' : passes > 0 ? passes + '/2 passes' : ''}</div>
        `;
      }
      if (!isUnlocked) {
        node.innerHTML += '<div class="level-lock">🔒</div>';
      }
      if (isUnlocked) {
        node.onclick = () => {
          currentLevel = i;
          if (isBoss) {
            Boss.init(currentUnit);
          } else {
            Quiz.start(currentUnit, i);
          }
        };
      }
      grid.appendChild(node);
    });
  },
  getLevelStars(unitId, levelIdx) {
    const key = `${unitId}_${levelIdx}`;
    return state.units[unitId]?.[`level_${levelIdx}_stars`] || 0;
  },
  setLevelStars(unitId, levelIdx, stars) {
    if (!state.units[unitId]) state.units[unitId] = { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
    const prev = state.units[unitId][`level_${levelIdx}_stars`] || 0;
    if (stars > prev) {
      state.units[unitId][`level_${levelIdx}_stars`] = stars;
      state.stars += (stars - prev);
    }
  }
};

// ───── Quiz Engine ─────
const Quiz = {
  questions: [],
  current: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answers: [],
  unitId: 0,
  levelIdx: 0,
  timerInterval: null,
  timeLeft: 0,
  isBoss: false,

  start(unitId, levelIdx) {
    this.unitId = unitId;
    this.levelIdx = levelIdx;
    this.isBoss = false;
    const levels = Levels.getLevelsForUnit(unitId);
    const lv = levels[levelIdx];
    this.questions = this.generateQuestions(lv.works);
    this.current = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.answers = [];
    UI.go('quiz');
    this.renderPowerups();
    // Preload images for all questions in this level
    const worksToPreload = [...new Set(this.questions.map(q => q.work))];
    Img.preload(worksToPreload);
    this.showQuestion();
  },

  generateQuestions(works) {
    const questions = [];
    const allWorks = AP_ART_DATA.works;
    works.forEach(w => {
      // Mark as seen
      if (!state.works[w.id]) state.works[w.id] = { seen: true, timesCorrect: 0, timesWrong: 0, mastered: false };
      state.works[w.id].seen = true;

      // Generate 3 questions per work for harder difficulty
      const qTypes = this.shuffleArray([
        'identify_title', 'identify_artist', 'identify_date',
        'identify_culture', 'identify_medium', 'identify_location',
        'fact_question', 'ap_analysis'
      ]);

      // Always include at least 1 AP analysis question if available
      let addedAP = false;
      if (typeof AP_QUESTIONS !== 'undefined' && AP_QUESTIONS[w.id] && AP_QUESTIONS[w.id].length > 0) {
        const apQ = this.pickRandom(AP_QUESTIONS[w.id], 1)[0];
        questions.push({
          work: w, type: 'ap_analysis',
          image: w.imageUrl,
          text: apQ.text,
          correct: apQ.correct,
          options: this.shuffleArray([apQ.correct, ...apQ.wrongs.slice(0, 3)])
        });
        addedAP = true;
      }

      // Add 2 more standard questions (or 3 if no AP question)
      const numStandard = addedAP ? 2 : 3;
      for (let qi = 0; qi < numStandard; qi++) {
        const type = qTypes[qi];
        if (type === 'ap_analysis') continue; // skip, handled above
        const q = this.makeQuestion(w, type, allWorks);
        if (q) questions.push(q);
      }
    });
    return this.shuffleArray(questions);
  },

  makeQuestion(work, type, allWorks) {
    const sameUnit = allWorks.filter(w => w.unit === work.unit && w.id !== work.id);
    const others = allWorks.filter(w => w.id !== work.id);
    const pool = sameUnit.length >= 3 ? sameUnit : others;

    switch(type) {
      case 'identify_title':
      case 'image_to_title': {
        const wrongs = this.pickRandom(pool, 3).map(w => w.title);
        return {
          work, type,
          image: work.imageUrl,
          text: 'What is the title of this work?',
          correct: work.title,
          options: this.shuffleArray([work.title, ...wrongs])
        };
      }
      case 'identify_artist': {
        if (work.artist === 'Unknown') return this.makeQuestion(work, 'identify_title', allWorks);
        const artistPool = pool.filter(w => w.artist !== 'Unknown' && w.artist !== work.artist);
        const wrongs = this.pickRandom(artistPool.length >= 3 ? artistPool : others.filter(w=>w.artist!=='Unknown'&&w.artist!==work.artist), 3).map(w => w.artist);
        return {
          work, type,
          image: work.imageUrl,
          text: `Who created "${work.title}"?`,
          correct: work.artist,
          options: this.shuffleArray([work.artist, ...this.uniqueArr(wrongs, work.artist)])
        };
      }
      case 'identify_date': {
        const wrongs = this.pickRandom(pool, 3).map(w => w.date);
        return {
          work, type,
          image: work.imageUrl,
          text: `When was "${work.title}" created?`,
          correct: work.date,
          options: this.shuffleArray([work.date, ...this.uniqueArr(wrongs, work.date)])
        };
      }
      case 'identify_culture': {
        const culturePool = pool.filter(w => w.culture !== work.culture);
        const wrongs = this.pickRandom(culturePool.length >= 3 ? culturePool : others.filter(w=>w.culture!==work.culture), 3).map(w => w.culture);
        return {
          work, type,
          image: work.imageUrl,
          text: `What culture/civilization produced "${work.title}"?`,
          correct: work.culture,
          options: this.shuffleArray([work.culture, ...this.uniqueArr(wrongs, work.culture)])
        };
      }
      case 'identify_medium': {
        const medPool = pool.filter(w => w.medium !== work.medium);
        const wrongs = this.pickRandom(medPool.length >= 3 ? medPool : others.filter(w=>w.medium!==work.medium), 3).map(w => w.medium);
        return {
          work, type,
          image: work.imageUrl,
          text: `What is the medium of "${work.title}"?`,
          correct: work.medium,
          options: this.shuffleArray([work.medium, ...this.uniqueArr(wrongs, work.medium)])
        };
      }
      case 'identify_location': {
        const locPool = pool.filter(w => w.location !== work.location);
        const wrongs = this.pickRandom(locPool.length >= 3 ? locPool : others.filter(w=>w.location!==work.location), 3).map(w => w.location);
        return {
          work, type,
          image: work.imageUrl,
          text: `Where is "${work.title}" currently located?`,
          correct: work.location,
          options: this.shuffleArray([work.location, ...this.uniqueArr(wrongs, work.location)])
        };
      }
      case 'fact_question': {
        if (!work.facts || work.facts.length === 0) return this.makeQuestion(work, 'identify_title', allWorks);
        const fact = work.facts[Math.floor(Math.random() * work.facts.length)];
        const wrongFacts = this.pickRandom(pool, 3).map(w => w.facts?.[0] || w.title).filter(f => f !== fact);
        while (wrongFacts.length < 3) wrongFacts.push(this.pickRandom(others, 1)[0].facts?.[0] || 'None of the above');
        return {
          work, type,
          image: work.imageUrl,
          text: `Which fact is true about "${work.title}"?`,
          correct: fact,
          options: this.shuffleArray([fact, ...wrongFacts.slice(0,3)])
        };
      }
      case 'ap_analysis': {
        // If we have pre-written AP questions, use them
        if (typeof AP_QUESTIONS !== 'undefined' && AP_QUESTIONS[work.id] && AP_QUESTIONS[work.id].length > 0) {
          const apQ = AP_QUESTIONS[work.id][Math.floor(Math.random() * AP_QUESTIONS[work.id].length)];
          return {
            work, type,
            image: work.imageUrl,
            text: apQ.text,
            correct: apQ.correct,
            options: this.shuffleArray([apQ.correct, ...apQ.wrongs.slice(0, 3)])
          };
        }
        // Fallback: generate contextual questions from facts
        if (!work.facts || work.facts.length < 2) return this.makeQuestion(work, 'fact_question', allWorks);
        // "Why" style question using the work's facts
        const contextTemplates = [
          `What is the primary cultural significance of "${work.title}"?`,
          `Which statement best describes the function or purpose of "${work.title}"?`,
          `What does "${work.title}" reveal about the culture that produced it?`,
          `Which interpretation best explains the artistic choices in "${work.title}"?`,
        ];
        const qText = contextTemplates[Math.floor(Math.random() * contextTemplates.length)];
        const correctFact = work.facts[0]; // Use the most important fact
        const wrongPool = this.pickRandom(pool.filter(w => w.facts && w.facts.length > 0), 3);
        const wrongs = wrongPool.map(w => w.facts[0]).filter(f => f !== correctFact);
        while (wrongs.length < 3) wrongs.push('It served no particular cultural function');
        return {
          work, type,
          image: work.imageUrl,
          text: qText,
          correct: correctFact,
          options: this.shuffleArray([correctFact, ...wrongs.slice(0, 3)])
        };
      }
      default:
        return this.makeQuestion(work, 'identify_title', allWorks);
    }
  },

  uniqueArr(arr, exclude) {
    const set = new Set();
    const result = [];
    for (const item of arr) {
      if (item !== exclude && !set.has(item)) {
        set.add(item);
        result.push(item);
      }
    }
    while (result.length < 3) result.push('Unknown');
    return result.slice(0, 3);
  },

  showQuestion() {
    if (this.current >= this.questions.length) {
      this.finish();
      return;
    }
    const q = this.questions[this.current];
    const total = this.questions.length;

    // Progress
    document.getElementById('q-prog').style.width = ((this.current / total) * 100) + '%';
    document.getElementById('q-count').textContent = `${this.current + 1}/${total}`;
    document.getElementById('q-score').textContent = `Score: ${this.score}`;
    document.getElementById('q-streak').textContent = `🔥 ${this.streak}`;

    // Image — use Wikipedia API resolver
    const img = document.getElementById('q-img');
    const placeholder = document.getElementById('img-placeholder');
    Img.loadInto(img, placeholder, q.work);

    // Question
    document.getElementById('q-text').textContent = q.text;

    // Options
    const opts = document.getElementById('q-options');
    opts.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('div');
      btn.className = 'q-opt';
      btn.textContent = opt;
      btn.onclick = () => this.answer(opt, q);
      opts.appendChild(btn);
    });

    // Clear feedback
    document.getElementById('q-feedback').textContent = '';
    document.getElementById('q-feedback').className = 'q-feedback';
    document.getElementById('q-next').classList.add('hidden');
  },

  answer(chosen, q) {
    const opts = document.querySelectorAll('#q-options .q-opt');
    const isCorrect = chosen === q.correct;
    opts.forEach(o => {
      o.classList.add('disabled');
      if (o.textContent === q.correct) o.classList.add('correct');
      if (o.textContent === chosen && !isCorrect) o.classList.add('wrong');
      if (o.textContent !== q.correct && o.textContent !== chosen) o.classList.add('dimmed');
    });

    const fb = document.getElementById('q-feedback');
    if (isCorrect) {
      this.score++;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      fb.textContent = this.streak > 1 ? `✓ Correct! 🔥 ${this.streak} streak!` : '✓ Correct!';
      fb.className = 'q-feedback good';
      // Track work mastery
      if (state.works[q.work.id]) {
        state.works[q.work.id].timesCorrect++;
        if (state.works[q.work.id].timesCorrect >= 5) state.works[q.work.id].mastered = true;
      }
      state.totalCorrect++;
    } else {
      this.streak = 0;
      fb.innerHTML = `✗ Wrong! The answer is: <b>${q.correct}</b>`;
      fb.className = 'q-feedback bad';
      if (state.works[q.work.id]) state.works[q.work.id].timesWrong++;
      state.totalWrong++;
    }

    this.answers.push({ question: q, correct: isCorrect });
    document.getElementById('q-streak').textContent = `🔥 ${this.streak}`;
    document.getElementById('q-score').textContent = `Score: ${this.score}`;
    document.getElementById('q-next').classList.remove('hidden');
    Save.save(state);
  },

  next() {
    this.current++;
    this.showQuestion();
  },

  finish() {
    const total = this.questions.length;
    const pct = Math.round((this.score / total) * 100);
    const passed = pct >= 80;
    const coins = this.calcCoins(pct);
    const stars = pct >= 95 ? 3 : pct >= 87 ? 2 : pct >= 80 ? 1 : 0;

    // Update state
    state.coins += coins;
    state.totalCoinsEarned += coins;
    state.totalQuizzes++;
    if (this.bestStreak > state.bestStreak) state.bestStreak = this.bestStreak;

    if (passed && !this.isBoss) {
      const us = state.units[this.unitId] || { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };

      // DOUBLE-PASS: track consecutive passes per level
      const passKey = `level_${this.levelIdx}_passes`;
      const prevPasses = us[passKey] || 0;
      us[passKey] = prevPasses + 1;

      // Need 2 consecutive passes to complete a level
      const fullyPassed = us[passKey] >= 2;

      if (fullyPassed && this.levelIdx >= us.levelsCompleted) {
        us.levelsCompleted = this.levelIdx + 1;
        UI.toast('Level mastered! 2/2 passes complete.', 'success');
      } else if (!fullyPassed) {
        UI.toast(`Pass ${us[passKey]}/2 — pass again to master this level!`, 'coins');
      }

      Levels.setLevelStars(this.unitId, this.levelIdx, stars);
      state.units[this.unitId] = us;

      // Check if next unit should unlock
      const allLevels = Levels.getLevelsForUnit(this.unitId);
      const quizLevels = allLevels.filter(l => l.type === 'quiz');
      if (us.levelsCompleted >= quizLevels.length && us.bossDefeated) {
        this.unlockNextUnit();
      }
    } else if (!passed && !this.isBoss) {
      // Failed — reset consecutive pass count for this level
      const us = state.units[this.unitId] || { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
      us[`level_${this.levelIdx}_passes`] = 0;
      state.units[this.unitId] = us;
    }

    Save.save(state);
    // Show pass count in results
    const us2 = state.units[this.unitId] || {};
    const passCount = us2[`level_${this.levelIdx}_passes`] || 0;
    Results.show(this.score, total, pct, passed, coins, stars, this.bestStreak, this.unitId, this.levelIdx, this.isBoss, passCount);
  },

  calcCoins(pct) {
    let base = Math.round(pct * 0.5); // up to 50
    if (this.bestStreak >= 5) base += 10;
    if (this.bestStreak >= 10) base += 20;
    if (pct === 100) base += 25;
    return base;
  },

  unlockNextUnit() {
    const nextId = this.unitId + 1;
    if (nextId <= 10 && !state.units[nextId]?.unlocked) {
      if (!state.units[nextId]) state.units[nextId] = { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
      state.units[nextId].unlocked = true;
      UI.toast(`🔓 Unit ${nextId} unlocked!`, 'success');
    }
  },

  renderPowerups() {
    const pows = document.getElementById('q-powers');
    pows.innerHTML = `
      <button class="pw-btn" onclick="Quiz.usePower('5050')" id="pw-5050">50/50 <span class="pw-ct">${state.powerups['5050']||0}</span></button>
      <button class="pw-btn" onclick="Quiz.usePower('skip')" id="pw-skip">⏭ Skip <span class="pw-ct">${state.powerups.skip||0}</span></button>
      <button class="pw-btn" onclick="Quiz.usePower('hint')" id="pw-hint">💡 Hint <span class="pw-ct">${state.powerups.hint||0}</span></button>
    `;
  },

  usePower(type) {
    if (!state.powerups[type] || state.powerups[type] <= 0) {
      UI.toast('No powerups left! Buy more in the Shop.', 'error');
      return;
    }
    const q = this.questions[this.current];
    if (!q) return;
    const opts = document.querySelectorAll('#q-options .q-opt');
    const disabled = opts[0]?.classList.contains('disabled');
    if (disabled) return; // already answered

    state.powerups[type]--;
    Save.save(state);

    switch(type) {
      case '5050': {
        let removed = 0;
        opts.forEach(o => {
          if (o.textContent !== q.correct && removed < 2) {
            o.classList.add('dimmed');
            o.style.pointerEvents = 'none';
            removed++;
          }
        });
        UI.toast('50/50 used! Two wrong answers eliminated.', 'success');
        break;
      }
      case 'skip': {
        this.score++;
        this.streak++;
        if (this.streak > this.bestStreak) this.bestStreak = this.streak;
        this.answers.push({ question: q, correct: true, skipped: true });
        if (state.works[q.work.id]) state.works[q.work.id].timesCorrect++;
        state.totalCorrect++;
        this.current++;
        this.showQuestion();
        UI.toast('Question skipped! Counted as correct.', 'success');
        break;
      }
      case 'hint': {
        const fact = q.work.facts?.[0] || 'No hint available.';
        document.getElementById('q-feedback').textContent = '💡 Hint: ' + fact;
        document.getElementById('q-feedback').className = 'q-feedback';
        UI.toast('Hint revealed!', 'success');
        break;
      }
    }
    this.renderPowerups();
  },

  shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  pickRandom(arr, n) {
    const shuffled = this.shuffleArray(arr);
    return shuffled.slice(0, n);
  }
};

// ───── Boss Battle ─────
const Boss = {
  unitId: 0,
  hp: 100,
  maxHp: 100,
  lives: 3,
  questions: [],
  current: 0,
  score: 0,
  total: 0,
  timer: null,
  timeLeft: 20,
  streak: 0,
  bestStreak: 0,

  init(unitId) {
    this.unitId = unitId;
    this.hp = 100;
    this.maxHp = 100;
    this.lives = 3;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.current = 0;

    const unit = AP_ART_DATA.units.find(u => u.id === unitId);
    const works = AP_ART_DATA.works.filter(w => w.unit === unitId);
    // Boss gets 15 questions from all works in the unit
    this.questions = Quiz.generateQuestions(works).slice(0, 15);
    this.total = this.questions.length;

    UI.go('boss');
    // Use first unit work to resolve boss portrait
    const firstWork = works[0];
    if (firstWork) Img.resolve(firstWork).then(url => { if (url) document.getElementById('boss-img').src = url; });
    document.getElementById('boss-name').textContent = unit.bossName;
    document.getElementById('boss-subtitle').textContent = unit.bossTitle;
    document.getElementById('boss-hp').style.width = '100%';
    document.getElementById('boss-hp-text').textContent = `HP: ${this.hp}/${this.maxHp}`;
    document.getElementById('player-lives').textContent = '❤️'.repeat(this.lives);
    document.getElementById('boss-start-btn').classList.remove('hidden');
    document.getElementById('boss-quiz').classList.add('hidden');
    document.getElementById('boss-start-btn').style.display = '';
    const rules = document.querySelector('.boss-rules');
    if (rules) rules.style.display = '';
  },

  start() {
    document.getElementById('boss-start-btn').style.display = 'none';
    document.querySelector('.boss-rules').style.display = 'none';
    document.getElementById('boss-quiz').classList.remove('hidden');
    this.showQuestion();
  },

  showQuestion() {
    if (this.current >= this.questions.length || this.lives <= 0) {
      this.finish();
      return;
    }
    const q = this.questions[this.current];
    const img = document.getElementById('boss-q-img');
    Img.resolve(q.work).then(url => { if (url) img.src = url; });
    document.getElementById('boss-q-text').textContent = q.text;
    document.getElementById('boss-q-feedback').textContent = '';

    const opts = document.getElementById('boss-q-options');
    opts.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('div');
      btn.className = 'q-opt';
      btn.textContent = opt;
      btn.onclick = () => this.answer(opt, q);
      opts.appendChild(btn);
    });

    // Timer
    this.timeLeft = 20;
    document.getElementById('boss-timer').textContent = this.timeLeft;
    document.getElementById('boss-timer').className = 'boss-timer';
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.timeLeft--;
      document.getElementById('boss-timer').textContent = this.timeLeft;
      if (this.timeLeft <= 5) document.getElementById('boss-timer').className = 'boss-timer urgent';
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.answer(null, q); // time's up = wrong
      }
    }, 1000);
  },

  answer(chosen, q) {
    clearInterval(this.timer);
    const isCorrect = chosen === q.correct;
    const opts = document.querySelectorAll('#boss-q-options .q-opt');
    opts.forEach(o => {
      o.classList.add('disabled');
      if (o.textContent === q.correct) o.classList.add('correct');
      if (chosen && o.textContent === chosen && !isCorrect) o.classList.add('wrong');
    });

    const fb = document.getElementById('boss-q-feedback');
    if (isCorrect) {
      this.score++;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      // Damage = base + time bonus + streak bonus
      let damage = 7;
      if (this.timeLeft > 15) damage += 4;
      else if (this.timeLeft > 10) damage += 2;
      if (this.streak >= 3) damage += 3;
      this.hp = Math.max(0, this.hp - damage);
      document.getElementById('boss-hp').style.width = (this.hp / this.maxHp * 100) + '%';
      document.getElementById('boss-hp-text').textContent = `HP: ${this.hp}/${this.maxHp}`;
      fb.textContent = `✓ Hit for ${damage} damage!${this.streak > 1 ? ' 🔥' + this.streak : ''}`;
      fb.className = 'q-feedback good';
      // Animate boss damage
      document.querySelector('.boss-portrait').style.animation = 'damage .4s';
      setTimeout(() => document.querySelector('.boss-portrait').style.animation = '', 400);
      if (state.works[q.work.id]) {
        state.works[q.work.id].timesCorrect++;
        if (state.works[q.work.id].timesCorrect >= 5) state.works[q.work.id].mastered = true;
      }
      state.totalCorrect++;
    } else {
      this.streak = 0;
      this.lives--;
      document.getElementById('player-lives').textContent = '❤️'.repeat(Math.max(0, this.lives)) + '🖤'.repeat(3 - Math.max(0, this.lives));
      fb.innerHTML = `✗ Wrong!${chosen === null ? ' Time\'s up!' : ''} Answer: <b>${q.correct}</b>`;
      fb.className = 'q-feedback bad';
      // Shake screen
      document.getElementById('boss-arena').style.animation = 'shake .4s';
      setTimeout(() => document.getElementById('boss-arena').style.animation = '', 400);
      if (state.works[q.work.id]) state.works[q.work.id].timesWrong++;
      state.totalWrong++;
    }

    Save.save(state);

    // Next question after delay
    setTimeout(() => {
      this.current++;
      if (this.hp <= 0) {
        this.finish();
      } else {
        this.showQuestion();
      }
    }, 1500);
  },

  finish() {
    clearInterval(this.timer);
    const total = this.current;
    const pct = total > 0 ? Math.round((this.score / total) * 100) : 0;
    const defeated = this.hp <= 0 || (pct >= 80 && this.lives > 0);
    const coins = defeated ? 100 + this.score * 5 : Math.round(this.score * 2);

    state.coins += coins;
    state.totalCoinsEarned += coins;
    state.totalQuizzes++;
    if (this.bestStreak > state.bestStreak) state.bestStreak = this.bestStreak;

    if (defeated) {
      state.bossesDefeated++;
      const us = state.units[this.unitId] || { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
      us.bossDefeated = true;
      state.units[this.unitId] = us;
      // Unlock next unit
      const nextId = this.unitId + 1;
      if (nextId <= 10) {
        if (!state.units[nextId]) state.units[nextId] = { unlocked: true, levelsCompleted: 0, bossDefeated: false, stars: 0 };
        state.units[nextId].unlocked = true;
      }
      Confetti.fire();
    }

    Save.save(state);
    const stars = defeated ? 3 : 0;
    Results.show(this.score, total, pct, defeated, coins, stars, this.bestStreak, this.unitId, -1, true);
  }
};

// ───── Results ─────
const Results = {
  _unitId: 0, _levelIdx: 0, _isBoss: false,

  show(score, total, pct, passed, coins, stars, bestStreak, unitId, levelIdx, isBoss, passCount) {
    this._unitId = unitId;
    this._levelIdx = levelIdx;
    this._isBoss = isBoss;

    UI.go('results');

    // Double-pass display
    const passes = passCount || 0;
    const fullyMastered = passes >= 2;

    document.getElementById('res-title').textContent = isBoss
      ? (passed ? '👑 Boss Defeated!' : '💀 Defeated...')
      : (fullyMastered ? '🏆 Level Mastered!' : passed ? '🎉 Pass ' + passes + '/2!' : '😔 Not Quite...');

    document.getElementById('res-stars').innerHTML = isBoss
      ? (passed ? '👑👑👑' : '')
      : '★'.repeat(stars) + '☆'.repeat(3 - stars);
    document.getElementById('res-stars').style.color = 'var(--gold)';
    document.getElementById('res-stars').style.fontSize = '2.5rem';

    document.getElementById('res-grid').innerHTML = `
      <div class="res-item"><span class="res-label">Score</span><span class="res-val">${score}/${total}</span></div>
      <div class="res-item"><span class="res-label">Accuracy</span><span class="res-val ${pct >= 80 ? 'gold' : ''}">${pct}%</span></div>
      <div class="res-item"><span class="res-label">Best Streak</span><span class="res-val">${bestStreak} 🔥</span></div>
      <div class="res-item"><span class="res-label">Coins Earned</span><span class="res-val gold">+${coins} 🪙</span></div>
      ${!isBoss ? `<div class="res-item" style="grid-column:1/-1"><span class="res-label">Mastery Progress</span><span class="res-val">${passed ? (fullyMastered ? '✅ 2/2 Mastered!' : '⏳ ' + passes + '/2 — pass again to master') : '❌ 0/2 — need 2 consecutive passes'}</span></div>` : ''}
    `;

    const msg = document.getElementById('res-msg');
    if (passed) {
      msg.className = 'res-msg pass';
      if (fullyMastered) {
        msg.textContent = pct === 100
          ? '🏆 PERFECT MASTERY! You crushed it!'
          : '✅ Level mastered with 2 consecutive passes! Next level unlocked.';
        Confetti.fire();
      } else {
        msg.textContent = pct === 100
          ? '🏆 Perfect score! Pass one more time to master this level.'
          : pct >= 90
            ? '🌟 Great job! Pass again to fully master this level and unlock the next.'
            : '✅ 80%+ achieved! You need to pass this level one more time in a row to master it.';
      }
    } else {
      msg.className = 'res-msg fail';
      msg.textContent = `You need at least 80% to pass. You got ${pct}%. Consecutive pass streak reset — study up and try again!`;
    }

    // Only show Next button if fully mastered (2 passes)
    document.getElementById('res-next').style.display = fullyMastered && !isBoss ? '' : 'none';
  },

  retry() {
    if (this._isBoss) {
      Boss.init(this._unitId);
    } else {
      Quiz.start(this._unitId, this._levelIdx);
    }
  },

  next() {
    const levels = Levels.getLevelsForUnit(this._unitId);
    const nextIdx = this._levelIdx + 1;
    if (nextIdx < levels.length) {
      if (levels[nextIdx].type === 'boss') {
        Boss.init(this._unitId);
      } else {
        Quiz.start(this._unitId, nextIdx);
      }
    } else {
      UI.go('levels');
    }
  }
};

// ───── Shop ─────
const Shop = {
  items: [
    { id: '5050', name: '50/50 Eliminator', icon: '🎯', desc: 'Remove 2 wrong answers', price: 30, type: 'powerup' },
    { id: 'skip', name: 'Skip Token', icon: '⏭️', desc: 'Skip a question (counts as correct)', price: 50, type: 'powerup' },
    { id: 'hint', name: 'Hint Scroll', icon: '💡', desc: 'Reveals a key fact about the work', price: 25, type: 'powerup' },
    { id: 'time', name: 'Time Crystal', icon: '⏰', desc: '+15 seconds in boss battles', price: 35, type: 'powerup' },
    { id: '5050_5pack', name: '50/50 (5-Pack)', icon: '🎯', desc: '5x 50/50 Eliminators at a discount', price: 120, type: 'bundle', gives: { '5050': 5 } },
    { id: 'hint_5pack', name: 'Hint Scrolls (5-Pack)', icon: '💡', desc: '5x Hint Scrolls at a discount', price: 100, type: 'bundle', gives: { hint: 5 } },
    { id: 'starter_pack', name: 'Starter Pack', icon: '🎁', desc: '3x of each powerup', price: 200, type: 'bundle', gives: { '5050': 3, skip: 3, hint: 3, time: 3 } },
    { id: 'mega_pack', name: 'Mega Pack', icon: '👑', desc: '10x of each powerup!', price: 500, type: 'bundle', gives: { '5050': 10, skip: 10, hint: 10, time: 10 } }
  ],

  render() {
    UI.coins(document.getElementById('shop-coins'));
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = '';
    this.items.forEach(item => {
      const owned = item.type === 'powerup' ? (state.powerups[item.id] || 0) : null;
      const canAfford = state.coins >= item.price;
      const div = document.createElement('div');
      div.className = 'shop-item';
      div.innerHTML = `
        <div class="shop-icon">${item.icon}</div>
        <div class="shop-name">${item.name}</div>
        <div class="shop-desc">${item.desc}</div>
        <div class="shop-price">🪙 ${item.price}</div>
        <button class="btn ${canAfford ? 'primary' : 'secondary'}" ${!canAfford ? 'disabled' : ''} onclick="Shop.buy('${item.id}')">
          ${canAfford ? 'Buy' : 'Not enough coins'}
        </button>
        ${owned !== null ? `<div class="shop-owned">Owned: ${owned}</div>` : ''}
      `;
      grid.appendChild(div);
    });
  },

  buy(id) {
    const item = this.items.find(i => i.id === id);
    if (!item || state.coins < item.price) {
      UI.toast('Not enough coins!', 'error');
      return;
    }
    state.coins -= item.price;
    if (item.type === 'powerup') {
      state.powerups[id] = (state.powerups[id] || 0) + 1;
    } else if (item.type === 'bundle' && item.gives) {
      for (const [k, v] of Object.entries(item.gives)) {
        state.powerups[k] = (state.powerups[k] || 0) + v;
      }
    }
    Save.save(state);
    UI.toast(`Purchased ${item.name}!`, 'coins');
    this.render();
  }
};

// ───── Collection ─────
const Collection = {
  currentUnit: 'all',
  currentFilter: 'all',

  render() {
    // Unit tabs
    const tabs = document.getElementById('coll-tabs');
    tabs.innerHTML = `<button class="coll-tab ${this.currentUnit==='all'?'active':''}" onclick="Collection.setUnit('all')">All (250)</button>`;
    AP_ART_DATA.units.forEach(u => {
      const ct = AP_ART_DATA.works.filter(w => w.unit === u.id).length;
      tabs.innerHTML += `<button class="coll-tab ${this.currentUnit==u.id?'active':''}" onclick="Collection.setUnit(${u.id})">U${u.id} (${ct})</button>`;
    });
    this.renderGrid();
  },

  setUnit(u) { this.currentUnit = u; this.render(); },

  filter(f, btn) {
    this.currentFilter = f;
    document.querySelectorAll('.coll-filters .filt').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.renderGrid();
  },

  renderGrid() {
    let works = this.currentUnit === 'all'
      ? AP_ART_DATA.works
      : AP_ART_DATA.works.filter(w => w.unit === this.currentUnit);

    if (this.currentFilter === 'mastered') works = works.filter(w => state.works[w.id]?.mastered);
    else if (this.currentFilter === 'seen') works = works.filter(w => state.works[w.id]?.seen && !state.works[w.id]?.mastered);
    else if (this.currentFilter === 'unseen') works = works.filter(w => !state.works[w.id]?.seen);

    const grid = document.getElementById('coll-grid');
    grid.innerHTML = '';
    if (works.length === 0) {
      grid.innerHTML = '<p style="color:var(--text2);grid-column:1/-1;text-align:center;padding:40px">No works match this filter.</p>';
      return;
    }
    works.forEach(w => {
      const ws = state.works[w.id];
      const status = ws?.mastered ? 'mastered' : ws?.seen ? 'seen' : 'unseen';
      const mastery = ws ? Math.min(100, Math.round((ws.timesCorrect / 5) * 100)) : 0;
      const card = document.createElement('div');
      card.className = `coll-card ${status}`;
      card.onclick = () => this.showDetail(w);
      const imgId = `coll-img-${w.id}`;
      card.innerHTML = `
        <img id="${imgId}" src="" alt="${w.title}" loading="lazy" style="min-height:80px;background:var(--card2)">
        <div class="coll-card-info">
          <h4>${w.title}</h4>
          <p>${w.artist} · ${w.date}</p>
          <div class="mastery-mini"><div class="mastery-mini-fill" style="width:${mastery}%"></div></div>
        </div>
      `;
      grid.appendChild(card);
      // Lazy load image from Wikipedia API
      const cachedUrl = Img.cache[w.id];
      if (cachedUrl) {
        document.getElementById(imgId).src = cachedUrl;
      } else {
        Img.resolve(w).then(url => {
          const el = document.getElementById(imgId);
          if (el && url) el.src = url;
        });
      }
    });
  },

  showDetail(w) {
    const ws = state.works[w.id] || { timesCorrect: 0, timesWrong: 0, mastered: false };
    const mastery = Math.min(100, Math.round((ws.timesCorrect / 5) * 100));
    const unit = AP_ART_DATA.units.find(u => u.id === w.unit);
    UI.showModal(`
      <img id="modal-detail-img" src="" alt="${w.title}" style="min-height:150px;background:var(--card2)">
      <h2>${w.title}</h2>
      <p class="m-artist">${w.artist}</p>
      <p class="m-meta"><b>Date:</b> ${w.date}</p>
      <p class="m-meta"><b>Culture:</b> ${w.culture}</p>
      <p class="m-meta"><b>Medium:</b> ${w.medium}</p>
      <p class="m-meta"><b>Location:</b> ${w.location}</p>
      <p class="m-meta"><b>Dimensions:</b> ${w.dimensions}</p>
      <p class="m-meta"><b>Unit:</b> ${unit?.name || 'Unknown'}</p>
      <div class="m-facts">
        <h3>Key Facts</h3>
        <ul>${w.facts.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="m-mastery">
        <p>Mastery: <b>${mastery}%</b> ${ws.mastered ? '⭐ Mastered!' : `(${ws.timesCorrect}/5 correct)`}</p>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${mastery}%"></div></div>
        <p style="font-size:.8rem;color:var(--text2);margin-top:5px">Correct: ${ws.timesCorrect} | Wrong: ${ws.timesWrong}</p>
      </div>
    `);
    // Load image async into modal
    Img.resolve(w).then(url => {
      const el = document.getElementById('modal-detail-img');
      if (el && url) el.src = url;
    });
  }
};

// ───── Study Mode ─────
const Study = {
  works: [],
  idx: 0,
  flipped: false,

  init() {
    const sel = document.getElementById('study-unit-sel');
    sel.innerHTML = '<option value="all">All Units</option>';
    AP_ART_DATA.units.forEach(u => {
      sel.innerHTML += `<option value="${u.id}">Unit ${u.id}: ${u.name}</option>`;
    });
    this.loadUnit('all');
  },

  loadUnit(val) {
    this.works = val === 'all'
      ? [...AP_ART_DATA.works]
      : AP_ART_DATA.works.filter(w => w.unit == val);
    this.idx = 0;
    this.flipped = false;
    this.show();
  },

  show() {
    if (this.works.length === 0) return;
    const w = this.works[this.idx];
    document.getElementById('study-counter').textContent = `${this.idx + 1}/${this.works.length}`;

    const card = document.getElementById('study-card');
    card.classList.remove('flipped');
    this.flipped = false;

    const img = document.getElementById('study-img');
    const ph = document.getElementById('study-ph');
    Img.loadInto(img, ph, w);

    const unit = AP_ART_DATA.units.find(u => u.id === w.unit);
    document.getElementById('study-back').innerHTML = `
      <h3>${w.title}</h3>
      <p class="s-artist">${w.artist}</p>
      <p class="s-meta"><b>Date:</b> ${w.date}</p>
      <p class="s-meta"><b>Culture:</b> ${w.culture}</p>
      <p class="s-meta"><b>Medium:</b> ${w.medium}</p>
      <p class="s-meta"><b>Location:</b> ${w.location}</p>
      <p class="s-meta"><b>Dimensions:</b> ${w.dimensions}</p>
      <p class="s-meta"><b>Unit:</b> ${unit?.name || ''}</p>
      <ul class="s-facts">${w.facts.map(f => `<li>${f}</li>`).join('')}</ul>
    `;

    // Mark as seen
    if (!state.works[w.id]) state.works[w.id] = { seen: true, timesCorrect: 0, timesWrong: 0, mastered: false };
    state.works[w.id].seen = true;
    Save.save(state);
  },

  flip() {
    this.flipped = !this.flipped;
    document.getElementById('study-card').classList.toggle('flipped', this.flipped);
  },

  next() { if (this.idx < this.works.length - 1) { this.idx++; this.show(); } },
  prev() { if (this.idx > 0) { this.idx--; this.show(); } },
  shuffle() {
    this.works = Quiz.shuffleArray(this.works);
    this.idx = 0;
    this.show();
    UI.toast('Deck shuffled!', 'success');
  }
};

// ───── Stats ─────
const Stats = {
  render() {
    const mastered = Object.values(state.works).filter(w => w.mastered).length;
    const seen = Object.values(state.works).filter(w => w.seen).length;
    const totalQ = state.totalCorrect + state.totalWrong;
    const accuracy = totalQ > 0 ? Math.round((state.totalCorrect / totalQ) * 100) : 0;

    let unitsHtml = '';
    AP_ART_DATA.units.forEach(u => {
      const us = state.units[u.id] || {};
      const works = AP_ART_DATA.works.filter(w => w.unit === u.id);
      const m = works.filter(w => state.works[w.id]?.mastered).length;
      unitsHtml += `
        <div class="stat-unit-row">
          <span>U${u.id}: ${u.name}</span>
          <span>${m}/${works.length} ${us.bossDefeated ? '👑' : us.unlocked ? '🔓' : '🔒'}</span>
        </div>
      `;
    });

    document.getElementById('stats-body').innerHTML = `
      <div class="stat-card">
        <h3>Overall Progress</h3>
        <div class="stat-big gold">${mastered}/250</div>
        <div class="stat-sub">Works Mastered</div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${mastered/250*100}%"></div></div>
      </div>
      <div class="stat-card">
        <h3>Works Seen</h3>
        <div class="stat-big">${seen}/250</div>
        <div class="stat-sub">${250 - seen} remaining</div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${seen/250*100}%"></div></div>
      </div>
      <div class="stat-card">
        <h3>Accuracy</h3>
        <div class="stat-big ${accuracy >= 80 ? 'gold' : ''}">${accuracy}%</div>
        <div class="stat-sub">${state.totalCorrect} correct / ${state.totalWrong} wrong</div>
      </div>
      <div class="stat-card">
        <h3>Coins</h3>
        <div class="stat-big gold">🪙 ${state.coins}</div>
        <div class="stat-sub">${state.totalCoinsEarned} total earned</div>
      </div>
      <div class="stat-card">
        <h3>Quizzes Completed</h3>
        <div class="stat-big">${state.totalQuizzes}</div>
        <div class="stat-sub">Best Streak: ${state.bestStreak} 🔥</div>
      </div>
      <div class="stat-card">
        <h3>Bosses Defeated</h3>
        <div class="stat-big">${state.bossesDefeated}/10</div>
        <div class="stat-sub">${10 - state.bossesDefeated} remaining</div>
      </div>
      <div class="stat-card">
        <h3>Stars Earned</h3>
        <div class="stat-big gold">⭐ ${state.stars}</div>
      </div>
      <div class="stat-card">
        <h3>Powerups</h3>
        <div class="stat-sub">50/50: ${state.powerups['5050']||0} | Skip: ${state.powerups.skip||0} | Hint: ${state.powerups.hint||0} | Time: ${state.powerups.time||0}</div>
      </div>
      <div class="stat-card" style="grid-column:1/-1">
        <h3>Unit Progress</h3>
        ${unitsHtml}
      </div>
      <div class="stat-card" style="grid-column:1/-1;text-align:center">
        <button class="btn danger" onclick="if(confirm('Reset ALL progress? This cannot be undone!'))Save.reset()">🗑 Reset All Progress</button>
      </div>
    `;
  }
};

// ───── Confetti ─────
const Confetti = {
  fire() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#e94560', '#ffd700', '#2ecc71', '#3498db', '#9b59b6', '#f39c12', '#1abc9c'];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        life: 1
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;
        p.vy += 0.05;
        if (frame > 60) p.life -= 0.01;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (alive && frame < 300) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    animate();
  }
};

// ───── Init ─────
// Callable by paywall.js after access check
function initGame() {
  Img.init();

  const bar = document.getElementById('load-bar');
  const text = document.getElementById('load-text');
  if (!bar) return; // not on loading screen
  const messages = [
    'Loading masterpieces...',
    'Cataloguing 250 works...',
    'Preparing quizzes...',
    'Summoning bosses...',
    'Stocking the shop...',
    'Ready!'
  ];
  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.random() * 20 + 5;
    if (progress > 100) progress = 100;
    bar.style.width = progress + '%';
    text.textContent = messages[Math.min(Math.floor(progress / 20), messages.length - 1)];
    if (progress >= 100) {
      clearInterval(loadInterval);
      setTimeout(() => UI.go('menu'), 500);
    }
  }, 200);
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  const studyActive = document.getElementById('screen-study')?.classList.contains('active');
  if (studyActive) {
    if (e.key === 'ArrowLeft') Study.prev();
    if (e.key === 'ArrowRight') Study.next();
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); Study.flip(); }
  }
  const quizActive = document.getElementById('screen-quiz')?.classList.contains('active');
  if (quizActive) {
    if (e.key >= '1' && e.key <= '4') {
      const opts = document.querySelectorAll('#q-options .q-opt:not(.disabled)');
      const idx = parseInt(e.key) - 1;
      if (opts[idx]) opts[idx].click();
    }
  }
});
