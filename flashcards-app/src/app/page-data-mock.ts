import { PageData } from './page-data'

export const PAGEDATA: PageData = {
    langs: ['el', 'pl', 'en', 'de'],
    labels: [
        { el: 'Greek' },
        { en: 'English' },
        { fr: 'French' },
        { es: 'Spanish' },
        { ru: 'Russian' },
        { pl: 'Polish' },
        { de: 'German' },
    ],
    directed_dicts: [
        { source_lang: 'el', target_lang: 'de' },
        { source_lang: 'de', target_lang: 'el' },
        { source_lang: 'en', target_lang: 'de' },
        { source_lang: 'de', target_lang: 'en' },
        { source_lang: 'fr', target_lang: 'de' },
        { source_lang: 'de', target_lang: 'fr' },
        { source_lang: 'es', target_lang: 'de' },]
}