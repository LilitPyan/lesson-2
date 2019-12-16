import React, { Component } from "react";
import { withTranslation } from "react-i18next";


import { DraggableConsumer } from "../../contexts/DraggableContext";

class Admin extends Component {
    state = {
        toggle: false,
        rightToggle: true,
        depId: null,
    };

    constructor(props) {
        super(props);

        this.onToggle = this.onToggle.bind(this);
        this.onToggleRight = this.onToggleRight.bind(this);
        this.getDepId = this.getDepId.bind(this);
    }

    onToggle(toggle) {
        this.setState({
            toggle,
        });
    }

    onToggleRight(rightToggle) {
        this.setState({
            rightToggle,
        });
    }
    getDepId(id){
        this.setState({
            depId: id,
        })
    }

    render() {
        const { toggle, rightToggle, depId } = this.state;

        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                updateStoresInLayout: () => {
                    if(this.header){
                        this.header.getStores();
                    }
                }
            });
        });

        return (
            <React.Fragment>
                <Header onRef={(ref)=>{this.header = ref}} dep={this.getDepId}  onToggle={this.onToggle} onToggleRight={this.onToggleRight} />
                <div className="clearfix" />
                {/*for-draggable-content-wrapper*/}
                <DraggableConsumer>
                    {(({ isDraggable }) => (
                        <div className={`
                            content-wrapper mr-0 
                            ${toggle ? '' : 'ml-0 first-child-edit'}
                            ${isDraggable ? "for-draggable-content-wrapper" : ""}
                        `}>
                            {children}
                        </div>
                    ))}
                </DraggableConsumer>

                <Footer toggled={toggle} />
            </React.Fragment>
        );
    }
}

export default withTranslation()(Admin);
