// ============================================================
// SERVICES - the owner edits THIS file to add, remove or price
// a service. Names/descriptions keep both languages side by side.
// Leave price as '' to show "Call for price".
// ============================================================

export const services = [
  {
    id: 'usa-technology',
    icon: 'Radar',
    featured: true,
    name: {
      en: 'USA Technology Borewell Point Identification',
      kn: 'USA ತಂತ್ರಜ್ಞಾನ ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ',
    },
    short: {
      en: 'We study the land and use modern field instruments to mark a likely water point before drilling starts.',
      kn: 'ಕೊರೆಯುವ ಮೊದಲು ನೆಲವನ್ನು ಪರೀಕ್ಷಿಸಿ, ಆಧುನಿಕ ಉಪಕರಣಗಳಿಂದ ನೀರಿನ ಸಾಧ್ಯತೆಯಿರುವ ಪಾಯಿಂಟ್ ಗುರುತಿಸುತ್ತೇವೆ.',
    },
    details: {
      en: 'We walk your plot, test the ground at several spots with modern scientific instruments, and mark the point that reads strongest. We explain why that spot was chosen, in simple words, before any drilling begins.',
      kn: 'ನಿಮ್ಮ ನಿವೇಶನದಲ್ಲಿ ನಡೆದು, ಆಧುನಿಕ ವೈಜ್ಞಾನಿಕ ಉಪಕರಣಗಳಿಂದ ಹಲವು ಕಡೆ ನೆಲವನ್ನು ಪರೀಕ್ಷಿಸಿ, ಶಕ್ತವಾಗಿ ಕಾಣುವ ಪಾಯಿಂಟ್ ಗುರುತಿಸುತ್ತೇವೆ. ಕೊರೆಯುವ ಮೊದಲೇ ಆ ಸ್ಥಳ ಏಕೆ ಆಯ್ಕೆ ಎಂದು ಸರಳವಾಗಿ ತಿಳಿಸುತ್ತೇವೆ.',
    },
    bestFor: {
      en: 'Open plots, farm land, layouts with walking space',
      kn: 'ಖಾಲಿ ನಿವೇಶನ, ಕೃಷಿ ಭೂಮಿ, ನಡೆಯಲು ಜಾಗವಿರುವ ಸ್ಥಳ',
    },
    price: '',
  },
  {
    id: 'l-rod-identification',
    icon: 'Zap',
    name: {
      en: 'L-Rod Point Identification',
      kn: 'ಎಲ್-ರಾಡ್ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ',
    },
    short: {
      en: 'An electronic rod checks underground water signals at the site and helps mark a drilling point.',
      kn: 'ಸ್ಥಳದಲ್ಲಿ ಭೂಗತ ನೀರಿನ ಸಂಕೇತ ಪರಿಶೀಲಿಸಲು ಎಲ್-ರಾಡ್ ಉಪಕರಣ ಬಳಸಿ ಕೊರೆಯುವ ಪಾಯಿಂಟ್ ಗುರುತಿಸುತ್ತೇವೆ.',
    },
    details: {
      en: 'The l-rod is a light field tool that reacts to water movement below the surface. An experienced hand tests several points across the plot and compares them. It is quick and works well in open plots and farm land.',
      kn: 'ಎಲ್-ರಾಡ್ ಒಂದು ಹಗುರ ಉಪಕರಣ; ನೆಲದ ಕಳಗಿನ ನೀರಿನ ಚಲನೆಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ. ಅನುಭವಿ ಕೈ ನಿವೇಶನದಾದ್ಯಂತ ಹಲವು ಕಡೆ ಪರೀಕ್ಷಿಸಿ ಹೋಲಿಸುತ್ತಾರೆ. ಬೇಗ ಆಗುತ್ತದೆ; ಖಾಲಿ ನಿವೇಶನ ಮತ್ತು ಕೃಷಿ ಭೂಮಿಗೆ ಒಳ್ಳೆಯದು.',
    },
    bestFor: {
      en: 'Small plots, quick pre-drill checks',
      kn: 'ಸಣ್ಣ ನಿವೇಶನ, ಬೇಗದ ಪೂರ್ವ ಪರಿಶೀಲನೆ',
    },
    price: '',
  },
  {
    id: 'coconut-method',
    icon: 'CircleDot',
    name: {
      en: 'Coconut Traditional Method Point Identification',
      kn: 'ತೆಂಗಿನಕಾಯಿ ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನ ಗುರುತಿಸುವಿಕೆ',
    },
    short: {
      en: 'The traditional coconut method, done carefully by an experienced hand, to shortlist a water point.',
      kn: 'ಅನುಭವಿ ಕೈಯಿಂದ ಜಾಗರೂಕತೆಯಿಂದ ಮಾಡುವ ತೆಂಗಿನಕಾಯಿ ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನ, ನೀರಿನ ಪಾಯಿಂಟ್ ಆಯ್ಕೆಗೆ.',
    },
    details: {
      en: 'A coconut is held over the ground and observed at each spot. Families in Bengaluru still ask for this method, especially in villages and older layouts. We use it as one input - not as a promise - and say so openly.',
      kn: 'ತೆಂಗಿನಕಾಯಿಯನ್ನು ನೆಲದ ಮೇಲೆ ಹಿಡಿದು ಪ್ರತಿ ಸ್ಥಳದಲ್ಲಿ ಗಮನಿಸಲಾಗುತ್ತದೆ. ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇಂದಿಗೂ ಹಲವು ಮನೆಗಳು ಈ ವಿಧಾನವನ್ನೇ ಬಯಸುತ್ತಾರೆ, ವಿಶೇಷವಾಗಿ ಹಳ್ಳಿಗಳು ಮತ್ತು ಹಳೆ ಲೇಔಟ್ಗಳಲ್ಲಿ. ಇದನ್ನು ಒಂದು ಆಧಾರವಾಗಿ ಮಾತ್ರ ಬಳಸುವುದಾಗಿ ಮೊದಲೇ ಹೇಳುತ್ತೇವೆ.',
    },
    bestFor: {
      en: 'Village plots, farm land, traditional preference',
      kn: 'ಹಳ್ಳಿ ನಿವೇಶನ, ಕೃಷಿ ಭೂಮಿ, ಸಂಪ್ರದಾಯ ಇಚ್ಛಿಸುವವರಿಗೆ',
    },
    price: '',
  },
  {
    id: 'consultation',
    icon: 'Handshake',
    name: {
      en: 'Borewell Point Trading / Consultation',
      kn: 'ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ವ್ಯಾಪಾರ / ಸಲಹೆ',
    },
    short: {
      en: 'Already have a point marked? We review it, compare with other spots and advise before you drill.',
      kn: 'ಈಗಾಗಲೇ ಪಾಯಿಂಟ್ ಗುರುತಿಸಿದ್ದೀರಾ? ಕೊರೆಯುವ ಮೊದಲು ಅದನ್ನು ಪರಿಶೀಲಿಸಿ, ಇತರ ಸ್ಥಳಗಳೊಂದಿಗೆ ಹೋಲಿಸಿ ಸಲಹೆ ನೀಡುತ್ತೇವೆ.',
    },
    details: {
      en: 'We visit the site, look at the marked point and nearby borewells, and give a plain opinion. If another spot looks stronger, we say so. The final decision stays with you.',
      kn: 'ಸ್ಥಳಕ್ಕೆ ಬಂದು ಗುರುತಿಸಿದ ಪಾಯಿಂಟ್ ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತೇವೆ, ಸುತ್ತಮುತ್ತಲಿನ ಬೋರವೆಲ್ ನೋಡುತ್ತೇವೆ, ಸರಳವಾಗಿ ಅಭಿಪ್ರಾಯ ಹೇಳುತ್ತೇವೆ. ಬೇರೆ ಸ್ಥಳ ಒಳ್ಳೆಯದಿದ್ದರೆ ಅದನ್ನೇ ಹೇಳುತ್ತೇವೆ. ಅಂತಿಮ ನಿರ್ಧಾರ ನಿಮ್ಮದೇ.',
    },
    bestFor: {
      en: 'Second opinions, plots with an existing mark',
      kn: 'ಎರಡನೇ ಅಭಿಪ್ರಾಯ, ಪಾಯಿಂಟ್ ಇರುವ ನಿವೇಶನ',
    },
    price: '',
  },
  {
    id: 'machinery-identification',
    icon: 'Cog',
    name: {
      en: 'Machinery Point Identification',
      kn: 'ಯಂತ್ರ ಸಹಾಯದ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ',
    },
    short: {
      en: 'Machine-assisted checks for larger plots and sites where a faster survey is needed.',
      kn: 'ದೊಡ್ಡ ನಿವೇಶನಗಳಿಗೆ ಮತ್ತು ವೇಗವಾದ ಸರ್ವೇ ಬೇಕಾದ ಸ್ಥಳಗಳಿಗೆ ಯಂತ್ರ ಸಹಾಯದ ಪರಿಶೀಲನೆ.',
    },
    details: {
      en: 'We bring field machinery to cover a wider area in less time. Readings are taken across the plot and compared, and the most promising spot is marked for drilling.',
      kn: 'ವಿಶಾಲವಾದ ಜಾಗವನ್ನು ಕಡಿಮೆ ಸಮಯದಲ್ಲಿ ಪರಿಶೀಲಿಸಲು ಯಂತ್ರ ಸಾಮಗ್ರಿ ತರುತ್ತೇವೆ. ನಿವೇಶನದಾದ್ಯಂತ ಓದುಗೆ ತೆಗೆದು ಹೋಲಿಸಿ, ಶಕ್ತವಾದ ಸ್ಥಳದಲ್ಲಿ ಪಾಯಿಂಟ್ ಗುರುತಿಸುತ್ತೇವೆ.',
    },
    bestFor: {
      en: 'Large plots, layouts, commercial sites',
      kn: 'ದೊಡ್ಡ ನಿವೇಶನ, ಲೇಔಟ್, ವಾಣಿಜ್ಯ ಸ್ಥಳ',
    },
    price: '',
  },
  {
    id: 'borewell-camera-scanning',
    icon: 'Camera',
    featured: true,
    name: {
      en: 'Borewell Camera Scanning',
      kn: 'ಬೋರವೆಲ್ ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್',
    },
    short: {
      en: 'We lower a camera into the borewell to see the casing, water level and any blockage inside.',
      kn: 'ಬೋರವೆಲ್ನ ಕೇಸಿಂಗ್, ನೀರಿನ ಮಟ್ಟ ಮತ್ತು ಒಳಗಿನ ತಡೆ ಸ್ಪಷ್ಟವಾಗಿ ನೋಡಲು ಕ್ಯಾಮರಾ ಇಳಿಸುತ್ತೇವೆ.',
    },
    details: {
      en: 'The camera shows what is actually happening inside the borewell. We can see cracks, silt, fallen casing or a blocked screen. You get a clear picture before spending on repairs.',
      kn: 'ಕ್ಯಾಮರಾ ಬೋರವೆಲ್ ಒಳಗೆ ನಿಜವಾಗಿ ಏನಾಗಿದೆ ಅನ್ನುವುದು ತೋರಿಸುತ್ತದೆ. ಬಿರುಕು, ಮರಳು, ಕೆಳಗೆ ಉರುಳಿದ ಕೇಸಿಂಗ್ ಅಥವಾ ತಡೆ ಎಂಬ ಅಂಶಗಳು ಕಣ್ಣಿಗೆ ಕಾಣುತ್ತವೆ. ದುರಸ್ತಿಗೆ ಹಣ ಕೊಡುವ ಮುಂಚೆ ಸ್ಪಷ್ಟ ಚಿತ್ರ ಸಿಗುತ್ತದೆ.',
    },
    bestFor: {
      en: 'Low yield, muddy water, pump failures, before repair',
      kn: 'ಕಡಿಮೆ ನೀರು, ಕೆಸರು ನೀರು, ಪಂಪ್ ಕೆಲಸ ಮಾಡದೆ ಇರುವಾಗ, ದುರಸ್ತಿ ಮೊದಲು',
    },
    price: '',
  },
  {
    id: 'borewell-recharge',
    icon: 'CloudRain',
    featured: true,
    name: {
      en: 'Borewell Recharge',
      kn: 'ಬೋರವೆಲ್ ರೀಚಾರ್ಜ್',
    },
    short: {
      en: 'Rainwater recharge pits that send rain water back into the ground around your borewell.',
      kn: 'ಮಳೆನೀರನ್ನು ನಿಮ್ಮ ಬೋರವೆಲ್ ಸುತ್ತಮುತ್ತಲಿನ ನೆಲಕ್ಕೆ ಮರಳಿ ಸೇರಿಸುವ ರೀಚಾರ್ಜ್ ಪಿಟ್.',
    },
    details: {
      en: 'A recharge pit collects rain water from your roof or plot and lets it seep slowly into the ground near the borewell. This can help revive a low-yield borewell over time. It is not a quick fix - the pit must be built and cleaned properly. We explain what will work on your site.',
      kn: 'ರೀಚಾರ್ಜ್ ಪಿಟ್ ಮನೆ ಛಾವಣಿ ಅಥವಾ ನಿವೇಶನದ ಮಳೆನೀರನ್ನು ಸಂಗ್ರಹಿಸಿ, ಬೋರವೆಲ್ ಸುತ್ತಲಿನ ನೆಲದಲ್ಲಿ ನಿಧಾನವಾಗಿ ಸೇರಿಸುತ್ತದೆ. ಇದರಿಂದ ಕಾಲಾನಂತರದಲ್ಲಿ ಕಡಿಮೆ ನೀರಿನ ಬೋರವೆಲ್ ಸುಧಾರಿಸಬಹುದು. ಇದು ಒಂದು ದಿನದ ಕೆಲಸ ಅಲ್ಲ - ಪಿಟ್ ಸರಿಯಾಗಿ ಕಟ್ಟಿ, ಶುಚಿಗೊಳಿಸಬೇಕು. ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಯಾವುದು ಒಪ್ಪುತ್ತದೆ ಎಂದು ನಾವು ತಿಳಿಸುತ್ತೇವೆ.',
    },
    bestFor: {
      en: 'Low-yield borewells, homes with roof runoff',
      kn: 'ಕಡಿಮೆ ನೀರಿನ ಬೋರವೆಲ್, ಚಾವಣಿ ನೀರು ಸಂಗ್ರಹವಿರುವ ಮನೆಗಳು',
    },
    price: '',
  },
  {
    id: 'borewell-repair',
    icon: 'Wrench',
    name: {
      en: 'Borewell Repair',
      kn: 'ಬೋರವೆಲ್ ದುರಸ್ತಿ',
    },
    short: {
      en: 'Repair work for pumps, pipes, casing and other common borewell problems.',
      kn: 'ಪಂಪ್, ಪೈಪ್, ಕೇಸಿಂಗ್ ಮತ್ತು ಸಾಮಾನ್ಯ ಬೋರವೆಲ್ ಸಮಸ್ಯೆಗಳಿಗೆ ದುರಸ್ತಿ ಸೇವೆ.',
    },
    details: {
      en: 'We check the borewell first - often with a camera scan - and explain what needs repair. Work may include pump replacement, pipe repair, flushing or casing fixes, depending on the problem found.',
      kn: 'ಮೊದಲು ಬೋರವೆಲ್ ಪರಿಶೀಲಿಸುತ್ತೇವೆ - ಸಾಮಾನ್ಯವಾಗಿ ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನ್ನೊಂದಿಗೆ - ಏನು ಸರಿಪಡಿಸಬೇಕು ಅನ್ನು ತಿಳಿಸುತ್ತೇವೆ. ಸಮಸ್ಯೆ ನೋಡಿ ಪಂಪ್ ಬದಲಿ, ಪೈಪ್ ದುರಸ್ತಿ, ಫ್ಲಶಿಂಗ್ ಅಥವಾ ಕೇಸಿಂಗ್ ಸರಿಪಡಿಸಬಹುದು.',
    },
    bestFor: {
      en: 'Pump failure, pipe leaks, muddy water',
      kn: 'ಪಂಪ್ ಕೆಲಸ ಮಾಡದೆ ಇರುವಾಗ, ಪೈಪ್ ಸೋರು, ಕೆಸರು ನೀರು',
    },
    price: '',
  },
  {
    id: 'lorry-drilling',
    icon: 'Truck',
    name: {
      en: 'Borewell Lorry Drilling',
      kn: 'ಬೋರವೆಲ್ ಲಾರಿ ಡ್ರಿಲ್ಲಿಂಗ್',
    },
    short: {
      en: 'Lorry-mounted drilling rigs for farm land, plots and sites that need a deeper borewell.',
      kn: 'ಕೃಷಿ ಭೂಮಿ, ನಿವೇಶನ ಮತ್ತು ಆಳವಾದ ಬೋರವೆಲ್ ಬೇಕಾದ ಸ್ಥಳಗಳಿಗೆ ಲಾರಿ ಡ್ರಿಲಿಂಗ್.',
    },
    details: {
      en: 'Our lorry rig handles sites where a larger rig cannot go. Before starting we discuss depth, casing and expected water, and we keep you updated during the work.',
      kn: 'ದೊಡ್ಡ ಡ್ರಿಲ್ ಹೋಗಲಾಗದ ಸ್ಥಳಗಳಲ್ಲಿ ನಮ್ಮ ಲಾರಿ ಡ್ರಿಲ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆರಂಭದ ಮುಂಚೆ ಆಳ, ಕೇಸಿಂಗ್, ನೀರಿನ ಮಟ್ಟ ಎಲ್ಲ ಚರ್ಚಿಸುತ್ತೇವೆ, ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ಮಾಹಿತಿ ಕೊಡುತ್ತಾ ಇರುತ್ತೇವೆ.',
    },
    bestFor: {
      en: 'Farm land, narrow access, deeper drilling',
      kn: 'ಕೃಷಿ ಭೂಮಿ, ಕಿರಿದಾದ ದಾರಿ, ಆಳವಾದ ಕೊರೆಯುವಿಕೆ',
    },
    // starting rate shown on the card; tapping it opens the full rate card below
    price: {
      en: '₹90 / ft onwards',
      kn: '₹90 / ಅಡಿಯಿಂದ',
    },
    // owner's real drilling rate card - opens when the service card is opened
    rateCard: {
      title: {
        en: 'Borewell drilling rate card',
        kn: 'ಬೋರವೆಲ್ ಕೊರೆಯುವಿಕೆ ದರ ಪಟ್ಟಿ',
      },
      depthHead: {
        en: 'Depth',
        kn: 'ಆಳ',
      },
      depthUnit: {
        en: 'ft',
        kn: 'ಅಡಿ',
      },
      rateHead: {
        en: 'Rate / ft',
        kn: 'ದರ / ಅಡಿ',
      },
      // depth slab (ft) -> rupees per foot
      depth: [
        { range: '0 - 250', rate: 90 },
        { range: '250 - 350', rate: 100 },
        { range: '350 - 450', rate: 120 },
        { range: '450 - 500', rate: 150 },
        { range: '500 - 600', rate: 180 },
        { range: '600 - 700', rate: 210 },
        { range: '700 - 800', rate: 230 },
        { range: '800 - 900', rate: 270 },
        { range: '900 - 1000', rate: 310 },
        { range: '1000 - 1100', rate: 360 },
        { range: '1100 - 1200', rate: 460 },
      ],
      extrasHead: {
        en: 'Extras & other charges',
        kn: 'ಹೆಚ್ಚುವರಿ ಮತ್ತು ಇತರೆ ದರಗಳು',
      },
      itemHead: {
        en: 'Item',
        kn: 'ವಿವರ',
      },
      // unit: 'ft' = per running foot, otherwise rupees per item
      extras: [
        { name: { en: '7" Casing MS medium', kn: '7" ಕೇಸಿಂಗ್ MS ಮೀಡಿಯಂ' }, rate: 480, unit: 'ft' },
        { name: { en: '7" Casing MS heavy', kn: '7" ಕೇಸಿಂಗ್ MS ಹೆವಿ' }, rate: 530, unit: 'ft' },
        { name: { en: 'PVC 10"', kn: 'PVC 10"' }, rate: 420, unit: 'ft' },
        { name: { en: 'Water injection', kn: 'ನೀರಿನ ಸೇರ್ಪಡೆ (ವಾಟರ್ ಇಂಜೆಕ್ಷನ್)' }, rate: 10, unit: 'ft' },
        { name: { en: 'Collar', kn: 'ಕಾಲರ್' }, rate: 200 },
        { name: { en: 'Welding', kn: 'ವೆಲ್ಡಿಂಗ್' }, rate: 200 },
        { name: { en: 'Cap', kn: 'ಕ್ಯಾಪ್' }, rate: 100 },
        { name: { en: 'Flashing', kn: 'ಫ್ಲ್ಯಾಶಿಂಗ್' }, rate: 2000 },
        { name: { en: 'Transportation', kn: 'ಸಾಗಣೆ' }, rate: 3000 },
        { name: { en: 'Meals', kn: 'ಊಟ' }, rate: 3000 },
      ],
      note: {
        en: 'Depth rates are per foot. Casing, PVC and water injection are charged per foot; other items as listed. Final quote after site visit.',
        kn: 'ಆಳದ ದರಗಳು ಪ್ರತಿ ಅಡಿಗೆ. ಕೇಸಿಂಗ್, PVC ಮತ್ತು ನೀರಿನ ಸೇರ್ಪಡೆ ಪ್ರತಿ ಅಡಿಗೆ; ಇತರೆ ವಸ್ತುಗಳು ಪಟ್ಟಿಯಂತೆ. ಸ್ಥಳಕ್ಕೆ ಹೋದ ಮೇಲೆ ಅಂತಿಮ ಬೆಲೆ.',
      },
    },
  },
  {
    id: 'robotic-drilling',
    icon: 'Cog',
    name: {
      en: 'Robotic Drilling',
      kn: 'ರೋಬೋಟಿಕ್ ಡ್ರಿಲ್ಲಿಂಗ್',
    },
    short: {
      en: 'Robotic drilling for tight spots where accuracy and less ground disturbance matter.',
      kn: 'ನಿಖರತೆ ಮತ್ತು ಕಡಿಮೆ ನೆಲದ ಹಾನಿ ಬೇಕಾದ ಸಣ್ಣ ಸ್ಥಳಗಳಿಗೆ ರೋಬೋಟಿಕ್ ಡ್ರಿಲ್ಲಿಂಗ್.',
    },
    details: {
      en: 'A robotic rig works in smaller spaces - busy streets, built-up plots, corners inside the house compound. We assess the site first and tell you honestly if the machine can reach it.',
      kn: 'ಸಣ್ಣ ಜಾಗದಲ್ಲಿ - ದಟ್ಟಣೆ ಇರುವ ರಸ್ತೆ, ಮನೆ ಆವರಣದ ಮೂಲೆ - ರೋಬೋಟಿಕ್ ಡ್ರಿಲ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಮೊದಲು ಸ್ಥಳ ಪರಿಶೀಲಿಸಿ, ಯಂತ್ರ ಹೋಗಬಲ್ಲದೋ ಇಲ್ಲೋ ಅನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಹೇಳುತ್ತೇವೆ.',
    },
    bestFor: {
      en: 'Tight access, built-up areas, precision work',
      kn: 'ಕಿರಿದಾದ ಜಾಗ, ನಿಬಿಡ ಪ್ರದೇಶ, ನಿಖರ ಕೆಲಸ',
    },
    price: '',
  },
]

// helper: ordered unique list of service ids for the enquiry dropdown
export const serviceIds = services.map((s) => s.id)

export default services
