import React from 'react';
import './Quiz.css';
import { pipelineTopicExpression } from '@babel/types';
import { Link } from "react-router-dom";
import Result from '../result/Result';
import { Spring, Trail } from 'react-spring/renderprops';

var taskData = require('../../taskListExample.json');
var taskData2 = require('../../taskListExample2.json');

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <TestQuiz1 questionNumber={this.props.questionNumber} questions="6" />
    }
}

class TestQuiz1 extends React.Component {
    state = {
        questionNumber: 1,
        answer1: "",
        answer2: ""
    }
    constructor(props) {
        super(props)
        this.state = {questionCount: 0}
        this.handleClick = this.handleClick.bind(this);
        }
/*
    optionCount() {
        var number = [];

        var questions = [
            <RadioGroup qTitle={taskData.questions[0].prompt} value1={taskData.questions[0].ansType[0]} value2={taskData.questions[0].ansType[1]} />,
            <RangeSlider qTitle={taskData.questions[1].prompt} min={taskData.questions[1].minValue} max={taskData.questions[1].maxValue} minLabel={taskData.questions[1].minLabel} maxLabel={taskData.questions[1].maxLabel} />,
            <Opentext qTitle={taskData.questions[2].prompt} maxLength={taskData.questions[2].maxLen} />,
            <RangeSlider qTitle={taskData.questions[3].prompt} min={taskData.questions[3].minValue} max={taskData.questions[3].maxValue} minLabel={taskData.questions[3].minLabel} maxLabel={taskData.questions[3].maxLabel} />,
            <RadioGroup qTitle={taskData.questions[4].prompt} value1="Tosi" value2="Epätosi" />,
            <RadioGroup qTitle={taskData.questions[5].prompt} value1="Tosi" value2="Epätosi" />
            ];

        for (var i = 0; i < this.props.questions; i++) {
            number.push(
                    <div className="questionCard">
                        {questions[i]}
                    </div>
            )
        }
        return number;
    }*/
    changeQuestion = (answer) => {
        this.setState(prevState =>  {
            return {
                answer1: answer,
                questionNumber: prevState.questionNumber + 1
            }  
        })
    }

  /*  render() {
                
        let questionLayout1;

        if(this.state.questionNumber == 1) {
            questionLayout1 = <RadioGroup subscribe={this.changeQuestion} answer={this.state.answer1} qTitle={taskData.questions[0].prompt} value1={taskData.questions[0].ansType[0]} value2={taskData.questions[0].ansType[1]} />;
        } else if(this.state.questionNumber == 2) {
            questionLayout1 = <RangeSlider qTitle={taskData.questions[3].prompt} min={taskData.questions[3].minValue} max={taskData.questions[3].maxValue} minLabel={taskData.questions[3].minLabel} maxLabel={taskData.questions[3].maxLabel} />
        } else if(this.state.questionNumber == 3){
            questionLayout1 = <Result />
        }

        handleClick = () => {
            this.setState({questionCount: this.state.questionCount + 1}, () => {
                console.log(this.state.questionCount)
            });
        }
*/
    render() {
        
        //LAITA QUESTIONCOUNT STATEE JA lISÄÄ AINA NOIHIN COMPONENTTEIHIN
        let questionCount = this.state.questionCount;
        let index = questionCount - 1;
        let questionLayout;

        //Tsekkaa aina mikä question countti ja laittaa sen mukaan kyssärin
        if (questionCount == 0) {
            questionLayout =                     
            <div className="questionCard">
                <QuizInfo taskName={taskData.taskName} desc={taskData.description} intro={taskData.introText} reward={taskData.reward} />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>    
            </div>

        } else if(questionCount == 1) {
            questionLayout =                     
            <div className="questionCard">
                <RadioGroup qTitle={taskData.questions[index].prompt} value1={taskData.questions[index].ansType[0]} value2={taskData.questions[index].ansType[1]} />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 2) {
            questionLayout =
            <div className="questionCard">
                <RangeSlider qTitle={taskData.questions[index].prompt}min={taskData.questions[index].minValue} max={taskData.questions[index].maxValue} minLabel={taskData.questions[index].minLabel} maxLabel={taskData.questions[index].maxLabel} />
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 3) {
            questionLayout =
            <div className="questionCard">
                <Opentext qTitle={taskData.questions[2].prompt} maxLength={taskData.questions[2].maxLen} />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 4) {
            questionLayout =
            <div className="questionCard">
                <RadioGroup qTitle={taskData.questions[3].prompt} value1="Tosi" value2="Epätosi" />,
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 5) {
            questionLayout =
            <div className="questionCard">
                <RadioGroup qTitle={taskData.questions[4].prompt} value1="Tosi" value2="Epätosi" />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>
        } // Should go to completion page after

        return(
            <div>
                {questionLayout}
            </div>
        )
    }
}

