import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import Weather from "./EvE/Weather.png"
import Dashboard from "./EvE/Dashboard.png"
import Inverter from "./EvE/Inverter.png"
import Login from "./EvE/Login.png"
import Setting from "./EvE/Setting.png"
import Station from "./EvE/Station.png"
import Footer from "../Footer/ComponentFooter"
import Header from "../ComponentHeader"
import IMG_1547 from "./BGC/IMG_1547.JPG"
import IMG_1631 from "./BGC/IMG_1631.JPG"
import SS from "./BGC/SS.png"
import WHRPowerPlant from "./BGC/WHRPowerPlant.png"
import WHRPowerPlant1 from "./BGC/WHRPowerPlant1.png"

import IMG_2243 from "./TOT/IMG_2243.jpg"
import IMG_2337 from "./TOT/IMG_2337.jpg"
import IMG_2352 from "./TOT/IMG_2352.jpg"

import IconKFC from "./IconKFC.png"
import KFC1 from "./KFC1.JPG"
import KFC2 from "./KFC2.JPG"

import report1 from "./Report/O1.PNG"
import report2 from "./Report/O2.PNG"
import report3 from "./Report/3.png"
import report4 from "./Report/6.PNG"
import report5 from "./Report/O3.PNG"

import BJT1 from "./BJT/01.PNG"
import BJT2 from "./BJT/02.PNG"
import BJT3 from "./BJT/03.PNG"
import BJT4 from "./BJT/04.PNG"
import BJT5 from "./BJT/05.PNG"



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var actionUp = {
    width: '100%',
    height: '100%',
    boxShadow: "10px 10px 5px grey",
    borderStyle: "solid ",
    borderColor: "Black",
    borderWidth: "3px"
}

var actionDown = {
    width: '100%',
    height: '100%',
    borderStyle: "solid ",
    borderColor: "Black",
    borderWidth: "3px"
}

export default class ComponentEXPERIENCE extends Component {

    constructor(props) {
        super(props)

        this.state = {
            TextRessolution1: "",
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            visible8: false,
            visible9: false,
            visible10: false,
            visible11: false,
            visible12: false,
            visible13: false,
            visible14: false,
            visible15: false,
            visible16: false,
            visible17: false,
            visible18: false,
            visible19: false,
            visible20: false,
            visible21: false,
            Overview_responsive_img1: actionDown,
            Overview_responsive_img2: actionDown,
            Overview_responsive_img3: actionDown,
            Overview_responsive_img4: actionDown,
            Overview_responsive_img5: actionDown,
            Overview_responsive_img6: actionDown,
            Overview_responsive_img7: actionDown,
            Overview_responsive_img8: actionDown,
            Overview_responsive_img9: actionDown,
            Overview_responsive_img10: actionDown,
            Overview_responsive_img11: actionDown,
            Overview_responsive_img12: actionDown,
            Overview_responsive_img13: actionDown,
            Overview_responsive_img14: actionDown,
            Overview_responsive_img15: actionDown,
            Overview_responsive_img16: actionDown,
            Overview_responsive_img17: actionDown,
            Overview_responsive_img18: actionDown,
            Overview_responsive_img19: actionDown,
            Overview_responsive_img20: actionDown,
            Overview_responsive_img21: actionDown,

        }
    }

    componentDidMount() {
        this.Text()
    }

