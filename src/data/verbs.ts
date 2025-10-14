export type Pronoun = "je" | "tu" | "il/elle" | "nous" | "vous" | "ils/elles";

export const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

export type Tense =
  | "indicatif présent"
  | "indicatif imparfait"
  | "indicatif passé simple"
  | "indicatif futur simple"
  | "indicatif passé composé"
  | "indicatif plus-que-parfait"
  | "indicatif passé antérieur"
  | "indicatif futur antérieur"
  | "subjonctif présent"
  | "subjonctif imparfait"
  | "subjonctif passé"
  | "subjonctif plus-que-parfait"
  | "conditionnel présent"
  | "conditionnel passé première forme"
  | "conditionnel passé deuxième forme"
  | "impératif présent"
  | "impératif passé"
  | "infinitif présent"
  | "infinitif passé"
  | "participe présent"
  | "participe passé"
  | "gérondif présent"
  | "gérondif passé";

export type Conjugation = {
  [key in Pronoun]?: string;
};

export type Verb = {
  name: string;
  conjugations: {
    [key: string]: Conjugation | string;
  };
};

export const getTensePreposition = (tense: Tense | string) => {
  if (tense.startsWith('indicatif') || tense.startsWith('impératif') || tense.startsWith('infinitif')) {
    return "à l'";
  }
  return "au ";
};

export const getPronounText = (pronoun: Pronoun) => {
  switch (pronoun) {
    case 'je':
      return 'première personne du singulier';
    case 'tu':
      return 'deuxième personne du singulier';
    case 'il/elle':
      return 'troisième personne du singulier';
    case 'nous':
      return 'première personne du pluriel';
    case 'vous':
      return 'deuxième personne du pluriel';
    case 'ils/elles':
      return 'troisième personne du pluriel';
  }
};

export const getPronounHint = (pronoun: Pronoun) => {
  if (pronoun === 'il/elle' || pronoun === 'ils/elles') {
    return `(${pronoun})`;
  }
  const text = getPronounText(pronoun);
  const firstWord = text.split(' ')[0];
  return `(${firstWord.charAt(0)}ère pers. ${text.includes('singulier') ? 'sing.' : 'plur.'})`;
};