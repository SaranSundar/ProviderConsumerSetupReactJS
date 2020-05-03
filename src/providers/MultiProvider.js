import React, {Component} from 'react';
import ThemeProvider from "../../providers/ThemeProvider";
import App from "../App/App";

class ProviderWrapper extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor of Provider Wrapper");
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

export default ProviderWrapper;
