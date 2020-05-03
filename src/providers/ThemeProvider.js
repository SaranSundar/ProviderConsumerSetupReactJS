import React, {Component, Fragment} from "react";

const themes = {
    light: "#FFFFFF",
    dark: "#000000",
};

// You can either put all your logic in the ThemeProvider component or separate it into it's own model like so
class ThemeModel {
    constructor(themeProvider) {
        this.currentTheme = themes.light;
        this.themeProvider = themeProvider;
    }

    toggleTheme = () => {
        // All this code does is flip variable like a boolean and sets state of the new theme color
        let newTheme = this.currentTheme;
        if (newTheme === themes.light) {
            newTheme = themes.dark;
        } else {
            newTheme = themes.light;
        }
        this.currentTheme = newTheme;

        // We have a reference to the ThemeProvider component here so we can call set state on it
        this.themeProvider.setState({
            ...this.themeProvider.state,
            themeContext: this.themeProvider.state.themeContext
        });
    };
}

export const getNewThemeModel = (themeProvider) => {
    return {
        model: new ThemeModel(themeProvider),
    }
}

// This default value will never be used but is needed according to React Docs for Context
export const ThemeContext = React.createContext(getNewThemeModel());
ThemeContext.displayName = "ThemeContext";

export default class ThemeProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            themeContext: getNewThemeModel(this)
        }
        console.log("Constructor of Theme Provider");
    }

    render() {
        console.log("Rendering Theme Provider");
        return (
            <Fragment>
                <ThemeContext.Provider value={{...this.state, themeContext: this.state.themeContext}}>
                    {this.props.children}
                </ThemeContext.Provider>
            </Fragment>
        );
    }

}
