import { Verb } from '../../verbs';

const manger: Verb = {
  name: "manger",
  conjugations: {
    "indicatif présent": { "je": "mange", "tu": "manges", "il/elle": "mange", "nous": "mangeons", "vous": "mangez", "ils/elles": "mangent" },
    "indicatif imparfait": { "je": "mangeais", "tu": "mangeais", "il/elle": "mangeait", "nous": "mangeions", "vous": "mangeiez", "ils/elles": "mangeaient" },
    "indicatif passé simple": { "je": "mangeai", "tu": "mangeas", "il/elle": "mangea", "nous": "mangeâmes", "vous": "mangeâtes", "ils/elles": "mangèrent" },
    "indicatif futur simple": { "je": "mangerai", "tu": "mangeras", "il/elle": "mangera", "nous": "mangerons", "vous": "mangerez", "ils/elles": "mangeront" },
    "indicatif passé composé": { "je": "ai mangé", "tu": "as mangé", "il/elle": "a mangé", "nous": "avons mangé", "vous": "avez mangé", "ils/elles": "ont mangé" },
    "indicatif plus-que-parfait": { "je": "avais mangé", "tu": "avais mangé", "il/elle": "avait mangé", "nous": "avions mangé", "vous": "aviez mangé", "ils/elles": "avaient mangé" },
    "indicatif passé antérieur": { "je": "eus mangé", "tu": "eus mangé", "il/elle": "eut mangé", "nous": "eûmes mangé", "vous": "eûtes mangé", "ils/elles": "eurent mangé" },
    "indicatif futur antérieur": { "je": "aurai mangé", "tu": "auras mangé", "il/elle": "aura mangé", "nous": "aurons mangé", "vous": "aurez mangé", "ils/elles": "auront mangé" },
    "subjonctif présent": { "je": "que je mange", "tu": "que tu manges", "il/elle": "qu'il mange", "nous": "que nous mangions", "vous": "que vous mangiez", "ils/elles": "qu'ils mangent" },
    "subjonctif imparfait": { "je": "que je mangeasse", "tu": "que tu mangeasses", "il/elle": "qu'il mangeât", "nous": "que nous mangeassions", "vous": "que vous mangeassiez", "ils/elles": "qu'ils mangeassent" },
    "subjonctif passé": { "je": "que j'aie mangé", "tu": "que tu aies mangé", "il/elle": "qu'il ait mangé", "nous": "que nous ayons mangé", "vous": "que vous ayez mangé", "ils/elles": "qu'ils aient mangé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse mangé", "tu": "que tu eusses mangé", "il/elle": "qu'il eût mangé", "nous": "que nous eussions mangé", "vous": "que vous eussiez mangé", "ils/elles": "qu'ils eussent mangé" },
    "conditionnel présent": { "je": "mangerais", "tu": "mangerais", "il/elle": "mangerait", "nous": "mangerions", "vous": "mangeriez", "ils/elles": "mangeraient" },
    "conditionnel passé première forme": { "je": "aurais mangé", "tu": "aurais mangé", "il/elle": "aurait mangé", "nous": "aurions mangé", "vous": "auriez mangé", "ils/elles": "auraient mangé" },
    "conditionnel passé deuxième forme": { "je": "eusse mangé", "tu": "eusses mangé", "il/elle": "eût mangé", "nous": "eussions mangé", "vous": "eussiez mangé", "ils/elles": "eussent mangé" },
    "impératif présent": { "tu": "mange", "nous": "mangeons", "vous": "mangez" },
    "impératif passé": { "tu": "aie mangé", "nous": "ayons mangé", "vous": "ayez mangé" },
    "infinitif présent": "manger",
    "infinitif passé": "avoir mangé",
    "participe présent": "mangeant",
    "participe passé": "mangé",
    "gérondif présent": "en mangeant",
    "gérondif passé": "en ayant mangé"
  }
};

