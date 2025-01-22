/*
    File: getFileNameFromTheme.ts

    Purpose: Using the site's theme, gives the proper file name that can be used as src for components.

    Params: theme - A string that defines the site's theme.
            extension - The extension of the desired file as string, like ".mp4" for video or ".ogg" for music.

    Return: A string that can be properly used in an component's src prop.
*/

export default function(theme: string, extension: string): string {
    try {
        return theme.trim().toLowerCase().replace(/\s/g, '-').concat(extension);
    } catch(err) {
        return 'basement.ogg';
    }
} 