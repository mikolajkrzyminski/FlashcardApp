import { Dictionary } from "./dictionary";

export interface Flashcard {
    id: number;
    source: string;
    target: string;
    dictionary: Dictionary;
    isHidden: boolean;
}