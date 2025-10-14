import { Verb } from '../../verbs';

const voir: Verb = {
  name: "voir",
  conjugations: {
    "indicatif présent": { "je": "vois", "tu": "vois", "il/elle": "voit", "nous": "voyons", "vous": "voyez", "ils/elles": "voient" },
    "indicatif imparfait": { "je": "voyais", "tu": "voyais", "il/elle": "voyait", "nous": "voyions", "vous": "voyiez", "ils/elles": "voyaient" },
    "indicatif passé simple": { "je": "vis", "tu": "vis", "il/elle": "vit", "nous": "vîmes", "vous": "vîtes", "ils/elles": "virent" },
    "indicatif futur simple": { "je": "verrai", "tu": "verras", "il/elle": "verra", "nous": "verrons", "vous": "verrez", "ils/elles": "verront" },
    "indicatif passé composé": { "je": "ai vu", "tu": "as vu", "il/elle": "a vu", "nous": "avons vu", "vous": "avez vu", "ils/elles": "ont vu" },
    "indicatif plus-que-parfait": { "je": "avais vu", "tu": "avais vu", "il/elle": "avait vu", "nous": "avions vu", "vous": "aviez vu", "ils/elles": "avaient vu" },
    "indicatif passé antérieur": { "je": "eus vu", "tu": "eus vu", "il/elle": "eut vu", "nous": "eûmes vu", "vous": "eûtes vu", "ils/elles": "eurent vu" },
    "indicatif futur antérieur": { "je": "aurai vu", "tu": "auras vu", "il/elle": "aura vu", "nous": "aurons vu", "vous": "aurez vu", "ils/elles": "auront vu" },
    "subjonctif présent": { "je": "que je voie", "tu": "que tu voies", "il/elle": "qu'il voie", "nous": "que nous voyions", "vous": "que vous voyiez", "ils/elles": "qu'ils voient" },
    "subjonctif imparfait": { "je": "que je visse", "tu": "que tu visses", "il/elle": "qu'il vît", "nous": "que nous vissions", "vous": "que vous vissiez", "ils/elles": "qu'ils vissent" },
    "subjonctif passé": { "je": "que j'aie vu", "tu": "que tu aies vu", "il/elle": "qu'il ait vu", "nous": "que nous ayons vu", "vous": "que vous ayez vu", "ils/elles": "qu'ils aient vu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse vu", "tu": "que tu eusses vu", "il/elle": "qu'il eût vu", "nous": "que nous eussions vu", "vous": "que vous eussiez vu", "ils/elles": "qu'ils eussent vu" },
    "conditionnel présent": { "je": "verrais", "tu": "verrais", "il/elle": "verrait", "nous": "verrions", "vous": "verriez", "ils/elles": "verraient" },
    "conditionnel passé première forme": { "je": "aurais vu", "tu": "aurais vu", "il/elle": "aurait vu", "nous": "aurions vu", "vous": "auriez vu", "ils/elles": "auraient vu" },
    "conditionnel passé deuxième forme": { "je": "eusse vu", "tu": "eusses vu", "il/elle": "eût vu", "nous": "eussions vu", "vous": "eussiez vu", "ils/elles": "eussent vu" },
    "impératif présent": { "tu": "vois", "nous": "voyons", "vous": "voyez" },
    "impératif passé": { "tu": "aie vu", "nous": "ayons vu", "vous": "ayez vu" },
    "infinitif présent": "voir",
    "infinitif passé": "avoir vu",
    "participe présent": "voyant",
    "participe passé": "vu",
    "gérondif présent": "en voyant",
    "gérondif passé": "en ayant vu"
  }
};

