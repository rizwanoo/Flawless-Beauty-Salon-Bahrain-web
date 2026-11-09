export interface Branch {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  phone: string;
  displayPhone: string;
  landline?: string;
  whatsapp: string;
  hoursWeekday: string;
  hoursWeekend: string;
  googleMapsUrl: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'hair' | 'nails' | 'beauty' | 'spa';
  categoryLabel: string;
  duration: string;
  startingPrice: string;
  description: string;
  highlights: string[];
  image: string;
  popular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  branch: string;
  service: string;
  rating: number;
  quote: string;
  date: string;
}

export const SALON_INFO = {
  name: "Flawless Beauty Salon",
  tagline: "Beauty Without Limits. Perfection Without Compromise.",
  country: "Kingdom of Bahrain",
  city: "Manama",
  email: "flawlessbeautysalonallbranches@gmail.com",
  instagram: "https://www.instagram.com/flawlessbeautysalon.bh",
  instagramHandle: "@flawlessbeautysalon.bh",
  facebook: "https://www.facebook.com/flawless.bh20/",
  facebookPageId: "220281311828409",
  freshaUrl: "https://www.fresha.com/a/flawless-beauty-salon-manama-317-qudaibiya-ave",
  establishedNote: "Manama's preferred destination for specialized hair transformations and luxury beauty care."
};

