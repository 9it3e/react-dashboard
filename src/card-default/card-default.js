import React, {Component} from "react";
import './card-default.css';

class CardDefault extends Component {

    render() {
        return (
            <div className={ "card card-default " + this.props.className }>
                <div className="card-body">
                    <div className="count">{this.props.count}</div>
                    <div className="text">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default CardDefault;