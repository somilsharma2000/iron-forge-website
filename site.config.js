/* ============================================================
   IRON FORGE — SITE CONFIG (owner-editable)
   Every value the owner can change without code lives here.
   All data below is the club's real, published information.
   Full slot list: OWNER_CONTENT_CHECKLIST.md
   ============================================================ */
window.IRONFORGE_HYD_SITE_CONFIG = {
  brandName: "IRON FORGE",
  publicSlug: "iron-forge-hyd",
  locationLabel: "JUBILEE HILLS · HYDERABAD",
  tagline: "Built Different",
  description: "Premium fitness in Jubilee Hills, Hyderabad. 50+ group classes, smart QR check-in, personal diet plans. Open 5AM-11PM.",

  /* --- Contact (real values from the club) --- */
  whatsapp: "917737077479",
  whatsappName: "IRON FORGE",
  whatsappPreFill: "Hi IRON FORGE! I'd like to book a free trial.",
  instagram: "",
  email: "",
  address: "Jubilee Hills, Hyderabad",
  phone: "+91 77370 77479",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=IRON+FORGE+Jubilee+Hills+Hyderabad",

  /* --- Google reviews (real: from the club's published profile) --- */
  googleRating: 0,
  googleReviewCount: 0,

  /* --- Trial pass --- */
  upiId: "",
  trialPass: {"label": "Free Trial", "price": 0, "note": "Book via WhatsApp"},

  /* --- Membership plans (real, from the club's published pricing) --- */
  plans: [
    { kicker: "STARTER", name: "Starter", price: "₹2,999", period: "/month", popular: false,
      desc: "Perfect for beginners.",
      features: ["Full gym access (5AM–11PM)", "QR check-in & member portal", "Group classes", "Locker facility"] },
    { kicker: "POPULAR", name: "Standard", price: "₹4,999", period: "/month", popular: true,
      desc: "For regular gym-goers.",
      features: ["Everything in Starter", "Personal diet plan", "Monthly PT check-ins", "Quarterly health checkup"] },
    { kicker: "PREMIUM", name: "Premium", price: "₹7,999", period: "/month", popular: false,
      desc: "The ultimate experience.",
      features: ["Everything in Standard", "Unlimited PT sessions", "Recovery & spa access", "Guest passes (2/month)", "EMI options available"] }
  ],

  /* --- Coaches (real people from the club's published site — never invented) --- */
  trainers: [

  ],

  /* --- Training & services (real offerings — times via WhatsApp, none invented) --- */
  classes: [
    { category: "HIIT", name: "Morning HIIT", time: "Mon, Wed, Fri · 7:00 AM", desc: "High-intensity interval training to open the day." },
    { category: "Yoga", name: "Power Yoga", time: "Weekly · book via WhatsApp", desc: "Power Yoga for strength and mobility." },
    { category: "Strength", name: "Strength and Conditioning", time: "Weekly · book via WhatsApp", desc: "Structured S&C for every level." },
    { category: "Spin", name: "Evening Spin", time: "Sat · 5:00 PM", desc: "Cardio on the bikes to close the week." },
    { category: "Variety", name: "CrossFit, Zumba & Boxing", time: "Weekly · book via WhatsApp", desc: "50+ weekly classes across every discipline." }
  ]
};
