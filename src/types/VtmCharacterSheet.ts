export type Predator =
    | "Alleycat"
    | "Bagger"
    | "Blood Leech"
    | "Cleaver"
    | "Consensualist"
    | "Extortionist"
    | "Farmer"
    | "Graverobber"
    | "Grim Reaper"
    | "Montero"
    | "Osiris"
    | "Pursuer"
    | "Roadside Killer"
    | "Sandman"
    | "Scene Queen"
    | "Siren"
    | "Trapdoor";

export type Clan =
    | "Banu Haqim"
    | "Brujah"
    | "Gangrel"
    | "Hecata"
    | "Lasombra"
    | "Malkavian"
    | "Ministry"
    | "Nosferatu"
    | "Ravnos"
    | "Salubri"
    | "Toreador"
    | "Tremere"
    | "Tzimisce"
    | "Ventrue";

export type Generation =
    | "I"
    | "II"
    | "III"
    | "IV"
    | "V"
    | "VI"
    | "VII"
    | "VIII"
    | "IX"
    | "X"
    | "XI"
    | "XII"
    | "XIII"
    | "XIV"
    | "XV";

export type AttributeValue = 1 | 2 | 3 | 4 | 5;

export type Attributes = {
    physical: {
        strength: AttributeValue;
        dexterity: AttributeValue;
        stamina: AttributeValue;
    };
    social: {
        charisma: AttributeValue;
        manipulation: AttributeValue;
        composure: AttributeValue;
    };
    mental: {
        intelligence: AttributeValue;
        wits: AttributeValue;
        resolve: AttributeValue;
    };
};

export type Discipline = {
    level: number;
    powers: string[];
};

export type SkillName =
    | "Athletics"
    | "Brawl"
    | "Craft"
    | "Drive"
    | "Firearms"
    | "Investigation"
    | "Larceny"
    | "Melee"
    | "Performance"
    | "Stealth"
    | "Survival"
    | "Animal Ken"
    | "Etiquette"
    | "Insight"
    | "Intimidation"
    | "Leadership"
    | "Persuasion"
    | "Streetwise"
    | "Subterfuge"
    | "Academics"
    | "Awareness"
    | "Finance"
    | "Medicine"
    | "Occult"
    | "Politics"
    | "Science"
    | "Technology";

export type Skill = 0 | 1 | 2 | 3 | 4 | 5 | { value: 0 | 1 | 2 | 3 | 4 | 5; specialty: string };

export type Skills = Record<SkillName, Skill>;

export type DamageCounter = {
    superficialDamage: number;
    aggravatedDamage: number;
};

export interface VtmCharacterSheet {
    name: string;
    chronicle: string;
    sire: string;
    concept: string;
    ambition: string;
    desire: string;
    predator: Predator;
    clan: Clan;
    generation: Generation;
    attributes: Attributes;
    health: {
        max: number;
        current: DamageCounter;
    };
    willpower: {
        max: number;
        current: DamageCounter;
    };
    skills: Skills;
    disciplines: Record<string, Discipline>;
    resonance: string;
    hunger: 0 | 1 | 2 | 3 | 4 | 5;
    humanity: number;
}
