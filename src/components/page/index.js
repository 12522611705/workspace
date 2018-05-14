import React, { Component } from 'react';
import { NavBar, WhiteSpace, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// react component state update
import addons from 'react-addons-update';
import update from 'react-update';

import { MathPx, GLOBAL, Ajax } from '../../utils/global';
import { config } from '../../utils/config';

import logo from '../../images/logo.png';
import account from '../../images/account.svg';
import Category from '../../images/Category.svg';
import close from '../../images/close.svg';

class component extends Component {
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            Modal:{
                visMenu:false,
                visUserinfo:false
            },
            menuList:[]
        }
    }
    // 
    componentDidMount() {
        this.initMenuList();
    }   
    /**
     * @desc   初始化菜单列表数据
     * @date   2018-05-02
     * @author luozhou
     * @return {[Promise]}
     */
    initMenuList(){
        Ajax.get(config.Home.urls.menuList,(response)=>{
            this.update('set',{
                menuList:response
            })
        })
    }
    render() {
        const _this = this;
        const state = _this.state;
        const update = _this.update;
        let isLogin =  (_this.props.userinfo && _this.props.userinfo.code==1);
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#2a303c', height: MathPx(100) }}
                    mode="light"
                    leftContent={<Link key="0" style={{'color':'#fff'}} to="/" replace={false}>
                        <img height={MathPx(60)} src={logo} alt="智卓安全"/>
                    </Link>}
                    rightContent={[
                        <img style={{display: isLogin ? 'inline-block' : 'none'}} key="2" 
                            height={MathPx(50)} src={ account } alt="用户信息" 
                            onClick={()=>{
                                update('set',addons(state,{
                                    Modal:{
                                        visMenu:{ $set: false },
                                        visUserinfo:{ $set: !state.Modal.visUserinfo }     
                                    }
                                }))
                            }
                        }/>,
                        <Link key="0" style={{display: !isLogin ? 'inline-block' : 'none'}} to="login.html">
                            <img height={MathPx(50)} src={ account } alt="用户信息"/>
                        </Link>,
                        <img key="1" height={MathPx(50)} src={ state.Modal.visMenu ? close : Category } alt="菜单" onClick={()=>{
                            update('set',addons(state,{
                                Modal:{
                                    visMenu:{ $set: !state.Modal.visMenu },
                                    visUserinfo:{ $set: false }   
                                }
                            }))
                        }} style={{"marginLeft": MathPx(46)}} />
                    ]}>
                </NavBar>

                <div style={ (state.Modal.visUserinfo && isLogin ) ? 
                            {height:window.innerHeight-MathPx(100)} : 
                            {height:0}
                        } 
                    className="menu">
                    <ul className="menuList">
                        <li className="items"
                            style={{paddingLeft:MathPx(38),height:MathPx(100),fontSize:MathPx(32),lineHeight:MathPx(100)+'px'}}>
                            昵称：{isLogin && (_this.props.userinfo.message.username || _this.props.userinfo.message.email)}
                        </li>
                        <li className="items"
                            style={{paddingLeft:MathPx(38),height:MathPx(100),fontSize:MathPx(32),lineHeight:MathPx(100)+'px'}}>
                            <a style={{color:"#fff"}} href="/Home/main">个人中心</a>
                        </li>
                        <li onClick={()=>{
                            Ajax.get(config.User.urls.logout,(response)=>{
                                window.location.reload();
                            })
                        }} className="items"
                            style={{paddingLeft:MathPx(38),height:MathPx(100),fontSize:MathPx(32),lineHeight:MathPx(100)+'px'}}>
                            退出登录
                        </li>
                    </ul>
                </div>

                <div style={ state.Modal.visMenu ? {height:window.innerHeight-MathPx(100)} : {height:0}} className="menu">
                    <ul className="menuList">
                    {
                        state.menuList.map((el,index)=>{
                            if(el.title=="防护态势") return;
                            return (
                                <li onClick={()=>{
                                    if(window.location.hash.split('#/')[1]==el.url){
                                        update('set',addons(state,{
                                            Modal:{
                                                visMenu:{ $set:false }
                                            }
                                        }))
                                    }
                                }} key={el.id} className="items" style={{paddingLeft:MathPx(38),height:MathPx(100),fontSize:MathPx(32),lineHeight:MathPx(100)+'px'}}>
                                    <Link style={{'color':'#fff'}} to={el.url} replace>{el.title}</Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <WhiteSpace />
                    <WhiteSpace />
                    {
                        isLogin ? '' : 
                        <WingBlank size="md">
                            <button className="btn btn-primary" style={{fontSize:MathPx(32),marginTop:MathPx(40),height:MathPx(100),lineHeight:MathPx(100)+'px'}}>
                                免费注册，即享免费套餐
                            </button>
                        </WingBlank>
                    }
                    
                </div>

                {this.props.children}

                <div style={{fontSize:MathPx(24)}} className="copyRight">
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <p>Copyright © 2016-2018</p>
                    <p>Zealsafe.com. All Rights Reserved. </p>
                    <p>智卓安全 版权所有</p>
                    <WhiteSpace />
                </div>
            </div>
        );
    }
}
// containers
const mapStateToProps = state => ({
    userinfo: state.userinfo.userinfo
})
const Page = connect(
    mapStateToProps
)(component);
export default Page;
