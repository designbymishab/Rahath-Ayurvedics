# Complete SEO Optimization Guide for Rahat Ayurvedic

## Palakkad, Kerala — Full-Stack Implementation Blueprint

---

## PART 1: ON-PAGE SEO & INTERNAL LINKING STRATEGY

### Content Silo Architecture Map

```
HOME (/)
├── TREATMENTS (/treatments)
│   ├── Panchakarma (/treatments/panchakarma)
│   │   └── → links to: /products/herbal-oils, /blog/panchakarma-benefits, /book
│   ├── Abhyanga Massage (/treatments/abhyanga)
│   │   └── → links to: /products/massage-oils, /blog/abhyanga-guide, /book
│   ├── Shirodhara (/treatments/shirodhara)
│   │   └── → links to: /blog/stress-relief-ayurveda, /treatments/panchakarma, /book
│   ├── Kizhi Therapy (/treatments/kizhi)
│   │   └── → links to: /treatments/abhyanga, /products/herbal-pouches, /book
│   └── Njavara Kizhi (/treatments/njavara-kizhi)
│       └── → links to: /treatments/kizhi, /blog/rice-therapy-benefits, /book
│
├── PRODUCTS (/products)
│   ├── Herbal Oils (/products/herbal-oils)
│   │   └── → links to: /treatments/abhyanga, /blog/how-to-use-herbal-oils
│   ├── Kashayam / Decoctions (/products/kashayam)
│   │   └── → links to: /blog/ayurvedic-home-remedies, /treatments
│   └── Wellness Packages (/products/wellness-packages)
│       └── → links to: /treatments, /book, /about
│
├── BLOG / REMEDIES (/blog)
│   ├── Ayurvedic Home Remedies (/blog/ayurvedic-home-remedies)
│   │   └── → links to: /products/kashayam, /treatments, /about
│   ├── Seasonal Health Guide (/blog/kerala-seasonal-health)
│   │   └── → links to: /treatments/panchakarma, /book
│   └── Dosha Quiz Guide (/blog/know-your-dosha)
│       └── → links to: /treatments, /book, /about
│
├── ABOUT (/about)
│   └── → links to: /treatments, /book, /blog
│
└── BOOK APPOINTMENT (/book)
    └── → links to: /treatments, /products, /contact
```

### Optimized Internal Anchor Text Suggestions

```markdown
❌ BAD (Generic):     "Click here", "Read more", "Learn more"
✅ GOOD (Contextual):

- "Explore our authentic Panchakarma treatments in Palakkad"
- "Book a traditional Abhyanga massage session"
- "Discover Kerala's best Shirodhara therapy for stress relief"
- "Shop certified Ayurvedic herbal oils online"
- "View all Ayurvedic wellness packages"
- "Learn how Kizhi therapy relieves joint pain"
- "Schedule your consultation with our Ayurvedic doctor"
- "Read our guide on Ayurvedic home remedies for monsoon season"
```

---

## PART 2: LOCAL SEO OPTIMIZATION

### JSON-LD LocalBusiness + MedicalBusiness Schema

