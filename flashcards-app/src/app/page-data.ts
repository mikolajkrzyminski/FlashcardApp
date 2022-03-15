import { Dictionary } from "./dictionary";

export interface Label {
    lang: string;
    label: string;
}

export interface PageData {
    langs: string[];
    labels: Label[];
    directed_dicts: Object[];
}