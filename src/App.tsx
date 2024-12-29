import React from "react";
import CharacterSheet from "./components/CharacterSheet";
import { createVtmCharacterSheet } from "./utils/createVtmCharacterSheet"; // Adjust path to match your file structure
import { VtmCharacterSheet } from "./types/VtmCharacterSheet";

const App: React.FC = () => {
    const mockCharacter: VtmCharacterSheet = createVtmCharacterSheet({
        name: "John Doe",
        chronicle: "Chronicle of Shadows",
        sire: "Unknown",
        concept: "Detective",
        ambition: "Uncover hidden truths",
        desire: "Justice",
        predator: "Alleycat",
        clan: "Brujah",
        generation: "X",
        attributes: {
            physical: { strength: 3, dexterity: 2, stamina: 4 },
            social: { charisma: 3, manipulation: 2, composure: 3 },
            mental: { intelligence: 4, wits: 3, resolve: 4 },
        },
        skills: {
            Athletics: 2,
            Brawl: 3,
            Craft: 1,
            Drive: 0,
            Firearms: 2,
            Investigation: 4,
            Larceny: 1,
            Melee: 2,
            Performance: 0,
            Stealth: 3,
            Survival: 1,
            "Animal Ken": 1,
            Etiquette: 2,
            Insight: 3,
            Intimidation: 2,
            Leadership: 1,
            Persuasion: 3,
            Streetwise: 3,
            Subterfuge: 3,
            Academics: 2,
            Awareness: 4,
            Finance: 1,
            Medicine: 1,
            Occult: 2,
            Politics: 1,
            Science: 0,
            Technology: 2,
        },
        disciplines: {
            Fortitude: { level: 2, powers: ["Resilience", "Toughness"] },
            Celerity: { level: 1, powers: ["Cat's Grace"] },
        },
        resonance: "Sanguine",
        hunger: 2,
        humanity: {
            value: 7, // Only provide the value, stains will be set to 0 automatically
        },
    });

    return <CharacterSheet character={mockCharacter} />;
};

export default App;