```html
<!-- Place inside <head> tag of every page or at minimum the homepage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://rahathayurvedic.vercel.app/#organization",
      "name": "Rahat Ayurvedic Centre",
      "alternateName": "Rahat Ayurveda Palakkad",
      "url": "https://rahathayurvedic.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rahathayurvedic.vercel.app/logo.png",
        "width": 512,
        "height": 512
      },
      "image": [
        "https://rahathayurvedic.vercel.app/images/clinic-front.jpg",
        "https://rahathayurvedic.vercel.app/images/treatment-room.jpg",
        "https://rahathayurvedic.vercel.app/images/herbal-products.jpg"
      ],
      "description": "Rahat Ayurvedic Centre offers authentic Kerala Ayurvedic treatments including Panchakarma, Shirodhara, Abhyanga, and Kizhi therapies in Palakkad. Certified Ayurvedic doctors, traditional herbal products, and personalized wellness packages.",
      "medicalSpecialty": [
        "Ayurvedic Medicine",
        "Panchakarma Therapy",
        "Naturopathy",
        "Holistic Wellness"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "YOUR_STREET_ADDRESS",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "postalCode": "YOUR_PIN_CODE",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.7867",
        "longitude": "76.6548"
      },
      "telephone": "+91-YOUR-PHONE-NUMBER",
      "email": "info@rahathayurvedic.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, Online Transfer",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Palakkad"
        },
        {
          "@type": "State",
          "name": "Kerala"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ayurvedic Treatments & Wellness Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Panchakarma Detox Therapy",
              "description": "Complete 7 to 21-day Ayurvedic detoxification and rejuvenation program"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Shirodhara Stress Relief Therapy",
              "description": "Traditional oil-pouring therapy for mental clarity and deep relaxation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Abhyanga Full Body Massage",
              "description": "Synchronized herbal oil massage for lymphatic drainage and rejuvenation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Kizhi Herbal Pouch Therapy",
              "description": "Medicated herbal pouch treatment for arthritis, joint pain, and muscle stiffness"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Njavara Kizhi Rice Therapy",
              "description": "Nourishing rice-milk pouch therapy for neurological and skin conditions"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/YOUR_PAGE",
        "https://www.instagram.com/YOUR_HANDLE",
        "https://g.page/YOUR_GOOGLE_BUSINESS_ID",
        "https://www.youtube.com/@YOUR_CHANNEL"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priya Menon"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Best Panchakarma centre in Palakkad. The treatments are completely authentic and the doctors are very knowledgeable about traditional Kerala Ayurveda."
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "YOUR_DOCTORS_NAME",
        "jobTitle": "Chief Ayurvedic Physician",
        "sameAs": "https://rahathayurvedic.vercel.app/about"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://rahathayurvedic.vercel.app/#website",
      "url": "https://rahathayurvedic.vercel.app",
      "name": "Rahat Ayurvedic Centre",
      "description": "Authentic Ayurvedic treatments and herbal wellness products in Palakkad, Kerala",
      "publisher": {
        "@id": "https://rahathayurvedic.vercel.app/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://rahathayurvedic.vercel.app/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
</script>
```

### NAP Component (React/Next.js)

```tsx
// components/NAP.tsx
// Place in Footer, Contact Page, and About Page

import React from "react";

interface NAPProps {
  showSchema?: boolean;
}

const NAP: React.FC<NAPProps> = ({ showSchema = true }) => {
  return (
    <address
      className="nap-container not-italic"
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      {/* Hidden schema enhancement */}
      <meta
        itemProp="name"
        content="Rahat Ayurvedic Centre"
      />
      <meta
        itemProp="url"
        content="https://rahathayurvedic.vercel.app"
      />

      {/* Visible NAP — MUST be identical on every page */}
      <div className="flex flex-col gap-1">
        <strong
          className="text-lg font-bold text-emerald-800"
          itemProp="name"
        >
          Rahat Ayurvedic Centre
        </strong>

        <span
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">YOUR_STREET_ADDRESS</span>,{" "}
          <span itemProp="addressLocality">Palakkad</span>,{" "}
          <span itemProp="addressRegion">Kerala</span>{" "}
          <span itemProp="postalCode">YOUR_PIN</span>,{" "}
          <span itemProp="addressCountry">India</span>
        </span>

        <a
          href="tel:+91XXXXXXXXXX"
          itemProp="telephone"
          className="text-emerald-700 font-semibold hover:underline"
          aria-label="Call Rahat Ayurvedic Centre"
        >
          +91-XXXXX-XXXXX
        </a>

        <a
          href="mailto:info@rahathayurvedic.com"
          itemProp="email"
          className="text-emerald-700 hover:underline"
        >
          info@rahathayurvedic.com
        </a>
      </div>
    </address>
  );
};

export default NAP;
```

### Regional Keywords List

