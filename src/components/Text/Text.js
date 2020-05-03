import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        console.log("In constructor of test");
    }

    render() {
        console.log("Rendering Test")
        return (
            <div>TEST</div>
        );
    }
}

export default Test;
