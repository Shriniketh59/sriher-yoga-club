import { photos, type Photo } from "./images";
import type { RefId } from "./research";

/**
 * Wellness Hub articles.
 *
 * These are editorial DRAFTS written for the club to review. `author` and
 * `publishedOn` stay null until a named author (or reviewer) approves the
 * piece — the UI then shows "Draft · pending review". Body paragraphs are
 * plain strings; add references by id from data/research.ts.
 */
export const articleCategories = [
  "Yoga and Physical Health",
  "Mindfulness",
  "Stress Management",
  "Yoga and Sleep",
  "Breathwork",
  "Meditation",
  "Scientific Research on Yoga",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  readMinutes: number;
  author: { name: string; role?: string } | null;
  publishedOn: string | null;
  photo: Photo;
  body: { heading?: string; text: string }[];
  refs: RefId[];
};

export const articles: Article[] = [
  {
    slug: "yoga-and-musculoskeletal-health",
    title: "Moving Well: Yoga and Musculoskeletal Health",
    category: "Yoga and Physical Health",
    excerpt:
      "What reviews tell us about yoga, back pain, balance and mobility — and why it is best seen as one form of therapeutic exercise.",
    readMinutes: 5,
    author: null,
    publishedOn: null,
    photo: photos.downDogStudio,
    body: [
      {
        text: "Yoga combines movement, sustained postures, breathing and relaxation. Physically, it asks the body to bear weight in new positions, move joints through a range of motion and hold steady while the breath stays calm.",
      },
      {
        heading: "Back pain",
        text: "Chronic non-specific low back pain is one of the most studied areas. Systematic reviews, including a Cochrane review, report that yoga can lead to modest improvements in pain and function, broadly comparable to other exercise programmes. For many people the most useful activity is simply one they will keep doing.",
      },
      {
        heading: "Balance and mobility",
        text: "Standing postures such as tree pose challenge balance. In adults aged 60 and over, yoga-based exercise has been associated with small gains in balance and moderate gains in mobility compared with inactive controls.",
      },
      {
        heading: "Practising safely",
        text: "Discomfort that is sharp, persistent or worsening is a signal to stop. People with injuries, recent surgery, pregnancy or chronic conditions should seek medical advice and tell their instructor so postures can be adapted.",
      },
    ],
    refs: ["wieland2022", "cramer2013lbp", "youkhana2016", "nccih"],
  },
  {
    slug: "mindfulness-in-academic-life",
    title: "Mindfulness in Academic Life",
    category: "Mindfulness",
    excerpt: "A practical introduction to paying attention on purpose — in lectures, labs, wards and the library.",
    readMinutes: 4,
    author: null,
    publishedOn: null,
    photo: photos.mudra,
    body: [
      {
        text: "Mindfulness is often described as paying attention, on purpose, to what is happening in the present moment, with an attitude of openness rather than judgement.",
      },
      {
        heading: "Small, frequent practice",
        text: "Short practices fit busy schedules: noticing three slow breaths before an examination, feeling the feet on the floor while waiting, or eating one meal a day without a screen.",
      },
      {
        heading: "What it is not",
        text: "Mindfulness is not about emptying the mind or forcing calm. Wandering attention is normal; the practice is noticing it and gently returning.",
      },
    ],
    refs: ["goyal2014"],
  },
  {
    slug: "yoga-for-everyday-stress",
    title: "Yoga and Everyday Stress",
    category: "Stress Management",
    excerpt: "How movement, breath and rest may help with stress — and when to seek additional support.",
    readMinutes: 5,
    author: null,
    publishedOn: null,
    photo: photos.lakeDock,
    body: [
      {
        text: "Stress is a normal response to demands. Problems arise when stress is intense or prolonged and recovery time is short — a familiar pattern for many students and healthcare professionals.",
      },
      {
        heading: "What the research suggests",
        text: "Meta-analyses link yoga and meditation programmes with reductions in self-reported stress and anxiety, and with changes in some physiological measures such as resting heart rate. Effects are generally modest and vary between studies.",
      },
      {
        heading: "Knowing when to seek help",
        text: "Yoga can be one helpful habit, but persistent low mood, anxiety or burnout deserve professional support. Please reach out to your institution's counselling or student wellbeing services.",
      },
    ],
    refs: ["pascoe2017", "goyal2014"],
  },
  {
    slug: "yoga-and-sleep",
    title: "Winding Down: Yoga and Sleep",
    category: "Yoga and Sleep",
    excerpt: "Gentle evening practice, slower breathing and a consistent routine — what we know so far.",
    readMinutes: 4,
    author: null,
    publishedOn: null,
    photo: photos.cloudsMeditation,
    body: [
      {
        text: "Sleep is shaped by routine, light, caffeine, stress and workload. Gentle movement and relaxation in the evening may help some people transition towards rest.",
      },
      {
        heading: "The evidence",
        text: "Some trials report improvements in self-rated sleep quality after regular yoga practice, particularly among women with sleep complaints. The evidence is still preliminary and larger studies are needed.",
      },
      {
        heading: "A simple routine",
        text: "Try ten minutes of slow stretches, a few minutes of comfortable, unhurried breathing and a short body scan — away from bright screens. Persistent insomnia should be discussed with a doctor.",
      },
    ],
    refs: ["wang2020"],
  },
  {
    slug: "foundations-of-pranayama",
    title: "Foundations of Breathwork",
    category: "Breathwork",
    excerpt: "An introduction to yogic breathing, slow-paced breath and safe practice for beginners.",
    readMinutes: 5,
    author: null,
    publishedOn: null,
    photo: photos.beachMeditation,
    body: [
      {
        text: "Pranayama refers to the yogic practices of regulating the breath. Many techniques slow and lengthen breathing; others change its rhythm or the nostril used.",
      },
      {
        heading: "Slow breathing",
        text: "Research on slow-paced breathing has found associations with greater heart-rate variability and subjective relaxation, though many studies are small.",
      },
      {
        heading: "Safety first",
        text: "Begin with gentle, comfortable breathing and never strain. Breath retention and forceful techniques should be learned from a qualified teacher, and avoided by people with relevant medical conditions unless advised otherwise.",
      },
    ],
    refs: ["zaccaro2018"],
  },
  {
    slug: "beginning-meditation",
    title: "Beginning Meditation",
    category: "Meditation",
    excerpt: "Five quiet minutes: posture, attention and kindness toward a wandering mind.",
    readMinutes: 4,
    author: null,
    publishedOn: null,
    photo: photos.grassMeditation,
    body: [
      {
        text: "In yoga, dhyana describes a sustained, steady attention. For beginners, meditation is simply practising returning attention to a chosen anchor — often the breath.",
      },
      {
        heading: "How to begin",
        text: "Sit comfortably with a tall, relaxed spine. Set a timer for five minutes. Notice the breath; when the mind wanders, notice that too and return without criticism.",
      },
      {
        heading: "Evidence in context",
        text: "A large systematic review found moderate evidence that meditation programmes can improve anxiety and depressive symptoms, with smaller or less certain effects elsewhere.",
      },
    ],
    refs: ["goyal2014"],
  },
  {
    slug: "reading-yoga-research",
    title: "Reading Yoga Research Critically",
    category: "Scientific Research on Yoga",
    excerpt: "Effect sizes, control groups and bias: a short guide to interpreting yoga studies responsibly.",
    readMinutes: 6,
    author: null,
    publishedOn: null,
    photo: photos.stones,
    body: [
      {
        text: "Yoga research has grown quickly, but studies vary widely in size, design and quality. Reading them critically helps us communicate benefits honestly.",
      },
      {
        heading: "Questions to ask",
        text: "What was yoga compared with — nothing, usual care or another exercise? How many participants were there, and for how long? Could participants or assessors be blinded? Were outcomes self-reported?",
      },
      {
        heading: "Systematic reviews",
        text: "Systematic reviews and meta-analyses pool many trials and are usually the best starting point. Their conclusions are only as strong as the studies they include, so pay attention to the authors' certainty ratings.",
      },
      {
        heading: "Communicating responsibly",
        text: "Prefer “may help” and “is associated with” over “cures” or “proves”. Yoga is best presented as a complement to — never a replacement for — evidence-based medical care.",
      },
    ],
    refs: ["wieland2022", "nccih"],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
