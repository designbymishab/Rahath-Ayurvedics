export default function SchemaMarkup() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "https://rahathayurvedic.vercel.app/#business",
        "name": "Rahath Ayurvedic",
        "alternateName": "റാഹത്ത് ആയുർവേദിക്",
        "description": "Authentic Ayurvedic herbal medicines and traditional raw herb formulations in Mannarkkad, Palakkad. Specializing in piles care support, postnatal herbal care, and custom herbal preparations with 5+ years of trusted local service.",
        "url": "https://rahathayurvedic.vercel.app",
        "telephone": "+919605424292",
        "email": "rahathayurvedic@gmail.com",
        "image": "https://rahathayurvedic.vercel.app/Logo/android-chrome-512x512.png",
        "logo": "https://rahathayurvedic.vercel.app/Logo/android-chrome-512x512.png",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Bank Transfer",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hospital Junction, Near Old Bus Stand",
            "addressLocality": "Mannarkkad",
            "addressRegion": "Kerala",
            "postalCode": "678582",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.9947286,
            "longitude": 76.4651452
        },
        "hasMap": "https://www.google.com/maps/place/Rahath+Ayurvedic/@10.9947286,76.4651452,17z",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:30"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Mannarkkad"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Palakkad District"
            },
            {
                "@type": "State",
                "name": "Kerala"
            }
        ],
        "knowsAbout": [
            "Ayurvedic Medicine",
            "Raw Herbal Medicines",
            "Traditional Herbal Formulations",
            "Piles Care Ayurvedic Support",
            "Postnatal Care Herbs",
            "Kerala Traditional Medicine"
        ],
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61587190377965",
            "https://www.instagram.com/rahathayurvedic/"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Rahath Ayurvedic in Mannarkkad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rahath Ayurvedic is an authentic Ayurvedic herbal medicine shop located at Hospital Junction, Mannarkkad, Palakkad, Kerala. Established over 5 years ago, it specializes in raw herbal medicines, traditional formulations, piles care support, and postnatal herbal care — all prepared in-house using traditional Kerala methods."
                }
            },
            {
                "@type": "Question",
                "name": "What Ayurvedic treatments are available at Rahath Ayurvedic?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rahath Ayurvedic offers three core specialities: Raw Herbal Medicines (dried, cut, and powdered single herbs and combinations), Piles Care Support (traditional Ayurvedic formulations for natural relief), and Postnatal Care (curated herbal sets following Kerala's traditional post-delivery wellness practices). All preparations are made without artificial additives."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Rahath Ayurvedic located in Mannarkkad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rahath Ayurvedic is located at Hospital Junction, Near Old Bus Stand, Mannarkkad, Palakkad, Kerala 678582, India. The shop is open daily from 9:00 AM to 8:30 PM. You can reach them at +91 9605 424 292 or via WhatsApp for enquiries."
                }
            },
            {
                "@type": "Question",
                "name": "Does Rahath Ayurvedic offer Ayurvedic support for piles?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Rahath Ayurvedic provides specialized traditional herbal formulations designed to support comfort and natural relief for piles. These Ayurvedic preparations use time-tested ingredients from Kerala's traditional medicine system. Note: These are supportive herbal formulations, not medical cure claims."
                }
            },
            {
                "@type": "Question",
                "name": "What is postnatal care in Ayurveda at Rahath?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Postnatal care at Rahath Ayurvedic includes carefully curated herbal sets prepared for post-delivery wellness following traditional Kerala practices. These preparations support the mother's recovery using time-honored Ayurvedic herbs selected for their nourishing and restorative properties."
                }
            },
            {
                "@type": "Question",
                "name": "How are herbal medicines prepared at Rahath Ayurvedic?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rahath Ayurvedic follows a meticulous 4-step traditional process: Natural Drying in clean, ventilated spaces; Careful Cutting to retain herb potency; Fine Grinding using traditional methods to maintain herbal integrity; and Clean Storage in hygienic glass containers. Every step is handled in-house to ensure quality and authenticity."
                }
            }
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Rahath Ayurvedic",
        "url": "https://rahathayurvedic.vercel.app",
        "description": "Authentic Ayurvedic herbal medicines in Mannarkkad, Palakkad, Kerala.",
        "inLanguage": ["en", "ml"],
        "publisher": {
            "@type": "Organization",
            "name": "Rahath Ayurvedic",
            "logo": {
                "@type": "ImageObject",
                "url": "https://rahathayurvedic.vercel.app/Logo/android-chrome-512x512.png"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
        </>
    );
}
