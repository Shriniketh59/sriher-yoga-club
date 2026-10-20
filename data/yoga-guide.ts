/**
 * Yoga in depth: the About page's practical guide.
 * Written as educational background. Health claims are kept conservative and
 * tied to the evidence summaries in data/research.ts.
 */

export const yogaStyles = [
  { name: "Hatha", focus: "Body", text: "The umbrella term for physical yoga. Postures are usually held for several breaths, making it a steady starting point for beginners." },
  { name: "Vinyasa", focus: "Body and breath", text: "Flowing sequences that link each movement to a breath. Pace and intensity vary widely between classes." },
  { name: "Ashtanga", focus: "Body and discipline", text: "A set series of postures practised in a fixed order, with a steady, audible breath (ujjayi). Demanding and structured." },
  { name: "Iyengar", focus: "Alignment", text: "Precise attention to alignment, often using props such as blocks, straps and bolsters so that postures are accessible to everyone." },
  { name: "Raja", focus: "Mind", text: "The classical 'royal' path described in the Yoga Sutras: the eight limbs, with meditation at its centre." },
  { name: "Bhakti", focus: "Devotion", text: "The path of devotion and surrender, often expressed through chanting, song and reflection on compassion." },
  { name: "Jnana", focus: "Knowledge", text: "The path of inquiry: study, reflection and questioning the nature of the self." },
  { name: "Karma", focus: "Service", text: "The path of selfless action, taught in the Bhagavad Gita: doing one’s work well without attachment to its results." },
];

export const asanaFamilies = [
  { title: "Standing poses", examples: "Mountain (Tadasana), Tree (Vrikshasana), Triangle (Trikonasana)", text: "Build leg strength, balance and an awareness of the feet and posture." },
  { title: "Forward bends", examples: "Seated forward bend (Paschimottanasana), Child’s pose (Balasana)", text: "Lengthen the back of the body and settle the nervous system. Hold with a soft spine rather than forcing depth." },
  { title: "Backbends", examples: "Cobra (Bhujangasana), Bridge (Setu Bandha Sarvangasana)", text: "Open the chest and strengthen the back. Move gently and avoid compressing the lower back." },
  { title: "Twists", examples: "Seated twist (Ardha Matsyendrasana)", text: "Mobilise the spine and support digestion comfort. Lengthen first, then turn from the base of the spine." },
  { title: "Balances", examples: "Eagle (Garudasana), Half moon (Ardha Chandrasana)", text: "Train focus, ankle and hip stability. Use a wall for support while learning." },
  { title: "Restorative poses", examples: "Supported bridge, legs up the wall, Corpse pose (Savasana)", text: "Long holds with props so the body can rest fully. Often the most valued part of practice." },
];

export const breathTechniques = [
  { name: "Three-part breath (Dirgha)", purpose: "Calm and awareness", text: "Slow, full breathing that expands the belly, ribs and upper chest in turn. A good first technique to learn.", caution: null },
  { name: "Alternate nostril breath (Nadi Shodhana)", purpose: "Calm and focus", text: "Gentle alternating breath through each nostril, practised slowly and without strain.", caution: null },
  { name: "Humming bee breath (Bhramari)", purpose: "Relaxation", text: "A soft humming exhale that can feel settling. Often used at the end of a session.", caution: null },
  { name: "Ocean breath (Ujjayi)", purpose: "Steady rhythm in movement", text: "A softly constricted breath that makes a gentle sound, used to pace postures.", caution: null },
  { name: "Skull-shining breath (Kapalabhati)", purpose: "Energising", text: "Rapid, forceful exhalations driven by the abdomen. Stimulating rather than calming.", caution: "Avoid if you are pregnant, have high blood pressure, a heart condition or recent abdominal surgery." },
];

export const meditationForms = [
  { name: "Focused attention", text: "Resting attention on one anchor such as the breath, a candle or a sound. When the mind wanders, return gently." },
  { name: "Open awareness", text: "Observing thoughts, sounds and sensations as they arise, without choosing one object to hold." },
  { name: "Body scan", text: "Moving attention slowly through the body, noticing sensations without trying to change them. Helpful for tension and sleep." },
  { name: "Loving-kindness (Metta)", text: "Silently offering goodwill to yourself, to people you love, and eventually to others. Builds warmth and connection." },
];

export const sessionFlow = [
  { step: "Arrive and settle", minutes: "5 min", text: "Sit or lie comfortably. Notice the body and let the day begin to slow down." },
  { step: "Warm up", minutes: "10 min", text: "Gentle movement such as neck rolls, cat–cow and sun salutations to prepare joints and breath." },
  { step: "Postures", minutes: "30–40 min", text: "Standing, seated, forward bends, backbends and twists, each held with attention to alignment and comfort." },
  { step: "Breathwork", minutes: "5–10 min", text: "Simple, steady breathing practices, chosen to suit the group." },
  { step: "Meditation", minutes: "10 min", text: "A guided or silent practice of focused attention or open awareness." },
  { step: "Rest", minutes: "5–10 min", text: "Savasana. Lying still and letting the practice settle before returning to the day." },
];

export const safetyWhenTold = [
  "You have an injury, recent surgery or a joint that is painful or unstable",
  "You are pregnant or recently gave birth",
  "You have high or low blood pressure, a heart condition or dizziness",
  "You have glaucoma or a retinal condition (head-below-heart poses need care)",
  "You have osteoporosis, a disc condition or a spinal problem",
  "You take medication that affects balance or blood pressure",
];

export const gettingStarted = [
  "Come as you are: no flexibility or experience is needed",
  "Wear comfortable clothing and bring water",
  "Practise on an empty or light stomach, a few hours after a large meal",
  "Stop if you feel sharp pain, dizziness or breathlessness; rest and tell your teacher",
  "Consistency matters more than intensity. Ten minutes most days is a good start",
  "Ask for modifications freely: props and simpler variations are part of yoga",
];

export const glossary = [
  { term: "Asana", meaning: "A posture; a steady, comfortable seat or position." },
  { term: "Pranayama", meaning: "Regulation or extension of the breath (prana: life force; yama: control)." },
  { term: "Dhyana", meaning: "Meditation; sustained, uninterrupted attention." },
  { term: "Savasana", meaning: "Corpse pose; a final rest in stillness." },
  { term: "Yoga Sutras", meaning: "Patanjali’s concise text on the theory and practice of yoga." },
  { term: "Samadhi", meaning: "A state of deep absorption; the final limb of the eight-limbed path." },
];
