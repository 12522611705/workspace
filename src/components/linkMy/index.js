
import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { MathPx } from '../../utils/global';

class LinkMy extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#333333",color:"#999999",fontSize:MathPx(24)}}>
                <WingBlank>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>
                    <h3 style={{fontSize:MathPx(36),color:"#fff"}}>北京智卓安全科技有限公司</h3>
                    <WhiteSpace/>
                    <p>北京：朝阳区望京SOHO塔1B座12层1205 （总部）</p>
                    <p>电话：010-84761202</p>
                    <p>邮编：100102</p>
                    <WhiteSpace/>
                    <p>广州：海珠区浩蕴商务大厦21层2104室 （分部）</p>
                    <p>电话：020-84387095</p>
                    <p>邮编：510320</p>
                    <WhiteSpace/>
                    <p>购买咨询电话：010-84761202</p>
                    <WhiteSpace/>
                    <p>产品反馈QQ：2683173826</p>
                    <WhiteSpace/>
                    <p style={{position:"relative"}}>
                        关注我们：
                        <a style={{color:"#999999",marginLeft:MathPx(20)}} href="http://weibo.com/p/1006065942985576/home?from=page_100606&amp;mod=TAB&amp;is_all=1#place">
                            <i className="icon iconfont icon-iconfont-weib"></i>
                        </a>
                        <a className="twoCode" style={{color:"#999999",marginLeft:MathPx(20)}} href="javascript:;">
                            <i className="icon iconfont icon-wechat"></i>
                        </a>
                        <img style={{position:"absolute",bottom:MathPx(40),left:MathPx(150)}} width={MathPx(360)} src="https://www.zealsafe.com/static/img/wx_qrcode.jpg" alt=""/>
                    </p>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        );
    }
}
export default LinkMy;
