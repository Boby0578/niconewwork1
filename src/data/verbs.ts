export type Pronoun = "je" | "tu" | "il/elle" | "nous" | "vous" | "ils/elles";
export type Tense = "présent" | "imparfait" | "futur" | "passé composé" | "subjonctif présent" | "impératif" | "passé simple" | "plus-que-parfait";

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
    [key in Tense]?: Partial<Conjugation>;
  };
}

export const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

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