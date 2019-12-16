import React, { Component } from "react";

const DraggableContext = React.createContext();
const DraggableConsumer = DraggableContext.Consumer;

let context = null;
class DraggableProvider extends Component {
    state = {
        isDraggable: false,
        setDragState: this.setDragState,
    };

    constructor(props) {
        super(props);

        this.setDragState = this.setDragState.bind(this);
        context = this;
    }

    setDragState(isDraggable) {
        context.setState({
            isDraggable,
        });
    }

    render() {
        return (
            <DraggableContext.Provider value={this.state}>
                {this.props.children}
            </DraggableContext.Provider>
        );
    }
}

export {
    DraggableProvider,
    DraggableConsumer,
};
