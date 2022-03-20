export interface Flashcard {
    id: number;
    source: string;
    target: string;
    sourceLang: string;
    targetLang: string;
    isHidden: boolean;
}