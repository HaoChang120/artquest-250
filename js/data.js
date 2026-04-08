const AP_ART_DATA = {
  units: [
    {
      id: 1,
      name: "Global Prehistory",
      region: "Global",
      dateRange: "30,000-500 BCE",
      description: "The earliest artistic expressions of humanity, from cave paintings to megalithic structures across the globe.",
      bossName: "The Primordial Shaman",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lascaux_painting.jpg/400px-Lascaux_painting.jpg",
      bossTitle: "Guardian of the First Marks"
    },
    {
      id: 2,
      name: "Ancient Mediterranean",
      region: "Near East, Egypt, Greece, Rome",
      dateRange: "3500 BCE-300 CE",
      description: "Art and architecture from the great civilizations of Mesopotamia, Egypt, Greece, and Rome.",
      bossName: "The Pharaoh-Imperator",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/400px-Kheops-Pyramid.jpg",
      bossTitle: "Sovereign of Columns and Colossi"
    },
    {
      id: 3,
      name: "Early Europe and Colonial Americas",
      region: "Europe and Americas",
      dateRange: "200-1750 CE",
      description: "From Early Christian and Byzantine art through the Renaissance and Baroque periods, including colonial American works.",
      bossName: "The Cathedral Architect",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sistine_Chapel_ceiling_photo_2.jpg/400px-Sistine_Chapel_ceiling_photo_2.jpg",
      bossTitle: "Master of Vaults and Visions"
    },
    {
      id: 4,
      name: "Later Europe and Americas",
      region: "Europe and Americas",
      dateRange: "1750-1980 CE",
      description: "From Neoclassicism through Modernism, including movements like Impressionism, Cubism, and Abstract Expressionism.",
      bossName: "The Avant-Garde Provocateur",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      bossTitle: "Breaker of Traditions"
    },
    {
      id: 5,
      name: "Indigenous Americas",
      region: "The Americas",
      dateRange: "1000 BCE-1980 CE",
      description: "Art from the diverse indigenous cultures of North, Central, and South America.",
      bossName: "The Feathered Serpent",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Chichen_Itza_3.jpg/400px-Chichen_Itza_3.jpg",
      bossTitle: "Keeper of Sacred Geometry"
    },
    {
      id: 6,
      name: "Africa",
      region: "Sub-Saharan Africa",
      dateRange: "1100-1980 CE",
      description: "Art from the diverse cultures and kingdoms of the African continent.",
      bossName: "The Oba of Bronze",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Benin_bronze_head.jpg/400px-Benin_bronze_head.jpg",
      bossTitle: "Ruler of the Lost-Wax Kingdom"
    },
    {
      id: 7,
      name: "West and Central Asia",
      region: "West and Central Asia",
      dateRange: "500 BCE-1980 CE",
      description: "Art and architecture of Islamic civilizations and the broader West and Central Asian region.",
      bossName: "The Grand Vizier of Light",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Taj_Mahal_2012.jpg/400px-Taj_Mahal_2012.jpg",
      bossTitle: "Weaver of Infinite Patterns"
    },
    {
      id: 8,
      name: "South, East, and Southeast Asia",
      region: "South, East, and Southeast Asia",
      dateRange: "300 BCE-1980 CE",
      description: "Art and architecture from the great civilizations of India, China, Japan, Korea, and Southeast Asia.",
      bossName: "The Enlightened Emperor",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Longmen-grottoes-702702702702.jpg/400px-Longmen-grottoes-702702702702.jpg",
      bossTitle: "Master of the Middle Path"
    },
    {
      id: 9,
      name: "The Pacific",
      region: "Oceania and Pacific Islands",
      dateRange: "700-1980 CE",
      description: "Art from the indigenous peoples of Australia, Melanesia, Micronesia, and Polynesia.",
      bossName: "The Navigator of Stars",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Moai_Rano_raraku.jpg/400px-Moai_Rano_raraku.jpg",
      bossTitle: "Voice of the Ancestor Spirits"
    },
    {
      id: 10,
      name: "Global Contemporary",
      region: "Global",
      dateRange: "1980-Present",
      description: "Contemporary art from around the world, addressing global themes of identity, politics, and technology.",
      bossName: "The Conceptual Oracle",
      bossImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Guggenheim_museum_Bilbao_HDR-image.jpg/400px-Guggenheim_museum_Bilbao_HDR-image.jpg",
      bossTitle: "Architect of New Realities"
    }
  ],
  works: [
    // ===== UNIT 1: Global Prehistory (works 1-11) =====
    {
      id: 1,
      title: "Apollo 11 stones",
      artist: "Unknown",
      date: "c. 25,500-25,300 BCE",
      culture: "San people, Southern Africa",
      medium: "Charcoal on stone",
      location: "State Museum of Namibia, Windhoek, Namibia",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Apollo_11_Cave_Stone_2.jpg/400px-Apollo_11_Cave_Stone_2.jpg",
      facts: [
        "Among the oldest known examples of figurative art in Africa.",
        "Discovered in the Apollo 11 Cave in Namibia, named after the 1969 moon landing that occurred during the excavation.",
        "Depicts a therianthrope—a figure that is part human and part animal."
      ],
      dimensions: "Approximately 12 x 14 cm"
    },
    {
      id: 2,
      title: "Great Hall of the Bulls",
      artist: "Unknown",
      date: "c. 15,000-13,000 BCE",
      culture: "Paleolithic Europe",
      medium: "Rock painting",
      location: "Lascaux, Dordogne, France",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lascaux_painting.jpg/400px-Lascaux_painting.jpg",
      facts: [
        "Contains some of the most famous examples of Paleolithic cave art with over 600 painted images.",
        "The hall features four large black bulls or aurochs, the largest being 5.2 meters long.",
        "The cave was discovered in 1940 by four teenagers and closed to the public in 1963 to preserve the art."
      ],
      dimensions: "Site"
    },
    {
      id: 3,
      title: "Camelid sacrum in the shape of a canine",
      artist: "Unknown",
      date: "c. 14,000-7000 BCE",
      culture: "Tequixquiac, Central Mexico",
      medium: "Bone",
      location: "Museo Nacional de Antropología, Mexico City",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sacro_de_Tequixquiac.jpg/400px-Sacro_de_Tequixquiac.jpg",
      facts: [
        "A camelid sacrum bone that was carved to resemble the head of a canine or coyote.",
        "One of the earliest known works of art in the Americas.",
        "Found in Tequixquiac, Mexico in 1870 during drainage works near Mexico City."
      ],
      dimensions: "Approximately 20 cm long"
    },
    {
      id: 4,
      title: "Running horned woman",
      artist: "Unknown",
      date: "c. 6000-4000 BCE",
      culture: "Tassili n'Ajjer, Algeria",
      medium: "Pigment on rock",
      location: "Tassili n'Ajjer, Algeria (in situ)",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tassili_ladies.jpg/400px-Tassili_ladies.jpg",
      facts: [
        "Part of a vast collection of prehistoric rock art in the Sahara Desert, showing that the region was once lush and green.",
        "Depicts a female figure in motion with horns or a horned headdress, possibly in a ritual dance.",
        "The Tassili n'Ajjer site contains over 15,000 rock engravings and paintings and is a UNESCO World Heritage Site."
      ],
      dimensions: "Site"
    },
    {
      id: 5,
      title: "Beaker with ibex motifs",
      artist: "Unknown",
      date: "c. 4200-3500 BCE",
      culture: "Susa, Iran",
      medium: "Painted terra cotta",
      location: "Musée du Louvre, Paris",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Beaker_ibex_Louvre_Sb3174.jpg/400px-Beaker_ibex_Louvre_Sb3174.jpg",
      facts: [
        "Features highly stylized ibex (wild goat) motifs with enormous curved horns arranged in a geometric pattern.",
        "Found at the ancient city of Susa in southwestern Iran, one of the oldest known settlements in the world.",
        "Demonstrates the Neolithic transition from naturalistic to abstract and geometric representations of animals."
      ],
      dimensions: "28.3 cm high"
    },
    {
      id: 6,
      title: "Anthropomorphic stele",
      artist: "Unknown",
      date: "4th millennium BCE",
      culture: "Arabian Peninsula",
      medium: "Sandstone",
      location: "National Museum, Riyadh, Saudi Arabia",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Anthropomorphic_stele_-_Al-Ula.jpg/400px-Anthropomorphic_stele_-_Al-Ula.jpg",
      facts: [
        "One of several stelae found near Ha'il in present-day Saudi Arabia, carved with simplified human features.",
        "Features a stylized human form with minimal detail—raised ridges suggest a nose, eyes, and possibly clothing or a belt.",
        "These stelae may have served as grave markers or representations of deities or ancestors."
      ],
      dimensions: "Approximately 92 cm high"
    },
    {
      id: 7,
      title: "Jade cong",
      artist: "Unknown",
      date: "c. 3300-2200 BCE",
      culture: "Liangzhu, China",
      medium: "Carved jade",
      location: "British Museum, London",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/British_Museum_jade_cong.jpg/400px-British_Museum_jade_cong.jpg",
      facts: [
        "A ritual object with a circular interior and square exterior, possibly representing the connection between heaven (circle) and earth (square).",
        "Jade was the most prized material in ancient China, valued more highly than gold.",
        "Produced by the Liangzhu culture and found in elite burials, suggesting high status and ritual importance."
      ],
      dimensions: "Approximately 49.5 cm high"
    },
    {
      id: 8,
      title: "Stonehenge",
      artist: "Unknown",
      date: "c. 2500-1600 BCE",
      culture: "Neolithic/Bronze Age, Wiltshire, England",
      medium: "Sarsen sandstone and bluestone",
      location: "Salisbury Plain, Wiltshire, England",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/400px-Stonehenge2007_07_30.jpg",
      facts: [
        "A megalithic monument aligned with sunrise on the summer solstice, suggesting astronomical purpose.",
        "The bluestones were transported approximately 150 miles from the Preseli Hills in Wales.",
        "Built in several phases over approximately 1,500 years using post-and-lintel construction."
      ],
      dimensions: "Site, circle diameter approximately 33 m"
    },
    {
      id: 9,
      title: "The Ambum Stone",
      artist: "Unknown",
      date: "c. 1500 BCE",
      culture: "Ambum Valley, Papua New Guinea",
      medium: "Greywacke",
      location: "National Gallery of Australia, Canberra",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ambum_Stone.jpg/400px-Ambum_Stone.jpg",
      facts: [
        "One of the oldest known examples of stone sculpture from Oceania.",
        "Depicts what may be a juvenile long-beaked echidna (spiny anteater), an animal native to New Guinea.",
        "Demonstrates sophisticated three-dimensional sculpting techniques, with the form carved in the round."
      ],
      dimensions: "Approximately 20 cm high"
    },
    {
      id: 10,
      title: "Tlatilco female figurine",
      artist: "Unknown",
      date: "c. 1200-900 BCE",
      culture: "Central Mexico, Tlatilco",
      medium: "Ceramic",
      location: "Museo Nacional de Antropología, Mexico City",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Tlatilco_figurine_1.jpg/400px-Tlatilco_figurine_1.jpg",
      facts: [
        "This two-headed figurine may represent duality—a recurring theme in Mesoamerican art and religion.",
        "Found at the site of Tlatilco, a major Pre-Classic period settlement in the Valley of Mexico.",
        "Emphasizes female anatomy with wide hips and a narrow waist, possibly related to fertility beliefs."
      ],
      dimensions: "Approximately 9.5 cm high"
    },
    {
      id: 11,
      title: "Terra cotta fragment",
      artist: "Unknown",
      date: "c. 3000-1000 BCE",
      culture: "Lapita, Solomon Islands",
      medium: "Terra cotta (earthenware)",
      location: "Solomon Islands",
      unit: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lapita_Pottery_Shard.jpg/400px-Lapita_Pottery_Shard.jpg",
      facts: [
        "Part of the Lapita cultural complex, which spread across the western Pacific from about 1600-500 BCE.",
        "Lapita pottery is characterized by distinctive dentate-stamped geometric designs.",
        "These pottery fragments help archaeologists trace the migration routes of Pacific Island peoples."
      ],
      dimensions: "Fragment"
    },
    // ===== UNIT 2: Ancient Mediterranean (works 12-47) =====
    {
      id: 12,
      title: "White Temple and its ziggurat",
      artist: "Unknown",
      date: "c. 3500-3000 BCE",
      culture: "Sumerian, Uruk (modern Warka, Iraq)",
      medium: "Mud brick",
      location: "Uruk, Iraq (archaeological site)",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Anu_ziggurat_and_White_Temple_in_Uruk.jpg/400px-Anu_ziggurat_and_White_Temple_in_Uruk.jpg",
      facts: [
        "One of the earliest known examples of monumental architecture, dedicated to the sky god Anu.",
        "The White Temple sits atop a ziggurat and was whitewashed, giving it a gleaming appearance visible from a distance.",
        "The bent-axis approach required visitors to turn corners to reach the inner chamber, creating a sense of ritual procession."
      ],
      dimensions: "Site"
    },
    {
      id: 13,
      title: "Palette of King Narmer",
      artist: "Unknown",
      date: "c. 3000-2920 BCE",
      culture: "Predynastic Egypt",
      medium: "Greywacke",
      location: "Egyptian Museum, Cairo",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Narmer_Palette.jpg/400px-Narmer_Palette.jpg",
      facts: [
        "Depicts the unification of Upper and Lower Egypt under King Narmer, considered one of the earliest historical documents.",
        "Uses hierarchical scale to show Narmer as the largest figure, demonstrating his power.",
        "Features composite view (twisted perspective) typical of Egyptian art—head and legs in profile, eye and torso frontal."
      ],
      dimensions: "64 cm high"
    },
    {
      id: 14,
      title: "Statues of votive figures, from the Square Temple at Eshnunna",
      artist: "Unknown",
      date: "c. 2700 BCE",
      culture: "Sumerian, modern Tell Asmar, Iraq",
      medium: "Gypsum inlaid with shell and black limestone",
      location: "Iraq Museum, Baghdad; Oriental Institute, Chicago",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Votive_Statues_from_Tell_Asmar.jpg/400px-Votive_Statues_from_Tell_Asmar.jpg",
      facts: [
        "The wide, staring eyes represent perpetual prayer—these statues were stand-ins for worshippers in the temple.",
        "Found buried beneath the floor of the Square Temple, suggesting they were ritually disposed of when the temple was renovated.",
        "Figures clasp their hands in a gesture of devotion and range in size, possibly reflecting social status."
      ],
      dimensions: "Tallest figure approximately 72 cm"
    },
    {
      id: 15,
      title: "Seated scribe",
      artist: "Unknown",
      date: "c. 2620-2500 BCE",
      culture: "Old Kingdom Egypt",
      medium: "Painted limestone with inlaid eyes of rock crystal",
      location: "Musée du Louvre, Paris",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Le_Scribe_accroupi_-_Louvre.jpg/400px-Le_Scribe_accroupi_-_Louvre.jpg",
      facts: [
        "Unusually realistic for Egyptian art—the figure has a soft belly and alert, lifelike eyes made of rock crystal.",
        "Represents a high-ranking literate official; literacy was rare and prestigious in ancient Egypt.",
        "Unlike pharaoh sculptures which are idealized, this non-royal figure is depicted naturalistically."
      ],
      dimensions: "53.7 cm high"
    },
    {
      id: 16,
      title: "Standard of Ur from the Royal Tombs at Ur",
      artist: "Unknown",
      date: "c. 2600-2400 BCE",
      culture: "Sumerian",
      medium: "Wood inlaid with shell, lapis lazuli, and red limestone",
      location: "British Museum, London",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Standard_of_Ur_-_War.jpg/400px-Standard_of_Ur_-_War.jpg",
      facts: [
        "Features two main sides: 'War' showing a military victory, and 'Peace' showing a banquet celebration.",
        "Read in registers from bottom to top, using hierarchical scale and narrative conventions.",
        "The lapis lazuli used for the blue background was imported from Afghanistan, showing extensive trade networks."
      ],
      dimensions: "21.59 x 49.53 cm"
    },
    {
      id: 17,
      title: "Great Pyramids (Menkaura, Khafre, Khufu) and Great Sphinx",
      artist: "Unknown",
      date: "c. 2550-1500 BCE",
      culture: "Old Kingdom, Fourth Dynasty, Egypt",
      medium: "Cut limestone",
      location: "Giza, Egypt",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/400px-Kheops-Pyramid.jpg",
      facts: [
        "The Great Pyramid of Khufu was the tallest man-made structure for over 3,800 years at 146 meters.",
        "The Sphinx has the body of a lion and the head of a pharaoh, likely Khafre, symbolizing royal power.",
        "The pyramids are precisely aligned to the cardinal directions and contain complex interior passages and chambers."
      ],
      dimensions: "Site, Great Pyramid originally 146 m high"
    },
    {
      id: 18,
      title: "King Menkaura and queen",
      artist: "Unknown",
      date: "c. 2490-2472 BCE",
      culture: "Old Kingdom, Fourth Dynasty, Egypt",
      medium: "Greywacke",
      location: "Museum of Fine Arts, Boston",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Menkaure_and_queen.jpg/400px-Menkaure_and_queen.jpg",
      facts: [
        "The queen's arm around Menkaura's waist is a rare display of intimacy in Egyptian royal sculpture.",
        "Both figures stand in the canonical Egyptian pose: left foot forward, arms at sides, gazing straight ahead.",
        "The sculpture is unfinished below the knees, offering insight into the Egyptian sculptural process."
      ],
      dimensions: "142.2 cm high"
    },
    {
      id: 19,
      title: "The Code of Hammurabi",
      artist: "Unknown",
      date: "c. 1792-1750 BCE",
      culture: "Babylonian",
      medium: "Basalt",
      location: "Musée du Louvre, Paris",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/P1050771_Louvre_code_Hammurabi_face_rwk.JPG/400px-P1050771_Louvre_code_Hammurabi_face_rwk.JPG",
      facts: [
        "One of the earliest written legal codes, containing 282 laws covering commerce, property, and family.",
        "The top relief shows Hammurabi receiving authority from Shamash, the sun god and god of justice.",
        "Established the principle of 'an eye for an eye' (lex talionis), though punishments varied by social class."
      ],
      dimensions: "225 cm high"
    },
    {
      id: 20,
      title: "Temple of Amun-Re and Hypostyle Hall",
      artist: "Unknown",
      date: "c. 1550-1250 BCE",
      culture: "New Kingdom Egypt",
      medium: "Cut sandstone and mud brick",
      location: "Karnak, near Luxor, Egypt",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Karnak_Hypostyle_Hall.jpg/400px-Karnak_Hypostyle_Hall.jpg",
      facts: [
        "The Hypostyle Hall contains 134 massive columns arranged in 16 rows, the largest standing 21 meters tall.",
        "Built over centuries by many pharaohs, making it one of the largest religious complexes ever constructed.",
        "The columns were carved to resemble papyrus and lotus plants, connecting the temple to the primordial marsh of creation."
      ],
      dimensions: "Site"
    },
    {
      id: 21,
      title: "Mortuary temple of Hatshepsut",
      artist: "Senenmut (architect)",
      date: "c. 1473-1458 BCE",
      culture: "New Kingdom Egypt",
      medium: "Sandstone, partially carved into rock cliff",
      location: "Deir el-Bahri, Egypt",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Deir_el-Bahari_0476.jpg/400px-Deir_el-Bahari_0476.jpg",
      facts: [
        "Built for one of the few female pharaohs, Hatshepsut, who ruled Egypt for approximately 20 years.",
        "The temple's terraced design harmonizes with the dramatic cliff face behind it at Deir el-Bahri.",
        "After Hatshepsut's death, her successor Thutmose III attempted to erase her images and cartouches from the temple."
      ],
      dimensions: "Site"
    },
    {
      id: 22,
      title: "Akhenaten, Nefertiti, and three daughters",
      artist: "Unknown",
      date: "c. 1353-1335 BCE",
      culture: "New Kingdom (Amarna period), Egypt",
      medium: "Painted limestone",
      location: "Ägyptisches Museum, Berlin",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Akhenaten%2C_Nefertiti_and_their_children.jpg/400px-Akhenaten%2C_Nefertiti_and_their_children.jpg",
      facts: [
        "One of the first depictions of an Egyptian royal family in an intimate domestic scene.",
        "Created during the Amarna period when Akhenaten introduced monotheistic worship of the sun disk Aten.",
        "The elongated, fluid style marks a dramatic departure from traditional rigid Egyptian artistic conventions."
      ],
      dimensions: "32.5 x 39 cm"
    },
    {
      id: 23,
      title: "Tutankhamun's innermost coffin",
      artist: "Unknown",
      date: "c. 1323 BCE",
      culture: "New Kingdom Egypt",
      medium: "Gold with inlay of enamel and semiprecious stones",
      location: "Egyptian Museum, Cairo",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tutankhamun_coffin_innermost.jpg/400px-Tutankhamun_coffin_innermost.jpg",
      facts: [
        "Made of approximately 110.4 kg (243 lbs) of solid gold, making it one of the most valuable artifacts ever found.",
        "The pharaoh holds the crook and flail, symbols of kingship representing Osiris, god of the afterlife.",
        "Discovered by Howard Carter in 1922 in the Valley of the Kings—the most intact royal tomb ever found."
      ],
      dimensions: "187.5 cm long"
    },
    {
      id: 24,
      title: "Last judgment of Hu-Nefer, from his tomb (page from the Book of the Dead)",
      artist: "Unknown",
      date: "c. 1275 BCE",
      culture: "New Kingdom Egypt",
      medium: "Painted papyrus scroll",
      location: "British Museum, London",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BD_Hunefer.jpg/400px-BD_Hunefer.jpg",
      facts: [
        "Shows the 'Weighing of the Heart' ceremony, where the deceased's heart is weighed against the feather of Ma'at (truth).",
        "Anubis leads the deceased, Thoth records the result, and the monster Ammit waits to devour those who fail.",
        "The Book of the Dead was a guide of spells and instructions for navigating the afterlife."
      ],
      dimensions: "Approximately 45.7 cm high"
    },
    {
      id: 25,
      title: "Lamassu from the citadel of Sargon II",
      artist: "Unknown",
      date: "c. 720-705 BCE",
      culture: "Neo-Assyrian",
      medium: "Alabaster (gypite)",
      location: "Musée du Louvre, Paris; Oriental Institute, Chicago",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Louvre_Lamassus.jpg/400px-Louvre_Lamassus.jpg",
      facts: [
        "Human-headed winged bulls that served as guardian figures at the gates of Assyrian palaces.",
        "Have five legs so they appear standing firmly from the front and walking from the side—designed to be seen from two angles.",
        "Each weighed approximately 40 tons and demonstrated the power and engineering capability of the Assyrian empire."
      ],
      dimensions: "Approximately 4.4 m high"
    },
    {
      id: 26,
      title: "Athenian agora",
      artist: "Unknown",
      date: "c. 600 BCE-150 CE",
      culture: "Ancient Greek",
      medium: "Various materials including marble and limestone",
      location: "Athens, Greece",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stoa_of_Attalos_at_the_Ancient_Agora_of_Athens_2.jpg/400px-Stoa_of_Attalos_at_the_Ancient_Agora_of_Athens_2.jpg",
      facts: [
        "The central public gathering space of Athens, serving as marketplace, political forum, and social center.",
        "Home to the Stoa of Attalos, where Stoic philosophy gets its name—philosophers taught in covered walkways (stoas).",
        "The site of early democratic practices where citizens gathered to vote, debate, and participate in civic life."
      ],
      dimensions: "Site"
    },
    {
      id: 27,
      title: "Anavysos Kouros",
      artist: "Unknown",
      date: "c. 530 BCE",
      culture: "Ancient Greek (Archaic period)",
      medium: "Marble with remnants of paint",
      location: "National Archaeological Museum, Athens",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/NAMA_Kouros_Anavyssos.jpg/400px-NAMA_Kouros_Anavyssos.jpg",
      facts: [
        "A grave marker for a young warrior named Kroisos who died in battle, showing Greek idealization of the male body.",
        "Shows the 'Archaic smile' and frontal stance derived from Egyptian sculpture but with more naturalistic anatomy.",
        "Compared to earlier kouroi, shows significant development toward naturalism, with defined musculature and a more lifelike pose."
      ],
      dimensions: "194 cm high"
    },
    {
      id: 28,
      title: "Peplos Kore",
      artist: "Unknown",
      date: "c. 530 BCE",
      culture: "Ancient Greek (Archaic period)",
      medium: "Marble, painted",
      location: "Acropolis Museum, Athens",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/ACMA_679_Peplos_Kore_1.JPG/400px-ACMA_679_Peplos_Kore_1.JPG",
      facts: [
        "Named for her garment, the peplos—a heavy woolen outer garment worn by Greek women.",
        "Originally brightly painted, retaining traces of pigment that reveal ancient Greek sculpture was polychrome, not white.",
        "Found on the Athenian Acropolis, possibly a votive offering to Athena; may represent the goddess herself."
      ],
      dimensions: "120 cm high"
    },
    {
      id: 29,
      title: "Sarcophagus of the Spouses",
      artist: "Unknown",
      date: "c. 520 BCE",
      culture: "Etruscan",
      medium: "Terra cotta",
      location: "Museo Nazionale Etrusco di Villa Giulia, Rome",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sarcophagus_of_the_Spouses_Louvre.jpg/400px-Sarcophagus_of_the_Spouses_Louvre.jpg",
      facts: [
        "Depicts a married couple reclining together at a banquet, reflecting the elevated social position of Etruscan women.",
        "The intimate gesture of the husband's arm around his wife contrasts with Greek art, where women were rarely shown publicly.",
        "Though a funerary object, it shows joy rather than grief, reflecting Etruscan attitudes toward death as a continuation of life's pleasures."
      ],
      dimensions: "114 x 190 cm"
    },
    {
      id: 30,
      title: "Audience Hall (Apadana) of Darius and Xerxes",
      artist: "Unknown",
      date: "c. 520-465 BCE",
      culture: "Achaemenid Persian",
      medium: "Limestone with wooden roof",
      location: "Persepolis, Iran (archaeological site)",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Persepolis_24.11.2009_11-46-15.jpg/400px-Persepolis_24.11.2009_11-46-15.jpg",
      facts: [
        "The grand ceremonial hall could accommodate 10,000 people, supported by 36 columns each 20 meters tall.",
        "Staircase reliefs depict representatives of 23 subject nations bringing tribute, celebrating the empire's diversity.",
        "Destroyed by Alexander the Great in 330 BCE, possibly in retaliation for the Persian burning of Athens."
      ],
      dimensions: "Site"
    },
    {
      id: 31,
      title: "Temple of Minerva (Portonaccio temple) and sculpture of Apollo",
      artist: "Master sculptor Vulca",
      date: "c. 510-500 BCE",
      culture: "Etruscan",
      medium: "Original temple of wood, mud brick, and tufa; sculpture of terra cotta",
      location: "Museo Nazionale Etrusco di Villa Giulia, Rome",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aplu_Veii.jpg/400px-Aplu_Veii.jpg",
      facts: [
        "Unlike Greek temples where sculpture filled pediments, Etruscan temples placed large terra cotta figures on the roof ridgepole.",
        "The Apollo of Veii strides forward dynamically, contrasting with the static pose of contemporary Greek kouroi.",
        "The Etruscans built temples on high podiums with steps only at the front, influencing later Roman temple design."
      ],
      dimensions: "Apollo sculpture approximately 180 cm high"
    },
    {
      id: 32,
      title: "Tomb of the Triclinium",
      artist: "Unknown",
      date: "c. 480-470 BCE",
      culture: "Etruscan",
      medium: "Tufa andite fresco",
      location: "Monterozzi necropolis, Tarquinia, Italy",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tarquinia_Tomb_of_the_Triclinium.jpg/400px-Tarquinia_Tomb_of_the_Triclinium.jpg",
      facts: [
        "Named for the three-couch dining arrangement (triclinium) depicted in the banquet scene.",
        "Shows men and women feasting together as equals, a practice that shocked Greek visitors to Etruria.",
        "Lively dancers and musicians reflect Etruscan beliefs about celebrating life even in the context of death."
      ],
      dimensions: "Site (tomb interior)"
    },
    {
      id: 33,
      title: "Niobides Krater",
      artist: "Niobid Painter",
      date: "c. 460-450 BCE",
      culture: "Ancient Greek (Classical period)",
      medium: "Red-figure ceramic",
      location: "Musée du Louvre, Paris",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Niobid_Painter_ARV_601_22_death_of_the_Niobids_%28front%29.jpg/400px-Niobid_Painter_ARV_601_22_death_of_the_Niobids_%28front%29.jpg",
      facts: [
        "One of the first Greek vases to place figures at different levels rather than along a single ground line.",
        "Depicts Apollo and Artemis slaying the children of Niobe as punishment for her boastful pride (hubris).",
        "May reflect the influence of large-scale wall painting, which is largely lost to us today."
      ],
      dimensions: "54 cm high"
    },
    {
      id: 34,
      title: "Doryphoros (Spear Bearer)",
      artist: "Polykleitos",
      date: "c. 450-440 BCE",
      culture: "Ancient Greek (Classical period)",
      medium: "Roman marble copy of Greek bronze original",
      location: "Museo Archeologico Nazionale, Naples",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Doryphoros_MAN_Napoli_Inv6011-2.jpg/400px-Doryphoros_MAN_Napoli_Inv6011-2.jpg",
      facts: [
        "Embodies the Greek 'Canon'—Polykleitos's mathematical system of ideal human proportions (head = 1/7 of height).",
        "Demonstrates contrapposto: weight on one leg creating a natural S-curve through the body, revolutionizing Western sculpture.",
        "The original was bronze and is lost; we know it through Roman marble copies, which required added supports."
      ],
      dimensions: "212 cm high (Roman copy)"
    },
    {
      id: 35,
      title: "Acropolis (Parthenon, Propylaia, Erechtheion, Temple of Athena Nike)",
      artist: "Iktinos, Kallikrates, Mnesikles, and others",
      date: "c. 447-410 BCE",
      culture: "Ancient Greek (High Classical)",
      medium: "Marble (Pentelic marble)",
      location: "Athens, Greece",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/400px-The_Parthenon_in_Athens.jpg",
      facts: [
        "The Parthenon uses optical refinements: slightly curved stylobate, tilted columns, and entasis to appear perfectly straight.",
        "Originally housed Phidias's chryselephantine (gold and ivory) statue of Athena Parthenos, standing 12 meters tall.",
        "Built to celebrate Athenian victory over the Persians and financed by treasury funds from the Delian League."
      ],
      dimensions: "Site; Parthenon approximately 69.5 x 30.9 m"
    },
    {
      id: 36,
      title: "Grave stele of Hegeso",
      artist: "Attributed to Kallimachos",
      date: "c. 410 BCE",
      culture: "Ancient Greek (Classical period)",
      medium: "Marble and paint",
      location: "National Archaeological Museum, Athens",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Grave_stele_of_Hegeso.jpg/400px-Grave_stele_of_Hegeso.jpg",
      facts: [
        "Shows Hegeso selecting a piece of jewelry from a box held by her servant, a poignant scene of everyday life interrupted by death.",
        "The jewelry was originally painted but has since faded, leaving Hegeso's hand seemingly holding air.",
        "Demonstrates the Classical Greek 'wet drapery' style, where thin fabric clings to reveal the body beneath."
      ],
      dimensions: "156 cm high"
    },
    {
      id: 37,
      title: "Winged Victory of Samothrace",
      artist: "Unknown",
      date: "c. 190 BCE",
      culture: "Hellenistic Greek",
      medium: "Parian marble",
      location: "Musée du Louvre, Paris",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg/400px-Nike_of_Samothrake_Louvre_Ma2369_n4.jpg",
      facts: [
        "Depicts Nike, the goddess of victory, alighting on the prow of a ship to celebrate a naval victory.",
        "The dynamic pose and swirling wet drapery create a sense of movement and wind that defines Hellenistic drama.",
        "Currently displayed at the top of the Daru staircase in the Louvre, one of the most celebrated sculptures in the world."
      ],
      dimensions: "244 cm high"
    },
    {
      id: 38,
      title: "Great Altar of Zeus and Athena at Pergamon",
      artist: "Unknown",
      date: "c. 175 BCE",
      culture: "Hellenistic Greek",
      medium: "Marble",
      location: "Pergamon Museum, Berlin",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pergamonmuseum_-_Antikensammlung_-_Pergamonaltar_02.jpg/400px-Pergamonmuseum_-_Antikensammlung_-_Pergamonaltar_02.jpg",
      facts: [
        "The Gigantomachy frieze depicts the battle between gods and giants, an allegory for Pergamon's victory over the Gauls.",
        "At 113 meters long, it is one of the longest continuous friezes from antiquity, with intensely dramatic and emotional figures.",
        "Epitomizes the Hellenistic Baroque style with its deep undercutting, extreme emotion, and dramatic compositions."
      ],
      dimensions: "Site; frieze approximately 2.3 m high, 113 m long"
    },
    {
      id: 39,
      title: "House of the Vettii",
      artist: "Unknown",
      date: "c. 2nd century BCE-79 CE",
      culture: "Roman",
      medium: "Cut stone and fresco",
      location: "Pompeii, Italy",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vettii.jpg/400px-Vettii.jpg",
      facts: [
        "Owned by two wealthy freedmen (former slaves), the Vettii brothers, showcasing Roman social mobility.",
        "Contains excellent examples of Roman Fourth Style wall paintings with architectural illusions and mythological scenes.",
        "Preserved by the eruption of Mount Vesuvius in 79 CE, giving a remarkably complete picture of a Roman domestic interior."
      ],
      dimensions: "Site"
    },
    {
      id: 40,
      title: "Alexander Mosaic from the House of the Faun, Pompeii",
      artist: "Unknown",
      date: "c. 100 BCE",
      culture: "Roman (copy of Greek painting)",
      medium: "Mosaic (tesserae)",
      location: "Museo Archeologico Nazionale, Naples",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/BattleofIssus333BC-mosaic-detail1.jpg/400px-BattleofIssus333BC-mosaic-detail1.jpg",
      facts: [
        "Depicts the Battle of Issus (333 BCE) between Alexander the Great and the Persian King Darius III.",
        "Contains approximately 1.5 million tesserae (small tiles) and is believed to be a copy of a lost Greek painting.",
        "Alexander is shown without a helmet, charging fearlessly, while Darius is shown fleeing in his chariot."
      ],
      dimensions: "272 x 513 cm"
    },
    {
      id: 41,
      title: "Seated Boxer",
      artist: "Unknown",
      date: "c. 100 BCE",
      culture: "Hellenistic Greek",
      medium: "Bronze",
      location: "Museo Nazionale Romano, Palazzo Massimo, Rome",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Thermae_boxer_Massimo_Inv1055.jpg/400px-Thermae_boxer_Massimo_Inv1055.jpg",
      facts: [
        "An exhausted, aging boxer with swollen ears, broken nose, and wounds depicted with copper inlays for blood.",
        "Represents the Hellenistic interest in depicting suffering, age, and imperfect bodies rather than idealized forms.",
        "One of the finest surviving Hellenistic bronzes, found buried in Rome, possibly to protect it from looting."
      ],
      dimensions: "128 cm high"
    },
    {
      id: 42,
      title: "Head of a Roman patrician",
      artist: "Unknown",
      date: "c. 75-50 BCE",
      culture: "Republican Roman",
      medium: "Marble",
      location: "Museo Torlonia, Rome",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Head_of_a_Roman_Patrician_Torlonia.jpg/400px-Head_of_a_Roman_Patrician_Torlonia.jpg",
      facts: [
        "Exemplifies verism—the Roman Republican practice of depicting aged, wrinkled faces to convey wisdom and experience.",
        "Deep creases, sunken cheeks, and prominent bones reflect Roman values of gravitas, dignity, and public service.",
        "Contrasts sharply with Greek idealization; Romans celebrated signs of age as marks of character and authority."
      ],
      dimensions: "Approximately 36 cm high"
    },
    {
      id: 43,
      title: "Augustus of Primaporta",
      artist: "Unknown",
      date: "Early 1st century CE",
      culture: "Imperial Roman",
      medium: "Marble (copy of bronze original)",
      location: "Vatican Museums, Rome",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-Augustus.jpg/400px-Statue-Augustus.jpg",
      facts: [
        "Combines Greek idealization (youthful body modeled on the Doryphoros) with Roman portraiture to project power.",
        "The breastplate reliefs depict the return of Roman standards from Parthia, a major diplomatic victory.",
        "Cupid riding a dolphin at Augustus's feet references his claimed divine ancestry through Venus."
      ],
      dimensions: "203 cm high"
    },
    {
      id: 44,
      title: "Colosseum (Flavian Amphitheatre)",
      artist: "Unknown",
      date: "70-80 CE",
      culture: "Imperial Roman (Flavian dynasty)",
      medium: "Stone and concrete",
      location: "Rome, Italy",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/400px-Colosseo_2020.jpg",
      facts: [
        "Could seat approximately 50,000 spectators and featured a retractable awning (velarium) operated by sailors.",
        "Uses the Roman engineering innovations of concrete, arches, and vaults across four stories of Doric, Ionic, and Corinthian orders.",
        "Built on the site of Nero's private lake, the Flavian emperors symbolically returned the land to the Roman people."
      ],
      dimensions: "Site, 189 x 156 m, 48 m high"
    },
    {
      id: 45,
      title: "Forum of Trajan",
      artist: "Apollodorus of Damascus",
      date: "106-112 CE",
      culture: "Imperial Roman",
      medium: "Brick and concrete (originally veneered with marble)",
      location: "Rome, Italy",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Trajan%27s_Column_Panorama.jpg/400px-Trajan%27s_Column_Panorama.jpg",
      facts: [
        "The Column of Trajan features a 190-meter continuous spiral frieze with 2,662 figures depicting the Dacian Wars.",
        "The forum complex included a basilica, two libraries, markets, and a grand public square—the largest imperial forum in Rome.",
        "Originally held Trajan's ashes in the base and was topped with a bronze statue of Trajan (now replaced by Saint Peter)."
      ],
      dimensions: "Site; Column 38 m high"
    },
    {
      id: 46,
      title: "Pantheon",
      artist: "Unknown (possibly Apollodorus of Damascus)",
      date: "118-125 CE",
      culture: "Imperial Roman",
      medium: "Concrete with stone facing",
      location: "Rome, Italy",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rome_Pantheon_front.jpg/400px-Rome_Pantheon_front.jpg",
      facts: [
        "The unreinforced concrete dome remains the largest in the world; the oculus (8.2 m opening) is the only light source.",
        "The interior height and diameter are both 43.3 meters, meaning a perfect sphere could fit inside.",
        "Revolutionary use of Roman concrete (opus caementicium) with varying aggregate densities—lighter pumice at the top."
      ],
      dimensions: "Site, dome diameter 43.3 m"
    },
    {
      id: 47,
      title: "Ludovisi Battle Sarcophagus",
      artist: "Unknown",
      date: "c. 250 CE",
      culture: "Late Imperial Roman",
      medium: "Marble (Proconnesian)",
      location: "Museo Nazionale Romano, Palazzo Altemps, Rome",
      unit: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Grande_Ludovisi_sarcophagus.jpg/400px-Grande_Ludovisi_sarcophagus.jpg",
      facts: [
        "Shows a chaotic battle between Romans and Goths with densely packed, writhing figures filling every surface.",
        "The central Roman general is depicted with no helmet and unstrained, suggesting divine calm amid chaos.",
        "The horror vacui (fear of empty space) and emotional intensity reflect late Roman artistic trends toward expressionism."
      ],
      dimensions: "153 cm high"
    },
    // ===== UNIT 3: Early Europe and Colonial Americas (works 48-82) =====
    {
      id: 48,
      title: "Catacomb of Priscilla",
      artist: "Unknown",
      date: "c. 200-400 CE",
      culture: "Late Antique / Early Christian, Rome",
      medium: "Excavated tufa and fresco",
      location: "Rome, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Good_shepherd_01_small.jpg/400px-Good_shepherd_01_small.jpg",
      facts: [
        "One of the oldest Christian catacombs in Rome, containing some of the earliest known images of the Virgin Mary.",
        "Features the oldest known depiction of the Madonna and Child (Mary nursing the infant Jesus).",
        "The 'Greek Chapel' section contains Old and New Testament scenes painted in a Roman illusionistic style."
      ],
      dimensions: "Site (underground network approximately 13 km)"
    },
    {
      id: 49,
      title: "Santa Sabina",
      artist: "Unknown (Peter of Illyria, patron)",
      date: "422-432 CE",
      culture: "Early Christian, Rome",
      medium: "Brick and stone; wooden doors",
      location: "Rome, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Santa_Sabina_%28Rome%29_-_interior.jpg/400px-Santa_Sabina_%28Rome%29_-_interior.jpg",
      facts: [
        "One of the best-preserved early Christian basilicas, retaining its original 5th-century columned nave.",
        "The wooden doors contain one of the earliest known depictions of the Crucifixion of Christ.",
        "The basilica plan (derived from Roman civic buildings) became the standard layout for Western Christian churches."
      ],
      dimensions: "Site"
    },
    {
      id: 50,
      title: "Rebecca and Eliezer at the Well and Jacob Wrestling the Angel, from the Vienna Genesis",
      artist: "Unknown",
      date: "Early 6th century CE",
      culture: "Early Byzantine",
      medium: "Illuminated manuscript (tempera, gold, and silver on purple-dyed vellum)",
      location: "Österreichische Nationalbibliothek, Vienna",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Vienna_Genesis_-_Rebecca_and_Eliezer.jpg/400px-Vienna_Genesis_-_Rebecca_and_Eliezer.jpg",
      facts: [
        "One of the oldest surviving illustrated biblical manuscripts, written on expensive purple-dyed vellum.",
        "Uses continuous narrative—the same character (Rebecca) appears multiple times within a single scene.",
        "Represents the transition from classical illusionism to the flatter, more symbolic style of Byzantine art."
      ],
      dimensions: "Approximately 33.5 x 25 cm per page"
    },
    {
      id: 51,
      title: "San Vitale",
      artist: "Unknown",
      date: "526-547 CE",
      culture: "Early Byzantine",
      medium: "Brick, marble, and mosaic",
      location: "Ravenna, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Meister_von_San_Vitale_in_Ravenna_003.jpg/400px-Meister_von_San_Vitale_in_Ravenna_003.jpg",
      facts: [
        "The Justinian and Theodora mosaic panels show the emperor and empress with halos, blending political and spiritual authority.",
        "The octagonal central plan differs from the Roman basilica, influenced by Eastern (Byzantine) architectural traditions.",
        "The shimmering gold mosaic tesserae are set at slightly varied angles to catch and reflect light dynamically."
      ],
      dimensions: "Site"
    },
    {
      id: 52,
      title: "Hagia Sophia",
      artist: "Anthemius of Tralles and Isidorus of Miletus",
      date: "532-537 CE",
      culture: "Byzantine (Justinian era)",
      medium: "Brick and stone with marble veneer and mosaic",
      location: "Istanbul, Turkey",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/400px-Hagia_Sophia_Mars_2013.jpg",
      facts: [
        "The massive dome (31 m diameter) appears to float on a ring of 40 windows, creating the effect of a 'dome of heaven.'",
        "Uses pendentives—curved triangular sections—to transition from a square base to a circular dome, a revolutionary technique.",
        "Served as a church (537-1453), mosque (1453-1934), museum (1934-2020), and mosque again (2020-present)."
      ],
      dimensions: "Site, dome 55.6 m high, 31 m diameter"
    },
    {
      id: 53,
      title: "Merovingian looped fibulae",
      artist: "Unknown",
      date: "Mid-6th century CE",
      culture: "Frankish (Merovingian)",
      medium: "Silver gilt worked in filigree with inlays of garnets and other stones",
      location: "Musée d'Archéologie nationale, Saint-Germain-en-Laye, France",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Fibules_m%C3%A9rovingiennes.jpg/400px-Fibules_m%C3%A9rovingiennes.jpg",
      facts: [
        "Elaborate brooches used to fasten cloaks, reflecting the portable art traditions of migrating Germanic peoples.",
        "Combine animal-style interlace patterns with cloisonné inlay technique (garnet cells separated by metal strips).",
        "Found in pairs, typically in women's graves, indicating wealth and social status in Merovingian society."
      ],
      dimensions: "Each approximately 10 cm long"
    },
    {
      id: 54,
      title: "Virgin (Theotokos) and Child between Saints Theodore and George",
      artist: "Unknown",
      date: "6th or early 7th century CE",
      culture: "Early Byzantine",
      medium: "Encaustic on wood",
      location: "Monastery of Saint Catherine, Mount Sinai, Egypt",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Encaustic_Virgin_Sinai.jpg/400px-Encaustic_Virgin_Sinai.jpg",
      facts: [
        "One of the oldest surviving Byzantine icons, preserved at the remote Sinai monastery far from iconoclastic destruction.",
        "Shows three different painting styles: classical naturalism for the angels, formal frontality for the saints, and a blend for the Virgin.",
        "Painted in encaustic (hot wax and pigment), a technique inherited from Greco-Roman portrait painting."
      ],
      dimensions: "68.5 x 49.7 cm"
    },
    {
      id: 55,
      title: "Lindisfarne Gospels: St. Matthew cross-carpet page",
      artist: "Eadfrith, Bishop of Lindisfarne",
      date: "c. 700 CE",
      culture: "Hiberno-Saxon (Insular)",
      medium: "Ink and pigments on vellum",
      location: "British Library, London",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/LindijsfijarnjeGospjels.jpg/400px-LindijsfijarnjeGospjels.jpg",
      facts: [
        "The cross-carpet pages feature intricate interlace patterns with no figurative imagery, blending Christian and Celtic/Germanic traditions.",
        "Each of the four Gospels is preceded by a cross-carpet page, a portrait page, and a decorated incipit page.",
        "The extraordinary detail and precision were achieved with only a few basic pigments and remarkably fine brushwork."
      ],
      dimensions: "Approximately 34 x 25 cm per page"
    },
    {
      id: 56,
      title: "Great Mosque (Mosque-Cathedral) of Córdoba",
      artist: "Unknown",
      date: "785-786 CE (with later additions through 10th century)",
      culture: "Umayyad / Islamic Spain",
      medium: "Stone masonry",
      location: "Córdoba, Spain",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mosque_Cordoba.jpg/400px-Mosque_Cordoba.jpg",
      facts: [
        "The hypostyle hall contains over 850 columns with distinctive double-tiered horseshoe arches in red and white voussoirs.",
        "Expanded multiple times over two centuries, eventually becoming one of the largest mosques in the world.",
        "A Christian cathedral was built inside it in 1523, creating a unique fusion of Islamic and Christian architecture."
      ],
      dimensions: "Site"
    },
    {
      id: 57,
      title: "Equestrian statue of Charlemagne or Charles the Bald",
      artist: "Unknown",
      date: "9th century CE",
      culture: "Carolingian",
      medium: "Bronze with traces of gilt",
      location: "Musée du Louvre, Paris",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Charlemagne_Louvre_OA8260.jpg/400px-Charlemagne_Louvre_OA8260.jpg",
      facts: [
        "Modeled on the equestrian statue of Marcus Aurelius in Rome, reflecting the Carolingian Renaissance revival of Roman forms.",
        "The small scale suggests it may have been a decorative object rather than a public monument.",
        "Embodies the Carolingian attempt to legitimize rule by connecting to the authority of the Roman Empire."
      ],
      dimensions: "Approximately 25 cm high"
    },
    {
      id: 58,
      title: "Pyxis of al-Mughira",
      artist: "Unknown",
      date: "968 CE",
      culture: "Umayyad, Islamic Spain (Al-Andalus)",
      medium: "Ivory with carved decoration",
      location: "Musée du Louvre, Paris",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Pyxis_Al-Mughira_OA_4068.jpg/400px-Pyxis_Al-Mughira_OA_4068.jpg",
      facts: [
        "Made for al-Mughira, the youngest son of the Caliph, possibly as a gift to mark a political event.",
        "The intricate carvings include scenes of falconry, lute-playing, lion-taming, and date harvesting—symbols of royal authority.",
        "Ivory pyxides were luxury objects from Córdoba workshops, demonstrating the high level of craftsmanship in Islamic Spain."
      ],
      dimensions: "15 cm high, 8 cm diameter"
    },
    {
      id: 59,
      title: "Church and reliquary of Sainte-Foy",
      artist: "Unknown",
      date: "Church: c. 1050-1130 CE; Reliquary: 9th century CE with later additions",
      culture: "Romanesque, France",
      medium: "Church: stone; Reliquary: gold, silver gilt, gemstones over a wooden core",
      location: "Conques, France",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Conques_Ste_Foy.jpg/400px-Conques_Ste_Foy.jpg",
      facts: [
        "The reliquary statue contains the skull of the child martyr Sainte-Foy and is covered in donated gems and cameos accumulated over centuries.",
        "The church's tympanum depicts the Last Judgment with vivid scenes of heaven and hell to instruct illiterate pilgrims.",
        "Located on the pilgrimage route to Santiago de Compostela, the church was designed to accommodate large crowds of pilgrims."
      ],
      dimensions: "Site; reliquary approximately 85 cm high"
    },
    {
      id: 60,
      title: "Bayeux Tapestry",
      artist: "Unknown (possibly commissioned by Bishop Odo)",
      date: "c. 1066-1080 CE",
      culture: "Anglo-Norman, Romanesque",
      medium: "Embroidery on linen",
      location: "Musée de la Tapisserie de Bayeux, Bayeux, France",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bayeux_Tapestry_scene57_Harold_death.jpg/400px-Bayeux_Tapestry_scene57_Harold_death.jpg",
      facts: [
        "Not actually a tapestry but an embroidery, depicting the Norman Conquest of England and the Battle of Hastings in 1066.",
        "At nearly 70 meters long, it tells a continuous narrative in a comic-strip-like format with Latin inscriptions.",
        "Tells the story from the Norman perspective, justifying William the Conqueror's claim to the English throne."
      ],
      dimensions: "50 cm x approximately 70 m"
    },
    {
      id: 61,
      title: "Cathedral complex at Pisa (Cathedral, Baptistery, Campanile/Leaning Tower)",
      artist: "Buscheto (cathedral), Diotisalvi (baptistery), Bonanno Pisano (campanile)",
      date: "1063-1350 CE",
      culture: "Romanesque/Italian Romanesque",
      medium: "Marble",
      location: "Pisa, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Piazza_dei_Miracoli_-_The_Cathedral_and_the_Leaning_Tower_in_Pisa_%282%29.jpg/400px-Piazza_dei_Miracoli_-_The_Cathedral_and_the_Leaning_Tower_in_Pisa_%282%29.jpg",
      facts: [
        "The campanile (bell tower) began leaning during construction due to soft ground and insufficient foundation.",
        "The complex demonstrates the distinctive Pisan Romanesque style with blind arcading and tiered colonnades.",
        "The ensemble on the 'Field of Miracles' represents the stages of life: baptism (Baptistery), life (Cathedral), death (Camposanto)."
      ],
      dimensions: "Site"
    },
    {
      id: 62,
      title: "Chartres Cathedral",
      artist: "Unknown (multiple architects over decades)",
      date: "c. 1145-1155 CE (Royal Portal); c. 1194-1220 CE (rebuilt cathedral)",
      culture: "Gothic, France",
      medium: "Limestone, stained glass, wood",
      location: "Chartres, France",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Chartres_cathedral.jpg/400px-Chartres_cathedral.jpg",
      facts: [
        "Contains 176 stained glass windows including the famous 'Blue Virgin' window, with an intense blue color whose formula is debated.",
        "Pioneered the use of flying buttresses, allowing thinner walls and larger windows that fill the interior with colored light.",
        "Houses the Sancta Camisa, believed to be the tunic worn by the Virgin Mary, making it a major pilgrimage destination."
      ],
      dimensions: "Site"
    },
    {
      id: 63,
      title: "Dedication Page with Blanche of Castile and King Louis IX, Moralized Bible",
      artist: "Unknown",
      date: "c. 1225-1245 CE",
      culture: "Gothic, France",
      medium: "Ink, tempera, and gold leaf on vellum",
      location: "Morgan Library & Museum, New York",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blanche_of_Castile_and_Louis_IX_of_France.jpg/400px-Blanche_of_Castile_and_Louis_IX_of_France.jpg",
      facts: [
        "Shows the queen mother Blanche of Castile supervising the religious education of her son, the future Saint Louis IX.",
        "A moralized Bible pairs biblical scenes with moral interpretations in roundels, serving as a tool for royal instruction.",
        "Demonstrates the role of powerful women as patrons of art and education in medieval Europe."
      ],
      dimensions: "Approximately 37.5 x 26.2 cm"
    },
    {
      id: 64,
      title: "Röttgen Pietà",
      artist: "Unknown",
      date: "c. 1300-1325 CE",
      culture: "Gothic, Germany",
      medium: "Painted wood",
      location: "Rheinisches Landesmuseum, Bonn, Germany",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Roettgen_Pieta.jpg/400px-Roettgen_Pieta.jpg",
      facts: [
        "An andachtsbild (devotional image) designed to provoke intense emotional empathy with Christ's suffering.",
        "Christ's body is shown with exaggerated wounds and emaciation to emphasize physical pain and sacrifice.",
        "Reflects the late medieval shift toward personal, emotional devotion rather than grand theological abstraction."
      ],
      dimensions: "89 cm high"
    },
    {
      id: 65,
      title: "Arena (Scrovegni) Chapel, including Lamentation",
      artist: "Giotto di Bondone",
      date: "c. 1303-1305 CE",
      culture: "Proto-Renaissance, Italy",
      medium: "Fresco",
      location: "Padua, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29_adj.jpg/400px-Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29_adj.jpg",
      facts: [
        "Giotto's naturalistic figures with weight, volume, and emotion revolutionized Western painting, breaking from flat Byzantine style.",
        "The Lamentation scene uses a diagonal cliff line to direct the viewer's eye toward Christ's face, creating dramatic focus.",
        "Commissioned by Enrico Scrovegni to atone for his father's sin of usury (money-lending), referenced in Dante's Inferno."
      ],
      dimensions: "Site; Lamentation fresco approximately 200 x 185 cm"
    },
    {
      id: 66,
      title: "Golden Haggadah (The Plagues of Egypt, Scenes of Liberation, and Preparation for Passover)",
      artist: "Unknown",
      date: "c. 1320 CE",
      culture: "Late medieval Spain (Jewish)",
      medium: "Pigment and gold leaf on vellum",
      location: "British Library, London",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Haggadah_14th_cent.jpg/400px-Haggadah_14th_cent.jpg",
      facts: [
        "One of the most lavish surviving medieval Jewish manuscripts, created in Barcelona before the 1492 expulsion of Jews from Spain.",
        "The gold backgrounds reflect Gothic and Byzantine influence, while the scenes illustrate the Exodus story read at Passover.",
        "Some human faces are depicted with distortions or blank faces, possibly to avoid the prohibition against graven images."
      ],
      dimensions: "Approximately 24.7 x 19.5 cm"
    },
    {
      id: 67,
      title: "Alhambra (Court of the Lions)",
      artist: "Unknown",
      date: "1354-1391 CE",
      culture: "Nasrid dynasty, Islamic Spain",
      medium: "Stucco, tile, and wood",
      location: "Granada, Spain",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Patio_de_los_Leones_2015.jpg/400px-Patio_de_los_Leones_2015.jpg",
      facts: [
        "The Court of the Lions features a fountain supported by 12 marble lions, symbolizing strength and power.",
        "The elaborate muqarnas (honeycomb vaulting) and stucco arabesques create an effect meant to evoke paradise.",
        "Calligraphic inscriptions throughout are not just decorative but contain poems praising the beauty of the palace."
      ],
      dimensions: "Site"
    },
    {
      id: 68,
      title: "Annunciation Triptych (Merode Altarpiece)",
      artist: "Workshop of Robert Campin",
      date: "c. 1427-1432 CE",
      culture: "Early Netherlandish",
      medium: "Oil on wood",
      location: "The Metropolitan Museum of Art (The Cloisters), New York",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Robert_Campin_-_L%27_Annonciation_-_1425.jpg/400px-Robert_Campin_-_L%27_Annonciation_-_1425.jpg",
      facts: [
        "Places the Annunciation in a detailed Flemish bourgeois interior, making the sacred scene feel intimate and domestic.",
        "Contains 'disguised symbolism': the lilies represent Mary's purity, the mousetrap in Joseph's workshop symbolizes Christ trapping the devil.",
        "The left panel shows the donors kneeling outside the door, reflecting the growing role of private patrons in art."
      ],
      dimensions: "Central panel 64.1 x 63.2 cm"
    },
    {
      id: 69,
      title: "David",
      artist: "Donatello",
      date: "c. 1440s CE",
      culture: "Early Italian Renaissance",
      medium: "Bronze",
      location: "Museo Nazionale del Bargello, Florence",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Florence_-_David_by_Donatello.jpg/400px-Florence_-_David_by_Donatello.jpg",
      facts: [
        "The first freestanding nude male sculpture since antiquity, marking a decisive break with medieval tradition.",
        "The youthful, almost androgynous David stands triumphantly on Goliath's severed head in contrapposto.",
        "Commissioned by the Medici family and originally displayed in their palace courtyard as a symbol of Florentine civic virtue."
      ],
      dimensions: "158 cm high"
    },
    {
      id: 70,
      title: "Pazzi Chapel",
      artist: "Filippo Brunelleschi",
      date: "c. 1429-1461 CE",
      culture: "Early Italian Renaissance",
      medium: "Stone and ceramic (glazed terra cotta by Luca della Robbia)",
      location: "Basilica di Santa Croce, Florence, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pazzi_Chapel_-_April_2007.jpg/400px-Pazzi_Chapel_-_April_2007.jpg",
      facts: [
        "Exemplifies Brunelleschi's mathematical approach to architecture using classical proportions and geometry.",
        "The dome, arches, and pilasters create a harmonious interior based on simple ratios and the vocabulary of classical orders.",
        "The restrained grey pietra serena stone against white stucco walls defines the 'Brunelleschian' aesthetic of clarity and order."
      ],
      dimensions: "Site"
    },
    {
      id: 71,
      title: "The Arnolfini Portrait",
      artist: "Jan van Eyck",
      date: "1434 CE",
      culture: "Early Netherlandish",
      medium: "Oil on oak panel",
      location: "The National Gallery, London",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/400px-Van_Eyck_-_Arnolfini_Portrait.jpg",
      facts: [
        "The convex mirror in the background reflects two additional figures and bears the inscription 'Jan van Eyck was here, 1434.'",
        "Every object carries symbolic meaning: the single candle represents God's presence, the dog symbolizes fidelity.",
        "One of the first major works in oil painting, demonstrating van Eyck's mastery of the new medium's luminous glazing technique."
      ],
      dimensions: "82.2 x 60 cm"
    },
    {
      id: 72,
      title: "The Delivery of the Keys",
      artist: "Pietro Perugino",
      date: "1481-1482 CE",
      culture: "Italian Renaissance",
      medium: "Fresco",
      location: "Sistine Chapel, Vatican City",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Entrega_de_las_llaves_a_San_Pedro_%28Perugino%29.jpg/400px-Entrega_de_las_llaves_a_San_Pedro_%28Perugino%29.jpg",
      facts: [
        "Demonstrates masterful one-point linear perspective, with the Temple of Solomon centered at the vanishing point.",
        "Christ handing the keys to Saint Peter establishes the papal claim to authority as Peter's successors.",
        "The open piazza and triumphal arches create a rational, ordered space that epitomizes Renaissance ideals."
      ],
      dimensions: "335 x 550 cm"
    },
    {
      id: 73,
      title: "Birth of Venus",
      artist: "Sandro Botticelli",
      date: "c. 1484-1486 CE",
      culture: "Italian Renaissance (Florence)",
      medium: "Tempera on canvas",
      location: "Galleria degli Uffizi, Florence",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
      facts: [
        "Depicts the goddess Venus emerging from the sea on a shell, blown to shore by Zephyr and Chloris.",
        "The pose references the classical Venus Pudica (modest Venus) type, reviving ancient Greco-Roman nude ideals.",
        "Commissioned by the Medici family, it reflects Neoplatonic philosophy equating Venus's beauty with divine truth."
      ],
      dimensions: "172.5 x 278.9 cm"
    },
    {
      id: 74,
      title: "Last Supper",
      artist: "Leonardo da Vinci",
      date: "1494-1498 CE",
      culture: "Italian Renaissance (High Renaissance)",
      medium: "Oil and tempera on plaster",
      location: "Santa Maria delle Grazie, Milan, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/400px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
      facts: [
        "Captures the dramatic moment when Christ announces 'One of you will betray me,' showing each apostle's distinct reaction.",
        "Leonardo's experimental technique (oil on dry plaster instead of true fresco) caused rapid deterioration beginning in his own lifetime.",
        "The one-point perspective converges on Christ's head, and the composition groups the apostles in four sets of three."
      ],
      dimensions: "460 x 880 cm"
    },
    {
      id: 75,
      title: "Adam and Eve",
      artist: "Albrecht Dürer",
      date: "1504 CE",
      culture: "Northern Renaissance, Germany",
      medium: "Engraving",
      location: "Various collections (multiple impressions)",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Durer_Adam_and_Eve.jpg/400px-Durer_Adam_and_Eve.jpg",
      facts: [
        "Dürer's idealized figures follow classical proportions (Vitruvian man), combining Italian Renaissance ideals with Northern detail.",
        "The four animals in the background represent the four humors/temperaments: cat (choleric), rabbit (sanguine), elk (melancholic), ox (phlegmatic).",
        "Considered a masterpiece of engraving technique, with extraordinarily fine cross-hatching to create tonal variation."
      ],
      dimensions: "25.1 x 20 cm"
    },
    {
      id: 76,
      title: "Sistine Chapel ceiling and Last Judgment",
      artist: "Michelangelo",
      date: "Ceiling: 1508-1512 CE; Last Judgment: 1536-1541 CE",
      culture: "Italian Renaissance (High Renaissance/Mannerism)",
      medium: "Fresco",
      location: "Sistine Chapel, Vatican City",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sistine_Chapel_ceiling_photo_2.jpg/400px-Sistine_Chapel_ceiling_photo_2.jpg",
      facts: [
        "The ceiling contains over 300 figures including nine scenes from Genesis; the most iconic is the Creation of Adam.",
        "Michelangelo painted mostly standing (not lying on his back), and the project took four years to complete.",
        "The Last Judgment on the altar wall caused controversy for its nudity; draperies were added later by another painter."
      ],
      dimensions: "Ceiling approximately 40.5 x 14 m; Last Judgment 13.7 x 12.2 m"
    },
    {
      id: 77,
      title: "School of Athens",
      artist: "Raphael",
      date: "1509-1511 CE",
      culture: "Italian Renaissance (High Renaissance)",
      medium: "Fresco",
      location: "Apostolic Palace (Stanza della Segnatura), Vatican City",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/400px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
      facts: [
        "Plato (pointing up to ideals, modeled on Leonardo) and Aristotle (gesturing to the earth, empiricism) stand at the center.",
        "Contains portraits of contemporary Renaissance figures: Michelangelo as Heraclitus, Bramante as Euclid, Raphael himself at the edge.",
        "The grand architectural setting is inspired by Bramante's plans for the new St. Peter's Basilica."
      ],
      dimensions: "500 x 770 cm"
    },
    {
      id: 78,
      title: "Isenheim Altarpiece",
      artist: "Matthias Grünewald",
      date: "c. 1512-1516 CE",
      culture: "Northern Renaissance, Germany",
      medium: "Oil on wood",
      location: "Musée Unterlinden, Colmar, France",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Grunewald_Isenheim1.jpg/400px-Grunewald_Isenheim1.jpg",
      facts: [
        "Created for a hospital chapel treating patients with ergotism (St. Anthony's fire), Christ's diseased-looking skin would have resonated with sufferers.",
        "The polyptych has multiple opening configurations revealing different scenes for different liturgical occasions.",
        "The Crucifixion panel is intensely graphic—Christ's body is covered in sores and thorns, and his fingers splay in agony."
      ],
      dimensions: "Closed view approximately 269 x 307 cm"
    },
    {
      id: 79,
      title: "Entombment of Christ",
      artist: "Jacopo da Pontormo",
      date: "1525-1528 CE",
      culture: "Mannerist, Italy",
      medium: "Oil on wood (transferred to canvas)",
      location: "Santa Felicita, Florence, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jacopo_Pontormo_-_Deposition_-_WGA18083.jpg/400px-Jacopo_Pontormo_-_Deposition_-_WGA18083.jpg",
      facts: [
        "Epitomizes Mannerism with elongated figures, acidic pastel colors, ambiguous space, and no clear ground plane.",
        "The swirling composition has no clear focal point, creating a sense of emotional instability and spiritual anguish.",
        "Figures seem to float in an undefined space, deliberately rejecting the rational spatial clarity of High Renaissance art."
      ],
      dimensions: "313 x 192 cm"
    },
    {
      id: 80,
      title: "Allegory of Law and Grace",
      artist: "Lucas Cranach the Elder",
      date: "c. 1530 CE",
      culture: "Protestant Reformation, Germany",
      medium: "Oil on wood (also woodcut versions)",
      location: "Germanisches Nationalmuseum, Nuremberg (and other versions elsewhere)",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cranach_Gesetz_und_Gnade_Gotha.jpg/400px-Cranach_Gesetz_und_Gnade_Gotha.jpg",
      facts: [
        "A visual manifesto of Martin Luther's theology, contrasting Old Testament law (left) with New Testament grace (right).",
        "On the left, humanity is condemned by the law; on the right, Christ's sacrifice offers salvation through faith alone.",
        "Cranach was a close friend of Martin Luther and created art that served as Protestant propaganda during the Reformation."
      ],
      dimensions: "Approximately 72 x 88.5 cm"
    },
    {
      id: 81,
      title: "Venus of Urbino",
      artist: "Titian (Tiziano Vecellio)",
      date: "1538 CE",
      culture: "Italian Renaissance (Venetian)",
      medium: "Oil on canvas",
      location: "Galleria degli Uffizi, Florence",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg/400px-Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg",
      facts: [
        "Unlike Botticelli's ethereal Venus, Titian's reclining nude gazes directly at the viewer with frank sensuality.",
        "The dog at her feet symbolizes fidelity, while servants in the background search a marriage chest (cassone).",
        "Inspired Manet's controversial Olympia (1863), which replaced Venus with a modern Parisian courtesan."
      ],
      dimensions: "119.2 x 165.5 cm"
    },
    {
      id: 82,
      title: "Il Gesù, including ceiling fresco",
      artist: "Giacomo da Vignola and Giacomo della Porta (church); Giovanni Battista Gaulli (ceiling fresco)",
      date: "Church: 1568-1584 CE; Fresco: 1676-1679 CE",
      culture: "Late Renaissance / Baroque, Rome",
      medium: "Brick, stone, and fresco",
      location: "Rome, Italy",
      unit: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Church_of_the_Ges%C3%B9%2C_Rome.jpg/400px-Church_of_the_Ges%C3%B9%2C_Rome.jpg",
      facts: [
        "The mother church of the Jesuit order, its design became the model for Counter-Reformation churches worldwide.",
        "Gaulli's ceiling fresco, Triumph of the Name of Jesus, breaks through the architectural frame with figures spilling over the edges.",
        "The wide nave without side aisles was designed for preaching to large congregations, central to Jesuit mission."
      ],
      dimensions: "Site"
    },
    // ===== UNIT 4: Later Europe and Americas (works 83-136) =====
    {
      id: 83,
      title: "Calling of Saint Matthew",
      artist: "Caravaggio (Michelangelo Merisi)",
      date: "c. 1597-1601 CE",
      culture: "Baroque, Italy",
      medium: "Oil on canvas",
      location: "Contarelli Chapel, San Luigi dei Francesi, Rome",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/400px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
      facts: [
        "The dramatic shaft of light from the upper right follows Christ's pointing hand toward Matthew, symbolizing divine calling.",
        "Caravaggio's tenebrism—extreme contrast of light and dark—revolutionized Baroque painting across Europe.",
        "Matthew is depicted as a tax collector in contemporary dress, making the biblical scene relatable to 17th-century viewers."
      ],
      dimensions: "322 x 340 cm"
    },
    {
      id: 84,
      title: "Henri IV Receives the Portrait of Maria de' Medici, from the Marie de' Medici Cycle",
      artist: "Peter Paul Rubens",
      date: "1621-1625 CE",
      culture: "Baroque, Flanders",
      medium: "Oil on canvas",
      location: "Musée du Louvre, Paris",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Peter_Paul_Rubens_052.jpg/400px-Peter_Paul_Rubens_052.jpg",
      facts: [
        "Part of a 24-painting cycle glorifying Marie de' Medici's life, commissioned to decorate the Luxembourg Palace.",
        "Rubens blends historical events with mythological allegory—Jupiter and Juno oversee the king's admiration of the portrait.",
        "Demonstrates Rubens's ability to flatter patrons through art, elevating political marriages to the realm of the divine."
      ],
      dimensions: "394 x 295 cm"
    },
    {
      id: 85,
      title: "Self-Portrait with Saskia",
      artist: "Rembrandt van Rijn",
      date: "1636 CE",
      culture: "Baroque, Dutch Republic",
      medium: "Etching",
      location: "Various collections (multiple impressions)",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Rembrandt_-_Rembrandt_and_Saskia_in_the_Scene_of_the_Prodigal_Son_-_Google_Art_Project.jpg/400px-Rembrandt_-_Rembrandt_and_Saskia_in_the_Scene_of_the_Prodigal_Son_-_Google_Art_Project.jpg",
      facts: [
        "Shows Rembrandt and his wife Saskia in what may reference the Prodigal Son parable from the Bible.",
        "Rembrandt produced roughly 80 self-portraits throughout his career, documenting his changing appearance and fortunes.",
        "Created during the prosperous early years of his marriage, before Saskia's death in 1642 brought personal and financial hardship."
      ],
      dimensions: "Approximately 104 x 131 cm"
    },
    {
      id: 86,
      title: "San Carlo alle Quattro Fontane",
      artist: "Francesco Borromini",
      date: "1638-1646 CE",
      culture: "Baroque, Rome",
      medium: "Stone and stucco",
      location: "Rome, Italy",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/San_Carlo_alle_Quattro_Fontane_%28Rome%29_-_Intern.jpg/400px-San_Carlo_alle_Quattro_Fontane_%28Rome%29_-_Intern.jpg",
      facts: [
        "The entire church fits within one pier of St. Peter's Basilica, yet creates a feeling of expansive, dynamic space.",
        "Borromini uses an undulating, concave-convex facade and oval dome—radical departures from Renaissance geometry.",
        "The plan is based on interlocking geometric shapes (ovals, triangles, circles) creating continuous flowing surfaces."
      ],
      dimensions: "Site"
    },
    {
      id: 87,
      title: "Ecstasy of Saint Teresa",
      artist: "Gian Lorenzo Bernini",
      date: "1645-1652 CE",
      culture: "Baroque, Rome",
      medium: "Marble, stucco, and gilt bronze",
      location: "Cornaro Chapel, Santa Maria della Vittoria, Rome",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg/400px-Ecstasy_of_Saint_Teresa_September_2015-2a.jpg",
      facts: [
        "Bernini created a total environment (bel composto): sculpture, architecture, painting, and hidden lighting work together.",
        "Teresa's expression of spiritual rapture deliberately blurs the line between religious ecstasy and physical pleasure.",
        "Members of the Cornaro family are sculpted in theater boxes on either side, watching as if at a performance."
      ],
      dimensions: "350 cm high"
    },
    {
      id: 88,
      title: "Las Meninas",
      artist: "Diego Velázquez",
      date: "1656 CE",
      culture: "Baroque, Spain",
      medium: "Oil on canvas",
      location: "Museo del Prado, Madrid",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/400px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
      facts: [
        "The mirror in the background reflects King Philip IV and Queen Mariana, suggesting they are the subject Velázquez is painting.",
        "The complex spatial arrangement raises questions about who is viewing whom, making the viewer part of the painting.",
        "Velázquez includes himself painting at a large canvas, and wears the cross of the Order of Santiago (reportedly added later by the king)."
      ],
      dimensions: "318 x 276 cm"
    },
    {
      id: 89,
      title: "Woman Holding a Balance",
      artist: "Johannes Vermeer",
      date: "c. 1664 CE",
      culture: "Baroque, Dutch Republic",
      medium: "Oil on canvas",
      location: "National Gallery of Art, Washington, D.C.",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Vermeer_-_Woman_Holding_a_Balance_%28NGA%29.jpg/400px-Vermeer_-_Woman_Holding_a_Balance_%28NGA%29.jpg",
      facts: [
        "The painting behind the woman depicts the Last Judgment, creating a parallel between her weighing and God's final judgment.",
        "The balance she holds is empty, suggesting she weighs not gold but the value of a balanced, moral life.",
        "Vermeer's signature use of soft, diffused light from a window creates a meditative, contemplative atmosphere."
      ],
      dimensions: "42.5 x 38 cm"
    },
    {
      id: 90,
      title: "The Palace at Versailles",
      artist: "Louis Le Vau and Jules Hardouin-Mansart (architects); André Le Nôtre (gardens)",
      date: "Begun 1669 CE",
      culture: "Baroque/French Classicism",
      medium: "Masonry, stone, wood, iron, gold leaf; gardens of landscaped grounds",
      location: "Versailles, France",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Versailles_Palace.jpg/400px-Versailles_Palace.jpg",
      facts: [
        "The Hall of Mirrors contains 357 mirrors reflecting 17 arched windows, symbolizing France's wealth and the Sun King's radiance.",
        "Louis XIV moved the entire French court to Versailles to control the nobility and centralize power.",
        "The geometrically ordered gardens by Le Nôtre embody the idea that nature itself submits to the king's authority."
      ],
      dimensions: "Site"
    },
    {
      id: 91,
      title: "Screen with the Siege of Belgrade and hunting scene",
      artist: "Unknown",
      date: "c. 1697-1701 CE",
      culture: "Colonial Mexico (New Spain)",
      medium: "Tempera and resin on wood, with mother-of-pearl inlay (enconchado technique)",
      location: "Museo Franz Mayer and Museo Soumaya, Mexico City",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Biombo_-_Museo_Franz_Mayer.jpg/400px-Biombo_-_Museo_Franz_Mayer.jpg",
      facts: [
        "A biombo (folding screen), a form borrowed from Japanese and Chinese screens and adapted in colonial Mexico.",
        "Uses the enconchado technique of embedding mother-of-pearl shell into the painted surface, creating an iridescent effect.",
        "Depicts a European military event (Siege of Belgrade) on one side and a local hunting scene on the other, blending Old and New World subjects."
      ],
      dimensions: "Approximately 229 x 550 cm"
    },
    {
      id: 92,
      title: "The Virgin of Guadalupe (Virgen de Guadalupe)",
      artist: "Miguel González",
      date: "c. 1698 CE",
      culture: "Colonial Mexico (New Spain)",
      medium: "Oil on canvas on wood, with mother-of-pearl inlay (enconchado)",
      location: "Museo de América, Madrid",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Virgen_de_Guadalupe_con_las_cuatro_apariciones_%28Miguel_Gonz%C3%A1lez%29.jpg/400px-Virgen_de_Guadalupe_con_las_cuatro_apariciones_%28Miguel_Gonz%C3%A1lez%29.jpg",
      facts: [
        "Depicts the Virgin of Guadalupe surrounded by four scenes (apparitions) of her miraculous appearance to Juan Diego in 1531.",
        "The enconchado technique gives the surface a luminous, otherworldly quality appropriate for a miraculous image.",
        "The Virgin of Guadalupe became a powerful symbol unifying indigenous and Spanish Catholic identities in Mexico."
      ],
      dimensions: "Approximately 50 x 70 cm"
    },
    {
      id: 93,
      title: "Fruit Piece",
      artist: "Rachel Ruysch",
      date: "1711 CE",
      culture: "Baroque, Dutch Republic",
      medium: "Oil on canvas",
      location: "Minneapolis Institute of Art, Minneapolis",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ruysch_Fruit.jpg/400px-Ruysch_Fruit.jpg",
      facts: [
        "Ruysch was one of the most successful still-life painters in the Dutch Golden Age, commanding higher prices than most male contemporaries.",
        "The painting functions as a vanitas, with overripe fruit and insects reminding viewers of the transience of life.",
        "Ruysch's father was a botanist and anatomist, giving her detailed scientific knowledge of the plants and insects she painted."
      ],
      dimensions: "Approximately 47 x 60 cm"
    },
    {
      id: 94,
      title: "Spaniard and Indian Produce a Mestizo, with Scenes of Daily Life (casta painting)",
      artist: "Juan Rodríguez Juárez",
      date: "c. 1715 CE",
      culture: "Colonial Mexico (New Spain)",
      medium: "Oil on canvas",
      location: "Breamore House, Hampshire, England",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Casta_painting_all.jpg/400px-Casta_painting_all.jpg",
      facts: [
        "Casta paintings depict the racial classifications of colonial Latin America, categorizing mixed-race families.",
        "These paintings reflect the Spanish colonial obsession with racial hierarchy and 'blood purity' (limpieza de sangre).",
        "Typically produced in sets of 16, each showing a different racial combination with the family in daily-life settings."
      ],
      dimensions: "Approximately 104 x 148 cm"
    },
    {
      id: 95,
      title: "The Tête à Tête, from Marriage à-la-mode",
      artist: "William Hogarth",
      date: "1743 CE",
      culture: "Georgian England",
      medium: "Oil on canvas",
      location: "The National Gallery, London",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Marriage_A-la-Mode_2%2C_The_Tete_a_Tete_-_William_Hogarth.jpg/400px-Marriage_A-la-Mode_2%2C_The_Tete_a_Tete_-_William_Hogarth.jpg",
      facts: [
        "Part of a six-painting narrative series satirizing the aristocratic arranged marriage for money and title.",
        "Every detail tells a story: the exhausted husband, the satisfied wife, scattered cards, and an overturned chair suggest a dissolute night.",
        "Hogarth pioneered the 'modern moral subject'—sequential narrative paintings commenting on social issues, precursors to comic strips."
      ],
      dimensions: "69.9 x 90.8 cm"
    },
    {
      id: 96,
      title: "Portrait of Sor Juana Inés de la Cruz",
      artist: "Miguel Cabrera",
      date: "c. 1750 CE",
      culture: "Colonial Mexico (New Spain)",
      medium: "Oil on canvas",
      location: "Museo Nacional de Historia, Mexico City",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sor_Juana_by_Miguel_Cabrera.png/400px-Sor_Juana_by_Miguel_Cabrera.png",
      facts: [
        "Depicts the famous nun, poet, and intellectual Sor Juana surrounded by books, emphasizing her scholarly achievements.",
        "Sor Juana was one of the most important literary figures of colonial Latin America, defending women's right to education.",
        "Cabrera was the most prominent painter of colonial Mexico and painted this posthumous portrait based on earlier likenesses."
      ],
      dimensions: "Approximately 207 x 148 cm"
    },
    {
      id: 97,
      title: "A Philosopher Giving a Lecture on the Orrery",
      artist: "Joseph Wright of Derby",
      date: "c. 1763-1765 CE",
      culture: "Enlightenment England",
      medium: "Oil on canvas",
      location: "Derby Museum and Art Gallery, Derby, England",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Joseph_Wright_of_Derby_-_A_Philosopher_Giving_that_Lecture_on_the_Orrery.jpg/400px-Joseph_Wright_of_Derby_-_A_Philosopher_Giving_that_Lecture_on_the_Orrery.jpg",
      facts: [
        "The dramatic candlelight illumination (referencing Caravaggio) replaces divine light with the light of scientific reason.",
        "An orrery is a mechanical model of the solar system—the painting celebrates Enlightenment scientific discovery.",
        "The varied reactions of the audience, from wonder to contemplation, reflect different responses to new scientific knowledge."
      ],
      dimensions: "147.3 x 203.2 cm"
    },
    {
      id: 98,
      title: "The Swing",
      artist: "Jean-Honoré Fragonard",
      date: "1767 CE",
      culture: "Rococo, France",
      medium: "Oil on canvas",
      location: "The Wallace Collection, London",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/400px-Fragonard%2C_The_Swing.jpg",
      facts: [
        "The young woman kicks off her shoe toward a statue of Cupid while her hidden lover looks up her skirts from below.",
        "Epitomizes the Rococo style: playful, sensual, pastel-colored, and set in an idealized garden landscape.",
        "The elderly husband pushes the swing unknowingly, symbolizing aristocratic frivolity and deception before the French Revolution."
      ],
      dimensions: "81 x 64.2 cm"
    },
    {
      id: 99,
      title: "Monticello",
      artist: "Thomas Jefferson",
      date: "1768-1809 CE",
      culture: "Neoclassical, United States",
      medium: "Brick, wood, stone, and glass",
      location: "Charlottesville, Virginia, USA",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Thomas_Jefferson%27s_Monticello.JPG/400px-Thomas_Jefferson%27s_Monticello.JPG",
      facts: [
        "Jefferson designed this home based on Palladio's classical ideals, with a dome and portico referencing the Roman Pantheon.",
        "Features numerous innovations: skylights, a revolving door, a dumbwaiter, and the first dome on an American residence.",
        "The tension between Enlightenment ideals and the reality of slave labor used to build and maintain Monticello is significant."
      ],
      dimensions: "Site"
    },
    {
      id: 100,
      title: "The Oath of the Horatii",
      artist: "Jacques-Louis David",
      date: "1784 CE",
      culture: "Neoclassical, France",
      medium: "Oil on canvas",
      location: "Musée du Louvre, Paris",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/400px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
      facts: [
        "Three Roman brothers swear an oath to fight for Rome, sacrificing personal bonds for civic duty—a theme embraced by French Revolutionaries.",
        "The rigid, linear composition contrasts the stoic, angular men on the left with the soft, grieving women on the right.",
        "David's austere Neoclassical style deliberately rejected the frivolity of Rococo, signaling a new moral seriousness in art."
      ],
      dimensions: "330 x 425 cm"
    },
    {
      id: 101,
      title: "George Washington (Lansdowne portrait)",
      artist: "Gilbert Stuart",
      date: "1796 CE",
      culture: "Federal period, United States",
      medium: "Oil on canvas",
      location: "National Portrait Gallery, Smithsonian, Washington, D.C.",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gilbert_Stuart_-_George_Washington_%28Lansdowne_portrait%29.jpg/400px-Gilbert_Stuart_-_George_Washington_%28Lansdowne_portrait%29.jpg",
      facts: [
        "Washington's outstretched hand in an oratorical gesture references classical Roman statues of authority.",
        "Painted while Washington was president, this full-length portrait became the definitive image of the first president.",
        "Stuart deliberately included symbols of the new republic: the presidential sword, books of law, and the chair of state."
      ],
      dimensions: "247.6 x 158.7 cm"
    },
    {
      id: 102,
      title: "La Grande Odalisque",
      artist: "Jean-Auguste-Dominique Ingres",
      date: "1814 CE",
      culture: "Neoclassical/Romantic, France",
      medium: "Oil on canvas",
      location: "Musée du Louvre, Paris",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg/400px-Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg",
      facts: [
        "The figure has anatomically impossible proportions—two or three extra vertebrae elongate her back for aesthetic effect.",
        "Combines Neoclassical draftsmanship with Romantic Orientalist fantasy, depicting an idealized harem woman.",
        "Critics attacked the distorted anatomy, but Ingres prioritized beauty and line over anatomical correctness."
      ],
      dimensions: "91 x 162 cm"
    },
    {
      id: 103,
      title: "Liberty Leading the People",
      artist: "Eugène Delacroix",
      date: "1830 CE",
      culture: "Romantic, France",
      medium: "Oil on canvas",
      location: "Musée du Louvre, Paris",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/400px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
      facts: [
        "Commemorates the July Revolution of 1830; the allegorical figure of Liberty (Marianne) leads citizens over a barricade.",
        "Delacroix's dynamic composition, bold color, and emotional intensity exemplify the Romantic movement's values.",
        "The painting shows people of all social classes fighting together—a boy with pistols, a top-hatted bourgeois, and workers."
      ],
      dimensions: "260 x 325 cm"
    },
    {
      id: 104,
      title: "The Oxbow (View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm)",
      artist: "Thomas Cole",
      date: "1836 CE",
      culture: "Romantic / Hudson River School, United States",
      medium: "Oil on canvas",
      location: "The Metropolitan Museum of Art, New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton_1836%29.jpg/400px-Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton_1836%29.jpg",
      facts: [
        "The composition divides between wild, sublime wilderness on the left and cultivated pastoral landscape on the right.",
        "Cole, founder of the Hudson River School, used this painting to question whether American expansion was progress or destruction.",
        "The artist includes himself in the landscape, a tiny figure painting at an easel on the hillside."
      ],
      dimensions: "130.8 x 193 cm"
    },
    {
      id: 105,
      title: "Slave Ship (Slavers Throwing Overboard the Dead and Dying, Typhoon Coming On)",
      artist: "Joseph Mallord William Turner",
      date: "1840 CE",
      culture: "Romantic, England",
      medium: "Oil on canvas",
      location: "Museum of Fine Arts, Boston",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Slave-ship.jpg/400px-Slave-ship.jpg",
      facts: [
        "Inspired by the 1781 Zong massacre, where enslaved people were thrown overboard so the ship's owners could collect insurance.",
        "Turner's explosive color and dissolving forms make nature itself seem to pass judgment on the horror of the slave trade.",
        "The painting was exhibited in support of the abolitionist movement; John Ruskin called it Turner's greatest work."
      ],
      dimensions: "90.8 x 122.6 cm"
    },
    {
      id: 106,
      title: "Palace of Westminster (Houses of Parliament)",
      artist: "Charles Barry and Augustus W.N. Pugin",
      date: "1840-1870 CE",
      culture: "Gothic Revival, England",
      medium: "Limestone with iron frame",
      location: "London, England",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Houses_of_Parliament.jpg/400px-Houses_of_Parliament.jpg",
      facts: [
        "After the old palace burned in 1834, the competition specified entries must be in Gothic or Elizabethan style.",
        "Barry designed the symmetrical plan while Pugin created the elaborate Gothic decorative details inside and out.",
        "The Gothic Revival style was chosen to connect British parliamentary democracy to its medieval origins."
      ],
      dimensions: "Site"
    },
    {
      id: 107,
      title: "The Third of May, 1808",
      artist: "Francisco Goya",
      date: "1814 CE",
      culture: "Romantic, Spain",
      medium: "Oil on canvas",
      location: "Museo del Prado, Madrid",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/400px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
      facts: [
        "Depicts Napoleon's soldiers executing Spanish civilians; the central figure's white shirt and outstretched arms echo Christ's crucifixion.",
        "Considered one of the first modern paintings of war—showing war's horror rather than glory, influencing Manet and Picasso.",
        "The faceless, machine-like soldiers contrast with the individual terror and humanity of the victims."
      ],
      dimensions: "268 x 347 cm"
    },
    {
      id: 108,
      title: "Olympia",
      artist: "Édouard Manet",
      date: "1863 CE",
      culture: "Realism/Early Modernism, France",
      medium: "Oil on canvas",
      location: "Musée d'Orsay, Paris",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/400px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg",
      facts: [
        "References Titian's Venus of Urbino but replaces the goddess with a contemporary Parisian courtesan who confronts the viewer's gaze.",
        "The scandal was not the nudity itself but the subject's identity as a sex worker and her unapologetic, direct stare.",
        "Manet's flat, unmodulated patches of color and visible brushwork were seen as deliberately unfinished and provocative."
      ],
      dimensions: "130.5 x 190 cm"
    },
    {
      id: 109,
      title: "The Saint-Lazare Station (Gare Saint-Lazare)",
      artist: "Claude Monet",
      date: "1877 CE",
      culture: "Impressionism, France",
      medium: "Oil on canvas",
      location: "Musée d'Orsay, Paris",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Claude_Monet_-_The_Gare_Saint-Lazare_-_Arrival_of_a_Train.jpg/400px-Claude_Monet_-_The_Gare_Saint-Lazare_-_Arrival_of_a_Train.jpg",
      facts: [
        "Monet painted 12 views of the train station, capturing the modern industrial subject with the same attention as a landscape.",
        "Steam and light dissolve the solid architecture, demonstrating the Impressionist focus on atmosphere and fleeting effects.",
        "Celebrating the modern railway station as a 'cathedral of modernity' was a deliberately anti-academic subject choice."
      ],
      dimensions: "75.5 x 104 cm"
    },
    {
      id: 110,
      title: "The Horse in Motion",
      artist: "Eadweard Muybridge",
      date: "1878 CE",
      culture: "Early photography, United States",
      medium: "Albumen print (photograph)",
      location: "Various collections",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Horse_in_Motion.jpg/400px-The_Horse_in_Motion.jpg",
      facts: [
        "Proved that all four of a horse's hooves leave the ground simultaneously during a gallop, settling a famous debate.",
        "Used a series of cameras triggered by trip wires to capture sequential motion—a precursor to motion pictures.",
        "Commissioned by Leland Stanford, this work fundamentally changed how artists depicted movement."
      ],
      dimensions: "Each frame approximately 12 x 15 cm"
    },
    {
      id: 111,
      title: "The Valley of Mexico from the Hillside of Santa Isabel (El Valle de México desde el cerro de Santa Isabel)",
      artist: "José María Velasco",
      date: "1882 CE",
      culture: "Mexican landscape painting",
      medium: "Oil on canvas",
      location: "Museo Nacional de Arte, Mexico City",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/El_valle_de_M%C3%A9xico_desde_el_cerro_de_Santa_Isabel_%281882%29.jpg/400px-El_valle_de_M%C3%A9xico_desde_el_cerro_de_Santa_Isabel_%281882%29.jpg",
      facts: [
        "Velasco's panoramic view of the Valley of Mexico combined scientific observation with nationalist pride.",
        "The vast, luminous landscape emphasizes Mexico's natural grandeur, contributing to national identity after independence.",
        "Velasco studied geology and botany, bringing scientific accuracy to his depictions of Mexican terrain and vegetation."
      ],
      dimensions: "137.5 x 226 cm"
    },
    {
      id: 112,
      title: "The Burghers of Calais",
      artist: "Auguste Rodin",
      date: "1884-1895 CE",
      culture: "Post-Impressionist/Modern, France",
      medium: "Bronze",
      location: "Musée Rodin, Paris (and other casts)",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bourgeois_de_Calais_Rodin_Calais.jpg/400px-Bourgeois_de_Calais_Rodin_Calais.jpg",
      facts: [
        "Depicts six citizens of Calais who offered their lives to save the city during the Hundred Years' War in 1347.",
        "Rodin controversially placed the figures at ground level rather than on a high pedestal, among the people.",
        "Each figure shows a different psychological response to facing death—anguish, resignation, despair—breaking from heroic monument tradition."
      ],
      dimensions: "201 x 205 x 196 cm"
    },
    {
      id: 113,
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      date: "1889 CE",
      culture: "Post-Impressionism",
      medium: "Oil on canvas",
      location: "Museum of Modern Art (MoMA), New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      facts: [
        "Painted from memory during van Gogh's stay at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence.",
        "The swirling sky conveys intense emotion rather than optical reality, making it a touchstone of Expressionism.",
        "The cypress tree connects earth and sky like a dark flame, while the village below remains calm and ordered."
      ],
      dimensions: "73.7 x 92.1 cm"
    },
    {
      id: 114,
      title: "Mont Sainte-Victoire seen from the Bibémus Quarry",
      artist: "Paul Cézanne",
      date: "c. 1897 CE",
      culture: "Post-Impressionism, France",
      medium: "Oil on canvas",
      location: "The Baltimore Museum of Art, Baltimore",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Paul_C%C3%A9zanne_110.jpg/400px-Paul_C%C3%A9zanne_110.jpg",
      facts: [
        "Cézanne painted this mountain over 80 times, reducing natural forms to geometric shapes—cylinders, spheres, and cones.",
        "His approach of building form through color patches rather than line laid the foundation for Cubism.",
        "The flattened perspective and visible brushstrokes challenge traditional illusionism, bridging Impressionism and modern art."
      ],
      dimensions: "65 x 81 cm"
    },
    {
      id: 115,
      title: "The Scream",
      artist: "Edvard Munch",
      date: "1893 CE",
      culture: "Expressionism, Norway",
      medium: "Tempera and pastels on cardboard",
      location: "National Gallery, Oslo, Norway",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/400px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
      facts: [
        "Munch described the inspiration: feeling an 'infinite scream passing through nature' while walking at sunset.",
        "The undulating lines of sky and landscape merge with the central figure, externalizing inner psychological anguish.",
        "One of the most iconic images in art history, the figure's androgynous, skull-like face has become a universal symbol of anxiety."
      ],
      dimensions: "91 x 73.5 cm"
    },
    {
      id: 116,
      title: "Where Do We Come From? What Are We? Where Are We Going?",
      artist: "Paul Gauguin",
      date: "1897-1898 CE",
      culture: "Post-Impressionism / Symbolism",
      medium: "Oil on canvas",
      location: "Museum of Fine Arts, Boston",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Paul_Gauguin_-_D%27ou_venons-nous.jpg/400px-Paul_Gauguin_-_D%27ou_venons-nous.jpg",
      facts: [
        "Painted in Tahiti as a final artistic statement before a suicide attempt; reads right to left from birth to death.",
        "The large-scale composition addresses fundamental existential questions through Polynesian figures and symbolism.",
        "Gauguin's use of flat, non-naturalistic color and Polynesian imagery reflects his pursuit of a 'primitive' spirituality."
      ],
      dimensions: "139.1 x 374.6 cm"
    },
    {
      id: 117,
      title: "Carson, Pirie, Scott and Company Building (now Sullivan Center)",
      artist: "Louis Sullivan",
      date: "1899-1903 CE",
      culture: "Chicago School, United States",
      medium: "Iron, steel, glass, and terra cotta",
      location: "Chicago, Illinois, USA",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sullivan_Center_%28Carson%2C_Pirie%2C_Scott_and_Company_Building%29.jpg/400px-Sullivan_Center_%28Carson%2C_Pirie%2C_Scott_and_Company_Building%29.jpg",
      facts: [
        "Sullivan's famous dictum 'form follows function' is embodied in the clear expression of the steel frame through the facade.",
        "The ornate cast-iron decoration at street level contrasts with the clean, geometric upper floors—commerce below, offices above.",
        "Pioneered the modern department store design with large 'Chicago windows' that maximized display space and natural light."
      ],
      dimensions: "Site"
    },
    {
      id: 118,
      title: "The Kiss",
      artist: "Gustav Klimt",
      date: "1907-1908 CE",
      culture: "Vienna Secession / Art Nouveau",
      medium: "Oil and gold leaf on canvas",
      location: "Österreichische Galerie Belvedere, Vienna",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/400px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
      facts: [
        "The lavish gold leaf references Byzantine mosaics Klimt saw in Ravenna, blending fine art with decorative art.",
        "The geometric patterns on the robes differ: rectangles (masculine) for the man, circles and flowers (feminine) for the woman.",
        "The couple kneels at the edge of a flower-covered cliff, creating both intimacy and a sense of precarious beauty."
      ],
      dimensions: "180 x 180 cm"
    },
    {
      id: 119,
      title: "Les Demoiselles d'Avignon",
      artist: "Pablo Picasso",
      date: "1907 CE",
      culture: "Proto-Cubism, France/Spain",
      medium: "Oil on canvas",
      location: "Museum of Modern Art (MoMA), New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/400px-Les_Demoiselles_d%27Avignon.jpg",
      facts: [
        "Five nude women from a Barcelona brothel confront the viewer with angular, fractured forms and mask-like faces.",
        "The two right-hand figures show the influence of African and Iberian sculpture, marking a decisive break with Western tradition.",
        "Considered one of the most important paintings of the 20th century, it paved the way for Cubism and modern abstraction."
      ],
      dimensions: "243.9 x 233.7 cm"
    },
    {
      id: 120,
      title: "The Steerage",
      artist: "Alfred Stieglitz",
      date: "1907 CE",
      culture: "Early modernist photography, United States",
      medium: "Photogravure (photograph)",
      location: "Various collections including MoMA",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Alfred_Stieglitz_-_The_Steerage_-_Google_Art_Project.jpg/400px-Alfred_Stieglitz_-_The_Steerage_-_Google_Art_Project.jpg",
      facts: [
        "Stieglitz called this his greatest photograph, seeing in it abstract geometric relationships of shapes and lines.",
        "The gangway divides the image between first-class passengers above and steerage passengers below, suggesting class division.",
        "A key image in 'straight photography,' advocating for unmanipulated photographs as fine art equal to painting."
      ],
      dimensions: "33.3 x 26.5 cm"
    },
    {
      id: 121,
      title: "The Portuguese",
      artist: "Georges Braque",
      date: "1911 CE",
      culture: "Analytical Cubism, France",
      medium: "Oil on canvas",
      location: "Kunstmuseum Basel, Basel, Switzerland",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Georges_Braque%2C_1911%2C_The_Portuguese_%28The_Emigrant%29%2C_oil_on_canvas%2C_117_x_82_cm%2C_Kunstmuseum_Basel.jpg/400px-Georges_Braque%2C_1911%2C_The_Portuguese_%28The_Emigrant%29%2C_oil_on_canvas%2C_117_x_82_cm%2C_Kunstmuseum_Basel.jpg",
      facts: [
        "One of the first Cubist paintings to include stenciled letters and numbers, mixing sign-painting with fine art.",
        "The figure of a musician is fragmented into overlapping geometric planes, shown from multiple viewpoints simultaneously.",
        "Demonstrates Analytical Cubism's monochromatic palette and near-total dissolution of recognizable forms."
      ],
      dimensions: "117 x 81 cm"
    },
    {
      id: 122,
      title: "Goldfish",
      artist: "Henri Matisse",
      date: "1912 CE",
      culture: "Fauvism/Modernism, France",
      medium: "Oil on canvas",
      location: "Pushkin Museum, Moscow",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Matisse-Goldfish-1912.jpg/400px-Matisse-Goldfish-1912.jpg",
      facts: [
        "Matisse used bold, non-naturalistic colors and flattened perspective, hallmarks of his Fauvist approach.",
        "The painting shows the influence of Islamic art and Moroccan culture, which Matisse encountered on his travels.",
        "The goldfish float in a bowl that seems to exist in multiple spatial planes, reflecting Cubist influence on Matisse's work."
      ],
      dimensions: "146 x 97 cm"
    },
    {
      id: 123,
      title: "Improvisation 28 (second version)",
      artist: "Vasily Kandinsky",
      date: "1912 CE",
      culture: "Expressionism / Early Abstraction, Germany/Russia",
      medium: "Oil on canvas",
      location: "Solomon R. Guggenheim Museum, New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Vassily_Kandinsky%2C_1912_-_Improvisation_27%2C_Garden_of_Love_II.jpg/400px-Vassily_Kandinsky%2C_1912_-_Improvisation_27%2C_Garden_of_Love_II.jpg",
      facts: [
        "One of the earliest purely abstract paintings, where Kandinsky sought to express spiritual content through color and form alone.",
        "Kandinsky titled his works like musical compositions—'Improvisations' were spontaneous, 'Compositions' were planned.",
        "He theorized that colors have emotional and spiritual properties: blue is spiritual, yellow is aggressive, red is warm."
      ],
      dimensions: "111.4 x 162.1 cm"
    },
    {
      id: 124,
      title: "Memorial Sheet for Karl Liebknecht",
      artist: "Käthe Kollwitz",
      date: "1919-1920 CE",
      culture: "Expressionism, Germany",
      medium: "Woodcut",
      location: "Various collections (multiple impressions)",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kollwitz_Memorial_Sheet_for_Karl_Liebknecht.jpg/400px-Kollwitz_Memorial_Sheet_for_Karl_Liebknecht.jpg",
      facts: [
        "Commemorates the murdered socialist leader Karl Liebknecht, showing workers mourning over his body.",
        "Kollwitz's powerful woodcut technique—bold, rough, and expressive—conveys the grief and anger of the working class.",
        "Kollwitz devoted her art to depicting the suffering of the poor and the horrors of war, especially after losing her son in WWI."
      ],
      dimensions: "37 x 52 cm"
    },
    {
      id: 125,
      title: "Villa Savoye",
      artist: "Le Corbusier (Charles-Édouard Jeanneret)",
      date: "1929 CE",
      culture: "International Style / Modernism, France",
      medium: "Steel and reinforced concrete",
      location: "Poissy, France",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/VillaSavoworke.jpg/400px-VillaSavoworke.jpg",
      facts: [
        "Embodies Le Corbusier's 'Five Points of New Architecture': pilotis, free plan, free facade, ribbon windows, and roof garden.",
        "The house is raised on thin columns (pilotis), freeing the ground level and making the building appear to float.",
        "Called a 'machine for living,' it represents the International Style's rejection of ornament in favor of function and geometry."
      ],
      dimensions: "Site"
    },
    {
      id: 126,
      title: "Composition with Red, Blue and Yellow",
      artist: "Piet Mondrian",
      date: "1930 CE",
      culture: "De Stijl / Neoplasticism, Netherlands",
      medium: "Oil on canvas",
      location: "Kunsthaus Zürich, Zurich, Switzerland",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tableau_I%2C_by_Piet_Mondriaan.jpg/400px-Tableau_I%2C_by_Piet_Mondriaan.jpg",
      facts: [
        "Reduced painting to its most essential elements: primary colors, black lines, and white space in asymmetrical balance.",
        "Mondrian believed this pure abstraction could express universal harmony and spiritual truth (influenced by Theosophy).",
        "His De Stijl movement influenced not just painting but architecture, design, typography, and fashion."
      ],
      dimensions: "46 x 46 cm"
    },
    {
      id: 127,
      title: "Object (Le Déjeuner en fourrure / Breakfast in Fur)",
      artist: "Meret Oppenheim",
      date: "1936 CE",
      culture: "Surrealism, Switzerland/France",
      medium: "Fur-covered cup, saucer, and spoon",
      location: "Museum of Modern Art (MoMA), New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Meret_Oppenheim_Object.jpg/400px-Meret_Oppenheim_Object.jpg",
      facts: [
        "A teacup, saucer, and spoon covered in Chinese gazelle fur, transforming everyday objects into something unsettling.",
        "Inspired by a conversation with Picasso at a café about how anything could be covered in fur.",
        "Became the quintessential Surrealist object, provoking a visceral reaction—the tactile appeal of fur versus the revulsion of drinking from it."
      ],
      dimensions: "Cup 10.9 cm diameter; saucer 23.7 cm diameter; spoon 20.2 cm long"
    },
    {
      id: 128,
      title: "Fallingwater (Kaufmann Residence)",
      artist: "Frank Lloyd Wright",
      date: "1936-1939 CE",
      culture: "Organic Architecture, United States",
      medium: "Reinforced concrete, sandstone, steel, and glass",
      location: "Mill Run, Pennsylvania, USA",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Fallingwater3.jpg/400px-Fallingwater3.jpg",
      facts: [
        "The house is cantilevered over a waterfall, embodying Wright's philosophy of 'organic architecture'—harmony with nature.",
        "Reinforced concrete trays project dramatically over Bear Run, making the house appear to float above the stream.",
        "Considered the greatest work of American architecture, it resolves the tension between modern technology and natural environment."
      ],
      dimensions: "Site"
    },
    {
      id: 129,
      title: "The Two Fridas",
      artist: "Frida Kahlo",
      date: "1939 CE",
      culture: "Surrealism/Mexican Modernism",
      medium: "Oil on canvas",
      location: "Museo de Arte Moderno, Mexico City",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/The_Two_Fridas.jpg/400px-The_Two_Fridas.jpg",
      facts: [
        "Painted after her divorce from Diego Rivera, the two Fridas represent her dual identity—European and Mexican heritage.",
        "The two figures share a connected bloodline: one holds a miniature portrait of Rivera, the other bleeds onto her white dress.",
        "Kahlo's largest painting, it explores themes of identity, pain, and heartbreak central to her autobiographical art."
      ],
      dimensions: "173.5 x 173 cm"
    },
    {
      id: 130,
      title: "The Migration of the Negro, Panel no. 49",
      artist: "Jacob Lawrence",
      date: "1940-1941 CE",
      culture: "Harlem Renaissance / American Modernism",
      medium: "Casein tempera on hardboard",
      location: "The Phillips Collection, Washington, D.C. (odd panels); MoMA, New York (even panels)",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/JacobLawrence-migration-series-panel49.jpg/400px-JacobLawrence-migration-series-panel49.jpg",
      facts: [
        "Part of a 60-panel series depicting the Great Migration of African Americans from the rural South to the urban North.",
        "Lawrence was only 23 when he completed the series, using bold flat colors and simplified geometric forms.",
        "Panel 49 shows segregated dining facilities, addressing systemic racism that migrants encountered in the North."
      ],
      dimensions: "Each panel approximately 30.5 x 45.7 cm"
    },
    {
      id: 131,
      title: "The Jungle",
      artist: "Wifredo Lam",
      date: "1943 CE",
      culture: "Surrealism / Afro-Cuban Modernism",
      medium: "Gouache on paper mounted on canvas",
      location: "Museum of Modern Art (MoMA), New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/WifredoLam-TheJungle.jpg/400px-WifredoLam-TheJungle.jpg",
      facts: [
        "Blends Cubist fragmentation, Surrealist imagery, and Afro-Cuban Santería religious symbolism in a dense sugar cane field.",
        "The hybrid human-plant figures reference both the exploitation of sugar plantation labor and Afro-Cuban spiritual traditions.",
        "Lam, of Chinese, African, and European descent, synthesized European modernism with his Caribbean cultural heritage."
      ],
      dimensions: "239.4 x 229.9 cm"
    },
    {
      id: 132,
      title: "Dream of a Sunday Afternoon in Alameda Park",
      artist: "Diego Rivera",
      date: "1947 CE",
      culture: "Mexican Muralism",
      medium: "Fresco",
      location: "Museo Mural Diego Rivera, Mexico City",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dream_of_a_Sunday_Afternoon_in_Alameda_Park.jpg/400px-Dream_of_a_Sunday_Afternoon_in_Alameda_Park.jpg",
      facts: [
        "Depicts 400 years of Mexican history as a dream-like stroll through Alameda Park, with historical figures mingling freely.",
        "Rivera includes himself as a boy holding the hand of La Calavera Catrina (the skeleton lady), José Guadalupe Posada's creation.",
        "The mural was controversial for including the phrase 'God does not exist,' which was later removed and restored."
      ],
      dimensions: "4.8 x 15 m"
    },
    {
      id: 133,
      title: "Fountain (second version)",
      artist: "Marcel Duchamp",
      date: "1950 CE (original 1917 CE)",
      culture: "Dada / Conceptual Art",
      medium: "Readymade glazed sanitary china with black paint",
      location: "Various museums hold authorized replicas; original lost",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg/400px-Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg",
      facts: [
        "A mass-produced urinal signed 'R. Mutt 1917,' submitted to challenge the definition of what constitutes art.",
        "The original was rejected and subsequently lost; Duchamp authorized replicas in the 1960s.",
        "Regularly voted the most influential artwork of the 20th century, it launched the idea that art is defined by context and concept."
      ],
      dimensions: "36 x 48 x 61 cm"
    },
    {
      id: 134,
      title: "Self-Portrait Dedicated to Dr. Eloesser",
      artist: "Frida Kahlo",
      date: "1940 CE",
      culture: "Surrealism / Mexican Modernism",
      medium: "Oil on Masonite",
      location: "Private collection",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Frida_Kahlo_%28self_portrait%29.jpg/400px-Frida_Kahlo_%28self_portrait%29.jpg",
      facts: [
        "Dedicated to her close friend and physician Dr. Leo Eloesser, who treated her after her divorce from Diego Rivera.",
        "Kahlo wears a thorn necklace that draws blood—symbolizing her suffering—and a hummingbird pendant, a Mesoamerican love charm.",
        "The pre-Columbian earrings were a gift from Picasso, and the hand necklace was from Diego Rivera."
      ],
      dimensions: "59.5 x 40 cm"
    },
    {
      id: 135,
      title: "Narcissus Garden",
      artist: "Yayoi Kusama",
      date: "1966 CE",
      culture: "Contemporary / Installation Art, Japan",
      medium: "Mirror balls (stainless steel or plastic)",
      location: "Originally installed at Venice Biennale (reinstalled in various locations)",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Yayoi_Kusama_Narcissus_Garden.jpg/400px-Yayoi_Kusama_Narcissus_Garden.jpg",
      facts: [
        "Kusama placed 1,500 mirrored spheres on the ground at the Venice Biennale and sold them for $2 each, critiquing art commercialism.",
        "The reflective balls created infinite distortions of the viewer and surroundings, evoking narcissism and self-obsession.",
        "She was not officially invited to the Biennale but set up her installation guerrilla-style in an outdoor area."
      ],
      dimensions: "Variable (installation of 1,500 spheres, each approximately 30 cm diameter)"
    },
    {
      id: 136,
      title: "The Dinner Party",
      artist: "Judy Chicago",
      date: "1974-1979 CE",
      culture: "Feminist Art, United States",
      medium: "Ceramic, porcelain, textile, mixed media",
      location: "Brooklyn Museum, New York",
      unit: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/The_Dinner_Party_by_Judy_Chicago.jpg/400px-The_Dinner_Party_by_Judy_Chicago.jpg",
      facts: [
        "A triangular banquet table with 39 place settings honoring important women from history and mythology.",
        "Each setting features a unique ceramic plate with butterfly/vulval imagery and an embroidered runner.",
        "An additional 999 names of notable women are inscribed on the 'Heritage Floor' beneath the table."
      ],
      dimensions: "Approximately 14.6 x 14.6 x 14.6 m (triangular)"
    },
    // ===== UNIT 5: Indigenous Americas (works 137-152) =====
    {
      id: 137,
      title: "Chavín de Huántar",
      artist: "Unknown",
      date: "c. 900-200 BCE",
      culture: "Chavín, Peru",
      medium: "Stone (granite and limestone)",
      location: "Chavín de Huántar, Peru",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chavin_de_Huantar_centro.jpg/400px-Chavin_de_Huantar_centro.jpg",
      facts: [
        "A major ceremonial center with a labyrinthine interior containing the Lanzón, a 4.5-meter carved granite shaft depicting a fanged deity.",
        "The temple's interior passages were designed to create disorienting acoustics, possibly enhancing shamanistic rituals.",
        "The Chavín style, with its jaguar and serpent imagery, unified diverse Andean cultures through shared religious iconography."
      ],
      dimensions: "Site"
    },
    {
      id: 138,
      title: "Mesa Verde cliff dwellings",
      artist: "Unknown",
      date: "c. 450-1300 CE",
      culture: "Ancestral Puebloan (Anasazi)",
      medium: "Sandstone, wood, and mortar",
      location: "Mesa Verde National Park, Colorado, USA",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mesa_Verde_National_Park_Cliff_Palace_2006_09_12.jpg/400px-Mesa_Verde_National_Park_Cliff_Palace_2006_09_12.jpg",
      facts: [
        "Cliff Palace, the largest cliff dwelling, contains approximately 150 rooms and 23 kivas (circular ceremonial rooms).",
        "Built into natural alcoves in canyon walls, the dwellings provided natural defense and climate control.",
        "The Ancestral Puebloans abandoned Mesa Verde around 1300 CE, likely due to prolonged drought."
      ],
      dimensions: "Site"
    },
    {
      id: 139,
      title: "Yaxchilán Structure 40 lintels and site",
      artist: "Unknown",
      date: "c. 725 CE",
      culture: "Maya, Mexico",
      medium: "Limestone with traces of paint",
      location: "Yaxchilán, Chiapas, Mexico (lintels in British Museum and Museo Nacional de Antropología)",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Yaxchilan_Lintel_24.jpg/400px-Yaxchilan_Lintel_24.jpg",
      facts: [
        "Lintel 24 shows Lady Xoc performing a blood-letting ritual by pulling a thorn-studded rope through her tongue.",
        "Lintel 25 depicts the vision serpent summoned by the ritual, from whose jaws a warrior ancestor emerges.",
        "These carvings document the political and ritual roles of Maya royal women, challenging assumptions about gender in ancient Mesoamerica."
      ],
      dimensions: "Lintel 24: 109 x 78 cm"
    },
    {
      id: 140,
      title: "Great Serpent Mound",
      artist: "Unknown",
      date: "c. 1070 CE (disputed; possibly earlier)",
      culture: "Mississippian (or Fort Ancient culture), Ohio",
      medium: "Earthwork / effigy mound",
      location: "Adams County, Ohio, USA",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Serpent_Mound.jpg/400px-Serpent_Mound.jpg",
      facts: [
        "The largest surviving effigy mound in the world at approximately 411 meters (1,348 feet) long.",
        "The serpent appears to be swallowing an egg (or the sun), possibly connected to astronomical alignments.",
        "The purpose remains debated—it may be connected to celestial events, as the head aligns with the summer solstice sunset."
      ],
      dimensions: "Approximately 411 m long, 1-1.5 m high"
    },
    {
      id: 141,
      title: "Templo Mayor (Main Temple) at Tenochtitlan",
      artist: "Unknown",
      date: "c. 1375-1520 CE",
      culture: "Aztec (Mexica)",
      medium: "Stone, volcanic rock",
      location: "Mexico City, Mexico (Templo Mayor Museum)",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Templo_Mayor.jpg/400px-Templo_Mayor.jpg",
      facts: [
        "The double pyramid was dedicated to Huitzilopochtli (war/sun god) and Tlaloc (rain god), reflecting Aztec duality of war and agriculture.",
        "Built in seven successive layers, each expansion buried the previous temple beneath, like a nesting doll.",
        "The Coyolxauhqui Stone at the base depicts the dismembered moon goddess, mirroring the myth of her defeat by Huitzilopochtli."
      ],
      dimensions: "Site (original pyramid approximately 60 m high)"
    },
    {
      id: 142,
      title: "Ruler's feather headdress (Quetzalfederhaube)",
      artist: "Unknown",
      date: "c. 1428-1520 CE",
      culture: "Aztec (Mexica)",
      medium: "Quetzal and other feathers, gold, and gemstones",
      location: "Weltmuseum Wien (World Museum Vienna), Austria",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Quetzalfeder-Kopfschmuck_%28Penacho%29.jpg/400px-Quetzalfeder-Kopfschmuck_%28Penacho%29.jpg",
      facts: [
        "Made with over 400 quetzal feathers, gold, and precious stones; featherwork (amantecayotl) was the most prized Aztec art form.",
        "Traditionally attributed to Moctezuma II and said to have been sent to Hernán Cortés, though this provenance is debated.",
        "Mexico has repeatedly requested the headdress's return from Vienna, making it a symbol of cultural repatriation debates."
      ],
      dimensions: "Approximately 116 cm high, 175 cm diameter"
    },
    {
      id: 143,
      title: "City of Cusco (including Qorikancha and Santo Domingo)",
      artist: "Unknown (Inca architects)",
      date: "c. 1440 CE",
      culture: "Inca, Peru",
      medium: "Andesite stone",
      location: "Cusco, Peru",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qorikancha_and_Convent_of_Santo_Domingo.jpg/400px-Qorikancha_and_Convent_of_Santo_Domingo.jpg",
      facts: [
        "The Inca built Qorikancha (Temple of the Sun) with precisely fitted stone blocks requiring no mortar.",
        "The Spanish built the Church of Santo Domingo directly on top of the Inca temple, creating a layered colonial/indigenous site.",
        "Cusco was laid out in the shape of a puma, with the fortress of Sacsayhuamán forming the head."
      ],
      dimensions: "Site"
    },
    {
      id: 144,
      title: "Maize cobs",
      artist: "Unknown",
      date: "c. 1440-1532 CE",
      culture: "Inca, Peru",
      medium: "Sheet metal (gold and silver alloy)",
      location: "Ethnologisches Museum, Berlin",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Inca_golden_corn.jpg/400px-Inca_golden_corn.jpg",
      facts: [
        "Metallic replicas of corn that were placed in the Qorikancha garden alongside other gold and silver plants and animals.",
        "The Incas created a 'garden of gold' at Qorikancha to honor Inti (the sun god) with perfect metallic replicas of nature.",
        "Maize was sacred to the Inca and central to their economy, religion, and state rituals including chicha (corn beer) production."
      ],
      dimensions: "Approximately 20-25 cm long"
    },
    {
      id: 145,
      title: "City of Machu Picchu",
      artist: "Unknown (Inca architects under Pachacuti)",
      date: "c. 1450-1540 CE",
      culture: "Inca, Peru",
      medium: "Granite",
      location: "Cusco Region, Peru",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/400px-Machu_Picchu%2C_Peru.jpg",
      facts: [
        "A royal estate built at 2,430 meters elevation, it was abandoned during the Spanish conquest and remained unknown to outsiders until 1911.",
        "Features the Intihuatana stone ('hitching post of the sun'), an astronomical device aligned with solstices.",
        "The sophisticated dry-stone construction and terracing demonstrate advanced Inca engineering and agricultural technology."
      ],
      dimensions: "Site"
    },
    {
      id: 146,
      title: "All-T'oqapu tunic",
      artist: "Unknown",
      date: "c. 1450-1540 CE",
      culture: "Inca, Peru",
      medium: "Camelid fiber and cotton",
      location: "Dumbarton Oaks Research Library and Collection, Washington, D.C.",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tunic_DO.jpg/400px-Tunic_DO.jpg",
      facts: [
        "Covered entirely in t'oqapu—small, standardized geometric designs that may function as a form of Inca writing or heraldry.",
        "Only the Sapa Inca (emperor) could wear an all-t'oqapu tunic, making it the ultimate symbol of authority.",
        "Inca textiles were more valuable than gold or silver, and cumbi cloth like this required highly skilled specialist weavers."
      ],
      dimensions: "Approximately 90.2 x 77.2 cm"
    },
    {
      id: 147,
      title: "Bandolier bag",
      artist: "Unknown (Lenape/Delaware or Great Lakes peoples)",
      date: "c. 1850 CE",
      culture: "Lenape (Delaware), Eastern Woodlands",
      medium: "Beadwork on leather or cloth",
      location: "Various collections including the Detroit Institute of Arts",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bandolier_bag_NMAI.jpg/400px-Bandolier_bag_NMAI.jpg",
      facts: [
        "Ornamental shoulder bags worn by men during ceremonies, not used to carry ammunition despite the name.",
        "Created using European glass trade beads, demonstrating the creative adaptation of colonial materials into indigenous art forms.",
        "The elaborate floral and geometric beadwork patterns are unique to each maker and often carry cultural significance."
      ],
      dimensions: "Approximately 72 x 46 cm"
    },
    {
      id: 148,
      title: "Transformation mask",
      artist: "Unknown",
      date: "Late 19th century CE",
      culture: "Kwakwaka'wakw (Kwakiutl), Northwest Coast",
      medium: "Painted wood and string",
      location: "Various collections including Royal BC Museum",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kwakwaka%27wakw_mask_1.jpg/400px-Kwakwaka%27wakw_mask_1.jpg",
      facts: [
        "Opens mechanically to reveal a second face inside, illustrating the transformative power of supernatural beings.",
        "Used in potlatch ceremonies and winter dances, the transformation mask dramatizes clan origin stories.",
        "The outer form may show an animal (like an eagle) that opens to reveal a human face, reflecting the belief that spirits can change form."
      ],
      dimensions: "Approximately 60 cm (when closed)"
    },
    {
      id: 149,
      title: "Painted elk hide (attributed to Cotsiogo/Cadzi Cody)",
      artist: "Attributed to Cotsiogo (Cadzi Cody)",
      date: "c. 1890-1900 CE",
      culture: "Eastern Shoshone, Wyoming",
      medium: "Painted elk hide",
      location: "National Museum of the American Indian, Washington, D.C. (and other collections)",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Painted_elk_hide.jpg/400px-Painted_elk_hide.jpg",
      facts: [
        "Depicts the Sun Dance ceremony, one of the most important spiritual rituals of Plains peoples.",
        "The hide painting tradition shifted from recording war exploits to documenting cultural practices as indigenous life was threatened.",
        "Cotsiogo adapted his art for a tourist market while maintaining authentic cultural content, navigating between two worlds."
      ],
      dimensions: "Approximately 180 x 160 cm"
    },
    {
      id: 150,
      title: "Black-on-black ceramic vessel",
      artist: "Maria Martínez and Julian Martínez",
      date: "c. mid-20th century CE",
      culture: "Tewa, San Ildefonso Pueblo, New Mexico",
      medium: "Blackware ceramic",
      location: "Various collections including National Museum of the American Indian",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Maria_Martinez_black_on_black_pot.jpg/400px-Maria_Martinez_black_on_black_pot.jpg",
      facts: [
        "Maria Martínez revived and perfected the black-on-black pottery technique of the San Ildefonso Pueblo.",
        "The matte-and-glossy-black design is achieved by smothering the fire with manure, creating a reducing atmosphere.",
        "Maria shaped the pots while Julian painted the designs; they helped revitalize Pueblo pottery as a living art form."
      ],
      dimensions: "Varies, typically 20-35 cm diameter"
    },
    {
      id: 151,
      title: "The Codex Mendoza",
      artist: "Unknown (indigenous Aztec painters for Spanish colonial administration)",
      date: "c. 1541-1542 CE",
      culture: "Aztec/Colonial Mexico",
      medium: "Ink and pigments on paper",
      location: "Bodleian Library, Oxford, England",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Codex_Mendoza_folio_2r.jpg/400px-Codex_Mendoza_folio_2r.jpg",
      facts: [
        "Created after the Spanish conquest to record Aztec history, tribute lists, and daily life for the Spanish viceroy Antonio de Mendoza.",
        "Combines indigenous pictographic traditions with European alphabetic annotations in Nahuatl and Spanish.",
        "The founding page shows the eagle on a cactus eating a serpent—the origin myth of Tenochtitlan and now Mexico's national symbol."
      ],
      dimensions: "Approximately 32.7 x 22.9 cm per page"
    },
    {
      id: 152,
      title: "Olmec-style mask",
      artist: "Unknown",
      date: "c. 900-400 BCE",
      culture: "Olmec, Gulf Coast, Mexico",
      medium: "Jadeite",
      location: "Various collections",
      unit: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Olmec_Mask_1.jpg/400px-Olmec_Mask_1.jpg",
      facts: [
        "The Olmec are considered the 'mother culture' of Mesoamerica, and their jade masks set artistic standards for later civilizations.",
        "Jade was the most precious material in Mesoamerica, associated with water, maize, and life itself.",
        "The mask's naturalistic features—heavy-lidded eyes, broad nose, downturned mouth—define the distinctive Olmec sculptural style."
      ],
      dimensions: "Approximately 15-20 cm high"
    },
    // ===== UNIT 6: Africa (works 153-166) =====
    {
      id: 153,
      title: "Conical tower and circular wall of Great Zimbabwe",
      artist: "Unknown (Shona peoples)",
      date: "c. 1000-1400 CE",
      culture: "Shona, Zimbabwe",
      medium: "Coursed granite blocks",
      location: "Great Zimbabwe, near Masvingo, Zimbabwe",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Great_Zimbabwe.jpg/400px-Great_Zimbabwe.jpg",
      facts: [
        "The largest stone structure in sub-Saharan Africa built before the modern era, with walls up to 11 meters high.",
        "The conical tower in the Great Enclosure may symbolize a grain silo or have ritual significance; its exact purpose is debated.",
        "European colonizers long denied that indigenous Africans built Great Zimbabwe, attributing it to Phoenicians or other outsiders."
      ],
      dimensions: "Site; Great Enclosure wall approximately 250 m circumference"
    },
    {
      id: 154,
      title: "Wall plaque, warrior chief and attendants, from Benin",
      artist: "Unknown (Benin court artists)",
      date: "16th century CE",
      culture: "Edo peoples, Benin Kingdom, Nigeria",
      medium: "Cast brass (often called 'Benin Bronzes')",
      location: "British Museum, London (and other institutions)",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Benin_plaque_in_the_Ethnological_Museum%2C_Berlin_-_029.JPG/400px-Benin_plaque_in_the_Ethnological_Museum%2C_Berlin_-_029.JPG",
      facts: [
        "Over 1,000 brass plaques decorated the pillars of the Oba's palace, functioning as a visual history of the kingdom.",
        "Cast using the sophisticated lost-wax technique, demonstrating metalworking skills that astonished European visitors.",
        "Looted by the British during the punitive expedition of 1897; their repatriation remains a major cultural debate."
      ],
      dimensions: "Approximately 43 x 38 cm"
    },
    {
      id: 155,
      title: "Sika dwa kofi (Golden Stool)",
      artist: "Unknown (Asante court artists)",
      date: "c. 1700 CE",
      culture: "Asante peoples, Ghana",
      medium: "Gold over wood and bells",
      location: "Asante Royal Palace, Kumasi, Ghana (not publicly displayed)",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Goldener_Stuhl_Ashanti.jpg/400px-Goldener_Stuhl_Ashanti.jpg",
      facts: [
        "Believed to house the sunsum (soul) of the entire Asante nation; it is never allowed to touch the ground.",
        "Legend says it was conjured from the sky by the priest Okomfo Anokye, landing on King Osei Tutu's lap.",
        "The British demand to sit on the Golden Stool in 1900 triggered the War of the Golden Stool (Yaa Asantewaa War)."
      ],
      dimensions: "Approximately 46 x 61 x 30 cm"
    },
    {
      id: 156,
      title: "Ndop (portrait figure) of King Mishe miShyaang maMbul",
      artist: "Unknown (Kuba court sculptor)",
      date: "c. 1760-1780 CE",
      culture: "Kuba peoples, Democratic Republic of the Congo",
      medium: "Wood",
      location: "Brooklyn Museum, New York",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Kuba_ndop_BrooklynMuseum.jpg/400px-Kuba_ndop_BrooklynMuseum.jpg",
      facts: [
        "Ndop figures represent Kuba kings in an idealized, youthful form—they are portraits of the office, not the individual.",
        "Each ndop includes an ibol, a unique symbol carved in front identifying the specific king (here, a drum).",
        "These figures served as stand-ins for the king when he was absent and were placed near his bed to protect him in death."
      ],
      dimensions: "Approximately 49.5 cm high"
    },
    {
      id: 157,
      title: "Power figure (Nkisi n'kondi)",
      artist: "Unknown (Kongo peoples sculptor)",
      date: "c. late 19th century CE",
      culture: "Kongo peoples, Democratic Republic of the Congo",
      medium: "Wood and mixed media (nails, blades, cloth, medicinal materials)",
      location: "Various collections including the Metropolitan Museum of Art",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nkisi_Nkondi_Yombe.jpg/400px-Nkisi_Nkondi_Yombe.jpg",
      facts: [
        "Nails and blades driven into the figure activate its spiritual power to heal, protect, or enforce oaths and agreements.",
        "The medicinal pack (bilongo) in the abdomen contains spiritually charged materials that give the figure its power.",
        "Each nail represents a specific request, oath, or legal agreement—the figure functioned as a kind of spiritual contract enforcer."
      ],
      dimensions: "Approximately 90-120 cm high"
    },
    {
      id: 158,
      title: "Female (Pwo) mask",
      artist: "Unknown (Chokwe peoples artist)",
      date: "Late 19th-early 20th century CE",
      culture: "Chokwe peoples, Democratic Republic of the Congo/Angola",
      medium: "Wood, fiber, pigment, and metal",
      location: "Various collections",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Masque_Chokwe.jpg/400px-Masque_Chokwe.jpg",
      facts: [
        "Represents an idealized female ancestor and is danced by male performers during initiation ceremonies.",
        "The elaborate scarification patterns (including the distinctive cross on the forehead) represent Chokwe ideals of beauty.",
        "Pwo masks celebrate female virtues of fertility, grace, and beauty while also teaching young initiates about gender roles."
      ],
      dimensions: "Approximately 25-40 cm high"
    },
    {
      id: 159,
      title: "Portrait mask (Mblo)",
      artist: "Unknown (Baule peoples artist)",
      date: "Early 20th century CE",
      culture: "Baule peoples, Côte d'Ivoire",
      medium: "Wood and pigment",
      location: "Various collections including the Metropolitan Museum of Art",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Masque_Baule.jpg/400px-Masque_Baule.jpg",
      facts: [
        "Mblo masks are individualized portraits of specific, named people—honored individuals in the community.",
        "The serene, refined features with high forehead, downcast eyes, and small mouth reflect Baule ideals of beauty and composure.",
        "Performed in secular entertainment dances, the masked dancer mimics the honored person's gestures while the audience guesses the identity."
      ],
      dimensions: "Approximately 35-45 cm high"
    },
    {
      id: 160,
      title: "Bundu/Sowei mask",
      artist: "Unknown (Mende or Temne peoples artist)",
      date: "19th-20th century CE",
      culture: "Mende peoples, Sierra Leone",
      medium: "Wood and pigment",
      location: "Various collections",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Brooklyn_Museum_22.1588_Helmet_Mask_Sowei.jpg/400px-Brooklyn_Museum_22.1588_Helmet_Mask_Sowei.jpg",
      facts: [
        "One of the only African masks traditionally danced by women, worn during Sande (Bundu) society initiation ceremonies.",
        "The elaborate hairstyle, neck rings (representing a healthy, prosperous woman), and smooth black surface represent the Mende feminine ideal.",
        "The helmet form completely covers the dancer's head, and the black color symbolizes the deep waters where Sande spirits dwell."
      ],
      dimensions: "Approximately 35-45 cm high"
    },
    {
      id: 161,
      title: "Ikenga (shrine figure)",
      artist: "Unknown (Igbo peoples artist)",
      date: "c. 19th-20th century CE",
      culture: "Igbo peoples, Nigeria",
      medium: "Wood",
      location: "Various collections",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Brooklyn_Museum_1997.81_Shrine_Figure_%28Ikenga%29.jpg/400px-Brooklyn_Museum_1997.81_Shrine_Figure_%28Ikenga%29.jpg",
      facts: [
        "Represents personal achievement, ambition, and the strength of an individual's right hand (used for action).",
        "The horns symbolize aggression, power, and determination—the ability to 'push through' obstacles.",
        "An Igbo man would commission an ikenga to embody his chi (personal god) and help him achieve success."
      ],
      dimensions: "Approximately 30-60 cm high"
    },
    {
      id: 162,
      title: "Lukasa (memory board)",
      artist: "Unknown (Luba peoples artist)",
      date: "c. 19th-20th century CE",
      culture: "Luba peoples, Democratic Republic of the Congo",
      medium: "Wood, beads, and metal",
      location: "Various collections",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lukasa_Memory_Board.jpg/400px-Lukasa_Memory_Board.jpg",
      facts: [
        "A mnemonic device used by the Mbudye (memory society) to recall the history, king lists, and sacred knowledge of the Luba.",
        "Beads and pins arranged on the board encode information—their size, color, position, and grouping all carry meaning.",
        "A trained reader 'reads' the board by touching the beads while reciting oral histories, making it a tactile archive."
      ],
      dimensions: "Approximately 25-30 cm long"
    },
    {
      id: 163,
      title: "Aka elephant mask",
      artist: "Unknown (Bamileke peoples artist, Kuosi society)",
      date: "19th-20th century CE",
      culture: "Bamileke peoples (Cameroon Grassfields)",
      medium: "Cloth, beads, raffia, and fiber",
      location: "Various collections",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Elephant_Mask_Bamileke.jpg/400px-Elephant_Mask_Bamileke.jpg",
      facts: [
        "Worn by members of the Kuosi warrior society during royal festivals and funerals to honor the king (fon).",
        "The elephant symbolizes royal power and wealth; only the king could grant permission for the mask to be danced.",
        "The elaborate beadwork uses trade beads—the number and quality of beads indicated the status of the wearer."
      ],
      dimensions: "Approximately 75 cm long (with panels)"
    },
    {
      id: 164,
      title: "Reliquary figure (Byeri)",
      artist: "Unknown (Fang peoples artist)",
      date: "19th-20th century CE",
      culture: "Fang peoples, Gabon",
      medium: "Wood",
      location: "Various collections including Musée du quai Branly, Paris",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Byeri_Fang_Louvre.jpg/400px-Byeri_Fang_Louvre.jpg",
      facts: [
        "Placed atop bark containers holding ancestral skulls and bones, the figure guards the relics and represents the lineage.",
        "The style intentionally combines childlike and adult features, representing the passage between the living and the dead.",
        "Fang reliquary figures deeply influenced European modernists, including Picasso, Matisse, and the German Expressionists."
      ],
      dimensions: "Approximately 40-70 cm high"
    },
    {
      id: 165,
      title: "Veranda post of enthroned king and senior wife (Olowe of Ise)",
      artist: "Olowe of Ise",
      date: "c. 1910-1914 CE",
      culture: "Yoruba peoples, Nigeria",
      medium: "Wood and pigment",
      location: "Art Institute of Chicago",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Art_Institute_of_Chicago_Olowe_of_Ise.jpg/400px-Art_Institute_of_Chicago_Olowe_of_Ise.jpg",
      facts: [
        "Olowe of Ise is one of the most acclaimed Yoruba artists, recognized by name—countering the myth that African art is anonymous.",
        "The unusually large wife towers behind the king, reflecting the Yoruba concept that a wife's support elevates the ruler.",
        "Carved from a single piece of wood, the post demonstrates Olowe's distinctive style of elongated figures and open negative space."
      ],
      dimensions: "Approximately 154 cm high"
    },
    {
      id: 166,
      title: "Head of an Ife king (Oni)",
      artist: "Unknown",
      date: "c. 12th-14th century CE",
      culture: "Yoruba peoples, Ife, Nigeria",
      medium: "Zinc brass",
      location: "Museum of Ife Antiquities, Nigeria",
      unit: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Benin_bronze_head.jpg/400px-Benin_bronze_head.jpg",
      facts: [
        "The naturalistic style astonished European scholars who initially could not believe it was made in Africa, revealing racist assumptions.",
        "The vertical lines on the face may represent scarification marks or the veil of a beaded crown worn by Ife rulers.",
        "Demonstrates a level of technical sophistication in lost-wax casting that equals or exceeds contemporary European metalwork."
      ],
      dimensions: "Approximately 30-35 cm high"
    },
    // ===== UNIT 7: West and Central Asia (works 167-182) =====
    {
      id: 167,
      title: "Buddha of Bamiyan",
      artist: "Unknown",
      date: "c. 400-800 CE (destroyed 2001)",
      culture: "Gandharan/Central Asian Buddhist",
      medium: "Cut rock withite and stucco overlay",
      location: "Bamiyan Valley, Afghanistan (destroyed by Taliban in 2001)",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Taller_Buddha_of_Bamiyan_before_and_after_destruction.jpg/400px-Taller_Buddha_of_Bamiyan_before_and_after_destruction.jpg",
      facts: [
        "The taller Buddha stood 55 meters (180 feet) high, one of the largest standing Buddha figures ever carved.",
        "Destroyed by the Taliban in March 2001, their destruction was condemned globally as an act of cultural terrorism.",
        "Combined Gandharan, Gupta, and Sasanian artistic influences, reflecting the Silk Road cultural exchange at Bamiyan."
      ],
      dimensions: "Taller: 55 m; Shorter: 38 m (both destroyed)"
    },
    {
      id: 168,
      title: "The Kaaba",
      artist: "Unknown (attributed to Abraham/Ibrahim in Islamic tradition)",
      date: "Pre-Islamic, rededicated by Muhammad c. 631-632 CE",
      culture: "Islamic",
      medium: "Granite and marble, covered with silk and gold-thread curtain (kiswah)",
      location: "Masjid al-Haram, Mecca, Saudi Arabia",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/A_Distant_View_of_the_Kaaba.jpg/400px-A_Distant_View_of_the_Kaaba.jpg",
      facts: [
        "The most sacred site in Islam; Muslims worldwide orient their prayers (qibla) toward the Kaaba five times daily.",
        "The Black Stone (al-Hajar al-Aswad) set in the eastern corner is believed by Muslims to date back to Adam.",
        "Approximately 2 million Muslims circle the Kaaba (tawaf) seven times counter-clockwise during the annual Hajj pilgrimage."
      ],
      dimensions: "Approximately 13.1 x 11.03 x 12.86 m"
    },
    {
      id: 169,
      title: "Jowo Rinpoche (installed in the Jokhang Temple)",
      artist: "Unknown",
      date: "Believed to date from the lifetime of the Buddha (5th century BCE); Jokhang Temple founded 7th century CE",
      culture: "Tibetan Buddhist",
      medium: "Metal alloy, possibly gilt bronze with precious stones",
      location: "Jokhang Temple, Lhasa, Tibet",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jokhang_temple.jpg/400px-Jokhang_temple.jpg",
      facts: [
        "Considered the most sacred and important statue in Tibet, depicting Buddha Shakyamuni at age 12.",
        "Legend says it was brought to Tibet in the 7th century by Princess Wencheng of the Tang dynasty as part of a marriage alliance.",
        "Pilgrims travel thousands of miles, sometimes prostrating their entire journey, to see the Jowo Rinpoche."
      ],
      dimensions: "Approximately 150 cm high"
    },
    {
      id: 170,
      title: "Dome of the Rock",
      artist: "Unknown (commissioned by Caliph Abd al-Malik)",
      date: "691-692 CE",
      culture: "Umayyad, Islamic",
      medium: "Stone masonry, wooden roof, ceramic tile (later additions), and gold (dome covering)",
      location: "Temple Mount, Jerusalem",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dome_of_Rock%2C_Temple_Mount%2C_Jerusalem.jpg/400px-Dome_of_Rock%2C_Temple_Mount%2C_Jerusalem.jpg",
      facts: [
        "One of the oldest surviving Islamic monuments, built over the rock from which Muhammad is believed to have ascended to heaven.",
        "The octagonal plan and dome reference Byzantine Christian architecture while the interior inscriptions assert Islamic theological claims.",
        "The interior mosaics feature elaborate vegetal designs but no human figures, following Islamic aniconism in religious spaces."
      ],
      dimensions: "Site; dome approximately 20 m diameter, 35 m high"
    },
    {
      id: 171,
      title: "Great Mosque of Isfahan (Masjid-e Jami)",
      artist: "Unknown (multiple builders over centuries)",
      date: "c. 700 CE onward (major Seljuk additions 1080-1157 CE)",
      culture: "Islamic (various dynasties), Iran",
      medium: "Stone, brick, tile, and stucco",
      location: "Isfahan, Iran",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Isfahan_Royal_Mosque.JPG/400px-Isfahan_Royal_Mosque.JPG",
      facts: [
        "Introduced the four-iwan plan to mosque architecture, with large vaulted halls opening onto a central courtyard.",
        "Built and rebuilt over 12 centuries, it serves as an encyclopedia of Islamic architectural styles from the 8th to the 20th century.",
        "The Seljuk-era domed chambers feature sophisticated geometric brick patterns that demonstrate advanced mathematical knowledge."
      ],
      dimensions: "Site"
    },
    {
      id: 172,
      title: "Folio from a Qur'an (Kufic script)",
      artist: "Unknown",
      date: "c. 8th-9th century CE",
      culture: "Abbasid, Islamic",
      medium: "Ink, color, and gold on parchment",
      location: "Various collections (folios dispersed across museums worldwide)",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Folio_from_a_Koran_%288th-9th_century%29.jpg/400px-Folio_from_a_Koran_%288th-9th_century%29.jpg",
      facts: [
        "Written in Kufic script, the earliest form of Arabic calligraphy, characterized by angular, geometric letterforms.",
        "Islamic calligraphy elevated writing to the highest art form, as the Qur'an is considered the direct word of God.",
        "The horizontal format and wide spacing between lines give the text a monumental, architectural quality."
      ],
      dimensions: "Approximately 23 x 34 cm"
    },
    {
      id: 173,
      title: "Basin (Baptistère de Saint Louis)",
      artist: "Muhammad ibn al-Zayn",
      date: "c. 1320-1340 CE",
      culture: "Mamluk, Egypt or Syria",
      medium: "Brass inlaid with gold and silver",
      location: "Musée du Louvre, Paris",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Baptistere_de_saint_Louis_1.jpg/400px-Baptistere_de_saint_Louis_1.jpg",
      facts: [
        "One of the finest examples of Islamic metalwork, with intricate inlaid scenes of hunting, battles, and court life.",
        "Signed six times by Muhammad ibn al-Zayn, unusual for Islamic art and indicating the artist's exceptional pride.",
        "Used for centuries to baptize French royal children, demonstrating how Islamic art was prized across cultural boundaries."
      ],
      dimensions: "22.2 cm high, 50.2 cm diameter"
    },
    {
      id: 174,
      title: "Bahram Gur Fights the Karg, folio from the Great Mongol Shahnama (Book of Kings)",
      artist: "Unknown",
      date: "c. 1330-1340 CE",
      culture: "Ilkhanid (Mongol), Iran",
      medium: "Ink, opaque watercolor, and gold on paper",
      location: "Various collections (folios dispersed)",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bahram_Gur_Fights_the_Karg.jpg/400px-Bahram_Gur_Fights_the_Karg.jpg",
      facts: [
        "From the most lavish illustrated manuscript of Ferdowsi's Shahnama, Iran's national epic poem.",
        "The Mongol Ilkhanids commissioned this Persian literary masterpiece to legitimize their rule over Iranian territory.",
        "The painting style blends Persian traditions with Chinese influences (landscape, clouds) brought by the Mongol conquest."
      ],
      dimensions: "Approximately 41 x 29 cm"
    },
    {
      id: 175,
      title: "The Court of Gayumars, folio from Shah Tahmasp's Shahnama",
      artist: "Sultan Muhammad",
      date: "c. 1522-1525 CE",
      culture: "Safavid, Iran",
      medium: "Ink, opaque watercolor, and gold on paper",
      location: "Aga Khan Museum, Toronto",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Court_of_Gayumars.jpg/400px-The_Court_of_Gayumars.jpg",
      facts: [
        "Depicts the legendary first king Gayumars and his court wearing leopard skins in a mountainous paradise.",
        "Sultan Muhammad was the leading painter of the Safavid court, and this is considered his masterpiece.",
        "The swirling rocks, trees, and figures create a cosmic landscape of extraordinary density and luminosity."
      ],
      dimensions: "Approximately 45 x 30 cm (painting area)"
    },
    {
      id: 176,
      title: "The Ardabil Carpet",
      artist: "Maqsud of Kashan",
      date: "1539-1540 CE",
      culture: "Safavid, Iran",
      medium: "Silk and wool",
      location: "Victoria and Albert Museum, London",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ardabil_Carpet.jpg/400px-Ardabil_Carpet.jpg",
      facts: [
        "One of the world's oldest dated carpets, with approximately 26 million knots, taking several years to complete.",
        "The design features a central medallion radiating outward like a dome seen from below, echoing mosque architecture.",
        "Two mosque lamps of different sizes create the illusion of depth, as if the viewer is looking up at a ceiling."
      ],
      dimensions: "1053 x 534 cm"
    },
    {
      id: 177,
      title: "Taj Mahal",
      artist: "Unknown (commissioned by Shah Jahan; possibly designed by Ustad Ahmad Lahori)",
      date: "1632-1653 CE",
      culture: "Mughal, India",
      medium: "White marble with inlaid semiprecious stones (pietra dura)",
      location: "Agra, India",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Taj_Mahal_2012.jpg/400px-Taj_Mahal_2012.jpg",
      facts: [
        "Built by Mughal Emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal, who died in childbirth.",
        "The perfect bilateral symmetry is broken only by Shah Jahan's own cenotaph, added asymmetrically after his death.",
        "The white marble appears to change color throughout the day—pinkish at dawn, white at noon, golden at sunset."
      ],
      dimensions: "Site; main structure 73 m high"
    },
    {
      id: 178,
      title: "The Conquest of Constantinople from the Siyer-i Nebi (Life of the Prophet)",
      artist: "Unknown (Ottoman court painters)",
      date: "c. 1595 CE",
      culture: "Ottoman, Turkey",
      medium: "Ink, opaque watercolor, and gold on paper",
      location: "Topkapi Palace Museum, Istanbul",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mehmed_II_entry_into_Constantinople_by_Fausto_Zonaro.jpg/400px-Mehmed_II_entry_into_Constantinople_by_Fausto_Zonaro.jpg",
      facts: [
        "Illustrates the 1453 Ottoman conquest of Constantinople, one of the most significant events in world history.",
        "Part of a six-volume manuscript on the life of the Prophet Muhammad, the largest Ottoman illustrated manuscript.",
        "The manuscript was commissioned by Sultan Murad III and employs a bird's-eye view showing both Ottoman armies and the walled city."
      ],
      dimensions: "Approximately 37 x 27 cm per folio"
    },
    {
      id: 179,
      title: "The Mosque of Selim II (Selimiye Mosque)",
      artist: "Sinan (Mimar Sinan)",
      date: "1568-1575 CE",
      culture: "Ottoman, Turkey",
      medium: "Brick and stone",
      location: "Edirne, Turkey",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Selimiye_Mosque%2C_Dome.jpg/400px-Selimiye_Mosque%2C_Dome.jpg",
      facts: [
        "Sinan considered this his masterpiece, built when he was in his 80s; the dome (31.3 m) slightly exceeds Hagia Sophia's.",
        "The octagonal support system allows the dome to appear to float, with minimal obstructed views inside.",
        "The four slender minarets (each 83 m tall) are among the tallest in the Ottoman tradition, framing the dome dramatically."
      ],
      dimensions: "Site; dome 31.3 m diameter, 43.3 m high"
    },
    {
      id: 180,
      title: "Illuminated tughra of Sultan Süleyman the Magnificent",
      artist: "Unknown (Ottoman court calligrapher)",
      date: "c. 1555-1560 CE",
      culture: "Ottoman, Turkey",
      medium: "Ink, opaque watercolor, and gold on paper",
      location: "The Metropolitan Museum of Art, New York",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tughra_of_Suleiman_the_Magnificent.jpg/400px-Tughra_of_Suleiman_the_Magnificent.jpg",
      facts: [
        "A tughra is the calligraphic monogram or signature of an Ottoman sultan, used on official documents and decrees.",
        "This elaborate version spells out Süleyman's full name and titles in a complex interlocking design.",
        "The blue and gold floral decoration (illumination) transforms the legal signature into a work of art."
      ],
      dimensions: "Approximately 64.5 x 47.7 cm"
    },
    {
      id: 181,
      title: "Mosque of Djenné (Great Mosque of Djenné)",
      artist: "Unknown (Djenné masons)",
      date: "Original c. 13th century CE; current structure 1907 CE",
      culture: "West African Islamic / Sudano-Sahelian",
      medium: "Adobe (sun-baked earth) and wood",
      location: "Djenné, Mali",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Great_Mosque_of_Djenn%C3%A9_1.jpg/400px-Great_Mosque_of_Djenn%C3%A9_1.jpg",
      facts: [
        "The largest adobe (mud brick) building in the world, it is replastered annually in a community festival (crépissage).",
        "The wooden beams (toron) protruding from the walls serve as permanent scaffolding for the annual replastering.",
        "The current structure was rebuilt in 1907 based on the original design, continuing a tradition of community-maintained architecture."
      ],
      dimensions: "Site; approximately 75 x 75 m"
    },
    {
      id: 182,
      title: "Jahangir Preferring a Sufi Shaikh to Kings",
      artist: "Bichitr",
      date: "c. 1615-1618 CE",
      culture: "Mughal, India",
      medium: "Opaque watercolor, gold, and ink on paper",
      location: "Freer Gallery of Art, Smithsonian, Washington, D.C.",
      unit: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jahangir_preferring_a_sufi_sheikh_to_kings.jpg/400px-Jahangir_preferring_a_sufi_sheikh_to_kings.jpg",
      facts: [
        "Emperor Jahangir sits on an hourglass throne (time running out) and hands a book to a Sufi saint over worldly kings.",
        "The rejected figures include an Ottoman sultan and King James I of England, asserting Mughal spiritual superiority.",
        "The painter Bichitr includes himself at the bottom, humbly holding a miniature of the painting within the painting."
      ],
      dimensions: "Approximately 25.3 x 18 cm"
    },
    // ===== UNIT 8: South, East, and Southeast Asia (works 183-212) =====
    {
      id: 183,
      title: "Great Stupa at Sanchi",
      artist: "Unknown",
      date: "c. 3rd century BCE-1st century CE",
      culture: "Buddhist, India (Maurya and Shunga dynasties)",
      medium: "Stone (sandstone)",
      location: "Sanchi, Madhya Pradesh, India",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sanchi_Stupa_from_Eastern_gate%2C_Madhya_Pradesh.jpg/400px-Sanchi_Stupa_from_Eastern_gate%2C_Madhya_Pradesh.jpg",
      facts: [
        "Originally commissioned by Emperor Ashoka, the hemispherical dome contains relics of the Buddha.",
        "The four carved gateways (toranas) depict scenes from the Buddha's life and his previous incarnations (Jatakas).",
        "The Buddha is represented only through symbols (footprints, empty throne, Bodhi tree) rather than in human form, reflecting early Buddhist aniconism."
      ],
      dimensions: "Site; stupa approximately 16.5 m high, 36.5 m diameter"
    },
    {
      id: 184,
      title: "Terra cotta warriors from the mausoleum of the first Qin emperor of China",
      artist: "Unknown",
      date: "c. 221-209 BCE",
      culture: "Qin dynasty, China",
      medium: "Painted terra cotta",
      location: "Emperor Qinshihuang's Mausoleum, Xi'an, Shaanxi, China",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Terracotta_Army%2C_View_of_Pit_1.jpg/400px-Terracotta_Army%2C_View_of_Pit_1.jpg",
      facts: [
        "Approximately 8,000 life-size warriors, each with individualized facial features, guard the emperor's tomb for the afterlife.",
        "Discovered accidentally in 1974 by farmers digging a well, it is one of the greatest archaeological finds in history.",
        "The warriors were originally painted in bright colors and equipped with real bronze weapons, most of which have been looted or decayed."
      ],
      dimensions: "Each figure approximately 180-197 cm high"
    },
    {
      id: 185,
      title: "Funeral banner of Lady Dai (Xin Zhui)",
      artist: "Unknown",
      date: "c. 180 BCE",
      culture: "Han dynasty, China",
      medium: "Painted silk",
      location: "Hunan Provincial Museum, Changsha, China",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mawangdui_silk_banner_from_tomb_no1.jpg/400px-Mawangdui_silk_banner_from_tomb_no1.jpg",
      facts: [
        "The T-shaped banner depicts three realms: heaven at the top, the earthly world in the middle, and the underworld below.",
        "Lady Dai herself is shown in the middle section, leaning on a cane and attended by servants.",
        "Found draped over her remarkably preserved mummy at Mawangdui; her body, food, and 1,000+ artifacts survived over 2,000 years."
      ],
      dimensions: "205 x 92 cm (at widest)"
    },
    {
      id: 186,
      title: "Longmen caves (Fengxian Temple)",
      artist: "Unknown (possibly supervised by Empress Wu Zetian's court)",
      date: "c. 493-1127 CE (Fengxian Temple c. 675 CE)",
      culture: "Various Chinese dynasties (Northern Wei through Song)",
      medium: "Limestone (rock-cut)",
      location: "Luoyang, Henan, China",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Longmen-grottoes-702702702702.jpg/400px-Longmen-grottoes-702702702702.jpg",
      facts: [
        "The Vairocana Buddha at Fengxian Temple is 17 meters high and is said to resemble Empress Wu Zetian, who funded the project.",
        "Over 2,300 caves containing 100,000+ Buddhist statues demonstrate the evolution of Chinese Buddhist art over centuries.",
        "The site shows the transition from Indian-influenced styles to a more distinctly Chinese aesthetic in Buddhist sculpture."
      ],
      dimensions: "Site; Vairocana Buddha approximately 17.14 m high"
    },
    {
      id: 187,
      title: "Gold and jade crown",
      artist: "Unknown",
      date: "5th-6th century CE",
      culture: "Three Kingdoms period (Silla), Korea",
      medium: "Gold with jade ornaments",
      location: "Gyeongju National Museum, South Korea",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gold_crown_from_Cheonmachong.jpg/400px-Gold_crown_from_Cheonmachong.jpg",
      facts: [
        "The tree-shaped uprights and antler-like forms may symbolize Silla shamanistic beliefs connecting rulers to heaven.",
        "The curved jade ornaments (gogok/magatama) reflect cultural exchange with Japan and Central Asia along the Silk Road.",
        "Found in royal tombs at Gyeongju, these crowns demonstrate Silla goldsmithing skills rivaling any contemporary civilization."
      ],
      dimensions: "Approximately 27.5 cm high"
    },
    {
      id: 188,
      title: "Todai-ji (Great Eastern Temple) including Kon-dō (Golden Hall)",
      artist: "Unknown (commissioned by Emperor Shōmu)",
      date: "743 CE (current building 1709 CE reconstruction)",
      culture: "Nara period, Japan",
      medium: "Bronze (Great Buddha), wood (temple structure)",
      location: "Nara, Japan",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Todai-ji_Kon-do.jpg/400px-Todai-ji_Kon-do.jpg",
      facts: [
        "Houses the world's largest bronze Buddha (Vairocana) at 15 meters tall, requiring multiple castings to complete.",
        "The Kon-dō (Great Buddha Hall) is the world's largest wooden building, even at two-thirds its original size after reconstruction.",
        "Emperor Shōmu built Todai-ji to protect Japan through Buddhism after devastating epidemics and natural disasters."
      ],
      dimensions: "Site; Great Buddha approximately 15 m high"
    },
    {
      id: 189,
      title: "Borobudur Temple",
      artist: "Unknown (Sailendra dynasty builders)",
      date: "c. 750-842 CE",
      culture: "Buddhist, Java, Indonesia",
      medium: "Volcanic stone (andesite)",
      location: "Magelang, Central Java, Indonesia",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Borobudur-Nothwest-view.jpg/400px-Borobudur-Nothwest-view.jpg",
      facts: [
        "The world's largest Buddhist temple, with nine stacked platforms, 2,672 relief panels, and 504 Buddha statues.",
        "The pilgrim's path spirals upward through three levels of Buddhist cosmology: desire, form, and formlessness.",
        "Abandoned and buried under volcanic ash and jungle for centuries, it was rediscovered in 1814 under British colonial rule."
      ],
      dimensions: "Site; approximately 123 x 123 m base, 35 m high"
    },
    {
      id: 190,
      title: "Angkor, the temple of Angkor Wat and the city of Angkor Thom",
      artist: "Unknown (commissioned by King Suryavarman II)",
      date: "c. 800-1400 CE (Angkor Wat c. 1120-1150 CE)",
      culture: "Khmer, Cambodia",
      medium: "Sandstone and laterite",
      location: "Siem Reap Province, Cambodia",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/400px-Ankor_Wat_temple.jpg",
      facts: [
        "Angkor Wat is the largest religious monument in the world, originally Hindu (dedicated to Vishnu), later converted to Buddhist.",
        "The temple's five towers represent Mount Meru, the home of the gods in Hindu cosmology, surrounded by a moat representing the ocean.",
        "The bas-reliefs at Angkor Wat stretch for nearly 800 meters, depicting scenes from Hindu epics and historical Khmer battles."
      ],
      dimensions: "Site; Angkor Wat approximately 162.6 hectares"
    },
    {
      id: 191,
      title: "Lakshmana Temple at Khajuraho",
      artist: "Unknown (Chandela dynasty builders)",
      date: "c. 930-950 CE",
      culture: "Hindu, India",
      medium: "Sandstone",
      location: "Khajuraho, Madhya Pradesh, India",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Khajuraho_-_Kandariya_Mahadeo_Temple.jpg/400px-Khajuraho_-_Kandariya_Mahadeo_Temple.jpg",
      facts: [
        "The temple's exterior is covered with intricate sculptural programs including famous erotic (mithuna) figures.",
        "The erotic sculptures represent the union of opposites and may illustrate tantric spiritual practices or simply celebrate life.",
        "The temple plan moves from the mundane outer world through increasingly sacred spaces to the inner sanctum (garbha griha)."
      ],
      dimensions: "Site"
    },
    {
      id: 192,
      title: "Travelers among Mountains and Streams",
      artist: "Fan Kuan",
      date: "c. 1000 CE",
      culture: "Song dynasty, China",
      medium: "Ink and colors on silk (hanging scroll)",
      location: "National Palace Museum, Taipei, Taiwan",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg/400px-Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg",
      facts: [
        "The monumental mountain dominates the composition, dwarfing the tiny travelers below—expressing the Daoist relationship between humanity and nature.",
        "Uses three-distance perspective (foreground, middle ground, background) rather than Western single-point perspective.",
        "Fan Kuan's signature was hidden among the foliage for nearly a millennium before being discovered in the 20th century."
      ],
      dimensions: "206.3 x 103.3 cm"
    },
    {
      id: 193,
      title: "Shiva as Lord of Dance (Nataraja)",
      artist: "Unknown",
      date: "c. 11th century CE",
      culture: "Chola dynasty, Hindu, India",
      medium: "Copper alloy (bronze)",
      location: "Various collections (many in temples and museums worldwide)",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nataraja_Musuem_Rietberg_RVI_501.jpg/400px-Nataraja_Musuem_Rietberg_RVI_501.jpg",
      facts: [
        "Shiva dances the cosmic dance (tandava) within a ring of fire, simultaneously creating and destroying the universe.",
        "Each of the four arms and every gesture has specific symbolic meaning: the drum creates, the flame destroys, one hand grants fearlessness.",
        "The Chola dynasty perfected the lost-wax bronze casting technique, creating some of the finest metal sculptures in history."
      ],
      dimensions: "Approximately 68-75 cm high"
    },
    {
      id: 194,
      title: "Night Attack on the Sanjō Palace, from the Illustrated Scrolls of the Events of the Heiji Era",
      artist: "Unknown",
      date: "c. 1250-1300 CE",
      culture: "Kamakura period, Japan",
      medium: "Handscroll (ink and color on paper)",
      location: "Museum of Fine Arts, Boston",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Night_Attack_on_the_Sanjo_Palace.jpg/400px-Night_Attack_on_the_Sanjo_Palace.jpg",
      facts: [
        "Depicts the 1159 Heiji Rebellion with extraordinary dynamism—galloping horses, raging fire, and fleeing figures create chaos.",
        "The continuous narrative format of the handscroll unfolds from right to left, creating a cinematic experience.",
        "The vivid depiction of warfare reflects the Kamakura period's militaristic culture, when samurai warriors dominated Japan."
      ],
      dimensions: "41.3 cm x approximately 699.7 cm (entire scroll)"
    },
    {
      id: 195,
      title: "The David Vases",
      artist: "Unknown (Jingdezhen potters)",
      date: "1351 CE",
      culture: "Yuan dynasty, China",
      medium: "Porcelain with cobalt blue underglaze",
      location: "British Museum, London",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Britishmuseumvase.jpg/400px-Britishmuseumvase.jpg",
      facts: [
        "The earliest dated examples of blue-and-white porcelain, the benchmark for dating all other early blue-and-white wares.",
        "The cobalt blue pigment was imported from Persia, demonstrating Silk Road trade connections during the Mongol Yuan dynasty.",
        "Named after Sir Percival David, who reunited the pair; the inscriptions identify the donor, date, and temple destination."
      ],
      dimensions: "Approximately 63.6 cm high"
    },
    {
      id: 196,
      title: "Portrait of Sin Sukju (copy after original)",
      artist: "Unknown (Korean court painter)",
      date: "c. mid-15th century CE (copy likely later)",
      culture: "Joseon dynasty, Korea",
      medium: "Ink and color on silk (hanging scroll)",
      location: "National Museum of Korea, Seoul",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Korean_painting-Mona_Lisa-Joseon.jpg/400px-Korean_painting-Mona_Lisa-Joseon.jpg",
      facts: [
        "Exemplifies the highly refined tradition of Joseon dynasty portrait painting, which valued exact likeness and inner character.",
        "Joseon Confucian scholars believed a portrait should capture not just physical appearance but the sitter's moral essence.",
        "Sin Sukju was a prominent scholar-official who served multiple kings and contributed to the creation of the Korean alphabet (hangul)."
      ],
      dimensions: "Approximately 167 x 109.5 cm"
    },
    {
      id: 197,
      title: "Forbidden City",
      artist: "Kuai Xiang and others",
      date: "1406-1420 CE (with later additions)",
      culture: "Ming dynasty, China",
      medium: "Wood, stone, marble, and ceramic tile",
      location: "Beijing, China",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Beijing-Forbidden_City1.jpg/400px-Beijing-Forbidden_City1.jpg",
      facts: [
        "The world's largest palace complex, with 980 buildings and 8,707 rooms, served as home to 24 emperors over 500 years.",
        "Organized along a central north-south axis, the layout embodies feng shui principles and Confucian hierarchy.",
        "The yellow roof tiles were reserved exclusively for the emperor, as yellow symbolized the center of the universe in Chinese cosmology."
      ],
      dimensions: "Site; approximately 720,000 sq m"
    },
    {
      id: 198,
      title: "Ryoan-ji rock garden",
      artist: "Unknown (attributed to Soami or Tokuho Zenketsu)",
      date: "c. 1480 CE",
      culture: "Muromachi period, Japan",
      medium: "Rock and gravel",
      location: "Ryoan-ji Temple, Kyoto, Japan",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ryoan-ji_2008-08.jpg/400px-Ryoan-ji_2008-08.jpg",
      facts: [
        "Fifteen rocks arranged in five groups on raked white gravel—from any vantage point, at least one rock is always hidden.",
        "The dry landscape garden (karesansui) is a meditation aid, representing cosmic themes through abstract natural forms.",
        "Reflects Zen Buddhist principles of simplicity, emptiness, and the limits of perception—the meaning is never fully graspable."
      ],
      dimensions: "Approximately 25 x 10 m"
    },
    {
      id: 199,
      title: "Jahangir Receives Prince Khurram at Ajmer on His Return from the Mewar Campaign",
      artist: "Balchand",
      date: "c. 1635 CE",
      culture: "Mughal, India",
      medium: "Opaque watercolor, ink, and gold on paper",
      location: "Royal Collection, Windsor Castle",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Reception_at_Ajmer.jpg/400px-Reception_at_Ajmer.jpg",
      facts: [
        "Part of the Padshahnama (Chronicle of the Emperor), one of the great illustrated manuscripts of the Mughal court.",
        "The image shows Emperor Jahangir welcoming his son (later Shah Jahan) in a hierarchical composition radiating from the emperor.",
        "Mughal manuscript painting combines Persian, Indian, and European artistic traditions into a distinctive court style."
      ],
      dimensions: "Approximately 35 x 25 cm"
    },
    {
      id: 200,
      title: "White and Red Plum Blossoms",
      artist: "Ogata Kōrin",
      date: "c. 1710-1716 CE",
      culture: "Edo period, Japan",
      medium: "Ink, color, and gold leaf on paper (pair of two-fold screens)",
      location: "MOA Museum of Art, Atami, Japan",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/KORIN-Red-and-White-Plum-Trees.jpg/400px-KORIN-Red-and-White-Plum-Trees.jpg",
      facts: [
        "The stylized stream between the two trees uses a tarashikomi (pooled ink) technique unique to the Rinpa school.",
        "The contrast between the bold red tree and delicate white tree may represent opposing forces or different stages of life.",
        "Kōrin, the master of the Rinpa school, combined bold decorative design with references to classical Japanese poetry."
      ],
      dimensions: "Each screen approximately 156 x 172.2 cm"
    },
    {
      id: 201,
      title: "Under the Wave off Kanagawa (The Great Wave)",
      artist: "Katsushika Hokusai",
      date: "c. 1830-1833 CE",
      culture: "Edo period, Japan",
      medium: "Polychrome woodblock print (ukiyo-e)",
      location: "Various collections (multiple impressions; e.g., Metropolitan Museum of Art)",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/400px-Tsunami_by_hokusai_19th_century.jpg",
      facts: [
        "Part of the series 'Thirty-six Views of Mount Fuji'; the tiny Fuji appears between waves, dwarfed by the ocean's power.",
        "Uses imported Prussian blue pigment, which had recently become available in Japan, for its distinctive blue tones.",
        "Profoundly influenced European Impressionists and Art Nouveau artists, becoming one of the most recognized images in the world."
      ],
      dimensions: "25.7 x 37.9 cm"
    },
    {
      id: 202,
      title: "Chairman Mao en Route to Anyuan",
      artist: "Liu Chunhua",
      date: "1967 CE",
      culture: "People's Republic of China (Cultural Revolution)",
      medium: "Oil on canvas",
      location: "Museum of the Chinese Revolution, Beijing",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Mao_Zedong_going_to_Anyuan.jpg/400px-Mao_Zedong_going_to_Anyuan.jpg",
      facts: [
        "Approximately 900 million copies were printed, making it the most reproduced painting in history.",
        "Depicts the young Mao heading to organize a coal miners' strike in 1922, rendered in heroic socialist realist style.",
        "Created during the Cultural Revolution, it replaced an earlier painting of the same subject that depicted a now-disgraced leader."
      ],
      dimensions: "220 x 180 cm"
    },
    {
      id: 203,
      title: "Meenakshi Amman Temple complex",
      artist: "Unknown (Nayak dynasty builders)",
      date: "c. 1623-1655 CE (current form; earlier origins)",
      culture: "Hindu, India",
      medium: "Granite and painted stucco",
      location: "Madurai, Tamil Nadu, India",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Madurai_Meenakshi_Amman_Temple.jpg/400px-Madurai_Meenakshi_Amman_Temple.jpg",
      facts: [
        "The temple's 14 gopurams (gateway towers) are covered with thousands of brightly painted stucco sculptures of gods and mythical beings.",
        "Dedicated to the goddess Meenakshi (a form of Parvati) and her consort Shiva, the temple is a living place of worship.",
        "The temple city covers 65,000 sq m and includes shrines, halls, pools, and corridors—functioning as a city within a city."
      ],
      dimensions: "Site"
    },
    {
      id: 204,
      title: "Sui dynasty seated Buddha",
      artist: "Unknown",
      date: "c. 6th century CE",
      culture: "Sui dynasty, China",
      medium: "Gilt bronze",
      location: "Various collections",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Sui_seated_Buddha.jpg/400px-Sui_seated_Buddha.jpg",
      facts: [
        "Sui dynasty Buddhist sculpture synthesized the styles of north and south China after centuries of division.",
        "The serene, rounded face and flowing robes show the maturation of a distinctly Chinese Buddhist sculptural style.",
        "Gilt bronze Buddhist figures were produced in enormous quantities during the Sui dynasty as Buddhism became a unifying cultural force."
      ],
      dimensions: "Approximately 30-50 cm high"
    },
    {
      id: 205,
      title: "Jayavarman VII as Buddha",
      artist: "Unknown",
      date: "c. late 12th-early 13th century CE",
      culture: "Khmer, Cambodia (Angkor period)",
      medium: "Sandstone",
      location: "National Museum of Cambodia, Phnom Penh",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/JayavarmanVII.jpg/400px-JayavarmanVII.jpg",
      facts: [
        "Depicts King Jayavarman VII in meditation posture, blurring the line between royal portrait and Buddhist deity.",
        "Jayavarman VII was the greatest Khmer king, who expanded the empire and converted it from Hinduism to Mahayana Buddhism.",
        "The closed eyes and serene expression create an image of spiritual transcendence combined with political authority."
      ],
      dimensions: "Approximately 41 cm high"
    },
    {
      id: 206,
      title: "Jaunpur Atala Mosque",
      artist: "Unknown",
      date: "c. 1408 CE",
      culture: "Sharqi dynasty, India",
      medium: "Stone",
      location: "Jaunpur, Uttar Pradesh, India",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Atala_Masjid_Jaunpur.jpg/400px-Atala_Masjid_Jaunpur.jpg",
      facts: [
        "Features a massive arched screen (pishtaq) dominating the facade, a hallmark of Sharqi-dynasty mosque architecture.",
        "Built on the site of a Hindu temple, it incorporates Hindu and Jain architectural elements into an Islamic structure.",
        "Represents the distinctive regional style of Indo-Islamic architecture that developed in Jaunpur."
      ],
      dimensions: "Site"
    },
    {
      id: 207,
      title: "Shino ware tea bowl (chawan)",
      artist: "Unknown",
      date: "c. 16th century CE",
      culture: "Momoyama period, Japan",
      medium: "Stoneware with glaze",
      location: "Various collections",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tea_bowl%2C_Mino_ware%2C_Shino_type.JPG/400px-Tea_bowl%2C_Mino_ware%2C_Shino_type.JPG",
      facts: [
        "Shino ware's thick, white, pitted glaze and irregular shape embody the wabi-sabi aesthetic—beauty in imperfection.",
        "The Japanese tea ceremony (chanoyu) elevated humble tea bowls to the status of prized art objects.",
        "Each bowl's unique glaze effects, warping, and kiln marks are valued as evidence of the firing process and the hand of nature."
      ],
      dimensions: "Approximately 8-12 cm high"
    },
    {
      id: 208,
      title: "Preaching Buddha, from Sarnath",
      artist: "Unknown",
      date: "c. 475 CE",
      culture: "Gupta period, India",
      medium: "Chunar sandstone",
      location: "Archaeological Museum, Sarnath, India",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sarnath_Buddha.jpg/400px-Sarnath_Buddha.jpg",
      facts: [
        "Depicts Buddha's first sermon at Sarnath, where he 'turned the wheel of the law' (dharma) for the first time.",
        "The gesture (dharmachakra mudra—turning the wheel of law) and the deer and wheel on the throne base identify this as the first sermon.",
        "Gupta-period sculpture set the canonical standard for Buddhist art across Asia, influencing styles from Japan to Southeast Asia."
      ],
      dimensions: "Approximately 160 cm high"
    },
    {
      id: 209,
      title: "Tapa cloth (ngatu)",
      artist: "Unknown (Tongan women artists)",
      date: "c. 20th century CE",
      culture: "Tongan, Polynesia",
      medium: "Barkcloth (inner bark of mulberry tree), painted",
      location: "Various collections",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tapa_cloth.jpg/400px-Tapa_cloth.jpg",
      facts: [
        "Tapa (ngatu in Tongan) is made by beating the inner bark of the mulberry tree into thin sheets and painting geometric designs.",
        "Production is a communal women's activity, and the cloth plays important roles in ceremonies, exchanges, and gift-giving.",
        "Designs are applied using rubbing tablets (kupesi) and freehand painting, with motifs carrying cultural significance."
      ],
      dimensions: "Variable (can be very large, up to several meters)"
    },
    {
      id: 210,
      title: "Aniconic relief from Amaravati",
      artist: "Unknown",
      date: "c. 1st century BCE-3rd century CE",
      culture: "Satavahana dynasty, India",
      medium: "Limestone",
      location: "Government Museum, Chennai, India; British Museum, London",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amaravati_Marbles.jpg/400px-Amaravati_Marbles.jpg",
      facts: [
        "The Amaravati stupa featured narrative reliefs depicting the life of the Buddha and Jataka tales in a dynamic, flowing style.",
        "Like Sanchi, early Amaravati art represents the Buddha through symbols (footprints, empty throne) rather than human form.",
        "The Amaravati school's graceful, sensuous style influenced Buddhist art across Southeast Asia and Sri Lanka."
      ],
      dimensions: "Various panel sizes"
    },
    {
      id: 211,
      title: "Kakiemon-style jar with lid",
      artist: "Unknown (Kakiemon workshop)",
      date: "c. 17th century CE",
      culture: "Edo period, Japan",
      medium: "Porcelain with overglaze polychrome enamel",
      location: "Various collections",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kakiemon_Jar_V%26A.jpg/400px-Kakiemon_Jar_V%26A.jpg",
      facts: [
        "Kakiemon ware is characterized by its milky white body (nigoshide) and asymmetrical overglaze enamel designs.",
        "Japanese porcelain became hugely popular in Europe after Chinese exports were disrupted by the fall of the Ming dynasty.",
        "European potteries including Meissen, Chantilly, and Chelsea extensively copied Kakiemon designs."
      ],
      dimensions: "Approximately 30-40 cm high"
    },
    {
      id: 212,
      title: "Krishna and the Gopis (illustration from Gita Govinda or Bhagavata Purana)",
      artist: "Unknown",
      date: "c. 18th century CE",
      culture: "Rajput, India (Pahari school)",
      medium: "Opaque watercolor and gold on paper",
      location: "Various collections",
      unit: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gita_Govinda_Manuscript%2C_India.jpg/400px-Gita_Govinda_Manuscript%2C_India.jpg",
      facts: [
        "Depicts the god Krishna's amorous play with the gopis (cowherd women), a beloved subject in Indian devotional poetry and art.",
        "The bold, flat colors and lyrical compositions of Pahari painting create a mood of romantic devotion (bhakti).",
        "The blue-skinned Krishna and vibrant forest settings illustrate the theological idea that divine love mirrors human romantic love."
      ],
      dimensions: "Approximately 20 x 30 cm"
    },
    // ===== UNIT 9: The Pacific (works 213-224) =====
    {
      id: 213,
      title: "Nan Madol",
      artist: "Unknown (Saudeleur dynasty builders)",
      date: "c. 700-1600 CE",
      culture: "Saudeleur dynasty, Pohnpei, Micronesia",
      medium: "Basalt boulders and columnar basalt",
      location: "Pohnpei, Federated States of Micronesia",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nan_Madol.jpg/400px-Nan_Madol.jpg",
      facts: [
        "Often called the 'Venice of the Pacific,' it consists of approximately 92 artificial islands linked by canals.",
        "The massive basalt logs, some weighing 50 tons, were transported to the site from quarries elsewhere on the island.",
        "Served as the ceremonial and political seat of the Saudeleur dynasty for approximately 500 years."
      ],
      dimensions: "Site; approximately 1.5 km x 0.5 km"
    },
    {
      id: 214,
      title: "Moai on platform (ahu) at Ahu Nau Nau, Easter Island (Rapa Nui)",
      artist: "Unknown (Rapa Nui carvers)",
      date: "c. 1100-1600 CE",
      culture: "Rapa Nui, Polynesia",
      medium: "Volcanic tuff (moai); basalt (ahu)",
      location: "Rapa Nui (Easter Island), Chile",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Moai_Rano_raraku.jpg/400px-Moai_Rano_raraku.jpg",
      facts: [
        "Nearly 900 moai were carved, averaging 4 meters tall and 12.5 tons, representing deified ancestors (aringa ora).",
        "The statues face inland, watching over the village, with their backs to the sea—ancestors protecting their descendants.",
        "How the massive statues were transported from the quarry at Rano Raraku remains debated; recent evidence suggests they were 'walked' upright."
      ],
      dimensions: "Average moai approximately 4 m high, 12.5 tons"
    },
    {
      id: 215,
      title: "'Ahu 'ula (feather cloak)",
      artist: "Unknown (Hawaiian featherworkers)",
      date: "c. late 18th century CE",
      culture: "Hawaiian, Polynesia",
      medium: "Olona fiber, feathers (likely 'i'iwi and 'o'o birds)",
      location: "Bernice Pauahi Bishop Museum, Honolulu; and other collections",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hawaiian_feather_cloak.jpg/400px-Hawaiian_feather_cloak.jpg",
      facts: [
        "Made from tens of thousands of tiny feathers, these cloaks were among the most sacred objects in Hawaiian culture.",
        "Only the highest-ranking ali'i (chiefs) could wear feather cloaks, which embodied their mana (spiritual power).",
        "The red and yellow feathers came from now-endangered or extinct birds; a single cloak could take generations to complete."
      ],
      dimensions: "Approximately 150-200 cm across"
    },
    {
      id: 216,
      title: "Navigation chart (stick chart / rebbelib)",
      artist: "Unknown (Marshallese navigator)",
      date: "19th-early 20th century CE",
      culture: "Marshallese, Micronesia",
      medium: "Wood, fiber, and shells",
      location: "Various collections",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stick_chart_from_Marshall_Islands.jpg/400px-Stick_chart_from_Marshall_Islands.jpg",
      facts: [
        "Curved sticks represent ocean swell patterns, and shells represent islands—a navigation system unique to the Marshall Islands.",
        "Each chart is personalized; the navigator memorized it before voyaging and did not take it to sea.",
        "Demonstrates sophisticated understanding of wave refraction, reflection, and interference patterns around islands."
      ],
      dimensions: "Approximately 40-100 cm"
    },
    {
      id: 217,
      title: "Tamati Waka Nene (portrait)",
      artist: "Gottfried Lindauer",
      date: "1890 CE",
      culture: "Māori / New Zealand (European artist)",
      medium: "Oil on canvas",
      location: "Auckland Art Gallery Toi o Tāmaki, New Zealand",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tamati_Waka_Nene_by_Gottfried_Lindauer.jpg/400px-Tamati_Waka_Nene_by_Gottfried_Lindauer.jpg",
      facts: [
        "Depicts a Māori chief with traditional tā moko (facial tattoo), which records genealogy, social status, and personal achievements.",
        "Lindauer, a Czech-born painter, was commissioned by Māori patrons to create portraits of important leaders.",
        "The tā moko is unique to each individual and is considered tapu (sacred)—it is a mark of identity, not mere decoration."
      ],
      dimensions: "Approximately 87.5 x 70 cm"
    },
    {
      id: 218,
      title: "Malagan display and mask",
      artist: "Unknown",
      date: "c. 20th century CE",
      culture: "New Ireland, Papua New Guinea (Melanesia)",
      medium: "Wood, pigment, fiber, and shell",
      location: "Various collections",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Malagan_mask.jpg/400px-Malagan_mask.jpg",
      facts: [
        "Malagan ceremonies honor the dead and facilitate the transfer of rights, names, and spiritual power to the living.",
        "The elaborately carved and painted masks and figures are created for specific ceremonies and then destroyed or discarded afterward.",
        "The rights to produce specific malagan designs are owned and transferred like intellectual property—they are not freely copied."
      ],
      dimensions: "Variable (masks approximately 30-50 cm)"
    },
    {
      id: 219,
      title: "Buk (mask)",
      artist: "Unknown",
      date: "Mid-to-late 19th century CE",
      culture: "Torres Strait Islanders, Australia/Papua New Guinea",
      medium: "Turtle shell, wood, fiber, feathers, and shell",
      location: "Various collections including the British Museum",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Torres_Strait_mask_British_Museum.jpg/400px-Torres_Strait_mask_British_Museum.jpg",
      facts: [
        "Torres Strait turtle shell masks are among the most distinctive art forms of the Pacific region.",
        "The masks were worn during ceremonies related to warfare, initiation, and communication with the spirit world.",
        "Made by heating and bending turtle shell plates, then assembling them with plant fiber—a technique unique to the Torres Strait."
      ],
      dimensions: "Approximately 40-60 cm high"
    },
    {
      id: 220,
      title: "Hiapo (tapa cloth)",
      artist: "Unknown (Niuean women artists)",
      date: "c. 1850-1900 CE",
      culture: "Niuean, Polynesia",
      medium: "Bark cloth with pigment",
      location: "Various collections including Auckland Museum",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hiapo_%28tapa%29_Niue.jpg/400px-Hiapo_%28tapa%29_Niue.jpg",
      facts: [
        "Niuean hiapo features distinctive, densely patterned geometric designs that are more complex than most other Polynesian tapa.",
        "The designs were drawn freehand, demonstrating remarkable artistic skill and spatial planning.",
        "Hiapo production nearly died out in the 20th century but has been revived as part of Niuean cultural renaissance."
      ],
      dimensions: "Variable"
    },
    {
      id: 221,
      title: "Presentation of Fijian mats and tapa cloths to Queen Elizabeth II",
      artist: "Unknown (Fijian women artists)",
      date: "1953 CE",
      culture: "Fijian, Melanesia",
      medium: "Barkcloth and woven mats",
      location: "Royal Collection, London",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Fijian_tapa_cloth.jpg/400px-Fijian_tapa_cloth.jpg",
      facts: [
        "The ceremonial presentation of textiles (masi and mats) is one of the highest forms of cultural exchange in Fijian society.",
        "The gift demonstrated Fijian diplomatic tradition while also acknowledging the colonial relationship with Britain.",
        "Fijian tapa cloth (masi) features bold geometric stenciled designs in black and brown on white bark cloth."
      ],
      dimensions: "Variable"
    },
    {
      id: 222,
      title: "Te Hau ki Turanga (Māori meeting house)",
      artist: "Raharuhi Rukupo and others",
      date: "1842-1843 CE",
      culture: "Māori, New Zealand",
      medium: "Wood, shell, pigment, and flax fiber",
      location: "Museum of New Zealand Te Papa Tongarewa, Wellington",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Maori_Meeting_House.jpg/400px-Maori_Meeting_House.jpg",
      facts: [
        "A wharenui (meeting house) that represents the body of an ancestor: the ridgepole is the spine, the rafters are ribs.",
        "Master carver Raharuhi Rukupo included a self-portrait among the carved ancestor figures on the interior panels.",
        "Removed from its community by the colonial government in 1867, its repatriation remains a significant issue."
      ],
      dimensions: "Site (interior approximately 15 m long)"
    },
    {
      id: 223,
      title: "Slit drum (Atingting kon)",
      artist: "Unknown",
      date: "c. early 20th century CE",
      culture: "Ambrym Island, Vanuatu (Melanesia)",
      medium: "Wood and pigment",
      location: "Various collections",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Vanuatu_slit_drums.jpg/400px-Vanuatu_slit_drums.jpg",
      facts: [
        "Large vertical slit drums carved with faces served as both musical instruments and visual art representing ancestor spirits.",
        "The drums' different tones were used to send messages across valleys and to accompany grade-raising ceremonies.",
        "The carved heads on the drums represent specific rank levels in the men's grading system, displaying the owner's prestige."
      ],
      dimensions: "Approximately 2-4 m high"
    },
    {
      id: 224,
      title: "Australian Aboriginal bark painting",
      artist: "Unknown (Aboriginal Australian artist)",
      date: "c. 20th century CE",
      culture: "Aboriginal Australian, Arnhem Land",
      medium: "Natural pigments on eucalyptus bark",
      location: "Various collections",
      unit: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bark_painting_Arnhem_Land.jpg/400px-Bark_painting_Arnhem_Land.jpg",
      facts: [
        "Aboriginal bark paintings depict Dreamtime narratives—creation stories connecting people to ancestors, land, and law.",
        "The cross-hatching patterns (rarrk) in some styles are sacred and encode information only initiates can fully understand.",
        "Aboriginal art is the world's oldest continuous art tradition, spanning at least 40,000 years."
      ],
      dimensions: "Variable (typically 50-150 cm)"
    },
    // ===== UNIT 10: Global Contemporary (works 225-250) =====
    {
      id: 225,
      title: "Guggenheim Museum Bilbao",
      artist: "Frank Gehry",
      date: "1997 CE",
      culture: "Deconstructivist / Contemporary Architecture",
      medium: "Titanium, glass, and limestone",
      location: "Bilbao, Spain",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Guggenheim_museum_Bilbao_HDR-image.jpg/400px-Guggenheim_museum_Bilbao_HDR-image.jpg",
      facts: [
        "The building's swooping titanium panels create an organic, almost sculptural form that changed how cities think about architecture.",
        "Its success revitalized Bilbao's economy, spawning the term 'Bilbao Effect'—using iconic architecture to transform a city.",
        "Gehry used aerospace software (CATIA) to design the complex curving forms, pioneering digital architecture."
      ],
      dimensions: "Site; approximately 32,500 sq m"
    },
    {
      id: 226,
      title: "Vietnam Veterans Memorial",
      artist: "Maya Lin",
      date: "1982 CE",
      culture: "Contemporary, United States",
      medium: "Polished black granite",
      location: "National Mall, Washington, D.C.",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vietnamwall.jpg/400px-Vietnamwall.jpg",
      facts: [
        "A V-shaped wall inscribed with the names of 58,318 Americans killed or missing in Vietnam, listed chronologically by date of loss.",
        "Maya Lin was a 21-year-old Yale architecture student when she won the design competition over 1,421 other entries.",
        "The reflective black surface shows visitors their own reflection among the names, creating a powerful personal connection."
      ],
      dimensions: "Approximately 150 m long (each wall 75 m), tapering from 3 m high to ground level"
    },
    {
      id: 227,
      title: "Horn Players",
      artist: "Jean-Michel Basquiat",
      date: "1983 CE",
      culture: "Neo-Expressionism, United States",
      medium: "Acrylic and oilstick on three canvases",
      location: "The Broad, Los Angeles",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Horn_Players_by_Jean-Michel_Basquiat.jpg/400px-Horn_Players_by_Jean-Michel_Basquiat.jpg",
      facts: [
        "A tribute to jazz musicians Charlie Parker and Dizzy Gillespie, combining text, symbols, and raw figuration.",
        "Basquiat's distinctive style blends graffiti, African American cultural references, anatomy, and stream-of-consciousness text.",
        "His method of crossing out words makes viewers focus more on them—the erasure paradoxically emphasizes the content."
      ],
      dimensions: "243.8 x 190.5 cm (three panels)"
    },
    {
      id: 228,
      title: "Summer Trees (Xiàtiān de shù)",
      artist: "Song Su-Nam",
      date: "1983 CE",
      culture: "Contemporary Korean art",
      medium: "Ink on paper",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Summer_Trees_Song_Su-Nam.jpg/400px-Summer_Trees_Song_Su-Nam.jpg",
      facts: [
        "Song Su-Nam revitalized traditional Korean ink painting by fusing it with Western abstraction and expressionism.",
        "The gestural brushstrokes evoke trees through pure ink washes, blurring the boundary between representation and abstraction.",
        "Represents the Korean 'ink wash painting movement' (sumukhwa) that sought to modernize Asian brush painting."
      ],
      dimensions: "Approximately 68 x 135 cm"
    },
    {
      id: 229,
      title: "Androgyne III (Androgyn III)",
      artist: "Magdalena Abakanowicz",
      date: "1985 CE",
      culture: "Contemporary, Poland",
      medium: "Burlap, resin, wood, nails, and string",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Abakanowicz-Abakans.jpg/400px-Abakanowicz-Abakans.jpg",
      facts: [
        "Part of a series of headless, armless, hollow-backed figures that evoke the dehumanization of totalitarian societies.",
        "Abakanowicz's experience growing up in Nazi-occupied and Communist Poland deeply informed her work on collective identity and loss.",
        "The rough, organic textures of burlap and resin create a visceral, almost archaeological sense of recovered human remains."
      ],
      dimensions: "Approximately 150 cm high"
    },
    {
      id: 230,
      title: "A Book from the Sky (Tiānshū)",
      artist: "Xu Bing",
      date: "1987-1991 CE",
      culture: "Contemporary Chinese art",
      medium: "Mixed-media installation with hand-printed books and scrolls using invented characters",
      location: "Various locations (installation)",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xu_Bing_Book_from_the_Sky.jpg/400px-Xu_Bing_Book_from_the_Sky.jpg",
      facts: [
        "Xu Bing invented approximately 4,000 Chinese-looking characters that are completely meaningless, printing them in traditional format.",
        "The work questions the nature of language, communication, and cultural authority in post-Tiananmen China.",
        "Viewers instinctively try to read the beautiful calligraphy, confronting the gap between form and meaning."
      ],
      dimensions: "Variable (installation)"
    },
    {
      id: 231,
      title: "Pink Panther",
      artist: "Jeff Koons",
      date: "1988 CE",
      culture: "Contemporary / Neo-Pop, United States",
      medium: "Glazed porcelain",
      location: "Museum of Modern Art (MoMA), New York",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Jeff_Koons_Pink_Panther.jpg/400px-Jeff_Koons_Pink_Panther.jpg",
      facts: [
        "A porcelain sculpture of a blonde woman embracing the cartoon Pink Panther, blurring high art and kitsch consumer culture.",
        "Part of Koons's 'Banality' series, which deliberately elevated mass-culture imagery to fine-art status.",
        "The use of traditional porcelain craftsmanship for a cartoon subject challenges hierarchies between 'high' and 'low' art."
      ],
      dimensions: "104.1 x 52.1 x 48.3 cm"
    },
    {
      id: 232,
      title: "Untitled (#228), from the History Portraits series",
      artist: "Cindy Sherman",
      date: "1990 CE",
      culture: "Contemporary / Postmodern Photography, United States",
      medium: "Chromogenic color print",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Sherman_History_Portraits.jpg/400px-Sherman_History_Portraits.jpg",
      facts: [
        "Sherman photographs herself in elaborate costumes and prosthetics that reference Old Master paintings.",
        "The obvious artifice (visible prosthetics, fake backgrounds) deconstructs how identity and gender are constructed in art history.",
        "Part of her career-long exploration of how women are represented in media, from film stills to fairy tales to history painting."
      ],
      dimensions: "Variable (typically large-scale prints)"
    },
    {
      id: 233,
      title: "Dancing at the Louvre, from the series The French Collection, Part 1",
      artist: "Faith Ringgold",
      date: "1991 CE",
      culture: "Contemporary / African American Art, United States",
      medium: "Acrylic on canvas with pieced fabric border (story quilt)",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Faith_Ringgold_Dancing_at_the_Louvre.jpg/400px-Faith_Ringgold_Dancing_at_the_Louvre.jpg",
      facts: [
        "Shows an African American woman and children dancing joyfully before the Mona Lisa, claiming space in Western art history.",
        "Ringgold's 'story quilts' combine painting, quilted fabric borders, and written narratives, honoring African American quilting traditions.",
        "The French Collection series reimagines famous artworks and art-world spaces from the perspective of African American women."
      ],
      dimensions: "Approximately 188 x 160 cm"
    },
    {
      id: 234,
      title: "Trade (Gifts for Trading Land with White People)",
      artist: "Jaune Quick-to-See Smith",
      date: "1992 CE",
      culture: "Contemporary Native American Art, United States",
      medium: "Oil and mixed media on canvas",
      location: "Chrysler Museum of Art, Norfolk, Virginia",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Jaune_Quick-to-See_Smith_Trade.jpg/400px-Jaune_Quick-to-See_Smith_Trade.jpg",
      facts: [
        "Created for the 500th anniversary of Columbus's arrival, the triptych critiques colonialism and the theft of Native American land.",
        "The canoe shape overlaid on newspaper clippings about Native issues confronts viewers with ongoing injustices.",
        "Smith, a member of the Salish and Kootenai Nation, uses humor and irony to address serious issues of cultural appropriation."
      ],
      dimensions: "152.4 x 431.8 cm (triptych)"
    },
    {
      id: 235,
      title: "Earth's Creation",
      artist: "Emily Kame Kngwarreye",
      date: "1994 CE",
      culture: "Contemporary Aboriginal Australian art",
      medium: "Synthetic polymer paint on canvas",
      location: "Private collection",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Emily_Kame_Kngwarreye_Earth%27s_Creation.jpg/400px-Emily_Kame_Kngwarreye_Earth%27s_Creation.jpg",
      facts: [
        "Kngwarreye began painting on canvas at age 78 and produced approximately 3,000 works in her final eight years.",
        "The swirling colors reference the Dreaming (creation stories) of Alhalkere, her ancestral country in Australia's Central Desert.",
        "Her abstraction appealed to international audiences, but the paintings are rooted in specific ceremonial body-painting traditions."
      ],
      dimensions: "Approximately 91.4 x 121.9 cm"
    },
    {
      id: 236,
      title: "Rebellious Silence, from the Women of Allah series",
      artist: "Shirin Neshat",
      date: "1994 CE",
      culture: "Contemporary Iranian Art",
      medium: "Gelatin silver print with ink (calligraphy)",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Shirin_Neshat_Rebellious_Silence.jpg/400px-Shirin_Neshat_Rebellious_Silence.jpg",
      facts: [
        "A woman's face is bisected by a gun barrel, with Farsi poetry inscribed on the visible skin, exploring gender and power in Iran.",
        "The calligraphy is by the feminist poet Forugh Farrokhzad, creating a layer of female voice within a violent image.",
        "Neshat explores the complex position of women in post-revolutionary Iran—neither simply oppressed nor simply empowered."
      ],
      dimensions: "Approximately 101 x 67 cm"
    },
    {
      id: 237,
      title: "En la Barbería no se Llora (No Crying Allowed in the Barbershop)",
      artist: "Pepon Osorio",
      date: "1994 CE",
      culture: "Contemporary / Installation Art, Puerto Rico/United States",
      medium: "Mixed-media installation",
      location: "Various locations (installation)",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Pepon_Osorio_Barberia.jpg/400px-Pepon_Osorio_Barberia.jpg",
      facts: [
        "A hyper-decorated barbershop installation exploring machismo and masculinity in Latino culture.",
        "Hundreds of small figurines, photos, and objects are embedded in the barber chairs, creating an overwhelming visual density.",
        "Osorio works directly with communities, installing art in neighborhoods before it enters museum spaces."
      ],
      dimensions: "Variable (room-sized installation)"
    },
    {
      id: 238,
      title: "Electronic Superhighway: Continental U.S., Alaska, Hawaii",
      artist: "Nam June Paik",
      date: "1995 CE",
      culture: "Contemporary / Video Art, Korean-American",
      medium: "49-channel closed-circuit video installation, neon, steel, and electronic components",
      location: "Smithsonian American Art Museum, Washington, D.C.",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Electronic_Superhighway_by_Nam_June_Paik.jpg/400px-Electronic_Superhighway_by_Nam_June_Paik.jpg",
      facts: [
        "A map of the United States made from 336 televisions outlined in neon, each state showing video clips reflecting its culture.",
        "Paik, the 'father of video art,' coined the term 'electronic superhighway' in 1974, predicting the internet age.",
        "The work critiques how television and media shape Americans' understanding of their own country and its regional identities."
      ],
      dimensions: "Approximately 4.6 x 12.2 x 1.2 m"
    },
    {
      id: 239,
      title: "The Crossing",
      artist: "Bill Viola",
      date: "1996 CE",
      culture: "Contemporary / Video Art, United States",
      medium: "Two-channel color video projection with four channels of sound",
      location: "Solomon R. Guggenheim Museum, New York (and other venues)",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Bill_Viola_Crossing.jpg/400px-Bill_Viola_Crossing.jpg",
      facts: [
        "A man walks toward the viewer, then is simultaneously consumed by fire (one side) and water (the other side).",
        "Viola draws on mystical traditions from multiple religions, exploring themes of death, transformation, and spiritual transcendence.",
        "The slow-motion, high-definition video creates an immersive, meditative experience—Viola calls his work 'visual music.'"
      ],
      dimensions: "Variable (two projected images, each approximately 4.9 m high)"
    },
    {
      id: 240,
      title: "Pisupo Lua Afe (Corned Beef 2000)",
      artist: "Michel Tuffery",
      date: "1994 CE",
      culture: "Contemporary, New Zealand (Samoan heritage)",
      medium: "Flattened tin cans (corned beef cans) on a wooden frame",
      location: "Museum of New Zealand Te Papa Tongarewa, Wellington",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pisupo_lua_afe_by_Michel_Tuffery.jpg/400px-Pisupo_lua_afe_by_Michel_Tuffery.jpg",
      facts: [
        "A life-size bull sculpture made from flattened corned beef cans, critiquing the impact of imported Western food on Pacific Island health.",
        "Corned beef (pisupo in Samoan) became a prestige food in the Pacific despite contributing to diet-related diseases.",
        "The work addresses post-colonial economics, cultural identity, and the environmental impact of consumer culture on the Pacific."
      ],
      dimensions: "Approximately life-size bull"
    },
    {
      id: 241,
      title: "Old Man's Cloth",
      artist: "El Anatsui",
      date: "2003 CE",
      culture: "Contemporary, Ghana/Nigeria",
      medium: "Aluminum and copper wire (from recycled liquor bottle caps)",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/El_Anatsui_Old_Mans_Cloth.jpg/400px-El_Anatsui_Old_Mans_Cloth.jpg",
      facts: [
        "Made from thousands of flattened aluminum liquor bottle caps connected with copper wire, creating a shimmering metallic cloth.",
        "The bottle caps reference the history of the African liquor trade, connecting to the transatlantic slave trade and colonialism.",
        "Each installation is unique—the draped, flexible form changes shape every time it is hung, like traditional kente cloth."
      ],
      dimensions: "Approximately 488 x 520 cm"
    },
    {
      id: 242,
      title: "Darkytown Rebellion",
      artist: "Kara Walker",
      date: "2001 CE",
      culture: "Contemporary / African American Art, United States",
      medium: "Cut paper and projection on wall",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Kara_Walker_Darkytown_Rebellion.jpg/400px-Kara_Walker_Darkytown_Rebellion.jpg",
      facts: [
        "Uses the antebellum silhouette format to depict disturbing scenes of racial violence and power, reclaiming a 'genteel' art form.",
        "Colored overhead projections cast visitors' shadows among the silhouettes, implicating viewers in the scenes.",
        "Walker's use of racist imagery and stereotypes is deliberately provocative, forcing confrontation with America's history of slavery."
      ],
      dimensions: "Variable (installation, approximately 4.3 x 11.3 m)"
    },
    {
      id: 243,
      title: "The Gates",
      artist: "Christo and Jeanne-Claude",
      date: "1979-2005 CE (installed February 2005)",
      culture: "Contemporary / Environmental Art",
      medium: "Steel, vinyl, and saffron-colored nylon fabric",
      location: "Central Park, New York (temporary installation, removed after 16 days)",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/The_Gates_photo_by_Anetq.jpg/400px-The_Gates_photo_by_Anetq.jpg",
      facts: [
        "7,503 gates with saffron-colored fabric panels lined 37 km of Central Park walkways for just 16 days.",
        "The artists began planning in 1979 and waited 26 years for permission, self-financing the $21 million project entirely.",
        "The temporary nature was essential to the concept—the ephemerality created urgency and made the experience precious."
      ],
      dimensions: "7,503 gates, each approximately 4.9 m high, varying widths"
    },
    {
      id: 244,
      title: "Lying with the Wolf",
      artist: "Kiki Smith",
      date: "2001 CE",
      culture: "Contemporary, United States/Germany",
      medium: "Ink and pencil on paper (Nepal paper)",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Kiki_Smith_Lying_with_the_Wolf.jpg/400px-Kiki_Smith_Lying_with_the_Wolf.jpg",
      facts: [
        "A woman lies peacefully with a wolf, reimagining the Little Red Riding Hood fairy tale as one of harmony rather than danger.",
        "Smith frequently uses fairy tales and mythology to explore themes of female agency, nature, and the body.",
        "The intimate scale and delicate drawing on handmade paper contrast with the potentially violent subject matter."
      ],
      dimensions: "Approximately 174 x 228.6 cm"
    },
    {
      id: 245,
      title: "Shibboleth",
      artist: "Doris Salcedo",
      date: "2007-2008 CE",
      culture: "Contemporary, Colombia",
      medium: "Concrete and steel (crack in floor)",
      location: "Tate Modern, London (temporary installation; floor since repaired)",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Doris_Salcedo_Shibboleth.jpg/400px-Doris_Salcedo_Shibboleth.jpg",
      facts: [
        "A 167-meter crack running the length of the Tate Modern's Turbine Hall, representing racial divisions in Western society.",
        "The title refers to a biblical password used to identify and kill outsiders (Judges 12:5-6), addressing borders and belonging.",
        "Salcedo's work addresses the legacy of political violence in Colombia and the broader experience of marginalized peoples."
      ],
      dimensions: "Approximately 167 m long, varying depth"
    },
    {
      id: 246,
      title: "MAXXI National Museum of XXI Century Arts",
      artist: "Zaha Hadid",
      date: "2009 CE",
      culture: "Contemporary / Deconstructivist Architecture",
      medium: "Concrete, steel, and glass",
      location: "Rome, Italy",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Zaha_Hadid_-_Maxxi_Museum.jpg/400px-Zaha_Hadid_-_Maxxi_Museum.jpg",
      facts: [
        "Hadid's flowing, interconnected galleries with no right angles guide visitors along curving paths through the building.",
        "Zaha Hadid was the first woman to receive the Pritzker Architecture Prize (2004), architecture's highest honor.",
        "The building's interlocking volumes and cantilevered forms seem to defy gravity, challenging conventional museum design."
      ],
      dimensions: "Site; approximately 21,000 sq m"
    },
    {
      id: 247,
      title: "Kui Hua Zi (Sunflower Seeds)",
      artist: "Ai Weiwei",
      date: "2010-2011 CE",
      culture: "Contemporary Chinese art",
      medium: "Porcelain (hand-crafted and painted)",
      location: "Tate Modern, London (installation)",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ai_Weiwei_Sunflower_Seeds.jpg/400px-Ai_Weiwei_Sunflower_Seeds.jpg",
      facts: [
        "100 million individually handcrafted porcelain sunflower seeds, each painted by artisans in Jingdezhen (China's porcelain capital).",
        "The seeds reference the Cultural Revolution, when sunflower imagery symbolized loyalty to Chairman Mao.",
        "Questions mass production, individual identity, and the relationship between the one and the many in Chinese society."
      ],
      dimensions: "Variable; approximately 100 million seeds covering 1,000 sq m at Tate"
    },
    {
      id: 248,
      title: "Waka Huia (treasure box)",
      artist: "Contemporary Māori carver",
      date: "c. 20th century CE",
      culture: "Māori, New Zealand",
      medium: "Wood with pāua (abalone) shell inlay",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/WakaHuia2.jpg/400px-WakaHuia2.jpg",
      facts: [
        "Waka huia were used to store precious taonga (treasured possessions) such as feathers and ornaments.",
        "The intricate carving features manaia (supernatural figures) and koru (spiral) patterns central to Māori artistic tradition.",
        "Contemporary Māori artists continue the carving tradition while incorporating new materials and ideas."
      ],
      dimensions: "Approximately 30-50 cm long"
    },
    {
      id: 249,
      title: "Pure Land",
      artist: "Mariko Mori",
      date: "1998 CE",
      culture: "Contemporary Japanese art",
      medium: "Glass with photo interlayer",
      location: "Various collections including Los Angeles County Museum of Art",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Mariko_Mori_Pure_Land.jpg/400px-Mariko_Mori_Pure_Land.jpg",
      facts: [
        "Mori appears as a luminous, otherworldly figure surrounded by alien-like beings in a digitally altered landscape.",
        "References the Pure Land of Amida Buddha in Japanese Buddhism—a paradise of enlightenment and spiritual liberation.",
        "Blends traditional Japanese spirituality with science fiction and digital technology, collapsing past and future."
      ],
      dimensions: "Approximately 305 x 610 x 2.2 cm"
    },
    {
      id: 250,
      title: "Preying Mantra",
      artist: "Wangechi Mutu",
      date: "2006 CE",
      culture: "Contemporary, Kenya/United States",
      medium: "Ink, collage, contact paper, and mixed media on Mylar",
      location: "Various collections",
      unit: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Wangechi_Mutu_Preying_Mantra.jpg/400px-Wangechi_Mutu_Preying_Mantra.jpg",
      facts: [
        "Combines collaged images from fashion magazines, medical textbooks, and pornography to create hybrid female figures.",
        "The title is a deliberate pun on 'praying mantis' and 'preying mantra,' evoking both spirituality and predation.",
        "Mutu's work addresses the commodification of the Black female body, colonialism, and the politics of beauty standards."
      ],
      dimensions: "Approximately 172.7 x 134.6 cm"
    }
  ]
};
