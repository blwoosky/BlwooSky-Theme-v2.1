import React, { Component,Children } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w">
                <div className="pl20 pr20">
                    <Header/>
                    <div className="main_content arc_list">
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
