
export const CLINIC = {
  name: 'AdGro Hair and GloSkin Kovilpatti',
  shortName: 'AdGro',
  phoneDisplay: '080980 56789',
  phoneHref: 'tel:+918098056789',
  email: 'adgrokovilpatti@gmail.com',
  facebook: 'https://www.facebook.com/people/AdGro-Hair-and-GloSkin-Kovilpatti/61590591973757/',
  instagram: 'https://www.instagram.com/adgrogloclinic.kovilpatti/',
}

/* Addresses are stored as lines so each renders as its own block — no manual
   pre-line breaks fighting the column width. There is one clinic; the form
   preselects it and hides the branch picker (see LeadForm). */
export const BRANCHES = [
  {
    id: 'kovilpatti',
    name: 'Kovilpatti',
    lines: [
      '16, First Floor, No. 464, Nellai Bypass Road',
      'Near Fire Station, V.O.C. Nagar, Kadershan Koil',
      'Kovilpatti, Tamil Nadu – 628502',
    ],
    maps: 'https://www.google.com/maps/search/?api=1&query=16%2C%20First%20Floor%2C%20No.%20464%2C%20Nellai%20Bypass%20Road%2C%20Near%20Fire%20Station%2C%20V.O.C.%20Nagar%2C%20Kadershan%20Koil%2C%20Kovilpatti%2C%20Tamil%20Nadu%20628502',
    embed: 'https://www.google.com/maps?q=16%2C%20First%20Floor%2C%20No.%20464%2C%20Nellai%20Bypass%20Road%2C%20Near%20Fire%20Station%2C%20V.O.C.%20Nagar%2C%20Kadershan%20Koil%2C%20Kovilpatti%2C%20Tamil%20Nadu%20628502&output=embed',
  },
]

/* Trust metrics — the only place branch count is stated as a number */
export const TRUST_STATS = [
  { icon: 'CalendarCheck', value: '15+', label: 'Years of Excellence' },
  { icon: 'ShieldCheck', value: '18+', label: 'FDA-Cleared Treatments' },
  { icon: 'Users', value: '10,000+', label: 'Patients Treated' },
  { icon: 'Star', value: '4.8', label: 'Google Rating' },
  { icon: 'MapPin', value: 'Kovilpatti', label: 'Nellai Bypass Road' },
]

/**
 * CALL-URGENCY POPUP — follows the lead form when it is dismissed.
 *
 * ⚠ EVERY VALUE BELOW IS A CLAIM ABOUT THE CLINIC. The figures are taken from
 * the reference design and are placeholders: `wasPrice`, `nowPrice` and
 * `slotsLeft` state a real offer and a real availability, and a struck-through
 * price the clinic never charged is misleading advertising, not styling.
 * Replace them with the clinic's actual numbers before this goes live.
 *
 * `windowMinutes` drives the countdown. It restarts on every page load, so it
 * measures how long this visitor has been looking at the offer — not a
 * deadline the clinic is keeping. If the offer does have a real end time, say
 * so instead; a timer that resets on refresh is the kind of thing visitors
 * notice and stop trusting the rest of the page over.
 */
export const URGENCY = {
  slotsLeft: 6,
  wasPrice: '₹699',
  nowPrice: 'Free',
  priceNote: 'Consultation today only',
  windowMinutes: 15,
  /* Restated compactly here — the popup has room for three, not five. */
  proof: ['Kovilpatti', '15+ Years', '10,000+ Patients'],
}

export const SERVICES = [
  {
    icon: 'Stethoscope',
    title: 'Hair Fall Treatment',
    copy: 'Get to the root of ongoing hair fall with a scalp-first diagnostic approach.',
  },
  {
    icon: 'Sprout',
    title: 'Hair Transplant',
    copy: 'A permanent, natural-looking solution for baldness and receding hairlines.',
  },
  {
    icon: 'TestTubes',
    title: 'GFC Therapy',
    copy: "Stimulate natural hair growth using your body's own growth factors.",
  },
  {
    icon: 'Syringe',
    title: 'Mesotherapy',
    copy: 'Strengthen thinning hair and improve scalp health with a quick, non-invasive procedure.',
  },
  {
    icon: 'Droplets',
    title: 'Dandruff & Scalp Treatment',
    copy: 'Clear flakes and irritation for a healthier scalp environment.',
  },
  {
    icon: 'UserRound',
    title: 'Beard Transplant',
    copy: 'Achieve fuller, well-shaped facial hair with lasting results.',
  },
]

export const WHY_US = [
  {
    icon: 'BadgeCheck',
    title: 'Certified Trichologists',
    copy: 'Every treatment plan is designed and reviewed by qualified specialists.',
  },
  {
    icon: 'ShieldCheck',
    title: 'FDA-Approved Treatments',
    copy: '18+ modern hair restoration options backed by research.',
  },
  {
    icon: 'ClipboardList',
    title: 'Personalised Plans',
    copy: 'No generic packages — every plan is built around your scalp and hair type.',
  },
  {
    icon: 'Star',
    title: '4.8★ Rated Clinic',
    copy: 'Trusted by patients across Kovilpatti and nearby towns.',
  },
]

export const REVIEWS = [
  {
    name: 'Dillip Maharana',
    treatment: 'GFC Treatment',
    text: 'I visited this clinic for GFC treatment and had a good overall experience. The doctor explained the treatment in detail and answered all my questions clearly. The staff were also very polite, supportive, and professional throughout the process. I felt comfortable and well taken care of.',
  },
  {
    name: 'Prakash Sekar',
    treatment: 'Hair GFC — 3 Sessions',
    text: 'Completed 3 Hair GFC sessions and the treatment process was smooth and professional. Noticed reduced hair fall and improved hair quality after the sessions. Friendly doctors and staff, good guidance, and excellent patient care.',
  },
  {
    name: 'Seerin',
    treatment: 'Q-Switch & Facial',
    text: 'I visited the clinic for a Q-switch treatment and a facial, and the experience was amazing! The ambience is super clean, calm and very welcoming. The staff are really polite, friendly and professional — they explain every step clearly and make you feel very comfortable throughout the process.',
  },
  {
    name: 'Rajan Gomes',
    treatment: 'Hydra Facial',
    text: 'I had a Hydra Facial at the clinic and the experience was excellent. My skin felt deeply cleansed, hydrated, and instantly brighter after the session. The procedure was gentle and relaxing, and everything was explained clearly. The clinic maintains good hygiene and professionalism.',
  },
]

export const FAQS = [
  {
    q: 'Is hair transplant a permanent solution?',
    a: 'Yes — transplanted hair follicles are resistant to hair loss and typically grow naturally for a lifetime.',
  },
  {
    q: 'How soon will I see results from hair fall treatment?',
    a: 'Most patients start noticing visible improvement within 3 to 4 months, depending on the treatment and severity.',
  },
  {
    q: 'What happens during the first consultation?',
    a: 'Our specialist examines your scalp and hair condition, discusses your history and concerns, and recommends a treatment plan suited to you.',
  },
  {
    q: 'Are your treatments safe?',
    a: 'Yes — all treatments used at our clinic are FDA-approved and performed by certified professionals.',
  },
  {
    q: 'Where is the clinic located?',
    a: 'We are at 16, First Floor, No. 464, Nellai Bypass Road, near the Fire Station, V.O.C. Nagar, Kadershan Koil, Kovilpatti. Call 080980 56789 and we will guide you.',
  },
]
