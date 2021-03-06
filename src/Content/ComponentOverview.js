import React, { Component } from 'react'
import Header from "../ComponentHeader"
import Footer from "../Footer/ComponentFooter"
import "../font-awesome-animation.min.css"

import INTRODUSEMYSELF from "./ComponentINTRODUSE_MYSELF"
import EDUCATION from "./ComponentEDUCATION"
// import SKILL from "./ComponentSKILL"
// import EXPERIENCE from "./ComponentEXPERIENCE"
// import PORTFOLIO from "./ComponentPORTFOLIO"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faGamepad,
    faFutbol,
    faTableTennis,
    faGlassCheers,
    faSolarPanel,
    faSun,
    faMobile,
    faComments,
    faUsers,
    faDoorOpen,
    faEnvelope,
    faStar,
    faFilePdf,
    faGraduationCap,
    faFileWord,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(fab,
    faGamepad,
    faFutbol,
    faTableTennis,
    faGlassCheers,
    faSolarPanel,
    faSun,
    faMobile,
    faComments,
    faUsers,
    faDoorOpen,
    faEnvelope,
    faStar,
    faFilePdf,
    faGraduationCap,
    faFileWord,
    faTachometerAlt
)


export default class ComponentIntroduceMyself extends Component {


    render() {

        return (
            <div>
                <Header />

                {/* <div className="container-fluid mb-3" > */}

                    <INTRODUSEMYSELF />
                    <EDUCATION />
                    {/* <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"  >

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"  >
                            <SKILL />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <EXPERIENCE />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <PORTFOLIO />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                            <Footer />
                        </div>
                    </div> */}
                    <Footer />
                {/* </div> */}

            </div>


        )
    }
}
