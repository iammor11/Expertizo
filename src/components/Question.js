import React, { useState } from 'react';
import { newQuestion } from '../redux/actions/NewQuestion';
import { connect } from 'react-redux';

import Option from './Option';
import QuestionNo from './QuestionNo';
import ProgressBar from './ProgressBar';
import Category from './Category';
import Star from './Star';

const Question = props => {

  const [oneques, setOneques] = useState(null)
  const { no, question, newQuestion } = props;

  const readQuestions = () => {
    newQuestion(no)
    setOneques(question[no])
  }

  const show = oneques && <h3>{oneques.question}?</h3>
  return (
    <div className="qtn">
      <ProgressBar no={no}/>
      <QuestionNo no={no} total={question && question.length} />
      <Category category={oneques && oneques.category}/>
      <Star difficulty={oneques && oneques.difficulty} />
      {show}
      <Option total={question && question.length} options={oneques && question[no-1].incorrect_answers} rightOption={oneques && question[no-1].correct_answer} />
      <br /><button onClick={() => readQuestions()} className="options">{no===20 ? 'Finish' : no>0 ? 'Next' : 'Start'}</button>
      </div>
  );
  }

const mapStateToProps = (state) => {
    return{
      no: state.NewQuestionReducer
    }}
  
const mapDispatchToProps = (dispatch) => {
    return{
    newQuestion: (no) => dispatch(newQuestion(no))
    }}

export default connect(mapStateToProps, mapDispatchToProps)(Question);