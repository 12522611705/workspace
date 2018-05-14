import React, { Component } from 'react';
import { WhiteSpace, WingBlank, Badge, Modal } from 'antd-mobile';

// react component state update
// import addons from 'react-addons-update';
import update from 'react-update';

import { MathPx, Ajax } from '../utils/global';
import { config } from '../utils/config';

import Page from '../components/page';
import LinkMy from '../components/linkMy';

import help from '../images/help.jpg';
import '../css/product.css';

class Product extends Component {
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            productListData:[],
            modal:false,
            title:'',
            index:0,
            text:''
        }
    }
    // 
    componentDidMount() {
        const _this = this;
        Ajax.get(config.Product.urls.productList,(response)=>{
            if(response.code == 1){
                _this.update('set',{
                    productListData:response.data.base
                })
            }
        },true)
    }
    render() {
        const _this = this;
        const state = _this.state;
        const update = _this.update;
        return (
            <Page>
                <div style={{backgroundColor:"#fff"}}>
                    <div style={{height:MathPx(500)}} className="banner">
                        <img src={help}/>
                        <h3 style={{fontSize:MathPx(60),top:MathPx(150)}}>智卓安全产品</h3>
                        <p style={{fontSize:MathPx(24),top:MathPx(230)}}>为不同需求的用户提供了多款防御套餐，</p>
                        <p style={{fontSize:MathPx(24),top:MathPx(280)}}>您可根据自己站点的需要而自由选择。</p>
                    </div>
                    <WingBlank>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <h3 style={{fontSize:MathPx(36)}} className="product-title">
                            套餐介绍<a style={{fontSize:MathPx(24)}} href="#" target="_blank">下载套餐介绍</a>
                        </h3>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <ul style={{paddingTop:MathPx(30),paddingBottom:MathPx(30),paddingLeft:MathPx(20),paddingRight:MathPx(20),fontSize:MathPx(24)}} className="product-list-title clearfix">
                            <li>套餐名称</li>
                            <li>价格/月</li>
                            <li onClick={()=>{
                                update('set',{
                                    modal:true,
                                    text:'最高防护峰值20Gbps，如果是固定套餐当攻击超出防护峰值后会进行黑洞处理，如果是弹性套餐会继续防护，并产生弹性防护费用。',
                                    title:'防御带宽峰值详细说明'
                                })
                            }}>带宽峰值<Badge size="small" style={{backgroundColor:"#26b5ae",position:"absolute",top:MathPx(-40),right:MathPx(-30)}} text={'?'}></Badge></li>
                            <li onClick={()=>{
                                update('set',{
                                    modal:true,
                                    text:'最高防护峰值20Gbps，如果是固定套餐当攻击超出防护峰值后会进行黑洞处理，如果是弹性套餐会继续防护，并产生弹性防护费用。',
                                    title:'防御带宽峰值详细说明'
                                })
                            }}>CC防御<Badge size="small" style={{backgroundColor:"#26b5ae",position:"absolute",top:MathPx(-40),right:MathPx(-30)}} text={'?'}></Badge></li>
                            <li onClick={()=>{
                                update('set',{
                                    modal:true,
                                    text:'最高防护峰值20Gbps，如果是固定套餐当攻击超出防护峰值后会进行黑洞处理，如果是弹性套餐会继续防护，并产生弹性防护费用。',
                                    title:'防御带宽峰值详细说明'
                                })
                            }}>清洁流量<Badge size="small" style={{backgroundColor:"#26b5ae",position:"absolute",top:MathPx(-40),right:MathPx(-30)}} text={'?'}></Badge></li>
                        </ul>
                        {
                            state.productListData.map((el,index)=>(
                                <ul key={index} style={{fontSize:MathPx(24),marginTop:MathPx(20)}}
                                onClick={()=>{
                                    update('set',{
                                        index
                                    })
                                }}
                                className={state.index == index ? "hover product-list-record clearfix" : "product-list-record clearfix"}>
                                    <li style={{paddingTop:MathPx(30),paddingBottom:MathPx(30),paddingLeft:MathPx(20)}} className="high">
                                        {el.name}
                                    </li>
                                    <li style={{paddingTop:MathPx(30),paddingBottom:MathPx(30)}} className="high">
                                        {el.price == 0 ? '免费使用' : el.price}
                                    </li>
                                    <li style={{paddingTop:MathPx(30),paddingBottom:MathPx(30)}}>
                                        {el.cap}
                                    </li>
                                    <li style={{paddingTop:MathPx(30),paddingBottom:MathPx(30)}}>
                                        {el.cc}
                                    </li>
                                    <li style={{paddingTop:MathPx(30),paddingBottom:MathPx(30),paddingRight:MathPx(20)}}>
                                        {el.flow}
                                    </li>
                                </ul>
                            ))
                        }
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <h3 style={{fontSize:MathPx(36)}} className="product-title">
                            抗D无忧套餐<a style={{fontSize:MathPx(24)}} href="#" target="_blank">3650元/年</a>
                        </h3>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <table style={{fontSize:MathPx(24)}} className="table">
                            <thead>
                                <tr style={{textIndent:MathPx(16)}} height={MathPx(80)}>
                                    <th className="high">
                                        <i style={{fontSize:MathPx(24),marginRight:MathPx(10)}} 
                                            className="icon iconfont icon-yuanyuansu"></i>
                                        服务规格名称
                                    </th>
                                    <th>
                                        <i style={{fontSize:MathPx(24),marginRight:MathPx(10)}} 
                                            className="icon iconfont icon-yuanyuansu"></i>
                                        规格参数
                                    </th>
                                    <th>
                                        <i style={{fontSize:MathPx(24),marginRight:MathPx(10)}} 
                                            className="icon iconfont icon-yuanyuansu"></i>
                                        具体说明
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td>防御带宽峰值</td>
                                    <td className="high">20Gbps</td>
                                    <td className="high" onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'最高防护峰值20Gbps，如果是固定套餐当攻击超出防护峰值后会进行黑洞处理，如果是弹性套餐会继续进行防护，并产生弹性防护费用。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td className="high">CC攻击防护峰值</td>
                                    <td>60,000QPS</td>
                                    <td onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'最高防护峰值60,000QPS，如果是固定套餐当攻击超出防护峰值后会进行停止转发处理，如果是弹性套餐会继续进行防护，并产生弹性防护费用。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td>攻击防护次数</td>
                                    <td className="high">3次</td>
                                    <td className="high" onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'接入防护服务后，如果站点被攻击并成功防护，会记录受到攻击的次数，并扣除可以继续服务的次数，一天内不管受多长时间的攻击只算一次，按自然日进行统计。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td className="high">正常业务带宽</td>
                                    <td>20Mbps</td>
                                    <td onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'网站业务消耗的带宽在20M以内，如果需要更高的带宽，可以联系销售人员定制。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td>网站业务QPS</td>
                                    <td className="high">3,000QPS</td>
                                    <td className="high" onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'非攻击状态下网站业务每秒访问的次数，如果需要更高的QPS，可以联系销售人员定制。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td className="high">域名数</td>
                                    <td>1个</td>
                                    <td onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'套餐可以接入的域名个数。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td>主机记录数</td>
                                    <td className="high">10条</td>
                                    <td className="high" onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'域名下面可以增加的主机记录数，如添加了“www”,“@”,“*”这几条主机记录，则统计为添加了3条主机记录。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td className="high">服务接入次数</td>
                                    <td>10次</td>
                                    <td onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'当域名接入防护，并且域名解析的IP为防护节点的高防IP后，会算一次成功接入，并扣除可以再次接入的次数。接入防护服务后，所有的请求会由防护节点转发回源站，接入防护服务后如果5天内没有检测到攻击，系统会自动回源（域名解析的IP会变回源站IP，所有的请求会直接到源站而不经过防护节点），自动回源后如果再次遇到攻击需要重新接入防护，那么需要登陆到用户个人中心重置接入状态。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td>防护端口和协议</td>
                                    <td className="high">
                                        <p>端口/协议:80/http</p>
                                        <p>端口/协议:443/https</p>
                                    </td>
                                    <td className="high" onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'只防护80端口和443端口，80端口协议限制为http，443端口协议限制为https，对https协议采用不解密直接转发的方式（不接收数字证书并解密）。'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                                <tr style={{textIndent:MathPx(50)}} height={MathPx(80)}>
                                    <td className="high">技术支持</td>
                                    <td>7x24小时</td>
                                    <td onClick={()=>{
                                        update('set',{
                                            modal:true,
                                            text:'专业的团队已经做好准备，随时为您提供全面的服务支持！'
                                        })
                                    }}><a href="javascript:;">查看</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <WhiteSpace/>
                    </WingBlank>
                </div>
                <LinkMy/>
                <Modal
                    visible={state.modal}
                    transparent
                    maskClosable={false}
                    title={state.title}
                    footer={[{ text: '关闭', onPress: () => { 
                        update('set',{
                            modal:false
                        })
                    }}]}>
                    {state.text}
                </Modal>
            </Page>
        );
    }
}

export default Product;
