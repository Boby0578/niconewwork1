import { Verb } from '../../verbs';

const vouloir: Verb = {
  name: "vouloir",
  conjugations: {
    "indicatif présent": { "je": "veux", "tu": "veux", "il/elle": "veut", "nous": "voulons", "vous": "voulez", "ils/elles": "veulent" },
    "indicatif imparfait": { "je": "voulais", "tu": "voulais", "il/elle": "voulait", "nous": "voulions", "vous": "vouliez", "ils/elles": "voulaient" },
    "indicatif passé simple": { "je": "voulus", "tu": "voulus", "il/elle": "voulut", "nous": "voulûmes", "vous": "voulûtes", "ils/elles": "voulurent" },
    "indicatif futur simple": { "je": "voudrai", "tu": "voudras", "il/elle": "voudra", "nous": "voudrons", "vous": "voudrez", "ils/elles": "voudront" },
    "indicatif passé composé": { "je": "ai voulu", "tu": "as voulu", "il/elle": "a voulu", "nous": "avons voulu", "vous": "avez voulu", "ils/elles": "ont voulu" },
    "indicatif plus-que-parfait": { "je": "avais voulu", "tu": "avais voulu", "il/elle": "avait voulu", "nous": "avions voulu", "vous": "aviez voulu", "ils/elles": "avaient voulu" },
    "indicatif passé antérieur": { "je": "eus voulu", "tu": "eus voulu", "il/elle": "eut voulu", "nous": "eûmes voulu", "vous": "eûtes voulu", "ils/elles": "eurent voulu" },
    "indicatif futur antérieur": { "je": "aurai voulu", "tu": "auras voulu", "il/elle": "aura voulu", "nous": "aurons voulu", "vous": "aurez voulu", "ils/elles": "auront voulu" },
    "subjonctif présent": { "je": "que je veuille", "tu": "que tu veuilles", "il/elle": "qu'il veuille", "nous": "que nous voulions", "vous": "que vous vouliez", "ils/elles": "qu'ils veuillent" },
    "subjonctif imparfait": { "je": "que je voulusse", "tu": "que tu voulusses", "il/elle": "qu'il voulût", "nous": "que nous voulussions", "vous": "que vous voulussiez", "ils/elles": "qu'ils voulussent" },
    "subjonctif passé": { "je": "que j'aie voulu", "tu": "que tu aies voulu", "il/elle": "qu'il ait voulu", "nous": "que nous ayons voulu", "vous": "que vous ayez voulu", "ils/elles": "qu'ils aient voulu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse voulu", "tu": "que tu eusses voulu", "il/elle": "qu'il eût voulu", "nous": "que nous eussions voulu", "vous": "que vous eussiez voulu", "ils/elles": "qu'ils eussent voulu" },
    "conditionnel présent": { "je": "voudrais", "tu": "voudrais", "il/elle": "voudrait", "nous": "voudrions", "vous": "voudriez", "ils/elles": "voudraient" },
    "conditionnel passé première forme": { "je": "aurais voulu", "tu": "aurais voulu", "il/elle": "aurait voulu", "nous": "aurions voulu", "vous": "auriez voulu", "ils/elles": "auraient voulu" },
    "conditionnel passé deuxième forme": { "je": "eusse voulu", "tu": "eusses voulu", "il/elle": "eût voulu", "nous": "eussions voulu", "vous": "eussiez voulu", "ils/elles": "eussent voulu" },
    "impératif présent": { "tu": "veux", "nous": "voulons", "vous": "voulez" },
    "impératif passé": { "tu": "aie voulu", "nous": "ayons voulu", "vous": "ayez voulu" },
    "infinitif présent": "vouloir",
    "infinitif passé": "avoir voulu",
    "participe présent": "voulant",
    "participe passé": "voulu",
    "gérondif présent": "en voulant",
    "gérondif passé": "en ayant voulu"
  }
};

