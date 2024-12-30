import { VtmCharacterSheet, AttributeValue, Discipline } from "../types/VtmCharacterSheet.ts";

function calculateHealth(stamina: AttributeValue, disciplines: Record<string, Discipline>): number {
    const baseHealth = stamina + 3;
    const fortitude = disciplines["Fortitude"];
    const resilienceBonus = fortitude?.powers.includes("Resilience") ? fortitude.level : 0;
    return baseHealth + resilienceBonus;
}

function calculateWillpower(composure: AttributeValue, resolve: AttributeValue): number {
    return composure + resolve;
}

export function createVtmCharacterSheet(input: Omit<Partial<VtmCharacterSheet>, "health" | "willpower">): VtmCharacterSheet {
    const {
        name,
        chronicle,
        sire,
        concept,
        ambition,
        desire,
        predator,
        clan,
        generation,
        attributes,
        skills,
        disciplines,
        resonance,
        hunger,
        humanity,
    } = input;

    if (!name) throw new Error("Invalid or missing name.");
    if (!chronicle) throw new Error("Invalid or missing chronicle.");
    if (!sire) throw new Error("Invalid or missing sire.");
    if (!concept) throw new Error("Invalid or missing concept.");
    if (!ambition) throw new Error("Invalid or missing ambition.");
    if (!desire) throw new Error("Invalid or missing desire.");
    if (!predator) throw new Error("Invalid or missing predator.");
    if (!clan) throw new Error("Invalid or missing clan.");
    if (!generation) throw new Error("Invalid or missing generation.");
    if (!attributes) throw new Error("Invalid or missing attributes.");
    if (!humanity) throw new Error("Invalid or missing humanity.");
    const { physical, social, mental } = attributes;
    if (!physical || !social || !mental) throw new Error("Attributes must include physical, social, and mental.");

    if (!skills || Object.keys(skills).length !== 27) throw new Error("Skills must have exactly 27 entries.");

    if (!disciplines) throw new Error("Disciplines must be defined.");

    for (const [disciplineName, discipline] of Object.entries(disciplines)) {
        if (discipline.powers.length !== discipline.level) {
            throw new Error(
                `Discipline "${disciplineName}" has ${discipline.powers.length} powers, but its level is ${discipline.level}. The number of powers must match the level.`
            );
        }
    }

    if (hunger == null || hunger < 0 || hunger > 5) throw new Error("Hunger must be between 0 and 5.");
    if (humanity < 0 || humanity > 10) throw new Error("Humanity value must be between 0 and 10.");

    const maxHealth = calculateHealth(physical.stamina, disciplines);
    const maxWillpower = calculateWillpower(social.composure, mental.resolve);

    return {
        name,
        chronicle,
        sire,
        concept,
        ambition,
        desire,
        predator,
        clan,
        generation,
        attributes,
        skills,
        disciplines,
        resonance: resonance || "None",
        hunger,
        humanity: humanity,
        health: {
            max: maxHealth,
            current: {
                superficialDamage: 0,
                aggravatedDamage: 0,
            },
        },
        willpower: {
            max: maxWillpower,
            current: {
                superficialDamage: 0,
                aggravatedDamage: 0,
            },
        },
    };
}