class QuizInfo extends React.Component {
    constructor(props) {
        super(props)
        this.props = {taskName: "Quiz", desc: "null", intro: "null", reward: "null"}
        }

    render() {
        return(
            <div>
                <div id="infoTitle">
                    <h1>{this.props.taskName}</h1>
                    <h2>{this.props.desc}</h2>
                </div>
                <div id="infoExtra">
                    <h3>{this.props.intro}</h3>
                    <h3>Suoritus palkinto {this.props.reward} pistettä</h3>
                </div>
            </div>
        )
    }
}

class Opentext extends React.Component {    
    constructor(props) {
    super(props)
    this.props = {maxLength: "250", qTitle: "null"}
    }

    checkProp() {
        if (this.props.maxLength == null) {
            var placeHolder = "Vastaa vapaasti:"
            return placeHolder;
        } else {
            var placeHolder = "Vastaa vapaasti: (Maksimi pituus " + this.props.maxLength + " kirjainta)"
            return placeHolder;
        }
    };
    
    render() {
        return (
            <div className="openText">
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="textArea">
                    <label>
                        <textarea placeholder={this.checkProp()} className="textBox" rows="12" maxLength={this.props.maxLength}></textarea>
                    </label>
                </div>
            </div>
        )
    }
}

class MultiChoice extends React.Component {    
    constructor(props) {
    super(props)
    this.props = {options: "3", qTitle: "null"}
    }

    optionCount() {
        var options = [];
        var values = ["random", "test", "dummy", "data", "and", "stuff"];
        for (var i = 0; i < this.props.options; i++) {
            var id = "cb" + i
            console.log(id);
            options.push(<div className="checkBoxDiv">
                            <input id={id} type='checkbox' />
                            <label for={id}>
                                <span></span>
                                {values[i]}
                                <ins><i>{values[i]}</i></ins>
                            </label>
                        </div>
                        )
        }
        return options;
    }

    render() {
        return (
            <div className="multiChoice">
                {this.optionCount()}
            </div>
        )
    }
}

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props = {qTitle: "null", value1: "null", value2: "null"}
    }

    onChange = (ev) =>{
        this.props.subscribe(ev.target.value)
    }

    render() {
        return (            
            <div>
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="radioGroup">
                    <input className="radio" onChange={this.onChange} type="radio" name="radio" value={this.props.value1} />{this.props.value1}<br/>
                    <input className="radio" onChange={this.onChange} type="radio" name="radio" value={this.props.value2} />{this.props.value2}<br/>
                </div>
            </div>
        )
    }
}

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.props = {qTitle: "null", min: "1", max: "5", minLabel: "null", maxLabel: "null"};

        this.handleChange = this.handleChange.bind(this);
        this.rangeValue = this.rangeValue.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    rangeValue() {
        console.log("range change");
        const value = document.querySelector('.rangeSlider').value;
        document.querySelector('#rangeValue').innerHTML = value;
        console.log(document.querySelector('#rangeValue').innerHTML)
        console.log(value)
    }

    render() {
        return (
            <div>
                <div className="qTitle">
                    <h2>{this.props.qTitle} ({this.props.min} - {this.props.max})</h2>
                </div>
                <div className="rangeDiv">
                    <h1 id="rangeValue">{this.props.min}</h1>
                </div>
                <div className="rangeSliderDiv">
                    <input className="rangeSlider" onInput={this.rangeValue} name="range" type="range" min={this.props.min} max={this.props.max} step="1"/>
                    <div className="numberLabel">
                        <label className="valueLabel min" >{this.props.min}</label>
                        <label className="valueLabel max" >{this.props.max}</label>
                    </div>
                </div>
                <div className="infoLabel">
                    <label className="txtLabel min">{this.props.minLabel}</label>
                    <label className="txtLabel max">{this.props.maxLabel}</label>
                </div>
            </div>
        )
    }
}