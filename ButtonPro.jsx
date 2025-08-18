import React, { Component } from 'react'

export class ButtonPro extends Component {
    constructor() {
        super()
    }

    state = {
        bgcolor: "red"
    }

    displayMessage = () => {
        this.setState((prevState) => ({
            bgcolor: prevState.bgcolor === "red"
                ? "blue"
                : "red"
        }))
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px",backgroundColor: this.state.bgcolor, padding: "20px"}}>
                <button onClick={this.displayMessage}> ChangeColor</button>
            </div>
        )
    }
}

export default ButtonPro



