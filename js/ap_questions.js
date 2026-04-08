// AP Art History style analysis questions — College Board aligned
// These are higher-order thinking questions about context, function, symbolism, and artistic choices

var AP_QUESTIONS = {
  // Format: workId -> array of {text, correct, wrongs} objects
  // Each question tests AP exam skills: visual analysis, contextual analysis, comparison

  // ===== UNIT 1: Global Prehistory =====
  1: [
    {text:"The therianthropic figure on the Apollo 11 stones most likely served what purpose?", correct:"Ritualistic or shamanistic spiritual practice", wrongs:["Decoration of a royal tomb","Recording a historical battle","Teaching children about animals"]},
    {text:"What does the Apollo 11 stones' combination of human and animal features suggest about the beliefs of its creators?", correct:"A spiritual connection between humans and the animal world", wrongs:["A desire to create realistic portraits","An attempt to document local wildlife","A political statement about tribal hierarchy"]},
  ],
  2: [
    {text:"The twisted perspective used to depict the bulls at Lascaux suggests the artists prioritized:", correct:"Showing the most recognizable features of each animal", wrongs:["Mathematical accuracy","Creating a sense of depth","Documenting the exact appearance of the animals"]},
    {text:"Which theory best explains the purpose of the Lascaux cave paintings?", correct:"Sympathetic magic to ensure successful hunts", wrongs:["Purely decorative wall covering","Recording property ownership","Training new artists in painting techniques"]},
    {text:"The inaccessible location of many Lascaux paintings deep within the cave suggests:", correct:"The paintings had ritualistic or ceremonial significance", wrongs:["The artists wanted to protect them from weather","They were practice works hidden from the public","The cave was used as a permanent dwelling"]},
  ],
  3: [
    {text:"The camelid sacrum was modified to resemble a canine skull, suggesting early Americans:", correct:"Recognized and creatively exploited natural forms in found objects", wrongs:["Had advanced stone carving technology","Worshipped dogs as sacred animals","Used it as a hunting decoy"]},
  ],
  4: [
    {text:"The Running Horned Woman at Tassili n'Ajjer provides evidence that the Sahara region:", correct:"Was once fertile enough to support human communities", wrongs:["Was always a desert","Was colonized by Mediterranean peoples","Had contact with ancient Egypt"]},
    {text:"The horns and body posture of the Running Horned Woman most likely indicate:", correct:"A ritualistic or ceremonial role, possibly related to fertility", wrongs:["She was a warrior queen","She was being punished","She was running from a predator"]},
  ],
  5: [
    {text:"The repeated ibex motifs on the Beaker from Susa suggest:", correct:"The ibex held symbolic or spiritual significance in the culture", wrongs:["The potter was practicing drawing ibexes","Ibexes were the only local animals","The beaker was mass-produced with a stamp"]},
  ],
  6: [
    {text:"The abstract, geometric form of the Anthropomorphic stele suggests its creators:", correct:"Prioritized symbolic representation over naturalistic depiction", wrongs:["Lacked the skill for realistic sculpture","Were influenced by Greek art","Created it as an unfinished work"]},
  ],
  7: [
    {text:"The jade cong's combination of a circular interior and square exterior symbolizes:", correct:"The Liangzhu belief in the connection between heaven (circle) and earth (square)", wrongs:["The four seasons of the year","A container for storing grain","The artist's personal signature style"]},
    {text:"The labor-intensive process of carving jade without metal tools indicates the cong was:", correct:"A high-status ritual object with deep cultural significance", wrongs:["A practical household item","A children's toy","Made by enslaved workers"]},
  ],
  8: [
    {text:"The alignment of Stonehenge with the solstices suggests its primary function was:", correct:"Astronomical observation and ritual marking of seasonal cycles", wrongs:["Purely aesthetic landscape decoration","A fortification against invaders","A marketplace for trading goods"]},
    {text:"The transport of bluestones from Wales (150+ miles away) to Stonehenge indicates:", correct:"A highly organized society capable of monumental collective effort", wrongs:["The stones were moved by glaciers naturally","A small group of skilled workers built it alone","The builders had wheeled vehicles"]},
  ],
  9: [
    {text:"The Ambum Stone's function as both a mortar/pestle and sculptural form suggests:", correct:"Practical objects in this culture could also carry spiritual significance", wrongs:["The sculpture was created accidentally","It was purely decorative","It was a failed attempt at realistic sculpture"]},
  ],
  10: [
    {text:"Tlatilco figurines' emphasis on dual faces and wide hips most likely relates to:", correct:"Concepts of duality, fertility, and the cycle of life and death", wrongs:["Portraits of specific individuals","Medical documentation of deformities","Children's playthings"]},
  ],
  11: [
    {text:"The widespread distribution of Lapita pottery fragments across the Pacific provides evidence of:", correct:"Extensive maritime trade networks and migration patterns", wrongs:["A single centralized empire","Independent invention in multiple locations","European contact before Columbus"]},
  ],

  // ===== UNIT 2: Ancient Mediterranean =====
  13: [
    {text:"On the Palette of King Narmer, the larger scale of Narmer relative to other figures demonstrates:", correct:"Hieratic scale — size indicates relative importance or power", wrongs:["Narmer was physically taller than others","The artist made a proportional error","Perspective drawing techniques"]},
    {text:"The Palette of Narmer's depiction of the king wearing both Upper and Lower Egyptian crowns signifies:", correct:"The political unification of Upper and Lower Egypt", wrongs:["Narmer's interest in fashion","A religious ceremony","The changing of seasons"]},
  ],
  15: [
    {text:"The Seated Scribe's realistic, individualized features contrast with idealized royal sculptures because:", correct:"Scribes were not bound by the conventions required for depicting pharaohs", wrongs:["The sculptor was less skilled","Scribes were considered ugly","It was an unfinished work"]},
    {text:"The Seated Scribe's alert posture and inlaid crystal eyes convey:", correct:"Attentiveness and readiness to record — emphasizing the scribe's vital role", wrongs:["That the figure is frightened","That it represents a god","That it was used as a mannequin"]},
  ],
  16: [
    {text:"The two sides of the Standard of Ur (War and Peace) together communicate:", correct:"The complementary roles of military power and civic prosperity in Sumerian society", wrongs:["Two different historical events","The work of two different artists","A before-and-after narrative"]},
    {text:"The registers (horizontal bands) on the Standard of Ur organize the narrative to show:", correct:"Social hierarchy, with the most important figures in the largest register", wrongs:["A timeline from top to bottom","Random decorative patterns","Different geographic locations"]},
  ],
  17: [
    {text:"The massive scale of the Great Pyramids at Giza primarily served to:", correct:"Demonstrate the pharaoh's divine power and ensure a successful afterlife", wrongs:["Store grain for famine years","House the living pharaoh's family","Function as astronomical observatories"]},
  ],
  19: [
    {text:"The Code of Hammurabi's placement in a public location served to:", correct:"Legitimize royal authority by demonstrating the king's role as divinely appointed lawgiver", wrongs:["Allow citizens to memorize all the laws","Decorate the city center","Teach children to read"]},
    {text:"The relief at the top of the Code of Hammurabi showing Hammurabi receiving authority from Shamash demonstrates:", correct:"Divine sanction of the king's legal authority", wrongs:["That Hammurabi invented the laws himself","A scene of Hammurabi's coronation","Hammurabi worshipping the sun"]},
  ],
  34: [
    {text:"Polykleitos' Doryphoros embodies the Classical Greek concept of:", correct:"An ideal mathematical system of proportions (the Canon) representing perfect beauty", wrongs:["A realistic portrait of a specific athlete","Emotional expressionism","The horrors of war"]},
    {text:"The contrapposto stance of the Doryphoros creates:", correct:"A sense of naturalistic movement and life through weight shift", wrongs:["Perfect bilateral symmetry","A rigid, frontal pose","An unstable, falling posture"]},
  ],
  35: [
    {text:"The Parthenon's use of optical refinements (entasis, stylobate curvature) demonstrates:", correct:"Greek architects' sophisticated understanding of visual perception", wrongs:["Construction errors corrected over time","Earthquake damage","A style borrowed from Egypt"]},
  ],
  37: [
    {text:"The Winged Victory of Samothrace's dynamic drapery and forward-leaning pose exemplify:", correct:"The Hellenistic emphasis on dramatic movement, emotion, and theatrical effect", wrongs:["Classical restraint and balance","Archaic stiffness","Roman engineering"]},
  ],
  43: [
    {text:"Augustus of Primaporta borrows the contrapposto pose from Classical Greek sculpture to:", correct:"Associate Augustus with the idealized virtues of Classical Greece", wrongs:["Show Augustus was physically Greek","Demonstrate Roman inability to innovate","Create an unflattering portrait"]},
    {text:"The bare feet of Augustus in the Primaporta statue suggest:", correct:"Augustus is being depicted as a divine or heroic figure", wrongs:["He was too poor for sandals","It was a realistic portrait","Roman soldiers never wore shoes"]},
  ],
  46: [
    {text:"The Pantheon's oculus (open hole in the dome) symbolizes:", correct:"The connection between the earthly temple interior and the divine realm of the heavens", wrongs:["A construction error they couldn't fix","Ventilation for cooking fires","A sundial mechanism"]},
    {text:"The Pantheon's unreinforced concrete dome remained the world's largest for over 1,300 years, demonstrating:", correct:"Roman mastery of engineering and innovative use of materials", wrongs:["That nobody attempted to build domes after Rome fell","Greek architectural influence","Egyptian construction techniques"]},
  ],

  // ===== UNIT 3: Early Europe and Colonial Americas =====
  52: [
    {text:"Hagia Sophia's massive dome resting on pendentives was revolutionary because it:", correct:"Created a vast, light-filled interior that symbolized heaven descending to earth", wrongs:["Was purely decorative","Copied Roman temple design exactly","Was designed as a defensive fortress"]},
    {text:"The conversion of Hagia Sophia from church to mosque to museum reflects:", correct:"The building's layered cultural history under Byzantine, Ottoman, and Turkish Republican rule", wrongs:["That it was poorly constructed","That nobody wanted to maintain it","Only aesthetic changes"]},
  ],
  60: [
    {text:"The Bayeux Tapestry's narrative format served primarily as:", correct:"Political propaganda legitimizing William the Conqueror's claim to England", wrongs:["A purely decorative wall hanging","An objective historical document","A religious devotional object"]},
  ],
  65: [
    {text:"Giotto's Lamentation in the Arena Chapel broke with Byzantine tradition by:", correct:"Depicting human emotion and spatial depth, creating a more naturalistic scene", wrongs:["Using only gold backgrounds","Making all figures the same size","Avoiding religious subject matter"]},
    {text:"The diagonal composition of Giotto's Lamentation directs the viewer's eye:", correct:"Down toward Christ's body, emphasizing the grief and humanity of the scene", wrongs:["Upward toward heaven","In a circular pattern","Away from the main figures"]},
  ],
  71: [
    {text:"The convex mirror in the Arnolfini Portrait by van Eyck most likely serves to:", correct:"Expand the pictorial space and potentially include the artist as witness", wrongs:["Show the couple's wealth","Correct the room's proportions","Function as a religious symbol only"]},
    {text:"Van Eyck's meticulous rendering of textures in the Arnolfini Portrait demonstrates:", correct:"The new capabilities of oil painting and Northern Renaissance attention to detail", wrongs:["Italian Renaissance influence","A rejection of symbolism","Mass production techniques"]},
  ],
  73: [
    {text:"Botticelli's Birth of Venus drew on Classical mythology to:", correct:"Celebrate humanist ideals linking pagan beauty with Christian spiritual love under Medici patronage", wrongs:["Reject Christianity entirely","Document an actual historical event","Criticize the Catholic Church"]},
  ],
  76: [
    {text:"Michelangelo's Sistine Chapel ceiling program moves from the Creation to the Flood to convey:", correct:"Humanity's need for salvation — setting up the theological message of the Last Judgment on the altar wall", wrongs:["A random collection of Bible stories","The artist's personal autobiography","A political message about the Medici"]},
  ],
  77: [
    {text:"Raphael's School of Athens uses linear perspective converging on Plato and Aristotle to:", correct:"Visually emphasize the central importance of philosophy and classical learning in Renaissance humanism", wrongs:["Show the building's actual architecture","Create a sense of chaos","Hide the vanishing point"]},
  ],

  // ===== UNIT 4: Later Europe and Americas =====
  83: [
    {text:"Caravaggio's dramatic use of tenebrism (extreme light/dark contrast) in the Calling of Saint Matthew serves to:", correct:"Spotlight the divine moment of calling, making the spiritual dramatically visible", wrongs:["Save money on paint","Show the room had few windows","Copy Leonardo da Vinci's style"]},
    {text:"Matthew's gesture of pointing to himself in Caravaggio's painting conveys:", correct:"The surprise and disbelief of being chosen — a deeply human response to divine calling", wrongs:["That he is refusing the call","That he is pointing at someone else","A Roman military salute"]},
  ],
  87: [
    {text:"Bernini's Ecstasy of Saint Teresa blurs the boundary between:", correct:"Spiritual rapture and physical/sensual experience, characteristic of Baroque theatricality", wrongs:["Painting and sculpture","Greek and Roman styles","Public and private space"]},
  ],
  88: [
    {text:"In Las Meninas, Velázquez includes himself painting at a large canvas to:", correct:"Question the relationship between artist, subject, and viewer — and elevate the status of painting", wrongs:["Show off his self-portrait skills","Fill empty space in the composition","Record his working conditions"]},
    {text:"The mirror reflection of the king and queen in the background of Las Meninas suggests:", correct:"The royal couple occupies the viewer's position, collapsing the boundary between painted and real space", wrongs:["They are hiding from the Infanta","The mirror is purely decorative","Velázquez forgot to paint them in the foreground"]},
  ],
  100: [
    {text:"David's Oath of the Horatii promotes:", correct:"Neoclassical ideals of civic duty, self-sacrifice, and rational stoicism over emotion", wrongs:["Romantic individualism","Religious devotion","Aristocratic leisure"]},
    {text:"The rigid, geometric composition and sharp lines in the Oath of the Horatii contrast with the curving, emotional women to show:", correct:"The Enlightenment dichotomy between masculine reason/duty and feminine emotion", wrongs:["That David couldn't draw curves","A scene of domestic violence","That the men are statues"]},
  ],
  103: [
    {text:"Delacroix's Liberty Leading the People uses the allegorical figure of Marianne to:", correct:"Personify the ideals of the French Republic — liberty, equality, fraternity — inspiring revolutionary action", wrongs:["Depict a specific historical woman","Advertise a theatrical production","Copy a Classical Greek statue"]},
  ],
  107: [
    {text:"Goya's Third of May, 1808 broke with traditional history painting by:", correct:"Depicting anonymous civilians as martyrs rather than glorifying military heroes", wrongs:["Using only black and white","Following strict Academic rules","Celebrating the French victory"]},
    {text:"The Christ-like pose of the central figure with arms outstretched in the Third of May communicates:", correct:"The innocence and martyrdom of the Spanish people under French occupation", wrongs:["That the figure is surrendering willingly","A specific biblical scene","That the man is a priest"]},
  ],
  108: [
    {text:"Manet's Olympia shocked audiences because:", correct:"The nude woman's direct, confrontational gaze acknowledged her role as a sex worker, challenging idealized nudes", wrongs:["It was poorly painted","Nudes were illegal in France","It was too small"]},
  ],
  113: [
    {text:"Van Gogh's swirling, energetic brushstrokes in The Starry Night convey:", correct:"The artist's intense emotional and psychological experience of the natural world", wrongs:["A photographic record of the night sky","Scientific astronomical accuracy","The influence of Japanese printmaking"]},
  ],
  119: [
    {text:"Picasso's Les Demoiselles d'Avignon incorporated African mask-like faces to:", correct:"Challenge Western conventions of beauty and perspective by drawing on non-European artistic traditions", wrongs:["Create accurate portraits of African women","Copy museum displays exactly","Make the painting look unfinished"]},
    {text:"The fractured, angular forms in Les Demoiselles d'Avignon represent a radical break from:", correct:"Traditional single-point perspective, showing multiple viewpoints simultaneously", wrongs:["The use of oil paint","Painting on canvas","Depicting the human figure"]},
  ],
  126: [
    {text:"Mondrian's Composition with Red, Blue, and Yellow reduces painting to fundamental elements because he believed:", correct:"Universal harmony could be expressed through the balance of primary colors, black lines, and white space", wrongs:["He couldn't afford more colors","Realistic painting was too difficult","He was color-blind"]},
  ],
  128: [
    {text:"Frank Lloyd Wright's Fallingwater exemplifies his concept of organic architecture by:", correct:"Integrating the building with its natural landscape — cantilevered over the waterfall rather than beside it", wrongs:["Using only natural materials","Copying a Japanese temple","Making the building invisible"]},
  ],
  133: [
    {text:"Duchamp's Fountain (a urinal signed 'R. Mutt') challenged the art world by asking:", correct:"Whether the artist's concept and choice — not craftsmanship — could define something as art", wrongs:["Whether plumbing was art","Whether museums should have better bathrooms","Whether pseudonyms should be legal"]},
  ],

  // ===== UNITS 5-10 selected key works =====
  145: [
    {text:"Machu Picchu's precisely fitted stone walls without mortar demonstrate:", correct:"The Inca mastery of ashlar stonework and engineering in challenging mountain terrain", wrongs:["The use of alien technology","That the site was never completed","Roman architectural influence"]},
  ],
  153: [
    {text:"The conical tower at Great Zimbabwe served primarily as:", correct:"A symbol of royal authority and the power of the ruling dynasty", wrongs:["A defensive watchtower","A grain storage silo","An astronomical observatory"]},
  ],
  157: [
    {text:"The nails driven into Nkisi Nkondi power figures served to:", correct:"Activate the spiritual power within — each nail representing an oath, agreement, or petition", wrongs:["Destroy the figure","Decorate it","Hold the pieces together"]},
  ],
  177: [
    {text:"The Taj Mahal's symmetrical design and use of white marble and semiprecious stones symbolize:", correct:"Eternal paradise and Shah Jahan's undying love, blending Islamic garden symbolism with Mughal grandeur", wrongs:["Military victory","Economic prosperity","Scientific achievement"]},
  ],
  190: [
    {text:"Angkor Wat's orientation to the west, unusual for Hindu temples, suggests:", correct:"The temple's funerary function as a symbolic bridge to the afterlife for King Suryavarman II", wrongs:["A construction error","Alignment with trade routes","Buddhist influence"]},
  ],
  193: [
    {text:"The ring of fire surrounding Shiva Nataraja symbolizes:", correct:"The cosmic cycle of creation and destruction — samsara, the continuous cycle of the universe", wrongs:["A cooking fire","The sun","A decorative frame"]},
    {text:"Shiva's raised foot in the Nataraja represents:", correct:"Liberation (moksha) from the cycle of rebirth for those who worship", wrongs:["A dance step with no meaning","That the figure is falling","Military victory"]},
  ],
  201: [
    {text:"Hokusai's Great Wave uses the monumental wave to:", correct:"Contrast the power of nature against human vulnerability, reflecting Edo-period interest in the natural world", wrongs:["Document an actual tsunami","Advertise boat travel","Copy a Chinese painting"]},
  ],
  214: [
    {text:"The Moai statues of Rapa Nui face inland rather than out to sea because:", correct:"They represent deified ancestors watching over and protecting the living community", wrongs:["The builders didn't know the ocean was there","They were moved by Europeans","It was easier to carve facing that direction"]},
  ],
  226: [
    {text:"Maya Lin's Vietnam Veterans Memorial uses a polished black granite wall to:", correct:"Create a reflective surface where visitors see themselves among the names, connecting past and present", wrongs:["Save money on construction","Match the color of military uniforms","Block sunlight"]},
    {text:"The V-shaped design sinking into the earth symbolizes:", correct:"A wound or scar in the landscape, representing the nation's painful division over the war", wrongs:["The letter V for Victory","A river valley","An arrow pointing north"]},
  ],
  241: [
    {text:"El Anatsui creates his monumental cloth-like sculptures from recycled bottle caps to:", correct:"Comment on consumption, waste, trade, and the history of exchange between Africa and Europe", wrongs:["Because he can't afford canvas","As a recycling advertisement","To make the sculptures lighter"]},
  ],
  247: [
    {text:"Ai Weiwei's Sunflower Seeds — millions of hand-painted porcelain seeds — comments on:", correct:"Mass production vs. individual labor, Chinese manufacturing, and the relationship between individual and collective", wrongs:["His love of gardening","The price of sunflower oil","A children's counting exercise"]},
  ],
};
