import React, {Component, Fragment} from 'react';
import {ThemeContext} from "../../providers/ThemeProvider";
import "./Home.css";
import Text from "../Text/Text";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    renderBackground(theme) {
        console.log("Rendering Home Background");
        return (
            <div className="Home" style={{background: theme.model.currentTheme}}>
                <button className="Button" onClick={() => theme.model.toggleTheme()}>Change Theme</button>
            </div>
        );
    }

    render() {
        // Only the Consumer should get re-rendered the Text component will not
        console.log("Rendering Home");
        return (
            <Fragment>
                <ThemeContext.Consumer>
                    {({themeContext}) => this.renderBackground(themeContext)}
                </ThemeContext.Consumer>
                <Text/>
            </Fragment>
        );
    }
}

export default Home;
