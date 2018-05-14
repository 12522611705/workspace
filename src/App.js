import React, { Component } from 'react';
// redux
// import { createStore } from 'redux';
import { connect } from 'react-redux';
// router
// import { Link } from 'react-router-dom';

// dirty checking
// import PropTypes from 'prop-types';

import Home from './routers/Home';
// import Page from './components/page';

import { Ajax, setMenu } from './utils/global';
import { config } from './utils/config';
// import { createForm } from 'rc-form';

// import reducers from './reducers';
import actions from './actions';

class component extends Component {
    constructor(props){
        super(props)
    }
    async componentDidMount() {
        await this.initUserinfo();
        // await this.initMenuList();
    }
    /**
     * @desc   初始化用户信息
     * @date   2018-05-02
     * @author luozhou
     * @return {[Promise]}
     */
    initUserinfo(){
        const { set_userinfo } = this.props;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.App.urls.userinfo,(response)=>{
                resolve()
                set_userinfo(response);
            },true)
        })
    }
    /**
     * @desc   初始化菜单列表数据
     * @date   2018-05-02
     * @author luozhou
     * @return {[Promise]}
     */
    // initMenuList(){
    //     return new Promise((resolve,reject)=>{
    //         Ajax.get(config.Home.urls.menuList,(response)=>{
    //             resolve()
    //             setMenu(response)
    //         })
    //     })
    // }
    render() {
        return (<Home/>);
    }
}

// containers
const mapStateToProps = state => ({
    userinfo: state.userinfo.userinfo
})

const mapDispatchToProps = dispatch => ({
    set_userinfo: userinfo => dispatch(actions.set_userinfo(userinfo))
})

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(component)

export default App;
