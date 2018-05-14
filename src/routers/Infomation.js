import React, { Component } from 'react';
import { SegmentedControl, WingBlank, WhiteSpace } from 'antd-mobile';
import ReactDOM from 'react-dom';

// react component state update
import addons from 'react-addons-update';
import update from 'react-update';

import { MathPx, Ajax } from '../utils/global';
import { config } from '../utils/config';

import Page from '../components/page';
import LinkMy from '../components/linkMy';

import '../css/help.css';
import help from '../images/help.jpg';
let current=1;
class Infomation extends Component {
    constructor(props){
        super(props)
        this.update = update.bind(this);
        this.state={
            showDetail:false,
            selectedSegmentIndex:0,
            type:'all',
            total:0,
            detailData:{},
            isLoading:false,
            ListViewData:[]
        }
    }
    // 
    componentDidMount() {
        const _this = this;
        const { location } = _this.props;
        if(location.desc){
            window.scrollTo(0,0);
            _this.update('set',{
                showDetail:true,
                ListViewData:[],
                detailData:location.desc
            })
        }else{
            current = 1;
            // simulate initial Ajax
            Ajax.post(config.Infomation.urls.allNewsList,{p:current,type:_this.state.type},(response)=>{
                _this.update('set',{
                    ListViewData:[...response.data],
                    total:response.total
                })
            },true)
        }
        window.addEventListener('scroll', (e)=>{
            if(!_this.state.isLoading && 
                _this.refs.loadingMore && 
                _this.refs.loadingMore.offsetTop < (window.scrollY+window.screen.height+100)
            ){
                current++;
                _this.loadingMore(current);
                if(Math.ceil(_this.state.total/5)<=current){
                    _this.state.isLoading = true;
                }
            }
        });
    }
    /**
     * @desc   查看详情
     * @date   2018-05-09
     * @author luozhou
     * @param  {[Object]}   record [记录]
     */
    renderRow(record){
        const _this = this;
        Ajax.post(config.Infomation.urls.getDetail,{type:record.type,id:record.id},(response)=>{
            _this.update('set',{
                showDetail:true,
                detailData:response
            })
        })
    }
    loadingMore(current){
        const _this = this;
        Ajax.post(config.Infomation.urls.allNewsList,{p:current,type:_this.state.type},(response)=>{
            if(response.code == 200){
                _this.update('set',addons(_this.state,{
                    ListViewData:{
                        $push:response.data
                    }
                }))
            }
        },true)
    }
    render() {
        const _this = this;
        const state = _this.state;
        const update = _this.update; 
        return (
            <Page>
                <div style={{height:MathPx(500)}} className="banner">
                    <img src={help} alt=""/>
                    <h3 style={{fontSize:MathPx(60),top:MathPx(150)}}>动态资讯</h3>
                    <p style={{fontSize:MathPx(24),top:MathPx(230)}}>及时地获悉行业资讯，给企业带来价值信息</p>
                </div>
                {
                    !state.showDetail ?
                    <div ref="tab" style={{paddingTop:MathPx(60)}} className="body">
                        <WingBlank>
                            <SegmentedControl selectedIndex={state.selectedSegmentIndex} onChange={(e)=>{
                                const type=['all','media','news'];
                                _this.update('set',addons(_this.state,{
                                    selectedSegmentIndex:{
                                        $set:e.nativeEvent.selectedSegmentIndex
                                    },
                                    type:{
                                        $set:type[e.nativeEvent.selectedSegmentIndex]
                                    }
                                }))
                            }} tintColor={"#26b5ae"} values={['全部', '智卓动态', '行业资讯']} />
                            {
                                state.ListViewData.map((el,index)=>(
                                    <dl onClick={()=>{
                                        _this.renderRow(el);
                                    }} style={{borderBottom:"1px solid #ddd",display:(state.type == 'all' || state.type == el.type) ? 'block' : 'none'}} 
                                        className="clearfix" key={index}>
                                        <dt style={{fontSize:MathPx(36),width:MathPx(500),float:"left"}}>
                                            <h4 style={{color: '#333',fontSize: MathPx(36)}}>{el.title}</h4>
                                        </dt>
                                        <dd style={{float:"right",width:MathPx(130),marginLeft:0,textAlign:"right"}}>
                                            <h4 style={{color:"#999",fontSize:MathPx(36)}}>
                                                {el.ctime.split(' ')[0].split('-')[0]}
                                            </h4>
                                            <p style={{color:"#999",fontSize:MathPx(24)}}>
                                                {el.ctime.split(' ')[0].split('-')[1] +'-'+ el.ctime.split(' ')[0].split('-')[2]}
                                            </p>
                                        </dd>
                                    </dl>
                                ))
                            }
                            <div ref="loadingMore" style={{textAlign:"center",fontSize:MathPx(30)}}>
                                {state.isLoading?'全部加载完成':'下拉显示更多...'}
                            </div>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <WhiteSpace/>
                        </WingBlank>
                    </div>:
                    <div ref={el => _this.lv = el} style={{paddingTop:MathPx(60)}} className="body">
                        <WingBlank>
                            <h4 style={{color: '#333',fontSize: MathPx(36)}}>
                                {state.detailData.title}
                            </h4>
                            <p style={{color: '#999',fontSize: MathPx(30)}}>
                                {state.detailData.ctime}
                            </p>
                            <div style={{fontSize:MathPx(30),color:"#333"}} dangerouslySetInnerHTML={{__html:state.detailData.body}}></div>
                        </WingBlank>
                    </div>
                }
                <WhiteSpace/>
                <LinkMy/>
            </Page>
        );
    }
}

export default Infomation;
