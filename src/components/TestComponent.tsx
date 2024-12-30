import React, { useState, useRef } from 'react';
import './DynamicForm.css';

type CharacterData = {
    name?: string;
    concept?: string;
    predator?: string;
    chronicle?: string;
    ambition?: string;
    clan?: string;
    sire?: string;
    desire?: string;
    generation?: string;
    strength?: number;
    dexterity?: number;
    stamina?: number;
    charisma?: number;
    manipulation?: number;
    composure?: number;
    intelligence?: number;
    wits?: number;
    resolve?: number;
};

const DynamicForm: React.FC = () => {
    const [characterData, setCharacterData] = useState<CharacterData>({
        name: '',
        concept: '',
        predator: '',
        chronicle: '',
        ambition: '',
        clan: '',
        sire: '',
        desire: '',
        generation: '',
        strength: 1,
        dexterity: 1,
        stamina: 1,
        charisma: 1,
        manipulation: 1,
        composure: 1,
        intelligence: 1,
        wits: 1,
        resolve: 1,
    });

    const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const handleFocus = (key: string) => {
        const input = inputRefs.current[key];
        if (input) {
            input.select();
        }
    };

    const updateTotal = (): number => (characterData.resolve || 0) + (characterData.composure || 0);

    const fillRandomValues = () => {
        setCharacterData((prev) => ({
            ...prev,
            strength: Math.floor(Math.random() * 5) + 1,
            dexterity: Math.floor(Math.random() * 5) + 1,
            stamina: Math.floor(Math.random() * 5) + 1,
            charisma: Math.floor(Math.random() * 5) + 1,
            manipulation: Math.floor(Math.random() * 5) + 1,
            composure: Math.floor(Math.random() * 5) + 1,
            intelligence: Math.floor(Math.random() * 5) + 1,
            wits: Math.floor(Math.random() * 5) + 1,
            resolve: Math.floor(Math.random() * 5) + 1,
        }));
    };

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch data');
            const data: Partial<CharacterData> = await response.json();

            // Validate keys and apply defaults
            setCharacterData((prev) => ({
                ...prev,
                name: typeof data.name === 'string' ? data.name : prev.name,
                concept: typeof data.concept === 'string' ? data.concept : prev.concept,
                predator: typeof data.predator === 'string' ? data.predator : prev.predator,
                chronicle: typeof data.chronicle === 'string' ? data.chronicle : prev.chronicle,
                ambition: typeof data.ambition === 'string' ? data.ambition : prev.ambition,
                clan: typeof data.clan === 'string' ? data.clan : prev.clan,
                sire: typeof data.sire === 'string' ? data.sire : prev.sire,
                desire: typeof data.desire === 'string' ? data.desire : prev.desire,
                generation: typeof data.generation === 'string' ? data.generation : prev.generation,
                strength: typeof data.strength === 'number' ? data.strength : prev.strength,
                dexterity: typeof data.dexterity === 'number' ? data.dexterity : prev.dexterity,
                stamina: typeof data.stamina === 'number' ? data.stamina : prev.stamina,
                charisma: typeof data.charisma === 'number' ? data.charisma : prev.charisma,
                manipulation: typeof data.manipulation === 'number' ? data.manipulation : prev.manipulation,
                composure: typeof data.composure === 'number' ? data.composure : prev.composure,
                intelligence: typeof data.intelligence === 'number' ? data.intelligence : prev.intelligence,
                wits: typeof data.wits === 'number' ? data.wits : prev.wits,
                resolve: typeof data.resolve === 'number' ? data.resolve : prev.resolve,
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch character data. Please check the source.');
        }
    };

    const exportData = () => {
        const calculatedField = {
            totalResolveComposure: (characterData.resolve || 0) + (characterData.composure || 0),
        };

        const dataToExport = {
            ...characterData,
            ...calculatedField,
        };

        const dataStr = JSON.stringify(dataToExport, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'character.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="dynamic-form">
            <div className="button-group">
                <button onClick={() => fetchData('/path/to/character.json')} className="fetch-button">
                    Fetch Character Data
                </button>
                <button onClick={exportData} className="export-button">
                    Export Character Data
                </button>
            </div>

            <div className="header-group">
                {['name', 'concept', 'predator', 'chronicle', 'ambition', 'clan', 'sire', 'desire', 'generation'].map((key) => (
                    <div className="header-field-inline" key={key}>
                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        <input
                            type="text"
                            id={key}
                            value={characterData[key as keyof CharacterData] || ''}
                            onChange={(e) =>
                                setCharacterData((prev) => ({ ...prev, [key]: e.target.value }))
                            }
                            className="header-input"
                        />
                    </div>
                ))}
            </div>

            <div className="attribute-groups">
                {Object.entries(characterData).map(([key, value]) => (
                    typeof value === 'number' && (
                        <div className="attribute" key={key}>
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <input
                                type="text"
                                id={key}
                                maxLength={1}
                                value={value || 1}
                                ref={(el) => (inputRefs.current[key] = el)}
                                onFocus={() => handleFocus(key)}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/[^1-5]/g, '');
                                    setCharacterData((prev) => ({ ...prev, [key]: val ? parseInt(val, 10) : 1 }));
                                }}
                            />
                        </div>
                    )
                ))}
            </div>

            <div className="total">
                Total (Resolve + Composure): <span>{updateTotal()}</span>
            </div>

            <button onClick={fillRandomValues} className="random-button">
                Fill Random Values
            </button>
        </div>
    );
};

export default DynamicForm;
