import React, { Component } from 'react'
import Footer from "../Footer/ComponentFooter"
import { Link } from 'react-router-dom'
import IMG_2818 from "./Audio/IMG_2818.jpg"
import IMG_2819 from "./Audio/IMG_2819.jpg"
import Fixit2 from "./Fixit/Fixit2.JPG"
import Fixit3 from "./Fixit/Fixit3.JPG"
import Fixit4 from "./Fixit/Fixit4.JPG"
/* import Pdf from '../DocFinalprojeect/Finalproject.pdf' */

import imgVolunteer1 from "./Volunteer/img1.JPG"
import imgVolunteer4 from "./Volunteer/img4.JPG"

import Header from "../ComponentHeader"
import imgFp1 from "./Finalproject/imgFp1.jpg"
import imgFp2 from "./Finalproject/imgFp2.jpg"
import VideoFp1 from "./Finalproject/VideoFp1.mp4"

export default class ComponentPORTFOLIO extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){
   
            setInterval(() => {
    
                if (window.screen.availWidth < 576) {
                    this.setState({
                        TextRessolution1: "12px"
                    })
                } else {
                    this.setState({
                        TextRessolution1: "16px",
                    })
    
                }
    
            }, 1000);
      
    }
    render() {
        const { TextRessolution1 } = this.state
        return (
            <div>
                <Header />
                <div className=" p-1 mt-3  rounded" style={{ backgroundColor: "#ffc34d", color: "", fontSize: TextRessolution1, padding: "" }} >

                    <div className="container-fluid">
                        <h3><b>PORTFOLIO</b></h3>

                        <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#ffefa1", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <div className="row">
                                <ul>
                                    <li><b>Final project at university is Semi - Automatic Raw Materials Mixer Machine</b></li>
                                </ul>
                                <div className="container-fluid">
                                    {/* <div className="d-flex justify-content-center my-2">
                                                    <Link to={Pdf} target="blank" download><button className="btn btn-success" >Download DOCUMENTS</button></Link>
                                                </div> */}
                                    <div className="d-flex justify-content-center">
                                        <Link to='/Doc'><button className="btn btn-success faa-vertical animated">LINK TO DOCUMENTS </button></Link>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 ">

                                            <div className="d-flex justify-content-center">
                                                <img src={imgFp1} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                            <div className="d-flex justify-content-center ">

                                                <video src={VideoFp1} width="100%" height="100%" controls preload="auto" />

                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={imgFp2} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#ffefa1", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <div className="row">
                                <ul>
                                    <li><b>Volunteer</b></li>
                                </ul>
                                <div className="container-fluid">

                                    <div className="row">

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                            <div className="d-flex justify-content-center">
                                                <img src={Fixit2} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={Fixit4} className="rounded" alt='' style={{ height: "50%", width: "50%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                            <div className="d-flex justify-content-center">
                                                <img src={Fixit3} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 ">

                                            <div className="d-flex justify-content-center">
                                                <img src={imgVolunteer1} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                            <div className="d-flex justify-content-center ">

                                                <a target="blank" href="https://www.youtube.com/watch?v=eBMgtnE_wLU&fbclid=IwAR0AvGJ39c9Bof5AOntUpB8PQG1IeF-gDarCmdSVek1PyAQ8TU9lzbGiQBQ">
                                                    <button className="btn btn-success faa-vertical animated" >LINK To www.youtube.com</button>
                                                </a>

                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={imgVolunteer4} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                    </div>

                                </div>



                            </div>
                        </div>

                        <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#ffefa1", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <div className="row">
                                <ul>
                                    <li><b>Audio Equipment Competition</b></li>
                                </ul>

                                <div className="container-fluid">

                                    <div className="row">

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2 align-self-center" >

                                            <div className="d-flex justify-content-center">
                                                <img src={IMG_2818} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={IMG_2819} className="rounded" alt='' style={{ height: "70%", width: "70%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
