import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WingBlank, WhiteSpace, List, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
// import { createForm } from 'rc-form';

// react component state update
import addons from 'react-addons-update';
import update from 'react-update';

import { MathPx, Ajax } from '../utils/global';
import { config } from '../utils/config';
import actions from '../actions';

import l_login from '../images/l_logo.png';

import '../css/login.css';

class component extends Component {
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            IndexVerify:'/Index/Verify',
            loginForm:{
                loginname:'',
                password:'',
                code:''
            }
        }
    }
    componentDidMount() {
        const { set_userinfo } = this.props;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.App.urls.userinfo,(response)=>{
                resolve()
                set_userinfo(response);
            },true)
        })
    }
    updateInput(key,ev){
        this.update('set',addons(this.state,{
            loginForm:{
                [key]:{
                    $set:ev.target.value
                }
            }
        }))
    }
    submitLogin(){
        const _this = this;
        if(_this.state.loginForm.loginname=="") return Toast.info('请输入用户名', 1);
        if(_this.state.loginForm.password=="") return Toast.info('请输入密码', 1);
        if(_this.state.loginForm.code=="" && _this.props.userinfo.needVerify) return Toast.info('请输入验证码', 1);
        Ajax.post(config.User.urls.loginvalid,_this.state.loginForm,(response)=>{
            _this.props.set_userinfo(response);
            if(response.code == 1){
                _this.props.history.push('')
            }else{
                Toast.info(response.message,1)
            }
        })
    }
    render() {
        const _this = this;
        const update = _this.update;
        const state = _this.state;
        return (
            <div>
                <div style={{"textAlign":"center"}}>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <Link to="/"><img width={MathPx(220)} src={l_login} alt=""/></Link>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                </div>
                <WingBlank size="md">
                
                    <List renderHeader={()=>(
                        <div className="clearfix">
                            <span style={{float:"left",fontSize:MathPx(24),color:"#333333"}}>欢迎注册智卓安全</span>
                            <span style={{fontSize:MathPx(18),float:"right"}}>没有帐号？<Link style={{color:"#37bdb4"}} to="/reg.html">立即注册</Link></span>
                        </div>
                    )} style={{"paddingLeft":MathPx(40),fontSize:MathPx(24),"paddingRight":MathPx(40),"paddingTop":MathPx(60),"paddingBottom":MathPx(100),"backgroundColor":"#fff"}}>

                        <WhiteSpace size="md"/>

                        <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',marginTop:MathPx(40)}} className="form-group">
                            
                            <label style={{width:MathPx(70),float:"left",textAlign:"center",display:"inline-block",borderRight:"1px solid #ddd"}}>
                                <i className="icon iconfont icon-youjian" style={{fontSize:MathPx(24)}}></i>
                            </label>

                            <input style={{width:MathPx(400)}} onChange={(e)=>{
                                _this.updateInput('loginname',e);
                            }} placeholder="邮箱地址" value={state.loginForm.loginname} type="text"/>

                        </div>

                        <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',marginTop:MathPx(40)}} className="form-group">
                            
                            <label style={{width:MathPx(70),float:"left",textAlign:"center",display:"inline-block",borderRight:"1px solid #ddd"}}>
                                <i className="icon iconfont icon-denglumima" style={{fontSize:MathPx(24)}}></i>
                            </label>

                            <input style={{width:MathPx(400)}} onChange={(e)=>{
                                _this.updateInput('password',e);
                            }} placeholder="密码" value={state.loginForm.password} type="password"/>

                        </div>

                        {
                            _this.props.userinfo && _this.props.userinfo.needVerify?
                            <div style={{marginTop:MathPx(40)}} className="validation clearfix">
                                <input onChange={(e)=>{
                                    _this.updateInput('code',e);
                                }} placeholder="请输入验证码" value={state.loginForm.code} style={{width:MathPx(370),height:MathPx(66),lineHeight:MathPx(66)+'px'}} className="text" type="text"/>
                                <img onClick={()=>{
                                    update('set',{
                                        IndexVerify:'/Index/Verify?'+new Date().getTime()
                                    })
                                }} style={{width:MathPx(200),height:MathPx(66),float:"right"}} src={state.IndexVerify} alt=""/>
                            </div>:''
                        }

                        <button onClick={_this.submitLogin.bind(_this)} className="btn btn-primary" style={{marginTop:MathPx(40),height:MathPx(100),lineHeight:MathPx(100)+'px',fontSize:MathPx(30)}}>
                            提交登录
                        </button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

// containers
const mapStateToProps = state => ({
    userinfo: state.userinfo.userinfo
})

const mapDispatchToProps = dispatch => ({
    set_userinfo: userinfo => dispatch(actions.set_userinfo(userinfo))
})

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default Login;
