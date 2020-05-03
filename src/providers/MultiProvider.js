import React, {Component} from 'react';
import App from "../components/App/App";
import ContextProvider from "./ContextProvider";
import {getNewContextModel, ThemeContext} from "../models/ThemeModel";

class MultiProvider extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor of Multi Provider");
    }

    render() {
        // This is where you would place all your providers, all nested above App
        return (
            <ContextProvider getNewContextModel={getNewContextModel} ProviderContext={ThemeContext}>
                <App/>
            </ContextProvider>
        );
    }
}

export default MultiProvider;