const boire: Verb = {
  name: "boire",
  conjugations: {
    "indicatif présent": { "je": "bois", "tu": "bois", "il/elle": "boit", "nous": "buvons", "vous": "buvez", "ils/elles": "boivent" },
    "indicatif imparfait": { "je": "buvais", "tu": "buvais", "il/elle": "buvait", "nous": "buvions", "vous": "buviez", "ils/elles": "buvient" },
    "indicatif passé simple": { "je": "bus", "tu": "bus", "il/elle": "but", "nous": "bûmes", "vous": "bûtes", "ils/elles": "burent" },
    "indicatif futur simple": { "je": "boirai", "tu": "boiras", "il/elle": "boira", "nous": "boirons", "vous": "boirez", "ils/elles": "boiront" },
    "indicatif passé composé": { "je": "ai bu", "tu": "as bu", "il/elle": "a bu", "nous": "avons bu", "vous": "avez bu", "ils/elles": "ont bu" },
    "indicatif plus-que-parfait": { "je": "avais bu", "tu": "avais bu", "il/elle": "avait bu", "nous": "avions bu", "vous": "aviez bu", "ils/elles": "avaient bu" },
    "indicatif passé antérieur": { "je": "eus bu", "tu": "eus bu", "il/elle": "eut bu", "nous": "eûmes bu", "vous": "eûtes bu", "ils/elles": "eurent bu" },
    "indicatif futur antérieur": { "je": "aurai bu", "tu": "auras bu", "il/elle": "aura bu", "nous": "aurons bu", "vous": "aurez bu", "ils/elles": "auront bu" },
    "subjonctif présent": { "je": "que je boive", "tu": "que tu boives", "il/elle": "qu'il boive", "nous": "que nous buvions", "vous": "que vous buviez", "ils/elles": "qu'ils boivent" },
    "subjonctif imparfait": { "je": "que je buisse", "tu": "que tu buisses", "il/elle": "qu'il buît", "nous": "que nous buissions", "vous": "que vous buissiez", "ils/elles": "qu'ils buissent" },
    "subjonctif passé": { "je": "que j'aie bu", "tu": "que tu aies bu", "il/elle": "qu'il ait bu", "nous": "que nous ayons bu", "vous": "que vous ayez bu", "ils/elles": "qu'ils aient bu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse bu", "tu": "que tu eusses bu", "il/elle": "qu'il eût bu", "nous": "que nous eussions bu", "vous": "que vous eussiez bu", "ils/elles": "qu'ils eussent bu" },
    "conditionnel présent": { "je": "boirais", "tu": "boirais", "il/elle": "boirait", "nous": "boirions", "vous": "boiriez", "ils/elles": "boiraient" },
    "conditionnel passé première forme": { "je": "aurais bu", "tu": "aurais bu", "il/elle": "aurait bu", "nous": "aurions bu", "vous": "auriez bu", "ils/elles": "auraient bu" },
    "conditionnel passé deuxième forme": { "je": "eusse bu", "tu": "eusses bu", "il/elle": "eût bu", "nous": "eussions bu", "vous": "eussiez bu", "ils/elles": "eussent bu" },
    "impératif présent": { "tu": "bois", "nous": "buvons", "vous": "buvez" },
    "impératif passé": { "tu": "aie bu", "nous": "ayons bu", "vous": "ayez bu" },
    "infinitif présent": "boire",
    "infinitif passé": "avoir bu",
    "participe présent": "buvant",
    "participe passé": "bu",
    "gérondif présent": "en buvant",
    "gérondif passé": "en ayant bu"
  }
};

const vivre: Verb = {
  name: "vivre",
  conjugations: {
    "indicatif présent": { "je": "vis", "tu": "vis", "il/elle": "vit", "nous": "vivons", "vous": "vivez", "ils/elles": "vivent" },
    "indicatif imparfait": { "je": "vivais", "tu": "vivais", "il/elle": "vivait", "nous": "vivions", "vous": "viviez", "ils/elles": "vivaient" },
    "indicatif passé simple": { "je": "vécus", "tu": "vécus", "il/elle": "vécu", "nous": "vécûmes", "vous": "vécûtes", "ils/elles": "vécurent" },
    "indicatif futur simple": { "je": "vivrai", "tu": "vivras", "il/elle": "vivra", "nous": "vivrons", "vous": "vivrez", "ils/elles": "vivront" },
    "indicatif passé composé": { "je": "ai vécu", "tu": "as vécu", "il/elle": "a vécu", "nous": "avons vécu", "vous": "avez vécu", "ils/elles": "ont vécu" },
    "indicatif plus-que-parfait": { "je": "avais vécu", "tu": "avais vécu", "il/elle": "avait vécu", "nous": "avions vécu", "vous": "aviez vécu", "ils/elles": "avaient vécu" },
    "indicatif passé antérieur": { "je": "eus vécu", "tu": "eus vécu", "il/elle": "eut vécu", "nous": "eûmes vécu", "vous": "eûtes vécu", "ils/elles": "eurent vécu" },
    "indicatif futur antérieur": { "je": "aurai vécu", "tu": "auras vécu", "il/elle": "aura vécu", "nous": "aurons vécu", "vous": "aurez vécu", "ils/elles": "auront vécu" },
    "subjonctif présent": { "je": "que je vive", "tu": "que tu vives", "il/elle": "qu'il vive", "nous": "que nous vivions", "vous": "que vous viviez", "ils/elles": "qu'ils vivent" },
    "subjonctif imparfait": { "je": "que je vissse", "tu": "que tu visses", "il/elle": "qu'il vît", "nous": "que nous vissions", "vous": "que vous vissiez", "ils/elles": "qu'ils vissent" },
    "subjonctif passé": { "je": "que j'aie vécu", "tu": "que tu aies vécu", "il/elle": "qu'il ait vécu", "nous": "que nous ayons vécu", "vous": "que vous ayez vécu", "ils/elles": "qu'ils aient vécu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse vécu", "tu": "que tu eusses vécu", "il/elle": "qu'il eût vécu", "nous": "que nous eussions vécu", "vous": "que vous eussiez vécu", "ils/elles": "qu'ils eussent vécu" },
    "conditionnel présent": { "je": "vivrais", "tu": "vivrais", "il/elle": "vivrait", "nous": "vivrions", "vous": "vivriez", "ils/elles": "vivraient" },
    "conditionnel passé première forme": { "je": "aurais vécu", "tu": "aurais vécu", "il/elle": "aurait vécu", "nous": "aurions vécu", "vous": "auriez vécu", "ils/elles": "auraient vécu" },
    "conditionnel passé deuxième forme": { "je": "eusse vécu", "tu": "eusses vécu", "il/elle": "eût vécu", "nous": "eussions vécu", "vous": "eussiez vécu", "ils/elles": "eussent vécu" },
    "impératif présent": { "tu": "vis", "nous": "vivons", "vous": "vivez" },
    "impératif passé": { "tu": "aie vécu", "nous": "ayons vécu", "vous": "ayez vécu" },
    "infinitif présent": "vivre",
    "infinitif passé": "avoir vécu",
    "participe présent": "vivant",
    "participe passé": "vécu",
    "gérondif présent": "en vivant",
    "gérondif passé": "en ayant vécu"
  }
};

