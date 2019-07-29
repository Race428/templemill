/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';

import Nav from '../pageComponents/nav'
import { updatePodcasts } from '../../Redux/Reducer'
import '../../css/styles.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import Iframe from 'react-iframe'





class Work extends Component {




    componentDidMount() {






    }



    iframePlay = () => {


        $('#album-cover-image, #play-icon').fadeOut('fast')
        $('#iframe-hidden').attr('id', 'iframe-shown')




    }

    render() {


        return (

            <>
                <div id='showcase'>
                    <header className='nav-container'>
                        <Nav props={this.props} />
                    </header>

                    <div id='work'>
                        <h2> A blast from the past to inspire the now.</h2>


                        {/* album   */}

                        <div id='video-album'>

                            <div id='album-photo-cover-button-container'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=2500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                            </div>

                            <div id='album-photo-cover-button-container'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=2500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                            </div>

                            <div id='album-photo-cover-button-container'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=2500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                            </div>


                            <div id='album-photo-cover-button-container'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=2500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                            </div>







                        </div>


                        <div id='horizontal-line-2'></div>


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
