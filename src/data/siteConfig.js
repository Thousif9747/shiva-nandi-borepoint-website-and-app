// ============================================================
// SITE CONFIG - the owner edits THIS file to change business
// details, contact info, areas, claims, gallery and adds copy.
// No component changes needed for these values.
// ============================================================

export const siteConfig = {
  // --- Identity ---
  businessName: 'Shivanandi Borewell Point',
  shortName: 'Shivanandi',
  tagline: {
    en: 'Borewell point identification and borewell services',
    kn: 'ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ಬೋರವೆಲ್ ಸೇವೆಗಳು',
  },

  // --- Contact (owner edits here) ---
  phoneDisplay: '+91 63637 35171',
  phoneHref: 'tel:+916363735171',
  whatsappNumber: '916363735171', // wa.me format, no + or spaces
  instagram: 'https://www.instagram.com/shivanandiborewellponit6363',
  instagramHandle: '@shivanandiborewellponit6363',

  // --- Address ---
  address: {
    city: 'Bengaluru',
    district: 'Bengaluru',
    state: 'Karnataka',
    pinCode: '562125',
    formatted: 'Bengaluru - 562125, Karnataka, India',
  },

  // --- Areas served (Bengaluru ONLY - shown as tags in contact section) ---
  serviceArea: {
    en: 'Serving Bengaluru and nearby areas',
    kn: 'ಬೆಂಗಳೂರು ಮತ್ತು ಸುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆ',
    rule: 'bengaluru-only', // keep as-is: no service outside Bengaluru
    areas: [
      'Whitefield', 'Yelahanka', 'Kengeri', 'Electronic City', 'Hebbal',
      'Bannerghatta', 'KR Puram', 'HSR Layout', 'BTM Layout', 'Jayanagar',
      'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Bellandur', 'Koramangala',
      'Indiranagar', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi',
      'Banashankari', 'Uttarahalli', 'Bommanahalli', 'Anekal', 'Jigani',
      'Devanahalli', 'Hoskote', 'Ramanagara', 'Bidadi', 'Channapatna',
    ],
  },

  // --- Working hours (claim the owner can stand behind) ---
  hours: {
    en: 'Open all days, 7.00 am to 8.00 pm',
    kn: 'ಎಲ್ಲಾ ದಿನ ಬೆಳಿಗ್ಗೆ 7 ರಿಂದ ರಾತ್ರಿ 8 ರವರೆಗೆ',
  },

  // --- Website / SEO (change after getting a real domain) ---
  website: 'https://shivanandiborewellpoint.in/',

  // --- Google Map (placeholder - replace query with exact business location) ---
  mapEmbedUrl:
    'https://www.google.com/maps?q=Bengaluru%2C+Karnataka+562125&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Borewell+Point+Identification+Bengaluru+562125',

  // --- HERO copy (claims the owner can stand behind) ---
  hero: {
    eyebrow: {
      en: 'Borewell point identification - Bengaluru',
      kn: 'ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ - ಬೆಂಗಳೂರು',
    },
    // service-area chip shown above the headline (app-style)
    location: {
      city: { en: 'Bengaluru, Karnataka', kn: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ' },
      label: { en: 'Your service area', kn: 'ನಿಮ್ಮ ಸೇವಾ ಪ್ರದೇಶ' },
    },
    titleLead: {
      en: 'Find the right',
      kn: 'ಕೊರೆಯುವ ಮೊದಲು',
    },
    titleHighlight: {
      en: 'water point',
      kn: 'ಸರಿಯಾದ ನೀರಿನ ಪಾಯಿಂಟ್',
    },
    titleTrailing: {
      en: 'before you drill',
      kn: 'ಅನ್ನು ಗುರುತಿಸಿ',
    },
    description: {
      en: 'We check your site with modern and traditional methods, mark a point, and stay with you through drilling, repair or recharge. One local team, all work in Bengaluru.',
      kn: 'ಆಧುನಿಕ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನಗಳಿಂದ ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪರಿಶೀಲಿಸಿ, ಪಾಯಿಂಟ್ ಗುರುತಿಸಿ, ಕೊರೆಯುವಿಕೆ, ದುರಸ್ತಿ ಅಥವಾ ರೀಚಾರ್ಜ್ನವರೆಗೆ ಜೊತೆ ಇರುತ್ತೇವೆ. ಒಂದು ಸ್ಥಳೀಯ ತಂಡ, ಎಲ್ಲಾ ಕೆಲಸ ಬೆಂಗಳೂರಿನಲ್ಲಿ.',
    },
    badges: [
      { icon: ' Radar', label: { en: 'Multiple identification methods', kn: 'ಹಲವು ಗುರುತಿಸುವ ವಿಧಾನಗಳು' } },
      { icon: 'Camera', label: { en: 'Camera scanning available', kn: 'ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್ ಲಭ್ಯ' } },
      { icon: 'MapPin', label: { en: 'Serving all of Bengaluru', kn: 'ಬೆಂಗಳೂರಿನ ಎಲ್ಲಡೆ ಸೇವೆ' } },
    ],
  },

  // --- Point identification METHODS ---
  methods: [
    {
      id: 'usa',
      icon: 'Radar',
      theme: 'teal',
      name: { en: 'USA Technology', kn: 'USA ತಂತ್ರಜ್ಞಾನ' },
      what: {
        en: 'Scientific field instruments read signals from underground water streams. We take readings at several spots and mark the strongest one.',
        kn: 'ಭೂಗತ ನೀರಿನ ಹರಿವಿನ ಸಂಕೇತಗಳನ್ನು ವೈಜ್ಞಾನಿಕ ಉಪಕರಣಗಳಿಂದ ಓದುತ್ತೇವೆ. ಹತ್ತಾರು ಸ್ಥಳದಲ್ಲಿ ಓದಿ ಶಕ್ತವಾದ ಪಾಯಿಂಟ್ ಗುರುತಿಸುತ್ತೇವೆ.',
      },
      bestFor: {
        en: 'Open plots, farm land, layouts with space to walk and test',
        kn: 'ಖಾಲಿ ನಿವೇಶನ, ಕೃಷಿ ಭೂಮಿ, ನಡೆದು ಪರಿಶೀಲಿಸಲು ಜಾಗವಿರುವ ಸ್ಥಳ',
      },
    },
    {
      id: 'l-rod',
      icon: 'Zap',
      theme: 'aqua',
      name: { en: 'L-Rod Method', kn: 'ಎಲ್-ರಾಡ್ ವಿಧಾನ' },
      what: {
        en: 'Electronic rods held by an experienced hand react to water movement below the surface. We compare readings across your plot before we mark the point.',
        kn: 'ಅನುಭವಿ ಕೈಯಲ್ಲಿ ಹಿಡಿದ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ರಾಡ್ಗಳು ನೆಲದ ಕೆಳಗಿನ ನೀರಿನ ಚಲನೆಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತವೆ. ನಿವೇಶನದಾದ್ಯಂತ ಓದಿದ ನಂತರ ಗುರುತಿಸುತ್ತೇವೆ.',
      },
      bestFor: {
        en: 'Small plots, garden corners, quick pre-drill checks',
        kn: 'ಸಣ್ಣ ನಿವೇಶನ, ಮನೆ ಗಾರ್ಡನ್, ಬೇಗದ ಪೂರ್ವ ಪರಿಶೀಲನೆ',
      },
    },
    {
      id: 'coconut',
      icon: 'CircleDot',
      theme: 'earth',
      name: { en: 'Coconut Traditional Method', kn: 'ತೆಂಗಿನಕಾಯಿ ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನ' },
      what: {
        en: 'The traditional coconut method, done carefully by an experienced hand. Many families still ask for it, so we offer it honestly as one input.',
        kn: 'ಅನುಭವಿ ಕೈಯಿಂದ ಎಚ್ಚರಿಕೆಯಿಂದ ಮಾಡುವ ತೆಂಗಿನಕಾಯಿ ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನ. ಹಲವು ಮನೆಗಳು ಇದನ್ನೇ ಕೇಳುತ್ತಾರೆ, ಆದ್ದರಿಂದ ಒಂದು ಆಧಾರವಾಗಿ ಪ್ರಾಮಾಣಿಕವಾಗಿ ನೀಡುತ್ತೇವೆ.',
      },
      bestFor: {
        en: 'Village plots, farm land, customers who prefer tradition',
        kn: 'ಹಳ್ಳಿ ನಿವೇಶನ, ಕೃಷಿ ಭೂಮಿ, ಸಂಪ್ರದಾಯ ಇಚ್ಛಿಸುವ ಗ್ರಾಹಕರು',
      },
    },
  ],

  methodsDisclaimer: {
    en: 'Water finding is not 100% guaranteed. Results depend on ground conditions.',
    kn: 'ನೀರು ಸಿಗುವುದು 100% ಖಾತ್ರಿ ಅಲ್ಲ. ಫಲಿತಾಂಶ ನೆಲದ ಪರಿಸ್ಥಿತಿಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.',
  },

  // --- HOW IT WORKS steps ---
  steps: [
    {
      id: 'enquire',
      icon: 'MessageCircle',
      title: { en: 'Enquire', kn: 'ವಿಚಾರಿಸಿ' },
      text: {
        en: 'Fill the form or WhatsApp us. Tell your area, the service and a good time to call.',
        kn: 'ಫಾರ್ಮ್ ತುಂಬಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ. ಪ್ರದೇಶ, ಸೇವೆ ಮತ್ತು ಕರೆಗೆ ಅನುಕೂಲವಾದ ಸಮಯ ಹೇಳಿ.',
      },
    },
    {
      id: 'visit',
      icon: 'MapPin',
      title: { en: 'Site visit', kn: 'ಸ್ಥಳ ಭೇಟಿ' },
      text: {
        en: 'We come to your plot, see the access route and check any nearby borewells.',
        kn: 'ನಾವು ನಿಮ್ಮ ನಿವೇಶನಕ್ಕೆ ಬಂದು ರಸ್ತೆ ದಾರಿ, ಸುತ್ತಮುತ್ತಲಿನ ಬೋರವೆಲ್ ಪರಿಶೀಲಿಸುತ್ತೇವೆ.',
      },
    },
    {
      id: 'identify',
      icon: 'Radar',
      title: { en: 'Point identification', kn: 'ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ' },
      text: {
        en: 'We test the ground with the method that fits your site and mark the strongest point.',
        kn: 'ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಸೂಕ್ತ ವಿಧಾನದಿಂದ ನೆಲ ಪರೀಕ್ಷಿಸಿ ಶಕ್ತವಾದ ಪಾಯಿಂಟ್ ಗುರುತಿಸುತ್ತೇವೆ.',
      },
    },
    {
      id: 'drill',
      icon: 'Drill',
      title: { en: 'Drilling or service', kn: 'ಕೊರೆಯುವಿಕೆ ಅಥವಾ ಸೇವೆ' },
      text: {
        en: 'You decide after the quote. We finish the drilling, repair, scanning or recharge work.',
        kn: 'ಉಲ್ಲಾಟೆ ಮೊದಲು, ನಿರ್ಧಾರ ನಿಮ್ಮದು. ನಾವು ಕೊರೆಯುವಿಕೆ, ದುರಸ್ತಿ, ಸ್ಕ್ಯಾನಿಂಗ್ ಅಥವಾ ರೀಚಾರ್ಜ್ ಕೆಲಸ ಮುಗಿಸುತ್ತೇವೆ.',
      },
    },
  ],

  // --- HIGHLIGHTS block (camera scanning + recharge) ---
  highlights: [
    {
      id: 'camera',
      icon: 'Camera',
      theme: 'teal',
      iconBg: 'rgba(20, 184, 166, 0.12)',
      serviceHint: 'borewell-camera-scanning',
      title: { en: 'Camera scanning - see before you spend', kn: 'ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್ - ಹಣ ಖರ್ಚಿಸುವ ಮೊದಲು ನೋಡಿ' },
      text: {
        en: 'A borewell is a dark pipe - customers often repair or replace their pump blindly. Camera scanning ends the guesswork.',
        kn: 'ಬೋರವೆಲ್ ಒಂದು ಕತ್ತಲ ಕೊಳವೆ - ಜನರು ಏನೂ ನೋಡದೆ ಪಂಪ್ ಸರಿಪಡಿಸುತ್ತಾರೆ ಅಥವಾ ಬದಲಿಸುತ್ತಾರೆ. ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್ ಆ ಗೊಂದಲ ಕೊನೆ ಮಾಡುತ್ತದೆ.',
      },
      bullets: [
        { en: 'Casing and screen condition', kn: 'ಕೇಸಿಂಗ್ ಮತ್ತು ಸ್ಕ್ರೀನ್ ಸ್ಥಿತಿ' },
        { en: 'Water level and silt buildup', kn: 'ನೀರಿನ ಮಟ್ಟ ಮತ್ತು ಮರಳು ಸೇರುವಿಕೆ' },
        { en: 'Blockages, pipes or debris fallen inside', kn: 'ಒಳಗೆ ತೂರಿಕೊಂಡ ತಡೆ, ಕೊಳವೆ ಅಥವಾ ತುಣುಕುಗಳು' },
        { en: 'A clear confirmation before paying for repair', kn: 'ದುರಸ್ತಿಗೆ ಹಣ ಕೊಡುವ ಮೊದಲು ಸ್ಪಷ್ಟ ದೃಢೀಕರಣ' },
      ],
      cta: { en: 'Ask about camera scanning', kn: 'ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್ ಬಗ್ಗೆ ಕೇಳಿ' },
    },
    {
      id: 'recharge',
      icon: 'CloudRain',
      theme: 'earth',
      iconBg: 'rgba(169, 116, 73, 0.14)',
      serviceHint: 'borewell-recharge',
      title: { en: 'Recharge - give the borewell a second chance', kn: 'ರೀಚಾರ್ಜ್ - ಬೋರವೆಲ್ಗೆ ಎರಡನೇ ಅವಕಾಶ' },
      text: {
        en: 'Dry season empties your borewell, rain water runs away. A recharge pit sends that rain water safely into the ground around the borewell.',
        kn: 'ಬೇಸಿಗೆಯಲ್ಲಿ ಬೋರವೆಲ್ ಒಣಗುತ್ತದೆ, ಮಳೆನೀರು ವ್ಯರ್ಥ ಹರಿದು ಹೋಗುತ್ತದೆ. ರೀಚಾರ್ಜ್ ಪಿಟ್ ಆ ಮಳೆನೀರನ್ನು ಬೋರವೆಲ್ ಸುತ್ತಲಿನ ನೆಲದೊಳಗೆ ಭದ್ರವಾಗಿ ಸೇರಿಸುತ್ತದೆ.',
      },
      bullets: [
        { en: 'Rain water goes back into the ground it came from', kn: 'ಮಳೆನೀರು ಮೂಲ ನೆಲಕ್ಕೆ ಮರಳುತ್ತದೆ' },
        { en: 'Soil absorbs water slowly and steadily', kn: 'ಮಣ್ಣು ನೀರನ್ನು ನಿಧಾನವಾಗಿ ಸಮವಾಗಿ ಹೀರುತ್ತದೆ' },
        { en: 'Low-yield borewells improve over time', kn: 'ಕಾಲಾನಂತರದಲ್ಲಿ ಕಡಿಮೆ ನೀರಿನ ಬೋರವೆಲ್ ಸುಧಾರಿಸುತ್ತದೆ' },
        { en: 'Needs simple docs and periodic cleaning, works around the year', kn: 'ಮಾದರಿ ದಾಖಲೆ ಮತ್ತು ಸುತ್ತು ಸ್ವಚ್ಛತೆ ಇದ್ರೆ ವರ್ಷವಿಡಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತದೆ' },
      ],
      cta: { en: 'Ask about recharge', kn: 'ರೀಚಾರ್ಜ್ ಬಗ್ಗೆ ಕೇಳಿ' },
    },
  ],

  // --- WHY CHOOSE US (editable points; owner may adjust claims) ---
  whyUs: [
    {
      id: 'methods',
      icon: 'Radar',
      title: { en: 'Multiple identification methods', kn: 'ಹಲವು ಗುರುತಿಸುವ ವಿಧಾನಗಳು' },
      text: {
        en: 'USA technology, l-rod and the coconut method. We offer what actually suits your site, not what is convenient for us.',
        kn: 'USA ತಂತ್ರಜ್ಞಾನ, ಎಲ್-ರಾಡ್ ಮತ್ತು ತೆಂಗಿನಕಾಯಿ ವಿಧಾನ. ನಮಗೆ ಅನುಕೂಲವಲ್ಲದ, ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಸರಿಹೊಂದುವುದನ್ನೇ ಕೊಡುತ್ತೇವೆ.',
      },
    },
    {
      id: 'machinery',
      icon: 'Truck',
      title: { en: 'Own machinery', kn: 'ನಮ್ಮದೇ ಯಂತ್ರ' },
      text: {
        en: 'Lorry rig and robotic drilling rig are kept ready, so the job does not sit waiting for hired equipment.',
        kn: 'ಲಾರಿ ಡ್ರಿಲ್ ಮತ್ತು ರೋಬೋಟಿಕ್ ಡ್ರಿಲ್ ಯಂತ್ರ ಯಾವಾಗಲೂ ಸಿದ್ಧ. ಗುತ್ತಿಗೆ ಯಂತ್ರಕ್ಕೆ ಕಾಯಬೇಕಾಗಿಲ್ಲ.',
      },
    },
    {
      id: 'camera',
      icon: 'Camera',
      title: { en: 'Camera scanning available', kn: 'ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್ ಲಭ್ಯ' },
      text: {
        en: 'We can show what is inside the borewell before you spend on repair. Decisions become simple.',
        kn: 'ದುರಸ್ತಿಗೆ ಹಣ ಕೊಡುವ ಮುಂಚೆ ಬೋರವೆಲ್ ಒಳಗಿದ್ದು ತೋರಿಸುತ್ತೇವೆ. ನಿರ್ಧಾರ ಸುಲಭವಾಗುತ್ತದೆ.',
      },
    },
    {
      id: 'pricing',
      icon: 'IndianRupee',
      title: { en: 'Transparent pricing', kn: 'ಸ್ಪಷ್ಟ ಬೆಲೆ' },
      text: {
        en: 'Depth, casing and charges are explained first. No add-on later.',
        kn: 'ಆಳ, ಕೇಸಿಂಗ್, ಶುಲ್ಕ ಎಲ್ಲ ಮೊದಲೇ ತಿಳಿಸುತ್ತೇವೆ. ನಂತರ ಸೇರಿಸುವ ದರವಿಲ್ಲ.',
      },
    },
    {
      id: 'support',
      icon: 'HeartHandshake',
      title: { en: 'After-service support', kn: 'ಸೇವೆ ನಂತರ ಸಹಾಯ' },
      text: {
        en: 'If something is not right after the work, call us on the same number. We look at it.',
        kn: 'ಕೆಲಸ ಮುಗಿದ ಮೇಲೆ ಏನಾದರೂ ಸರಿಯಿಲ್ಲದಿದ್ದರೆ ಅದೇ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ. ನಾವು ನೋಡುತ್ತೇವೆ.',
      },
    },
    {
      id: 'local',
      icon: 'MapPin',
      title: { en: 'Local Bengaluru team', kn: 'ಬೆಂಗಳೂರಿನ ಸ್ಥಳೀಯ ತಂಡ' },
      text: {
        en: 'We serve only Bengaluru. Short travel, quick visits, and we know what suits each area.',
        kn: 'ನಾವು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮಾತ್ರ ಸೇವೆ. ಬೇಗ ಬರುವೆವು, ಪ್ರತಿ ಪ್ರದೇಶಕ್ಕೂ ಸೂಕ್ತ ಉಪಾಯ ಗೊತ್ತು.',
      },
    },
  ],

  // --- GALLERY (placeholder images; owner replaces with real work photos) ---
  gallery: [
    { id: 'g1', src: '/images/work-1.svg', alt: { en: 'Sample photo - point identification work', kn: 'ಮಾದರಿ ಫೋಟೋ - ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ' }, placeholder: true },
    { id: 'g2', src: '/images/work-2.svg', alt: { en: 'Sample photo - lorry drilling rig', kn: 'ಮಾದರಿ ಫೋಟೋ - ಲಾರಿ ಡ್ರಿಲಿಂಗ್' }, placeholder: true },
    { id: 'g3', src: '/images/work-3.svg', alt: { en: 'Sample photo - camera scanning', kn: 'ಮಾದರಿ ಫೋಟೋ - ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್' }, placeholder: true },
    { id: 'g4', src: '/images/work-4.svg', alt: { en: 'Sample photo - borewell recharge pit', kn: 'ಮಾದರಿ ಫೋಟೋ - ರೀಚಾರ್ಜ್ ಪಿಟ್' }, placeholder: true },
    { id: 'g5', src: '/images/work-5.svg', alt: { en: 'Sample photo - borewell repair', kn: 'ಮಾದರಿ ಫೋಟೋ - ಬೋರವೆಲ್ ದುರಸ್ತಿ' }, placeholder: true },
    { id: 'g6', src: '/images/work-6.svg', alt: { en: 'Sample photo - finished borewell at a site', kn: 'ಮಾದರಿ ಫೋಟೋ - ಸ್ಥಳದಲ್ಲಿ ಮುಗಿದ ಬೋರವೆಲ್' }, placeholder: true },
  ],

  // --- Instagram REELS that play on the website ---
  // Owner: paste the link of any reel (https://www.instagram.com/reel/XXXXXXX/)
  // and it will play inline on the site. Remove a line to remove that video.
  instagramReels: [
    {
      id: 'ig1',
      url: 'https://www.instagram.com/reel/DdJdb1Lz0ur/',
      title: { en: 'Borewell point work reel', kn: 'ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ಕೆಲಸದ ರೀಲ್' },
    },
    {
      id: 'ig2',
      url: 'https://www.instagram.com/reel/DdoYzN0ux_S/',
      title: { en: 'Point identification reel', kn: 'ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ ರೀಲ್' },
    },
    {
      id: 'ig3',
      url: 'https://www.instagram.com/reel/DbPn2Wih7RU/',
      title: { en: 'Site work reel', kn: 'ಸ್ಥಳದ ಕೆಲಸದ ರೀಲ್' },
    },
    {
      id: 'ig4',
      url: 'https://www.instagram.com/reel/DYccuXFtout/',
      title: { en: 'Drilling machinery reel', kn: 'ಡ್ರಿಲ್ಲಿಂಗ್ ಯಂತ್ರದ ರೀಲ್' },
    },
    {
      id: 'ig5',
      url: 'https://www.instagram.com/reel/Db5PDjFm25I/',
      title: { en: 'Bengaluru site reel', kn: 'ಬೆಂಗಳೂರು ಸ್ಥಳದ ರೀಲ್' },
    },
    {
      id: 'ig6',
      url: 'https://www.instagram.com/reel/DbLSJcEBLkk/',
      title: { en: 'Our work reel', kn: 'ನಮ್ಮ ಕೆಲಸದ ರೀಲ್' },
    },
  ],

  // --- Future use (not visible on page) ---
  installedApp: 'shivanandi-borewell-point',
}

export default siteConfig
