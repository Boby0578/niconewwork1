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

export const aller: Verb = {
  name: "aller",
  conjugations: {
    "présent": { "je": "vais", "tu": "vas", "il/elle": "va", "nous": "allons", "vous": "allez", "ils/elles": "volent" },
    "imparfait": { "je": "allais", "tu": "allais", "il/elle": "allait", "nous": "allions", "vous": "alliez", "ils/elles": "allaient" },
    "futur": { "je": "irai", "tu": "iras", "il/elle": "ira", "nous": "irons", "vous": "irez", "ils/elles": "iront" },
    "passé composé": { "je": "suis allé(e)", "tu": "es allé(e)", "il/elle": "a allé(e)", "nous": "sommes allé(e)s", "vous": "êtes allé(e)s", "ils/elles": "ont allé(e)s" },
    "plus-que-parfait": { "je": "avais allé(e)", "tu": "avais allé(e)", "il/elle": "avait allé(e)", "nous": "avions allé(e)s", "vous": "aviez allé(e)s", "ils/elles": "avaient allé(e)s" },
    "futur antérieur": { "je": "aurai allé(e)", "tu": "auras allé(e)", "il/elle": "aura allé(e)", "nous": "aurons allé(e)s", "vous": "aurez allé(e)s", "ils/elles": "auront allé(e)s" },
    "subjonctif présent": { "que je": "aille", "que tu": "ailles", "qu'il/elle": "aille", "que nous": "allions", "que vous": "alliez", "qu'ils/elles": "aillent" },
    "subjonctif imparfait": { "que je": "allasse", "que tu": "allasses", "qu'il/elle": "allassent", "que nous": "allâmes", "que vous": "alliez", "qu'ils/elles": "allassent" },
    "conditionnel présent": { "je": "irais", "tu": "irais", "il/elle": "irait", "nous": "irions", "vous": "iriez", "ils/elles": "iraient" },
    "conditionnel passé": { "je": "serais allé(e)", "tu": "serais allé(e)", "il/elle": "serait allé(e)", "nous": "serions allé(e)s", "vous": "seriez allé(e)s", "ils/elles": "seraient allé(e)s" },
    "impératif présent": { "alle": "alle", "allons": "allons", "allez": "allez" },
    "impératif passé": { "sois allé(e)": "sois allé(e)", "soyons allé(e)s": "soyons allé(e)s", "soyez allé(e)s": "soyez allé(e)s" },
    "passé simple": { "je": "allai", "tu": "allâtes", "il/elle": "allé", "nous": "allâmes", "vous": "allâtes", "ils/elles": "allèrent" },
    "passé antérieur": { "je": "eus allé(e)", "tu": "eus allé(e)", "il/elle": "eut allé(e)", "nous": "eûmes allé(e)s", "vous": "eûtes allé(e)s", "ils/elles": "eurent allé(e)s" },
    "futur II": { "je": "serai allé(e)", "tu": "seras allé(e)", "il/elle": "sera allé(e)", "nous": "serons allé(e)s", "vous": "serez allé(e)s", "ils/elles": "seront allé(e)s" },
    "futur antérieur II": { "je": "aurai été allé(e)", "tu": "auras été allé(e)", "il/elle": "aura été allé(e)", "nous": "aurons été allé(e)s", "vous": "aurez été allé(e)s", "ils/elles": "auront été allé(e)s" },
    "subjonctif plus-que-parfait": { "que j'eusse allé(e)": "que j'eusse allé(e)", "que tu eusses allé(e)": "que tu eusses allé(e)", "qu'il/elle eût allé(e)": "qu'il/elle eût allé(e)", "que nous eussions allé(e)s": "que nous eussions allé(e)s", "que vous eussiez allé(e)s": "que vous eussiez allé(e)s", "qu'ils/elles eussent allé(e)s": "qu'ils/elles eussent allé(e)s" },
    "conditionnel passé II": { "je": "aurais été allé(e)", "tu": "aurais été allé(e)", "il/elle": "aurait été allé(e)", "nous": "aurions été allé(e)s", "vous": "auriez été allé(e)s", "ils/elles": "auraient été allé(e)s" },
    "impératif futur": { "que je sois allé(e)": "que je sois allé(e)", "que tu sois allé(e)": "que tu sois allé(e)", "qu'il/elle soit allé(e)": "qu'il/elle soit allé(e)", "que nous soyons allé(e)s": "que nous soyons allé(e)s", "que vous soyez allé(e)s": "que vous soyez allé(e)s", "qu'ils/elles soient allé(e)s": "qu'ils/elles soient allé(e)s" },
    "subjonctif futur": { "que je irai": "que je irai", "que tu iras": "que tu iras", "qu'il/elle ira": "qu'il/elle ira", "que nous irons": "que nous irons", "que vous irez": "que vous irez", "qu'ils/elles iront": "qu'ils/elles iront" },
    "conditionnel futur": { "je": "irai", "tu": "iras", "il/elle": "ira", "nous": "irons", "vous": "irez", "ils/elles": "iront" }
  }
};

