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
            timeout:60,
            loginForm:{
                email:'',
                password:'',
                re_password:'',
                mobile:'',
                mobilecode:''
            }
        }
    }
    // 
    componentDidMount() {
        const { set_userinfo } = this.props;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.App.urls.userinfo,(response)=>{
                resolve()
                set_userinfo(response);
            },true)
        })
    }
    /**
     * @desc   跟新输入框
     * @date   2018-05-10
     * @author luozhou
     * @param  {[String]}   key [需要修改的key值]
     * @param  {[Object]}   ev  [事件对象]
     */
    updateInput(key,ev){
        this.update('set',addons(this.state,{
            loginForm:{
                [key]:{
                    $set:ev.target.value
                }
            }
        }))
    }
    /**
     * @desc   提交注册
     * @date   2018-05-10
     * @author luozhou
     */
    submitReg(){
        const _this = this;
        if(_this.state.loginForm.email=="") return Toast.info('请输入用户名', 1);
        if(_this.state.loginForm.password=="") return Toast.info('请输入密码', 1);
        if(_this.state.loginForm.password!=_this.state.loginForm.re_password) return Toast.info('两次输入密码不一致', 1);
        if(_this.state.loginForm.mobile=="") return Toast.info('请输入手机号码', 1);
        if(_this.state.loginForm.mobilecode=="") return Toast.info('请输入手机验证码', 1);
        if(_this.state.loginForm.password.length<6) return Toast.info('密码长度不能小于6', 1);
        Ajax.post(config.User.urls.register,_this.state.loginForm,(response)=>{
            if(response.code == 1){
                _this.props.history.push('');
                window.location.reload();
            }else{
                Toast.info(response.message,1)
            }
        })
    }
    /**
     * @desc   发送验证码倒计时
     * @date   2018-05-10
     * @author luozhou
     */
    codeTimeout(){
        const _this = this;
        clearInterval(time);
        let time = setInterval(()=>{
            _this.state.timeout--;
            if(_this.state.timeout<=0){
                _this.state.timeout = 60;
                clearInterval(time);
            }
            _this.update('set',{
                timeout:_this.state.timeout
            })
        },1000)
    }
    /**
     * @desc   获取手机验证码
     * @date   2018-05-10
     * @author luozhou
     */
    getMobileCode(){
        const _this = this;
        if(_this.state.loginForm.mobile=="") return Toast.info('请输入手机号码', 1);
        if(_this.state.loginForm.mobile.length != 11) return Toast.info('请输入正确的手机号码', 1);
        Ajax.post(config.User.urls.sendCode,{mobile:_this.state.loginForm.mobile},(response)=>{
            if(response.code == 1){
                Toast.info('验证码发送成功...');
                _this.codeTimeout();
            }else{
                Toast.info(response.message);
            }
        })
    }
    render() {
        const _this = this;
        const state = _this.state;
        return (
            <div>
                <div style={{"textAlign":"center"}}>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <Link to="/">
                        <img width={MathPx(220)} src={l_login} alt=""/>
                    </Link>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                </div>
                <WingBlank size="md">
                    <List renderHeader={()=>(
                        <div className="clearfix">
                            <span style={{float:"left",fontSize:MathPx(24),color:"#333333"}}>欢迎注册智卓安全</span>
                            <span style={{fontSize:MathPx(18),float:"right"}}>已有帐号，立即登录？<Link style={{color:"#37bdb4"}} to="/login.html">登录</Link></span>
                        </div>
                    )} style={{"paddingLeft":MathPx(40),fontSize:MathPx(24),"paddingRight":MathPx(40),"paddingTop":MathPx(60),"paddingBottom":MathPx(100),"backgroundColor":"#fff"}}>
                        <WhiteSpace size="md"/>
                        <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',marginTop:MathPx(40)}} className="form-group">

                            <label style={{width:MathPx(70),float:"left",textAlign:"center",display:"inline-block",borderRight:"1px solid #ddd"}}>
                                <i className="icon iconfont icon-youjian" style={{fontSize:MathPx(24)}}></i>
                            </label>
                            
                            <input style={{width:MathPx(400)}} onChange={(e)=>{
                                _this.updateInput('email',e)
                            }} value={state.loginForm.email} placeholder="邮箱地址" type="text"/>

                        </div>
                        <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',marginTop:MathPx(40)}} className="form-group">
                            
                            <label style={{width:MathPx(70),float:"left",textAlign:"center",display:"inline-block",borderRight:"1px solid #ddd"}}>
                                <i className="icon iconfont icon-denglumima" style={{fontSize:MathPx(24)}}></i>
                            </label>

                            <input style={{width:MathPx(400)}} onChange={(e)=>{
                                _this.updateInput('password',e)
                            }} value={state.loginForm.password} placeholder="密码" type="password"/>

                        </div>
                        <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',marginTop:MathPx(40)}} className="form-group">
                            
                            <label style={{width:MathPx(70),float:"left",textAlign:"center",display:"inline-block",borderRight:"1px solid #ddd"}}>
                                <i className="icon iconfont icon-denglumima" style={{fontSize:MathPx(24)}}></i>
                            </label>

                            <input style={{width:MathPx(400)}} onChange={(e)=>{
                                _this.updateInput('re_password',e)
                            }} value={state.loginForm.re_password} placeholder="再次输入密码" type="password"/>

                        </div>
                        <div style={{marginTop:MathPx(40)}} className="segmentation"><span>联系手机</span></div>
                        <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',marginTop:MathPx(40)}} className="form-group">

                            <label style={{width:MathPx(70),float:"left",textAlign:"center",display:"inline-block",borderRight:"1px solid #ddd"}}>
                                <i className="icon iconfont icon-shoujihaoma" style={{fontSize:MathPx(24)}}></i>
                            </label>

                            <input style={{width:MathPx(400)}} onChange={(e)=>{
                                _this.updateInput('mobile',e)
                            }} value={state.loginForm.mobile} placeholder="手机号码" type="text"/>

                        </div>
                        <div style={{marginTop:MathPx(40)}} className="validation clearfix">

                            <input style={{width:MathPx(200)}} onChange={(e)=>{
                                _this.updateInput('mobilecode',e)
                            }} value={state.loginForm.mobilecode} placeholder="请输入验证码" 
                            style={{width:MathPx(370),height:MathPx(66),lineHeight:MathPx(66)+'px'}} className="text" type="text"/>

                            <button disabled={state.timeout==60?false:true} style={{width:MathPx(200),height:MathPx(70),lineHeight:MathPx(70)+'px',fontSize:MathPx(24)}} 
                                    onClick={()=>{
                                        _this.getMobileCode();
                                    }}
                                    className="btn">
                                {state.timeout==60?'发送验证码':'重新发送('+state.timeout+')'}
                            </button>

                        </div>
                        <button onClick={_this.submitReg.bind(this)} className="btn btn-primary" 
                                style={{marginTop:MathPx(40),height:MathPx(100),lineHeight:MathPx(100)+'px',fontSize:MathPx(30)}}> 
                            提交注册
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
const Reg = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);
export default Reg;
