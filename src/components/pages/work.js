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

constructor(){
    super()

    this.state={
        url:''
    }
}


    componentDidMount() {






    }





    iframePlay = () => {

        var iframeUrl = ['hi','34']

        $('div').on('click',function(){
            console.log(
            $().html()
            )
        })





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

                            <div className='album-photo-cover-button-container'id='album-video-1'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5b983175562fa7cc6713eb6b/1537900582714/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                                <p id='album-title'>Ulyses Osuna On Personal Brandings</p> 

                            </div>

                            <div className='album-photo-cover-button-container'id='album-video-2'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5b9831a640ec9a22e63fcb09/1537900386706/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                                <p id='album-title'>The Mercedes-Benz G-Class G 500 4x4² | Platinum Motors</p> 
                            </div>

                            <div className='album-photo-cover-button-container'id='album-video-3'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5baa734b1905f4ea7000fb62/1537900299422/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                                <p id='album-title'>Chef Bryan David Scott - NYC Tour</p> 
                            </div>


                            <div className='album-photo-cover-button-container'id='album-video-4'>

                                <div className='album-button-video' onClick={this.iframePlay}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5baa770cec212dabb7c2059c/1537900320472/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >
                                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                                            allow='autoplay'
                                            display="initial"

                                            allowFullScreen />
                                    </div>


                                </div>
                                <p id='album-title'>Ulyses Osuna Good Morning La La Land</p> 
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
