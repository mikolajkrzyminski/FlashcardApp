import { Flashcard } from "./flashcard";
import { DICTIONARIES } from "./dictionaries-mock";

export const FLASHCARDS: Flashcard[] = [
    {
        id: 1,
        source: 'samochód',
        target: 'Auto',
        dictionary: DICTIONARIES[0],
        isHidden: true,
    },
    {
        id: 2,
        source: 'samochód',
        target: 'Wagen',
        dictionary: DICTIONARIES[0],
        isHidden: true,
    },
    {
        id: 3,
        source: 'bohater',
        target: 'Held(in)',
        dictionary: DICTIONARIES[0],
        isHidden: true,
    },
    {
        id: 4,
        source: 'bohater',
        target: 'verdienter Mensch',
        dictionary: DICTIONARIES[0],
        isHidden: true,
    },
    {
        id: 5,
        source: 'samochód',
        target: 'Last[kraft]wagen',
        dictionary: DICTIONARIES[0],
        isHidden: true,
    },
    {
        id: 6,
        source: 'Haubentaucher',
        target: 'perkoz dwuczuby',
        dictionary: DICTIONARIES[1],
        isHidden: true,
    },
    {
        id: 7,
        source: 'raubeinig',
        target: 'łobuzerski',
        dictionary: DICTIONARIES[1],
        isHidden: true,
    },
    {
        id: 8,
        source: 'delfin',
        target: 'Dolphin',
        dictionary: DICTIONARIES[3],
        isHidden: true,
    },
]