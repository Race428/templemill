/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';

import Nav from '../pageComponents/nav'
import { updatePodcasts } from '../../Redux/Reducer'
import '../../css/styles.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'




class Work extends Component {




    componentDidMount() {






    }



    render() {


        return (

            <>
            <div id='showcase'>
                    <header className='nav-container'>
                        <Nav props={this.props}/>
                    </header>

                    <div id='work'>
                        <h2> A blast from the past to inspire the now.</h2>
                    </div>

                    </div>

            </>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Work))