    Text() {
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

    openModal1() {
        this.setState({
            visible1: true
        });
    }

    closeModal1() {
        this.setState({
            visible1: false
        });
    }

    openModal2() {
        this.setState({
            visible2: true
        });
    }

    closeModal2() {
        this.setState({
            visible2: false
        });
    }

    openModal3() {
        this.setState({
            visible3: true
        });
    }

    closeModal3() {
        this.setState({
            visible3: false
        });
    }

    openModal4() {
        this.setState({
            visible4: true
        });
    }

    closeModal4() {
        this.setState({
            visible4: false
        });
    }

    openModal5() {
        this.setState({
            visible5: true
        });
    }

    closeModal5() {
        this.setState({
            visible5: false
        });
    }

    openModal6() {
        this.setState({
            visible6: true
        });
    }

    closeModal6() {
        this.setState({
            visible6: false
        });
    }

    openModal7() {
        this.setState({
            visible7: true
        });
    }

    closeModal7() {
        this.setState({
            visible7: false
        });
    }

    openModal8() {
        this.setState({
            visible8: true
        });
    }

    closeModal8() {
        this.setState({
            visible8: false
        });
    }

    openModal9() {
        this.setState({
            visible9: true
        });
    }

    closeModal9() {
        this.setState({
            visible9: false
        });
    }

    openModal10() {
        this.setState({
            visible10: true
        });
    }

    closeModal10() {
        this.setState({
            visible10: false
        });
    }

    openModal11() {
        this.setState({
            visible11: true
        });
    }

    closeModal11() {
        this.setState({
            visible11: false
        });
    }

    openModal12() {
        this.setState({
            visible12: true
        });
    }

    closeModal12() {
        this.setState({
            visible12: false
        });
    }

    openModal13() {
        this.setState({
            visible13: true
        });
    }

    closeModal13() {
        this.setState({
            visible13: false
        });
    }

    openModal14() {
        this.setState({
            visible14: true
        });
    }

    closeModal14() {
        this.setState({
            visible14: false
        });
    }

    openModal15() {
        this.setState({
            visible15: true
        });
    }

    closeModal15() {
        this.setState({
            visible15: false
        });
    }
    openModal16() {
        this.setState({
            visible16: true
        });
    }

    closeModal16() {
        this.setState({
            visible16: false
        });
    }
    openModal17() {
        this.setState({
            visible17: true
        });
    }

    closeModal17() {
        this.setState({
            visible17: false
        });
    }
    openModal18() {
        this.setState({
            visible18: true
        });
    }

    closeModal18() {
        this.setState({
            visible18: false
        });
    }
    openModal19() {
        this.setState({
            visible19: true
        });
    }

    closeModal19() {
        this.setState({
            visible19: false
        });
    }
    openModal20() {
        this.setState({
            visible20: true
        });
    }

    closeModal20() {
        this.setState({
            visible20: false
        });
    }
    openModal21() {
        this.setState({
            visible21: true
        });
    }

    closeModal21() {
        this.setState({
            visible21: false
        });
    }



    MoveUp(key) {

        switch (key) {

            case 1:
                this.setState({
                    Overview_responsive_img1: actionUp
                })
                break;

            case 2:
                this.setState({
                    Overview_responsive_img2: actionUp
                })
                break;

            case 3:
                this.setState({
                    Overview_responsive_img3: actionUp
                })
                break;

            case 4:
                this.setState({
                    Overview_responsive_img4: actionUp
                })
                break;

            case 5:
                this.setState({
                    Overview_responsive_img5: actionUp
                })
                break;

            case 6:
                this.setState({
                    Overview_responsive_img6: actionUp
                })
                break;

            case 7:
                this.setState({
                    Overview_responsive_img7: actionUp
                })
                break;

            case 8:
                this.setState({
                    Overview_responsive_img8: actionUp
                })
                break;

            case 9:
                this.setState({
                    Overview_responsive_img9: actionUp
                })
                break;

            case 10:
                this.setState({
                    Overview_responsive_img10: actionUp
                })
                break;

            case 11:
                this.setState({
                    Overview_responsive_img11: actionUp
                })
                break;
            case 12:
                this.setState({
                    Overview_responsive_img12: actionUp
                })
                break;
            case 13:
                this.setState({
                    Overview_responsive_img13: actionUp
                })
                break;
            case 14:
                this.setState({
                    Overview_responsive_img14: actionUp
                })
                break;
            case 15:
                this.setState({
                    Overview_responsive_img15: actionUp
                })
                break;
            case 16:
                this.setState({
                    Overview_responsive_img16: actionUp
                })
                break;

            case 17:
                this.setState({
                    Overview_responsive_img17: actionUp
                })
                break;
            case 18:
                this.setState({
                    Overview_responsive_img18: actionUp
                })
                break;
            case 19:
                this.setState({
                    Overview_responsive_img19: actionUp
                })
                break;
            case 20:
                this.setState({
                    Overview_responsive_img20: actionUp
                })
                break;
            case 21:
                this.setState({
                    Overview_responsive_img21: actionUp
                })
                break;

            default:
                break;
        }
    }

    MoveDown(key) {

        switch (key) {

            case 1:
                this.setState({
                    Overview_responsive_img1: actionDown
                })
                break;

            case 2:
                this.setState({
                    Overview_responsive_img2: actionDown
                })
                break;

            case 3:
                this.setState({
                    Overview_responsive_img3: actionDown
                })
                break;

            case 4:
                this.setState({
                    Overview_responsive_img4: actionDown
                })
                break;

            case 5:
                this.setState({
                    Overview_responsive_img5: actionDown
                })
                break;

            case 6:
                this.setState({
                    Overview_responsive_img6: actionDown
                })
                break;

            case 7:
                this.setState({
                    Overview_responsive_img7: actionDown
                })
                break;

            case 8:
                this.setState({
                    Overview_responsive_img8: actionDown
                })
                break;

            case 9:
                this.setState({
                    Overview_responsive_img9: actionDown
                })
                break;

            case 10:
                this.setState({
                    Overview_responsive_img10: actionDown
                })
                break;

            case 11:
                this.setState({
                    Overview_responsive_img11: actionDown
                })
                break;
            case 12:
                this.setState({
                    Overview_responsive_img12: actionDown
                })
                break;
            case 13:
                this.setState({
                    Overview_responsive_img13: actionDown
                })
                break;
            case 14:
                this.setState({
                    Overview_responsive_img14: actionDown
                })
                break;
            case 15:
                this.setState({
                    Overview_responsive_img15: actionDown
                })
                break;
            case 16:
                this.setState({
                    Overview_responsive_img16: actionDown
                })
                break;
            case 17:
                this.setState({
                    Overview_responsive_img17: actionDown
                })
                break;
            case 18:
                this.setState({
                    Overview_responsive_img18: actionDown
                })
                break;
            case 19:
                this.setState({
                    Overview_responsive_img19: actionDown
                })
                break;
            case 20:
                this.setState({
                    Overview_responsive_img20: actionDown
                })
                break;
            case 21:
                this.setState({
                    Overview_responsive_img21: actionDown
                })
                break;
            default:
                break;
        }

    }

    render() {

        const { TextRessolution1 } = this.state



        return (
            <div >
                <Header />
                <div className=" p-1 mt-3 rounded" style={{ backgroundColor: "#5e92ba", color: "", fontSize: TextRessolution1, paddingtop: "10px" }} >

                    <div className="container-fluid">

                        <h3><b>EXPERIENCE</b></h3>



                        <div className="container-fluid rounded my-2 p-3"
                            style={{ backgroundColor: "#d2e0e9", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <b>Full time job at INSPIRE TECH CO.,LTD  (JULY 2019 – Present)</b>


                            <div className="row">


                                <ul >

                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using Reactjs and npm (Node Package Manager) to create the front-end of the website.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>A web app to control and monitor irrigation systems.</b>
                                    </li>

                                </ul>


                                <div className="container-fluid">

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={BJT1} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(17)}
                                                        onMouseMove={() => this.MoveUp(17)}
                                                        onClick={() => this.openModal17()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img17}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible17}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal17()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={BJT1} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={BJT2} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(18)}
                                                        onMouseMove={() => this.MoveUp(18)}
                                                        onClick={() => this.openModal18()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img18}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible18}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal18()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={BJT2} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={BJT3} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(19)}
                                                        onMouseMove={() => this.MoveUp(19)}
                                                        onClick={() => this.openModal19()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img19}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible19}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal19()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={BJT3} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={BJT4} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(20)}
                                                        onMouseMove={() => this.MoveUp(20)}
                                                        onClick={() => this.openModal20()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img20}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible20}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal20()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={BJT4} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={BJT5} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(21)}
                                                        onMouseMove={() => this.MoveUp(21)}
                                                        onClick={() => this.openModal21()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img21}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible21}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal21()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={BJT5} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="row">


                                <ul >

                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using Visual Basic.net develop report by read data from PLC and SCADA software.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using WINCC software to develop SCADA for function of recipe.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b> Using TIA Portal software to develop SCADA  and HMI Interface.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b> Using Visual Basic script Connect to the SAP system.</b>
                                    </li>

                                </ul>


                                <div className="container-fluid">

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={report4} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(15)}
                                                        onMouseMove={() => this.MoveUp(15)}
                                                        onClick={() => this.openModal15()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img15}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible15}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal15()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={report4} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={report3} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(13)}
                                                        onMouseMove={() => this.MoveUp(13)}
                                                        onClick={() => this.openModal13()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img13}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible13}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal13()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={report3} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">

                                            </div>

                                        </div>



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={report2} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(14)}
                                                        onMouseMove={() => this.MoveUp(14)}
                                                        onClick={() => this.openModal14()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img14}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible14}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal14()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={report2} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={report5} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(16)}
                                                        onMouseMove={() => this.MoveUp(16)}
                                                        onClick={() => this.openModal16()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img16}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible16}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal16()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={report5} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={report1} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(12)}
                                                        onMouseMove={() => this.MoveUp(12)}
                                                        onClick={() => this.openModal12()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img12}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible12}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal12()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={report1} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <ul >

                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Create Web Monitoring  PV & CHARGING STATION.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using  Reactjs and npm (Node Package Manager) to create the front-end of the website.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using  Mysql as a database, design and manage databases with phpmyadmin.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using  Express to create and manage back-end.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Using  Node-Red to connect to devices via protocol modbus tcp / ip and OCPP to read data from devices and store data.</b>
                                    </li>
                                </ul>


                                <div className="container-fluid">



                                    <div className="row">



                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">

                                                <button className="btn btn-link" >

                                                    <img
                                                        src={Login} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(1)}
                                                        onMouseMove={() => this.MoveUp(1)}
                                                        onClick={() => this.openModal1()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img1}
                                                    />

                                                </button>

                                                <Modal
                                                    visible={this.state.visible1}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal1()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={Login} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>

                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">
                                            <div className="d-flex justify-content-center">

                                                <button className="btn btn-link" >
                                                    <img
                                                        src={Dashboard} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(2)}
                                                        onMouseMove={() => this.MoveUp(2)}
                                                        onClick={() => this.openModal2()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img2}
                                                    />
                                                </button>

                                                <Modal
                                                    visible={this.state.visible2}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal2()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={Dashboard} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={Weather} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(3)}
                                                        onMouseMove={() => this.MoveUp(3)}
                                                        onClick={() => this.openModal3()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img3}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible3}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal3()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={Weather} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={Station} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(4)}
                                                        onMouseMove={() => this.MoveUp(4)}
                                                        onClick={() => this.openModal4()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img4}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible4}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal4()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={Station} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={Inverter} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(5)}
                                                        onMouseMove={() => this.MoveUp(5)}
                                                        onClick={() => this.openModal5()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img5}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible5}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal5()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={Inverter} className="rounded" alt="" style={{ width: "100%", height: "80%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={Setting} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(6)}
                                                        onMouseMove={() => this.MoveUp(6)}
                                                        onClick={() => this.openModal6()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img6}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible6}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal6()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={Setting} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-2 d-flex justify-content-center">
                                            <button className="btn btn-warning" >
                                                <a href="http://qeve.green/" target="blank"  >
                                                    <FontAwesomeIcon className="faa-spin animated" icon="sun" hidden={TextRessolution1}
                                                        style={{ height: "30px", width: "30px", color: "" }} />

                                                    <b>LINK to qeve.green</b>

                                                    <FontAwesomeIcon className="faa-spin animated" icon="sun" hidden={TextRessolution1}
                                                        style={{ height: "30px", width: "30px", color: "" }} />
                                                </a>
                                            </button>
                                        </div> */}

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#d2e0e9", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <b>Co-Operative at INSPIRE TECH CO.,LTD  (AUG 2018 – NOV 2018)</b>
                            <div className="row">



                                <ul >

                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Learned about machine control systems and  wrote more programs about vb.net and SQL languages.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Designed SCADA for checking about operation of machine.</b>
                                    </li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}>
                                        <b>Create Monitoring Substation system & Waste-Heat-Recovery system with Wonderware indusoft web studio.</b>
                                    </li>

                                </ul>

                                <div className="container-fluid">



                                    <div className="row">


                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">

                                                <button className="btn btn-link" >
                                                    <img
                                                        src={SS} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(7)}
                                                        onMouseMove={() => this.MoveUp(7)}
                                                        onClick={() => this.openModal7()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img7}
                                                    />
                                                </button>

                                                <Modal
                                                    visible={this.state.visible7}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal7()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={SS} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>

                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={WHRPowerPlant} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(8)}
                                                        onMouseMove={() => this.MoveUp(8)}
                                                        onClick={() => this.openModal8()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img8}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible8}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal8()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={WHRPowerPlant} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>

                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-link" >
                                                    <img
                                                        src={WHRPowerPlant1} className="rounded faa-float animated-hover faa-fast"
                                                        onMouseOut={() => this.MoveDown(9)}
                                                        onMouseMove={() => this.MoveUp(9)}
                                                        onClick={() => this.openModal9()}
                                                        alt=''
                                                        style={this.state.Overview_responsive_img9}
                                                    />
                                                </button>
                                                <Modal
                                                    visible={this.state.visible9}
                                                    width="60%"
                                                    // height="40%"
                                                    effect="fadeInUp"
                                                    onClickAway={() => this.closeModal9()}
                                                    disabled="true"
                                                >
                                                    <div >

                                                        <img src={WHRPowerPlant1} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                    </div>
                                                </Modal>
                                            </div>

                                        </div>

                                        <div className="container-fluid">

                                            <div className="row d-flex justify-content-center">

                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                                    <div className="d-flex justify-content-center">
                                                        <button className="btn btn-link" >
                                                            <img
                                                                src={IMG_1547} className="rounded faa-float animated-hover faa-fast"
                                                                onMouseOut={() => this.MoveDown(10)}
                                                                onMouseMove={() => this.MoveUp(10)}
                                                                onClick={() => this.openModal10()}
                                                                alt=''
                                                                style={this.state.Overview_responsive_img10}
                                                            />
                                                        </button>
                                                        <Modal
                                                            visible={this.state.visible10}
                                                            width="60%"
                                                            // height="40%"
                                                            effect="fadeInUp"
                                                            onClickAway={() => this.closeModal10()}
                                                            disabled="true"
                                                        >
                                                            <div >

                                                                <img src={IMG_1547} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                                {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                            </div>
                                                        </Modal>
                                                    </div>

                                                </div>

                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">
                                                    <div className="d-flex justify-content-center">
                                                        <button className="btn btn-link" >
                                                            <img
                                                                src={IMG_1631} className="rounded faa-float animated-hover faa-fast"
                                                                onMouseOut={() => this.MoveDown(11)}
                                                                onMouseMove={() => this.MoveUp(11)}
                                                                onClick={() => this.openModal11()}
                                                                alt=''
                                                                style={this.state.Overview_responsive_img11}
                                                            />
                                                        </button>
                                                        <Modal
                                                            visible={this.state.visible11}
                                                            width="60%"
                                                            // height="40%"
                                                            effect="fadeInUp"
                                                            onClickAway={() => this.closeModal11()}
                                                            disabled="true"
                                                        >
                                                            <div >

                                                                <img src={IMG_1631} className="rounded" alt="" style={{ width: "100%", height: "100%" }} />

                                                                {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                                                            </div>
                                                        </Modal>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#d2e0e9", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <b>Co-Operative at TOT Public Company Limited (MAY 2014 - AUG 2014)</b>
                            <div className="row">



                                <ul >
                                    <li style={{ color: "#e65c00", fontSize: "", }}><b>Connected the communication line at the source.</b></li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}><b>Foundgood quality communication lines for use.</b></li>
                                </ul>

                                <div className="container-fluid">



                                    <div className="row">


                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={IMG_2243} className="rounded" alt='' style={{ height: "100%", width: "100%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={IMG_2337} className="rounded" alt='' style={{ height: "100%", width: "100%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                            <div className="d-flex justify-content-center">
                                                <img src={IMG_2352} className="rounded" alt='' style={{ height: "100%", width: "100%", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }} />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#d2e0e9", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                            <b>Past time job at KFC Sena-fest (JAN 2015 - JUNE 2019)</b>
                            <div className="row">



                                <ul >
                                    <li style={{ color: "#e65c00", fontSize: "", }}><b>Service work in KFC shop.</b></li>
                                    <li style={{ color: "#e65c00", fontSize: "", }}><b>Home delivery service.</b></li>
                                </ul>

                                <div className="container-fluid">

                                    <div className="row d-flex justify-content-center">

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center" >

                                            <div className="d-flex justify-content-center">
                                                <img src={KFC2} className="rounded" alt='' style={{ height: "60%", width: "60%" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center" >

                                            <div className="d-flex justify-content-center">
                                                <img src={KFC1} className="rounded" alt='' style={{ height: "100%", width: "100%" }} />
                                            </div>

                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center" >

                                            <div className="d-flex justify-content-center">
                                                <img src={IconKFC} className="rounded" alt='' style={{ height: "50%", width: "50%" }} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <Footer />
            </div >
        )
    }
}
