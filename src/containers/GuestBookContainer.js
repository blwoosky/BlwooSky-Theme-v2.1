import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getGuestBook} from "../actions";
import GuestBook from "../components/GuestBook";
import {browserHistory} from "react-router";


class GuestBookContainer extends Component {

    constructor(props) {

        super(props);
    }

    componentWillMount() {

        this.props.getGuestBook("guest-book");

    }

    render() {
        return <GuestBook {...this.props} {...this}/>
    }
}


/*
 * 1.映射store当中的数据到组件
 * 2.映射action方法到组件
 *
 * */

function mapStateToProps(store) {

    return {
        guest: store.guest.data
    }
}

export default connect(mapStateToProps, {getGuestBook})(GuestBookContainer);