import React, { Component } from 'react'
import Cookies from "universal-cookie";
import { Redirect } from 'react-router-dom'
var passwordHash = require('password-hash');
//var hashedPassword = passwordHash.generate('password123');
var hashedPassword = 'sha1$8f5960ae$1$0b45851745f22203da6412b569305720c69c3738'
var pass 

const cookies = new Cookies();

export default class ComponentLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      UserName: "",
      Password: "",
      Cookies: "",
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {

    this.setState({ Cookies: cookies.get('cookies') })

    if (this.state.Cookies !== "") {
      cookies.remove("cookies", { path: '/' });
    }
    //console.log(this.state.Cookies)
  }



  handleSubmit(e) {
    e.preventDefault();


    if ((this.state.UserName !== "") && (this.state.Password !== "")) {

      this.setState({ Cookies: cookies.get('cookies') })

      pass = this.state.Password
      if ((this.state.UserName === "Trairat" || this.state.UserName === "trairat") && (passwordHash.verify(pass, hashedPassword) === true)) {

        cookies.set("cookies", this.state.UserName, { path: "/" });
        this.setState({
          redirect: true
        })
        /* window.location.replace("/ComponentOverview") */

      } else {

        alert("Username or Password is Incorrect")
        this.setState({
          UserName: "",
          Password: ""
        })

      }

    } else {
      alert("Incomplete information.")
    }

  }


  render() {

    const { redirect } = this.state;



    if (redirect === true) {
      return <Redirect to='/ComponentOverview' />;
    }

    return (

      <div >

        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 " >

              <div className="container-fluid rounded " style={{ backgroundColor: "#66ff99" }}>

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group ">
                    <label>Username</label>
                    <div className="">
                      <input
                        onChange={(e) => {
                          this.setState({ UserName: e.target.value })
                        }}
                        value={this.state.UserName}
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Username"
                      />

                    </div>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div className="">
                      <input
                        onChange={(e) => {
                          this.setState({ Password: e.target.value })
                        }}
                        value={this.state.Password}
                        type="Password"
                        class="form-control"
                        id=""
                        placeholder="Password"
                      />

                    </div>
                  </div>

                  <button type="submit" className="my-5 btn-lg btn-primary" style={{ height: "100%", width: "100%" }}>
                    <div>LOGIN</div>
                  </button>



                </form>
              </div>
            </div>

          </div>
        </div>
      </div >
    )
  }
}