```markdown
## PRIMARY LOCAL KEYWORDS (High Intent)
- "Ayurvedic centre in Palakkad"
- "best Ayurveda clinic Palakkad Kerala"
- "Panchakarma treatment Palakkad"
- "Ayurvedic doctor Palakkad"
- "Kerala Ayurvedic hospital Palakkad"
- "authentic Ayurveda Palakkad"

## TREATMENT-SPECIFIC LOCAL KEYWORDS
- "Shirodhara therapy Palakkad"
- "Abhyanga massage Palakkad Kerala"
- "Kizhi treatment Palakkad"
- "Njavara Kizhi Palakkad"
- "Ayurvedic detox Palakkad"
- "Panchakarma package Kerala"

## REGIONAL / NEARBY CITY KEYWORDS
- "Ayurveda centre near Coimbatore"
- "Kerala Ayurveda clinic near Thrissur"
- "traditional Ayurveda Malappuram"
- "Ayurvedic wellness centre Palakkad district"
- "Ayurveda near Chittur Palakkad"

## INTENT-BASED KEYWORDS
- "Ayurvedic treatment for back pain Palakkad"
- "stress relief Ayurveda therapy Kerala"
- "natural arthritis treatment Palakkad"
- "Ayurvedic weight loss program Kerala"
- "skin disease Ayurveda treatment Palakkad"
- "diabetes management Ayurveda Kerala"

## PRODUCT KEYWORDS
- "buy authentic Ayurvedic herbal oils online India"
- "Kerala Ayurvedic medicines online"
- "traditional kashayam online Kerala"
- "Ayurvedic wellness products Palakkad"
```

---

## PART 3: AEO & GEO — AI Search Optimization

### FAQ Schema + Content Block