export const faire: Verb = {
  name: "faire",
  conjugations: {
    "présent": { "je": "fais", "tu": "fais", "il/elle": "fait", "nous": "faisons", "vous": "faites", "ils/elles": "font" },
    "imparfait": { "je": "faisais", "tu": "faisais", "il/elle": "faisait", "nous": "faisions", "vous": "faisiez", "ils/elles": "faisaient" },
    "futur": { "je": "ferai", "tu": "feras", "il/elle": "fera", "nous": "ferons", "vous": "ferez", "ils/elles": "feront" },
    "passé composé": { "je": "ai fait", "tu": "as fait", "il/elle": "a fait", "nous": "avons fait", "vous": "avez fait", "ils/elles": "ont fait" },
    "plus-que-parfait": { "je": "avais fait", "tu": "avais fait", "il/elle": "avait fait", "nous": "avions fait", "vous": "aviez fait", "ils/elles": "avaient fait" },
    "futur antérieur": { "je": "aurai fait", "tu": "auras fait", "il/elle": "aura fait", "nous": "aurons fait", "vous": "aurez fait", "ils/elles": "auront fait" },
    "subjonctif présent": { "que je": "fasse", "que tu": "fasses", "qu'il/elle": "fasse", "que nous": "fassions", "que vous": "fassiez", "qu'ils/elles": "fassent" },
    "subjonctif imparfait": { "que je": "faisse", "que tu": "fasses", "qu'il/elle": "fît", "que nous": "fîmes", "que vous": "fîtes", "qu'ils/elles": "fissent" },
    "conditionnel présent": { "je": "ferais", "tu": "ferais", "il/elle": "ferait", "nous": "ferions", "vous": "feriez", "ils/elles": "feraient" },
    "conditionnel passé": { "je": "aurais fait", "tu": "aurais fait", "il/elle": "aurait fait", "nous": "aurions fait", "vous": "auriez fait", "ils/elles": "auraient fait" },
    "impératif présent": { "fais": "fais", "faisons": "faisons", "faites": "faites" },
    "impératif passé": { "aie fait": "aie fait", "ayons fait": "ayons fait", "avez fait": "avez fait" },
    "passé simple": { "je": "fui", "tu": "fus", "il/elle": "fit", "nous": "fûmes", "vous": "fûtes", "ils/elles": "firent" },
    "passé antérieur": { "je": "eus fait", "tu": "eus fait", "il/elle": "eut fait", "nous": "eûmes fait", "vous": "eûtes fait", "ils/elles": "eurent fait" },
    "futur II": { "je": "aurai fait", "tu": "auras fait", "il/elle": "aura fait", "nous": "aurons fait", "vous": "aurez fait", "ils/elles": "auront fait" },
    "futur antérieur II": { "je": "aurai été fait", "tu": "auras été fait", "il/elle": "aura été fait", "nous": "aurons été fait", "vous": "aurez été fait", "ils/elles": "auront été fait" },
    "subjonctif plus-que-parfait": { "que j'eusse fait": "que j'eusse fait", "que tu eusses fait": "que tu eusses fait", "qu'il/elle eût fait": "qu'il/elle eût fait", "que nous eussions fait": "que nous eussions fait", "que vous eussiez fait": "que vous eussiez fait", "qu'ils/elles eussent fait": "qu'ils/elles eussent fait" },
    "conditionnel passé II": { "je": "aurais été fait", "tu": "aurais été fait", "il/elle": "aurait été fait", "nous": "aurions été fait", "vous": "auriez été fait", "ils/elles": "auraient été fait" },
    "impératif futur": { "que je fasse": "que je fasse", "que tu fasses": "que tu fasses", "qu'il/elle fasse": "qu'il/elle fasse", "que nous fassions": "que nous fassions", "que vous fassiez": "que vous fassiez", "qu'ils/elles fassent": "qu'ils/elles fassent" },
    "subjonctif futur": { "que je ferai": "que je ferai", "que tu feras": "que tu feras", "qu'il/elle fera": "qu'il/elle fera", "que nous ferons": "que nous ferons", "que vous ferez": "que vous ferez", "qu'ils/elles feront": "qu'ils/elles feront" },
    "conditionnel futur": { "je": "ferai", "tu": "feras", "il/elle": "fera", "nous": "ferons", "vous": "ferez", "ils/elles": "feront" }
  }
};

