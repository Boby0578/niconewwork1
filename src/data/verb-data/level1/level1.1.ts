import { Verb } from '../../verbs';

// This is a placeholder file for a verb.
// To add a verb, replace 'null' with a verb object.
// Example:
//
// const verb: Verb = {
//   name: "chanter",
//   conjugations: {
//     "présent": { "je": "chante", "tu": "chantes", "il/elle": "chante", "nous": "chantons", "vous": "chantez", "ils/elles": "chantent" },
//     "futur": { "je": "chanterai", "tu": "chanteras", "il/elle": "chantera", "nous": "chanterons", "vous": "chanterez", "ils/elles": "chanteront" },
//   },
// };
//
// export default verb;

const verb1: Verb = {
  name: "manger",
  conjugations: {
    "présent": { "je": "mange", "tu": "manges", "il/elle": "mange", "nous": "mangeons", "vous": "mangez", "ils/elles": "mangent" },
    "passé composé": { "je": "ai mangé", "tu": "as mangé", "il/elle": "a mangé", "nous": "avons mangé", "vous": "avez mangé", "ils/elles": "ont mangé" },
    "imparfait": { "je": "mangeais", "tu": "mangeais", "il/elle": "mangeait", "nous": "mangions", "vous": "mangiez", "ils/elles": "mangeaient" },
    "plus-que-parfait": { "je": "avais mangé", "tu": "avais mangé", "il/elle": "avait mangé", "nous": "avions mangé", "vous": "aviez mangé", "ils/elles": "avaient mangé" },
    "futur simple": { "je": "mangerai", "tu": "mangeras", "il/elle": "mangera", "nous": "mangerons", "vous": "mangerez", "ils/elles": "mangeront" },
    "futur antérieur": { "je": "aurai mangé", "tu": "auras mangé", "il/elle": "aura mangé", "nous": "aurons mangé", "vous": "aurez mangé", "ils/elles": "auront mangé" },
    "conditionnel présent": { "je": "mangerais", "tu": "mangerais", "il/elle": "mangerait", "nous": "mangerions", "vous": "mangeriez", "ils/elles": "mangeraient" },
    "conditionnel passé première forme": { "je": "aurais mangé", "tu": "aurais mangé", "il/elle": "aurait mangé", "nous": "aurions mangé", "vous": "auriez mangé", "ils/elles": "auraient mangé" },
    "conditionnel passé deuxième forme": { "je": "eusse mangé", "tu": "eusses mangé", "il/elle": "eût mangé", "nous": "eussions mangé", "vous": "eussiez mangé", "ils/elles": "eussent mangé" },
    "subjonctif présent": { "je": "que je mange", "tu": "que tu manges", "il/elle": "qu'il/elle mange", "nous": "que nous mangions", "vous": "que vous mangiez", "ils/elles": "qu'ils/elles mangent" },
    "subjonctif passé": { "je": "que j'aie mangé", "tu": "que tu aies mangé", "il/elle": "qu'il/elle ait mangé", "nous": "que nous ayons mangé", "vous": "que vous ayez mangé", "ils/elles": "qu'ils/elles aient mangé" },
    "subjonctif imparfait": { "je": "que je mangeasse", "tu": "que tu mangeasses", "il/elle": "qu'il/elle mangeât", "nous": "que nous mangeassions", "vous": "que vous mangeassiez", "ils/elles": "qu'ils/elles mangeassent" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse mangé", "tu": "que tu eusses mangé", "il/elle": "qu'il/elle eût mangé", "nous": "que nous eussions mangé", "vous": "que vous eussiez mangé", "ils/elles": "qu'ils/elles eussent mangé" },
    "impératif": { "tu": "mange", "nous": "mangeons", "vous": "mangez" },
    "impératif passé": { "tu": "aie mangé", "nous": "ayons mangé", "vous": "ayez mangé" },
    "passé simple": { "je": "mangeai", "tu": "mangeas", "il/elle": "mangea", "nous": "mangeâmes", "vous": "mangeâtes", "ils/elles": "mangèrent" },
    "passé antérieur": { "je": "eus mangé", "tu": "eus mangé", "il/elle": "eut mangé", "nous": "eûmes mangé", "vous": "eûtes mangé", "ils/elles": "eurent mangé" },
  },
};

const verb2: Verb = {
  name: "prendre",
  conjugations: {
    "présent": { "je": "prends", "tu": "prends", "il/elle": "prend", "nous": "prenons", "vous": "prenez", "ils/elles": "prennent" },
    "passé composé": { "je": "ai pris", "tu": "as pris", "il/elle": "a pris", "nous": "avons pris", "vous": "avez pris", "ils/elles": "ont pris" },
    "imparfait": { "je": "prenais", "tu": "prenais", "il/elle": "prenait", "nous": "prenions", "vous": "preniez", "ils/elles": "prenaient" },
    "plus-que-parfait": { "je": "avais pris", "tu": "avais pris", "il/elle": "avait pris", "nous": "avions pris", "vous": "aviez pris", "ils/elles": "avaient pris" },
    "futur simple": { "je": "prendrai", "tu": "prendras", "il/elle": "prendra", "nous": "prendrons", "vous": "prendrez", "ils/elles": "prendront" },
    "futur antérieur": { "je": "aurai pris", "tu": "auras pris", "il/elle": "aura pris", "nous": "aurons pris", "vous": "aurez pris", "ils/elles": "auront pris" },
    "conditionnel présent": { "je": "prendrais", "tu": "prendrais", "il/elle": "prendrait", "nous": "prendrions", "vous": "prendriez", "ils/elles": "prendraient" },
    "conditionnel passé première forme": { "je": "aurais pris", "tu": "aurais pris", "il/elle": "aurait pris", "nous": "aurions pris", "vous": "auriez pris", "ils/elles": "auraient pris" },
    "conditionnel passé deuxième forme": { "je": "eusse pris", "tu": "eusses pris", "il/elle": "eût pris", "nous": "eussions pris", "vous": "eussiez pris", "ils/elles": "eussent pris" },
    "subjonctif présent": { "je": "que je prenne", "tu": "que tu prennes", "il/elle": "qu'il/elle prenne", "nous": "que nous prenions", "vous": "que vous preniez", "ils/elles": "qu'ils/elles prennent" },
    "subjonctif passé": { "je": "que j'aie pris", "tu": "que tu aies pris", "il/elle": "qu'il/elle ait pris", "nous": "que nous ayons pris", "vous": "que vous ayez pris", "ils/elles": "qu'ils/elles aient pris" },
    "subjonctif imparfait": { "je": "que je prisse", "tu": "que tu prisses", "il/elle": "qu'il/elle prît", "nous": "que nous prissions", "vous": "que vous prissiez", "ils/elles": "qu'ils/elles prissent" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse pris", "tu": "que tu eusses pris", "il/elle": "qu'il/elle eût pris", "nous": "que nous eussions pris", "vous": "que vous eussiez pris", "ils/elles": "qu'ils/elles eussent pris" },
    "impératif": { "tu": "prends", "nous": "prenons", "vous": "prenez" },
    "impératif passé": { "tu": "aie pris", "nous": "ayons pris", "vous": "ayez pris" },
    "passé simple": { "je": "pris", "tu": "pris", "il/elle": "prit", "nous": "prîmes", "vous": "prîtes", "ils/elles": "prirent" },
    "passé antérieur": { "je": "eus pris", "tu": "eus pris", "il/elle": "eut pris", "nous": "eûmes pris", "vous": "eûtes pris", "ils/elles": "eurent pris" },
  },
};

const verb3: Verb = {
  name: "donner",
  conjugations: {
    "présent": { "je": "donne", "tu": "donnes", "il/elle": "donne", "nous": "donnons", "vous": "donnez", "ils/elles": "donnent" },
    "passé composé": { "je": "ai donné", "tu": "as donné", "il/elle": "a donné", "nous": "avons donné", "vous": "avez donné", "ils/elles": "ont donné" },
    "imparfait": { "je": "donnais", "tu": "donnais", "il/elle": "donnait", "nous": "donnions", "vous": "donniez", "ils/elles": "donnaient" },
    "plus-que-parfait": { "je": "avais donné", "tu": "avais donné", "il/elle": "avait donné", "nous": "avions donné", "vous": "aviez donné", "ils/elles": "avaient donné" },
    "futur simple": { "je": "donnerai", "tu": "donneras", "il/elle": "donnera", "nous": "donnerons", "vous": "donnerez", "ils/elles": "donneront" },
    "futur antérieur": { "je": "aurai donné", "tu": "auras donné", "il/elle": "aura donné", "nous": "aurons donné", "vous": "aurez donné", "ils/elles": "auront donné" },
    "conditionnel présent": { "je": "donnerais", "tu": "donnerais", "il/elle": "donnerait", "nous": "donnerions", "vous": "donneriez", "ils/elles": "donneraient" },
    "conditionnel passé première forme": { "je": "aurais donné", "tu": "aurais donné", "il/elle": "aurait donné", "nous": "aurions donné", "vous": "auriez donné", "ils/elles": "auraient donné" },
    "conditionnel passé deuxième forme": { "je": "eusse donné", "tu": "eusses donné", "il/elle": "eût donné", "nous": "eussions donné", "vous": "eussiez donné", "ils/elles": "eussent donné" },
    "subjonctif présent": { "je": "que je donne", "tu": "que tu donnes", "il/elle": "qu'il/elle donne", "nous": "que nous donnions", "vous": "que vous donniez", "ils/elles": "qu'ils/elles donnent" },
    "subjonctif passé": { "je": "que j'aie donné", "tu": "que tu aies donné", "il/elle": "qu'il/elle ait donné", "nous": "que nous ayons donné", "vous": "que vous ayez donné", "ils/elles": "qu'ils/elles aient donné" },
    "subjonctif imparfait": { "je": "que je donnasse", "tu": "que tu donnesses", "il/elle": "qu'il/elle donnât", "nous": "que nous donnassions", "vous": "que vous donniez", "ils/elles": "qu'ils/elles donnassent" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse donné", "tu": "que tu eusses donné", "il/elle": "qu'il/elle eût donné", "nous": "que nous eussions donné", "vous": "que vous eussiez donné", "ils/elles": "qu'ils/elles eussent donné" },
    "impératif": { "tu": "donne", "nous": "donnons", "vous": "donnez" },
    "impératif passé": { "tu": "aie donné", "nous": "ayons donné", "vous": "ayez donné" },
    "passé simple": { "je": "donnai", "tu": "donnais", "il/elle": "donna", "nous": "donnâmes", "vous": "donnâtes", "ils/elles": "donnèrent" },
    "passé antérieur": { "je": "eus donné", "tu": "eus donné", "il/elle": "eut donné", "nous": "eûmes donné", "vous": "eûtes donné", "ils/elles": "eurent donné" },
  },
};

const verb4: Verb = {
  name: "voir",
  conjugations: {
    "présent": { "je": "vois", "tu": "vois", "il/elle": "voit", "nous": "voyons", "vous": "voyez", "ils/elles": "voient" },
    "passé composé": { "je": "ai vu", "tu": "as vu", "il/elle": "a vu", "nous": "avons vu", "vous": "avez vu", "ils/elles": "ont vu" },
    "imparfait": { "je": "voyais", "tu": "voyais", "il/elle": "voyait", "nous": "voyions", "vous": "voyiez", "ils/elles": "voyaient" },
    "plus-que-parfait": { "je": "avais vu", "tu": "avais vu", "il/elle": "avait vu", "nous": "avions vu", "vous": "aviez vu", "ils/elles": "avaient vu" },
    "futur simple": { "je": "verrai", "tu": "verras", "il/elle": "verra", "nous": "verrons", "vous": "verrez", "ils/elles": "verront" },
    "futur antérieur": { "je": "aurai vu", "tu": "auras vu", "il/elle": "aura vu", "nous": "aurons vu", "vous": "aurez vu", "ils/elles": "auront vu" },
    "conditionnel présent": { "je": "verrais", "tu": "verrais", "il/elle": "verrait", "nous": "verrions", "vous": "verriez", "ils/elles": "verraient" },
    "conditionnel passé première forme": { "je": "aurais vu", "tu": "aurais vu", "il/elle": "aurait vu", "nous": "aurions vu", "vous": "auriez vu", "ils/elles": "auraient vu" },
    "conditionnel passé deuxième forme": { "je": "eusse vu", "tu": "eusses vu", "il/elle": "eût vu", "nous": "eussions vu", "vous": "eussiez vu", "ils/elles": "eussent vu" },
    "subjonctif présent": { "je": "que je voie", "tu": "que tu voies", "il/elle": "qu'il/elle voie", "nous": "que nous voyions", "vous": "que vous voyiez", "ils/elles": "qu'ils/elles voient" },
    "subjonctif passé": { "je": "que j'aie vu", "tu": "que tu aies vu", "il/elle": "qu'il/elle ait vu", "nous": "que nous ayons vu", "vous": "que vous ayez vu", "ils/elles": "qu'ils/elles aient vu" },
    "subjonctif imparfait": { "je": "que je visse", "tu": "que tu visses", "il/elle": "qu'il/elle vît", "nous": "que nous vissions", "vous": "que vous vissiez", "ils/elles": "qu'ils/elles vissent" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse vu", "tu": "que tu eusses vu", "il/elle": "qu'il/elle eût vu", "nous": "que nous eussions vu", "vous": "que vous eussiez vu", "ils/elles": "qu'ils/elles eussent vu" },
    "impératif": { "tu": "vois", "nous": "voyons", "vous": "voyez" },
    "impératif passé": { "tu": "aie vu", "nous": "ayons vu", "vous": "ayez vu" },
    "passé simple": { "je": "vis", "tu": "vis", "il/elle": "vit", "nous": "vîmes", "vous": "vîtes", "ils/elles": "virent" },
    "passé antérieur": { "je": "eus vu", "tu": "eus vu", "il/elle": "eut vu", "nous": "eûmes vu", "vous": "eûtes vu", "ils/elles": "eurent vu" },
  },
};

const verb5: Verb = {
  name: "aller",
  conjugations: {
    "présent": { "je": "vais", "tu": "vas", "il/elle": "va", "nous": "allons", "vous": "allez", "ils/elles": "vont" },
    "passé composé": { "je": "suis allé", "tu": "es allé", "il/elle": "est allé", "nous": "sommes allés", "vous": "êtes allés", "ils/elles": "sont allés" },
    "imparfait": { "je": "allais", "tu": "allais", "il/elle": "allait", "nous": "allions", "vous": "alliez", "ils/elles": "allaient" },
    "plus-que-parfait": { "je": "étais allé", "tu": "étais allé", "il/elle": "était allé", "nous": "étions allés", "vous": "étiez allés", "ils/elles": "étaient allés" },
    "futur simple": { "je": "irai", "tu": "iras", "il/elle": "ira", "nous": "irons", "vous": "irez", "ils/elles": "iront" },
    "futur antérieur": { "je": "serai allé", "tu": "seras allé", "il/elle": "sera allé", "nous": "serons allés", "vous": "serez allés", "ils/elles": "seront allés" },
    "conditionnel présent": { "je": "irais", "tu": "irais", "il/elle": "irait", "nous": "irions", "vous": "iriez", "ils/elles": "iraient" },
    "conditionnel passé première forme": { "je": "serais allé", "tu": "serais allé", "il/elle": "serait allé", "nous": "serions allés", "vous": "seriez allés", "ils/elles": "seraient allés" },
    "conditionnel passé deuxième forme": { "je": "fusse allé", "tu": "fusses allé", "il/elle": "fût allé", "nous": "fussions allés", "vous": "fussiez allés", "ils/elles": "fussent allés" },
    "subjonctif présent": { "je": "que j'aille", "tu": "que tu ailles", "il/elle": "qu'il/elle aille", "nous": "que nous allions", "vous": "que vous alliez", "ils/elles": "qu'ils/elles aillent" },
    "subjonctif passé": { "je": "que je sois allé", "tu": "que tu sois allé", "il/elle": "qu'il/elle soit allé", "nous": "que nous soyons allés", "vous": "que vous soyez allés", "ils/elles": "qu'ils/elles soient allés" },
    "subjonctif imparfait": { "je": "que j'allasse", "tu": "que tu allasses", "il/elle": "qu'il/elle allât", "nous": "que nous allassions", "vous": "que vous allassiez", "ils/elles": "qu'ils/elles allassent" },
    "subjonctif plus-que-parfait": { "je": "que je fusse allé", "tu": "que tu fusses allé", "il/elle": "qu'il/elle fût allé", "nous": "que nous fussions allés", "vous": "que vous fussiez allés", "ils/elles": "qu'ils/elles fussent allés" },
    "impératif": { "tu": "va", "nous": "allons", "vous": "allez" },
    "impératif passé": { "tu": "sois allé", "nous": "soyons allés", "vous": "soyez allés" },
    "passé simple": { "je": "allai", "tu": "allas", "il/elle": "alla", "nous": "allâmes", "vous": "allâtes", "ils/elles": "allèrent" },
    "passé antérieur": { "je": "fus allé", "tu": "fus allé", "il/elle": "fut allé", "nous": "fûmes allés", "vous": "fûtes allés", "ils/elles": "furent allés" },
  },
};

export default { verb1, verb2, verb3, verb4, verb5 };