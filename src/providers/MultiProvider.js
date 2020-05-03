import React, {Component} from 'react';
import ThemeProvider from "./ThemeProvider";
import App from "../components/App/App";

class MultiProvider extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor of Multi Provider");
    }

    render() {
        // This is where you would place all your providers, all nested above App
        return (
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        );
    }
}

export default MultiProvider;
