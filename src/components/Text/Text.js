import React, {Component} from 'react';
import "./Text.css";

class Text extends Component {
    constructor(props) {
        super(props);
        console.log("In constructor of text");
    }

    render() {
        // We can confirm provider works because this component does not get re-rendered when background color changes
        console.log("Rendering Text")
        return (
            <div className="Text">THIS IS TEXT</div>
        );
    }
}

export default Text;
