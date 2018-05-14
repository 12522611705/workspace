import React, { Component } from 'react';
import { SegmentedControl, WingBlank, WhiteSpace, Grid } from 'antd-mobile';

// react component state update
import addons from 'react-addons-update';
import update from 'react-update';

import { MathPx } from '../utils/global';
import Page from '../components/page';
import LinkMy from '../components/linkMy';

import help from '../images/help.jpg';
import '../css/join.css';

class Infomation extends Component {
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            selectedSegmentIndex:0
        }
    }
    // 
    componentDidMount() {

    }
    render() {
        const _this = this;
        const state = _this.state;
        const update = _this.update;
        return (
            <Page>
                <div style={{height:MathPx(500)}} className="banner">
                    <img src={help} alt=""/>
                    <h3 style={{fontSize:MathPx(60),top:MathPx(150)}}>关于智卓</h3>
                    <p style={{fontSize:MathPx(24),top:MathPx(230)}}>专注创新，追求卓越</p>
                </div>
                <div style={{paddingTop:MathPx(60)}} className="body">
                    <WingBlank>
                        <SegmentedControl selectedIndex={state.selectedSegmentIndex} onChange={(e)=>{
                            update('set',addons(state,{
                                selectedSegmentIndex:{
                                    $set:e.nativeEvent.selectedSegmentIndex
                                }
                            }))
                        }} tintColor={"#26b5ae"} values={['关于智卓', '加入智卓', '合作伙伴']} />
                        <WhiteSpace size="lg"/>
                        <WhiteSpace size="lg"/>
                        <WhiteSpace size="lg"/>
                        {
                            state.selectedSegmentIndex == 0 ?
                            <div className="about">
                                <div className="item-p">
                                    智卓安全成立于2016年，是一家专注研究抗DDoS服务的网络安全公司。核心团队成员均为从事互联网安全行业十年以上的业界资深专家。 我们可根据用户业务的特点，为用户提供最佳网络安全方案，保护用户的网站、服务器不受DDoS攻击。
智卓安全在北京、广州、上海等地设有分公司，在全国范围内部署有数十个防御节点，防御带宽最高可达2T，拥有强大的防御清洗能力。
                                </div>
                                <div className="text-center">
                                    <img src="/static/img/Home/help/join-show.jpg" alt="" className="item-img"/>
                                </div>
                                <div className="item-p">
                                    智卓安全提供的DDoS云防护系统，无需任何部署，接入简单快速，并且有专业团队提供7*24小时客户服务，对各种大流量洪水攻击、CC攻击能秒极响应，快速有效解决被攻击情况。智卓安全提供的DDoS云防护系统，无需任何部署，接入简单快速，并且有专业团队提供7*24小时客户服务，对各种大流量洪水攻击、CC攻击能秒极响应，快速有效解决被攻击情况。
                                </div>
                            </div>:
                            state.selectedSegmentIndex == 1 ?
                            <div>
                                <ul className="join-attract">
                                    <li className="items">
                                        <div style={{borderBottomWidth:MathPx(10),height:MathPx(110),lineHeight:MathPx(110)+'px'}}>
                                            <i style={{fontSize:MathPx(17),marginRight:MathPx(10)}} className="icon iconfont icon-yuanyuansu"></i>工作也能自由的呼吸
                                        </div>
                                        <p style={{fontSize:MathPx(24)}}>客村，广州塔旁，低密度绿色TIT创意园区</p>
                                        <WhiteSpace/>
                                    </li>
                                    <li className="items">
                                        <div style={{borderBottomWidth:MathPx(10),height:MathPx(110),lineHeight:MathPx(110)+'px'}}>
                                            <i style={{fontSize:MathPx(17),marginRight:MathPx(10)}} className="icon iconfont icon-yuanyuansu"></i>认同付出，一同成长。
                                        </div>
                                        <p style={{fontSize:MathPx(24)}}>开放的工作舞台，精英云集，期待与你擦出不同火花</p>
                                        <WhiteSpace/>
                                    </li>
                                    <li className="items">
                                        <div style={{borderBottomWidth:MathPx(10),height:MathPx(110),lineHeight:MathPx(110)+'px'}}>
                                            <i style={{fontSize:MathPx(17),marginRight:MathPx(10)}} className="icon iconfont icon-yuanyuansu"></i>关注员工福利
                                        </div>
                                        <p style={{fontSize:MathPx(24)}}>富有竞争的薪酬、五险一金、以及形式多样奖励制度</p>
                                        <WhiteSpace/>
                                    </li>
                                </ul>
                                <WhiteSpace/>
                                <WhiteSpace/>
                                <WhiteSpace/>
                                <h3 style={{fontSize:MathPx(30)}} className="join-title-h3">招聘职位信息</h3>
                                <WhiteSpace/>
                                <div style={{height:MathPx(70),lineHeight:MathPx(70)+'px',fontSize:MathPx(30)}} className="tab-title">
                                    <span>运营总结</span>
                                    <span style={{marginLeft:MathPx(220)}}>深圳</span>
                                    <span style={{float:"right"}}>2018-05-09</span>
                                </div>
                                <WhiteSpace/>
                                <WhiteSpace/>
                                <h3 style={{fontSize:MathPx(24)}} className="join-title-h4">职位诱惑</h3>
                                <p style={{fontSize:MathPx(24)}} className="join-text">A股上市，薪资福利丰厚，下午茶，定期体检</p>
                                <WhiteSpace/>
                                <WhiteSpace/>
                                <h3 style={{fontSize:MathPx(24)}} className="join-title-h4">岗位职责：</h3>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">1、负责公司服装类/电子类所有自营网站的整体运营规划，
包括产品规划、销售策略、用户体验及日常运营及维护等；</p>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">2、把控产品品类选择、利润、营销推广、供应链建设等策
略，优化各环节工作流程，推动销售运营方案的实施落地；</p>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">3、负责事业部所有自营网站在海外市场品牌宣传及传播，
协助推广部门对PR、公关等提出建设性的意见及建议；</p>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">4、不定期收集外部市场信息，并根据当前行业环境随时调
整运营策略和方向；</p>
                                <WhiteSpace/>
                                <WhiteSpace/>
                                <h3 style={{fontSize:MathPx(24)}} className="join-title-h4">任职资格：</h3>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">1.本科以上学历，英语CET-4，27-40岁；</p>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">2.有5年以上电商行业网站运营工作经验，思维开阔，大局观
强，有出口B2C网站运营团队管理经验者优先；</p>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">3.沟通协调能力强，善于整合资源驱动目标，具备多任务、
多角色的平衡能力；</p>
                                <p style={{fontSize:MathPx(24),margin:MathPx(0),lineHeight:MathPx(44)+'px'}} className="join-text">4.抗压性好，能适应公司快速发展。</p>
                            </div>:
                            state.selectedSegmentIndex == 2 ?
                            <div>
                                <Grid data={[{
                                    img:'/static/img/Home/bys.png',
                                    to:'https://www.baishancloud.com/zh/'
                                },{
                                    img:'/static/img/Home/kzw.png',
                                    to:'http://www.kongzhong.com'
                                },{
                                    img:'/static/img/Home/zxwa.png',
                                    to:'http://www.cnzxsoft.com/index.html'
                                },{
                                    img:'/static/img/Home/shwyw.png',
                                    to:'http://www.7x24.cn/sales/'
                                },{
                                    img:'/static/img/Home/ydzs.png',
                                    to:'https://www.isurecloud.net'
                                },{
                                    img:'/static/img/Home/fj6.png',
                                    to:'https://www.6.cn'
                                },{
                                    img:'/static/img/Home/qmhd.png',
                                    to:'http://www.quanmin-game.com'
                                },{
                                    img:'/static/img/Home/fhjr.png',
                                    to:'https://www.fengjr.com/cn/'
                                }]}
                                columnNum={3}
                                className="grid"
                                renderItem={dataItem => (
                                    <a target="_blank" style={{position:"absolute",width:"100%",height:"100%",left:0,top:0,alignItems:"center",display:"flex",justifyContent:"center"}} to={dataItem.to}>
                                        <img width="80%" src={dataItem.img} alt="" />
                                    </a>
                                )}/>
                                <WhiteSpace/>
                                <WhiteSpace/>
                            </div>
                            :""
                        }
                        
                    </WingBlank>
                </div>
                <LinkMy/>
            </Page>
        );
    }
}

export default Infomation;