export const BRANCHES: Branch[] = [
  {
    id: "hoora",
    name: "Hoora Branch",
    neighborhood: "Hoora District",
    address: "Road 1805, Block 318, Building 418, Hoora, Manama, Bahrain",
    phone: "+97338965330",
    displayPhone: "+973 3896 5330",
    whatsapp: "97338965330",
    hoursWeekday: "Sat – Wed: 10:00 AM – 10:00 PM",
    hoursWeekend: "Thu – Fri: 9:00 AM – 10:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Flawless+Beauty+Salon+Hoora+Road+1805+Manama+Bahrain",
    featured: true
  },
  {
    id: "gudaibiya",
    name: "Gudaibiya Branch",
    neighborhood: "Qudaibiya Avenue",
    address: "317 Qudaibiya Ave, Block 317, Manama, Bahrain",
    phone: "+97332019847",
    displayPhone: "+973 3201 9847",
    landline: "+973 1786 7077",
    whatsapp: "97332019847",
    hoursWeekday: "Sat – Wed: 10:00 AM – 10:00 PM",
    hoursWeekend: "Thu – Fri: 9:00 AM – 10:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Flawless+Beauty+Salon+317+Qudaibiya+Ave+Manama+Bahrain",
    featured: true
  },
  {
    id: "manama-center",
    name: "Manama Center Branch",
    neighborhood: "Downtown Manama",
    address: "Manama Center, Manama 973, Capital Governorate, Bahrain",
    phone: "+97339297712",
    displayPhone: "+973 3929 7712",
    landline: "+973 1764 0093",
    whatsapp: "97339297712",
    hoursWeekday: "Sat – Wed: 10:00 AM – 10:00 PM",
    hoursWeekend: "Thu – Fri: 9:00 AM – 10:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Flawless+Beauty+Salon+Manama+Center+Bahrain",
    featured: false
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "balayage-ombre",
    title: "Signature Balayage & French Gloss",
    category: "hair",
    categoryLabel: "Hair Transformation",
    duration: "180 - 240 mins",
    startingPrice: "BHD 45",
    description: "Hand-painted bespoke multidimensional hair painting tailored to your skin tone and natural texture, followed by an ultra-gloss shine glaze.",
    highlights: ["Custom freehand painting", "Ammonia-safe bonding protector", "Custom gloss toner & blowout"],
    image: "/images/balayage.jpg",
    popular: true
  },
  {
    id: "keratin-smoothing",
    title: "Nanoplastia & Royal Keratin Treatment",
    category: "hair",
    categoryLabel: "Hair Transformation",
    duration: "150 - 210 mins",
    startingPrice: "BHD 50",
    description: "Deep restorative smoothing therapy that eliminates frizz, restores elasticity, and seals hair with glass-like mirror shine for up to 5 months.",
    highlights: ["Formaldehyde-free organic formula", "Intense humidity defense", "Silky mirror finish"],
    image: "/images/keratin.jpg",
    popular: true
  },
  {
    id: "couture-haircut",
    title: "Editorial Cut, Re-Style & Signature Blowdry",
    category: "hair",
    categoryLabel: "Hair Styling",
    duration: "60 - 75 mins",
    startingPrice: "BHD 15",
    description: "Precision dry and wet cutting sculptured to complement your facial bone structure, finished with a voluminous luxury Hollywood blowout.",
    highlights: ["In-depth texture diagnosis", "Scalp cleansing & botanical wash", "Thermal style holding finish"],
    image: "/images/hero.jpg",
    popular: false
  },
  {
    id: "full-head-colour",
    title: "Haute Couture Full Color & Root Melt",
    category: "hair",
    categoryLabel: "Hair Colouring",
    duration: "120 - 150 mins",
    startingPrice: "BHD 30",
    description: "Rich chromatic depth using premier European color pigments with intense reflect, complete gray coverage, and luminous multi-tonal shine.",
    highlights: ["Micro-pigment color technology", "Scalp protection barrier", "Color-locking post-infusion"],
    image: "/images/balayage.jpg",
    popular: false
  },
  {
    id: "russian-gel-nails",
    title: "Russian Gel Manicure & Bespoke Nail Art",
    category: "nails",
    categoryLabel: "Nail Artistry",
    duration: "75 - 90 mins",
    startingPrice: "BHD 18",
    description: "Meticulous e-file precision cuticle therapy, structured rubber base alignment, and custom minimalist nail design with 4+ weeks retention.",
    highlights: ["Hardware precision cuticle alignment", "Reinforced apex architecture", "Non-chip high shine topcoat"],
    image: "/images/nails.jpg",
    popular: true
  },
  {
    id: "acrylic-sculpting",
    title: "Sculptured Acrylic Extensions & French Fade",
    category: "nails",
    categoryLabel: "Nail Extensions",
    duration: "90 - 120 mins",
    startingPrice: "BHD 25",
    description: "Custom sculpted extensions tailored to your natural nail bed, finished with crystal ombré, timeless baby boomer, or editorial designs.",
    highlights: ["Zero-lift adhesion prep", "Natural tapered nail curve", "Swarovski & gold leaf accents"],
    image: "/images/nails.jpg",
    popular: false
  },
  {
    id: "luxury-pedicure",
    title: "Botanical Velvet Spa Pedicure",
    category: "nails",
    categoryLabel: "Nail Care & Spa",
    duration: "60 mins",
    startingPrice: "BHD 14",
    description: "Warm mineral foot soak, Himalayan pink salt exfoliation, deep callus therapy, hydrating paraffin bootie mask, and soothing calf massage.",
    highlights: ["Sterilized surgical steel tools", "Dead skin enzyme peeling", "Extended pressure point massage"],
    image: "/images/nails.jpg",
    popular: false
  },
  {
    id: "eyebrow-sculpt",
    title: "Silk Threading & HD Brow Sculpting",
    category: "beauty",
    categoryLabel: "Face & Brow Care",
    duration: "30 - 45 mins",
    startingPrice: "BHD 6",
    description: "Traditional organic antibacterial thread hair removal combined with custom hybrid tinting for sharp, symmetrical, natural brow definition.",
    highlights: ["Facial mapping measurement", "Gentle aloe soothing compress", "Lasting hybrid brow stain"],
    image: "/images/salon_lounge.jpg",
    popular: true
  },
  {
    id: "botanical-facial",
    title: "Hydro-Infusion & Glow Brightening Facial",
    category: "beauty",
    categoryLabel: "Skincare",
    duration: "75 mins",
    startingPrice: "BHD 28",
    description: "Non-invasive suction extraction, vortex hydration, vitamin C antioxidant serum infusion, and lymphatic cooling jade globe massage.",
    highlights: ["Deep ultrasonic pore cleansing", "Custom active peptide serum", "Cryo-globe lifting massage"],
    image: "/images/salon_lounge.jpg",
    popular: false
  },
  {
    id: "bridal-glam",
    title: "Signature Glamour Makeup & Bridal Styling",
    category: "beauty",
    categoryLabel: "Makeup",
    duration: "90 mins",
    startingPrice: "BHD 35",
    description: "Flawless red carpet waterproof base, sultry eye definition, individual lash application, and long-wear setting mist for special occasions.",
    highlights: ["Skin prep hydrating elixir", "Individual featherweight lashes", "16-hour sweat & tear proofing"],
    image: "/images/balayage.jpg",
    popular: false
  },
  {
    id: "moroccan-bath",
    title: "Royal Moroccan Bath & Eucalyptus Scrub",
    category: "spa",
    categoryLabel: "Spa & Hammam",
    duration: "60 - 90 mins",
    startingPrice: "BHD 25",
    description: "Authentic steam hammam ritual with traditional black Beldi soap, intensive Kessa glove exfoliation, and Ghassoul clay nourishing wrap.",
    highlights: ["Pure organic eucalyptus soap", "Full body invigorating exfoliation", "Rosewater hydrating mist"],
    image: "/images/salon_lounge.jpg",
    popular: true
  },
  {
    id: "deep-tissue-massage",
    title: "Holistic Aroma & Deep Tissue Massage",
    category: "spa",
    categoryLabel: "Body Therapy",
    duration: "60 mins",
    startingPrice: "BHD 22",
    description: "Targeted myofascial release using warm essential botanicals to melt muscular tension, improve circulation, and soothe stress.",
    highlights: ["Tailored pressure intensity", "Organic warm botanical oils", "Private peaceful sanctuary"],
    image: "/images/salon_lounge.jpg",
    popular: false
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Master Stylist Leila",
    role: "Senior Creative Director & Color Specialist",
    specialty: "Balayage, Color Correction & Bleach Blonde Toning",
    experience: "12+ Years Experience",
    bio: "Internationally trained in Paris and Dubai, Leila crafts natural lived-in dimensional color and seamless transitions that maintain healthy hair integrity.",
    badge: "Master Colorist"
  },
  {
    name: "Amina Al-Haddad",
    role: "Head of Texture & Keratin Restoration",
    specialty: "Nanoplastia, Keratin Straightening & Hair Botox",
    experience: "9+ Years Experience",
    bio: "A specialist in treating humidity-damaged and heat-stressed hair, Amina is renowned across Manama for her glass-shine straightening rituals.",
    badge: "Texture Expert"
  },
  {
    name: "Elena Rostova",
    role: "Lead Nail Artist & Russian Technique Specialist",
    specialty: "Russian E-File Manicure, Sculptured Acrylic & Minimalist Art",
    experience: "7+ Years Experience",
    bio: "Elena's precision cuticle work and architectural nail apex sculpting have established Flawless as a benchmark for long-lasting luxury nail design.",
    badge: "Nail Art Director"
  },
  {
    name: "Mariam Noor",
    role: "Senior Aesthetician & Hammam Therapist",
    specialty: "Traditional Moroccan Bath Rituals & Facial Drainage",
    experience: "10+ Years Experience",
    bio: "Mariam brings genuine ancestral expertise to our Moroccan hammam experiences, providing restorative holistic wellness and skin retexturing.",
    badge: "Spa & Hammam Specialist"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Reem Al-Khalifa",
    branch: "Hoora Branch",
    service: "Balayage & Hair Gloss",
    rating: 5,
    quote: "The best balayage in Bahrain without question. The color blend is smooth, my hair remained completely soft and shiny, and the stylists in Hoora truly listen to what you want.",
    date: "Verified Fresha Review"
  },
  {
    id: "test-2",
    clientName: "Noor Bukamal",
    branch: "Gudaibiya Branch",
    service: "Nanoplastia Keratin Treatment",
    rating: 5,
    quote: "Living in Bahrain's humidity made my hair uncontrollable. After the Flawless keratin treatment, I can just air dry and it looks like a salon blowout every single morning.",
    date: "Verified Google Review"
  },
  {
    id: "test-3",
    clientName: "Fatima Mansoor",
    branch: "Hoora Branch",
    service: "Russian Gel Manicure",
    rating: 5,
    quote: "The cuticle cleanliness and nail shaping here are unmatched. My Russian manicure lasted over four weeks with zero chipping. The salon atmosphere is bright and spotless.",
    date: "Verified Client"
  },
  {
    id: "test-4",
    clientName: "Layla Ebrahim",
    branch: "Gudaibiya Branch",
    service: "Royal Moroccan Bath",
    rating: 5,
    quote: "A genuinely authentic Moroccan bath experience right in Manama. Clean, relaxing, and my skin felt reborn. Extremely professional ladies-only sanctuary.",
    date: "Verified Fresha Review"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Dimensional Caramel Balayage",
    category: "hair-color",
    categoryLabel: "Hair Colour",
    image: "/images/balayage.jpg",
    aspect: "tall"
  },
  {
    id: "g2",
    title: "Glass-Shine Keratin Transformation",
    category: "hair-treatments",
    categoryLabel: "Hair Treatments",
    image: "/images/keratin.jpg",
    aspect: "wide"
  },
  {
    id: "g3",
    title: "Manama Luxury Styling Floor",
    category: "interior",
    categoryLabel: "Salon Interior",
    image: "/images/hero.jpg",
    aspect: "wide"
  },
  {
    id: "g4",
    title: "Rose Gold Accent Russian Manicure",
    category: "nails",
    categoryLabel: "Nails & Artistry",
    image: "/images/nails.jpg",
    aspect: "square"
  },
  {
    id: "g5",
    title: "Reception & Private Consultation Lounge",
    category: "interior",
    categoryLabel: "Salon Interior",
    image: "/images/salon_lounge.jpg",
    aspect: "wide"
  }
];
