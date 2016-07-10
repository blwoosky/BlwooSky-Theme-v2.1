import React, { Component,Children } from 'react';
//import Header from './Header';

export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w">
                <div className="pl20 pr20">
                    <div className="loadingContent">
                        {this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}
