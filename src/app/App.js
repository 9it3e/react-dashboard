import React, { Component } from 'react';
import './App.css';
import CardWeather from '../card-weather/card-weather';
import CardDefault from '../card-default/card-default';
import CardPanel from '../card-panel/card-panel';

class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
                <div className="row">

                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-4">
                                <CardDefault count="20" text="New followers added this month" />
                            </div>
                            <div className="col-sm-4">
                                <CardDefault count="$ 1250" text="Acreage Monthly Income" />
                            </div>
                            <div className="col-sm-4">
                                <CardDefault count="$ 13865" text="Yearly Income Goal" />
                            </div>
                        </div>

                        <CardPanel className="card-lg">
                            <div className="card-body bg-blue">

                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="panel-text-count">15080</div>
                                        <div className="panel-text-title">Short Views</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="panel-text-count">12000</div>
                                        <div className="panel-text-title">Likes</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="panel-text-count">51000</div>
                                        <div className="panel-text-title">Comments</div>
                                    </div>
                                </div>
                            </div>
                        </CardPanel>

                        <CardPanel className="card-lg">
                            <div className="card-body bg-violetre">

                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="panel-text-count">15080</div>
                                        <div className="panel-text-title">Short Views</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="panel-text-count">12000</div>
                                        <div className="panel-text-title">Likes</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="panel-text-count">51000</div>
                                        <div className="panel-text-title">Comments</div>
                                    </div>
                                </div>
                            </div>
                        </CardPanel>
                    </div>

                    <div className="col-sm-3">
                        <CardWeather className="bg-orange" temperature="18°" location="Paris" />
                        <CardPanel className="card-sm">
                            <div className="card-header bg-blue">
                                <div className="panel-text-title">New Visitor</div>
                                <div className="panel-text-count">1.6K</div>
                            </div>
                            <div className="card-body">

                            </div>
                        </CardPanel>

                        <CardPanel className="card-sm">
                            <div className="card-header bg-purple">
                                <div className="panel-text-title">Bounce Rate</div>
                                <div className="panel-text-count">50%</div>
                            </div>
                            <div className="card-body">

                            </div>
                        </CardPanel>

                        <CardPanel className="card-sm">
                            <div className="card-header bg-red">
                                <div className="panel-text-title">Search</div>
                                <div className="panel-text-count">28%</div>
                            </div>
                            <div className="card-body">

                            </div>
                        </CardPanel>

                        <CardPanel className="card-sm">
                            <div className="card-header bg-green    ">
                                <div className="panel-text-title">Traffic</div>
                                <div className="panel-text-count">140.5kb</div>
                            </div>
                            <div className="card-body">

                            </div>
                        </CardPanel>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
