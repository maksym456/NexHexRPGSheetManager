import React from "react";
import { VtmCharacterSheet } from "../types/VtmCharacterSheet";
import "./CharacterSheet.css";

interface CharacterSheetProps {
    character: VtmCharacterSheet;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
    return (
        <div className="character-sheet">
            <header className="sheet-header">
                <h1>Vampire: The Masquerade</h1>
                <div className="grid">
                    <p><strong>Name:</strong> {character.name}</p>
                    <p><strong>Concept:</strong> {character.concept}</p>
                    <p><strong>Predator:</strong> {character.predator}</p>
                    <p><strong>Chronicle:</strong> {character.chronicle}</p>
                    <p><strong>Ambition:</strong> {character.ambition}</p>
                    <p><strong>Clan:</strong> {character.clan}</p>
                    <p><strong>Sire:</strong> {character.sire}</p>
                    <p><strong>Desire:</strong> {character.desire}</p>
                    <p><strong>Generation:</strong> {character.generation}</p>
                </div>
            </header>

            <section className="attributes-section">
                <h2>Attributes</h2>
                <div className="grid">
                    <div className="attribute-group">
                        <h3>Physical</h3>
                        <p>Strength: {character.attributes.physical.strength}</p>
                        <p>Dexterity: {character.attributes.physical.dexterity}</p>
                        <p>Stamina: {character.attributes.physical.stamina}</p>
                    </div>
                    <div className="attribute-group">
                        <h3>Social</h3>
                        <p>Charisma: {character.attributes.social.charisma}</p>
                        <p>Manipulation: {character.attributes.social.manipulation}</p>
                        <p>Resolve: {character.attributes.social.resolve}</p>
                    </div>
                    <div className="attribute-group">
                        <h3>Mental</h3>
                        <p>Perception: {character.attributes.mental.perception}</p>
                        <p>Intelligence: {character.attributes.mental.intelligence}</p>
                        <p>Wits: {character.attributes.mental.wits}</p>
                    </div>
                </div>
            </section>

            <section className="skills-section">
                <h2>Skills</h2>
                <div className="grid">
                    {Object.entries(character.skills).map(([key, value]) => (
                        <p key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                        </p>
                    ))}
                </div>
            </section>

            <section className="disciplines-section">
                <h2>Disciplines</h2>
                <div className="grid">
                    {Object.entries(character.disciplines).map(([key, value]) => (
                        <p key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                        </p>
                    ))}
                </div>
            </section>

            <section className="resonance-hunger-humanity">
                <div className="grid">
                    <div className="attribute-group">
                        <p><strong>Resonance:</strong> {character.resonance}</p>
                    </div>
                    <div className="attribute-group">
                        <p><strong>Hunger:</strong> {character.hunger}</p>
                    </div>
                    <div className="attribute-group">
                        <p><strong>Humanity:</strong> {character.humanity}</p>
                    </div>
                </div>
            </section>
        </div>
);
};

export default CharacterSheet;