const devoir: Verb = {
  name: "devoir",
  conjugations: {
    "indicatif présent": { "je": "dois", "tu": "dois", "il/elle": "doit", "nous": "devons", "vous": "devez", "ils/elles": "doivent" },
    "indicatif imparfait": { "je": "devais", "tu": "devais", "il/elle": "devait", "nous": "devions", "vous": "deviez", "ils/elles": "devaient" },
    "indicatif passé simple": { "je": "dus", "tu": "dus", "il/elle": "dut", "nous": "dûmes", "vous": "dûtes", "ils/elles": "durent" },
    "indicatif futur simple": { "je": "devrai", "tu": "devras", "il/elle": "devra", "nous": "devrons", "vous": "devrez", "ils/elles": "devront" },
    "indicatif passé composé": { "je": "ai dû", "tu": "as dû", "il/elle": "a dû", "nous": "avons dû", "vous": "avez dû", "ils/elles": "ont dû" },
    "indicatif plus-que-parfait": { "je": "avais dû", "tu": "avais dû", "il/elle": "avait dû", "nous": "avions dû", "vous": "aviez dû", "ils/elles": "avaient dû" },
    "indicatif passé antérieur": { "je": "eus dû", "tu": "eus dû", "il/elle": "eut dû", "nous": "eûmes dû", "vous": "eûtes dû", "ils/elles": "eurent dû" },
    "indicatif futur antérieur": { "je": "aurai dû", "tu": "auras dû", "il/elle": "aura dû", "nous": "aurons dû", "vous": "aurez dû", "ils/elles": "auront dû" },
    "subjonctif présent": { "je": "que je doive", "tu": "que tu doives", "il/elle": "qu'il doive", "nous": "que nous devions", "vous": "que vous deviez", "ils/elles": "qu'ils doivent" },
    "subjonctif imparfait": { "je": "que je dusse", "tu": "que tu dusse", "il/elle": "qu'il dût", "nous": "que nous dussions", "vous": "que vous dussiez", "ils/elles": "qu'ils dussent" },
    "subjonctif passé": { "je": "que j'aie dû", "tu": "que tu aies dû", "il/elle": "qu'il ait dû", "nous": "que nous ayons dû", "vous": "que vous ayez dû", "ils/elles": "qu'ils aient dû" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse dû", "tu": "que tu eusses dû", "il/elle": "qu'il eût dû", "nous": "que nous eussions dû", "vous": "que vous eussiez dû", "ils/elles": "qu'ils eussent dû" },
    "conditionnel présent": { "je": "devrais", "tu": "devrais", "il/elle": "devrait", "nous": "devrions", "vous": "devriez", "ils/elles": "devraient" },
    "conditionnel passé première forme": { "je": "aurais dû", "tu": "aurais dû", "il/elle": "aurait dû", "nous": "aurions dû", "vous": "auriez dû", "ils/elles": "auraient dû" },
    "conditionnel passé deuxième forme": { "je": "eusse dû", "tu": "eusses dû", "il/elle": "eût dû", "nous": "eussions dû", "vous": "eussiez dû", "ils/elles": "eussent dû" },
    "impératif présent": { "tu": "dois", "nous": "devons", "vous": "devez" },
    "impératif passé": { "tu": "aie dû", "nous": "ayons dû", "vous": "ayez dû" },
    "infinitif présent": "devoir",
    "infinitif passé": "avoir dû",
    "participe présent": "devant",
    "participe passé": "dû",
    "gérondif présent": "en devant",
    "gérondif passé": "en ayant dû"
  }
};

const savoir: Verb = {
  name: "savoir",
  conjugations: {
    "indicatif présent": { "je": "sais", "tu": "sais", "il/elle": "sait", "nous": "savons", "vous": "savez", "ils/elles": "savent" },
    "indicatif imparfait": { "je": "savais", "tu": "savais", "il/elle": "savait", "nous": "savions", "vous": "saviez", "ils/elles": "savaient" },
    "indicatif passé simple": { "je": "sus", "tu": "sus", "il/elle": "sut", "nous": "sûmes", "vous": "sûtes", "ils/elles": "surent" },
    "indicatif futur simple": { "je": "saurai", "tu": "sauras", "il/elle": "saura", "nous": "saurons", "vous": "serez", "ils/elles": "sauront" },
    "indicatif passé composé": { "je": "ai su", "tu": "as su", "il/elle": "a su", "nous": "avons su", "vous": "avez su", "ils/elles": "ont su" },
    "indicatif plus-que-parfait": { "je": "avais su", "tu": "avais su", "il/elle": "avait su", "nous": "avions su", "vous": "aviez su", "ils/elles": "avaient su" },
    "indicatif passé antérieur": { "je": "eus su", "tu": "eus su", "il/elle": "eut su", "nous": "eûmes su", "vous": "eûtes su", "ils/elles": "eurent su" },
    "indicatif futur antérieur": { "je": "aurai su", "tu": "auras su", "il/elle": "aura su", "nous": "aurons su", "vous": "aurez su", "ils/elles": "auront su" },
    "subjonctif présent": { "je": "que je sache", "tu": "que tu saches", "il/elle": "qu'il sache", "nous": "que nous sachions", "vous": "que vous sachiez", "ils/elles": "qu'ils sachent" },
    "subjonctif imparfait": { "je": "que je sussse", "tu": "que tu susse", "il/elle": "qu'il sût", "nous": "que nous sussions", "vous": "que vous sussiez", "ils/elles": "qu'ils sussent" },
    "subjonctif passé": { "je": "que j'aie su", "tu": "que tu aies su", "il/elle": "qu'il ait su", "nous": "que nous ayons su", "vous": "que vous ayez su", "ils/elles": "qu'ils aient su" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse su", "tu": "que tu eusses su", "il/elle": "qu'il eût su", "nous": "que nous eussions su", "vous": "que vous eussiez su", "ils/elles": "qu'ils eussent su" },
    "conditionnel présent": { "je": "saurais", "tu": "saurais", "il/elle": "saurait", "nous": "saurions", "vous": "sauriez", "ils/elles": "sauraient" },
    "conditionnel passé première forme": { "je": "aurais su", "tu": "aurais su", "il/elle": "aurait su", "nous": "aurions su", "vous": "auriez su", "ils/elles": "auraient su" },
    "conditionnel passé deuxième forme": { "je": "eusse su", "tu": "eusses su", "il/elle": "eût su", "nous": "eussions su", "vous": "eussiez su", "ils/elles": "eussent su" },
    "impératif présent": { "tu": "sais", "nous": "savons", "vous": "savez" },
    "impératif passé": { "tu": "aie su", "nous": "ayons su", "vous": "ayez su" },
    "infinitif présent": "savoir",
    "infinitif passé": "avoir su",
    "participe présent": "sachant",
    "participe passé": "su",
    "gérondif présent": "en sachant",
    "gérondif passé": "en ayant su"
  }
};

const avouer: Verb = {
  name: "avouer",
  conjugations: {
    "indicatif présent": { "je": "avoue", "tu": "avoues", "il/elle": "avoue", "nous": "avouons", "vous": "avouez", "ils/elles": "avouent" },
    "indicatif imparfait": { "je": "avouais", "tu": "avouais", "il/elle": "avouait", "nous": "avouions", "vous": "avouiez", "ils/elles": "avouaient" },
    "indicatif passé simple": { "je": "avouai", "tu": "avouas", "il/elle": "avoua", "nous": "avouâmes", "vous": "avouâtes", "ils/elles": "avouèrent" },
    "indicatif futur simple": { "je": "avouerai", "tu": "avoueras", "il/elle": "avouera", "nous": "avouerons", "vous": "avouerez", "ils/elles": "avoueront" },
    "indicatif passé composé": { "je": "ai avoué", "tu": "as avoué", "il/elle": "a avoué", "nous": "avons avoué", "vous": "avez avoué", "ils/elles": "ont avoué" },
    "indicatif plus-que-parfait": { "je": "avais avoué", "tu": "avais avoué", "il/elle": "avait avoué", "nous": "avions avoué", "vous": "aviez avoué", "ils/elles": "avaient avoué" },
    "indicatif passé antérieur": { "je": "eus avoué", "tu": "eus avoué", "il/elle": "eut avoué", "nous": "eûmes avoué", "vous": "eûtes avoué", "ils/elles": "eurent avoué" },
    "indicatif futur antérieur": { "je": "aurai avoué", "tu": "auras avoué", "il/elle": "aura avoué", "nous": "aurons avoué", "vous": "aurez avoué", "ils/elles": "auront avoué" },
    "subjonctif présent": { "je": "que je avoue", "tu": "que tu avoues", "il/elle": "qu'il avoue", "nous": "que nous avouions", "vous": "que vous avouiez", "ils/elles": "qu'ils avouent" },
    "subjonctif imparfait": { "je": "que je avouasse", "tu": "que tu avouasses", "il/elle": "qu'il avouât", "nous": "que nous avouassions", "vous": "que vous avouassiez", "ils/elles": "qu'ils avouassent" },
    "subjonctif passé": { "je": "que j'aie avoué", "tu": "que tu aies avoué", "il/elle": "qu'il ait avoué", "nous": "que nous ayons avoué", "vous": "que vous ayez avoué", "ils/elles": "qu'ils aient avoué" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse avoué", "tu": "que tu eusses avoué", "il/elle": "qu'il eût avoué", "nous": "que nous eussions avoué", "vous": "que vous eussiez avoué", "ils/elles": "qu'ils eussent avoué" },
    "conditionnel présent": { "je": "avouerais", "tu": "avouerais", "il/elle": "avouerait", "nous": "avouerions", "vous": "avoueriez", "ils/elles": "avoueraient" },
    "conditionnel passé première forme": { "je": "aurais avoué", "tu": "aurais avoué", "il/elle": "aurait avoué", "nous": "aurions avoué", "vous": "auriez avoué", "ils/elles": "auraient avoué" },
    "conditionnel passé deuxième forme": { "je": "eusse avoué", "tu": "eusses avoué", "il/elle": "eût avoué", "nous": "eussions avoué", "vous": "eussiez avoué", "ils/elles": "eussent avoué" },
    "impératif présent": { "tu": "avoue", "nous": "avouons", "vous": "avouez" },
    "impératif passé": { "tu": "aie avoué", "nous": "ayons avoué", "vous": "ayez avoué" },
    "infinitif présent": "avouer",
    "infinitif passé": "avoir avoué",
    "participe présent": "avouant",
    "participe passé": "avoué",
    "gérondif présent": "en avouant",
    "gérondif passé": "en ayant avoué"
  }
};

const accepter: Verb = {
  name: "accepter",
  conjugations: {
    "indicatif présent": { "je": "accepte", "tu": "acceptes", "il/elle": "accepte", "nous": "acceptons", "vous": "acceptez", "ils/elles": "acceptent" },
    "indicatif imparfait": { "je": "acceptais", "tu": "acceptais", "il/elle": "acceptait", "nous": "acceptions", "vous": "acceptiez", "ils/elles": "acceptaient" },
    "indicatif passé simple": { "je": "acceptai", "tu": "acceptas", "il/elle": "accepta", "nous": "acceptâmes", "vous": "acceptâtes", "ils/elles": "acceptèrent" },
    "indicatif futur simple": { "je": "accepterai", "tu": "accepteras", "il/elle": "acceptera", "nous": "accepterons", "vous": "accepterez", "ils/elles": "accepteront" },
    "indicatif passé composé": { "je": "ai accepté", "tu": "as accepté", "il/elle": "a accepté", "nous": "avons accepté", "vous": "avez accepté", "ils/elles": "ont accepté" },
    "indicatif plus-que-parfait": { "je": "avais accepté", "tu": "avais accepté", "il/elle": "avait accepté", "nous": "avions accepté", "vous": "aviez accepté", "ils/elles": "avaient accepté" },
    "indicatif passé antérieur": { "je": "eus accepté", "tu": "eus accepté", "il/elle": "eut accepté", "nous": "eûmes accepté", "vous": "eûtes accepté", "ils/elles": "eurent accepté" },
    "indicatif futur antérieur": { "je": "aurai accepté", "tu": "auras accepté", "il/elle": "aura accepté", "nous": "aurons accepté", "vous": "aurez accepté", "ils/elles": "auront accepté" },
    "subjonctif présent": { "je": "que je accepte", "tu": "que tu acceptes", "il/elle": "qu'il accepte", "nous": "que nous acceptions", "vous": "que vous acceptiez", "ils/elles": "qu'ils acceptent" },
    "subjonctif imparfait": { "je": "que je acceptasse", "tu": "que tu acceptasses", "il/elle": "qu'il acceptât", "nous": "que nous acceptassions", "vous": "que vous acceptassiez", "ils/elles": "qu'ils acceptassent" },
    "subjonctif passé": { "je": "que j'aie accepté", "tu": "que tu aies accepté", "il/elle": "qu'il ait accepté", "nous": "que nous ayons accepté", "vous": "que vous ayez accepté", "ils/elles": "qu'ils aient accepté" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse accepté", "tu": "que tu eusses accepté", "il/elle": "qu'il eût accepté", "nous": "que nous eussions accepté", "vous": "que vous eussiez accepté", "ils/elles": "qu'ils eussent accepté" },
    "conditionnel présent": { "je": "accepterais", "tu": "accepterais", "il/elle": "accepterait", "nous": "accepterions", "vous": "accepteriez", "ils/elles": "accepteraient" },
    "conditionnel passé première forme": { "je": "aurais accepté", "tu": "aurais accepté", "il/elle": "aurait accepté", "nous": "aurions accepté", "vous": "auriez accepté", "ils/elles": "auraient accepté" },
    "conditionnel passé deuxième forme": { "je": "eusse accepté", "tu": "eusses accepté", "il/elle": "eût accepté", "nous": "eussions accepté", "vous": "eussiez accepté", "ils/elles": "eussent accepté" },
    "impératif présent": { "tu": "accepte", "nous": "acceptons", "vous": "acceptez" },
    "impératif passé": { "tu": "aie accepté", "nous": "ay

<dyad-write path="src/data/verb-data/level1/level1.3.ts" description="Adding 10 new frequently used French verbs with all 22 conjugations">
import { Verb } from '../../verbs';

const vouloir: Verb = {
  name: "vouloir",
  conjugations: {
    "indicatif présent": { "je": "veux", "tu": "veux", "il/elle": "veut", "nous": "voulons", "vous": "voulez", "ils/elles": "veulent" },
    "indicatif imparfait": { "je": "voulais", "tu": "voulais", "il/elle": "voulait", "nous": "voulions", "vous": "vouliez", "ils/elles": "voulaient" },
    "indicatif passé simple": { "je": "voulus", "tu": "voulus", "il/elle": "voulut", "nous": "voulûmes", "vous": "voulûtes", "ils/elles": "voulurent" },
    "indicatif futur simple": { "je": "voudrai", "tu": "voudras", "il/elle": "voudra", "nous": "voudrons", "vous": "voudrez", "ils/elles": "voudront" },
    "indicatif passé composé": { "je": "ai voulu", "tu": "as voulu", "il/elle": "a voulu", "nous": "avons voulu", "vous": "avez voulu", "ils/elles": "ont voulu" },
    "indicatif plus-que-parfait": { "je": "avais voulu", "tu": "avais voulu", "il/elle": "avait voulu", "nous": "avions voulu", "vous": "aviez voulu", "ils/elles": "avaient voulu" },
    "indicatif passé antérieur": { "je": "eus voulu", "tu": "eus voulu", "il/elle": "eut voulu", "nous": "eûmes voulu", "vous": "eûtes voulu", "ils/elles": "eurent voulu" },
    "indicatif futur antérieur": { "je": "aurai voulu", "tu": "auras voulu", "il/elle": "aura voulu", "nous": "aurons voulu", "vous": "aurez voulu", "ils/elles": "auront voulu" },
    "subjonctif présent": { "je": "que je veuille", "tu": "que tu veuilles", "il/elle": "qu'il veuille", "nous": "que nous voulions", "vous": "que vous vouliez", "ils/elles": "qu'ils veuillent" },
    "subjonctif imparfait": { "je": "que je voulusse", "tu": "que tu voulusses", "il/elle": "qu'il voulût", "nous": "que nous voulussions", "vous": "que vous voulussiez", "ils/elles": "qu'ils voulussent" },
    "subjonctif passé": { "je": "que j'aie voulu", "tu": "que tu aies voulu", "il/elle": "qu'il ait voulu", "nous": "que nous ayons voulu", "vous": "que vous ayez voulu", "ils/elles": "qu'ils aient voulu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse voulu", "tu": "que tu eusses voulu", "il/elle": "qu'il eût voulu", "nous": "que nous eussions voulu", "vous": "que vous eussiez voulu", "ils/elles": "qu'ils eussent voulu" },
    "conditionnel présent": { "je": "voudrais", "tu": "voudrais", "il/elle": "voudrait", "nous": "voudrions", "vous": "voudriez", "ils/elles": "voudraient" },
    "conditionnel passé première forme": { "je": "aurais voulu", "tu": "aurais voulu", "il/elle": "aurait voulu", "nous": "aurions voulu", "vous": "auriez voulu", "ils/elles": "auraient voulu" },
    "conditionnel passé deuxième forme": { "je": "eusse voulu", "tu": "eusses voulu", "il/elle": "eût voulu", "nous": "eussions voulu", "vous": "eussiez voulu", "ils/elles": "eussent voulu" },
    "impératif présent": { "tu": "veux", "nous": "voulons", "vous": "voulez" },
    "impératif passé": { "tu": "aie voulu", "nous": "ayons voulu", "vous": "ayez voulu" },
    "infinitif présent": "vouloir",
    "infinitif passé": "avoir voulu",
    "participe présent": "voulant",
    "participe passé": "voulu",
    "gérondif présent": "en voulant",
    "gérondif passé": "en ayant voulu"
  }
};

const devoir: Verb = {
  name: "devoir",
  conjugations: {
    "indicatif présent": { "je": "dois", "tu": "dois", "il/elle": "doit", "nous": "devons", "vous": "devez", "ils/elles": "doivent" },
    "indicatif imparfait": { "je": "devais", "tu": "devais", "il/elle": "devait", "nous": "devions", "vous": "deviez", "ils/elles": "devaient" },
    "indicatif passé simple": { "je": "dus", "tu": "dus", "il/elle": "dut", "nous": "dûmes", "vous": "dûtes", "ils/elles": "durent" },
    "indicatif futur simple": { "je": "devrai", "tu": "devras", "il/elle": "devra", "nous": "devrons", "vous": "devrez", "ils/elles": "devront" },
    "indicatif passé composé": { "je": "ai dû", "tu": "as dû", "il/elle": "a dû", "nous": "avons dû", "vous": "avez dû", "ils/elles": "ont dû" },
    "indicatif plus-que-parfait": { "je": "avais dû", "tu": "avais dû", "il/elle": "avait dû", "nous": "avions dû", "vous": "aviez dû", "ils/elles": "avaient dû" },
    "indicatif passé antérieur": { "je": "eus dû", "tu": "eus dû", "il/elle": "eut dû", "nous": "eûmes dû", "vous": "eûtes dû", "ils/elles": "eurent dû" },
    "indicatif futur antérieur": { "je": "aurai dû", "tu": "auras dû", "il/elle": "aura dû", "nous": "aurons dû", "vous": "aurez dû", "ils/elles": "auront dû" },
    "subjonctif présent": { "je": "que je doive", "tu": "que tu doives", "il/elle": "qu'il doive", "nous": "que nous devions", "vous": "que vous deviez", "ils/elles": "qu'ils doivent" },
    "subjonctif imparfait": { "je": "que je dusse", "tu": "que tu dusse", "il/elle": "qu'il dût", "nous": "que nous dussions", "vous": "que vous dussiez", "ils/elles": "qu'ils dussent" },
    "subjonctif passé": { "je": "que j'aie dû", "tu": "que tu aies dû", "il/elle": "qu'il ait dû", "nous": "que nous ayons dû", "vous": "que vous ayez dû", "ils/elles": "qu'ils aient dû" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse dû", "tu": "que tu eusses dû", "il/elle": "qu'il eût dû", "nous": "que nous eussions dû", "vous": "que vous eussiez dû", "ils/elles": "qu'ils eussent dû" },
    "conditionnel présent": { "je": "devrais", "tu": "devrais", "il/elle": "devrait", "nous": "devrions", "vous": "devriez", "ils/elles": "devraient" },
    "conditionnel passé première forme": { "je": "aurais dû", "tu": "aurais dû", "il/elle": "aurait dû", "nous": "aurions dû", "vous": "auriez dû", "ils/elles": "auraient dû" },
    "conditionnel passé deuxième forme": { "je": "eusse dû", "tu": "eusses dû", "il/elle": "eût dû", "nous": "eussions dû", "vous": "eussiez dû", "ils/elles": "eussent dû" },
    "impératif présent": { "tu": "dois", "nous": "devons", "vous": "devez" },
    "impératif passé": { "tu": "aie dû", "nous": "ayons dû", "vous": "ayez dû" },
    "infinitif présent": "devoir",
    "infinitif passé": "avoir dû",
    "participe présent": "devant",
    "participe passé": "dû",
    "gérondif présent": "en devant",
    "gérondif passé": "en ayant dû"
  }
};

const savoir: Verb = {
  name: "savoir",
  conjugations: {
    "indicatif présent": { "je": "sais", "tu": "sais", "il/elle": "sait", "nous": "savons", "vous": "savez", "ils/elles": "savent" },
    "indicatif imparfait": { "je": "savais", "tu": "savais", "il/elle": "savait", "nous": "savions", "vous": "saviez", "ils/elles": "savaient" },
    "indicatif passé simple": { "je": "sus", "tu": "sus", "il/elle": "sut", "nous": "sûmes", "vous": "sûtes", "ils/elles": "surent" },
    "indicatif futur simple": { "je": "saurai", "tu": "sauras", "il/elle": "saura", "nous": "saurons", "vous": "serez", "ils/elles": "sauront" },
    "indicatif passé composé": { "je": "ai su", "tu": "as su", "il/elle": "a su", "nous": "avons su", "vous": "avez su", "ils/elles": "ont su" },
    "indicatif plus-que-parfait": { "je": "avais su", "tu": "avais su", "il/elle": "avait su", "nous": "avions su", "vous": "aviez su", "ils/elles": "avaient su" },
    "indicatif passé antérieur": { "je": "eus su", "tu": "eus su", "il/elle": "eut su", "nous": "eûmes su", "vous": "eûtes su", "ils/elles": "eurent su" },
    "indicatif futur antérieur": { "je": "aurai su", "tu": "auras su", "il/elle": "aura su", "nous": "aurons su", "vous": "aurez su", "ils/elles": "auront su" },
    "subjonctif présent": { "je": "que je sache", "tu": "que tu saches", "il/elle": "qu'il sache", "nous": "que nous sachions", "vous": "que vous sachiez", "ils/elles": "qu'ils sachent" },
    "subjonctif imparfait": { "je": "que je sussse", "tu": "que tu susse", "il/elle": "qu'il sût", "nous": "que nous sussions", "vous": "que vous sussiez", "ils/elles": "qu'ils sussent" },
    "subjonctif passé": { "je": "que j'aie su", "tu": "que tu aies su", "il/elle": "qu'il ait su", "nous": "que nous ayons su", "vous": "que vous ayez su", "ils/elles": "qu'ils aient su" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse su", "tu": "que tu eusses su", "il/elle": "qu'il eût su", "nous": "que nous eussions su", "vous": "que vous eussiez su", "ils/elles": "qu'ils eussent su" },
    "conditionnel présent": { "je": "saurais", "tu": "saurais", "il/elle": "saurait", "nous": "saurions", "vous": "sauriez", "ils/elles": "sauraient" },
    "conditionnel passé première forme": { "je": "aurais su", "tu": "aurais su", "il/elle": "aurait su", "nous": "aurions su", "vous": "auriez su", "ils/elles": "auraient su" },
    "conditionnel passé deuxième forme": { "je": "eusse su", "tu": "eusses su", "il/elle": "eût su", "nous": "eussions su", "vous": "eussiez su", "ils/elles": "eussent su" },
    "impératif présent": { "tu": "sais", "nous": "savons", "vous": "savez" },
    "impératif passé": { "tu": "aie su", "nous": "ayons su", "vous": "ayez su" },
    "infinitif présent": "savoir",
    "infinitif passé": "avoir su",
    "participe présent": "sachant",
    "participe passé": "su",
    "gérondif présent": "en sachant",
    "gérondif passé": "en ayant su"
  }
};

const avouer: Verb = {
  name: "avouer",
  conjugations: {
    "indicatif présent": { "je": "avoue", "tu": "avoues", "il/elle": "avoue", "nous": "avouons", "vous": "avouez", "ils/elles": "avouent" },
    "indicatif imparfait": { "je": "avouais", "tu": "avouais", "il/elle": "avouait", "nous": "avouions", "vous": "avouiez", "ils/elles": "avouaient" },
    "indicatif passé simple": { "je": "avouai", "tu": "avouas", "il/elle": "avoua", "nous": "avouâmes", "vous": "avouâtes", "ils/elles": "avouèrent" },
    "indicatif futur simple": { "je": "avouerai", "tu": "avoueras", "il/elle": "avouera", "nous": "avouerons", "vous": "avouerez", "ils/elles": "avoueront" },
    "indicatif passé composé": { "je": "ai avoué", "tu": "as avoué", "il/elle": "a avoué", "nous": "avons avoué", "vous": "avez avoué", "ils/elles": "ont avoué" },
    "indicatif plus-que-parfait": { "je": "avais avoué", "tu": "avais avoué", "il/elle": "avait avoué", "nous": "avions avoué", "vous": "aviez avoué", "ils/elles": "avaient avoué" },
    "indicatif passé antérieur": { "je": "eus avoué", "tu": "eus avoué", "il/elle": "eut avoué", "nous": "eûmes avoué", "vous": "eûtes avoué", "ils/elles": "eurent avoué" },
    "indicatif futur antérieur": { "je": "aurai avoué", "tu": "auras avoué", "il/elle": "aura avoué", "nous": "aurons avoué", "vous": "aurez avoué", "ils/elles": "auront avoué" },
    "subjonctif présent": { "je": "que je avoue", "tu": "que tu avoues", "il/elle": "qu'il avoue", "nous": "que nous avouions", "vous": "que vous avouiez", "ils/elles": "qu'ils avouent" },
    "subjonctif imparfait": { "je": "que je avouasse", "tu": "que tu avouasses", "il/elle": "qu'il avouât", "nous": "que nous avouassions", "vous": "que vous avouassiez", "ils/elles": "qu'ils avouassent" },
    "subjonctif passé": { "je": "que j'aie avoué", "tu": "que tu aies avoué", "il/elle": "qu'il ait avoué", "nous": "que nous ayons avoué", "vous": "que vous ayez avoué", "ils/elles": "qu'ils aient avoué" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse avoué", "tu": "que tu eusses avoué", "il/elle": "qu'il eût avoué", "nous": "que nous eussions avoué", "vous": "que vous eussiez avoué", "ils/elles": "qu'ils eussent avoué" },
    "conditionnel présent": { "je": "avouerais", "tu": "avouerais", "il/elle": "avouerait", "nous": "avouerions", "vous": "avoueriez", "ils/elles": "avoueraient" },
    "conditionnel passé première forme": { "je": "aurais avoué", "tu": "aurais avoué", "il/elle": "aurait avoué", "nous": "aurions avoué", "vous": "auriez avoué", "ils/elles": "auraient avoué" },
    "conditionnel passé deuxième forme": { "je": "eusse avoué", "tu": "eusses avoué", "il/elle": "eût avoué", "nous": "eussions avoué", "vous": "eussiez avoué", "ils/elles": "eussent avoué" },
    "impératif présent": { "tu": "avoue", "nous": "avouons", "vous": "avouez" },
    "impératif passé": { "tu": "aie avoué", "nous": "ayons avoué", "vous": "ayez avoué" },
    "infinitif présent": "avouer",
    "infinitif passé": "avoir avoué",
    "participe présent": "avouant",
    "participe passé": "avoué",
    "gérondif présent": "en avouant",
    "gérondif passé": "en ayant avoué"
  }
};

const accepter: Verb = {
  name: "accepter",
  conjugations: {
    "indicatif présent": { "je": "accepte", "tu": "acceptes", "il/elle": "accepte", "nous": "acceptons", "vous": "acceptez", "ils/elles": "acceptent" },
    "indicatif imparfait": { "je": "acceptais", "tu": "acceptais", "il/elle": "acceptait", "nous": "acceptions", "vous": "acceptiez", "ils/elles": "acceptaient" },
    "indicatif passé simple": { "je": "acceptai", "tu": "acceptas", "il/elle": "accepta", "nous": "acceptâmes", "vous": "acceptâtes", "ils/elles": "acceptèrent" },
    "indicatif futur simple": { "je": "accepterai", "tu": "accepteras", "il/elle": "acceptera", "nous": "accepterons", "vous": "accepterez", "ils/elles": "accepteront" },
    "indicatif passé composé": { "je": "ai accepté", "tu": "as accepté", "il/elle": "a accepté", "nous": "avons accepté", "vous": "avez accepté", "ils/elles": "ont accepté" },
    "indicatif plus-que-parfait": { "je": "avais accepté", "tu": "avais accepté", "il/elle": "avait accepté", "nous": "avions accepté", "vous": "aviez accepté", "ils/elles": "avaient accepté" },
    "indicatif passé antérieur": { "je": "eus accepté", "tu": "eus accepté", "il/elle": "eut accepté", "nous": "eûmes accepté", "vous": "eûtes accepté", "ils/elles": "eurent accepté" },
    "indicatif futur antérieur": { "je": "aurai accepté", "tu": "auras accepté", "il/elle": "aura accepté", "nous": "aurons accepté", "vous": "aurez accepté", "ils/elles": "auront accepté" },
    "subjonctif présent": { "je": "que je accepte", "tu": "que tu acceptes", "il/elle": "qu'il accepte", "nous": "que nous acceptions", "vous": "que vous acceptiez", "ils/elles": "qu'ils acceptent" },
    "subjonctif imparfait": { "je": "que je acceptasse", "tu": "que tu acceptasses", "il/elle": "qu'il acceptât", "nous": "que nous acceptassions", "vous": "que vous acceptassiez", "ils/elles": "qu'ils acceptassent" },
    "subjonctif passé": { "je": "que j'aie accepté", "tu": "que tu aies accepté", "il/elle": "qu'il ait accepté", "nous": "que nous ayons accepté", "vous": "que vous ayez accepté", "ils/elles": "qu'ils aient accepté" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse accepté", "tu": "que tu eusses accepté", "il/elle": "qu'il eût accepté", "nous": "que nous eussions accepté", "vous": "que vous eussiez accepté", "ils/elles": "qu'ils eussent accepté" },
    "conditionnel présent": { "je": "accepterais", "tu": "accepterais", "il/elle": "accepterait", "nous": "accepterions", "vous": "accepteriez", "ils/elles": "accepteraient" },
    "conditionnel passé première forme": { "je": "aurais accepté", "tu": "aurais accepté", "il/elle": "aurait accepté", "nous": "aurions accepté", "vous": "auriez accepté", "ils/elles": "auraient accepté" },
    "conditionnel passé deuxième forme": { "je": "eusse accepté", "tu": "eusses accepté", "il/elle": "eût accepté", "nous": "eussions accepté", "vous": "eussiez accepté", "ils/elles": "eussent accepté" },
    "impératif présent": { "tu": "accepte", "nous": "acceptons", "vous": "acceptez" },
    "impératif passé": { "tu": "aie accepté", "nous": "ayons accepté", "vous": "ayez accepté" },
    "infinitif présent": "accepter",
    "infinitif passé": "avoir accepté",
    "participe présent": "acceptant",
    "participe passé": "accepté",
    "gérondif présent": "en acceptant",
    "gérondif passé": "en ayant accepté"
  }
};

const attendre: Verb = {
  name: "attendre",
  conjugations: {
    "indicatif présent": { "je": "attends", "tu": "attends", "il/elle": "attend", "nous": "attendons", "vous": "attendez", "ils/elles": "attendent" },
    "indicatif imparfait": { "je": "attendais", "tu": "attendais", "il/elle": "attendait", "nous": "attendions", "vous": "attendiez", "ils/elles": "attendaient" },
    "indicatif passé simple": { "je": "attendis", "tu": "attendis", "il/elle": "attendit", "nous": "attendîmes", "vous": "attendîtes", "ils/elles": "attendirent" },
    "indicatif futur simple": { "je": "attendrai", "tu": "attendras", "il/elle": "attendra", "nous": "attendrons", "vous": "attendrez", "ils/elles": "attendront" },
    "indicatif passé composé": { "je": "attends", "tu": "attends", "il/elle": "attend", "nous": "attendons", "vous": "attendez", "ils/elles": "attendent" },
    "indicatif plus-que-parfait": { "je": "avais attendu", "tu": "avais attendu", "il/elle": "avait attendu", "nous": "avions attendu", "vous": "aviez attendu", "ils/elles": "avaient attendu" },
    "indicatif passé antérieur": { "je": "eus attendu", "tu": "eus attendu", "il/elle": "eut attendu", "nous": "eûmes attendu", "vous": "eûtes attendu", "ils/elles": "eurent attendu" },
    "indicatif futur antérieur": { "je": "aurai attendu", "tu": "auras attendu", "il/elle": "aura attendu", "nous": "aurons attendu", "vous": "aurez attendu", "ils/elles": "auront attendu" },
    "subjonctif présent": { "je": "que je attende", "tu": "que tu attendes", "il/elle": "qu'il attende", "nous": "que nous attendions", "vous": "que vous attendiez", "ils/elles": "qu'ils attendent" },
    "subjonctif imparfait": { "je": "que je attendisse", "tu": "que tu attendisses", "il/elle": "qu'il attendît", "nous": "que nous attendissions", "vous": "que vous attendissiez", "ils/elles": "qu'ils attendissent" },
    "subjonctif passé": { "je": "que j'aie attendu", "tu": "que tu aies attendu", "il/elle": "qu'il ait attendu", "nous": "que nous ayons attendu", "vous": "que vous ayez attendu", "ils/elles": "qu'ils aient attendu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse attendu", "tu": "que tu eusses attendu", "il/elle": "qu'il eût attendu", "nous": "que nous eussions attendu", "vous": "que vous eussiez attendu", "ils/elles": "qu'ils eussent attendu" },
    "conditionnel présent": { "je": "attendrais", "tu": "attendrais", "il/elle": "attendrait", "nous": "attendrions", "vous": "attendriez", "ils/elles": "attendraient" },
    "conditionnel passé première forme": { "je": "aurais attendu", "tu": "aurais attendu", "il/elle": "aurait attendu", "nous": "aurions attendu", "vous": "auriez attendu", "ils/elles": "auraient attendu" },
    "conditionnel passé deuxième forme": { "je": "eusse attendu", "tu": "eusses attendu", "il/elle": "eût attendu", "nous": "eussions attendu", "vous": "eussiez attendu", "ils/elles": "eussent attendu" },
    "impératif présent": { "tu": "attends", "nous": "attendons", "vous": "attendez" },
    "impératif passé": { "tu": "aie attendu", "nous": "ayons attendu", "vous": "ayez attendu" },
    "infinitif présent": "attendre",
    "infinitif passé": "avoir attendu",
    "participe présent": "attendant",
    "participe passé": "attendu",
    "gérondif présent": "en attendant",
    "gérondif passé": "en ayant attendu"
  }
};

const aider: Verb = {
  name: "aider",
  conjugations: {
    "indicatif présent": { "je": "aide", "tu": "aides", "il/elle": "aide", "nous": "aidons", "vous": "aidez", "ils/elles": "aident" },
    "indicatif imparfait": { "je": "aidais", "tu": "aidais", "il/elle": "aidait", "nous": "aidions", "vous": "aidiez", "ils/elles": "aidaient" },
    "indicatif passé simple": { "je": "aidai", "tu": "aidas", "il/elle": "aida", "nous": "aidâmes", "vous": "aidâtes", "ils/elles": "aidèrent" },
    "indicatif futur simple": { "je": "aiderai", "tu": "aideras", "il/elle": "aidera", "nous": "aiderons", "vous": "aiderez", "ils/elles": "aideront" },
    "indicatif passé composé": { "je": "ai aidé", "tu": "as aidé", "il/elle": "a aidé", "nous": "avons aidé", "vous": "avez aidé", "ils/elles": "ont aidé" },
    "indicatif plus-que-parfait": { "je": "avais aidé", "tu": "avais aidé", "il/elle": "avait aidé", "nous": "avions aidé", "vous": "aviez aidé", "ils/elles": "avaient aidé" },
    "indicatif passé antérieur": { "je": "eus aidé", "tu": "eus aidé", "il/elle": "eut aidé", "nous": "eûmes aidé", "vous": "eûtes aidé", "ils/elles": "eurent aidé" },
    "indicatif futur antérieur": { "je": "aurai aidé", "tu": "auras aidé", "il/elle": "aura aidé", "nous": "aurons aidé", "vous": "aurez aidé", "ils/elles": "auront aidé" },
    "subjonctif présent": { "je": "que je aide", "tu": "que tu aies", "il/elle": "qu'il aide", "nous": "que nous aidions", "vous": "que vous aidiez", "ils/elles": "qu'ils aident" },
    "subjonctif imparfait": { "je": "que je aidasse", "tu": "que tu aidasses", "il/elle": "qu'il aidât", "nous": "que nous aidassions", "vous": "que vous aidassiez", "ils/elles": "qu'ils aidassent" },
    "subjonctif passé": { "je": "que j'aie aidé", "tu": "que tu aies aidé", "il/elle": "qu'il ait aidé", "nous": "que nous ayons aidé", "vous": "que vous ayez aidé", "ils/elles": "qu'ils aient aidé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse aidé", "tu": "que tu eusses aidé", "il/elle": "qu'il eût aidé", "nous": "que nous eussions aidé", "vous": "que vous eussiez aidé", "ils/elles": "qu'ils eussent aidé" },
    "conditionnel présent": { "je": "aiderais", "tu": "aiderais", "il/elle": "aiderait", "nous": "aiderions", "vous": "aideriez", "ils/elles": "aideraient" },
    "conditionnel passé première forme": { "je": "aurais aidé", "tu": "aurais aidé", "il/elle": "aurait aidé", "nous": "aurions aidé", "vous": "auriez aidé", "ils/elles": "auraient aidé" },
    "conditionnel passé deuxième forme": { "je": "eusse aidé", "tu": "eusses aidé", "il/elle": "eût aidé", "nous": "eussions aidé", "vous": "eussiez aidé", "ils/elles": "eussent aidé" },
    "impératif présent": { "tu": "aide", "nous": "aidons", "vous": "aidez" },
    "impératif passé": { "tu": "aie aidé", "nous": "ayons aidé", "vous": "ayez aidé" },
    "infinitif présent": "aider",
    "infinitif passé": "avoir aidé",
    "participe présent": "aidant",
    "participe passé": "aidé",
    "gérondif présent": "en aidant",
    "gérondif passé": "en ayant aidé"
  }
};

const amener: Verb = {
  name: "amener",
  conjugations: {
    "indicatif présent": { "je": "amène", "tu": "amènes", "il/elle": "amène", "nous": "amenons", "vous": "amenez", "ils/elles": "amènent" },
    "indicatif imparfait": { "je": "amenais", "tu": "amenais", "il/elle": "amenait", "nous": "amenions", "vous": "ameniez", "ils/elles": "amenaient" },
    "indicatif passé simple": { "je": "amenai", "tu": "amenas", "il/elle": "amena", "nous": "amenâmes", "vous": "amenâtes", "ils/elles": "amenèrent" },
    "indicatif futur simple": { "je": "amènerai", "tu": "amèneras", "il/elle": "amènera", "nous": "amènerons", "vous": "amènerez", "ils/elles": "amèneront" },
    "indicatif passé composé": { "je": "ai amené", "tu": "as amené", "il/elle": "a amené", "nous": "avons amené", "vous": "avez amené", "ils/elles": "ont amené" },
    "indicatif plus-que-parfait": { "je": "avais amené", "tu": "avais amené", "il/elle": "avait amené", "nous": "avions amené", "vous": "aviez amené", "ils/elles": "avaient amené" },
    "indicatif passé antérieur": { "je": "eus amené", "tu": "eus amené", "il/elle": "eut amené", "nous": "eûmes amené", "vous": "eûtes amené", "ils/elles": "eurent amené" },
    "indicatif futur antérieur": { "je": "aurai amené", "tu": "auras amené", "il/elle": "aura amené", "nous": "aurons amené", "vous": "aurez amené", "ils/elles": "auront amené" },
    "subjonctif présent": { "je": "que je amène", "tu": "que tu amènes", "il/elle": "qu'il amène", "nous": "que nous amenions", "vous": "que vous ameniez", "ils/elles": "qu'ils amènent" },
    "subjonctif imparfait": { "je": "que je amenasse", "tu": "que tu amenasses", "il/elle": "qu'il amenât", "nous": "que nous amenassions", "vous": "que vous amenassiez", "ils/elles": "qu'ils amenassent" },
    "subjonctif passé": { "je": "que j'aie amené", "tu": "que tu aies amené", "il/elle": "qu'il ait amené", "nous": "que nous ayons amené", "vous": "que vous ayez amené", "ils/elles": "qu'ils aient amené" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse amené", "tu": "que tu eusses amené", "il/elle": "qu'il eût amené", "nous": "que nous eussions amené", "vous": "que vous eussiez amené", "ils/elles": "qu'ils eussent amené" },
    "conditionnel présent": { "je": "amènerais", "tu": "amènerais", "il/elle": "amènerait", "nous": "amènerions", "vous": "amèneriez", "ils/elles": "amèneraient" },
    "conditionnel passé première forme": { "je": "aurais amené", "tu": "aurais amené", "il/elle": "aurait amené", "nous": "aurions amené", "vous": "auriez amené", "ils/elles": "auraient amené" },
    "conditionnel passé deuxième forme": { "je": "eusse amené", "tu": "eusses amené", "il/elle": "eût amené", "nous": "eussions amené", "vous": "eussiez amené", "ils/elles": "eussent amené" },
    "impératif présent": { "tu": "amène", "nous": "amenons", "vous": "amenez" },
    "impératif passé": { "tu": "aie amené", "nous": "ayons amené", "vous": "ayez amené" },
    "infinitif présent": "amener",
    "infinitif passé": "avoir amené",
    "participe présent": "amenant",
    "participe passé": "amené",
    "gérondif présent": "en amenant",
    "gérondif passé": "en ayant amené"
  }
};

const appeler: Verb = {
  name: "appeler",
  conjugations: {
    "indicatif présent": { "je": "appelle", "tu": "appelles", "il/elle": "appelle", "nous": "appelons", "vous": "appelez", "ils/elles": "appellent" },
    "indicatif imparfait": { "je": "appelais", "tu": "appelais", "il/elle": "appelait", "nous": "appelions", "vous": "appeliez", "ils/elles": "appelaient" },
    "indicatif passé simple": { "je": "appelai", "tu": "appelas", "il/elle": "appela", "nous": "appelâmes", "vous": "appelâtes", "ils/elles": "appelèrent" },
    "indicatif futur simple": { "je": "appellerai", "tu": "appelleras", "il/elle": "appellera", "nous": "appellerons", "vous": "appellerez", "ils/elles": "appelleront" },
    "indicatif passé composé": { "je": "ai appelé", "tu": "as appelé", "il/elle": "a appelé", "nous": "avons appelé", "vous": "avez appelé", "ils/elles": "ont appelé" },
    "indicatif plus-que-parfait": { "je": "avais appelé", "tu": "avais appelé", "il/elle": "avait appelé", "nous": "avions appelé", "vous": "aviez appelé", "ils/elles": "avaient appelé" },
    "indicatif passé antérieur": { "je": "eus appelé", "tu": "eus appelé", "il/elle": "eut appelé", "nous": "eûmes appelé", "vous": "eûtes appelé", "ils/elles": "eurent appelé" },
    "indicatif futur antérieur": { "je": "aurai appelé", "tu": "auras appelé", "il/elle": "aura appelé", "nous": "aurons appelé", "vous": "aurez appelé", "ils/elles": "auront appelé" },
    "subjonctif présent": { "je": "que je appelle", "tu": "que tu appelles", "il/elle": "qu'il appelle", "nous": "que nous appelions", "vous": "que vous appeliez", "ils/elles": "qu'ils appellent" },
    "subjonctif imparfait": { "je": "que je appelasse", "tu": "que tu appelasses", "il/elle": "qu'il appelât", "nous": "que nous appelassions", "vous": "que vous appelassiez", "ils/elles": "qu'ils appelassent" },
    "subjonctif passé": { "je": "que j'aie appelé", "tu": "que tu aies appelé", "il/elle": "qu'il ait appelé", "nous": "que nous ayons appelé", "vous": "que vous ayez appelé", "ils/elles": "qu'ils aient appelé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse appelé", "tu": "que tu eusses appelé", "il/elle": "qu'il eût appelé", "nous": "que nous eussions appelé", "vous": "que vous eussiez appelé", "ils/elles": "qu'ils eussent appelé" },
    "conditionnel présent": { "je": "appellerais", "tu": "appellerais", "il/elle": "appellerait", "nous": "appellerions", "vous": "appelleriez", "ils/elles": "appelleraient" },
    "conditionnel passé première forme": { "je": "aurais appelé", "tu": "aurais appelé", "il/elle": "aurait appelé", "nous": "aurions appelé", "vous": "auriez appelé", "ils/elles": "auraient appelé" },
    "conditionnel passé deuxième forme": { "je": "eusse appelé", "tu": "eusses appelé", "il/elle": "eût appelé", "nous": "eussions appelé", "vous": "eussiez appelé", "ils/elles": "eussent appelé" },
    "impératif présent": { "tu": "appelle", "nous": "appelons", "vous": "appelez" },
    "impératif passé": { "tu": "aie appelé", "nous": "ayons appelé", "vous": "ayez appelé" },
    "infinitif présent": "appeler",
    "infinitif passé": "avoir appelé",
    "participe présent": "appelant",
    "participe passé": "appelé",
    "gérondif présent": "en appelant",
    "gérondif passé": "en ayant appelé"
  }
};

const arriver: Verb = {
  name: "arriver",
  conjugations: {
    "indicatif présent": { "je": "arrive", "tu": "arrives", "il/elle": "arrive", "nous": "arrivons", "vous": "arrivez", "ils/elles": "arrivent" },
    "indicatif imparfait": { "je": "arrivais", "tu": "arrivais", "il/elle": "arrivait", "nous": "arrivions", "vous": "arriviez", "ils/elles": "arrivaient" },
    "indicatif passé simple": { "je": "arrivai", "tu": "arrivais", "il/elle": "arriva", "nous": "arrivâmes", "vous": "arrivâtes", "ils/elles": "arrivèrent" },
    "indicatif futur simple": { "je": "arriverai", "tu": "arriveras", "il/elle": "arrivera", "nous": "arriverons", "vous": "arriverez", "ils/elles": "arriveront" },
    "indicatif passé composé": { "je": "suis arrivé", "tu": "es arrivé", "il/elle": "est arrivé", "nous": "sommes arrivés", "vous": "êtes arrivés", "ils/elles": "sont arrivés" },
    "indicatif plus-que-parfait": { "je": "étais arrivé", "tu": "étais arrivé", "il/elle": "était arrivé", "nous": "étions arrivés", "vous": "étiez arrivés", "ils/elles": "étaient arrivés" },
    "indicatif passé antérieur": { "je": "fus arrivé", "tu": "fus arrivé", "il/elle": "fut arrivé", "nous": "fûmes arrivés", "vous": "fûtes arrivés", "ils/elles": "furent arrivés" },
    "indicatif futur antérieur": { "je": "serai arrivé", "tu": "seras arrivé", "il/elle": "sera arrivé", "nous": "serons arrivés", "vous": "serez arrivés", "ils/elles": "seront arrivés" },
    "subjonctif présent": { "je": "que je arrive", "tu": "que tu arrives", "il/elle": "qu'il arrive", "nous": "que nous arrivions", "vous": "que vous arriviez", "ils/elles": "qu'ils arrivent" },
    "subjonctif imparfait": { "je": "que je arrivasse", "tu": "que tu arrivasses", "il/elle": "qu'il arrivât", "nous": "que nous arrivassions", "vous": "que vous arrivassiez", "ils/elles": "qu'ils arrivassent" },
    "subjonctif passé": { "je": "que je sois arrivé", "tu": "que tu sois arrivé", "il/elle": "qu'il soit arrivé", "nous": "que nous soyons arrivés", "vous": "que vous soyez arrivés", "ils/elles": "qu'ils soient arrivés" },
    "subjonctif plus-que-parfait": { "je": "que je fusse arrivé", "tu": "que tu fusses arrivé", "il/elle": "qu'il fût arrivé", "nous": "que nous fussions arrivés", "vous": "que vous fussiez arrivés", "ils/elles": "qu'ils fussent arrivés" },
    "conditionnel présent": { "je": "arriverais", "tu": "arriverais", "il/elle": "arriverait", "nous": "arriverions", "vous": "arriveriez", "ils/elles": "arriveraient" },
    "conditionnel passé première forme": { "je": "serais arrivé", "tu": "serais arrivé", "il/elle": "serait arrivé", "nous": "serions arrivés", "vous": "seriez arrivés", "ils/elles": "seraient arrivés" },
    "conditionnel passé deuxième forme": { "je": "fusse arrivé", "tu": "fusses arrivé", "il/elle": "fût arrivé", "nous": "fussions arrivés", "vous": "fussiez arrivés", "ils/elles": "fussent arrivés" },
    "impératif présent": { "tu": "arrive", "nous": "arrivons", "vous": "arrivez" },
    "impératif passé": { "tu": "sois arrivé", "nous": "soyons arrivés", "vous": "soyez arrivés" },
    "infinitif présent": "arriver",
    "infinitif passé": "être arrivé",
    "participe présent": "arrivant",
    "participe passé": "arrivé",
    "gérondif présent": "en arrivant",
    "gérondif passé": "en étant arrivé"
  }
};

export default {
  vouloir,
  devoir,
  savoir,
  avouer,
  accepter,
  attendre,
  aider,
  amener,
  appeler,
  arriver
};