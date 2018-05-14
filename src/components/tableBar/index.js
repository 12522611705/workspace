
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { MathPx } from '../../utils/global';
import action from './action';

const component = (state) => {
    return (
        <ul style={{backgroundColor:"#000",color:"#fff"}}>
            <li style={{height:"50px"}} onClick={()=>{
                console.log(state)
                state.myChange(1);
            }}>1</li>
            <li style={{height:"50px"}} onClick={()=>{
                console.log(state)
                state.myChange(2);
            }}>2</li>
        </ul>
    );
}

// containers
const mapStateToProps = state => ({
    index: state.index
})

const mapDispatchToProps = dispatch => ({
    myChange: index => dispatch(action.my_change(index))
})

const LinkMy = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default LinkMy;