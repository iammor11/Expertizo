import React, { useState } from 'react'
import { correctAns } from '../redux/actions/CorrectAns';
import Score from './Score';
import { connect } from 'react-redux';

const Option = props =>  { 
    const [ans, setAns] = useState(null)
    const [percent, setPercent] = useState(null)

    const { correct, correctAns, total } = props;
    console.log(props)
    const correctFunc = () => {
        correctAns(correct)
        setAns('correct')
        setPercent((correct/total) * 100 )
    }

    const wrong = () => {
        setAns('wrong')
    }
    return (
    <div>
     <div>
        {props.options && props.options.map((val, ind) => {
            return ( 
            <button key={ind} onClick={() => wrong()} className="options">{val}</button>
        )})}
        {props.rightOption && <button onClick={() => correctFunc()}  className="options">{props.rightOption}</button>}
    </div> 
    <h3>{ans==='correct' ? 'Correct!' : ans==='wrong' ? 'Sorry!' : null}</h3>
    {props.options && <Score correct={correct} percent={percent} />}
</div>
    )}

const mapStateToProps = (state) => {
    return{
    correct : state.CorrectAnswerReducer
    }}
    
const mapDispatchToProps = (dispatch) => {
    return{
    correctAns: (correct) => dispatch(correctAns(correct))
    }}

export default connect(mapStateToProps, mapDispatchToProps)(Option);