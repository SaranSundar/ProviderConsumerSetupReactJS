import React, {Component, Fragment} from "react";

export default class ContextProvider extends Component {

    constructor(props) {
        super(props);
        // Props should contain React.context and method to get default context
        this.state = {
            context: this.props.getNewContextModel(this),
        }
        let ProviderContext = this.props.ProviderContext;
        console.log("Constructor for " + ProviderContext.dispatch + " Provider in ContextProvider");
    }

    render() {
        let ProviderContext = this.props.ProviderContext;
        console.log("Rendering " + ProviderContext.dispatch + " Provider");
        return (
            <Fragment>
                <ProviderContext.Provider value={{...this.state, context: this.state.context}}>
                    {this.props.children}
                </ProviderContext.Provider>
            </Fragment>
        );
    }

}
