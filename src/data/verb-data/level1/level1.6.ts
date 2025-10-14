import { Verb } from '../../verbs';

const croire: Verb = {
  name: "croire",
  conjugations: {
    "indicatif présent": { "je": "crois", "tu": "crois", "il/elle": "croit", "nous": "croyons", "vous": "croyez", "ils/elles": "croient" },
    "indicatif imparfait": { "je": "croyais", "tu": "croyais", "il/elle": "croyait", "nous": "croyions", "vous": "croyiez", "ils/elles": "croyaient" },
    "indicatif passé simple": { "je": "crus", "tu": "crus", "il/elle": "crut", "nous": "crûmes", "vous": "crûtes", "ils/elles": "crurent" },
    "indicatif futur simple": { "je": "croirai", "tu": "croiras", "il/elle": "croira", "nous": "croirons", "vous": "croirez", "ils/elles": "croiront" },
    "indicatif passé composé": { "je": "ai cru", "tu": "as cru", "il/elle": "a cru", "nous": "avons cru", "vous": "avez cru", "ils/elles": "ont cru" },
    "indicatif plus-que-parfait": { "je": "avais cru", "tu": "avais cru", "il/elle": "avait cru", "nous": "avions cru", "vous": "aviez cru", "ils/elles": "avaient cru" },
    "indicatif passé antérieur": { "je": "eus cru", "tu": "eus cru", "il/elle": "eut cru", "nous": "eûmes cru", "vous": "eûtes cru", "ils/elles": "eurent cru" },
    "indicatif futur antérieur": { "je": "aurai cru", "tu": "auras cru", "il/elle": "aura cru", "nous": "aurons cru", "vous": "aurez cru", "ils/elles": "auront cru" },
    "subjonctif présent": { "je": "que je croie", "tu": "que tu croies", "il/elle": "qu'il croie", "nous": "que nous croyions", "vous": "que vous croyiez", "ils/elles": "qu'ils croient" },
    "subjonctif imparfait": { "je": "que je crusse", "tu": "que tu crusses", "il/elle": "qu'il crût", "nous": "que nous crussions", "vous": "que vous crussiez", "ils/elles": "qu'ils crussent" },
    "subjonctif passé": { "je": "que j'aie cru", "tu": "que tu aies cru", "il/elle": "qu'il ait cru", "nous": "que nous ayons cru", "vous": "que vous ayez cru", "ils/elles": "qu'ils aient cru" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse cru", "tu": "que tu eusses cru", "il/elle": "qu'il eût cru", "nous": "que nous eussions cru", "vous": "que vous eussiez cru", "ils/elles": "qu'ils eussent cru" },
    "conditionnel présent": { "je": "croirais", "tu": "croirais", "il/elle": "croirait", "nous": "croirions", "vous": "croiriez", "ils/elles": "croiraient" },
    "conditionnel passé première forme": { "je": "aurais cru", "tu": "aurais cru", "il/elle": "aurait cru", "nous": "aurions cru", "vous": "auriez cru", "ils/elles": "auraient cru" },
    "conditionnel passé deuxième forme": { "je": "eusse cru", "tu": "eusses cru", "il/elle": "eût cru", "nous": "eussions cru", "vous": "eussiez cru", "ils/elles": "eussent cru" },
    "impératif présent": { "tu": "crois", "nous": "croyons", "vous": "croyez" },
    "impératif passé": { "tu": "aie cru", "nous": "ayons cru", "vous": "ayez cru" },
    "infinitif présent": "croire",
    "infinitif passé": "avoir cru",
    "participe présent": "croyant",
    "participe passé": "cru",
    "gérondif présent": "en croyant",
    "gérondif passé": "en ayant cru"
  }
};

const penser: Verb = {
  name: "penser",
  conjugations: {
    "indicatif présent": { "je": "pense", "tu": "penses", "il/elle": "pense", "nous": "pensons", "vous": "pensez", "ils/elles": "pensent" },
    "indicatif imparfait": { "je": "pensais", "tu": "pensais", "il/elle": "pensait", "nous": "pensions", "vous": "pensiez", "ils/elles": "pensaient" },
    "indicatif passé simple": { "je": "pensai", "tu": "pensas", "il/elle": "pensa", "nous": "pensâmes", "vous": "pensâtes", "ils/elles": "pensèrent" },
    "indicatif futur simple": { "je": "penserai", "tu": "penseras", "il/elle": "pensera", "nous": "penserons", "vous": "penserez", "ils/elles": "penseront" },
    "indicatif passé composé": { "je": "ai pensé", "tu": "as pensé", "il/elle": "a pensé", "nous": "avons pensé", "vous": "avez pensé", "ils/elles": "ont pensé" },
    "indicatif plus-que-parfait": { "je": "avais pensé", "tu": "avais pensé", "il/elle": "avait pensé", "nous": "avions pensé", "vous": "aviez pensé", "ils/elles": "avaient pensé" },
    "indicatif passé antérieur": { "je": "eus pensé", "tu": "eus pensé", "il/elle": "eut pensé", "nous": "eûmes pensé", "vous": "eûtes pensé", "ils/elles": "eurent pensé" },
    "indicatif futur antérieur": { "je": "aurai pensé", "tu": "auras pensé", "il/elle": "aura pensé", "nous": "aurons pensé", "vous": "aurez pensé", "ils/elles": "auront pensé" },
    "subjonctif présent": { "je": "que je pense", "tu": "que tu penses", "il/elle": "qu'il pense", "nous": "que nous pensions", "vous": "que vous pensiez", "ils/elles": "qu'ils pensent" },
    "subjonctif imparfait": { "je": "que je pensasse", "tu": "que tu pensasses", "il/elle": "qu'il pensât", "nous": "que nous pensassions", "vous": "que vous pensassiez", "ils/elles": "qu'ils pensassent" },
    "subjonctif passé": { "je": "que j'aie pensé", "tu": "que tu aies pensé", "il/elle": "qu'il ait pensé", "nous": "que nous ayons pensé", "vous": "que vous ayez pensé", "ils/elles": "qu'ils aient pensé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse pensé", "tu": "que tu eusses pensé", "il/elle": "qu'il eût pensé", "nous": "que nous eussions pensé", "vous": "que vous eussiez pensé", "ils/elles": "qu'ils eussent pensé" },
    "conditionnel présent": { "je": "penserais", "tu": "penserais", "il/elle": "penserait", "nous": "penserions", "vous": "penseriez", "ils/elles": "penseraient" },
    "conditionnel passé première forme": { "je": "aurais pensé", "tu": "aurais pensé", "il/elle": "aurait pensé", "nous": "aurions pensé", "vous": "auriez pensé", "ils/elles": "auraient pensé" },
    "conditionnel passé deuxième forme": { "je": "eusse pensé", "tu": "eusses pensé", "il/elle": "eût pensé", "nous": "eussions pensé", "vous": "eussiez pensé", "ils/elles": "eussent pensé" },
    "impératif présent": { "tu": "pense", "nous": "pensons", "vous": "pensez" },
    "impératif passé": { "tu": "aie pensé", "nous": "ayons pensé", "vous": "ayez pensé" },
    "infinitif présent": "penser",
    "infinitif passé": "avoir pensé",
    "participe présent": "pensant",
    "participe passé": "pensé",
    "gérondif présent": "en pensant",
    "gérondif passé": "en ayant pensé"
  }
};

const passer: Verb = {
  name: "passer",
  conjugations: {
    "indicatif présent": { "je": "passe", "tu": "passes", "il/elle": "passe", "nous": "passons", "vous": "passez", "ils/elles": "passent" },
    "indicatif imparfait": { "je": "passais", "tu": "passais", "il/elle": "passait", "nous": "passions", "vous": "passiez", "ils/elles": "passaient" },
    "indicatif passé simple": { "je": "passai", "tu": "passas", "il/elle": "passa", "nous": "passâmes", "vous": "passâtes", "ils/elles": "passèrent" },
    "indicatif futur simple": { "je": "passerai", "tu": "passeras", "il/elle": "passera", "nous": "passerons", "vous": "passerez", "ils/elles": "passeront" },
    "indicatif passé composé": { "je": "suis passé", "tu": "es passé", "il/elle": "est passé", "nous": "sommes passés", "vous": "êtes passés", "ils/elles": "sont passés" },
    "indicatif plus-que-parfait": { "je": "étais passé", "tu": "étais passé", "il/elle": "était passé", "nous": "étions passés", "vous": "étiez passés", "ils/elles": "étaient passés" },
    "indicatif passé antérieur": { "je": "fus passé", "tu": "fus passé", "il/elle": "fut passé", "nous": "fûmes passés", "vous": "fûtes passés", "ils/elles": "furent passés" },
    "indicatif futur antérieur": { "je": "serai passé", "tu": "seras passé", "il/elle": "sera passé", "nous": "serons passés", "vous": "serez passés", "ils/elles": "seront passés" },
    "subjonctif présent": { "je": "que je passe", "tu": "que tu passes", "il/elle": "qu'il passe", "nous": "que nous passions", "vous": "que vous passiez", "ils/elles": "qu'ils passent" },
    "subjonctif imparfait": { "je": "que je passasse", "tu": "que tu passasses", "il/elle": "qu'il passât", "nous": "que nous passassions", "vous": "que vous passassiez", "ils/elles": "qu'ils passassent" },
    "subjonctif passé": { "je": "que je sois passé", "tu": "que tu sois passé", "il/elle": "qu'il soit passé", "nous": "que nous soyons passés", "vous": "que vous soyez passés", "ils/elles": "qu'ils soient passés" },
    "subjonctif plus-que-parfait": { "je": "que je fusse passé", "tu": "que tu fusses passé", "il/elle": "qu'il fût passé", "nous": "que nous fussions passés", "vous": "que vous fussiez passés", "ils/elles": "qu'ils fussent passés" },
    "conditionnel présent": { "je": "passerais", "tu": "passerais", "il/elle": "passerait", "nous": "passerions", "vous": "passeriez", "ils/elles": "passeraient" },
    "conditionnel passé première forme": { "je": "serais passé", "tu": "serais passé", "il/elle": "serait passé", "nous": "serions passés", "vous": "seriez passés", "ils/elles": "seraient passés" },
    "conditionnel passé deuxième forme": { "je": "fusse passé", "tu": "fusses passé", "il/elle": "fût passé", "nous": "fussions passés", "vous": "fussiez passés", "ils/elles": "fussent passés" },
    "impératif présent": { "tu": "passe", "nous": "passons", "vous": "passez" },
    "impératif passé": { "tu": "sois passé", "nous": "soyons passés", "vous": "soyez passés" },
    "infinitif présent": "passer",
    "infinitif passé": "être passé",
    "participe présent": "passant",
    "participe passé": "passé",
    "gérondif présent": "en passant",
    "gérondif passé": "en étant passé"
  }
};

const rester: Verb = {
  name: "rester",
  conjugations: {
    "indicatif présent": { "je": "reste", "tu": "restes", "il/elle": "reste", "nous": "restons", "vous": "restez", "ils/elles": "restent" },
    "indicatif imparfait": { "je": "restais", "tu": "restais", "il/elle": "restait", "nous": "restions", "vous": "restiez", "ils/elles": "restaient" },
    "indicatif passé simple": { "je": "restai", "tu": "restas", "il/elle": "resta", "nous": "restâmes", "vous": "restâtes", "ils/elles": "restèrent" },
    "indicatif futur simple": { "je": "resterai", "tu": "resteras", "il/elle": "restera", "nous": "resterons", "vous": "resterez", "ils/elles": "resteront" },
    "indicatif passé composé": { "je": "suis resté", "tu": "es resté", "il/elle": "est resté", "nous": "sommes restés", "vous": "êtes restés", "ils/elles": "sont restés" },
    "indicatif plus-que-parfait": { "je": "étais resté", "tu": "étais resté", "il/elle": "était resté", "nous": "étions restés", "vous": "étiez restés", "ils/elles": "étaient restés" },
    "indicatif passé antérieur": { "je": "fus resté", "tu": "fus resté", "il/elle": "fut resté", "nous": "fûmes restés", "vous": "fûtes restés", "ils/elles": "furent restés" },
    "indicatif futur antérieur": { "je": "serai resté", "tu": "seras resté", "il/elle": "sera resté", "nous": "serons restés", "vous": "serez restés", "ils/elles": "seront restés" },
    "subjonctif présent": { "je": "que je reste", "tu": "que tu restes", "il/elle": "qu'il reste", "nous": "que nous restions", "vous": "que vous restiez", "ils/elles": "qu'ils restent" },
    "subjonctif imparfait": { "je": "que je restasse", "tu": "que tu restasses", "il/elle": "qu'il restât", "nous": "que nous restassions", "vous": "que vous restassiez", "ils/elles": "qu'ils restassent" },
    "subjonctif passé": { "je": "que je sois resté", "tu": "que tu sois resté", "il/elle": "qu'il soit resté", "nous": "que nous soyons restés", "vous": "que vous soyez restés", "ils/elles": "qu'ils soient restés" },
    "subjonctif plus-que-parfait": { "je": "que je fusse resté", "tu": "que tu fusses resté", "il/elle": "qu'il fût resté", "nous": "que nous fussions restés", "vous": "que vous fussiez restés", "ils/elles": "qu'ils fussent restés" },
    "conditionnel présent": { "je": "resterais", "tu": "resterais", "il/elle": "resterait", "nous": "resterions", "vous": "resteriez", "ils/elles": "resteraient" },
    "conditionnel passé première forme": { "je": "serais resté", "tu": "serais resté", "il/elle": "serait resté", "nous": "serions restés", "vous": "seriez restés", "ils/elles": "seraient restés" },
    "conditionnel passé deuxième forme": { "je": "fusse resté", "tu": "fusses resté", "il/elle": "fût resté", "nous": "fussions restés", "vous": "fussiez restés", "ils/elles": "fussent restés" },
    "impératif présent": { "tu": "reste", "nous": "restons", "vous": "restez" },
    "impératif passé": { "tu": "sois resté", "nous": "soyons restés", "vous": "soyez restés" },
    "infinitif présent": "rester",
    "infinitif passé": "être resté",
    "participe présent": "restant",
    "participe passé": "resté",
    "gérondif présent": "en restant",
    "gérondif passé": "en étant resté"
  }
};

const laisser: Verb = {
  name: "laisser",
  conjugations: {
    "indicatif présent": { "je": "laisse", "tu": "laisses", "il/elle": "laisse", "nous": "laissons", "vous": "laissez", "ils/elles": "laissent" },
    "indicatif imparfait": { "je": "laissais", "tu": "laissais", "il/elle": "laissait", "nous": "laissions", "vous": "laissiez", "ils/elles": "laissaient" },
    "indicatif passé simple": { "je": "laissai", "tu": "laissas", "il/elle": "laissa", "nous": "laissâmes", "vous": "laissâtes", "ils/elles": "laissèrent" },
    "indicatif futur simple": { "je": "laisserai", "tu": "laisseras", "il/elle": "laissera", "nous": "laisserons", "vous": "laisserez", "ils/elles": "laisseront" },
    "indicatif passé composé": { "je": "ai laissé", "tu": "as laissé", "il/elle": "a laissé", "nous": "avons laissé", "vous": "avez laissé", "ils/elles": "ont laissé" },
    "indicatif plus-que-parfait": { "je": "avais laissé", "tu": "avais laissé", "il/elle": "avait laissé", "nous": "avions laissé", "vous": "aviez laissé", "ils/elles": "avaient laissé" },
    "indicatif passé antérieur": { "je": "eus laissé", "tu": "eus laissé", "il/elle": "eut laissé", "nous": "eûmes laissé", "vous": "eûtes laissé", "ils/elles": "eurent laissé" },
    "indicatif futur antérieur": { "je": "aurai laissé", "tu": "auras laissé", "il/elle": "aura laissé", "nous": "aurons laissé", "vous": "aurez laissé", "ils/elles": "auront laissé" },
    "subjonctif présent": { "je": "que je laisse", "tu": "que tu laisses", "il/elle": "qu'il laisse", "nous": "que nous laissions", "vous": "que vous laissiez", "ils/elles": "qu'ils laissent" },
    "subjonctif imparfait": { "je": "que je laissasse", "tu": "que tu laissasses", "il/elle": "qu'il laissât", "nous": "que nous laissassions", "vous": "que vous laissassiez", "ils/elles": "qu'ils laissassent" },
    "subjonctif passé": { "je": "que j'aie laissé", "tu": "que tu aies laissé", "il/elle": "qu'il ait laissé", "nous": "que nous ayons laissé", "vous": "que vous ayez laissé", "ils/elles": "qu'ils aient laissé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse laissé", "tu": "que tu eusses laissé", "il/elle": "qu'il eût laissé", "nous": "que nous eussions laissé", "vous": "que vous eussiez laissé", "ils/elles": "qu'ils eussent laissé" },
    "conditionnel présent": { "je": "laisserais", "tu": "laisserais", "il/elle": "laisserait", "nous": "laisserions", "vous": "laisseriez", "ils/elles": "laisseraient" },
    "conditionnel passé première forme": { "je": "aurais laissé", "tu": "aurais laissé", "il/elle": "aurait laissé", "nous": "aurions laissé", "vous": "auriez laissé", "ils/elles": "auraient laissé" },
    "conditionnel passé deuxième forme": { "je": "eusse laissé", "tu": "eusses laissé", "il/elle": "eût laissé", "nous": "eussions laissé", "vous": "eussiez laissé", "ils/elles": "eussent laissé" },
    "impératif présent": { "tu": "laisse", "nous": "laissons", "vous": "laissez" },
    "impératif passé": { "tu": "aie laissé", "nous": "ayons laissé", "vous": "ayez laissé" },
    "infinitif présent": "laisser",
    "infinitif passé": "avoir laissé",
    "participe présent": "laissant",
    "participe passé": "laissé",
    "gérondif présent": "en laissant",
    "gérondif passé": "en ayant laissé"
  }
};

const commencer: Verb = {
  name: "commencer",
  conjugations: {
    "indicatif présent": { "je": "commence", "tu": "commences", "il/elle": "commence", "nous": "commençons", "vous": "commencez", "ils/elles": "commencent" },
    "indicatif imparfait": { "je": "commençais", "tu": "commençais", "il/elle": "commençait", "nous": "commencions", "vous": "commenciez", "ils/elles": "commençaient" },
    "indicatif passé simple": { "je": "commençai", "tu": "commenças", "il/elle": "commença", "nous": "commençâmes", "vous": "commençâtes", "ils/elles": "commencèrent" },
    "indicatif futur simple": { "je": "commencerai", "tu": "commenceras", "il/elle": "commencera", "nous": "commencerons", "vous": "commencerez", "ils/elles": "commenceront" },
    "indicatif passé composé": { "je": "ai commencé", "tu": "as commencé", "il/elle": "a commencé", "nous": "avons commencé", "vous": "avez commencé", "ils/elles": "ont commencé" },
    "indicatif plus-que-parfait": { "je": "avais commencé", "tu": "avais commencé", "il/elle": "avait commencé", "nous": "avions commencé", "vous": "aviez commencé", "ils/elles": "avaient commencé" },
    "indicatif passé antérieur": { "je": "eus commencé", "tu": "eus commencé", "il/elle": "eut commencé", "nous": "eûmes commencé", "vous": "eûtes commencé", "ils/elles": "eurent commencé" },
    "indicatif futur antérieur": { "je": "aurai commencé", "tu": "auras commencé", "il/elle": "aura commencé", "nous": "aurons commencé", "vous": "aurez commencé", "ils/elles": "auront commencé" },
    "subjonctif présent": { "je": "que je commence", "tu": "que tu commences", "il/elle": "qu'il commence", "nous": "que nous commencions", "vous": "que vous commenciez", "ils/elles": "qu'ils commencent" },
    "subjonctif imparfait": { "je": "que je commençasse", "tu": "que tu commençasses", "il/elle": "qu'il commençât", "nous": "que nous commençassions", "vous": "que vous commençassiez", "ils/elles": "qu'ils commençassent" },
    "subjonctif passé": { "je": "que j'aie commencé", "tu": "que tu aies commencé", "il/elle": "qu'il ait commencé", "nous": "que nous ayons commencé", "vous": "que vous ayez commencé", "ils/elles": "qu'ils aient commencé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse commencé", "tu": "que tu eusses commencé", "il/elle": "qu'il eût commencé", "nous": "que nous eussions commencé", "vous": "que vous eussiez commencé", "ils/elles": "qu'ils eussent commencé" },
    "conditionnel présent": { "je": "commencerais", "tu": "commencerais", "il/elle": "commencerait", "nous": "commencerions", "vous": "commenceriez", "ils/elles": "commenceraient" },
    "conditionnel passé première forme": { "je": "aurais commencé", "tu": "aurais commencé", "il/elle": "aurait commencé", "nous": "aurions commencé", "vous": "auriez commencé", "ils/elles": "auraient commencé" },
    "conditionnel passé deuxième forme": { "je": "eusse commencé", "tu": "eusses commencé", "il/elle": "eût commencé", "nous": "eussions commencé", "vous": "eussiez commencé", "ils/elles": "eussent commencé" },
    "impératif présent": { "tu": "commence", "nous": "commençons", "vous": "commencez" },
    "impératif passé": { "tu": "aie commencé", "nous": "ayons commencé", "vous": "ayez commencé" },
    "infinitif présent": "commencer",
    "infinitif passé": "avoir commencé",
    "participe présent": "commençant",
    "participe passé": "commencé",
    "gérondif présent": "en commençant",
    "gérondif passé": "en ayant commencé"
  }
};

const sentir: Verb = {
  name: "sentir",
  conjugations: {
    "indicatif présent": { "je": "sens", "tu": "sens", "il/elle": "sent", "nous": "sentons", "vous": "sentez", "ils/elles": "sentent" },
    "indicatif imparfait": { "je": "sentais", "tu": "sentais", "il/elle": "sentait", "nous": "sentions", "vous": "sentiez", "ils/elles": "sentaient" },
    "indicatif passé simple": { "je": "sentis", "tu": "sentis", "il/elle": "sentit", "nous": "sentîmes", "vous": "sentîtes", "ils/elles": "sentirent" },
    "indicatif futur simple": { "je": "sentirai", "tu": "sentiras", "il/elle": "sentira", "nous": "sentirons", "vous": "sentirez", "ils/elles": "sentiront" },
    "indicatif passé composé": { "je": "ai senti", "tu": "as senti", "il/elle": "a senti", "nous": "avons senti", "vous": "avez senti", "ils/elles": "ont senti" },
    "indicatif plus-que-parfait": { "je": "avais senti", "tu": "avais senti", "il/elle": "avait senti", "nous": "avions senti", "vous": "aviez senti", "ils/elles": "avaient senti" },
    "indicatif passé antérieur": { "je": "eus senti", "tu": "eus senti", "il/elle": "eut senti", "nous": "eûmes senti", "vous": "eûtes senti", "ils/elles": "eurent senti" },
    "indicatif futur antérieur": { "je": "aurai senti", "tu": "auras senti", "il/elle": "aura senti", "nous": "aurons senti", "vous": "aurez senti", "ils/elles": "auront senti" },
    "subjonctif présent": { "je": "que je sente", "tu": "que tu sentes", "il/elle": "qu'il sente", "nous": "que nous sentions", "vous": "que vous sentiez", "ils/elles": "qu'ils sentent" },
    "subjonctif imparfait": { "je": "que je sentisse", "tu": "que tu sentisses", "il/elle": "qu'il sentît", "nous": "que nous sentissions", "vous": "que vous sentissiez", "ils/elles": "qu'ils sentissent" },
    "subjonctif passé": { "je": "que j'aie senti", "tu": "que tu aies senti", "il/elle": "qu'il ait senti", "nous": "que nous ayons senti", "vous": "que vous ayez senti", "ils/elles": "qu'ils aient senti" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse senti", "tu": "que tu eusses senti", "il/elle": "qu'il eût senti", "nous": "que nous eussions senti", "vous": "que vous eussiez senti", "ils/elles": "qu'ils eussent senti" },
    "conditionnel présent": { "je": "sentirais", "tu": "sentirais", "il/elle": "sentirait", "nous": "sentirions", "vous": "sentiriez", "ils/elles": "sentiraient" },
    "conditionnel passé première forme": { "je": "aurais senti", "tu": "aurais senti", "il/elle": "aurait senti", "nous": "aurions senti", "vous": "auriez senti", "ils/elles": "auraient senti" },
    "conditionnel passé deuxième forme": { "je": "eusse senti", "tu": "eusses senti", "il/elle": "eût senti", "nous": "eussions senti", "vous": "eussiez senti", "ils/elles": "eussent senti" },
    "impératif présent": { "tu": "sens", "nous": "sentons", "vous": "sentez" },
    "impératif passé": { "tu": "aie senti", "nous": "ayons senti", "vous": "ayez senti" },
    "infinitif présent": "sentir",
    "infinitif passé": "avoir senti",
    "participe présent": "sentant",
    "participe passé": "senti",
    "gérondif présent": "en sentant",
    "gérondif passé": "en ayant senti"
  }
};

const servir: Verb = {
  name: "servir",
  conjugations: {
    "indicatif présent": { "je": "sers", "tu": "sers", "il/elle": "sert", "nous": "servons", "vous": "servez", "ils/elles": "servent" },
    "indicatif imparfait": { "je": "servais", "tu": "servais", "il/elle": "servait", "nous": "servions", "vous": "serviez", "ils/elles": "servaient" },
    "indicatif passé simple": { "je": "servis", "tu": "servis", "il/elle": "servit", "nous": "servîmes", "vous": "servîtes", "ils/elles": "servirent" },
    "indicatif futur simple": { "je": "servirai", "tu": "serviras", "il/elle": "servira", "nous": "servirons", "vous": "servirez", "ils/elles": "serviront" },
    "indicatif passé composé": { "je": "ai servi", "tu": "as servi", "il/elle": "a servi", "nous": "avons servi", "vous": "avez servi", "ils/elles": "ont servi" },
    "indicatif plus-que-parfait": { "je": "avais servi", "tu": "avais servi", "il/elle": "avait servi", "nous": "avions servi", "vous": "aviez servi", "ils/elles": "avaient servi" },
    "indicatif passé antérieur": { "je": "eus servi", "tu": "eus servi", "il/elle": "eut servi", "nous": "eûmes servi", "vous": "eûtes servi", "ils/elles": "eurent servi" },
    "indicatif futur antérieur": { "je": "aurai servi", "tu": "auras servi", "il/elle": "aura servi", "nous": "aurons servi", "vous": "aurez servi", "ils/elles": "auront servi" },
    "subjonctif présent": { "je": "que je serve", "tu": "que tu serves", "il/elle": "qu'il serve", "nous": "que nous servions", "vous": "que vous serviez", "ils/elles": "qu'ils servent" },
    "subjonctif imparfait": { "je": "que je servisse", "tu": "que tu servisses", "il/elle": "qu'il servît", "nous": "que nous servissions", "vous": "que vous servissiez", "ils/elles": "qu'ils servissent" },
    "subjonctif passé": { "je": "que j'aie servi", "tu": "que tu aies servi", "il/elle": "qu'il ait servi", "nous": "que nous ayons servi", "vous": "que vous ayez servi", "ils/elles": "qu'ils aient servi" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse servi", "tu": "que tu eusses servi", "il/elle": "qu'il eût servi", "nous": "que nous eussions servi", "vous": "que vous eussiez servi", "ils/elles": "qu'ils eussent servi" },
    "conditionnel présent": { "je": "servirais", "tu": "servirais", "il/elle": "servirait", "nous": "servirions", "vous": "serviriez", "ils/elles": "serviraient" },
    "conditionnel passé première forme": { "je": "aurais servi", "tu": "aurais servi", "il/elle": "aurait servi", "nous": "aurions servi", "vous": "auriez servi", "ils/elles": "auraient servi" },
    "conditionnel passé deuxième forme": { "je": "eusse servi", "tu": "eusses servi", "il/elle": "eût servi", "nous": "eussions servi", "vous": "eussiez servi", "ils/elles": "eussent servi" },
    "impératif présent": { "tu": "sers", "nous": "servons", "vous": "servez" },
    "impératif passé": { "tu": "aie servi", "nous": "ayons servi", "vous": "ayez servi" },
    "infinitif présent": "servir",
    "infinitif passé": "avoir servi",
    "participe présent": "servant",
    "participe passé": "servi",
    "gérondif présent": "en servant",
    "gérondif passé": "en ayant servi"
  }
};

const mourir: Verb = {
  name: "mourir",
  conjugations: {
    "indicatif présent": { "je": "meurs", "tu": "meurs", "il/elle": "meurt", "nous": "mourons", "vous": "mourez", "ils/elles": "meurent" },
    "indicatif imparfait": { "je": "mourais", "tu": "mourais", "il/elle": "mourait", "nous": "mourions", "vous": "mouriez", "ils/elles": "mouraient" },
    "indicatif passé simple": { "je": "mourus", "tu": "mourus", "il/elle": "mourut", "nous": "mourûmes", "vous": "mourûtes", "ils/elles": "moururent" },
    "indicatif futur simple": { "je": "mourrai", "tu": "mourras", "il/elle": "mourra", "nous": "mourrons", "vous": "mourrez", "ils/elles": "mourront" },
    "indicatif passé composé": { "je": "suis mort", "tu": "es mort", "il/elle": "est mort", "nous": "sommes morts", "vous": "êtes morts", "ils/elles": "sont morts" },
    "indicatif plus-que-parfait": { "je": "étais mort", "tu": "étais mort", "il/elle": "était mort", "nous": "étions morts", "vous": "étiez morts", "ils/elles": "étaient morts" },
    "indicatif passé antérieur": { "je": "fus mort", "tu": "fus mort", "il/elle": "fut mort", "nous": "fûmes morts", "vous": "fûtes morts", "ils/elles": "furent morts" },
    "indicatif futur antérieur": { "je": "serai mort", "tu": "seras mort", "il/elle": "sera mort", "nous": "serons morts", "vous": "serez morts", "ils/elles": "seront morts" },
    "subjonctif présent": { "je": "que je meure", "tu": "que tu meures", "il/elle": "qu'il meure", "nous": "que nous mourions", "vous": "que vous mouriez", "ils/elles": "qu'ils meurent" },
    "subjonctif imparfait": { "je": "que je mourusse", "tu": "que tu mourusses", "il/elle": "qu'il mourût", "nous": "que nous mourussions", "vous": "que vous mourussiez", "ils/elles": "qu'ils mourussent" },
    "subjonctif passé": { "je": "que je sois mort", "tu": "que tu sois mort", "il/elle": "qu'il soit mort", "nous": "que nous soyons morts", "vous": "que vous soyez morts", "ils/elles": "qu'ils soient morts" },
    "subjonctif plus-que-parfait": { "je": "que je fusse mort", "tu": "que tu fusses mort", "il/elle": "qu'il fût mort", "nous": "que nous fussions morts", "vous": "que vous fussiez morts", "ils/elles": "qu'ils fussent morts" },
    "conditionnel présent": { "je": "mourrais", "tu": "mourrais", "il/elle": "mourrait", "nous": "mourrions", "vous": "mourriez", "ils/elles": "mourraient" },
    "conditionnel passé première forme": { "je": "serais mort", "tu": "serais mort", "il/elle": "serait mort", "nous": "serions morts", "vous": "seriez morts", "ils/elles": "seraient morts" },
    "conditionnel passé deuxième forme": { "je": "fusse mort", "tu": "fusses mort", "il/elle": "fût mort", "nous": "fussions morts", "vous": "fussiez morts", "ils/elles": "fussent morts" },
    "impératif présent": { "tu": "meurs", "nous": "mourons", "vous": "mourez" },
    "impératif passé": { "tu": "sois mort", "nous": "soyons morts", "vous": "soyez morts" },
    "infinitif présent": "mourir",
    "infinitif passé": "être mort",
    "participe présent": "mourant",
    "participe passé": "mort",
    "gérondif présent": "en mourant",
    "gérondif passé": "en étant mort"
  }
};

const naître: Verb = {
  name: "naître",
  conjugations: {
    "indicatif présent": { "je": "nais", "tu": "nais", "il/elle": "naît", "nous": "naissons", "vous": "naissez", "ils/elles": "naissent" },
    "indicatif imparfait": { "je": "naissais", "tu": "naissais", "il/elle": "naissait", "nous": "naissions", "vous": "naissiez", "ils/elles": "naissaient" },
    "indicatif passé simple": { "je": "naquis", "tu": "naquis", "il/elle": "naquit", "nous": "naquîmes", "vous": "naquîtes", "ils/elles": "naquirent" },
    "indicatif futur simple": { "je": "naîtrai", "tu": "naîtras", "il/elle": "naîtra", "nous": "naîtrons", "vous": "naîtrez", "ils/elles": "naîtront" },
    "indicatif passé composé": { "je": "suis né", "tu": "es né", "il/elle": "est né", "nous": "sommes nés", "vous": "êtes nés", "ils/elles": "sont nés" },
    "indicatif plus-que-parfait": { "je": "étais né", "tu": "étais né", "il/elle": "était né", "nous": "étions nés", "vous": "étiez nés", "ils/elles": "étaient nés" },
    "indicatif passé antérieur": { "je": "fus né", "tu": "fus né", "il/elle": "fut né", "nous": "fûmes nés", "vous": "fûtes nés", "ils/elles": "furent nés" },
    "indicatif futur antérieur": { "je": "serai né", "tu": "seras né", "il/elle": "sera né", "nous": "serons nés", "vous": "serez nés", "ils/elles": "seront nés" },
    "subjonctif présent": { "je": "que je naisse", "tu": "que tu naisses", "il/elle": "qu'il naisse", "nous": "que nous naissions", "vous": "que vous naissiez", "ils/elles": "qu'ils naissent" },
    "subjonctif imparfait": { "je": "que je naquisse", "tu": "que tu naquisses", "il/elle": "qu'il naquît", "nous": "que nous naquissions", "vous": "que vous naquissiez", "ils/elles": "qu'ils naquissent" },
    "subjonctif passé": { "je": "que je sois né", "tu": "que tu sois né", "il/elle": "qu'il soit né", "nous": "que nous soyons nés", "vous": "que vous soyez nés", "ils/elles": "qu'ils soient nés" },
    "subjonctif plus-que-parfait": { "je": "que je fusse né", "tu": "que tu fusses né", "il/elle": "qu'il fût né", "nous": "que nous fussions nés", "vous": "que vous fussiez nés", "ils/elles": "qu'ils fussent nés" },
    "conditionnel présent": { "je": "naîtrais", "tu": "naîtrais", "il/elle": "naîtrait", "nous": "naîtrions", "vous": "naîtriez", "ils/elles": "naîtraient" },
    "conditionnel passé première forme": { "je": "serais né", "tu": "serais né", "il/elle": "serait né", "nous": "serions nés", "vous": "seriez nés", "ils/elles": "seraient nés" },
    "conditionnel passé deuxième forme": { "je": "fusse né", "tu": "fusses né", "il/elle": "fût né", "nous": "fussions nés", "vous": "fussiez nés", "ils/elles": "fussent nés" },
    "impératif présent": { "tu": "nais", "nous": "naissons", "vous": "naissez" },
    "impératif passé": { "tu": "sois né", "nous": "soyons nés", "vous": "soyez nés" },
    "infinitif présent": "naître",
    "infinitif passé": "être né",
    "participe présent": "naissant",
    "participe passé": "né",
    "gérondif présent": "en naissant",
    "gérondif passé": "en étant né"
  }
};

export default {
  croire,
  penser,
  passer,
  rester,
  laisser,
  commencer,
  sentir,
  servir,
  mourir,
  naître
};