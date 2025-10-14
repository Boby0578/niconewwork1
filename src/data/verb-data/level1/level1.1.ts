import { Verb } from '../../verbs';

const être: Verb = {
  name: "être",
  conjugations: {
    "indicatif présent": { "je": "suis", "tu": "es", "il/elle": "est", "nous": "sommes", "vous": "êtes", "ils/elles": "sont" },
    "indicatif imparfait": { "je": "étais", "tu": "étais", "il/elle": "était", "nous": "étions", "vous": "étiez", "ils/elles": "étaient" },
    "indicatif passé simple": { "je": "fus", "tu": "fus", "il/elle": "fut", "nous": "fûmes", "vous": "fûtes", "ils/elles": "furent" },
    "indicatif futur simple": { "je": "serai", "tu": "seras", "il/elle": "sera", "nous": "serons", "vous": "serez", "ils/elles": "seront" },
    "indicatif passé composé": { "je": "ai été", "tu": "as été", "il/elle": "a été", "nous": "avons été", "vous": "avez été", "ils/elles": "ont été" },
    "indicatif plus-que-parfait": { "je": "avais été", "tu": "avais été", "il/elle": "avait été", "nous": "avions été", "vous": "aviez été", "ils/elles": "avaient été" },
    "indicatif passé antérieur": { "je": "eus été", "tu": "eus été", "il/elle": "eut été", "nous": "eûmes été", "vous": "eûtes été", "ils/elles": "eurent été" },
    "indicatif futur antérieur": { "je": "aurai été", "tu": "auras été", "il/elle": "aura été", "nous": "aurons été", "vous": "aurez été", "ils/elles": "auront été" },
    "subjonctif présent": { "je": "que je sois", "tu": "que tu sois", "il/elle": "qu'il soit", "nous": "que nous soyons", "vous": "que vous soyez", "ils/elles": "qu'ils soient" },
    "subjonctif imparfait": { "je": "que je fusse", "tu": "que tu fusses", "il/elle": "qu'il fût", "nous": "que nous fussions", "vous": "que vous fussiez", "ils/elles": "qu'ils fussent" },
    "subjonctif passé": { "je": "que j'aie été", "tu": "que tu aies été", "il/elle": "qu'il ait été", "nous": "que nous ayons été", "vous": "que vous ayez été", "ils/elles": "qu'ils aient été" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse été", "tu": "que tu eusses été", "il/elle": "qu'il eût été", "nous": "que nous eussions été", "vous": "que vous eussiez été", "ils/elles": "qu'ils eussent été" },
    "conditionnel présent": { "je": "serais", "tu": "serais", "il/elle": "serait", "nous": "serions", "vous": "seriez", "ils/elles": "seraient" },
    "conditionnel passé première forme": { "je": "aurais été", "tu": "aurais été", "il/elle": "aurait été", "nous": "aurions été", "vous": "auriez été", "ils/elles": "auraient été" },
    "conditionnel passé deuxième forme": { "je": "eusse été", "tu": "eusses été", "il/elle": "eût été", "nous": "eussions été", "vous": "eussiez été", "ils/elles": "eussent été" },
    "impératif présent": { "tu": "sois", "nous": "soyons", "vous": "soyez" },
    "impératif passé": { "tu": "aie été", "nous": "ayons été", "vous": "ayez été" },
    "infinitif présent": "être",
    "infinitif passé": "avoir été",
    "participe présent": "étant",
    "participe passé": "été",
    "gérondif présent": "en étant",
    "gérondif passé": "en ayant été"
  }
};

const avoir: Verb = {
  name: "avoir",
  conjugations: {
    "indicatif présent": { "je": "ai", "tu": "as", "il/elle": "a", "nous": "avons", "vous": "avez", "ils/elles": "ont" },
    "indicatif imparfait": { "je": "avais", "tu": "avais", "il/elle": "avait", "nous": "avions", "vous": "aviez", "ils/elles": "avaient" },
    "indicatif passé simple": { "je": "eus", "tu": "eus", "il/elle": "eut", "nous": "eûmes", "vous": "eûtes", "ils/elles": "eurent" },
    "indicatif futur simple": { "je": "aurai", "tu": "auras", "il/elle": "aura", "nous": "aurons", "vous": "aurez", "ils/elles": "auront" },
    "indicatif passé composé": { "je": "ai eu", "tu": "as eu", "il/elle": "a eu", "nous": "avons eu", "vous": "avez eu", "ils/elles": "ont eu" },
    "indicatif plus-que-parfait": { "je": "avais eu", "tu": "avais eu", "il/elle": "avait eu", "nous": "avions eu", "vous": "aviez eu", "ils/elles": "avaient eu" },
    "indicatif passé antérieur": { "je": "eus eu", "tu": "eus eu", "il/elle": "eut eu", "nous": "eûmes eu", "vous": "eûtes eu", "ils/elles": "eurent eu" },
    "indicatif futur antérieur": { "je": "aurai eu", "tu": "auras eu", "il/elle": "aura eu", "nous": "aurons eu", "vous": "aurez eu", "ils/elles": "auront eu" },
    "subjonctif présent": { "je": "que j'aie", "tu": "que tu aies", "il/elle": "qu'il ait", "nous": "que nous ayons", "vous": "que vous ayez", "ils/elles": "qu'ils aient" },
    "subjonctif imparfait": { "je": "que j'eusse", "tu": "que tu eusses", "il/elle": "qu'il eût", "nous": "que nous eussions", "vous": "que vous eussiez", "ils/elles": "qu'ils eussent" },
    "subjonctif passé": { "je": "que j'aie eu", "tu": "que tu aies eu", "il/elle": "qu'il ait eu", "nous": "que nous ayons eu", "vous": "que vous ayez eu", "ils/elles": "qu'ils aient eu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse eu", "tu": "que tu eusses eu", "il/elle": "qu'il eût eu", "nous": "que nous eussions eu", "vous": "que vous eussiez eu", "ils/elles": "qu'ils eussent eu" },
    "conditionnel présent": { "je": "aurais", "tu": "aurais", "il/elle": "aurait", "nous": "aurions", "vous": "auriez", "ils/elles": "auraient" },
    "conditionnel passé première forme": { "je": "aurais eu", "tu": "aurais eu", "il/elle": "aurait eu", "nous": "aurions eu", "vous": "auriez eu", "ils/elles": "auraient eu" },
    "conditionnel passé deuxième forme": { "je": "eusse eu", "tu": "eusses eu", "il/elle": "eût eu", "nous": "eussions eu", "vous": "eussiez eu", "ils/elles": "eussent eu" },
    "impératif présent": { "tu": "aie", "nous": "ayons", "vous": "ayez" },
    "impératif passé": { "tu": "aie eu", "nous": "ayons eu", "vous": "ayez eu" },
    "infinitif présent": "avoir",
    "infinitif passé": "avoir eu",
    "participe présent": "ayant",
    "participe passé": "eu",
    "gérondif présent": "en ayant",
    "gérondif passé": "en ayant eu"
  }
};

const faire: Verb = {
  name: "faire",
  conjugations: {
    "indicatif présent": { "je": "fais", "tu": "fais", "il/elle": "fait", "nous": "faisons", "vous": "faites", "ils/elles": "font" },
    "indicatif imparfait": { "je": "faisais", "tu": "faisais", "il/elle": "faisait", "nous": "faisions", "vous": "faisiez", "ils/elles": "faisaient" },
    "indicatif passé simple": { "je": "fis", "tu": "fis", "il/elle": "fit", "nous": "fîmes", "vous": "fîtes", "ils/elles": "firent" },
    "indicatif futur simple": { "je": "ferai", "tu": "feras", "il/elle": "fera", "nous": "ferons", "vous": "ferez", "ils/elles": "feront" },
    "indicatif passé composé": { "je": "ai fait", "tu": "as fait", "il/elle": "a fait", "nous": "avons fait", "vous": "avez fait", "ils/elles": "ont fait" },
    "indicatif plus-que-parfait": { "je": "avais fait", "tu": "avais fait", "il/elle": "avait fait", "nous": "avions fait", "vous": "aviez fait", "ils/elles": "avaient fait" },
    "indicatif passé antérieur": { "je": "eus fait", "tu": "eus fait", "il/elle": "eut fait", "nous": "eûmes fait", "vous": "eûtes fait", "ils/elles": "eurent fait" },
    "indicatif futur antérieur": { "je": "aurai fait", "tu": "auras fait", "il/elle": "aura fait", "nous": "aurons fait", "vous": "aurez fait", "ils/elles": "auront fait" },
    "subjonctif présent": { "je": "que je fasse", "tu": "que tu fasses", "il/elle": "qu'il fasse", "nous": "que nous fassions", "vous": "que vous fassiez", "ils/elles": "qu'ils fassent" },
    "subjonctif imparfait": { "je": "que je fisse", "tu": "que tu fisses", "il/elle": "qu'il fît", "nous": "que nous fissions", "vous": "que vous fissiez", "ils/elles": "qu'ils fissent" },
    "subjonctif passé": { "je": "que j'aie fait", "tu": "que tu aies fait", "il/elle": "qu'il ait fait", "nous": "que nous ayons fait", "vous": "que vous ayez fait", "ils/elles": "qu'ils aient fait" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse fait", "tu": "que tu eusses fait", "il/elle": "qu'il eût fait", "nous": "que nous eussions fait", "vous": "que vous eussiez fait", "ils/elles": "qu'ils eussent fait" },
    "conditionnel présent": { "je": "ferais", "tu": "ferais", "il/elle": "ferait", "nous": "ferions", "vous": "feriez", "ils/elles": "feraient" },
    "conditionnel passé première forme": { "je": "aurais fait", "tu": "aurais fait", "il/elle": "aurait fait", "nous": "aurions fait", "vous": "auriez fait", "ils/elles": "auraient fait" },
    "conditionnel passé deuxième forme": { "je": "eusse fait", "tu": "eusses fait", "il/elle": "eût fait", "nous": "eussions fait", "vous": "eussiez fait", "ils/elles": "eussent fait" },
    "impératif présent": { "tu": "fais", "nous": "faisons", "vous": "faites" },
    "impératif passé": { "tu": "aie fait", "nous": "ayons fait", "vous": "ayez fait" },
    "infinitif présent": "faire",
    "infinitif passé": "avoir fait",
    "participe présent": "faisant",
    "participe passé": "fait",
    "gérondif présent": "en faisant",
    "gérondif passé": "en ayant fait"
  }
};

const dire: Verb = {
  name: "dire",
  conjugations: {
    "indicatif présent": { "je": "dis", "tu": "dis", "il/elle": "dit", "nous": "disons", "vous": "dites", "ils/elles": "disent" },
    "indicatif imparfait": { "je": "disais", "tu": "disais", "il/elle": "disait", "nous": "disions", "vous": "disiez", "ils/elles": "disaient" },
    "indicatif passé simple": { "je": "dis", "tu": "dis", "il/elle": "dit", "nous": "dîmes", "vous": "dîtes", "ils/elles": "dirent" },
    "indicatif futur simple": { "je": "dirai", "tu": "diras", "il/elle": "dira", "nous": "dirons", "vous": "direz", "ils/elles": "diront" },
    "indicatif passé composé": { "je": "ai dit", "tu": "as dit", "il/elle": "a dit", "nous": "avons dit", "vous": "avez dit", "ils/elles": "ont dit" },
    "indicatif plus-que-parfait": { "je": "avais dit", "tu": "avais dit", "il/elle": "avait dit", "nous": "avions dit", "vous": "aviez dit", "ils/elles": "avaient dit" },
    "indicatif passé antérieur": { "je": "eus dit", "tu": "eus dit", "il/elle": "eut dit", "nous": "eûmes dit", "vous": "eûtes dit", "ils/elles": "eurent dit" },
    "indicatif futur antérieur": { "je": "aurai dit", "tu": "auras dit", "il/elle": "aura dit", "nous": "aurons dit", "vous": "aurez dit", "ils/elles": "auront dit" },
    "subjonctif présent": { "je": "que je dise", "tu": "que tu dises", "il/elle": "qu'il dise", "nous": "que nous disions", "vous": "que vous disiez", "ils/elles": "qu'ils disent" },
    "subjonctif imparfait": { "je": "que je disse", "tu": "que tu disses", "il/elle": "qu'il dît", "nous": "que nous dissions", "vous": "que vous dissiez", "ils/elles": "qu'ils dissent" },
    "subjonctif passé": { "je": "que j'aie dit", "tu": "que tu aies dit", "il/elle": "qu'il ait dit", "nous": "que nous ayons dit", "vous": "que vous ayez dit", "ils/elles": "qu'ils aient dit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse dit", "tu": "que tu eusses dit", "il/elle": "qu'il eût dit", "nous": "que nous eussions dit", "vous": "que vous eussiez dit", "ils/elles": "qu'ils eussent dit" },
    "conditionnel présent": { "je": "dirais", "tu": "dirais", "il/elle": "dirait", "nous": "dirions", "vous": "diriez", "ils/elles": "diraient" },
    "conditionnel passé première forme": { "je": "aurais dit", "tu": "aurais dit", "il/elle": "aurait dit", "nous": "aurions dit", "vous": "auriez dit", "ils/elles": "auraient dit" },
    "conditionnel passé deuxième forme": { "je": "eusse dit", "tu": "eusses dit", "il/elle": "eût dit", "nous": "eussions dit", "vous": "eussiez dit", "ils/elles": "eussent dit" },
    "impératif présent": { "tu": "dis", "nous": "disons", "vous": "dites" },
    "impératif passé": { "tu": "aie dit", "nous": "ayons dit", "vous": "ayez dit" },
    "infinitif présent": "dire",
    "infinitif passé": "avoir dit",
    "participe présent": "disant",
    "participe passé": "dit",
    "gérondif présent": "en disant",
    "gérondif passé": "en ayant dit"
  }
};

const pouvoir: Verb = {
  name: "pouvoir",
  conjugations: {
    "indicatif présent": { "je": "peux", "tu": "peux", "il/elle": "peut", "nous": "pouvons", "vous": "pouvez", "ils/elles": "peuvent" },
    "indicatif imparfait": { "je": "pouvais", "tu": "pouvais", "il/elle": "pouvait", "nous": "pouvions", "vous": "pouviez", "ils/elles": "pouvaient" },
    "indicatif passé simple": { "je": "pus", "tu": "pus", "il/elle": "put", "nous": "pûmes", "vous": "pûtes", "ils/elles": "purent" },
    "indicatif futur simple": { "je": "pourrai", "tu": "pourras", "il/elle": "pourra", "nous": "pourrons", "vous": "pourrez", "ils/elles": "pourront" },
    "indicatif passé composé": { "je": "ai pu", "tu": "as pu", "il/elle": "a pu", "nous": "avons pu", "vous": "avez pu", "ils/elles": "ont pu" },
    "indicatif plus-que-parfait": { "je": "avais pu", "tu": "avais pu", "il/elle": "avait pu", "nous": "avions pu", "vous": "aviez pu", "ils/elles": "avaient pu" },
    "indicatif passé antérieur": { "je": "eus pu", "tu": "eus pu", "il/elle": "eut pu", "nous": "eûmes pu", "vous": "eûtes pu", "ils/elles": "eurent pu" },
    "indicatif futur antérieur": { "je": "aurai pu", "tu": "auras pu", "il/elle": "aura pu", "nous": "aurons pu", "vous": "aurez pu", "ils/elles": "auront pu" },
    "subjonctif présent": { "je": "que je puisse", "tu": "que tu puisses", "il/elle": "qu'il puisse", "nous": "que nous puissions", "vous": "que vous puissiez", "ils/elles": "qu'ils puissent" },
    "subjonctif imparfait": { "je": "que je pusse", "tu": "que tu pusses", "il/elle": "qu'il pût", "nous": "que nous pussions", "vous": "que vous pussiez", "ils/elles": "qu'ils pussent" },
    "subjonctif passé": { "je": "que j'aie pu", "tu": "que tu aies pu", "il/elle": "qu'il ait pu", "nous": "que nous ayons pu", "vous": "que vous ayez pu", "ils/elles": "qu'ils aient pu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse pu", "tu": "que tu eusses pu", "il/elle": "qu'il eût pu", "nous": "que nous eussions pu", "vous": "que vous eussiez pu", "ils/elles": "qu'ils eussent pu" },
    "conditionnel présent": { "je": "pourrais", "tu": "pourrais", "il/elle": "pourrait", "nous": "pourrions", "vous": "pourriez", "ils/elles": "pourraient" },
    "conditionnel passé première forme": { "je": "aurais pu", "tu": "aurais pu", "il/elle": "aurait pu", "nous": "aurions pu", "vous": "auriez pu", "ils/elles": "auraient pu" },
    "conditionnel passé deuxième forme": { "je": "eusse pu", "tu": "eusses pu", "il/elle": "eût pu", "nous": "eussions pu", "vous": "eussiez pu", "ils/elles": "eussent pu" },
    "infinitif présent": "pouvoir",
    "infinitif passé": "avoir pu",
    "participe présent": "pouvant",
    "participe passé": "pu",
    "gérondif présent": "en pouvant",
    "gérondif passé": "en ayant pu"
  }
};

const aller: Verb = {
  name: "aller",
  conjugations: {
    "indicatif présent": { "je": "vais", "tu": "vas", "il/elle": "va", "nous": "allons", "vous": "allez", "ils/elles": "vont" },
    "indicatif imparfait": { "je": "allais", "tu": "allais", "il/elle": "allait", "nous": "allions", "vous": "alliez", "ils/elles": "allaient" },
    "indicatif passé simple": { "je": "allai", "tu": "allas", "il/elle": "alla", "nous": "allâmes", "vous": "allâtes", "ils/elles": "allèrent" },
    "indicatif futur simple": { "je": "irai", "tu": "iras", "il/elle": "ira", "nous": "irons", "vous": "irez", "ils/elles": "iront" },
    "indicatif passé composé": { "je": "suis allé", "tu": "es allé", "il/elle": "est allé", "nous": "sommes allés", "vous": "êtes allés", "ils/elles": "sont allés" },
    "indicatif plus-que-parfait": { "je": "étais allé", "tu": "étais allé", "il/elle": "était allé", "nous": "étions allés", "vous": "étiez allés", "ils/elles": "étaient allés" },
    "indicatif passé antérieur": { "je": "fus allé", "tu": "fus allé", "il/elle": "fut allé", "nous": "fûmes allés", "vous": "fûtes allés", "ils/elles": "furent allés" },
    "indicatif futur antérieur": { "je": "serai allé", "tu": "seras allé", "il/elle": "sera allé", "nous": "serons allés", "vous": "serez allés", "ils/elles": "seront allés" },
    "subjonctif présent": { "je": "que j'aille", "tu": "que tu ailles", "il/elle": "qu'il aille", "nous": "que nous allions", "vous": "que vous alliez", "ils/elles": "qu'ils aillent" },
    "subjonctif imparfait": { "je": "que j'allasse", "tu": "que tu allasses", "il/elle": "qu'il allât", "nous": "que nous allassions", "vous": "que vous allassiez", "ils/elles": "qu'ils allassent" },
    "subjonctif passé": { "je": "que je sois allé", "tu": "que tu sois allé", "il/elle": "qu'il soit allé", "nous": "que nous soyons allés", "vous": "que vous soyez allés", "ils/elles": "qu'ils soient allés" },
    "subjonctif plus-que-parfait": { "je": "que je fusse allé", "tu": "que tu fusses allé", "il/elle": "qu'il fût allé", "nous": "que nous fussions allés", "vous": "que vous fussiez allés", "ils/elles": "qu'ils fussent allés" },
    "conditionnel présent": { "je": "irais", "tu": "irais", "il/elle": "irait", "nous": "irions", "vous": "iriez", "ils/elles": "iraient" },
    "conditionnel passé première forme": { "je": "serais allé", "tu": "serais allé", "il/elle": "serait allé", "nous": "serions allés", "vous": "seriez allés", "ils/elles": "seraient allés" },
    "conditionnel passé deuxième forme": { "je": "fusse allé", "tu": "fusses allé", "il/elle": "fût allé", "nous": "fussions allés", "vous": "fussiez allés", "ils/elles": "fussent allés" },
    "impératif présent": { "tu": "va", "nous": "allons", "vous": "allez" },
    "impératif passé": { "tu": "sois allé", "nous": "soyons allés", "vous": "soyez allés" },
    "infinitif présent": "aller",
    "infinitif passé": "être allé",
    "participe présent": "allant",
    "participe passé": "allé",
    "gérondif présent": "en allant",
    "gérondif passé": "en étant allé"
  }
};

const venir: Verb = {
  name: "venir",
  conjugations: {
    "indicatif présent": { "je": "viens", "tu": "viens", "il/elle": "vient", "nous": "venons", "vous": "venez", "ils/elles": "viennent" },
    "indicatif imparfait": { "je": "venais", "tu": "venais", "il/elle": "venait", "nous": "venions", "vous": "veniez", "ils/elles": "venaient" },
    "indicatif passé simple": { "je": "vins", "tu": "vins", "il/elle": "vint", "nous": "vînmes", "vous": "vîntes", "ils/elles": "vinrent" },
    "indicatif futur simple": { "je": "viendrai", "tu": "viendras", "il/elle": "viendra", "nous": "viendrons", "vous": "viendrez", "ils/elles": "viendront" },
    "indicatif passé composé": { "je": "suis venu", "tu": "es venu", "il/elle": "est venu", "nous": "sommes venus", "vous": "êtes venus", "ils/elles": "sont venus" },
    "indicatif plus-que-parfait": { "je": "étais venu", "tu": "étais venu", "il/elle": "était venu", "nous": "étions venus", "vous": "étiez venus", "ils/elles": "étaient venus" },
    "indicatif passé antérieur": { "je": "fus venu", "tu": "fus venu", "il/elle": "fut venu", "nous": "fûmes venus", "vous": "fûtes venus", "ils/elles": "furent venus" },
    "indicatif futur antérieur": { "je": "serai venu", "tu": "seras venu", "il/elle": "sera venu", "nous": "serons venus", "vous": "serez venus", "ils/elles": "seront venus" },
    "subjonctif présent": { "je": "que je vienne", "tu": "que tu viennes", "il/elle": "qu'il vienne", "nous": "que nous venions", "vous": "que vous veniez", "ils/elles": "qu'ils viennent" },
    "subjonctif imparfait": { "je": "que je vinsse", "tu": "que tu vinsses", "il/elle": "qu'il vînt", "nous": "que nous vinssions", "vous": "que vous vinssiez", "ils/elles": "qu'ils vinssent" },
    "subjonctif passé": { "je": "que je sois venu", "tu": "que tu sois venu", "il/elle": "qu'il soit venu", "nous": "que nous soyons venus", "vous": "que vous soyez venus", "ils/elles": "qu'ils soient venus" },
    "subjonctif plus-que-parfait": { "je": "que je fusse venu", "tu": "que tu fusses venu", "il/elle": "qu'il fût venu", "nous": "que nous fussions venus", "vous": "que vous fussiez venus", "ils/elles": "qu'ils fussent venus" },
    "conditionnel présent": { "je": "viendrais", "tu": "viendrais", "il/elle": "viendrait", "nous": "viendrions", "vous": "viendriez", "ils/elles": "viendraient" },
    "conditionnel passé première forme": { "je": "serais venu", "tu": "serais venu", "il/elle": "serait venu", "nous": "serions venus", "vous": "seriez venus", "ils/elles": "seraient venus" },
    "conditionnel passé deuxième forme": { "je": "fusse venu", "tu": "fusses venu", "il/elle": "fût venu", "nous": "fussions venus", "vous": "fussiez venus", "ils/elles": "fussent venus" },
    "impératif présent": { "tu": "viens", "nous": "venons", "vous": "venez" },
    "impératif passé": { "tu": "sois venu", "nous": "soyons venus", "vous": "soyez venus" },
    "infinitif présent": "venir",
    "infinitif passé": "être venu",
    "participe présent": "venant",
    "participe passé": "venu",
    "gérondif présent": "en venant",
    "gérondif passé": "en étant venu"
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

export default {
  être,
  avoir,
  faire,
  dire,
  pouvoir,
  aller,
  venir,
  prendre,
  voir,
  donner
};