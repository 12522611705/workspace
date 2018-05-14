import React, { Component } from 'react';
import { SegmentedControl, WingBlank, WhiteSpace } from 'antd-mobile';

// react component state update
// import addons from 'react-addons-update';
import update from 'react-update';

import { MathPx } from '../utils/global';
import '../css/help.css';

import Page from '../components/page';
import LinkMy from '../components/linkMy';

import help from '../images/help.jpg';

class Help extends Component {
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            showDetail:false,
            index:0,
            selectedSegmentIndex:0,
            list:[{
                title:"智卓安全是怎样的一家安全公司？",
                years:"2018",
                month:"02-06",
                type:1,
                desc:"智卓安全成立于2016年，是一家专注研究抗DDoS服务的网络安全公司。核心团队成员均为从事互联网安全行业十年以上的业界资深专家。我们可根据用户业务的特点，为用户提供最佳网络安全方案，保护用户的网站、服务器不受DDoS攻击。智卓安全在北京、广州、上海等地设有分公司，在全国范围内部署有数十个防御节点，防御带宽最高可达2T，拥有强大的防御清洗能力。"
            },{
                title:"智卓安全的抗D原理是怎样的？",
                years:"2018",
                month:"02-06",
                type:1,
                desc:"智卓安全抗D系统建立了庞大而强大的防护清洗池。用户无需做任何部署，仅需将自己网站的DNS修改为智卓安全提供的防护服务器DNS，原始流量经过防护服务器的过滤，即可将恶意攻击流量清洗掉，从而保障网站正常业务的运行。"
            },{
                title:"智卓安全可以保护哪些网站的安全？",
                years:"2018",
                month:"02-06",
                type:1,
                desc:"智卓安全能保护任何业务类型的网站，如在线金融、网络游戏、在线教育、网络购物。但前提条件是您的网站已取得合法备案，且无任何有违国家相关法规的内容，如色情、暴力、反动、盗版等。否则智卓安全将不对该网站提供任何安全服务。"
            },{
                title:"为什么接入智卓安全抗D系统后，我网站的ip被ping时变了？",
                years:"2018",
                month:"02-06",
                type:1,
                desc:"您的网站真实ip并不会被改变，而是在接入了智卓安全后，您网站的域名被隐藏到了智卓安全防护服务器后面，这样攻击者将无法嗅探到您的真实ip。恶意攻击流量也都会被智卓安全防护服务器过滤之后，再转发给您的网站服务器，从而保障您的站点安全。"
            },{
                title:"为何智卓安全愿意提供免费的抗D服务？",
                years:"2018",
                month:"02-06",
                type:1,
                desc:"智卓安全的开发团队有着十多年的互联网安全经验，深知中小站点对网络安全的刚性需求，也理解中小站点在起步阶段的资源压力。为了帮助广大中小站点更好的将精力回归到正常业务中，智卓安全决定对中小站点开放免费的注册与保护。我们相信，一个健康稳定发展的网络环境，必定有利于全体互联网用户的共同利益。"
            },{
                title:"智卓安全免费抗D系统的防御峰值有多大？",
                years:"2018",
                month:"02-06",
                type:1,
                desc:"智卓安全为免费用户提供5G峰值的防护。我们在研究中发现，针对中小型站点的DDoS攻击里，90%的攻击峰值在5G以下。也就是说，如果您的站点没有特殊需求，5G峰值足够防御绝大多数的恶意DDoS攻击。"
            },{
                title:"如何注册智卓安全账号？",
                years:"2018",
                month:"02-06",
                type:2,
                desc:"如果您还没有智卓安全账号，那么在智卓安全主页（zealsafe.com）的右上角，点击“注册”按钮，即可进入账号注册窗口。<br/><br/>在注册窗口内，按照提示输入您的邮箱与手机号，设置您的密码并牢记。您的邮箱和手机号同时也将是您的智卓安全账号。<br/><br/><img src='/static/img/Home/help/help-acount-1.png' alt=''><br/><br/>在验证码输入框内输入右侧区域显示的验证码，然后点击“验证手机”按钮，获取手机验证码。填写好手机验证码后，点击“马上注册”按钮，即可注册成功。<br/><br/><img src='/static/img/Home/help/help-acount-2.png' alt=''>"
            },{
                title:"如果忘记了账号密码怎么办？",
                years:"2018",
                month:"02-06",
                type:2,
                desc:"如果忘记了您的智卓安全账号密码，可进入登录窗口，然后点击右下角的“忘记密码”按钮。<br/><br/><img src='/static/img/Home/help/help-acount-3.png'><br/><br/>点击“忘记密码”后，会弹出密码找回窗口，按指示输入您注册时用的邮箱或手机号，并输入验证码。然后点击“找回密码”按钮。<br/><br/><img src='/static/img/Home/help/help-acount-4.png'>若您输入的邮箱或手机号正确，重置验证码将发送到您的邮箱或手机上，接下来您仅需填写新密码和重置验证码，便能完成新密码的设定。<br/><br/><img src='/static/img/Home/help/help-acount-5.png'>"
            },{
                title:"如何添加域名到智卓安全抗D系统？",
                years:"2018",
                month:"02-06",
                type:3,
                desc:"登录您的智卓安全账号，进入用户管理后台。点击“添加域名”按钮<br/><br/><img src='/static/img/Home/help/help-dns-1.png'><br/><br/>在弹出的域名输入框中输入您想保护的域名，点击“添加域名”，开始解析域名的主机记录<br/><br/><img src='/static/img/Home/help/help-dns-2.png'><br/><br/>解析成功后，会列出您域名的主机记录，如果发现不完整，可以点击“添加纪录”进行补充，如果无问题，点击“下一步”开始进行CNAME分配。<br/><br/><img src='/static/img/Home/help/help-dns-3.png'>当获得了CNAME记录值，请您到您的DNS服务商处（如DNSPOD、新网、万网等），将主机记录修改为智卓安全分配的cname记录值。然后点击“修改好了”按钮。<br/><br/><img src='/static/img/Home/help/help-dns-4.png'>如果您的DNS服务商已经将您的CNAME值同步至了全网，那么将显示接入成功。您的网站已开始受到智卓安全抗D系统的严密保护。<br/><br/><img src='/static/img/Home/help/help-dns-5.png'>"
            },{
                title:"如何获得更强的防御？",
                years:"2018",
                month:"02-06",
                type:4,
                desc:"登录您的智卓安全账号，进入用户管理后台。点击“添加域名”按钮<br/><br/><img src='/static/img/Home/help/help-dns-1.png'><br/><br/>在弹出的域名输入框中输入您想保护的域名，点击“添加域名”，开始解析域名的主机记录<br/><br/><img src='/static/img/Home/help/help-dns-2.png'><br/><br/>解析成功后，会列出您域名的主机记录，如果发现不完整，可以点击“添加纪录”进行补充，如果无问题，点击“下一步”开始进行CNAME分配。<br/><br/><img src='/static/img/Home/help/help-dns-3.png'><br/><br/>当获得了CNAME记录值，请您到您的DNS服务商处（如DNSPOD、新网、万网等），将主机记录修改为智卓安全分配的cname记录值。然后点击“修改好了”按钮。<br/><br/><img src='/static/img/Home/help/help-dns-4.png'><br/><br/>如果您的DNS服务商已经将您的CNAME值同步至了全网，那么将显示接入成功。您的网站已开始受到智卓安全抗D系统的严密保护。<br/><br/><img src='/static/img/Home/help/help-dns-5.png'>"
            }]
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
                    <img src={help}/>
                    <h3 style={{fontSize:MathPx(60),top:MathPx(150)}}>帮助文档</h3>
                    <p style={{fontSize:MathPx(24),top:MathPx(230)}}>欢迎使用帮助文档，</p>
                    <p style={{fontSize:MathPx(24),top:MathPx(280)}}>我们为您提供从新手到专业的所有资源。</p>
                </div>
                {
                    !state.showDetail ? 
                    <div style={{paddingTop:MathPx(60),paddingBottom:MathPx(60)}} className="body">
                        <WingBlank>
                            <SegmentedControl selectedIndex={state.selectedSegmentIndex} onChange={(e)=>{
                                update('set','selectedSegmentIndex',e.nativeEvent.selectedSegmentIndex);
                            }} tintColor={"#26b5ae"} values={['全部', '常见问题', '帐号管理', 'DNS配置', '更强防御']} />
                            <WhiteSpace size="lg"/>
                            <WhiteSpace size="lg"/>
                            {
                                state.list.map((el,index)=>{
                                    let isDisplay = state.selectedSegmentIndex == 0 || state.selectedSegmentIndex == el.type;
                                    return (
                                        <dl onClick={()=>{
                                            update('set',{
                                                index,
                                                showDetail:true
                                            })
                                        }} key={index} style={{borderBottom:"1px solid #ddd",display:isDisplay ? 'block':'none'}} className="clearfix">
                                            <dt style={{fontSize:MathPx(36),width:MathPx(500),float:"left"}}>
                                                <h4 style={{color: '#333',fontSize: MathPx(36)}}>{el.title}</h4>
                                            </dt>
                                            <dd style={{float:"right",width:MathPx(130),marginLeft:0,textAlign:"right"}}>
                                                <h4 style={{color:"#999",fontSize:MathPx(36)}}>{el.years}</h4>
                                                <p style={{color:"#999",fontSize:MathPx(24)}}>{el.month}</p>
                                            </dd>
                                        </dl>
                                    )
                                })
                            }
                        </WingBlank>
                    </div>:
                    <div style={{paddingTop:MathPx(60),paddingBottom:MathPx(60)}} className="body">
                        <WingBlank>
                            <h4 style={{color: '#333',fontSize: MathPx(36)}}>
                                {state.list[state.index].title}
                            </h4>
                            <p style={{color: '#999',fontSize: MathPx(30)}}>
                                {state.list[state.index].years+' '+state.list[state.index].month}
                            </p>
                            <div style={{fontSize:MathPx(30),color:"#333"}}>
                                {state.list[state.index].desc}
                            </div>
                        </WingBlank>
                    </div>
                }
                <LinkMy/>
            </Page>
        );
    }
}

export default Help;