export const voir: Verb = {
  name: "voir",
  conjugations: {
    "présent": { "je": "vois", "tu": "vois", "il/elle": "voit", "nous": "voyons", "vous": "voyez", "ils/elles": "voient" },
    "imparfait": { "je": "voyais", "tu": "voyais", "il/elle": "voyait", "nous": "voyions", "vous": "voyiez", "ils/elles": "voyaient" },
    "futur": { "je": "verrai", "tu": "verras", "il/elle": "vra", "nous": "verrons", "vous": "verrez", "ils/elles": "verront" },
    "passé composé": { "je": "ai vu", "tu": "as vu", "il/elle": "a vu", "nous": "avons vu", "vous": "avez vu", "ils/elles": "ont vu" },
    "plus-que-parfait": { "je": "avais vu", "tu": "avais vu", "il/elle": "avait vu", "nous": "avions vu", "vous": "aviez vu", "ils/elles": "avaient vu" },
    "futur antérieur": { "je": "aurai vu", "tu": "auras vu", "il/elle": "aura vu", "nous": "aurons vu", "vous": "aurez vu", "ils/elles": "auront vu" },
    "subjonctif présent": { "que je": "voie", "que tu": "voies", "qu'il/elle": "voie", "que nous": "voyions", "que vous": "voyez", "qu'ils/elles": "voient" },
    "subjonctif imparfait": { "que je": "visse", "que tu": "visses", "qu'il/elle": "vînt", "que nous": "vîmes", "que vous": "vîtes", "qu'ils/elles": "vissent" },
    "conditionnel présent": { "je": "verais", "tu": "verais", "il/elle": "verait", "nous": "verions", "vous": "veriez", "ils/elles": "veraient" },
    "conditionnel passé": { "je": "aurais vu", "tu": "aurais vu", "il/elle": "aurait vu", "nous": "aurions vu", "vous": "auriez vu", "ils/elles": "auraient vu" },
    "impératif présent": { "vois": "vois", "voyons": "voyons", "voyez": "voyez" },
    "impératif passé": { "aie vu": "aie vu", "ayons vu": "ayons vu", "avez vu": "avez vu" },
    "passé simple": { "je": "vis", "tu": "vist", "il/elle": "vit", "nous": "vîmes", "vous": "vîtes", "ils/elles": "virent" },
    "passé antérieur": { "je": "eus vu", "tu": "eus vu", "il/elle": "eut vu", "nous": "eûmes vu", "vous": "eûtes vu", "ils/elles": "eurent vu" },
    "futur II": { "je": "aurai vu", "tu": "auras vu", "il/elle": "aura vu", "nous": "aurons vu", "vous": "aurez vu", "ils/elles": "auront vu" },
    "futur antérieur II": { "je": "aurai été vu", "tu": "auras été vu", "il/elle": "aura été vu", "nous": "aurons été vu", "vous": "aurez été vu", "ils/elles": "auront été vu" },
    "subjonctif plus-que-parfait": { "que j'eusse vu": "que j'eusse vu", "que tu eusses vu": "que tu eusses vu", "qu'il/elle eût vu": "qu'il/elle eût vu", "que nous eussions vu": "que nous eussions vu", "que vous eussiez vu": "que vous eussiez vu", "qu'ils/elles eussent vu": "qu'ils/elles eussent vu" },
    "conditionnel passé II": { "je": "aurais été vu", "tu": "aurais été vu", "il/elle": "aurait été vu", "nous": "aurions été vu", "vous": "auriez été vu", "ils/elles": "auraient été vu" },
    "impératif futur": { "que je voie": "que je voie", "que tu voies": "que tu voies", "qu'il/elle voie": "qu'il/elle voie", "que nous voyions": "que nous voyions", "que vous voyiez": "que vous voyiez", "qu'ils/elles voient": "qu'ils/elles voient" },
    "subjonctif futur": { "que je verrai": "que je verrai", "que tu verras": "que tu verras", "qu'il/elle verra": "qu'il/elle verra", "que nous verrons": "que nous verrons", "que vous verrez": "que vous verrez", "qu'ils/elles verront": "qu'ils/elles verront" },
    "conditionnel futur": { "je": "verrai", "tu": "verras", "il/elle": "vra", "nous": "verrons", "vous": "verrez", "ils/elles": "verront" }
  }
};