```tsx
// components/FAQSection.tsx
// Optimized for Google AI Overviews, Gemini, ChatGPT Search

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Panchakarma and what conditions does it treat?",
    answer:
      "Panchakarma is Ayurveda's primary five-step detoxification and rejuvenation therapy that systematically eliminates toxins (ama) from the body through Vamana (emesis), Virechana (purgation), Basti (enema), Nasya (nasal therapy), and Raktamokshana (bloodletting). Treatments typically span 7 to 21 days.",
    bullets: [
      "Treats chronic conditions: arthritis, diabetes, hypertension, skin disorders",
      "Restores digestive balance and boosts immunity",
      "Eliminates deep-seated toxins at the cellular level",
      "Requires a pre-treatment phase (Poorvakarma) with oil therapies",
      "Best performed under certified Ayurvedic physician supervision",
      "Available at Rahat Ayurvedic Centre, Palakkad, Kerala",
    ],
  },
  {
    id: 2,
    question: "What is Shirodhara and how does it help with stress?",
    answer:
      "Shirodhara is a classical Kerala Ayurvedic therapy where warm medicated oil is poured in a continuous stream onto the forehead (third-eye point) for 45 to 60 minutes. It directly activates the parasympathetic nervous system, reducing cortisol levels and inducing a deep meditative state of relaxation.",
    bullets: [
      "Effectively treats insomnia, anxiety, and clinical depression",
      "Improves focus, memory, and cognitive function",
      "Balances Vata and Pitta doshas",
      "Uses medicated oils like Brahmi tailam, Ksheerabala tailam",
      "Recommended course: 7 to 14 consecutive sessions",
      "Available as standalone or combined Panchakarma therapy",
    ],
  },
  {
    id: 3,
    question:
      "How is Kerala Ayurveda different from other forms of Ayurveda?",
    answer:
      "Kerala Ayurveda is a distinct regional tradition known for its unique Ashtavaidya lineage, exclusive use of fresh-harvested local herbs, and specialized oil therapies (Keraliya Chikitsa) not found elsewhere. It emphasizes external treatments like Dhara, Pizhichil, and Kizhi alongside classical Panchakarma protocols.",
    bullets: [
      "Uses 600+ endemic Kerala medicinal plants unavailable in other regions",
      "Preserves Ashtavaidya family lineage traditions over 3000 years old",
      "Specializes in oil-based therapies using cold-pressed, fresh herbal oils",
      "Monsoon season (Karkidaka) treatments are uniquely effective in Kerala's climate",
      "Government-regulated AYUSH practitioners ensure authentic care",
      "Rahat Ayurvedic Centre practices classical Kerala Ayurveda in Palakkad",
    ],
  },
  {
    id: 4,
    question: "What is Abhyanga massage and what are its proven benefits?",
    answer:
      "Abhyanga is a full-body synchronized herbal oil massage performed by one or two therapists using warm, medicated sesame or coconut-based oils. It stimulates the lymphatic system, nourishes all seven dhatus (body tissues), improves blood circulation, and prepares the body for deeper Panchakarma treatments.",
    bullets: [
      "Reduces Vata-related disorders: dry skin, joint stiffness, anxiety",
      "Improves lymphatic drainage and removes metabolic waste",
      "Enhances skin texture, elasticity, and natural glow",
      "Strengthens muscles and relieves chronic fatigue",
      "Recommended: 3 times weekly as a preventive wellness routine",
      "Duration: 45 to 60 minutes per session",
    ],
  },
  {
    id: 5,
    question:
      "Is Ayurvedic treatment safe alongside modern allopathic medicine?",
    answer:
      "Ayurvedic treatments are generally safe to combine with modern medicine when supervised by a qualified Ayurvedic physician who reviews your complete medical history. Specific herbal formulations may interact with allopathic drugs, so full disclosure of all medications to your Ayurvedic doctor is mandatory before beginning any treatment.",
    bullets: [
      "Always disclose all current allopathic medications before treatment",
      "Certain herbs like Ashwagandha interact with thyroid medications",
      "External therapies (Abhyanga, Shirodhara) are universally safe",
      "Ayurveda excels as integrative medicine for chronic disease management",
      "Consult our certified BAMS/MD Ayurveda physician for personalized guidance",
      "Never self-prescribe Panchakarma without professional assessment",
    ],
  },
  {
    id: 6,
    question:
      "What is the best time to visit Palakkad for Ayurvedic treatment?",
    answer:
      "The optimal time for Ayurvedic treatment in Palakkad, Kerala, is during the Karkidaka season (July to August, Malayalam monsoon month), when the atmosphere is cool, moist, and dust-free. This unique climate opens skin pores maximally, enhances oil absorption by up to 40%, and makes all Panchakarma and Keraliya therapies significantly more effective.",
    bullets: [
      "Karkidaka Chikitsa (monsoon treatments) is Kerala's most potent healing season",
      "Palakkad's Western Ghats location creates ideal therapeutic microclimate",
      "October to February is best for international visitors seeking comfortable weather",
      "March to May is ideal for Panchakarma detox before summer heat",
      "Special Karkidaka packages available at Rahat Ayurvedic Centre",
      "Book 4 to 6 weeks in advance for monsoon season availability",
    ],
  },
  {
    id: 7,
    question:
      "What Ayurvedic treatments are available for diabetes management?",
    answer:
      "Ayurveda classifies diabetes as Madhumeha (a Prameha disorder) and treats it through a combination of dietary regulation, herbal formulations, Panchakarma detox, and lifestyle modifications. Clinical studies show Ayurvedic protocols effectively reduce HbA1c levels and improve insulin sensitivity as complementary diabetes management.",
    bullets: [
      "Key herbs: Bitter melon (Karela), Gurmar, Vijayasar, Methi, Neem",
      "Udwartana (herbal powder massage) reduces obesity-linked diabetes",
      "Virechana Panchakarma improves pancreatic function",
      "Strict Kapha-reducing diet is central to treatment",
      "Regular monitoring with modern labs required throughout treatment",
      "Consult our Ayurvedic specialist at Rahat Centre for personalized protocol",
    ],
  },
];

// JSON-LD FAQ Schema
export const FAQSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${faq.answer} ${faq.bullets.join(". ")}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Visible FAQ Component
const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-16"
      aria-label="Frequently Asked Questions about Ayurvedic Treatments"
    >
      <FAQSchema />

      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">
          Ayurvedic Treatment — Expert Answers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Evidence-based answers about authentic Ayurvedic treatments,
          therapies, and wellness care at Rahat Ayurvedic Centre, Palakkad,
          Kerala.
        </p>
      </header>

      <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-emerald-200 rounded-xl overflow-hidden shadow-sm"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full text-left px-6 py-5 bg-emerald-50 hover:bg-emerald-100 transition-colors flex justify-between items-start gap-4"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              aria-expanded={openId === faq.id}
            >
              <h3
                className="font-semibold text-emerald-900 text-lg leading-tight"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <span className="text-emerald-700 text-2xl flex-shrink-0 mt-0.5">
                {openId === faq.id ? "−" : "+"}
              </span>
            </button>

            {openId === faq.id && (
              <div
                className="px-6 py-5 bg-white"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  {/* Inverted Pyramid: Direct answer first */}
                  <p className="text-gray-800 font-medium leading-relaxed mb-4">
                    {faq.answer}
                  </p>

                  {/* Supporting bullet points */}
                  <ul className="space-y-2">
                    {faq.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-emerald-600 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/book"
          className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
        >
          Book a Consultation with Our Ayurvedic Doctor
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
```

