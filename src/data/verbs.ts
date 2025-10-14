export type Pronoun = "je" | "tu" | "il/elle" | "nous" | "vous" | "ils/elles";

export type Tense = 
  "indicatif présent" | 
  "indicatif imparfait" | 
  "indicatif passé simple" | 
  "indicatif futur simple" | 
  "indicatif passé composé" | 
  "indicatif plus-que-parfait" | 
  "indicatif passé antérieur" | 
  "indicatif futur antérieur" |
  "subjonctif présent" | 
  "subjonctif imparfait" | 
  "subjonctof plus-que-parfait" | 
  "subjonctif passé" |
  "conditionnel présent" | 
  "conditionnel passé première forme" | 
  "conditionnel passé deuxième forme" |
  "impératif présent" | 
  "impératif passé" |
  "infinitif présent" | 
  "infinitif passé" |
  "participe présent" | 
  "participe passé" |
  "gérondif présent" | 
  "gérondif passé";

export interface Conjugation {
  "je"?: string;
  "tu"?: string;
  "il/elle"?: string;
  "nous"?: string;
  "vous"?: string;
  "ils/elles"?: string;
}

export interface Verb {
  name: string;
  conjugations: {
    [key in Tense]?: Partial<Conjugation> | string;
  };
}

export const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

export const getTensePreposition = (tense: Tense) => {
  if (tense.startsWith('indicatif') || tense.startsWith('subjonctif') || tense.startsWith('conditionnel')) {
    return "à l'";
  }
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