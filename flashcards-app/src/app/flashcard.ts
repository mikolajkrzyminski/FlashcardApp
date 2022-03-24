export interface Flashcard {
    _id: number;
    sourceWord: string;
    targetWord: string;
    sourceLang: string;
    targetLang: string;
    isHidden?: boolean;
}