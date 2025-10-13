export type Pronoun = "je" | "tu" | "il/elle" | "nous" | "vous" | "ils/elles";
export type Tense = "présent" | "imparfait" | "futur" | "passé simple" | "plus-que-parfait" | "subjonctif présent";

export interface Conjugation {
  "je": string;
  "tu": string;
  "il/elle": string;
  "nous": string;
  "vous": string;
  "ils/elles": string;
}

export interface Verb {
  name: string;
  conjugations: {
    [key in Tense]?: Conjugation;
  };
}

export const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
export const tenses: Tense[] = ["présent", "imparfait", "futur", "passé simple", "plus-que-parfait", "subjonctif présent"];

export const verbs: Verb[] = [
  {
    name: "avoir",
    conjugations: {
      "présent": { "je": "j'ai", "tu": "tu as", "il/elle": "il/elle a", "nous": "nous avons", "vous": "vous avez", "ils/elles": "ils/elles ont" },
      "imparfait": { "je": "j'avais", "tu": "tu avais", "il/elle": "il/elle avait", "nous": "nous avions", "vous": "vous aviez", "ils/elles": "ils/elles avaient" },
      "futur": { "je": "j'aurai", "tu": "tu auras", "il/elle": "il/elle aura", "nous": "nous aurons", "vous": "vous aurez", "ils/elles": "ils/elles auront" },
      "subjonctif présent": { "je": "que j'aie", "tu": "que tu aies", "il/elle": "qu'il/elle ait", "nous": "que nous ayons", "vous": "que vous ayez", "ils/elles": "qu'ils/elles aient" },
    },
  },
  {
    name: "être",
    conjugations: {
      "présent": { "je": "je suis", "tu": "tu es", "il/elle": "il/elle est", "nous": "nous sommes", "vous": "vous êtes", "ils/elles": "ils/elles sont" },
      "imparfait": { "je": "j'étais", "tu": "tu étais", "il/elle": "il/elle était", "nous": "nous étions", "vous": "vous étiez", "ils/elles": "ils/elles étaient" },
      "futur": { "je": "je serai", "tu": "tu seras", "il/elle": "il/elle sera", "nous": "nous serons", "vous": "vous serez", "ils/elles": "ils/elles seront" },
      "subjonctif présent": { "je": "que je sois", "tu": "que tu sois", "il/elle": "qu'il/elle soit", "nous": "que nous soyons", "vous": "que vous soyez", "ils/elles": "qu'ils/elles soient" },
    },
  },
  {
    name: "aller",
    conjugations: {
      "présent": { "je": "je vais", "tu": "tu vas", "il/elle": "il/elle va", "nous": "nous allons", "vous": "vous allez", "ils/elles": "ils/elles vont" },
      "imparfait": { "je": "j'allais", "tu": "tu allais", "il/elle": "il/elle allait", "nous": "nous allions", "vous": "vous alliez", "ils/elles": "ils/elles allaient" },
      "futur": { "je": "j'irai", "tu": "tu iras", "il/elle": "il/elle ira", "nous": "nous irons", "vous": "vous irez", "ils/elles": "ils/elles iront" },
      "subjonctif présent": { "je": "que j'aille", "tu": "que tu ailles", "il/elle": "qu'il/elle aille", "nous": "que nous allions", "vous": "que vous alliez", "ils/elles": "qu'ils/elles aillent" },
    },
  },
];

export const getTensePreposition = (tense: Tense) => {
  if (tense === 'imparfait') return "à l'";
  return "au ";
}

export const getPronounText = (pronoun: Pronoun) => {
    const mapping = {
        "je": "première personne du singulier",
        "tu": "deuxième personne du singulier",
        "il/elle": "troisième personne du singulier",
        "nous": "première personne du pluriel",
        "vous": "deuxième personne du pluriel",
        "ils/elles": "troisième personne du pluriel",
    };
    return mapping[pronoun];
}

export const getPronounHint = (pronoun: Pronoun) => {
    const mapping = {
        "je": "(je)",
        "tu": "(tu)",
        "il/elle": "(il/elle)",
        "nous": "(nous)",
        "vous": "(vous)",
        "ils/elles": "(ils/elles)",
    };
    return mapping[pronoun];
}