const aimer: Verb = {
  name: "aimer",
  conjugations: {
    "indicatif présent": { "je": "aime", "tu": "aimes", "il/elle": "aime", "nous": "aimons", "vous": "aimez", "ils/elles": "aiment" },
    "indicatif imparfait": { "je": "aimais", "tu": "aimais", "il/elle": "aimait", "nous": "aimions", "vous": "aimiez", "ils/elles": "aimaient" },
    "indicatif passé simple": { "je": "aimai", "tu": "aimas", "il/elle": "aima", "nous": "aimâmes", "vous": "aimâtes", "ils/elles": "aimèrent" },
    "indicatif futur simple": { "je": "aimerai", "tu": "aimeras", "il/elle": "aimera", "nous": "aimerons", "vous": "aimerez", "ils/elles": "aimeront" },
    "indicatif passé composé": { "je": "ai aimé", "tu": "as aimé", "il/elle": "a aimé", "nous": "avons aimé", "vous": "avez aimé", "ils/elles": "ont aimé" },
    "indicatif plus-que-parfait": { "je": "avais aimé", "tu": "avais aimé", "il/elle": "avait aimé", "nous": "avions aimé", "vous": "aviez aimé", "ils/elles": "avaient aimé" },
    "indicatif passé antérieur": { "je": "eus aimé", "tu": "eus aimé", "il/elle": "eut aimé", "nous": "eûmes aimé", "vous": "eûtes aimé", "ils/elles": "eurent aimé" },
    "indicatif futur antérieur": { "je": "aurai aimé", "tu": "auras aimé", "il/elle": "aura aimé", "nous": "aurons aimé", "vous": "aurez aimé", "ils/elles": "auront aimé" },
    "subjonctif présent": { "je": "que je aime", "tu": "que tu aimes", "il/elle": "qu'il aime", "nous": "que nous aimions", "vous": "que vous aimiez", "ils/elles": "qu'ils aiment" },
    "subjonctif imparfait": { "je": "que je aimasse", "tu": "que tu aimasses", "il/elle": "qu'il aimât", "nous": "que nous aimassions", "vous": "que vous aimassiez", "ils/elles": "qu'ils aimassent" },
    "subjonctif passé": { "je": "que j'aie aimé", "tu": "que tu aies aimé", "il/elle": "qu'il ait aimé", "nous": "que nous ayons aimé", "vous": "que vous ayez aimé", "ils/elles": "qu'ils aient aimé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse aimé", "tu": "que tu eusses aimé", "il/elle": "qu'il eût aimé", "nous": "que nous eussions aimé", "vous": "que vous eussiez aimé", "ils/elles": "qu'ils eussent aimé" },
    "conditionnel présent": { "je": "aimerais", "tu": "aimerais", "il/elle": "aimerait", "nous": "aimerions", "vous": "aimeriez", "ils/elles": "aimeraient" },
    "conditionnel passé première forme": { "je": "aurais aimé", "tu": "aurais aimé", "il/elle": "aurait aimé", "nous": "aurions aimé", "vous": "auriez aimé", "ils/elles": "auraient aimé" },
    "conditionnel passé deuxième forme": { "je": "eusse aimé", "tu": "eusses aimé", "il/elle": "eût aimé", "nous": "eussions aimé", "vous": "eussiez aimé", "ils/elles": "eussent aimé" },
    "impératif présent": { "tu": "aime", "nous": "aimons", "vous": "aimez" },
    "impératif passé": { "tu": "aie aimé", "nous": "ayons aimé", "vous": "ayez aimé" },
    "infinitif présent": "aimer",
    "infinitif passé": "avoir aimé",
    "participe présent": "aimant",
    "participe passé": "aimé",
    "gérondif présent": "en aimant",
    "gérondif passé": "en ayant aimé"
  }
};