const donner: Verb = {
  name: "donner",
  conjugations: {
    "indicatif présent": { "je": "donne", "tu": "donnes", "il/elle": "donne", "nous": "donnons", "vous": "donnez", "ils/elles": "donnent" },
    "indicatif imparfait": { "je": "donnais", "tu": "donnais", "il/elle": "donnait", "nous": "donnions", "vous": "donniez", "ils/elles": "donnaient" },
    "indicatif passé simple": { "je": "donnai", "tu": "donnas", "il/elle": "donna", "nous": "donnâmes", "vous": "donnâtes", "ils/elles": "donnèrent" },
    "indicatif futur simple": { "je": "donnerai", "tu": "donneras", "il/elle": "donnera", "nous": "donnerons", "vous": "donnerez", "ils/elles": "donneront" },
    "indicatif passé composé": { "je": "ai donné", "tu": "as donné", "il/elle": "a donné", "nous": "avons donné", "vous": "avez donné", "ils/elles": "ont donné" },
    "indicatif plus-que-parfait": { "je": "avais donné", "tu": "avais donné", "il/elle": "avait donné", "nous": "avions donné", "vous": "aviez donné", "ils/elles": "avaient donné" },
    "indicatif passé antérieur": { "je": "eus donné", "tu": "eus donné", "il/elle": "eut donné", "nous": "eûmes donné", "vous": "eûtes donné", "ils/elles": "eurent donné" },
    "indicatif futur antérieur": { "je": "aurai donné", "tu": "auras donné", "il/elle": "aura donné", "nous": "aurons donné", "vous": "aurez donné", "ils/elles": "auront donné" },
    "subjonctif présent": { "je": "que je donne", "tu": "que tu donnes", "il/elle": "qu'il donne", "nous": "que nous donnions", "vous": "que vous donniez", "ils/elles": "qu'ils donnent" },
    "subjonctif imparfait": { "je": "que je donnasse", "tu": "que tu donnasses", "il/elle": "qu'il donnât", "nous": "que nous donnassions", "vous": "que vous donnassiez", "ils/elles": "qu'ils donnassent" },
    "subjonctif passé": { "je": "que j'aie donné", "tu": "que tu aies donné", "il/elle": "qu'il ait donné", "nous": "que nous ayons donné", "vous": "que vous ayez donné", "ils/elles": "qu'ils aient donné" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse donné", "tu": "que tu eusses donné", "il/elle": "qu'il eût donné", "nous": "que nous eussions donné", "vous": "que vous eussiez donné", "ils/elles": "qu'ils eussent donné" },
    "conditionnel présent": { "je": "donnerais", "tu": "donnerais", "il/elle": "donnerait", "nous": "donnerions", "vous": "donneriez", "ils/elles": "donneraient" },
    "conditionnel passé première forme": { "je": "aurais donné", "tu": "aurais donné", "il/elle": "aurait donné", "nous": "aurions donné", "vous": "auriez donné", "ils/elles": "auraient donné" },
    "conditionnel passé deuxième forme": { "je": "eusse donné", "tu": "eusses donné", "il/elle": "eût donné", "nous": "eussions donné", "vous": "eussiez donné", "ils/elles": "eussent donné" },
    "impératif présent": { "tu": "donne", "nous": "donnons", "vous": "donnez" },
    "impératif passé": { "tu": "aie donné", "nous": "ayons donné", "vous": "ayez donné" },
    "infinitif présent": "donner",
    "infinitif passé": "avoir donné",
    "participe présent": "donnant",
    "participe passé": "donné",
    "gérondif présent": "en donnant",
    "gérondif passé": "en ayant donné"
  }
};

const prendre: Verb = {
  name: "prendre",
  conjugations: {
    "indicatif présent": { "je": "prends", "tu": "prends", "il/elle": "prend", "nous": "prenons", "vous": "prenez", "ils/elles": "prennent" },
    "indicatif imparfait": { "je": "prenais", "tu": "prenais", "il/elle": "prenait", "nous": "prenions", "vous": "preniez", "ils/elles": "prenaient" },
    "indicatif passé simple": { "je": "pris", "tu": "pris", "il/elle": "prit", "nous": "prîmes", "vous": "prîtes", "ils/elles": "prirent" },
    "indicatif futur simple": { "je": "prendrai", "tu": "prendras", "il/elle": "prendra", "nous": "prendrons", "vous": "prendrez", "ils/elles": "prendront" },
    "indicatif passé composé": { "je": "ai pris", "tu": "as pris", "il/elle": "a pris", "nous": "avons pris", "vous": "avez pris", "ils/elles": "ont pris" },
    "indicatif plus-que-parfait": { "je": "avais pris", "tu": "avais pris", "il/elle": "avait pris", "nous": "avions pris", "vous": "aviez pris", "ils/elles": "avaient pris" },
    "indicatif passé antérieur": { "je": "eus pris", "tu": "eus pris", "il/elle": "eut pris", "nous": "eûmes pris", "vous": "eûtes pris", "ils/elles": "eurent pris" },
    "indicatif futur antérieur": { "je": "aurai pris", "tu": "auras pris", "il/elle": "aura pris", "nous": "aurons pris", "vous": "aurez pris", "ils/elles": "auront pris" },
    "subjonctif présent": { "je": "que je prenne", "tu": "que tu prennes", "il/elle": "qu'il prenne", "nous": "que nous prenions", "vous": "que vous preniez", "ils/elles": "qu'ils prennent" },
    "subjonctif imparfait": { "je": "que je prisse", "tu": "que tu prisses", "il/elle": "qu'il prît", "nous": "que nous prissions", "vous": "que vous prissiez", "ils/elles": "qu'ils prissent" },
    "subjonctif passé": { "je": "que j'aie pris", "tu": "que tu aies pris", "il/elle": "qu'il ait pris", "nous": "que nous ayons pris", "vous": "que vous ayez pris", "ils/elles": "qu'ils aient pris" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse pris", "tu": "que tu eusses pris", "il/elle": "qu'il eût pris", "nous": "que nous eussions pris", "vous": "que vous eussiez pris", "ils/elles": "qu'ils eussent pris" },
    "conditionnel présent": { "je": "prendrais", "tu": "prendrais", "il/elle": "prendrait", "nous": "prendrions", "vous": "prendriez", "ils/elles": "prendraient" },
    "conditionnel passé première forme": { "je": "aurais pris", "tu": "aurais pris", "il/elle": "aurait pris", "nous": "aurions pris", "vous": "auriez pris", "ils/elles": "auraient pris" },
    "conditionnel passé deuxième forme": { "je": "eusse pris", "tu": "eusses pris", "il/elle": "eût pris", "nous": "eussions pris", "vous": "eussiez pris", "ils/elles": "eussent pris" },
    "impératif présent": { "tu": "prends", "nous": "prenons", "vous": "prenez" },
    "impératif passé": { "tu": "aie pris", "nous": "ayons pris", "vous": "ayez pris" },
    "infinitif présent": "prendre",
    "infinitif passé": "avoir pris",
    "participe présent": "prenant",
    "participe passé": "pris",
    "gérondif présent": "en prenant",
    "gérondif passé": "en ayant pris"
  }
};

const mettre: Verb = {
  name: "mettre",
  conjugations: {
    "indicatif présent": { "je": "mets", "tu": "mets", "il/elle": "met", "nous": "mettons", "vous": "mettez", "ils/elles": "mettent" },
    "indicatif imparfait": { "je": "mettais", "tu": "mettais", "il/elle": "mettait", "nous": "mettions", "vous": "mettiez", "ils/elles": "mettaient" },
    "indicatif passé simple": { "je": "mis", "tu": "mis", "il/elle": "mit", "nous": "mîmes", "vous": "mîtes", "ils/elles": "mirent" },
    "indicatif futur simple": { "je": "mettrai", "tu": "mettras", "il/elle": "mettra", "nous": "mettrons", "vous": "mettrez", "ils/elles": "mettront" },
    "indicatif passé composé": { "je": "ai mis", "tu": "as mis", "il/elle": "a mis", "nous": "avons mis", "vous": "avez mis", "ils/elles": "ont mis" },
    "indicatif plus-que-parfait": { "je": "avais mis", "tu": "avais mis", "il/elle": "avait mis", "nous": "avions mis", "vous": "aviez mis", "ils/elles": "avaient mis" },
    "indicatif passé antérieur": { "je": "eus mis", "tu": "eus mis", "il/elle": "eut mis", "nous": "eûmes mis", "vous": "eûtes mis", "ils/elles": "eurent mis" },
    "indicatif futur antérieur": { "je": "aurai mis", "tu": "auras mis", "il/elle": "aura mis", "nous": "aurons mis", "vous": "aurez mis", "ils/elles": "auront mis" },
    "subjonctif présent": { "je": "que je mette", "tu": "que tu mettes", "il/elle": "qu'il mette", "nous": "que nous mettions", "vous": "que vous mettiez", "ils/elles": "qu'ils mettent" },
    "subjonctif imparfait": { "je": "que je misse", "tu": "que tu misses", "il/elle": "qu'il mît", "nous": "que nous missions", "vous": "que vous missiez", "ils/elles": "qu'ils missent" },
    "subjonctif passé": { "je": "que j'aie mis", "tu": "que tu aies mis", "il/elle": "qu'il ait mis", "nous": "que nous ayons mis", "vous": "que vous ayez mis", "ils/elles": "qu'ils aient mis" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse mis", "tu": "que tu eusses mis", "il/elle": "qu'il eût mis", "nous": "que nous eussions mis", "vous": "que vous eussiez mis", "ils/elles": "qu'ils eussent mis" },
    "conditionnel présent": { "je": "mettrais", "tu": "mettrais", "il/elle": "mettrait", "nous": "mettrions", "vous": "mettriez", "ils/elles": "mettraient" },
    "conditionnel passé première forme": { "je": "aurais mis", "tu": "aurais mis", "il/elle": "aurait mis", "nous": "aurions mis", "vous": "auriez mis", "ils/elles": "auraient mis" },
    "conditionnel passé deuxième forme": { "je": "eusse mis", "tu": "eusses mis", "il/elle": "eût mis", "nous": "eussions mis", "vous": "eussiez mis", "ils/elles": "eussent mis" },
    "impératif présent": { "tu": "mets", "nous": "mettons", "vous": "mettez" },
    "impératif passé": { "tu": "aie mis", "nous": "ayons mis", "vous": "ayez mis" },
    "infinitif présent": "mettre",
    "infinitif passé": "avoir mis",
    "participe présent": "mettant",
    "participe passé": "mis",
    "gérondif présent": "en mettant",
    "gérondif passé": "en ayant mis"
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

const entrer: Verb = {
  name: "entrer",
  conjugations: {
    "indicatif présent": { "je": "entre", "tu": "entres", "il/elle": "entre", "nous": "entrons", "vous": "entrez", "ils/elles": "entrent" },
    "indicatif imparfait": { "je": "entrais", "tu": "entrais", "il/elle": "entrait", "nous": "entrions", "vous": "entriez", "ils/elles": "entraient" },
    "indicatif passé simple": { "je": "entrai", "tu": "entras", "il/elle": "entra", "nous": "entrâmes", "vous": "entrâtes", "ils/elles": "entrèrent" },
    "indicatif futur simple": { "je": "entrerai", "tu": "entreras", "il/elle": "entrera", "nous": "entrerons", "vous": "entrerez", "ils/elles": "entreront" },
    "indicatif passé composé": { "je": "suis entré", "tu": "es entré", "il/elle": "est entré", "nous": "sommes entrés", "vous": "êtes entrés", "ils/elles": "sont entrés" },
    "indicatif plus-que-parfait": { "je": "étais entré", "tu": "étais entré", "il/elle": "était entré", "nous": "étions entrés", "vous": "étiez entrés", "ils/elles": "étaient entrés" },
    "indicatif passé antérieur": { "je": "fus entré", "tu": "fus entré", "il/elle": "fut entré", "nous": "fûmes entrés", "vous": "fûtes entrés", "ils/elles": "furent entrés" },
    "indicatif futur antérieur": { "je": "serai entré", "tu": "seras entré", "il/elle": "sera entré", "nous": "serons entrés", "vous": "serez entrés", "ils/elles": "seront entrés" },
    "subjonctif présent": { "je": "que j'entre", "tu": "que tu entres", "il/elle": "qu'il entre", "nous": "que nous entrions", "vous": "que vous entriez", "ils/elles": "qu'ils entrent" },
    "subjonctif imparfait": { "je": "que j'entrasse", "tu": "que tu entrasses", "il/elle": "qu'il entrât", "nous": "que nous entrassions", "vous": "que vous entrassiez", "ils/elles": "qu'ils entrassent" },
    "subjonctif passé": { "je": "que je sois entré", "tu": "que tu sois entré", "il/elle": "qu'il soit entré", "nous": "que nous soyons entrés", "vous": "que vous soyez entrés", "ils/elles": "qu'ils soient entrés" },
    "subjonctif plus-que-parfait": { "je": "que je fusse entré", "tu": "que tu fusses entré", "il/elle": "qu'il fût entré", "nous": "que nous fussions entrés", "vous": "que vous fussiez entrés", "ils/elles": "qu'ils fussent entrés" },
    "conditionnel présent": { "je": "entrerais", "tu": "entrerais", "il/elle": "entrerait", "nous": "entrerions", "vous": "entreriez", "ils/elles": "entreraient" },
    "conditionnel passé première forme": { "je": "serais entré", "tu": "serais entré", "il/elle": "serait entré", "nous": "serions entrés", "vous": "seriez entrés", "ils/elles": "seraient entrés" },
    "conditionnel passé deuxième forme": { "je": "fusse entré", "tu": "fusses entré", "il/elle": "fût entré", "nous": "fussions entrés", "vous": "fussiez entrés", "ils/elles": "fussent entrés" },
    "impératif présent": { "tu": "entre", "nous": "entrons", "vous": "entrez" },
    "impératif passé": { "tu": "sois entré", "nous": "soyons entrés", "vous": "soyez entrés" },
    "infinitif présent": "entrer",
    "infinitif passé": "être entré",
    "participe présent": "entrant",
    "participe passé": "entré",
    "gérondif présent": "en entrant",
    "gérondif passé": "en étant entré"
  }
};

const chercher: Verb = {
  name: "chercher",
  conjugations: {
    "indicatif présent": { "je": "cherche", "tu": "cherches", "il/elle": "cherche", "nous": "cherchons", "vous": "cherchez", "ils/elles": "cherchent" },
    "indicatif imparfait": { "je": "cherchais", "tu": "cherchais", "il/elle": "cherchait", "nous": "cherchions", "vous": "cherchiez", "ils/elles": "cherchaient" },
    "indicatif passé simple": { "je": "cherchai", "tu": "cherchas", "il/elle": "chercha", "nous": "cherchâmes", "vous": "cherchâtes", "ils/elles": "cherchèrent" },
    "indicatif futur simple": { "je": "chercherai", "tu": "chercheras", "il/elle": "cherchera", "nous": "chercherons", "vous": "chercherez", "ils/elles": "chercheront" },
    "indicatif passé composé": { "je": "ai cherché", "tu": "as cherché", "il/elle": "a cherché", "nous": "avons cherché", "vous": "avez cherché", "ils/elles": "ont cherché" },
    "indicatif plus-que-parfait": { "je": "avais cherché", "tu": "avais cherché", "il/elle": "avait cherché", "nous": "avions cherché", "vous": "aviez cherché", "ils/elles": "avaient cherché" },
    "indicatif passé antérieur": { "je": "eus cherché", "tu": "eus cherché", "il/elle": "eut cherché", "nous": "eûmes cherché", "vous": "eûtes cherché", "ils/elles": "eurent cherché" },
    "indicatif futur antérieur": { "je": "aurai cherché", "tu": "auras cherché", "il/elle": "aura cherché", "nous": "aurons cherché", "vous": "aurez cherché", "ils/elles": "auront cherché" },
    "subjonctif présent": { "je": "que je cherche", "tu": "que tu cherches", "il/elle": "qu'il cherche", "nous": "que nous cherchions", "vous": "que vous cherchiez", "ils/elles": "qu'ils cherchent" },
    "subjonctif imparfait": { "je": "que je cherchasse", "tu": "que tu cherchasses", "il/elle": "qu'il cherchât", "nous": "que nous cherchassions", "vous": "que vous cherchassiez", "ils/elles": "qu'ils cherchassent" },
    "subjonctif passé": { "je": "que j'aie cherché", "tu": "que tu aies cherché", "il/elle": "qu'il ait cherché", "nous": "que nous ayons cherché", "vous": "que vous ayez cherché", "ils/elles": "qu'ils aient cherché" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse cherché", "tu": "que tu eusses cherché", "il/elle": "qu'il eût cherché", "nous": "que nous eussions cherché", "vous": "que vous eussiez cherché", "ils/elles": "qu'ils eussent cherché" },
    "conditionnel présent": { "je": "chercherais", "tu": "chercherais", "il/elle": "chercherait", "nous": "chercherions", "vous": "chercheriez", "ils/elles": "chercheraient" },
    "conditionnel passé première forme": { "je": "aurais cherché", "tu": "aurais cherché", "il/elle": "aurait cherché", "nous": "aurions cherché", "vous": "auriez cherché", "ils/elles": "auraient cherché" },
    "conditionnel passé deuxième forme": { "je": "eusse cherché", "tu": "eusses cherché", "il/elle": "eût cherché", "nous": "eussions cherché", "vous": "eussiez cherché", "ils/elles": "eussent cherché" },
    "impératif présent": { "tu": "cherche", "nous": "cherchons", "vous": "cherchez" },
    "impératif passé": { "tu": "aie cherché", "nous": "ayons cherché", "vous": "ayez cherché" },
    "infinitif présent": "chercher",
    "infinitif passé": "avoir cherché",
    "participe présent": "cherchant",
    "participe passé": "cherché",
    "gérondif présent": "en cherchant",
    "gérondif passé": "en ayant cherché"
  }
};

const demander: Verb = {
  name: "demander",
  conjugations: {
    "indicatif présent": { "je": "demande", "tu": "demandes", "il/elle": "demande", "nous": "demandons", "vous": "demandez", "ils/elles": "demandent" },
    "indicatif imparfait": { "je": "demandais", "tu": "demandais", "il/elle": "demandait", "nous": "demandions", "vous": "demandiez", "ils/elles": "demandaient" },
    "indicatif passé simple": { "je": "demandai", "tu": "demandas", "il/elle": "demanda", "nous": "demandâmes", "vous": "demandâtes", "ils/elles": "demandèrent" },
    "indicatif futur simple": { "je": "demanderai", "tu": "demanderas", "il/elle": "demandera", "nous": "demanderons", "vous": "demanderez", "ils/elles": "demanderont" },
    "indicatif passé composé": { "je": "ai demandé", "tu": "as demandé", "il/elle": "a demandé", "nous": "avons demandé", "vous": "avez demandé", "ils/elles": "ont demandé" },
    "indicatif plus-que-parfait": { "je": "avais demandé", "tu": "avais demandé", "il/elle": "avait demandé", "nous": "avions demandé", "vous": "aviez demandé", "ils/elles": "avaient demandé" },
    "indicatif passé antérieur": { "je": "eus demandé", "tu": "eus demandé", "il/elle": "eut demandé", "nous": "eûmes demandé", "vous": "eûtes demandé", "ils/elles": "eurent demandé" },
    "indicatif futur antérieur": { "je": "aurai demandé", "tu": "auras demandé", "il/elle": "aura demandé", "nous": "aurons demandé", "vous": "aurez demandé", "ils/elles": "auront demandé" },
    "subjonctif présent": { "je": "que je demande", "tu": "que tu demandes", "il/elle": "qu'il demande", "nous": "que nous demandions", "vous": "que vous demandiez", "ils/elles": "qu'ils demandent" },
    "subjonctif imparfait": { "je": "que je demandasse", "tu": "que tu demandasses", "il/elle": "qu'il demandât", "nous": "que nous demandassions", "vous": "que vous demandassiez", "ils/elles": "qu'ils demandassent" },
    "subjonctif passé": { "je": "que j'aie demandé", "tu": "que tu aies demandé", "il/elle": "qu'il ait demandé", "nous": "que nous ayons demandé", "vous": "que vous ayez demandé", "ils/elles": "qu'ils aient demandé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse demandé", "tu": "que tu eusses demandé", "il/elle": "qu'il eût demandé", "nous": "que nous eussions demandé", "vous": "que vous eussiez demandé", "ils/elles": "qu'ils eussent demandé" },
    "conditionnel présent": { "je": "demanderais", "tu": "demanderais", "il/elle": "demanderait", "nous": "demanderions", "vous": "demanderiez", "ils/elles": "demanderaient" },
    "conditionnel passé première forme": { "je": "aurais demandé", "tu": "aurais demandé", "il/elle": "aurait demandé", "nous": "aurions demandé", "vous": "auriez demandé", "ils/elles": "auraient demandé" },
    "conditionnel passé deuxième forme": { "je": "eusse demandé", "tu": "eusses demandé", "il/elle": "eût demandé", "nous": "eussions demandé", "vous": "eussiez demandé", "ils/elles": "eussent demandé" },
    "impératif présent": { "tu": "demande", "nous": "demandons", "vous": "demandez" },
    "impératif passé": { "tu": "aie demandé", "nous": "ayons demandé", "vous": "ayez demandé" },
    "infinitif présent": "demander",
    "infinitif passé": "avoir demandé",
    "participe présent": "demandant",
    "participe passé": "demandé",
    "gérondif présent": "en demandant",
    "gérondif passé": "en ayant demandé"
  }
};

const écouter: Verb = {
  name: "écouter",
  conjugations: {
    "indicatif présent": { "je": "écoute", "tu": "écoutes", "il/elle": "écoute", "nous": "écoutons", "vous": "écoutez", "ils/elles": "écoutent" },
    "indicatif imparfait": { "je": "écoutais", "tu": "écoutais", "il/elle": "écoutait", "nous": "écoutions", "vous": "écoutiez", "ils/elles": "écoutaient" },
    "indicatif passé simple": { "je": "écoutai", "tu": "écoutas", "il/elle": "écouta", "nous": "écoutâmes", "vous": "écoutâtes", "ils/elles": "écoutèrent" },
    "indicatif futur simple": { "je": "écouterai", "tu": "écouteras", "il/elle": "écoutera", "nous": "écouterons", "vous": "écouterez", "ils/elles": "écouteront" },
    "indicatif passé composé": { "je": "ai écouté", "tu": "as écouté", "il/elle": "a écouté", "nous": "avons écouté", "vous": "avez écouté", "ils/elles": "ont écouté" },
    "indicatif plus-que-parfait": { "je": "avais écouté", "tu": "avais écouté", "il/elle": "avait écouté", "nous": "avions écouté", "vous": "aviez écouté", "ils/elles": "avaient écouté" },
    "indicatif passé antérieur": { "je": "eus écouté", "tu": "eus écouté", "il/elle": "eut écouté", "nous": "eûmes écouté", "vous": "eûtes écouté", "ils/elles": "eurent écouté" },
    "indicatif futur antérieur": { "je": "aurai écouté", "tu": "auras écouté", "il/elle": "aura écouté", "nous": "aurons écouté", "vous": "aurez écouté", "ils/elles": "auront écouté" },
    "subjonctif présent": { "je": "que j'écoute", "tu": "que tu écoutes", "il/elle": "qu'il écoute", "nous": "que nous écoutions", "vous": "que vous écoutiez", "ils/elles": "qu'ils écoutent" },
    "subjonctif imparfait": { "je": "que j'écoutasse", "tu": "que tu écoutasses", "il/elle": "qu'il écoutât", "nous": "que nous écoutassions", "vous": "que vous écoutassiez", "ils/elles": "qu'ils écoutassent" },
    "subjonctif passé": { "je": "que j'aie écouté", "tu": "que tu aies écouté", "il/elle": "qu'il ait écouté", "nous": "que nous ayons écouté", "vous": "que vous ayez écouté", "ils/elles": "qu'ils aient écouté" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse écouté", "tu": "que tu eusses écouté", "il/elle": "qu'il eût écouté", "nous": "que nous eussions écouté", "vous": "que vous eussiez écouté", "ils/elles": "qu'ils eussent écouté" },
    "conditionnel présent": { "je": "écouterais", "tu": "écouterais", "il/elle": "écouterait", "nous": "écouterions", "vous": "écouteriez", "ils/elles": "écouteraient" },
    "conditionnel passé première forme": { "je": "aurais écouté", "tu": "aurais écouté", "il/elle": "aurait écouté", "nous": "aurions écouté", "vous": "auriez écouté", "ils/elles": "auraient écouté" },
    "conditionnel passé deuxième forme": { "je": "eusse écouté", "tu": "eusses écouté", "il/elle": "eût écouté", "nous": "eussions écouté", "vous": "eussiez écouté", "ils/elles": "eussent écouté" },
    "impératif présent": { "tu": "écoute", "nous": "écoutons", "vous": "écoutez" },
    "impératif passé": { "tu": "aie écouté", "nous": "ayons écouté", "vous": "ayez écouté" },
    "infinitif présent": "écouter",
    "infinitif passé": "avoir écouté",
    "participe présent": "écoutant",
    "participe passé": "écouté",
    "gérondif présent": "en écoutant",
    "gérondif passé": "en ayant écouté"
  }
};

const habiter: Verb = {
  name: "habiter",
  conjugations: {
    "indicatif présent": { "je": "habite", "tu": "habites", "il/elle": "habite", "nous": "habitons", "vous": "habitez", "ils/elles": "habitent" },
    "indicatif imparfait": { "je": "habitais", "tu": "habitais", "il/elle": "habitait", "nous": "habitions", "vous": "habitiez", "ils/elles": "habitaient" },
    "indicatif passé simple": { "je": "habitai", "tu": "habitas", "il/elle": "habita", "nous": "habitâmes", "vous": "habitâtes", "ils/elles": "habitèrent" },
    "indicatif futur simple": { "je": "habiterai", "tu": "habiteras", "il/elle": "habitera", "nous": "habiterons", "vous": "habiterez", "ils/elles": "habiteront" },
    "indicatif passé composé": { "je": "ai habité", "tu": "as habité", "il/elle": "a habité", "nous": "avons habité", "vous": "avez habité", "ils/elles": "ont habité" },
    "indicatif plus-que-parfait": { "je": "avais habité", "tu": "avais habité", "il/elle": "avait habité", "nous": "avions habité", "vous": "aviez habité", "ils/elles": "avaient habité" },
    "indicatif passé antérieur": { "je": "eus habité", "tu": "eus habité", "il/elle": "eut habité", "nous": "eûmes habité", "vous": "eûtes habité", "ils/elles": "eurent habité" },
    "indicatif futur antérieur": { "je": "aurai habité", "tu": "auras habité", "il/elle": "aura habité", "nous": "aurons habité", "vous": "aurez habité", "ils/elles": "auront habité" },
    "subjonctif présent": { "je": "que j'habite", "tu": "que tu habites", "il/elle": "qu'il habite", "nous": "que nous habitions", "vous": "que vous habitiez", "ils/elles": "qu'ils habitent" },
    "subjonctif imparfait": { "je": "que j'habitasse", "tu": "que tu habitasses", "il/elle": "qu'il habitât", "nous": "que nous habitassions", "vous": "que vous habitassiez", "ils/elles": "qu'ils habitassent" },
    "subjonctif passé": { "je": "que j'aie habité", "tu": "que tu aies habité", "il/elle": "qu'il ait habité", "nous": "que nous ayons habité", "vous": "que vous ayez habité", "ils/elles": "qu'ils aient habité" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse habité", "tu": "que tu eusses habité", "il/elle": "qu'il eût habité", "nous": "que nous eussions habité", "vous": "que vous eussiez habité", "ils/elles": "qu'ils eussent habité" },
    "conditionnel présent": { "je": "habiterais", "tu": "habiterais", "il/elle": "habiterait", "nous": "habiterions", "vous": "habiteriez", "ils/elles": "habiteraient" },
    "conditionnel passé première forme": { "je": "aurais habité", "tu": "aurais habité", "il/elle": "aurait habité", "nous": "aurions habité", "vous": "auriez habité", "ils/elles": "auraient habité" },
    "conditionnel passé deuxième forme": { "je": "eusse habité", "tu": "eusses habité", "il/elle": "eût habité", "nous": "eussions habité", "vous": "eussiez habité", "ils/elles": "eussent habité" },
    "impératif présent": { "tu": "habite", "nous": "habitons", "vous": "habitez" },
    "impératif passé": { "tu": "aie habité", "nous": "ayons habité", "vous": "ayez habité" },
    "infinitif présent": "habiter",
    "infinitif passé": "avoir habité",
    "participe présent": "habitant",
    "participe passé": "habité",
    "gérondif présent": "en habitant",
    "gérondif passé": "en ayant habité"
  }
};

export default {
  voir,
  donner,
  prendre,
  mettre,
  sortir,
  entrer,
  chercher,
  demander,
  écouter,
  habiter
};