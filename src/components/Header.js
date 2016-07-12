import React, { Component } from 'react';
import {browserHistory,Link} from "react-router";
//import Header from './Header';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            keyWord: ""
        }
    }

    search(e) {

        e.preventDefault();
        //console.log(this.state.keyWord);

        browserHistory.push(`/search/${this.state.keyWord}`);


    }

    onInputChange(e) {
        //console.log(e.target.value);
        this.setState({
            keyWord: e.target.value.trim()
        })
    }

    render() {
        return (
            <header className="header">
                <div className="logo_wrap rel">
                    <span className="abs rope rope_left"></span>
                    <span className="abs rope rope_right"></span>
                    <div className="fix logo_in">
                        <a href="#" className="fix l">
							<span className="l sticker paper shadow paper_white mr20">
								<span className="logo"></span>
							</span>

                            <span className="logo_txt l mt20"></span>
                        </a>
                        <p className="r slogan">
                        </p>
                    </div>
                </div>
                <div className="nav fix">
                    <nav className="main_nav l">
                        <ul className="fix">
                            <li className="current-menu-item"><Link to="/">首页</Link></li>
                            <li><Link to="/articles">博文</Link></li>
                            <li><a href="/guest-book">留言</a></li>
                            <li><a href="#">相片</a></li>
                        </ul>
                    </nav>
                    <div className="search_form paper paper_white r">
                        <form role="search" method="get" className="rel" id="searchform" onSubmit={this.search}>
                            <input type="text" required placeholder="search here..."
                                   onChange={this.onInputChange}/>
                            <input type="submit" id="searchsubmit" className="abs" value=" "/>
                        </form>
                    </div>
                </div>
            </header>
        );
    }
}
