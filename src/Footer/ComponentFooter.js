import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ComponentFooter extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid rounded my-2 p-3" style={{ backgroundColor: "#80b3ff", borderStyle: "solid ", borderColor: "Black", borderWidth: "3px" }}>
                    <div class="row">

                        <div class="container-fluid">
                            <div className="">
                                <h4><b>CONTACT</b></h4>
                            </div>
                            <div class="row">

                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 ">

                                    <div className="d-flex justify-content-center">
                                        <FontAwesomeIcon className="" icon="mobile" style={{ height: "60px", width: "60px", color: "blue" }} />

                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h5><b>PHONE: 086-549-2804</b></h5>
                                    </div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 align-self-center">

                                    <div className="d-flex justify-content-center ">
                                         <FontAwesomeIcon className="" icon="users" style={{ height: "60px", width: "60px", color: "blue" }} />    
                                        
                                        
                                                                      
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h5><b>FB: <a href='https://www.facebook.com/kok.chikago.5' target="_blank">facebook</a></b></h5>
                                        
                                    </div>

                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2">

                                    <div className="d-flex justify-content-center">

                                        <FontAwesomeIcon className="" icon="comments" style={{ height: "60px", width: "60px", color: "blue" }} />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h5><b>LINE ID: 0897927930</b></h5>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}