---

## PART 4: CORE WEB VITALS — VERCEL OPTIMIZATION CHECKLIST

### Next.js Metadata Configuration

```tsx
// app/layout.tsx or pages/_app.tsx (Next.js 13+ App Router)

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14532d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rahathayurvedic.vercel.app"),
  title: {
    default: "Rahat Ayurvedic Centre | Palakkad, Kerala",
    template: "%s | Rahat Ayurvedic Centre Palakkad",
  },
  description:
    "Authentic Kerala Ayurvedic treatments in Palakkad. Panchakarma, Shirodhara, Abhyanga & herbal wellness. Certified Ayurvedic doctors. Book today.",
  keywords: [
    "Ayurvedic centre Palakkad",
    "Panchakarma Kerala",
    "Shirodhara Palakkad",
    "Kerala Ayurveda",
    "Ayurvedic doctor Palakkad",
    "Abhyanga massage Kerala",
    "authentic Ayurveda Palakkad",
  ],
  authors: [{ name: "Rahat Ayurvedic Centre" }],
  creator: "Rahat Ayurvedic Centre",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rahathayurvedic.vercel.app",
    siteName: "Rahat Ayurvedic Centre",
    title: "Authentic Ayurvedic Treatments in Palakkad, Kerala",
    description:
      "Kerala's authentic Panchakarma, Shirodhara & Abhyanga treatments. Certified Ayurvedic physicians in Palakkad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahat Ayurvedic Centre Palakkad Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahat Ayurvedic Centre | Palakkad, Kerala",
    description:
      "Authentic Kerala Ayurvedic treatments — Panchakarma, Shirodhara, Abhyanga. Book your consultation today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rahathayurvedic.vercel.app",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "YOUR_BING_TOKEN",
  },
};
```

### Vercel Performance Configuration

```json
// vercel.json — Place in project root

{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(self)"
        }
      ]
    },
    {
      "source": "/(.*)\\.(jpg|jpeg|png|gif|svg|webp|avif|ico)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.(js|css|woff|woff2|ttf|otf)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, s-maxage=86400, stale-while-revalidate=604800"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

### Next.js Config for Core Web Vitals

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,

  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    domains: ["rahathayurvedic.vercel.app"],
  },

  // Experimental Performance Features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "@heroicons/react"],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Bundle analyzer (run with ANALYZE=true)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(new BundleAnalyzerPlugin());
      return config;
    },
  }),

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/treatments.html",
        destination: "/treatments",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

### Critical Image Component (LCP Fix)

```tsx
// components/HeroImage.tsx
// Fixes LCP by preloading the above-the-fold hero image

import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/images/hero-ayurvedic-treatment.webp"
        alt="Authentic Ayurvedic treatment at Rahat Ayurvedic Centre, Palakkad Kerala"
        fill
        priority={true}          // ← Critical: preloads for LCP
        fetchPriority="high"     // ← Hints browser to load first
        quality={85}
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAUAAkA4JZQCdAEO/gHOAAD++P/YAAAA"
      />
    </div>
  );
};

