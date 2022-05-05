import React, { useEffect, useState } from 'react'
import Pick from './Pick'
import Play from './Play'
import rulesImg from './images/image-rules.svg'

function App() {
  const [play, setPlay] = useState(false)
  const [pick, setPick] = useState("")
  const [rules, setRules] = useState(false)
  const game = ["paper", "rock", "scissors"]
  const [comp, setComp] = useState("")
  const [score, setScore] = useState(0)

  function playGame(choice){
    setPlay(!play)
    setPick(choice)
    setComp(game[Math.floor(Math.random() * 3)])
  }

  useEffect(() => {
    const isWinner = ((pick === "paper" && comp === "rock") || (pick === "scissors" && comp === "paper") ||
      (pick === "rock" && comp === "scissors")) ? "win" : pick === comp ? "tie" : "lose"
    pick && comp && setScore(prevScore => isWinner === "win" ? prevScore + 1 : prevScore)
  }, [pick, comp])

  function playAgain(){
    setPlay(!play)
  }

  function toggleRules(){
    setRules(!rules)
  }

  return (
    <div className="playContainer">
      <div className="playHeading">
        <div className="playTitle">
          <h2 className="title-rock">ROCK</h2>
          <h2 className="title-paper">PAPER</h2>
          <h2 className="title-scissors">SCISSORS</h2>
        </div>
        <div className="playScore">
          <h5>SCORE</h5>
          <h1>{score}</h1>
        </div>
      </div>
      {play? <Pick picked={pick} handleClick={playAgain} comPick={comp}/> : <Play handleClick={playGame}/>}
      <button className="rulesBtn" onClick={toggleRules}>RULES</button>
      <div className={`rulesContainer${rules? "-active": ""}`}>
        <div className="ruleTitle">
          <h3>RULES</h3>
          <button className="closeBtn" onClick={toggleRules}></button>
        </div>
        <img className="imgRule" src={rulesImg} alt="rules"></img>
      </div>
    </div>
  )
}

export default App;
