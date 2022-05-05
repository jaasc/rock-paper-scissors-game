import React from 'react'
import paper from './images/icon-paper.svg'
import rock from './images/icon-rock.svg'
import scissors from './images/icon-scissors.svg'

export default function Pick(props){
    const icon = props.picked === "paper"? paper : props.picked === "rock"? rock : 
        props.picked === "scissors"? scissors : ""
    
    const iconComp = props.comPick === "paper"? paper : props.comPick === "rock"? rock : 
        props.comPick === "scissors"? scissors : ""

    const playStat = ((props.picked === "paper" && props.comPick === "rock" ) || (props.picked === "scissors" && props.comPick === "paper") ||
        (props.picked === "rock" && props.comPick === "scissors")) ? "YOU WIN" : props.picked === props.comPick ? "TIE" : "YOU LOSE"

    return (
        <div className="pick-Container">
            <div className="choice">
                <h3>YOU PICKED</h3>
                <div className={`${props.picked}-choice${playStat === "YOU WIN" ? " winner" : ""}`}>
                    <div className="iconBg-choice">
                    <img className="pick-choice" src={icon} alt={props.picked}/>
                    </div>
                </div>
            </div>
            <div className="playAgain">
                <h1 className="status">{playStat}</h1>
                <button onClick={props.handleClick}>PLAY AGAIN</button>
            </div>
            <div className="choice">
                <h3>THE HOUSE PICKED</h3>
                <div className={`${props.comPick}-choice${playStat === "YOU LOSE" ? " win" : ""} house-pick`}>
                    <div className="iconBg-choice">
                    <img className="pick-choice" src={iconComp} alt={props.comPick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}