export const prendre: Verb = {
  name: "prendre",
  conjugations: {
    "présent": { "je": "pren", "tu": "pren", "il/elle": "prend", "nous": "prenons", "vous": "prenez", "ils/elles": "prennent" },
    "imparfait": { "je": "prenais", "tu": "prenais", "il/elle": "prenait", "nous": "prenions", "vous": "preniez", "ils/elles": "prenaient" },
    "futur": { "je": "prendrai", "tu": "prendras", "il/elle": "prendra", "nous": "prendrons", "vous": "prendrez", "ils/elles": "prendront" },
    "passé composé": { "je": "ai pris", "tu": "as pris", "il/elle": "a pris", "nous": "avons pris", "vous": "avez pris", "ils/elles": "ont pris" },
    "plus-que-parfait": { "je": "avais pris", "tu": "avais pris", "il/elle": "avait pris", "nous": "avions pris", "vous": "aviez pris", "ils/elles": "avaient pris" },
    "futur antérieur": { "je": "aurai pris", "tu": "auras pris", "il/elle": "aura pris", "nous": "aurons pris", "vous": "aurez pris", "ils/elles": "auront pris" },
    "subjonctif présent": { "que je": "prenne", "que tu": "prennes", "qu'il/elle": "prenne", "que nous": "prenions", "que vous": "preniez", "qu'ils/elles": "prennent" },
    "subjonctif imparfait": { "que je": "prinsse", "que tu": "prinsses", "qu'il/elle": "prinât", "que nous": "prîmes", "que vous": "prîtes", "qu'ils/elles": "prinsent" },
    "conditionnel présent": { "je": "prendrais", "tu": "prendrais", "il/elle": "prendrait", "nous": "prendrions", "vous": "prendriez", "ils/elles": "prendraient" },
    "conditionnel passé": { "je": "aurais pris", "tu": "aurais pris", "il/elle": "aurait pris", "nous": "aurions pris", "vous": "auriez pris", "ils/elles": "auraient pris" },
    "impératif présent": { "pren", "prenons", "prenez" },
    "impératif passé": { "aie pris", "ayons pris", "avez pris" },
    "passé simple": { "je": "pris", "tu": "pris", "il/elle": "prit", "nous": "prîmes", "vous": "prîtes", "ils/elles": "prirent" },
    "passé antérieur": { "je": "eus pris", "tu": "eus pris", "il/elle": "eut pris", "nous": "eûmes pris", "vous": "eûtes pris", "ils/elles": "eurent pris" },
    "futur II": { "je": "aurai pris", "tu": "auras pris", "il/elle": "aura pris", "nous": "aurons pris", "vous": "aurez pris", "ils/elles": "auront pris" },
    "futur antérieur II": { "je": "aurai été pris", "tu": "auras été pris", "il/elle": "aura été pris", "nous": "aurons été pris", "vous": "aurez été pris", "ils/elles": "auront été pris" },
    "subjonctif plus-que-parfait": { "que j'eusse pris": "que j'eusse pris", "que tu eusses pris": "que tu eusses pris", "qu'il/elle eût pris": "qu'il/elle eût pris", "que nous eussions pris": "que nous eussions pris", "que vous eussiez pris": "que vous eussiez pris", "qu'ils/elles eussent pris": "qu'ils/elles eussent pris" },
    "conditionnel passé II": { "je": "aurais été pris", "tu": "aurais été pris", "il/elle": "aurait été pris", "nous": "aurions été pris", "vous": "auriez été pris", "ils/elles": "auraient été pris" },
    "impératif futur": { "que je prenne": "que je prenne", "que tu prenes": "que tu prenes", "qu'il/elle prenne": "qu'il/elle prenne", "que nous prenions": "que nous prenions", "que vous preniez": "que vous preniez", "qu'ils/elles prennent": "qu'ils/elles prennent" },
    "subjonctif futur": { "que je prendrai": "que je prendrai", "que tu prendras": "que tu prendras", "qu'il/elle prentra": "qu'il/elle prentra", "que nous prenons": "que nous prenons", "que vous prenez": "que vous prenez", "qu'ils/elles prennent": "qu'ils/elles prennent" },
    "conditionnel futur": { "je": "prendrai", "tu": "prendras", "il/elle": "prendra", "nous": "prendrons", "vous": "prendrez", "ils/elles": "prendront" }
  }
};

