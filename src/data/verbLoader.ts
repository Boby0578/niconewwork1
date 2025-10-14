import { Verb } from './verbs';

export const getVerbsForLevel = async (level: number): Promise<Verb[]> => {
    let modules: Record<string, () => Promise<{ default: any }>>;

    switch (level) {
        case 1:
            modules = import.meta.glob('./verb-data/level1/*.ts');
            break;
        case 2:
            modules = import.meta.glob('./verb-data/level2/*.ts');
            break;
        case 3:
            modules = import.meta.glob('./verb-data/level3/*.ts');
            break;
        case 4:
            modules = import.meta.glob('./verb-data/level4/*.ts');
            break;
        default:
            // Fallback to level 1 if level is not recognized
            modules = import.meta.glob('./verb-data/level1/*.ts');
    }

    const verbPromises = Object.values(modules).map(importModule => importModule());
    const loadedModules = await Promise.all(verbPromises);

    const allVerbs = loadedModules.flatMap(module => {
        const defaultExport = module.default;
        if (!defaultExport) {
            return []; // Handles `export default null`
        }
        // Handles `export default { verb1, verb2 }`
        if (typeof defaultExport === 'object' && !defaultExport.name) {
            return Object.values(defaultExport);
        }
        // Handles `export default verb`
        if (defaultExport.name) {
            return [defaultExport];
        }
        return [];
    });

    const validVerbs = allVerbs.filter(
        (verb): verb is Verb => verb && typeof verb === 'object' && 'name' in verb && 'conjugations' in verb
    );

    // Remove duplicates by verb name
    const uniqueVerbs = Array.from(new Map(validVerbs.map(verb => [verb.name, verb])).values());

    return uniqueVerbs;
}