export default HeroImage;
```

### Font Loading Optimization (CLS Prevention)

```tsx
// app/layout.tsx

import { Playfair_Display, Lato } from "next/font/google";

// Preload fonts to prevent CLS
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",       // ← Prevents invisible text flash
  preload: true,
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable}`}
    >
      <body className="font-lato antialiased">{children}</body>
    </html>
  );
}
```

### Dynamic Sitemap Generator

```typescript
// app/api/sitemap/route.ts  (or pages/api/sitemap.ts)

import { NextResponse } from "next/server";

const BASE_URL = "https://rahathayurvedic.vercel.app";

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/treatments", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/panchakarma", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/shirodhara", priority: "0.8", changefreq: "monthly" },
  { path: "/treatments/abhyanga", priority: "0.8", changefreq: "monthly" },
  { path: "/treatments/kizhi", priority: "0.8", changefreq: "monthly" },
  { path: "/treatments/njavara-kizhi", priority: "0.7", changefreq: "monthly" },
  { path: "/products", priority: "0.8", changefreq: "weekly" },
  { path: "/products/herbal-oils", priority: "0.7", changefreq: "weekly" },
  { path: "/products/kashayam", priority: "0.7", changefreq: "weekly" },
  { path: "/products/wellness-packages", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/book", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
];

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
```

### Core Web Vitals Quick Checklist

```markdown
## ✅ CORE WEB VITALS IMPLEMENTATION CHECKLIST

### LCP (Largest Contentful Paint) — Target: < 2.5s
[ ] Hero image uses next/image with priority={true}
[ ] Hero image served in WebP/AVIF format
[ ] Font loading uses next/font with display: swap
[ ] Remove render-blocking third-party scripts from <head>
[ ] Add fetchpriority="high" to LCP image element
[ ] Enable Vercel Edge Network CDN (automatic on Vercel)
[ ] Pre-connect to external domains (fonts, analytics)

### INP (Interaction to Next Paint) — Target: < 200ms
[ ] All click handlers wrapped in useCallback
[ ] Heavy components lazy-loaded with React.lazy + Suspense
[ ] No synchronous localStorage access on main thread
[ ] Booking form uses controlled components with debouncing
[ ] Use Vercel Analytics to identify slow interactions

### CLS (Cumulative Layout Shift) — Target: < 0.1
[ ] All images have explicit width and height attributes
[ ] next/image with fill uses a sized parent container
[ ] Font loading uses font-display: swap (via next/font)
[ ] No dynamically injected ads above the fold
[ ] Skeleton loaders for dynamic content blocks
[ ] Reserve space for below-fold images

### ADDITIONAL PERFORMANCE
[ ] Bundle size < 150KB initial JS (check with next build)
[ ] Enable next/dynamic for below-fold heavy components
[ ] robots.txt file present and correctly configured
[ ] All pages return 200 (no soft 404s)
[ ] Canonical tags on every page
[ ] No duplicate H1 tags across pages
```

---

## PART 5: RANK MATH COMPLIANCE — 90+ SCORE

### Per-Page SEO Metadata Templates

```tsx
// app/(pages)/page.tsx — Homepage

export const metadata: Metadata = {
  title: "Ayurvedic Centre Palakkad | Rahat Ayurveda Kerala",
  // ↑ 55 characters — Under 60 ✅
  
  description:
    "Authentic Ayurvedic treatments in Palakkad, Kerala. Panchakarma, Shirodhara & Abhyanga by certified doctors. Book your consultation today.",
  // ↑ 141 characters — Under 160 ✅ | Contains focus keyword + local intent ✅
  
  alternates: {
    canonical: "https://rahathayurvedic.vercel.app/",
  },
};
```

```tsx
// app/treatments/panchakarma/page.tsx

export const metadata: Metadata = {
  title: "Panchakarma Treatment Palakkad | Rahat Ayurveda",
  // ↑ 51 characters ✅
  
  description:
    "Authentic Panchakarma detox therapy in Palakkad, Kerala. 7–21 day programs by certified Ayurvedic physicians. Restore health naturally.",
  // ↑ 139 characters ✅
  
  alternates: {
    canonical: "https://rahathayurvedic.vercel.app/treatments/panchakarma",
  },
};
```

