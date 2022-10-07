import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }
    function dot() {
        if (props.value === 1) {
            return (
                <div className="die" style={styles} onClick={props.holdDice}>
                    <div className="die-dots">
                        <span className="dot1"></span>
                    </div>
                </div>)
        }
        else if (props.value === 2) {
            return (
                <div className="die" style={styles} onClick={props.holdDice}>
                    <div className="die-dots">
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                    </div>
                </div>)
        }
        else if (props.value === 3) {
            return (
                <div className="die" style={styles} onClick={props.holdDice}>
                    <div className="die-dots">
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                    </div>
                </div>)
        }
        else if (props.value === 4) {
            return (
                <div className="die" style={styles} onClick={props.holdDice}>
                    <div className="die-dots">
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                    </div>
                </div>)
        }
        else if (props.value === 5) {
            return (
                <div className="die" style={styles} onClick={props.holdDice}>
                    <div className="die-dots">
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                    </div>
                </div>)
        }
        else if (props.value === 6) {
            return (
                <div className="die" style={styles} onClick={props.holdDice}>
                    <div className="die-dots">
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                        <span className="dot1"></span>
                    </div>
                </div>)
        }
    }
    return (
        dot()
    
    )
}