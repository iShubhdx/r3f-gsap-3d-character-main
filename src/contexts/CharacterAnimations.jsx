/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations, setAnimations] = useState([]);

    return (
        <CharacterAnimationsContext.Provider
            value={{
                animationIndex,
                setAnimationIndex,
                animations,
                setAnimations,
            }}
        >
            {props?.children}
        </CharacterAnimationsContext.Provider>
    );
};

export const useCharacterAnimations = () => {
    return useContext(CharacterAnimationsContext);
};
