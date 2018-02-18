import React, {Component} from "react";
import './card-weather.css';


class CardWeather extends Component {

    render() {
        return (
            <div className={"card-weather card " + this.props.className}>
                <div className="card-body">
                    <div className="temperature">{this.props.temperature}</div>
                    <div className="location">{this.props.location}</div>
                </div>
            </div>
        );
    }
}

export default CardWeather;