export const mettre: Verb = {
  name: "mettre",
  conjugations: {
    "présent": { "je": "mets", "tu": "mets", "il/elle": "met", "nous": "mettons", "vous": "mettez", "ils/elles": "mettent" },
    "imparfait": { "je": "mettais", "tu": "mettais", "il/elle": "mettait", "nous": "mettions", "vous": "mettiez", "ils/elles": "mettaient" },
    "futur": { "je": "mettrai", "tu": "mettras", "il/elle": "mettra", "nous": "mettrons", "vous": "mettrez", "ils/elles": "mettront" },
    "passé composé": { "je": "ai mis", "tu": "as mis", "il/elle": "a mis", "nous": "avons mis", "vous": "avez mis", "ils/elles": "ont mis" },
    "plus-que-parfait": { "je": "avais mis", "tu": "avais mis", "il/elle": "avait mis", "nous": "avions mis", "vous": "aviez mis", "ils/elles": "avaient mis" },
    "futur antérieur": { "je": "aurai mis", "tu": "auras mis", "il/elle": "aura mis", "nous": "aurons mis", "vous": "aurez mis", "ils/elles": "auront mis" },
    "subjonctif présent": { "que je": "mette", "que tu": "mettes", "qu'il/elle": "mette", "que nous": "mettions", "que vous": "mettiez", "qu'ils/elles": "mettent" },
    "subjonctif imparfait": { "que je": "missse", "que tu": "misses", "qu'il/elle": "mît", "que nous": "missions", "que vous": "missiez", "qu'ils/elles": "missent" },
    "conditionnel présent": { "je": "mettrais", "tu": "mettrais", "il/elle": "mettrait", "nous": "mettrions", "vous": "mettriez", "ils/elles": "mettraient" },
    "conditionnel passé": { "je": "aurais mis", "tu": "aurais mis", "il/elle": "aurait mis", "nous": "aurions mis", "vous": "auriez mis", "ils/elles": "auraient mis" },
    "impératif présent": { "mets": "mets", "mettons": "mettons", "mettez": "mettez" },
    "impératif passé": { "aie mis": "aie mis", "ayons mis": "ayons mis", "avez mis": "avez mis" },
    "passé simple": { "je": "mis", "tu": "mis", "il/elle": "mit", "nous": "mîmes", "vous": "mîtes", "ils/elles": "mirent" },
    "passé antérieur": { "je": "eus mis", "tu": "eus mis", "il/elle": "eut mis", "nous": "eûmes mis", "vous": "eûtes mis", "ils/elles": "eurent mis" },
    "futur II": { "je": "aurai mis", "tu": "auras mis", "il/elle": "aura mis", "nous": "aurons mis", "vous": "aurez mis", "ils/elles": "auront mis" },
    "futur antérieur II": { "je": "aurai été mis", "tu": "auras été mis", "il/elle": "aura été mis", "nous": "aurons été mis", "vous": "aurez été mis", "ils/elles": "auront été mis" },
    "subjonctif plus-que-parfait": { "que j'eusse mis": "que j'eusse mis", "que tu eusses mis": "que tu eusses mis", "qu'il/elle eût mis": "qu'il/elle eût mis", "que nous eussions mis": "que nous eussions mis", "que vous eussiez mis": "que vous eussiez mis", "qu'ils/elles eussent mis": "qu'ils/elles eussent mis" },
    "conditionnel passé II": { "je": "aurais été mis", "tu": "aurais été mis", "il/elle": "aurait été mis", "nous": "aurions été mis", "vous": "auriez été mis", "ils/elles": "auraient été mis" },
    "impératif futur": { "que je mette": "que je mette", "que tu mettes": "que tu mettes", "qu'il/elle mette": "qu'il/elle mette", "que nous mettions": "que nous mettions", "que vous mettiez": "que vous mettiez", "qu'ils/elles mettent": "qu'ils/elles mettent" },
    "subjonctif futur": { "que je mettrai": "que je mettrai", "que tu mettras": "que tu mettras", "qu'il/elle mettra": "qu'il/elle mettra", "que nous mettrons": "que nous mettrons", "que vous mettrez": "que vous mettrez", "qu'ils/elles mettront": "qu'ils/elles mettront" },
    "conditionnel futur": { "je": "mettrai", "tu": "mettras", "il/elle": "mettra", "nous": "mettrons", "vous": "mettrez", "ils/elles": "mettront" }
  }
};

