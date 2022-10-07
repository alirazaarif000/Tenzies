import React,{useState, useEffect} from "react";
import Die from "./components/die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
export default function App(){

    const [diceFunc, setDiceFunc]= useState(allNewDice())
    const [tenzies, setTenzies] =useState(false)
    const [countRoll, setCountRoll]= useState(0)
    
    useEffect(()=>{
        const allHeld= diceFunc.every(die=> die.isHeld)
        const firstValue= diceFunc[0].value
        const allSameValue= diceFunc.every(die=> firstValue===die.value)
        if(allHeld && allSameValue){
            setTenzies(true)
        }    
    }, [diceFunc])
    function generateDice(){
        return {
            value:Math.ceil(Math.random() * 6), 
            isHeld:false,
            id:nanoid()
    }
    }
    function allNewDice(){
        let newDice= []
        for(let i=0; i<10; i++){
            newDice.push(generateDice())
        }

        return newDice
    }
    function diceRoll(){
        setDiceFunc(prevDiceFunc=>prevDiceFunc.map(dice=>{
           return dice.isHeld ? dice : generateDice()
        }))
        setCountRoll(countRoll+1
        )
    }
    function newDiceRoll(){
        setTenzies(false)
        setDiceFunc(allNewDice)
        setCountRoll(0)
    }
    function holdDice(id){
        setDiceFunc(prevDiceFunc=> prevDiceFunc.map(die=>{
            return die.id===id ? {...die, isHeld: !die.isHeld} : die
        })
        )
    }
    
    const diceElement= diceFunc.map(die=> <Die 
        value= {die.value} 
        isHeld={die.isHeld}
        key = {die.id}
        holdDice= {()=>holdDice(die.id)}
        />)
    
    
    return(
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {diceElement}
            </div>
            <button className="btn-roll" onClick={tenzies ? newDiceRoll : diceRoll}>{tenzies? "New Game" : "Roll"}</button>
            <h3>Total Rolls: {countRoll}</h3>
            {tenzies && <Confetti />}
        </main>
    )
}