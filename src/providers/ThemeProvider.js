import * as React from "react";

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export default class ThemeModel {
    constructor() {
        this.currentTheme = themes.light;
    }

    toggleTheme = () => {
        console.log("Changing theme");
        if (this.currentTheme === themes.light) {
            this.currentTheme = themes.dark;
        } else {
            this.currentTheme = themes.light;
        }
        console.log("New theme is ");
        console.log(this.currentTheme);
    };
}

export const getNewThemeModel = () => {
    return {
        model: new ThemeModel(),
    }
}

// This default value will never be used
export const ThemeContext = React.createContext(getNewThemeModel());