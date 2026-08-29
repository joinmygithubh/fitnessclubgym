export const BUSINESS_INFO = {
  name: "Fitness Club Gym",
  owner: "Mr. Mohit Chillar",
  headline: "Build Strength. Build Confidence. Build Yourself.",
  subheadline: "Train harder, get stronger and become the best version of yourself.",
  phones: ["7399999949", "7399999969"],
  primaryPhone: "7399999949",
  whatsappNumber: "917399999949",
  instagramHandle: "@fitnessclub.gymm",
  instagramUrl: "https://www.instagram.com/fitnessclub.gymm",
  ownerInstagramHandle: "@mohit_chhillar",
  ownerInstagramUrl: "https://www.instagram.com/mohit_chhillar/",
  timings: {
    morning: "5:00 AM – 10:00 AM",
    evening: "5:00 PM – 10:00 PM",
    full: "Morning: 5:00 AM to 10:00 AM | Evening: 5:00 PM to 10:00 PM"
  },
  address: {
    street: "256, Gali Number 1",
    colony: "Shyam Colony, Part-1",
    area: "Sehatpur",
    city: "Faridabad",
    pincode: "121003",
    state: "Haryana",
    country: "India",
    full: "256, Gali Number 1, Shyam Colony, Part-1, Sehatpur, Faridabad - 121003, Haryana, India"
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.969188730999!2d77.319!3d28.44!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjg8NDQnMDAuMCJOIDc3wrAxOScwMC4wIkU!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=256+Gali+Number+1+Shyam+Colony+Part+1+Sehatpur+Faridabad+Haryana+121003"
};

export const SERVICES_LIST = [
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Focus on build structural power, bone density, and foundational muscle strength using free weights and heavy bars.",
    icon: "Dumbbell"
  },
  {
    id: "weight-training",
    title: "Weight Training",
    description: "Progressive overload regimens utilizing modern machine systems and free-weight resistance for target muscle groups.",
    icon: "Weight"
  },
  {
    id: "cardio",
    title: "Cardio",
    description: "High-energy cardiovascular conditioning to improve endurance, stamina, and heart health.",
    icon: "Activity"
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Structured hypertrophy programming tailored for lean muscle growth and physical development.",
    icon: "Zap"
  },
  {
    id: "fat-loss",
    title: "Fat Loss",
    description: "Dynamic caloric-burn conditioning combined with strength circuits designed for metabolic burn.",
    icon: "Flame"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one professional guidance tailored to your specific fitness goals, posture correction, and progression.",
    icon: "UserCheck"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    description: "Movement-based exercise routines improving agility, mobility, balance, and everyday real-world strength.",
    icon: "Target"
  },
  {
    id: "general-fitness",
    title: "General Fitness",
    description: "Balanced daily workout routines suitable for maintaining overall health, flexibility, and daily vital energy.",
    icon: "HeartPulse"
  }
];

export const GET_WHATSAPP_LINK = (customMessage = "") => {
  const defaultMsg = encodeURIComponent("Hello Fitness Club Gym, I would like to inquire about membership and training!");
  const msg = customMessage ? encodeURIComponent(customMessage) : defaultMsg;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${msg}`;
};