export const tenir: Verb = {
  name: "tenir",
  conjugations: {
    "présent": { "je": "tiens", "tu": "tiens", "il/elle": "tient", "nous": "tenons", "vous": "tenez", "ils/elles": "tiennent" },
    "imparfait": { "je": "tenais", "tu": "tenais", "il/elle": "tenait", "nous": "tenions", "vous": "teniez", "ils/elles": "tenaient" },
    "futur": { "je": "tiendrai", "tu": "tiendras", "il/elle": "tiendra", "nous": "tiendrons", "vous": "tiendrez", "ils/elles": "tiendront" },
    "passé composé": { "je": "ai tenu", "tu": "as tenu", "il/elle": "a tenu", "nous": "avons tenu", "vous": "avez tenu", "ils/elles": "ont tenu" },
    "plus-que-parfait": { "je": "avais tenu", "tu": "avais tenu", "il/elle": "avait tenu", "nous": "avions tenu", "vous": "aviez tenu", "ils/elles": "avaient tenu" },
    "futur antérieur": { "je": "aurai tenu", "tu": "auras tenu", "il/elle": "aura tenu", "nous": "aurons tenu", "vous": "aurez tenu", "ils/elles": "auront tenu" },
    "subjonctif présent": { "que je": "tienne", "que tu": "tienne", "qu'il/elle": "tienne", "que nous": "tenions", "que vous": "teniez", "qu'ils/elles": "tiennent" },
    "subjonctif imparfait": { "que je": "tîsse", "que tu": "tîsse", "qu'il/elle": "tît", "que nous": "tîmes", "que vous": "tîtes", "qu'ils/elles": "tîsent" },
    "conditionnel présent": { "je": "tiendrais", "tu": "tiendrais", "il/elle": "tiendrait", "nous": "tiendrions", "vous": "tiendriez", "ils/elles": "tiendraient" },
    "conditionnel passé": { "je": "aurais tenu", "tu": "aurais tenu", "il/elle": "aurait tenu", "nous": "aurions tenu", "vous": "auriez tenu", "ils/elles": "auraient tenu" },
    "impératif présent": { "tiens": "tiens", "tenons": "tenons", "tenez": "tenez" },
    "impératif passé": { "aie tenu": "aie tenu", "ayons tenu": "ayons tenu", "avez tenu": "avez tenu" },
    "passé simple": { "je": "tenu", "tu": "tenu", "il/elle": "eut", "nous": "eûmes", "vous": "eûtes", "ils/elles": "eurent" },
    "passé antérieur": { "je": "eus tenu", "tu": "eus tenu", "il/elle": "eut tenu", "nous": "eûmes tenu", "vous": "eûtes tenu", "ils/elles": "eurent tenu" },
    "futur II": { "je": "aurai tenu", "tu": "auras tenu", "il/elle": "aura tenu", "nous": "aurons tenu", "vous": "aurez tenu", "ils/elles": "auront tenu" },
    "futur antérieur II": { "je": "aurai été tenu", "tu": "auras été tenu", "il/elle": "aura été tenu", "nous": "aurons été tenu", "vous": "aurez été tenu", "ils/elles": "auront été tenu" },
    "subjonctif plus-que-parfait": { "que j'eusse tenu": "que j'eusse tenu", "que tu eusses tenu": "que tu eusses tenu", "qu'il/elle eût tenu": "qu'il/elle eût tenu", "que nous eussions tenu": "que nous eussions tenu", "que vous eussiez tenu": "que vous eussiez tenu", "qu'ils/elles eussent tenu": "qu'ils/elles eussent tenu" },
    "conditionnel passé II": { "je": "aurais été tenu", "tu": "aurais été tenu", "il/elle": "aurait été tenu", "nous": "aurions été tenu", "vous": "auriez été tenu", "ils/elles": "auraient été tenu" },
    "impératif futur": { "que je tiens": "que je tiens", "que tu tiens": "que tu tiens", "qu'il/elle tient": "qu'il/elle tient", "que nous tenions": "que nous tenions", "que vous teniez": "que vous teniez", "qu'ils/elles tiennent": "qu'ils/elles tiennent" },
    "subjonctif futur": { "que je tiendrai": "que je tiendrai", "que tu tiendras": "que tu tiendras", "qu'il/elle tiendra": "qu'il/elle tiendra", "que nous tenons": "que nous tenons", "que vous teniez": "que vous teniez", "qu'ils/elles tiennent": "qu'ils/elles tiennent" },
    "conditionnel futur": { "je": "tiendrai", "tu": "tiendras", "il/elle": "tiendra", "nous": "tiendrons", "vous": "tiendrez", "ils/elles": "tiendront" }
  }
};

