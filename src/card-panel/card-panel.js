import React, {Component} from "react";
import './card-panel.css';

class CardPanel extends Component {
    render() {
        return (
            <div className={"card card-panel " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default CardPanel;