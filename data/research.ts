/**
 * Evidence summaries and references.
 *
 * Wording is deliberately conservative. Before publication, please have a
 * faculty member verify each citation and summary against the source.
 * Links go to a PubMed title search so they stay valid even if DOIs move.
 */

const pubmed = (title: string) => `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(title)}`;

export type Reference = {
  id: string;
  citation: string;
  url: string;
};

export const references = {
  wieland2022: {
    id: "wieland2022",
    citation:
      "Wieland LS, Skoetz N, Pilkington K, et al. Yoga treatment for chronic non-specific low back pain. Cochrane Database of Systematic Reviews. 2022.",
    url: pubmed("Yoga treatment for chronic non-specific low back pain"),
  },
  cramer2013lbp: {
    id: "cramer2013lbp",
    citation:
      "Cramer H, Lauche R, Haller H, Dobos G. A systematic review and meta-analysis of yoga for low back pain. Clinical Journal of Pain. 2013;29(5):450–460.",
    url: pubmed("A systematic review and meta-analysis of yoga for low back pain"),
  },
  pascoe2017: {
    id: "pascoe2017",
    citation:
      "Pascoe MC, Thompson DR, Ski CF. Yoga, mindfulness-based stress reduction and stress-related physiological measures: a meta-analysis. Psychoneuroendocrinology. 2017;86:152–168.",
    url: pubmed("Yoga, mindfulness-based stress reduction and stress-related physiological measures: A meta-analysis"),
  },
  youkhana2016: {
    id: "youkhana2016",
    citation:
      "Youkhana S, Dean CM, Wolff M, Sherrington C, Tiedemann A. Yoga-based exercise improves balance and mobility in people aged 60 and over: a systematic review and meta-analysis. Age and Ageing. 2016;45(1):21–29.",
    url: pubmed("Yoga-based exercise improves balance and mobility in people aged 60 and over"),
  },
  cramer2013dep: {
    id: "cramer2013dep",
    citation:
      "Cramer H, Lauche R, Langhorst J, Dobos G. Yoga for depression: a systematic review and meta-analysis. Depression and Anxiety. 2013;30(11):1068–1083.",
    url: pubmed("Yoga for depression: a systematic review and meta-analysis"),
  },
  goyal2014: {
    id: "goyal2014",
    citation:
      "Goyal M, Singh S, Sibinga EMS, et al. Meditation programs for psychological stress and well-being: a systematic review and meta-analysis. JAMA Internal Medicine. 2014;174(3):357–368.",
    url: pubmed("Meditation programs for psychological stress and well-being: a systematic review and meta-analysis"),
  },
  wang2020: {
    id: "wang2020",
    citation:
      "Wang WL, Chen KH, Pan YC, Yang SN, Chan YY. The effect of yoga on sleep quality and insomnia in women with sleep problems: a systematic review and meta-analysis. BMC Psychiatry. 2020;20:195.",
    url: pubmed("The effect of yoga on sleep quality and insomnia in women with sleep problems"),
  },
  zaccaro2018: {
    id: "zaccaro2018",
    citation:
      "Zaccaro A, Piarulli A, Laurino M, et al. How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience. 2018;12:353.",
    url: pubmed("How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing"),
  },
  hagins2013: {
    id: "hagins2013",
    citation:
      "Hagins M, States R, Selfe T, Innes K. Effectiveness of yoga for hypertension: systematic review and meta-analysis. Evidence-Based Complementary and Alternative Medicine. 2013;2013:649836.",
    url: pubmed("Effectiveness of yoga for hypertension: systematic review and meta-analysis"),
  },
  nccih: {
    id: "nccih",
    citation:
      "National Center for Complementary and Integrative Health (NIH). Yoga: What You Need To Know.",
    url: "https://www.nccih.nih.gov/health/yoga-what-you-need-to-know",
  },
} satisfies Record<string, Reference>;

export type RefId = keyof typeof references;

export type EvidenceLevel = "consistent" | "moderate" | "preliminary";

export const evidenceLabels: Record<EvidenceLevel, { label: string; note: string }> = {
  consistent: { label: "Consistent evidence", note: "Supported by multiple systematic reviews" },
  moderate: { label: "Moderate evidence", note: "Positive reviews; study quality varies" },
  preliminary: { label: "Preliminary evidence", note: "Early or limited findings; more research needed" },
};

export type EvidenceTopic = {
  title: string;
  level: EvidenceLevel;
  summary: string;
  refs: RefId[];
};

export const evidenceTopics: EvidenceTopic[] = [
  {
    title: "Chronic low back pain",
    level: "consistent",
    summary:
      "Systematic reviews, including a Cochrane review, report that yoga can produce modest improvements in pain and function for chronic non-specific low back pain — broadly similar to other forms of therapeutic exercise.",
    refs: ["wieland2022", "cramer2013lbp"],
  },
  {
    title: "Balance and mobility",
    level: "moderate",
    summary:
      "In adults aged 60 and over, yoga-based exercise has been associated with small improvements in balance and moderate improvements in mobility compared with inactive controls.",
    refs: ["youkhana2016"],
  },
  {
    title: "Perceived stress",
    level: "moderate",
    summary:
      "Meta-analyses link yoga and meditation programmes with reductions in self-reported stress and anxiety, and with some physiological markers such as resting heart rate. Effects are generally modest.",
    refs: ["pascoe2017", "goyal2014"],
  },
  {
    title: "Mood and depressive symptoms",
    level: "moderate",
    summary:
      "Reviews suggest short-term benefits for depressive symptoms when yoga is used alongside usual care. It is studied as a complementary practice, not a substitute for clinical treatment.",
    refs: ["cramer2013dep"],
  },
  {
    title: "Sleep quality",
    level: "preliminary",
    summary:
      "Some trials report improved self-rated sleep quality after regular yoga practice, particularly among women with sleep complaints. Larger, rigorous studies are still needed.",
    refs: ["wang2020"],
  },
  {
    title: "Slow, controlled breathing",
    level: "preliminary",
    summary:
      "Slow-paced breathing has been associated with greater heart-rate variability and feelings of relaxation. Much of the research is small-scale and mechanistic.",
    refs: ["zaccaro2018"],
  },
  {
    title: "Blood pressure",
    level: "preliminary",
    summary:
      "Pooled analyses suggest yoga may contribute to modest blood-pressure reductions, especially when breathing and meditation are included. It complements — never replaces — prescribed care.",
    refs: ["hagins2013"],
  },
];

export const medicalDisclaimer =
  "This information is educational and is not medical advice. Yoga can complement, but never replaces, diagnosis or treatment by a qualified health professional. Anyone with a health condition, injury or pregnancy should seek medical guidance and inform their instructor before practising.";
