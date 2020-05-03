import React, {Component, Fragment} from 'react';
import "./Home.css";
import Text from "../Text/Text";
import {ThemeContext} from "../../models/ThemeModel";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    renderBackground(context) {
        console.log("Rendering Home Background");
        let theme = context.model;
        console.log(theme);
        return (
            <div className="Home" style={{background: theme.currentTheme}}>
                <button className="Button" disabled={theme.changingTheme} onClick={context.model.toggleTheme}>Change
                    Theme
                </button>
                {theme.changingTheme && <div className="ChangeText">CHANGING THE BACKGROUND NOW WILL TAKE 2 SECONDS!!!</div>}
            </div>
        );
    }

    render() {
        // Only the Consumer should get re-rendered the Text component will not
        console.log("Rendering Home");
        return (
            <Fragment>
                <ThemeContext.Consumer>
                    {({context}) => this.renderBackground(context)}
                </ThemeContext.Consumer>
                <Text/>
            </Fragment>
        );
    }
}

export default Home;
