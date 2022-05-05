import React from 'react'
import paper from './images/icon-paper.svg'
import rock from './images/icon-rock.svg'
import scissors from './images/icon-scissors.svg'

export default function Play(props){
    return(
        <div className="playItems">
            <div className="playIcons">
            <div className="paper" id="paper"
                onClick={() => props.handleClick("paper")}>
                <div className="iconBg">
                    <img src={paper} alt="paper"/>
                </div>
            </div>
            <div className="rock"
                onClick={() => props.handleClick("rock")}>
                <div className="iconBg">
                    <img src={rock} alt="rock"/>
                </div>
            </div>
            <div className="scissors"
                onClick={() => props.handleClick("scissors")}>
                <div className="iconBg">
                <img src={scissors} alt="scissors"/>
                </div>
            </div>
            </div>
        </div>
    )
}