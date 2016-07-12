import React, { Component } from 'react';


export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer tac">
                <div className="paper paper_white shadow cover sticker">
                    <p>Designed By @Blwoosky</p>
                    <p>Copyright © 2013-2015 BlwooSky.COM</p>
                </div>
            </footer>
        );
    }
}
