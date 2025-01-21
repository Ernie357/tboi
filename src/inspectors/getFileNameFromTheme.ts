export default function(theme: string, extension: string): string {
    try {
        return theme.trim().toLowerCase().replace(/\s/g, '-').concat(extension);
    } catch(err) {
        return 'basement.ogg';
    }
} 