const travailler: Verb = {
  name: "travailler",
  conjugations: {
    "indicatif présent": { "je": "travaille", "tu": "travailles", "il/elle": "travaille", "nous": "travaillons", "vous": "travaillez", "ils/elles": "travaillent" },
    "indicatif imparfait": { "je": "travaillais", "tu": "travaillais", "il/elle": "travaillait", "nous": "travaillions", "vous": "travailliez", "ils/elles": "travaillaient" },
    "indicatif passé simple": { "je": "travailai", "tu": "travailas", "il/elle": "travaille", "nous": "travailâmes", "vous": "travailâtes", "ils/elles": "travaillèrent" },
    "indicatif futur simple": { "je": "travaillerai", "tu": "travailleras", "il/elle": "travaillera", "nous": "travaillerons", "vous": "travaillerez", "ils/elles": "travailleront" },
    "indicatif passé composé": { "je": "ai travaillé", "tu": "as travaillé", "il/elle": "a travaillé", "nous": "avons travaillé", "vous": "avez travaillé", "ils/elles": "ont travaillé" },
    "indicatif plus-que-parfait": { "je": "avais travaillé", "tu": "avais travaillé", "il/elle": "avait travaillé", "nous": "avions travaillé", "vous": "aviez travaillé", "ils/elles": "avaient travaillé" },
    "indicatif passé antérieur": { "je": "eus travaillé", "tu": "eus travaillé", "il/elle": "eut travaillé", "nous": "eûmes travaillé", "vous": "eûtes travaillé", "ils/elles": "eurent travaillé" },
    "indicatif futur antérieur": { "je": "aurai travaillé", "tu": "auras travaillé", "il/elle": "aura travaillé", "nous": "aurons travaillé", "vous": "aurez travaillé", "ils/elles": "auront travaillé" },
    "subjonctif présent": { "je": "que je travaille", "tu": "que tu travailles", "il/elle": "qu'il travaille", "nous": "que nous travaillions", "vous": "que vous travailliez", "ils/elles": "qu'ils travaillent" },
    "subjonctif imparfait": { "je": "que je travaillasse", "tu": "que tu travaillasses", "il/elle": "qu'il travaillât", "nous": "que nous travaillions", "vous": "que vous travaillassiez", "ils/elles": "qu'ils travaillassent" },
    "subjonctif passé": { "je": "que j'aie travaillé", "tu": "que tu aies travaillé", "il/elle": "qu'il ait travaillé", "nous": "que nous ayons travaillé", "vous": "que vous ayez travaillé", "ils/elles": "qu'ils aient travaillé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse travaillé", "tu": "que tu eusses travaillé", "il/elle": "qu'il eût travaillé", "nous": "que nous eussions travaillé", "vous": "que vous eussiez travaillé", "ils/elles": "qu'ils eussent travaillé" },
    "conditionnel présent": { "je": "travaillerais", "tu": "travaillerais", "il/elle": "travaillerait", "nous": "travaillerions", "vous": "travailleriez", "ils/elles": "travailleraient" },
    "conditionnel passé première forme": { "je": "aurais travaillé", "tu": "aurais travaillé", "il/elle": "aurait travaillé", "nous": "aurions travaillé", "vous": "auriez travaillé", "ils/elles": "auraient travaillé" },
    "conditionnel passé deuxième forme": { "je": "eusse travaillé", "tu": "eusses travaillé", "il/elle": "eût travaillé", "nous": "eussions travaillé", "vous": "eussiez travaillé", "ils/elles": "eussent travaillé" },
    "impératif présent": { "tu": "travaille", "nous": "travaillons", "vous": "travaillez" },
    "impératif passé": { "tu": "aie travaillé", "nous": "ayons travaillé", "vous": "ayez travaillé" },
    "infinitif présent": "travailler",
    "infinitif passé": "avoir travaillé",
    "participe présent": "travaillant",
    "participe passé": "travaillé",
    "gérondif présent": "en travaillant",
    "gérondif passé": "en ayant travaillé"
  }
};

