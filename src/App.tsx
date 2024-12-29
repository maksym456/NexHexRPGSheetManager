import React, { useState } from "react";
import { createVtmCharacterSheet } from "./utils/fillVtmCharacterSheetRandom";
import CharacterSheet from "./components/CharacterSheet";

const App: React.FC = () => {
    const [character] = useState(createVtmCharacterSheet);

    return (
        <div>
            <CharacterSheet character={character} />
        </div>
    );
};

export default App;
