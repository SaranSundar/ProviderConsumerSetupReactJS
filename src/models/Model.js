import React from "react";


// This class is in development ignore for now
class ContextModel {
    constructor(provider) {
        this.provider = provider;
    }

    setState = () => {
        return new Promise((resolve) => {
            this.provider.setState({
                ...this.provider.state,
                context: this.provider.state.context
            }, resolve)
        });
    }

    static getNewContextModel = (provider) => {
        return {
            model: new ContextModel(provider),
        }
    }

    static getNewContext = (provider) => {
        // This default value will never be used but is needed according to React Docs for Context
        const Context = React.createContext(ContextModel.getNewContextModel(provider));
        Context.displayName = "ThemeContext";
        return Context;
    };
}