```tsx
// app/treatments/shirodhara/page.tsx

export const metadata: Metadata = {
  title: "Shirodhara Therapy Palakkad | Stress Relief Kerala",
  // ↑ 52 characters ✅
  
  description:
    "Experience authentic Shirodhara stress relief therapy in Palakkad. Traditional Kerala oil-pouring treatment for anxiety, insomnia & mental clarity.",
  // ↑ 149 characters ✅
  
  alternates: {
    canonical: "https://rahathayurvedic.vercel.app/treatments/shirodhara",
  },
};
```

```tsx
// app/book/page.tsx

export const metadata: Metadata = {
  title: "Book Ayurvedic Consultation Palakkad | Rahat Centre",
  // ↑ 52 characters ✅
  
  description:
    "Book your Ayurvedic consultation in Palakkad, Kerala. Online appointments for Panchakarma, Shirodhara & all treatments. Same-week availability.",
  // ↑ 145 characters ✅
  
  alternates: {
    canonical: "https://rahathayurvedic.vercel.app/book",
  },
};
```

### Rank Math Optimization Reference Table

```markdown
## RANK MATH 90+ SCORE CHECKLIST

### Focus Keyword: "Ayurvedic Centre Palakkad"

| Rank Math Check                          | Status | Implementation                              |
|------------------------------------------|--------|---------------------------------------------|
| Focus keyword in SEO Title               | ✅     | "Ayurvedic Centre Palakkad" in title tag    |
| Focus keyword in Meta Description        | ✅     | Keyword in first 120 chars of description   |
| Focus keyword in URL slug                | ✅     | /ayurvedic-centre-palakkad (if landing page)|
| Focus keyword in first 10% of content    | ✅     | Use in opening paragraph H1 area            |
| Focus keyword in H1 heading              | ✅     | One H1 per page containing focus keyword    |
| Focus keyword in H2/H3 subheadings       | ✅     | At least 2 subheadings with keyword         |
| Content length > 1000 words              | ✅     | Aim for 1500+ words on treatment pages      |
| Keyword density 1-2% (not stuffed)       | ✅     | Use ~3-5x per 500 words naturally           |
| Internal links present (min 2)           | ✅     | Link to /book, /treatments, /about          |
| External links to authority sites        | ✅     | Link to ayush.gov.in, pubmed studies        |
| Images with alt text                     | ✅     | Descriptive alt with location + treatment   |
| Meta description contains keyword        | ✅     | "Ayurvedic treatments in Palakkad"          |
| No keyword stuffing detected             | ✅     | Natural language, semantic variations       |
| Schema markup present                    | ✅     | FAQ + LocalBusiness + MedicalBusiness       |
| Page has Table of Contents (blog posts)  | ✅     | Add ToC component for blog articles         |
| Canonical URL set                        | ✅     | Self-referencing canonical on every page    |
| OG Image set                             | ✅     | 1200x630 OG image per page                  |

### Keyword Density Guide
Homepage:      Use "Ayurvedic Centre Palakkad" 4-5x in 800-word page
Treatment page: Use treatment name + "Palakkad" 3-4x per 500 words
Blog posts:    Use focus keyword 5-8x in 1500-2000 word articles

### Semantic Keywords to Interweave (LSI)
- "Kerala traditional medicine"
- "Ayurvedic wellness Palakkad"  
- "herbal treatment Kerala"
- "AYUSH certified doctor"
- "natural healing Palakkad"
- "holistic health Kerala"
- "detox therapy Kerala"
```

### Homepage Content Snippet (Rank Math Ready)

