export interface SpecialityData {
  slug: string;
  image: string;
  color: string;
  en: {
    title: string;
    subtitle: string;
    metaTitle: string;
    metaDesc: string;
    heroDesc: string;
    sections: { heading: string; content: string }[];
    faq: { q: string; a: string }[];
  };
  ml: {
    title: string;
    subtitle: string;
    heroDesc: string;
    sections: { heading: string; content: string }[];
  };
}

export const specialities: SpecialityData[] = [
  {
    slug: 'raw-herbal-medicines',
    image: '/images/speciality-herbal1.webp',
    color: '#E8F0E6',
    en: {
      title: 'Raw Herbal Medicines',
      subtitle: 'Dried, Cut & Powdered Herbs',
      metaTitle: 'Raw Herbal Medicines in Mannarkkad | Rahath Ayurvedic',
      metaDesc: 'Authentic raw herbal medicines — dried, cut & powdered herbs prepared traditionally in Mannarkkad, Palakkad. No artificial additives.',
      heroDesc: 'At Rahath Ayurvedic, we offer a wide range of authentic raw herbal medicines sourced from trusted suppliers and prepared entirely in-house using traditional Kerala methods.',
      sections: [
        {
          heading: 'What Are Raw Herbal Medicines?',
          content: 'Raw herbal medicines are natural plant-based remedies used in Ayurveda for centuries. They include dried roots, barks, leaves, seeds, and flowers — either as single herbs or traditional combinations. At Rahath, every herb is carefully processed to retain its natural potency and therapeutic properties.'
        },
        {
          heading: 'Our Herbal Collection',
          content: 'We stock over 100 varieties of traditional herbs including Ashwagandha, Brahmi, Triphala, Tulsi, Neem, Turmeric, and many rare Kerala-specific medicinal plants. Each herb is available in dried, cut, or powdered form based on your needs.'
        },
        {
          heading: 'Why Choose Our Herbs?',
          content: 'Every herb at Rahath is processed through our meticulous 4-step preparation process: natural drying, careful cutting, traditional grinding, and hygienic storage in glass containers. We never use artificial preservatives, colors, or additives — ensuring you receive pure, potent herbal medicines.'
        },
        {
          heading: 'Who Can Benefit?',
          content: 'Our raw herbal medicines serve anyone seeking natural wellness support — from individuals managing chronic conditions to families looking for daily health supplements rooted in Ayurvedic tradition. We provide personalized guidance at our shop to help you choose the right herbs.'
        }
      ],
      faq: [
        { q: 'How should I store raw herbal medicines?', a: 'Store in airtight glass containers in a cool, dry place away from direct sunlight. Our herbs come in hygienic packaging designed for long shelf life.' },
        { q: 'Are your herbs suitable for children?', a: 'Many herbs are safe for children in appropriate dosages. We recommend visiting our shop for personalized guidance based on age and health needs.' }
      ]
    },
    ml: {
      title: 'പച്ചമരുന്നുകൾ',
      subtitle: 'ഉണക്കി മുറിച്ചു പൊടിച്ച പച്ചമരുന്നുകൾ',
      heroDesc: 'റാഹത്ത് ആയുർവേദിക്കിൽ, വിശ്വസനീയമായ വിതരണക്കാരിൽ നിന്ന് ശേഖരിച്ച് പരമ്പരാഗത കേരള രീതികൾ ഉപയോഗിച്ച് പൂർണ്ണമായും ഇൻ-ഹൌസ് ആയി തയ്യാറാക്കിയ ആധികാരിക പച്ചമരുന്നുകൾ ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.',
      sections: [
        { heading: 'പച്ചമരുന്നുകൾ എന്താണ്?', content: 'നൂറ്റാണ്ടുകളായി ആയുർവേദത്തിൽ ഉപയോഗിക്കുന്ന പ്രകൃതിദത്ത സസ്യ അടിസ്ഥാന പ്രതിവിധികളാണ് പച്ചമരുന്നുകൾ. ഉണക്കിയ വേരുകൾ, തൊലികൾ, ഇലകൾ, വിത്തുകൾ, പൂക്കൾ എന്നിവ ഉൾപ്പെടുന്നു.' },
        { heading: 'ഞങ്ങളുടെ ഹെർബൽ ശേഖരം', content: 'അശ്വഗന്ധ, ബ്രഹ്മി, ത്രിഫല, തുളസി, വേപ്പ്, മഞ്ഞൾ എന്നിവ ഉൾപ്പെടെ 100-ലധികം ഇനം പരമ്പരാഗത ഔഷധച്ചെടികൾ ഞങ്ങളുടെ പക്കൽ ലഭ്യമാണ്.' },
        { heading: 'ഞങ്ങളുടെ മരുന്നുകൾ എന്തുകൊണ്ട് തിരഞ്ഞെടുക്കണം?', content: 'റാഹത്തിലെ ഓരോ ഔഷധച്ചെടിയും 4-ഘട്ട തയ്യാറെടുപ്പ് പ്രക്രിയയിലൂടെ സംസ്കരിക്കുന്നു. കൃത്രിമ സംരക്ഷണ വസ്തുക്കളോ നിറങ്ങളോ ചേരുവകളോ ഞങ്ങൾ ഉപയോഗിക്കുന്നില്ല.' },
        { heading: 'ആർക്കെല്ലാം പ്രയോജനപ്പെടും?', content: 'ദീർഘകാല ആരോഗ്യ പ്രശ്നങ്ങൾ കൈകാര്യം ചെയ്യുന്നവർ മുതൽ ദൈനംദിന ആരോഗ്യ സപ്ലിമെന്റുകൾ തേടുന്ന കുടുംബങ്ങൾ വരെ എല്ലാവർക്കും ഞങ്ങളുടെ പച്ചമരുന്നുകൾ ഉപയോഗപ്രദമാണ്.' }
      ]
    }
  },
  {
    slug: 'piles-care',
    image: '/images/speciality-piles1.webp',
    color: '#F0EBE6',
    en: {
      title: 'Piles Care Support',
      subtitle: 'Traditional Herbal Support',
      metaTitle: 'Ayurvedic Piles Care Support in Mannarkkad | Rahath',
      metaDesc: 'Traditional Ayurvedic herbal formulations for piles care support in Mannarkkad. Natural relief through time-tested Kerala remedies.',
      heroDesc: 'Rahath Ayurvedic provides specialized traditional herbal formulations designed to support comfort and natural relief for piles, using time-tested ingredients from Kerala\'s traditional medicine system.',
      sections: [
        {
          heading: 'Ayurvedic Approach to Piles Care',
          content: 'In Ayurveda, piles (Arsha) are addressed through a holistic approach combining dietary changes, lifestyle modifications, and carefully formulated herbal preparations. Our traditional formulations work with your body\'s natural healing processes to provide comfort and support.'
        },
        {
          heading: 'Our Traditional Formulations',
          content: 'Our piles care formulations are prepared using carefully selected herbs known in Ayurvedic tradition for their supportive properties. Each preparation follows recipes passed down through generations of Kerala\'s herbal medicine practitioners, ensuring authenticity and quality.'
        },
        {
          heading: 'How Our Support Works',
          content: 'Our herbal preparations are designed to support digestive comfort and overall well-being. We provide personalized guidance on usage, dietary recommendations, and lifestyle suggestions that complement the herbal support for best results.'
        },
        {
          heading: 'Important Note',
          content: 'Our products are traditional herbal support formulations, not medical cure claims. We recommend consulting with a qualified healthcare professional for diagnosis and treatment. Our herbal preparations serve as supportive complementary care rooted in traditional Ayurvedic wisdom.'
        }
      ],
      faq: [
        { q: 'How long should I use piles care support herbs?', a: 'Duration varies by individual. We recommend visiting our shop for personalized guidance based on your specific situation. Most customers follow a 4-8 week traditional protocol.' },
        { q: 'Are there dietary recommendations alongside?', a: 'Yes. We provide complimentary dietary and lifestyle guidance when you purchase our piles care formulations to maximize the benefits of the herbal support.' }
      ]
    },
    ml: {
      title: 'പൈൽസ് കെയർ സപ്പോർട്ട്',
      subtitle: 'പരമ്പരാഗത ഹെർബൽ പിന്തുണ',
      heroDesc: 'കേരളത്തിന്റെ പരമ്പരാഗത വൈദ്യ സമ്പ്രദായത്തിൽ നിന്നുള്ള പരീക്ഷിച്ച ചേരുവകൾ ഉപയോഗിച്ച് പൈൽസിന് ആശ്വാസവും സ്വാഭാവിക ആശ്വാസവും നൽകുന്ന പ്രത്യേക പരമ്പരാഗത ഹെർബൽ ഫോർമുലേഷനുകൾ.',
      sections: [
        { heading: 'പൈൽസ് കെയറിലെ ആയുർവേദ സമീപനം', content: 'ആയുർവേദത്തിൽ, പൈൽസിനെ (അർശ) ആഹാര മാറ്റങ്ങൾ, ജീവിതശൈലി മാറ്റങ്ങൾ, ശ്രദ്ധാപൂർവ്വം രൂപപ്പെടുത്തിയ ഹെർബൽ തയ്യാറെടുപ്പുകൾ എന്നിവ സംയോജിപ്പിച്ച് സമഗ്രമായ സമീപനത്തിലൂടെ കൈകാര്യം ചെയ്യുന്നു.' },
        { heading: 'ഞങ്ങളുടെ പരമ്പരാഗത ഫോർമുലേഷനുകൾ', content: 'കേരളത്തിന്റെ ഹെർബൽ മരുന്ന് പ്രാക്ടീഷണർമാരുടെ തലമുറകളിലൂടെ കൈമാറിയ പാചകക്കുറിപ്പുകൾ പിന്തുടർന്ന് തയ്യാറാക്കിയ ഫോർമുലേഷനുകൾ.' },
        { heading: 'ഞങ്ങളുടെ പിന്തുണ എങ്ങനെ പ്രവർത്തിക്കുന്നു', content: 'ദഹന സുഖവും മൊത്തത്തിലുള്ള ക്ഷേമവും പിന്തുണയ്ക്കുന്നതിനാണ് ഞങ്ങളുടെ ഹെർബൽ തയ്യാറെടുപ്പുകൾ രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്.' },
        { heading: 'പ്രധാന കുറിപ്പ്', content: 'ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ പരമ്പരാഗത ഹെർബൽ സപ്പോർട്ട് ഫോർമുലേഷനുകളാണ്, രോഗനിർണയത്തിനും ചികിത്സയ്ക്കും യോഗ്യതയുള്ള ഒരു ഹെൽത്ത്കെയർ പ്രൊഫഷണലിനെ സമീപിക്കാൻ ഞങ്ങൾ ശുപാർശ ചെയ്യുന്നു.' }
      ]
    }
  },
  {
    slug: 'postnatal-care',
    image: '/images/speciality-prasava1.webp',
    color: '#E6EDF0',
    en: {
      title: 'Postnatal Care',
      subtitle: 'Post-Delivery Herbal Preparations',
      metaTitle: 'Ayurvedic Postnatal Care Herbs in Mannarkkad | Rahath',
      metaDesc: 'Traditional Kerala postnatal care herbal sets for post-delivery wellness. Curated Ayurvedic preparations at Rahath Ayurvedic, Mannarkkad.',
      heroDesc: 'Rahath Ayurvedic offers carefully curated postnatal herbal sets following traditional Kerala post-delivery wellness practices, supporting the mother\'s recovery with time-honored Ayurvedic herbs.',
      sections: [
        {
          heading: 'Kerala\'s Postnatal Care Tradition',
          content: 'Kerala has a rich tradition of postnatal care known locally as "Prasava Raksha." This holistic approach to post-delivery wellness involves specific herbal preparations, dietary protocols, and care practices designed to support the new mother\'s recovery, strength, and overall well-being during the critical postpartum period.'
        },
        {
          heading: 'Our Postnatal Herbal Kits',
          content: 'Our postnatal care kits include carefully selected herbs traditionally used in Kerala for post-delivery recovery. Each kit contains herbs known for their nourishing, strengthening, and restorative properties — prepared following the same in-house traditional methods we apply to all our herbal medicines.'
        },
        {
          heading: 'What\'s Included',
          content: 'Our kits typically include traditional herbs for digestive support, lactation support, energy restoration, and overall recovery. We customize kits based on individual needs and can provide guidance on traditional preparation methods for maximum benefit.'
        },
        {
          heading: 'Traditional Wisdom, Modern Care',
          content: 'While we honor traditional practices, we also recommend that new mothers work with their healthcare providers alongside using our herbal support. Our preparations complement modern postnatal care with centuries of Ayurvedic wellness wisdom.'
        }
      ],
      faq: [
        { q: 'When should I start using postnatal herbs?', a: 'Traditional practice recommends starting within the first week after delivery. Visit us or call for personalized timing advice based on your situation.' },
        { q: 'Can I use these while breastfeeding?', a: 'Our postnatal herbs are traditionally used during breastfeeding. However, we always recommend consulting your doctor alongside our herbal support for complete peace of mind.' }
      ]
    },
    ml: {
      title: 'പ്രസവരക്ഷ',
      subtitle: 'പ്രസവാനന്തര പച്ചമരുന്ന് കൂട്ടുകൾ',
      heroDesc: 'പ്രസവാനന്തര ആരോഗ്യത്തിനായുള്ള പരമ്പരാഗത കേരള രീതികൾ പിന്തുടർന്ന്, അമ്മയുടെ വീണ്ടെടുക്കലിനെ പിന്തുണയ്ക്കുന്ന ശ്രദ്ധാപൂർവ്വം ക്യൂറേറ്റ് ചെയ്ത പ്രസവാനന്തര ഹെർബൽ സെറ്റുകൾ.',
      sections: [
        { heading: 'കേരളത്തിന്റെ പ്രസവരക്ഷ പാരമ്പര്യം', content: '"പ്രസവ രക്ഷ" എന്നറിയപ്പെടുന്ന പ്രസവാനന്തര പരിചരണത്തിന്റെ സമ്പന്നമായ പാരമ്പര്യം കേരളത്തിനുണ്ട്. പ്രത്യേക ഹെർബൽ തയ്യാറെടുപ്പുകൾ, ഭക്ഷണക്രമ പ്രോട്ടോക്കോളുകൾ, പരിചരണ രീതികൾ എന്നിവ ഉൾപ്പെടുന്ന സമഗ്ര സമീപനം.' },
        { heading: 'ഞങ്ങളുടെ പ്രസവാനന്തര ഹെർബൽ കിറ്റുകൾ', content: 'പ്രസവാനന്തര വീണ്ടെടുക്കലിനായി കേരളത്തിൽ പരമ്പരാഗതമായി ഉപയോഗിക്കുന്ന ശ്രദ്ധാപൂർവ്വം തിരഞ്ഞെടുത്ത ഔഷധച്ചെടികൾ ഞങ്ങളുടെ കിറ്റുകളിൽ ഉൾപ്പെടുന്നു.' },
        { heading: 'എന്തെല്ലാം ഉൾപ്പെടുന്നു', content: 'ദഹന പിന്തുണ, മുലയൂട്ടൽ പിന്തുണ, ഊർജ്ജ പുനഃസ്ഥാപനം, മൊത്തത്തിലുള്ള വീണ്ടെടുക്കൽ എന്നിവയ്ക്കുള്ള പരമ്പരാഗത ഔഷധച്ചെടികൾ ഞങ്ങളുടെ കിറ്റുകളിൽ ഉൾപ്പെടുന്നു.' },
        { heading: 'പരമ്പരാഗത ജ്ഞാനം, ആധുനിക പരിചരണം', content: 'പരമ്പരാഗത രീതികളെ ആദരിക്കുമ്പോൾ തന്നെ, ഞങ്ങളുടെ ഹെർബൽ സപ്പോർട്ട് ഉപയോഗിക്കുന്നതോടൊപ്പം പുതിയ അമ്മമാർ അവരുടെ ഹെൽത്ത്കെയർ പ്രൊവൈഡർമാരുമായി ചേർന്ന് പ്രവർത്തിക്കാൻ ഞങ്ങൾ ശുപാർശ ചെയ്യുന്നു.' }
      ]
    }
  }
];

export function getSpecialityBySlug(slug: string) {
  return specialities.find(s => s.slug === slug);
}
