export class LanguageColor {
    static getLanguageColor(language: string): string {

        if (language.toUpperCase() === 'JAVA') {
            return '#ff7522';
        } else if (language.toUpperCase() === 'PHP') {
            return '#3344b4';
        } else if (language.toUpperCase() === 'DART') {
            return '#0db6ff';
        } else if (language.toUpperCase() === 'JAVASCRIPT') {
            return '#ffc438';
        } else if (language.toUpperCase() === 'TYPESCRIPT') {
            return '#009163';
        } else {
            return '#8e909c';
        }
    }




}

