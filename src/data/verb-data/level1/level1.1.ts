import { Verb } from '../../verbs';

// ... (code existant pour les verbes 1 à 5)

const verb6: Verb = {
  name: "aller",
  conjugations: {
    // ... (conjugaisons pour le verbe "aller")
  },
};

const verb7: Verb = {
  name: "voir",
  conjugations: {
    "présent": { "je": "vois", "tu": "vois", "il/elle": "voit", "nous": "voyons", "vous": "voyez", "ils/elles": "voient" },
    "imparfait": { "je": "voyais", "tu": "voyais", "il/elle": "voyait", "nous": "voyions", "vous": "voyiez", "ils/elles": "voyaient" },
    "futur": { "je": "verrai", "tu": "verras", "il/elle": "verra", "nous": "verrons", "vous": "verrez", "ils/elles": "verront" },
    "passé composé": { "je": "ai vu", "tu": "as vu", "il/elle": "a vu", "nous": "avons vu", "vous": "avez vu", "ils/elles": "ont vu" },
    "subjonctif présent": { "je": "voie", "tu": "voies", "il/elle": "voie", "nous": "voyions", "vous": "voyiez", "ils/elles": "voient" },
    "impératif": { "tu": "vois", "nous": "voyons", "vous": "voyez" },
    "passé simple": { "je": "vis", "tu": "vis", "il/elle": "vit", "nous": "vîmes", "vous": "vîtes", "ils/elles": "virent" },
    "plus-que-parfait": { "je": "avais vu", "tu": "avais vu", "il/elle": "avait vu", "nous": "avions vu", "vous": "aviez vu", "ils/elles": "avaient vu" },
    "futur antérieur": { "je": "aurai vu", "tu": "auras vu", "il/elle": "aura vu", "nous": "aurons vu", "vous": "aurez vu", "ils/elles": "auront vu" },
    "conditionnel présent": { "je": "verrais", "tu": "verrais", "il/elle": "verrait", "nous": "verrions", "vous": "verriez", "ils/elles": "verraient" },
    "conditionnel passé": { "je": "aurais vu", "tu": "aurais vu", "il/elle": "aurait vu", "nous": "aurions vu", "vous": "auriez vu", "ils/elles": "auraient vu" },
    "subjonctif imparfait": { "je": "visse", "tu": "visses", "il/elle": "vît", "nous": "vissions", "vous": "vissiez", "ils/elles": "vissent" },
    "subjonctif passé": { "je": "aie vu", "tu": "aies vu", "il/elle": "ait vu", "nous": "ayons vu", "vous": "ayez vu", "ils/elles": "aient vu" },
    "subjonctif plus-que-parfait": { "je": "eusse vu", "tu": "eusses vu", "il/elle": "eût vu", "nous": "eussions vu", "vous": "eussiez vu", "ils/elles": "eussent vu" },
  },
};

const verb8: Verb = {
  name: "prendre",
  conjugations: {
    // ... (conjugaisons pour le verbe "prendre")
  },
};

const verb9: Verb = {
  name: "mettre",
  conjugations: {
    // ... (conjugaisons pour le verbe "mettre")
  },
};

const verb10: Verb = {
  name: "savoir",
  conjugations: {
    // ... (conjugaisons pour le verbe "savoir")
  },
};

export default [verb1, verb2, verb3, verb4, verb5, verb6, verb7, verb8, verb9, verb10];