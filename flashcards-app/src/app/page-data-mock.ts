import { PageData } from './page-data'

export const PAGEDATA: PageData = {
    langs: ['el', 'pl', 'en', 'de'],
    labels: [
        { lang: 'el', label: 'Greek' },
        { lang: 'en', label: 'English' },
        { lang: 'fr', label: 'French' },
        { lang: 'es', label: 'Spanish' },
        { lang: 'ru', label: 'Russian' },
        { lang: 'pl', label: 'Polish' },
        { lang: 'de', label: 'German' },
    ],
    directed_dicts: [
        { source_lang: 'el', target_lang: 'de' },
        { source_lang: 'de', target_lang: 'el' },
        { source_lang: 'en', target_lang: 'de' },
        { source_lang: 'de', target_lang: 'en' },
        { source_lang: 'fr', target_lang: 'de' },
        { source_lang: 'de', target_lang: 'fr' },
        { source_lang: 'es', target_lang: 'de' },
    ],
}