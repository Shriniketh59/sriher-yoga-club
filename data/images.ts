/**
 * Photography library.
 *
 * Every `stock` image is a TEMPORARY placeholder from Unsplash (Unsplash
 * License). They do not show SRIHER students, staff or events and must never
 * be captioned as such. Replace with authentic club photographs by dropping
 * files into /public/images/club and pointing the entries below at them
 * (set `stock: false`).
 */
export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  stock: boolean;
};

/** Intrinsic sizes of portrait / non-3:2 stock files (all others are 2000×1333). */
const sizes: Record<string, [number, number]> = {
  "golden-meditation-deck": [2000, 2325],
  "clouds-meditation": [2000, 2500],
  "downward-dog-studio": [2000, 3000],
  "group-meditation-hall": [2000, 1125],
  "lake-dock-meditation": [2000, 1263],
  "low-lunge-sunset": [2000, 1261],
  "misty-mountain-pose": [2000, 2500],
  "mountain-meditation": [2000, 1360],
  "mudra-dark": [2000, 1500],
  "outdoor-eagle-arms": [2000, 2500],
  "seated-twist": [2000, 1600],
  "yoga-mats": [2000, 2000],
};

const s = (file: string, alt: string): Photo => {
  const [width, height] = sizes[file] ?? [2000, 1333];
  return { src: `/images/stock/${file}.jpg`, alt, width, height, stock: true };
};

export const photos = {
  heroHome: s("golden-meditation-deck", "A person meditating cross-legged on a wooden deck, backlit by warm golden morning light"),
  heroAbout: s("sunrise-meditation-palms", "Silhouette of a person in seated meditation on a terrace at sunrise, framed by palm trees"),
  treeSilhouette: s("tree-pose-silhouette", "Silhouette of a person balancing in tree pose on a hilltop against a pale sky"),
  treeMountain: s("tree-pose-mountain-sunrise", "A person in tree pose on a mountain ridge as the sun rises over distant valleys"),
  seaPose: s("sunset-sea-pose", "A person standing in a balancing pose at the water's edge during an orange sunset"),
  lowLunge: s("low-lunge-sunset", "A person in a crescent low lunge with arms raised against a soft pink sunset sky"),
  mountainMeditation: s("mountain-meditation", "A person seated in quiet contemplation facing a misty mountain range"),
  lakeDock: s("lake-dock-meditation", "A lone person meditating at the end of a wooden pier on a still mountain lake"),
  cloudsMeditation: s("clouds-meditation", "A person seated on a rocky summit above a sea of pink-tinted clouds"),
  namasteMat: s("namaste-mat", "A person seated on a teal mat with hands joined in reverse prayer behind the back"),
  mudra: s("mudra-hand", "Close-up of a hand resting on the knee in a meditation mudra, wearing a wooden bead bracelet"),
  groupHall: s("group-meditation-hall", "A group of adults seated on mats in a hall, meditating with eyes closed and palms joined"),
  mudraDark: s("mudra-dark", "Low-light close-up of a seated meditator's hand forming a mudra"),
  stones: s("balanced-stones", "A stack of smooth balanced stones on a misty shoreline"),
  beachGroup: s("beach-group-tree-pose", "Five people practising tree pose together on a misty beach"),
  mistyMountain: s("misty-mountain-pose", "A person in a standing balance with palms raised overhead above a misty forested valley"),
  classStretch: s("yoga-class-stretch", "A large group practising a side stretch together in a bright hall"),
  seatedTwist: s("seated-twist", "A person in a seated spinal twist on a mat beside a white wall"),
  eagleArms: s("outdoor-eagle-arms", "A person practising eagle arms outdoors on a lawn surrounded by greenery"),
  pigeon: s("studio-pigeon-pose", "A person holding a deep pigeon-pose variation in a sunlit wooden studio"),
  groupWarrior: s("group-warrior-class", "An instructor-led class holding a lunge with arms extended in a studio"),
  beachMeditation: s("beach-meditation", "A person meditating cross-legged on the sand as gentle waves roll in"),
  singingBowl: s("singing-bowl", "A person striking a brass singing bowl during a calm, candle-lit session"),
  armBalance: s("arm-balance", "Two people practising an arm-balance pose on mats in a warm studio"),
  downDogMono: s("downward-dog-mono", "Black-and-white photograph of a person in downward-facing dog"),
  downDogStudio: s("downward-dog-studio", "A person in downward-facing dog on a teal mat in a minimal studio"),
  mats: s("yoga-mats", "Rolled yoga mats in muted colours stacked on open shelves"),
  grassMeditation: s("grass-meditation", "A person meditating on a grassy slope with palms joined at the chest"),
  wheel: s("wheel-pose-arches", "A person in a one-legged wheel pose inside a bright white arched corridor"),
  outdoorGroup: s("outdoor-group-sunset", "A small group meditating on mats on a lawn in soft evening light"),
  meadow: s("sunrise-meadow", "The sun rising over a dewy meadow and a line of trees"),
  food: s("healthy-food", "A flat lay of greens, fruit, a water bottle and a bowl of seeds on green paper"),
} satisfies Record<string, Photo>;

/** 4K-wide yoga backgrounds (Unsplash License), downloaded at 3840 px. */
const k = (file: string, alt: string, width: number, height: number): Photo => ({
  src: `/images/4k/${file}.jpg`,
  alt,
  width,
  height,
  stock: true,
});

export const fourK = {
  palms: k("palms-meditation-4k", "A person meditating on a terrace at sunrise, framed by palm trees", 3840, 2560),
  sunrise: k("sunrise-yoga-4k", "Silhouette of a person practising yoga against a bright sunrise", 2202, 2560),
  mountain: k("mountain-sunrise-4k", "A person in tree pose on a mountain ridge as the sun rises over distant valleys", 3840, 2560),
  lake: k("lake-pier-4k", "A lone person meditating on a wooden pier beside a still mountain lake", 3840, 2424),
  mist: k("mist-valley-4k", "A person with palms raised above a misty forested valley", 3667, 4584),
  sea: k("sea-balance-4k", "A person balancing on a beach at sunset", 3840, 2560),
};

export const stockCredit =
  "Placeholder photography from Unsplash (Unsplash License). Images are illustrative and do not depict SRIHER Yoga Club members or events.";