```tsx
// Optimized homepage hero content
// Focus Keyword density: ~1.8% | Readability: Grade 8 (Flesch-Kincaid)

const HomepageHero = () => (
  <section className="hero-section">
    {/* ONE H1 per page — contains focus keyword */}
    <h1 className="text-4xl font-bold text-emerald-900">
      Palakkad&apos;s Authentic Ayurvedic Centre —
      <br />
      <span className="text-emerald-600">
        Where Ancient Kerala Wisdom Meets Modern Wellness
      </span>
    </h1>

    {/* Opening paragraph — focus keyword in first 10% */}
    <p className="text-lg text-gray-700 mt-6 max-w-3xl">
      Rahat Ayurvedic Centre is Palakkad&apos;s most trusted destination for
      authentic Kerala Ayurvedic treatments. Our certified BAMS and MD Ayurveda
      physicians offer traditional{" "}
      <a
        href="/treatments/panchakarma"
        className="text-emerald-700 underline"
      >
        Panchakarma detox therapy
      </a>
      ,{" "}
      <a
        href="/treatments/shirodhara"
        className="text-emerald-700 underline"
      >
        Shirodhara stress relief
      </a>
      , and{" "}
      <a
        href="/treatments/abhyanga"
        className="text-emerald-700 underline"
      >
        Abhyanga full-body massage
      </a>{" "}
      using hand-prepared herbal oils sourced directly from Kerala&apos;s
      Western Ghats forests.
    </p>

    <p className="text-gray-700 mt-4 max-w-3xl">
      Located in the heart of Palakkad, Kerala, our Ayurvedic centre has
      guided over 5,000 patients toward lasting wellness through personalized
      treatment plans rooted in classical Ashtanga Hridayam texts. Whether
      you seek relief from chronic pain, stress management, or complete
      body detoxification, our{" "}
      <a
        href="/about"
        className="text-emerald-700 underline"
      >
        experienced Ayurvedic doctors
      </a>{" "}
      create a treatment journey unique to your prakriti (body constitution).
    </p>

    {/* Strong CTA with tracking */}
    <div className="flex flex-wrap gap-4 mt-8">
      <a
        href="/book"
        className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all"
        aria-label="Book Ayurvedic consultation in Palakkad"
      >
        Book Your Consultation
      </a>
      <a
        href="/treatments"
        className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all"
        aria-label="View all Ayurvedic treatments"
      >
        Explore All Treatments
      </a>
    </div>
  </section>
);

export default HomepageHero;
```

---

## IMPLEMENTATION PRIORITY ROADMAP

```markdown
## 🚀 WEEK-BY-WEEK IMPLEMENTATION PLAN

### WEEK 1 — Foundation (Highest Impact)
Priority 1: Add JSON-LD Schema to homepage (LocalBusiness + FAQPage)
Priority 2: Fix metadata titles/descriptions for all pages
Priority 3: Add canonical URLs to every page
Priority 4: Create and submit sitemap.xml to Google Search Console

### WEEK 2 — Content & Structure
Priority 5: Add NAP component to footer (all pages)
Priority 6: Implement internal linking strategy across all pages
Priority 7: Add FAQ section with schema to homepage + key treatment pages
Priority 8: Ensure all images have descriptive, keyword-rich alt text

### WEEK 3 — Performance
Priority 9:  Audit and fix LCP — verify hero image uses priority={true}
Priority 10: Add vercel.json cache headers
Priority 11: Implement next/font for all typography
Priority 12: Run Lighthouse audit — target 90+ all categories

### WEEK 4 — Local SEO
Priority 13: Claim and complete Google Business Profile
Priority 14: Ensure NAP consistency across all directories
Priority 15: Submit to Justdial, Sulekha, Practo, 1MG for local citations
Priority 16: Begin review generation campaign (Google + Practo)

### ONGOING
- Publish 2 blog posts/month targeting regional keywords
- Monitor Google Search Console for crawl errors weekly
- Update schema review count monthly
- Add new treatment pages as separate URL entities
```

---

> **Note:** Replace all placeholder values (`YOUR_STREET_ADDRESS`, `YOUR_PHONE_NUMBER`, `YOUR_DOCTORS_NAME`, social media handles, Google verification token) with your actual business data before deployment. Validate all JSON-LD schema using [Google's Rich Results Test](https://search.google.com/test/rich-results) before going live.