const parler: Verb = {
  name: "parler",
  conjugations: {
    "indicatif présent": { "je": "parle", "tu": "parles", "il/elle": "parle", "nous": "parlons", "vous": "parlez", "ils/elles": "parlent" },
    "indicatif imparfait": { "je": "parlais", "tu": "parlais", "il/elle": "parlait", "nous": "parlions", "vous": "parliez", "ils/elles": "parlaient" },
    "indicatif passé simple": { "je": "parlai", "tu": "parlas", "il/elle": "parla", "nous": "parlâmes", "vous": "parlâtes", "ils/elles": "parlèrent" },
    "indicatif futur simple": { "je": "parlerai", "tu": "parleras", "il/elle": "parlera", "nous": "parlerons", "vous": "parlerez", "ils/elles": "parleront" },
    "indicatif passé composé": { "je": "ai parlé", "tu": "as parlé", "il/elle": "a parlé", "nous": "avons parlé", "vous": "avez parlé", "ils/elles": "ont parlé" },
    "indicatif plus-que-parfait": { "je": "avais parlé", "tu": "avais parlé", "il/elle": "avait parlé", "nous": "avions parlé", "vous": "aviez parlé", "ils/elles": "avaient parlé" },
    "indicatif passé antérieur": { "je": "eus parlé", "tu": "eus parlé", "il/elle": "eut parlé", "nous": "eûmes parlé", "vous": "eûtes parlé", "ils/elles": "eurent parlé" },
    "indicatif futur antérieur": { "je": "aurai parlé", "tu": "auras parlé", "il/elle": "aura parlé", "nous": "aurons parlé", "vous": "aurez parlé", "ils/elles": "auront parlé" },
    "subjonctif présent": { "je": "que je parle", "tu": "que tu parles", "il/elle": "qu'il parle", "nous": "que nous parlions", "vous": "que vous parliez", "ils/elles": "qu'ils parlent" },
    "subjonctif imparfait": { "je": "que je parlasse", "tu": "que tu parlasses", "il/elle": "qu'il parlât", "nous": "que nous parlions", "vous": "que vous parlassiez", "ils/elles": "qu'ils parlassent" },
    "subjonctif passé": { "je": "que j'aie parlé", "tu": "que tu aies parlé", "il/elle": "qu'il ait parlé", "nous": "que nous ayons parlé", "vous": "que vous ayez parlé", "ils/elles": "qu'ils aient parlé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse parlé", "tu": "que tu eusses parlé", "il/elle": "qu'il eût parlé", "nous": "que nous eussions parlé", "vous": "que vous eussiez parlé", "ils/elles": "qu'ils eussent parlé" },
    "conditionnel présent": { "je": "parlerais", "tu": "parlerais", "il/elle": "parlerait", "nous": "parlerions", "vous": "parleriez", "ils/elles": "parleraient" },
    "conditionnel passé première forme": { "je": "aurais parlé", "tu": "aurais parlé", "il/elle": "aurait parlé", "nous": "aurions parlé", "vous": "auriez parlé", "ils/elles": "auraient parlé" },
    "conditionnel passé deuxième forme": { "je": "eusse parlé", "tu": "eusses parlé", "il/elle": "eût parlé", "nous": "eussions parlé", "vous": "eussiez parlé", "ils/elles": "eussent parlé" },
    "impératif présent": { "tu": "parle", "nous": "parlons", "vous": "parlez" },
    "impératif passé": { "tu": "aie parlé", "nous": "ayons parlé", "vous": "ayez parlé" },
    "infinitif présent": "parler",
    "infinitif passé": "avoir parlé",
    "participe présent": "parlant",
    "participe passé": "parlé",
    "gérondif présent": "en parlant",
    "gérondif passé": "en ayant parlé"
  }
};

