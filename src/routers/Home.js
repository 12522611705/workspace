
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// antd-mobile
import { WhiteSpace, WingBlank, Carousel } from 'antd-mobile';

// react component state update
import addons from 'react-addons-update';
import update from 'react-update';
import actions from '../actions';

import { MathPx, Ajax } from '../utils/global';
import { config } from '../utils/config';

import Page from '../components/page';
import LinkMy from '../components/linkMy';

class component extends Component {
    
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            Modal:{
                visMenu:false
            },
            CarouselData:[],
            ProductDescList:[],
            solutionList:[],
            mediaNewsOv:[],
            ad:{},
            customeCaseList:[],
            solutionIndex:-1
        }
    }
    // 
    async componentDidMount() {
        await this.initBannerList();
        await this.initProductDescList();
        await this.initSolutionList();
        await this.initMediaNewsOv();
        await this.initAdList();
        await this.initCustomeCaseList();
    }
    componentWillUnmount() {
        // 组件卸载后中断此组件跟新
        this.setState = (state,callback)=>{
            return;
        };
    }
    
    /**
     * @desc   初始化轮播图数据
     * @date   2018-05-02
     * @author luozhou
     * @return {[Promise]}
     */
    initBannerList(){
        const _this = this;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.Home.urls.bannerList,(response)=>{
                _this.update('set',addons(_this.state,{
                    CarouselData:{
                        $set:response    
                    }
                }))
                resolve();
            })
        })
    }
    /**
     * @desc   初始化产品优势
     * @date   2018-05-02
     * @author luozhou
     * @return {[Promise]}
     */
    initProductDescList(){
        const _this = this;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.Home.urls.productDescList,(response)=>{
                _this.update('set',addons(_this.state,{
                    ProductDescList:{
                        $set:response    
                    }
                }))
                resolve();
            })
        })
    }
    /**
     * @desc   初始化解决方案
     * @date   2018-05-02
     * @author luozhou
     */
    initSolutionList(){
        const _this = this;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.Home.urls.solutionList,(response)=>{
                _this.update('set',addons(_this.state,{
                    solutionList:{
                        $set:response    
                    }
                }))
                resolve();
            })
        })
    }
    /**
     * @desc   初始化动态资讯
     * @date   2018-05-02
     * @author luozhou
     */
    initMediaNewsOv(){
        const _this = this;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.Home.urls.mediaNewsOv,(response)=>{
                _this.update('set',addons(_this.state,{
                    mediaNewsOv:{
                        $set:response    
                    }
                }))
                resolve();
            })
        })
    }
    /**
    * @desc   初始化广告图
    * @date   2018-05-02
    * @author luozhou
    */
    initAdList(){
        const _this = this;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.Home.urls.adList,(response)=>{
                _this.update('set',addons(_this.state,{
                    ad:{
                        $set:response    
                    }
                }))
                resolve();
            })
        })
    }
    /**
    * @desc   初始化客户案例
    * @date   2018-05-02
    * @author luozhou
    */
    initCustomeCaseList(){
        const _this = this;
        return new Promise((resolve,reject)=>{
            Ajax.get(config.Home.urls.customeCaseList,(response)=>{
                _this.update('set',addons(_this.state,{
                    customeCaseList:{
                        $set:response    
                    }
                }))
                resolve();
            })
        })
    }
    render() {
        const _this = this;
        const state = _this.state;
        const update = _this.update;
        const { history } = this.props
        return (
            <Page>
                <Carousel
                    autoplay={false}
                    infinite
                    style={{ height: MathPx(500) }}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}>
                    {
                        state.CarouselData.map(item => (
                            <a key={item.id}
                               href="javascript:;"
                               style={{ display: 'inline-block', width: '100%', overflow:'hidden' }}>
                                <img src={item.img_src}
                                    alt="轮播图"
                                    style={{ height:MathPx(500), verticalAlign: 'top', transform:'translateX(-30%)', position: 'relative'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        update('set',addons(state,{
                                            imgHeight:{$set:"auto"}
                                        }))
                                }}/>
                            </a>
                        ))
                    }
                </Carousel>

                <WhiteSpace />

                <WingBlank size="md">
                    <h4 style={{fontSize:MathPx(48),marginTop:MathPx(100)}} className="app-title">
                        产品优势
                    </h4>
                    <h6 style={{fontSize:MathPx(24),marginTop:MathPx(30),marginBottom:MathPx(80)}} className="app-sub-title">
                        企业级标准研发产品，保障用户的利益最大化
                    </h6>
                    <ul className="productDescList">
                        {
                            state.ProductDescList.map((el,index)=>(
                                <li key={index} className="items" style={{padding:MathPx(35),marginBottom:MathPx(20)}}>
                                    <h5 className="title" style={{fontSize:MathPx(34)}}>
                                        <span style={{fontSize:MathPx(50),marginRight:MathPx(26),top:MathPx(14)}} className={"icon iconfont "+el.icon}></span>
                                        {el.title}
                                    </h5>
                                    <p className="detail" style={{fontSize:MathPx(24),lineHeight:MathPx(44)+'px'}}>
                                        {el.desc}
                                    </p>  
                                </li>
                            ))
                        }
                    </ul>
                </WingBlank>
                <WhiteSpace size="md" />
                <div className="solution" style={{paddingLeft:MathPx(72),paddingRight:MathPx(72)}}>
                    <h4 style={{fontSize:MathPx(48),marginTop:MathPx(100)}} className="app-title">
                        解决方案
                    </h4>
                    <h6 style={{fontSize:MathPx(24),marginTop:MathPx(30),marginBottom:MathPx(80)}} className="app-sub-title">
                        洞悉行业内的需求痛点，灵活定制解决方案
                    </h6>
                    <ul className="solutionList">
                        {
                            state.solutionList.map((el,index)=>(
                               <li key={index} style={{height:MathPx(970)}} className="items">
                                    <img onClick={()=>{
                                        update('set',addons(state,{
                                            solutionIndex:{$set:index}
                                        }))
                                    }} src={el.img_src} alt="解决方案"/>
                                    {
                                        state.solutionIndex == index ? 
                                        <div onClick={()=>{
                                            update('set',addons(state,{
                                                solutionIndex:{$set:-1}
                                            }))
                                        }} className="hover">
                                            <div>
                                                <h3 style={{fontSize:MathPx(48)}}>{el.title}</h3>
                                                <p style={{fontSize:MathPx(30),lineHeight:MathPx(60)+'px'}}>{el.mouse_over_text}</p>
                                            </div>
                                        </div> :
                                        <div onClick={()=>{
                                            update('set',addons(state,{
                                                solutionIndex:{$set:index}
                                            }))
                                        }} className="title">
                                            <p><span style={{fontSize:MathPx(50)}} className={"icon iconfont "+el.icon}></span></p>
                                            <h3 style={{fontSize:MathPx(48)}}>{el.title}</h3>
                                        </div>
                                    }
                                </li> 
                            ))
                        }
                    </ul>
                    <h4 style={{fontSize:MathPx(48),marginTop:MathPx(100)}} className="app-title">
                        动态资讯
                    </h4>
                    <h6 style={{fontSize:MathPx(24),marginTop:MathPx(30),marginBottom:MathPx(80)}} className="app-sub-title">
                        及时地获悉行业资讯，给企业带来价值信息
                    </h6>
                    <div style={{marginLeft:MathPx(-36),marginRight:MathPx(-36)}} className="mediaNewsOv">
                        {
                            state.mediaNewsOv.map((el,index)=>(
                                <dl onClick={()=>{  
                                    Ajax.post(config.Home.urls.getDetail,{id:el.id,type:el.type},(response)=>{
                                        history.replace({
                                            pathname: 'infomation.html',
                                            desc:response
                                        })
                                    })
                                }} style={{paddingBottom:MathPx(50)}} key={index} className="list clearfix">
                                    <dt>
                                        <h4 style={{fontSize:MathPx(36),lineHeight:MathPx(60)+'px'}} className="title">
                                            {el.title}
                                        </h4>
                                    </dt>
                                    <dd>
                                        <p style={{fontSize:MathPx(36),marginTop:MathPx(10)}} className="month">
                                            {el.ctime.split(' ')[0].split('-')[1] +'-'+ el.ctime.split(' ')[0].split('-')[2]}
                                        </p>
                                        <p style={{fontSize:MathPx(24),marginTop:MathPx(34)}} className="year">
                                            {el.ctime.split(' ')[0].split('-')[0]}
                                        </p>
                                    </dd>
                                </dl>
                            ))
                        }
                    </div>
                    <WhiteSpace size="md" />
                    <WhiteSpace size="md" />
                    <WhiteSpace size="md" />
                    <WhiteSpace size="md" />
                </div>
                <div style={{height:MathPx(420)}} className="ad">
                    <h3 style={{fontSize:MathPx(48)}} className="title">{state.ad.desc}</h3>
                    <button className="btn"
                        style={{fontSize:MathPx(30),width:MathPx(280),height:MathPx(60),lineHeight:MathPx(60)+'px',color:'#fff'}} >
                        {state.ad.btn_text}
                    </button>
                    <img src={state.ad.img_src} alt="广告图"/>
                </div>
                <div className="customeCaseList">
                    <h4 style={{fontSize:MathPx(48),marginTop:MathPx(100)}} className="app-title">
                        客户案例
                    </h4>
                    <h6 style={{fontSize:MathPx(24),marginTop:MathPx(30),marginBottom:MathPx(80)}} className="app-sub-title">
                        用户遍布电商、游戏、社交、直播、金融等热门行业
                    </h6>
                    <ul className="clearfix">
                        {
                            state.customeCaseList.map((el,index)=>(
                                <li key={index} className="items">
                                    <Link to={el.url}><img src={el.img_src} alt="客户案例"/></Link>
                                </li>
                            ))
                        }
                    </ul>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                </div>
                <LinkMy/>
            </Page>
        );
    }
}

const Home = withRouter(component)

export default Home;
