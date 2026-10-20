import { photos, type Photo } from "./images";

/** Advanced postures shown on About and the Wellness Hub (illustrative stock photos). */
export type Asana = { name: string; sanskrit: string | null; builds: string; photo: Photo };

export const advancedAsanas: Asana[] = [
  {
    name: "One-legged wheel",
    sanskrit: "Eka Pada Urdhva Dhanurasana",
    builds: "Shoulder and spine mobility, with strength through the legs and back.",
    photo: photos.wheel,
  },
  {
    name: "Arm balance",
    sanskrit: null,
    builds: "Wrist, arm and core strength, and the steady focus needed to balance on the hands.",
    photo: photos.armBalance,
  },
  {
    name: "King pigeon variation",
    sanskrit: "Eka Pada Rajakapotasana",
    builds: "Deep opening of the hips and chest, and flexibility through the back.",
    photo: photos.pigeon,
  },
  {
    name: "Crescent lunge backbend",
    sanskrit: "Anjaneyasana variation",
    builds: "Length in the hip flexors, balance, and controlled extension of the spine.",
    photo: photos.lowLunge,
  },
];
