/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';

import Nav from '../pageComponents/nav'
import { updatePodcasts } from '../../Redux/Reducer'
import '../../css/styles.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class LandingPage extends Component {




    componentDidMount() {

    }


  



    
    render() {


        return (
           <div className='screenView' id='landingPageView'>
               <Nav /> 

<h1 id='title'>Tell Your Story Through Video</h1>

               {/* going to do jquery to have the bkacground image and iframe fade in and out  */}
           </div>

        )
    }

}



const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    updatePodcasts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage))