const étudier: Verb = {
  name: "étudier",
  conjugations: {
    "indicatif présent": { "je": "étudie", "tu": "étudies", "il/elle": "étudie", "nous": "étudions", "vous": "étudiez", "ils/elles": "étudient" },
    "indicatif imparfait": { "je": "étudiais", "tu": "étudiais", "il/elle": "étudiait", "nous": "étudiions", "vous": "étudiiez", "ils/elles": "étudiaient" },
    "indicatif passé simple": { "je": "étudiai", "tu": "étudias", "il/elle": "étudia", "nous": "étudiammes", "vous": "étudiamtes", "ils/elles": "étudièrent" },
    "indicatif futur simple": { "je": "étudierai", "tu": "étudieras", "il/elle": "étudiera", "nous": "étudierons", "vous": "étudierez", "ils/elles": "étudieront" },
    "indicatif passé composé": { "je": "ai étudié", "tu": "as étudié", "il/elle": "a étudié", "nous": "avons étudié", "vous": "avez étudié", "ils/elles": "ont étudié" },
    "indicatif plus-que-parfait": { "je": "avais étudié", "tu": "avais étudié", "il/elle": "avait étudié", "nous": "avions étudié", "vous": "aviez étudié", "ils/elles": "avaient étudié" },
    "indicatif passé antérieur": { "je": "eus étudié", "tu": "eus étudié", "il/elle": "eut étudié", "nous": "eûmes étudié", "vous": "eûtes étudié", "ils/elles": "eurent étudié" },
    "indicatif futur antérieur": { "je": "aurai étudié", "tu": "auras étudié", "il/elle": "aura étudié", "nous": "aurons étudié", "vous": "aurez étudié", "ils/elles": "auront étudié" },
    "subjonctif présent": { "je": "que je étudie", "tu": "que tu étudies", "il/elle": "qu'il étudie", "nous": "que nous étudions", "vous": "que vous étudiez", "ils/elles": "qu'ils étudient" },
    "subjonctif imparfait": { "je": "que je étudiasse", "tu": "que tu étudiasse", "il/elle": "qu'il étudiât", "nous": "que nous étudiassions", "vous": "que vous étudiassiez", "ils/elles": "qu'ils étudiassent" },
    "subjonctif passé": { "je": "que j'aie étudié", "tu": "que tu aies étudié", "il/elle": "qu'il ait étudié", "nous": "que nous ayons étudié", "vous": "que vous ayez étudié", "ils/elles": "qu'ils aient étudié" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse étudié", "tu": "que tu eusses étudié", "il/elle": "qu'il eût étudié", "nous": "que nous eussions étudié", "vous": "que vous eussiez étudié", "ils/elles": "qu'ils eussent étudié" },
    "conditionnel présent": { "je": "étudierais", "tu": "étudierais", "il/elle": "étudierait", "nous": "étudierions", "vous": "étudieriez", "ils/elles": "étudieraient" },
    "conditionnel passé première forme": { "je": "aurais étudié", "tu": "aurais étudié", "il/elle": "aurait étudié", "nous": "aurions étudié", "vous": "auriez étudié", "ils/elles": "auraient étudié" },
    "conditionnel passé deuxième forme": { "je": "eusse étudié", "tu": "eusses étudié", "il/elle": "eût étudié", "nous": "eussions étudié", "vous": "eussiez étudié", "ils/elles": "eussent étudié" },
    "impératif présent": { "tu": "étudie", "nous": "étudions", "vous": "étudiez" },
    "impératif passé": { "tu": "aie étudié", "nous": "ayons étudié", "vous": "ayez étudié" },
    "infinitif présent": "étudier",
    "infinitif passé": "avoir étudié",
    "participe présent": "étudiant",
    "participe passé": "étudié",
    "gérondif présent": "en étudiant",
    "gérondif passé": "en ayant étudié"
  }
};

const sortir: Verb = {
  name: "sortir",
  conjugations: {
    "indicatif présent": { "je": "sors", "tu": "sors", "il/elle": "sort", "nous": "sortons", "vous": "sortez", "ils/elles": "sortent" },
    "indicatif imparfait": { "je": "sortais", "tu": "sortais", "il/elle": "sortait", "nous": "sortions", "vous": "sortiez", "ils/elles": "sortaient" },
    "indicatif passé simple": { "je": "sortis", "tu": "sortis", "il/elle": "sortit", "nous": "sortîmes", "vous": "sortîtes", "ils/elles": "sortirent" },
    "indicatif futur simple": { "je": "sortirai", "tu": "sortiras", "il/elle": "sortira", "nous": "sortirons", "vous": "sortirez", "ils/elles": "sortiront" },
    "indicatif passé composé": { "je": "suis sorti", "tu": "es sorti", "il/elle": "est sorti", "nous": "sommes sortis", "vous": "êtes sortis", "ils/elles": "sont sortis" },
    "indicatif plus-que-parfait": { "je": "étais sorti", "tu": "étais sorti", "il/elle": "était sorti", "nous": "étions sortis", "vous": "étiez sortis", "ils/elles": "étaient sortis" },
    "indicatif passé antérieur": { "je": "fus sorti", "tu": "fus sorti", "il/elle": "fut sorti", "nous": "fûmes sortis", "vous": "fûtes sortis", "ils/elles": "furent sortis" },
    "indicatif futur antérieur": { "je": "serai sorti", "tu": "seras sorti", "il/elle": "sera sorti", "nous": "serons sortis", "vous": "serez sortis", "ils/elles": "seront sortis" },
    "subjonctif présent": { "je": "que je sorte", "tu": "que tu sortes", "il/elle": "qu'il sorte", "nous": "que nous sortions", "vous": "que vous sortiez", "ils/elles": "qu'ils sortent" },
    "subjonctif imparfait": { "je": "que je sortisse", "tu": "que tu sortisses", "il/elle": "qu'il sortît", "nous": "que nous sortissions", "vous": "que vous sortissiez", "ils/elles": "qu'ils sortissent" },
    "subjonctif passé": { "je": "que je sois sorti", "tu": "que tu sois sorti", "il/elle": "qu'il soit sorti", "nous": "que nous soyons sortis", "vous": "que vous soyez sortis", "ils/elles": "qu'ils soient sortis" },
    "subjonctif plus-que-parfait": { "je": "que je fusse sorti", "tu": "que tu fusses sorti", "il/elle": "qu'il fût sorti", "nous": "que nous fussions sortis", "vous": "que vous fussiez sortis", "ils/elles": "qu'ils fussent sortis" },
    "conditionnel présent": { "je": "sortirais", "tu": "sortirais", "il/elle": "sortirait", "nous": "sortirions", "vous": "sortiriez", "ils/elles": "sortiraient" },
    "conditionnel passé première forme": { "je": "serais sorti", "tu": "serais sorti", "il/elle": "serait sorti", "nous": "serions sortis", "vous": "seriez sortis", "ils/elles": "seraient sortis" },
    "conditionnel passé deuxième forme": { "je": "fusse sorti", "tu": "fusses sorti", "il/elle": "fût sorti", "nous": "fussions sortis", "vous": "fussiez sortis", "ils/elles": "fussent sortis" },
    "impératif présent": { "tu": "sors", "nous": "sortons", "vous": "sortez" },
    "impératif passé": { "tu": "sois sorti", "nous": "soyons sortis", "vous": "soyez sortis" },
    "infinitif présent": "sortir",
    "infinitif passé": "être sorti",
    "participe présent": "sortant",
    "participe passé": "sorti",
    "gérondif présent": "en sortant",
    "gérondif passé": "en étant sorti"
  }
};

const lire: Verb = {
  name: "lire",
  conjugations: {
    "indicatif présent": { "je": "lis", "tu": "lis", "il/elle": "lit", "nous": "lisons", "vous": "lisez", "ils/elles": "lisent" },
    "indicatif imparfait": { "je": "lisais", "tu": "lisais", "il/elle": "lisait", "nous": "lisions", "vous": "lisiez", "ils/elles": "lisaient" },
    "indicatif passé simple": { "je": "lus", "tu": "lus", "il/elle": "lut", "nous": "lûmes", "vous": "lûtes", "ils/elles": "lurent" },
    "indicatif futur simple": { "je": "lirai", "tu": "liras", "il/elle": "lira", "nous": "lirons", "vous": "lirez", "ils/elles": "liront" },
    "indicatif passé composé": { "je": "ai lu", "tu": "as lu", "il/elle": "a lu", "nous": "avons lu", "vous": "avez lu", "ils/elles": "ont lu" },
    "indicatif plus-que-parfait": { "je": "avais lu", "tu": "avais lu", "il/elle": "avait lu", "nous": "avions lu", "vous": "aviez lu", "ils/elles": "avaient lu" },
    "indicatif passé antérieur": { "je": "eus lu", "tu": "eus lu", "il/elle": "eut lu", "nous": "eûmes lu", "vous": "eûtes lu", "ils/elles": "eurent lu" },
    "indicatif futur antérieur": { "je": "aurai lu", "tu": "auras lu", "il/elle": "aura lu", "nous": "aurons lu", "vous": "aurez lu", "ils/elles": "auront lu" },
    "subjonctif présent": { "je": "que je lise", "tu": "que tu lises", "il/elle": "qu'il lise", "nous": "que nous lisions", "vous": "que vous lisiez", "ils/elles": "qu'ils lisent" },
    "subjonctif imparfait": { "je": "que je lisse", "tu": "que tu lisses", "il/elle": "qu'il lît", "nous": "que nous lissions", "vous": "que vous lisiez", "ils/elles": "qu'ils lisent" },
    "subjonctif passé": { "je": "que j'aie lu", "tu": "que tu aies lu", "il/elle": "qu'il ait lu", "nous": "que nous ayons lu", "vous": "que vous ayez lu", "ils/elles": "qu'ils aient lu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse lu", "tu": "que tu eusses lu", "il/elle": "qu'il eût lu", "nous": "que nous eussions lu", "vous": "que vous eussiez lu", "ils/elles": "qu'ils eussent lu" },
    "conditionnel présent": { "je": "lirais", "tu": "lirais", "il/elle": "lirait", "nous": "lirions", "vous": "liriez", "ils/elles": "liraient" },
    "conditionnel passé première forme": { "je": "aurais lu", "tu": "aurais lu", "il/elle": "aurait lu", "nous": "aurions lu", "vous": "auriez lu", "ils/elles": "auraient lu" },
    "conditionnel passé deuxième forme": { "je": "eusse lu", "tu": "eusses lu", "il/elle": "eût lu", "nous": "eussions lu", "vous": "eussiez lu", "ils/elles": "eussent lu" },
    "impératif présent": { "tu": "lis", "nous": "lisons", "vous": "lisez" },
    "impératif passé": { "tu": "aie lu", "nous": "ayons lu", "vous": "ayez lu" },
    "infinitif présent": "lire",
    "infinitif passé": "avoir lu",
    "participe présent": "lisant",
    "participe passé": "lu",
    "gérondif présent": "en lisant",
    "gérondif passé": "en ayant lu"
  }
};

const écrire: Verb = {
  name: "écrire",
  conjugations: {
    "indicatif présent": { "je": "écris", "tu": "écris", "il/elle": "écrit", "nous": "écrivons", "vous": "écrivez", "ils/elles": "écrivent" },
    "indicatif imparfait": { "je": "écrivais", "tu": "écrivais", "il/elle": "écrivait", "nous": "écrivions", "vous": "écriviez", "ils/elles": "écrivaient" },
    "indicatif passé simple": { "je": "écrivis", "tu": "écrivis", "il/elle": "écrivit", "nous": "écrivîmes", "vous": "écrivîtes", "ils/elles": "écrivirent" },
    "indicatif futur simple": { "je": "écrirai", "tu": "écriras", "il/elle": "écrira", "nous": "écrirons", "vous": "écrirez", "ils/elles": "écriront" },
    "indicatif passé composé": { "je": "ai écrit", "tu": "as écrit", "il/elle": "a écrit", "nous": "avons écrit", "vous": "avez écrit", "ils/elles": "ont écrit" },
    "indicatif plus-que-parfait": { "je": "avais écrit", "tu": "avais écrit", "il/elle": "avait écrit", "nous": "avions écrit", "vous": "aviez écrit", "ils/elles": "avaient écrit" },
    "indicatif passé antérieur": { "je": "eus écrit", "tu": "eus écrit", "il/elle": "eut écrit", "nous": "eûmes écrit", "vous": "eûtes écrit", "ils/elles": "eurent écrit" },
    "indicatif futur antérieur": { "je": "aurai écrit", "tu": "auras écrit", "il/elle": "aura écrit", "nous": "aurons écrit", "vous": "aurez écrit", "ils/elles": "auront écrit" },
    "subjonctif présent": { "je": "que je écrive", "tu": "que tu écrives", "il/elle": "qu'il écrive", "nous": "que nous écrivions", "vous": "que vous écriviez", "ils/elles": "qu'ils écrivent" },
    "subjonctif imparfait": { "je": "que je écrivasse", "tu": "que tu écrivasses", "il/elle": "qu'il écrivât", "nous": "que nous écrivassions", "vous": "que vous écrivassiez", "ils/elles": "qu'ils écrivassent" },
    "subjonctif passé": { "je": "que j'aie écrit", "tu": "que tu aies écrit", "il/elle": "qu'il ait écrit", "nous": "que nous ayons écrit", "vous": "que vous ayez écrit", "ils/elles": "qu'ils aient écrit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse écrit", "tu": "que tu eusses écrit", "il/elle": "qu'il eût écrit", "nous": "que nous eussions écrit", "vous": "que vous eussiez écrit", "ils/elles": "qu'ils eussent écrit" },
    "conditionnel présent": { "je": "écrirais", "tu": "écrirais", "il/elle": "écrirait", "nous": "écririons", "vous": "écririez", "ils/elles": "écriraient" },
    "conditionnel passé première forme": { "je": "aurais écrit", "tu": "aurais écrit", "il/elle": "aurait écrit", "nous": "aurions écrit", "vous": "auriez écrit", "ils/elles": "auraient écrit" },
    "conditionnel passé deuxième forme": { "je": "eusse écrit", "tu": "eusses écrit", "il/elle": "eût écrit", "nous": "eussions écrit", "vous": "eussiez écrit", "ils/elles": "eussent écrit" },
    "impératif présent": { "tu": "écris", "nous": "écrivons", "vous": "écrivez" },
    "impératif passé": { "tu": "aie écrit", "nous": "ayons écrit", "vous": "ayez écrit" },
    "infinitif présent": "écrire",
    "infinitif passé": "avoir écrit",
    "participe présent": "écrivant",
    "participe passé": "écrit",
    "gérondif présent": "en écrivant",
    "gérondif passé": "en ayant écrit"
  }
};

export default {
  manger,
  boire,
  vivre,
  aimer,
  travailler,
  parler,
  étudier,
  sortir,
  lire,
  écrire
};