export const paraître: Verb = {
  name: "paraître",
  conjugations: {
    "présent": { "je": "parais", "tu": "parais", "il/elle": "paraît", "nous": "paraîtons", "vous": "paraissez", "ils/elles": "paraissent" },
    "imparfait": { "je": "paraissais", "tu": "paraissais", "il/elle": "paraissait", "nous": "paraissions", "vous": "paraissiez", "ils/elles": "paraissaient" },
    "futur": { "je": "paraîtrai", "tu": "paraîtras", "il/elle": "paraîtra", "nous": "paraîtrons", "vous": "paraîtrez", "ils/elles": "paraîtront" },
    "passé composé": { "je": "ai paru", "tu": "as paru", "il/elle": "a paru", "nous": "avons paru", "vous": "avez paru", "ils/elles": "ont paru" },
    "plus-que-parfait": { "je": "avais paru", "tu": "avais paru", "il/elle": "avait paru", "nous": "avions paru", "vous": "aviez paru", "ils/elles": "avaient paru" },
    "futur antérieur": { "je": "aurai paru", "tu": "auras paru", "il/elle": "aura paru", "nous": "aurons paru", "vous": "aurez paru", "ils/elles": "auront paru" },
    "subjonctif présent": { "que je": "paraisse", "que tu": "paraisse", "qu'il/elle": "paraisse", "que nous": "paraissions", "que vous": "paraissiez", "qu'ils/elles": "paraissent" },
    "subjonctif imparfait": { "que je": "parusse", "que tu": "parusses", "qu'il/elle": "parût", "que nous": "parûmes", "que vous": "parûtes", "qu'ils/elles": "parussent" },
    "conditionnel présent": { "je": "paraîtrai", "tu": "paraîtrai", "il/elle": "paraîtrait", "nous": "paraîtrions", "vous": "paraîtriez", "ils/elles": "paraîtraient" },
    "conditionnel passé": { "je": "aurais paru", "tu": "aurais paru", "il/elle": "aurait paru", "nous": "aurions paru", "vous": "auriez paru", "ils/elles": "auraient paru" },
    "impératif présent": { "parais": "parais", "paraîtons": "paraîtons", "paraissiez": "paraissiez" },
    "impératif passé": { "aie paru": "aie paru", "ayons paru": "ayons paru", "avez paru": "avez paru" },
    "passé simple": { "je": "pus", "tu": "pus", "il/elle": "put", "nous": "pûmes", "vous": "pûtes", "ils/elles": "purent" },
    "passé antérieur": { "je": "eus paru", "tu": "eus paru", "il/elle": "eut paru", "nous": "eûmes paru", "vous": "eûtes paru", "ils/elles": "eurent paru" },
    "futur II": { "je": "aurai paru", "tu": "auras paru", "il/elle": "aura paru", "nous": "aurons paru", "vous": "aurez paru", "ils/elles": "auront paru" },
    "futur antérieur II": { "je": "aurai été paru", "tu": "auras été paru", "il/elle": "aura été paru", "nous": "aurons été paru", "vous": "aurez été paru", "ils/elles": "auront été paru" },
    "subjonctif plus-que-parfait": { "que j'eusse paru": "que j'eusse paru", "que tu eusses paru": "que tu eusses paru", "qu'il/elle eût paru": "qu'il/elle eût paru", "que nous eussions paru": "que nous eussions paru", "que vous eussiez paru": "que vous eussiez paru", "qu'ils/elles eussent paru": "qu'ils/elles eussent paru" },
    "conditionnel passé II": { "je": "aurais été paru", "tu": "aurais été paru", "il/elle": "aurait été paru", "nous": "aurions été paru", "vous": "auriez été paru", "ils/elles": "auraient été paru" },
    "impératif futur": { "que je paraisse": "que je paraisse", "que tu paraisse": "que tu paraisse", "qu'il/elle paraisse": "qu'il/elle paraisse", "que nous paraissions": "que nous paraissions", "que vous paraissiez": "que vous paraissiez", "qu'ils/elles paraissent": "qu'ils/elles paraissent" },
    "subjonctif futur": { "que je paraîtrai": "que je paraîtrai", "que tu paraîtras": "que tu paraîtras", "qu'il/elle paraîtra": "qu'il/elle paraîtra", "que nous paraîtrons": "que nous paraîtrons", "que vous paraîtrez": "que vous paraîtrez", "qu'ils/elles paraîtront": "qu'ils/elles paraîtront" },
    "conditionnel futur": { "je": "paraîtrai", "tu": "paraîtras", "il/elle": "paraîtra", "nous": "paraîtrons", "vous": "paraîtrez", "ils/elles": "paraîtront" }
  }
};

export default {
  aller,
  faire,
  voir,
  mettre,
  tenir,
  paraître
};