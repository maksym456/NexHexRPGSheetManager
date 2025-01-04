// characterUtils.js

// 1) Randomize character attributes
export function fillRandomValues(prevData) {
    return {
        ...prevData,
        strength: Math.floor(Math.random() * 5) + 1,
        dexterity: Math.floor(Math.random() * 5) + 1,
        stamina: Math.floor(Math.random() * 5) + 1,
        charisma: Math.floor(Math.random() * 5) + 1,
        manipulation: Math.floor(Math.random() * 5) + 1,
        composure: Math.floor(Math.random() * 5) + 1,
        intelligence: Math.floor(Math.random() * 5) + 1,
        wits: Math.floor(Math.random() * 5) + 1,
        resolve: Math.floor(Math.random() * 5) + 1,
    };
}

// 2) Fetch character data from an external JSON file or API
export async function fetchCharacterData(url, prevData, setCharacterData) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Validate keys and apply defaults
        setCharacterData({
            ...prevData,
            name: typeof data.name === 'string' ? data.name : prevData.name,
            concept: typeof data.concept === 'string' ? data.concept : prevData.concept,
            predator: typeof data.predator === 'string' ? data.predator : prevData.predator,
            chronicle: typeof data.chronicle === 'string' ? data.chronicle : prevData.chronicle,
            ambition: typeof data.ambition === 'string' ? data.ambition : prevData.ambition,
            clan: typeof data.clan === 'string' ? data.clan : prevData.clan,
            sire: typeof data.sire === 'string' ? data.sire : prevData.sire,
            desire: typeof data.desire === 'string' ? data.desire : prevData.desire,
            generation: typeof data.generation === 'string' ? data.generation : prevData.generation,
            strength: typeof data.strength === 'number' ? data.strength : prevData.strength,
            dexterity: typeof data.dexterity === 'number' ? data.dexterity : prevData.dexterity,
            stamina: typeof data.stamina === 'number' ? data.stamina : prevData.stamina,
            charisma: typeof data.charisma === 'number' ? data.charisma : prevData.charisma,
            manipulation: typeof data.manipulation === 'number' ? data.manipulation : prevData.manipulation,
            composure: typeof data.composure === 'number' ? data.composure : prevData.composure,
            intelligence: typeof data.intelligence === 'number' ? data.intelligence : prevData.intelligence,
            wits: typeof data.wits === 'number' ? data.wits : prevData.wits,
            resolve: typeof data.resolve === 'number' ? data.resolve : prevData.resolve,
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch character data. Please check the source.');
    }
}

// 3) Export character data to a file
export function exportCharacterData(characterData) {
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
}
