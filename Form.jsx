import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()
  }

  state = {
    userName: "",
    Email: "",
    PhNumber: "",
    userNameErr: "",
    EmailErr: "",
    PhNumberErr: "",

  }


  inputHandler = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }


  sumbitHandler = (event) => {
    event.preventDefault()

    if (this.state.userName.length < 3) {
      this.setState({userNameErr : "Name is Invalid"})
    }
    else{
       this.setState({userNameErr : ""})
    }

    if (!this.state.Email.includes("@")) {
      this.setState({EmailErr : "E-mail is Invalid"})
    }
    else{
      this.setState({EmailErr : ""})
    }
    if (this.state.PhNumber.length != 10) {
      this.setState({PhNumberErr : "PhNumber is Invalid"})
    }
    else{
      this.setState({PhNumberErr : ""})
    }
  }


  render() {
    return (
      <center>
        <form onSubmit={this.sumbitHandler}>
          <div>
            <h1 style={{ textAlign: 'center' }}>PersonDetails</h1><br /><br />
            <label> UserName</label>

            <input
              type="text"
              name='userName'
              value={
                this.state.userName.length > 3
                  ? this.state.userName.replace(/✅/g, "").replace(/\s/g, "").trim() + " ✅"
                  : this.state.userName.replace(/✅/g, "").replace(/\s/g, "").trim()
              }
              onChange={this.inputHandler}
              style={{ position: 'relative', left: "22px" }} />
            {this.state.userNameErr && <p style={{ color: "red" }}>{this.state.userNameErr}</p>}<br /><br />
          </div>

          <div>
            <label> Email</label>
            <input
              type="text"
              name='Email'
              value={
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(this.state.Email)
                  ? this.state.Email.replace(/✅/g, "").trim() +"✅".trim()
                  : this.state.Email.replace(/✅/g, "").trim()
              }

              onChange={this.inputHandler}
              style={{ position: 'relative', left: "40px" }}
            />
            {this.state.EmailErr && <p style={{ color: "red" }}>{this.state.EmailErr}</p>}
            <br /><br />
          </div>

          <div>
            <label> PhNumber</label>
            <input
              type="tel"
              name='PhNumber'
              value={
                /^\d{10}$/.test(this.state.PhNumber)
                  ? this.state.PhNumber.replace(/✅/g, "").trim() + " ✅"
                  : this.state.PhNumber.replace(/✅/g, "").trim()
              }
              onChange={this.inputHandler}
              style={{ position: 'relative', left: "20px" }}
            />
            {this.state.PhNumberErr && <p style={{ color: "red" }}>{this.state.PhNumberErr}</p>}
          </div>
          <br /><br />

          <button type='submit'>Sumbit</button>
        </form>
      </center>
    )
  }
}

export default Form












// inputNameHandler = (event) => {
//   this.setState({
//     userName: event.target.value
//   })
// }
// inputEmailHandler = (event) => {
//   this.setState({
//     Email: event.target.value
//   })
// }
// inputNumHandler = (event) => {
//   this.setState({
//     PhNumber: event.target.value
//   })
// }