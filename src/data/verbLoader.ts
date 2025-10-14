import { Verb } from './verbs';

export const getVerbsForLevel = async (level: number): Promise<Verb[]> => {
    let modules: Record<string, () => Promise<{ default: Verb | null }>>;

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

    const verbs = loadedModules
        .map(module => module.default)
        .filter((verb): verb is Verb => verb !== null && verb.name !== '');

    return verbs;
}