import { Verb } from '../../verbs';

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
    "subjonctif présent": { "je": "que j'aime", "tu": "que tu aimes", "il/elle": "qu'il aime", "nous": "que nous aimions", "vous": "que vous aimiez", "ils/elles": "qu'ils aiment" },
    "subjonctif imparfait": { "je": "que j'aimasse", "tu": "que tu aimasses", "il/elle": "qu'il aimât", "nous": "que nous aimassions", "vous": "que vous aimassiez", "ils/elles": "qu'ils aimassent" },
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

const jouer: Verb = {
  name: "jouer",
  conjugations: {
    "indicatif présent": { "je": "joue", "tu": "joues", "il/elle": "joue", "nous": "jouons", "vous": "jouez", "ils/elles": "jouent" },
    "indicatif imparfait": { "je": "jouais", "tu": "jouais", "il/elle": "jouait", "nous": "jouions", "vous": "jouiez", "ils/elles": "jouaient" },
    "indicatif passé simple": { "je": "jouai", "tu": "jouas", "il/elle": "joua", "nous": "jouâmes", "vous": "jouâtes", "ils/elles": "jouèrent" },
    "indicatif futur simple": { "je": "jouerai", "tu": "joueras", "il/elle": "jouera", "nous": "jouerons", "vous": "jouerez", "ils/elles": "joueront" },
    "indicatif passé composé": { "je": "ai joué", "tu": "as joué", "il/elle": "a joué", "nous": "avons joué", "vous": "avez joué", "ils/elles": "ont joué" },
    "indicatif plus-que-parfait": { "je": "avais joué", "tu": "avais joué", "il/elle": "avait joué", "nous": "avions joué", "vous": "aviez joué", "ils/elles": "avaient joué" },
    "indicatif passé antérieur": { "je": "eus joué", "tu": "eus joué", "il/elle": "eut joué", "nous": "eûmes joué", "vous": "eûtes joué", "ils/elles": "eurent joué" },
    "indicatif futur antérieur": { "je": "aurai joué", "tu": "auras joué", "il/elle": "aura joué", "nous": "aurons joué", "vous": "aurez joué", "ils/elles": "auront joué" },
    "subjonctif présent": { "je": "que je joue", "tu": "que tu joues", "il/elle": "qu'il joue", "nous": "que nous jouions", "vous": "que vous jouiez", "ils/elles": "qu'ils jouent" },
    "subjonctif imparfait": { "je": "que je jouasse", "tu": "que tu jouasses", "il/elle": "qu'il jouât", "nous": "que nous jouassions", "vous": "que vous jouassiez", "ils/elles": "qu'ils jouassent" },
    "subjonctif passé": { "je": "que j'aie joué", "tu": "que tu aies joué", "il/elle": "qu'il ait joué", "nous": "que nous ayons joué", "vous": "que vous ayez joué", "ils/elles": "qu'ils aient joué" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse joué", "tu": "que tu eusses joué", "il/elle": "qu'il eût joué", "nous": "que nous eussions joué", "vous": "que vous eussiez joué", "ils/elles": "qu'ils eussent joué" },
    "conditionnel présent": { "je": "jouerais", "tu": "jouerais", "il/elle": "jouerait", "nous": "jouerions", "vous": "joueriez", "ils/elles": "joueraient" },
    "conditionnel passé première forme": { "je": "aurais joué", "tu": "aurais joué", "il/elle": "aurait joué", "nous": "aurions joué", "vous": "auriez joué", "ils/elles": "auraient joué" },
    "conditionnel passé deuxième forme": { "je": "eusse joué", "tu": "eusses joué", "il/elle": "eût joué", "nous": "eussions joué", "vous": "eussiez joué", "ils/elles": "eussent joué" },
    "impératif présent": { "tu": "joue", "nous": "jouons", "vous": "jouez" },
    "impératif passé": { "tu": "aie joué", "nous": "ayons joué", "vous": "ayez joué" },
    "infinitif présent": "jouer",
    "infinitif passé": "avoir joué",
    "participe présent": "jouant",
    "participe passé": "joué",
    "gérondif présent": "en jouant",
    "gérondif passé": "en ayant joué"
  }
};

const chanter: Verb = {
  name: "chanter",
  conjugations: {
    "indicatif présent": { "je": "chante", "tu": "chantes", "il/elle": "chante", "nous": "chantons", "vous": "chantez", "ils/elles": "chantent" },
    "indicatif imparfait": { "je": "chantais", "tu": "chantais", "il/elle": "chantait", "nous": "chantions", "vous": "chantiez", "ils/elles": "chantaient" },
    "indicatif passé simple": { "je": "chantai", "tu": "chantas", "il/elle": "chanta", "nous": "chantâmes", "vous": "chantâtes", "ils/elles": "chantèrent" },
    "indicatif futur simple": { "je": "chanterai", "tu": "chanteras", "il/elle": "chantera", "nous": "chanterons", "vous": "chanterez", "ils/elles": "chanteront" },
    "indicatif passé composé": { "je": "ai chanté", "tu": "as chanté", "il/elle": "a chanté", "nous": "avons chanté", "vous": "avez chanté", "ils/elles": "ont chanté" },
    "indicatif plus-que-parfait": { "je": "avais chanté", "tu": "avais chanté", "il/elle": "avait chanté", "nous": "avions chanté", "vous": "aviez chanté", "ils/elles": "avaient chanté" },
    "indicatif passé antérieur": { "je": "eus chanté", "tu": "eus chanté", "il/elle": "eut chanté", "nous": "eûmes chanté", "vous": "eûtes chanté", "ils/elles": "eurent chanté" },
    "indicatif futur antérieur": { "je": "aurai chanté", "tu": "auras chanté", "il/elle": "aura chanté", "nous": "aurons chanté", "vous": "aurez chanté", "ils/elles": "auront chanté" },
    "subjonctif présent": { "je": "que je chante", "tu": "que tu chantes", "il/elle": "qu'il chante", "nous": "que nous chantions", "vous": "que vous chantiez", "ils/elles": "qu'ils chantent" },
    "subjonctif imparfait": { "je": "que je chantasse", "tu": "que tu chantasses", "il/elle": "qu'il chantât", "nous": "que nous chantassions", "vous": "que vous chantassiez", "ils/elles": "qu'ils chantassent" },
    "subjonctif passé": { "je": "que j'aie chanté", "tu": "que tu aies chanté", "il/elle": "qu'il ait chanté", "nous": "que nous ayons chanté", "vous": "que vous ayez chanté", "ils/elles": "qu'ils aient chanté" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse chanté", "tu": "que tu eusses chanté", "il/elle": "qu'il eût chanté", "nous": "que nous eussions chanté", "vous": "que vous eussiez chanté", "ils/elles": "qu'ils eussent chanté" },
    "conditionnel présent": { "je": "chanterais", "tu": "chanterais", "il/elle": "chanterait", "nous": "chanterions", "vous": "chanteriez", "ils/elles": "chanteraient" },
    "conditionnel passé première forme": { "je": "aurais chanté", "tu": "aurais chanté", "il/elle": "aurait chanté", "nous": "aurions chanté", "vous": "auriez chanté", "ils/elles": "auraient chanté" },
    "conditionnel passé deuxième forme": { "je": "eusse chanté", "tu": "eusses chanté", "il/elle": "eût chanté", "nous": "eussions chanté", "vous": "eussiez chanté", "ils/elles": "eussent chanté" },
    "impératif présent": { "tu": "chante", "nous": "chantons", "vous": "chantez" },
    "impératif passé": { "tu": "aie chanté", "nous": "ayons chanté", "vous": "ayez chanté" },
    "infinitif présent": "chanter",
    "infinitif passé": "avoir chanté",
    "participe présent": "chantant",
    "participe passé": "chanté",
    "gérondif présent": "en chantant",
    "gérondif passé": "en ayant chanté"
  }
};

const danser: Verb = {
  name: "danser",
  conjugations: {
    "indicatif présent": { "je": "danse", "tu": "danses", "il/elle": "danse", "nous": "dansons", "vous": "dansez", "ils/elles": "dansent" },
    "indicatif imparfait": { "je": "dansais", "tu": "dansais", "il/elle": "dansait", "nous": "dansions", "vous": "dansiez", "ils/elles": "dansaient" },
    "indicatif passé simple": { "je": "dansai", "tu": "dansas", "il/elle": "dansa", "nous": "dansâmes", "vous": "dansâtes", "ils/elles": "dansèrent" },
    "indicatif futur simple": { "je": "danserai", "tu": "danseras", "il/elle": "dansera", "nous": "danserons", "vous": "danserez", "ils/elles": "danseront" },
    "indicatif passé composé": { "je": "ai dansé", "tu": "as dansé", "il/elle": "a dansé", "nous": "avons dansé", "vous": "avez dansé", "ils/elles": "ont dansé" },
    "indicatif plus-que-parfait": { "je": "avais dansé", "tu": "avais dansé", "il/elle": "avait dansé", "nous": "avions dansé", "vous": "aviez dansé", "ils/elles": "avaient dansé" },
    "indicatif passé antérieur": { "je": "eus dansé", "tu": "eus dansé", "il/elle": "eut dansé", "nous": "eûmes dansé", "vous": "eûtes dansé", "ils/elles": "eurent dansé" },
    "indicatif futur antérieur": { "je": "aurai dansé", "tu": "auras dansé", "il/elle": "aura dansé", "nous": "aurons dansé", "vous": "aurez dansé", "ils/elles": "auront dansé" },
    "subjonctif présent": { "je": "que je danse", "tu": "que tu danses", "il/elle": "qu'il danse", "nous": "que nous dansions", "vous": "que vous dansiez", "ils/elles": "qu'ils dansent" },
    "subjonctif imparfait": { "je": "que je dansasse", "tu": "que tu dansasses", "il/elle": "qu'il dansât", "nous": "que nous dansassions", "vous": "que vous dansassiez", "ils/elles": "qu'ils dansassent" },
    "subjonctif passé": { "je": "que j'aie dansé", "tu": "que tu aies dansé", "il/elle": "qu'il ait dansé", "nous": "que nous ayons dansé", "vous": "que vous ayez dansé", "ils/elles": "qu'ils aient dansé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse dansé", "tu": "que tu eusses dansé", "il/elle": "qu'il eût dansé", "nous": "que nous eussions dansé", "vous": "que vous eussiez dansé", "ils/elles": "qu'ils eussent dansé" },
    "conditionnel présent": { "je": "danserais", "tu": "danserais", "il/elle": "danserait", "nous": "danserions", "vous": "danseriez", "ils/elles": "danseraient" },
    "conditionnel passé première forme": { "je": "aurais dansé", "tu": "aurais dansé", "il/elle": "aurait dansé", "nous": "aurions dansé", "vous": "auriez dansé", "ils/elles": "auraient dansé" },
    "conditionnel passé deuxième forme": { "je": "eusse dansé", "tu": "eusses dansé", "il/elle": "eût dansé", "nous": "eussions dansé", "vous": "eussiez dansé", "ils/elles": "eussent dansé" },
    "impératif présent": { "tu": "danse", "nous": "dansons", "vous": "dansez" },
    "impératif passé": { "tu": "aie dansé", "nous": "ayons dansé", "vous": "ayez dansé" },
    "infinitif présent": "danser",
    "infinitif passé": "avoir dansé",
    "participe présent": "dansant",
    "participe passé": "dansé",
    "gérondif présent": "en dansant",
    "gérondif passé": "en ayant dansé"
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
    "subjonctif imparfait": { "je": "que je lisse", "tu": "que tu lisses", "il/elle": "qu'il lît", "nous": "que nous lissions", "vous": "que vous lisiez", "ils/elles": "qu'ils lissent" },
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
    "subjonctif présent": { "je": "que j'écrive", "tu": "que tu écrives", "il/elle": "qu'il écrive", "nous": "que nous écrivions", "vous": "que vous écriviez", "ils/elles": "qu'ils écrivent" },
    "subjonctif imparfait": { "je": "que j'écrivisse", "tu": "que tu écrivisses", "il/elle": "qu'il écrivît", "nous": "que nous écrivissions", "vous": "que vous écrivissiez", "ils/elles": "qu'ils écrivissent" },
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

const vendre: Verb = {
  name: "vendre",
  conjugations: {
    "indicatif présent": { "je": "vends", "tu": "vends", "il/elle": "vend", "nous": "vendons", "vous": "vendez", "ils/elles": "vendent" },
    "indicatif imparfait": { "je": "vendais", "tu": "vendais", "il/elle": "vendait", "nous": "vendions", "vous": "vendiez", "ils/elles": "vendaient" },
    "indicatif passé simple": { "je": "vendis", "tu": "vendis", "il/elle": "vendit", "nous": "vendîmes", "vous": "vendîtes", "ils/elles": "vendirent" },
    "indicatif futur simple": { "je": "vendrai", "tu": "vendras", "il/elle": "vendra", "nous": "vendrons", "vous": "vendrez", "ils/elles": "vendront" },
    "indicatif passé composé": { "je": "ai vendu", "tu": "as vendu", "il/elle": "a vendu", "nous": "avons vendu", "vous": "avez vendu", "ils/elles": "ont vendu" },
    "indicatif plus-que-parfait": { "je": "avais vendu", "tu": "avais vendu", "il/elle": "avait vendu", "nous": "avions vendu", "vous": "aviez vendu", "ils/elles": "avaient vendu" },
    "indicatif passé antérieur": { "je": "eus vendu", "tu": "eus vendu", "il/elle": "eut vendu", "nous": "eûmes vendu", "vous": "eûtes vendu", "ils/elles": "eurent vendu" },
    "indicatif futur antérieur": { "je": "aurai vendu", "tu": "auras vendu", "il/elle": "aura vendu", "nous": "aurons vendu", "vous": "aurez vendu", "ils/elles": "auront vendu" },
    "subjonctif présent": { "je": "que je vende", "tu": "que tu vende", "il/elle": "qu'il vende", "nous": "que nous vendions", "vous": "que vous vendiez", "ils/elles": "qu'ils vendent" },
    "subjonctif imparfait": { "je": "que je vendisse", "tu": "que tu vendisses", "il/elle": "qu'il vendît", "nous": "que nous vendissions", "vous": "que vous vendissiez", "ils/elles": "qu'ils vendissent" },
    "subjonctif passé": { "je": "que j'aie vendu", "tu": "que tu aies vendu", "il/elle": "qu'il ait vendu", "nous": "que nous ayons vendu", "vous": "que vous ayez vendu", "ils/elles": "qu'ils aient vendu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse vendu", "tu": "que tu eusses vendu", "il/elle": "qu'il eût vendu", "nous": "que nous eussions vendu", "vous": "que vous eussiez vendu", "ils/elles": "qu'ils eussent vendu" },
    "conditionnel présent": { "je": "vendrais", "tu": "vendrais", "il/elle": "vendrait", "nous": "vendrions", "vous": "vendriez", "ils/elles": "vendraient" },
    "conditionnel passé première forme": { "je": "aurais vendu", "tu": "aurais vendu", "il/elle": "aurait vendu", "nous": "aurions vendu", "vous": "auriez vendu", "ils/elles": "auraient vendu" },
    "conditionnel passé deuxième forme": { "je": "eusse vendu", "tu": "eusses vendu", "il/elle": "eût vendu", "nous": "eussions vendu", "vous": "eussiez vendu", "ils/elles": "eussent vendu" },
    "impératif présent": { "tu": "vends", "nous": "vendons", "vous": "vendez" },
    "impératif passé": { "tu": "aie vendu", "nous": "ayons vendu", "vous": "ayez vendu" },
    "infinitif présent": "vendre",
    "infinitif passé": "avoir vendu",
    "participe présent": "vendant",
    "participe passé": "vendu",
    "gérondif présent": "en vendant",
    "gérondif passé": "en ayant vendu"
  }
};

const ouvrir: Verb = {
  name: "ouvrir",
  conjugations: {
    "indicatif présent": { "je": "ouvre", "tu": "ouvres", "il/elle": "ouvre", "nous": "ouvrons", "vous": "ouvrez", "ils/elles": "ouvrent" },
    "indicatif imparfait": { "je": "ouvrais", "tu": "ouvrais", "il/elle": "ouvrait", "nous": "ouvrions", "vous": "ouvriez", "ils/elles": "ouvraient" },
    "indicatif passé simple": { "je": "ouvris", "tu": "ouvris", "il/elle": "ouvrit", "nous": "ouvrîmes", "vous": "ouvrîtes", "ils/elles": "ouvrirent" },
    "indicatif futur simple": { "je": "ouvrirai", "tu": "ouvriras", "il/elle": "ouvrira", "nous": "ouvrirons", "vous": "ouvrirez", "ils/elles": "ouvriront" },
    "indicatif passé composé": { "je": "ai ouvert", "tu": "as ouvert", "il/elle": "a ouvert", "nous": "avons ouvert", "vous": "avez ouvert", "ils/elles": "ont ouvert" },
    "indicatif plus-que-parfait": { "je": "avais ouvert", "tu": "avais ouvert", "il/elle": "avait ouvert", "nous": "avions ouvert", "vous": "aviez ouvert", "ils/elles": "avaient ouvert" },
    "indicatif passé antérieur": { "je": "eus ouvert", "tu": "eus ouvert", "il/elle": "eut ouvert", "nous": "eûmes ouvert", "vous": "eûtes ouvert", "ils/elles": "eurent ouvert" },
    "indicatif futur antérieur": { "je": "aurai ouvert", "tu": "auras ouvert", "il/elle": "aura ouvert", "nous": "aurons ouvert", "vous": "aurez ouvert", "ils/elles": "auront ouvert" },
    "subjonctif présent": { "je": "que j'ouvre", "tu": "que tu ouvres", "il/elle": "qu'il ouvre", "nous": "que nous ouvrions", "vous": "que vous ouvriez", "ils/elles": "qu'ils ouvrent" },
    "subjonctif imparfait": { "je": "que j'ouvrisse", "tu": "que tu ouvrisses", "il/elle": "qu'il ouvrît", "nous": "que nous ouvrissions", "vous": "que vous ouvrissiez", "ils/elles": "qu'ils ouvrissent" },
    "subjonctif passé": { "je": "que j'aie ouvert", "tu": "que tu aies ouvert", "il/elle": "qu'il ait ouvert", "nous": "que nous ayons ouvert", "vous": "que vous ayez ouvert", "ils/elles": "qu'ils aient ouvert" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse ouvert", "tu": "que tu eusses ouvert", "il/elle": "qu'il eût ouvert", "nous": "que nous eussions ouvert", "vous": "que vous eussiez ouvert", "ils/elles": "qu'ils eussent ouvert" },
    "conditionnel présent": { "je": "ouvrirais", "tu": "ouvrirais", "il/elle": "ouvrirait", "nous": "ouvririons", "vous": "ouvririez", "ils/elles": "ouvriraient" },
    "conditionnel passé première forme": { "je": "aurais ouvert", "tu": "aurais ouvert", "il/elle": "aurait ouvert", "nous": "aurions ouvert", "vous": "auriez ouvert", "ils/elles": "auraient ouvert" },
    "conditionnel passé deuxième forme": { "je": "eusse ouvert", "tu": "eusses ouvert", "il/elle": "eût ouvert", "nous": "eussions ouvert", "vous": "eussiez ouvert", "ils/elles": "eussent ouvert" },
    "impératif présent": { "tu": "ouvre", "nous": "ouvrons", "vous": "ouvrez" },
    "impératif passé": { "tu": "aie ouvert", "nous": "ayons ouvert", "vous": "ayez ouvert" },
    "infinitif présent": "ouvrir",
    "infinitif passé": "avoir ouvert",
    "participe présent": "ouvrant",
    "participe passé": "ouvert",
    "gérondif présent": "en ouvrant",
    "gérondif passé": "en ayant ouvert"
  }
};

const fermer: Verb = {
  name: "fermer",
  conjugations: {
    "indicatif présent": { "je": "ferme", "tu": "fermes", "il/elle": "ferme", "nous": "fermons", "vous": "fermez", "ils/elles": "ferment" },
    "indicatif imparfait": { "je": "fermais", "tu": "fermais", "il/elle": "fermait", "nous": "fermions", "vous": "fermiez", "ils/elles": "fermaient" },
    "indicatif passé simple": { "je": "fermai", "tu": "fermas", "il/elle": "ferma", "nous": "fermâmes", "vous": "fermâtes", "ils/elles": "fermèrent" },
    "indicatif futur simple": { "je": "fermerai", "tu": "fermeras", "il/elle": "fermera", "nous": "fermerons", "vous": "fermerez", "ils/elles": "fermeront" },
    "indicatif passé composé": { "je": "ai fermé", "tu": "as fermé", "il/elle": "a fermé", "nous": "avons fermé", "vous": "avez fermé", "ils/elles": "ont fermé" },
    "indicatif plus-que-parfait": { "je": "avais fermé", "tu": "avais fermé", "il/elle": "avait fermé", "nous": "avions fermé", "vous": "aviez fermé", "ils/elles": "avaient fermé" },
    "indicatif passé antérieur": { "je": "eus fermé", "tu": "eus fermé", "il/elle": "eut fermé", "nous": "eûmes fermé", "vous": "eûtes fermé", "ils/elles": "eurent fermé" },
    "indicatif futur antérieur": { "je": "aurai fermé", "tu": "auras fermé", "il/elle": "aura fermé", "nous": "aurons fermé", "vous": "aurez fermé", "ils/elles": "auront fermé" },
    "subjonctif présent": { "je": "que je ferme", "tu": "que tu fermes", "il/elle": "qu'il ferme", "nous": "que nous fermions", "vous": "que vous fermiez", "ils/elles": "qu'ils ferment" },
    "subjonctif imparfait": { "je": "que je fermasse", "tu": "que tu fermasses", "il/elle": "qu'il fermât", "nous": "que nous fermassions", "vous": "que vous fermassiez", "ils/elles": "qu'ils fermassent" },
    "subjonctif passé": { "je": "que j'aie fermé", "tu": "que tu aies fermé", "il/elle": "qu'il ait fermé", "nous": "que nous ayons fermé", "vous": "que vous ayez fermé", "ils/elles": "qu'ils aient fermé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse fermé", "tu": "que tu eusses fermé", "il/elle": "qu'il eût fermé", "nous": "que nous eussions fermé", "vous": "que vous eussiez fermé", "ils/elles": "qu'ils eussent fermé" },
    "conditionnel présent": { "je": "fermerais", "tu": "fermerais", "il/elle": "fermerait", "nous": "fermerions", "vous": "fermeriez", "ils/elles": "fermeraient" },
    "conditionnel passé première forme": { "je": "aurais fermé", "tu": "aurais fermé", "il/elle": "aurait fermé", "nous": "aurions fermé", "vous": "auriez fermé", "ils/elles": "auraient fermé" },
    "conditionnel passé deuxième forme": { "je": "eusse fermé", "tu": "eusses fermé", "il/elle": "eût fermé", "nous": "eussions fermé", "vous": "eussiez fermé", "ils/elles": "eussent fermé" },
    "impératif présent": { "tu": "ferme", "nous": "fermons", "vous": "fermez" },
    "impératif passé": { "tu": "aie fermé", "nous": "ayons fermé", "vous": "ayez fermé" },
    "infinitif présent": "fermer",
    "infinitif passé": "avoir fermé",
    "participe présent": "fermant",
    "participe passé": "fermé",
    "gérondif présent": "en fermant",
    "gérondif passé": "en ayant fermé"
  }
};

const marcher: Verb = {
  name: "marcher",
  conjugations: {
    "indicatif présent": { "je": "marche", "tu": "marches", "il/elle": "marche", "nous": "marchons", "vous": "marchez", "ils/elles": "marchent" },
    "indicatif imparfait": { "je": "marchais", "tu": "marchais", "il/elle": "marchait", "nous": "marchions", "vous": "marchiez", "ils/elles": "marchaient" },
    "indicatif passé simple": { "je": "marchai", "tu": "marchas", "il/elle": "marcha", "nous": "marchâmes", "vous": "marchâtes", "ils/elles": "marchèrent" },
    "indicatif futur simple": { "je": "marcherai", "tu": "marcheras", "il/elle": "marchera", "nous": "marcherons", "vous": "marcherez", "ils/elles": "marcheront" },
    "indicatif passé composé": { "je": "ai marché", "tu": "as marché", "il/elle": "a marché", "nous": "avons marché", "vous": "avez marché", "ils/elles": "ont marché" },
    "indicatif plus-que-parfait": { "je": "avais marché", "tu": "avais marché", "il/elle": "avait marché", "nous": "avions marché", "vous": "aviez marché", "ils/elles": "avaient marché" },
    "indicatif passé antérieur": { "je": "eus marché", "tu": "eus marché", "il/elle": "eut marché", "nous": "eûmes marché", "vous": "eûtes marché", "ils/elles": "eurent marché" },
    "indicatif futur antérieur": { "je": "aurai marché", "tu": "auras marché", "il/elle": "aura marché", "nous": "aurons marché", "vous": "aurez marché", "ils/elles": "auront marché" },
    "subjonctif présent": { "je": "que je marche", "tu": "que tu marches", "il/elle": "qu'il marche", "nous": "que nous marchions", "vous": "que vous marchiez", "ils/elles": "qu'ils marchent" },
    "subjonctif imparfait": { "je": "que je marchasse", "tu": "que tu marchasses", "il/elle": "qu'il marchât", "nous": "que nous marchassions", "vous": "que vous marchassiez", "ils/elles": "qu'ils marchassent" },
    "subjonctif passé": { "je": "que j'aie marché", "tu": "que tu aies marché", "il/elle": "qu'il ait marché", "nous": "que nous ayons marché", "vous": "que vous ayez marché", "ils/elles": "qu'ils aient marché" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse marché", "tu": "que tu eusses marché", "il/elle": "qu'il eût marché", "nous": "que nous eussions marché", "vous": "que vous eussiez marché", "ils/elles": "qu'ils eussent marché" },
    "conditionnel présent": { "je": "marcherais", "tu": "marcherais", "il/elle": "marcherait", "nous": "marcherions", "vous": "marcheriez", "ils/elles": "marcheraient" },
    "conditionnel passé première forme": { "je": "aurais marché", "tu": "aurais marché", "il/elle": "aurait marché", "nous": "aurions marché", "vous": "auriez marché", "ils/elles": "auraient marché" },
    "conditionnel passé deuxième forme": { "je": "eusse marché", "tu": "eusses marché", "il/elle": "eût marché", "nous": "eussions marché", "vous": "eussiez marché", "ils/elles": "eussent marché" },
    "impératif présent": { "tu": "marche", "nous": "marchons", "vous": "marchez" },
    "impératif passé": { "tu": "aie marché", "nous": "ayons marché", "vous": "ayez marché" },
    "infinitif présent": "marcher",
    "infinitif passé": "avoir marché",
    "participe présent": "marchant",
    "participe passé": "marché",
    "gérondif présent": "en marchant",
    "gérondif passé": "en ayant marché"
  }
};

export default {
  aimer,
  jouer,
  chanter,
  danser,
  lire,
  écrire,
  vendre,
  ouvrir,
  fermer,
  marcher
};