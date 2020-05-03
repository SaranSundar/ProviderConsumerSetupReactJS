import React from "react";

const themes = {
    light: "#FFFFFF",
    dark: "#000000",
};

class ThemeModel {
    constructor(provider) {
        this.currentTheme = themes.light;
        this.provider = provider;
        this.changingTheme = false;
    }

    setState = () => {
        return new Promise((resolve) => {
            this.provider.setState({
                ...this.provider.state,
                context: this.provider.state.context
            }, resolve)
        });
    }

    toggleTheme = async () => {
        console.log("Changing Theme, will pause for 2 seconds");
        this.changingTheme = true;
        // We have a reference to the ThemeProvider component here so we can call set state on it in an async/await manner
        console.log("Calling await setState inside Model");
        await this.setState();
        await this.sleep(2000);
        // All this code does is flip variable like a boolean and sets state of the new theme color
        let newTheme = this.currentTheme;
        if (newTheme === themes.light) {
            newTheme = themes.dark;
        } else {
            newTheme = themes.light;
        }
        this.currentTheme = newTheme;
        console.log("Code That prints after await setState");
        this.changingTheme = false;
        await this.setState();
        console.log("Theme Changed");
    };

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export const getNewContextModel = (provider) => {
    return {
        model: new ThemeModel(provider),
    }
}

// This default value will never be used but is needed according to React Docs for Context
export const ThemeContext = React.createContext(getNewContextModel());
ThemeContext.displayName = "ThemeContext";