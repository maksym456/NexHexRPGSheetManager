export interface VtmCharacterSheet {
    name: string;
    chronicle: string;
    sire: string;
    concept: string;
    ambition: string;
    desire: string;
    predator: string;
    clan: string;
    generation: number;
    attributes: {
        physical: {
            strength: number;
            dexterity: number;
            stamina: number;
        };
        social: {
            charisma: number;
            manipulation: number;
            resolve: number;
        };
        mental: {
            perception: number;
            intelligence: number;
            wits: number;
        };
    };
    health: number;
    willpower: number;
    skills: {
        athletics: number;
        brawl: number;
        craft: number;
        drive: number;
        firearms: number;
        melee: number;
        larceny: number;
        stealth: number;
        survival: number;
        animalken: number;
        etiquette: number;
        insight: number;
        intimidation: number;
        leadership: number;
        performance: number;
        persuasion: number;
        streetwise: number;
        subterfuge: number;
        academics: number;
        awareness: number;
        finance: number;
        investigation: number;
        medicine: number;
        occult: number;
        politics: number;
        science: number;
        technology: number;
    }
    disciplines: Record<string, number>;
    resonance: string;
    hunger: number;
    humanity: number;
}