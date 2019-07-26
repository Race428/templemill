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



class LandingPage extends Component {




    componentDidMount() {






    }

    iframePlay = () => {


        $('#cover-image, #play-icon').fadeOut('fast')
        $('#iframe-hidden').attr('id', 'iframe-shown')




    }


    render() {


        return (

            <>

                {/* nav and video  */}


                <div id='showcase'>
                    <header className='nav-container'>
                        <Nav />
                    </header>


                    <div className='container'>
                        <h1 id='title'>Tell Your Story Through Video</h1>
                        <div className='video-container'>
                            <div className='button-video' onClick={this.iframePlay}>
                                <img id='cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=2500w' alt='pic' />
                                <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                <div id="iframe-hidden"
                                    className="iframe" >
                                    <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"
                                        width="640px"
                                        height="360px"
                                        allow='autoplay'
                                        display="initial"

                                        allowFullScreen />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div id='paragraphs'>

                    <div className='container'>

                        <div id='paragraph-container'>
                            <h1>WHY DOES VIDEO MATTER?</h1>
                            <h4>According to Forbes, 90% of customers say video helps them make buying decisions.</h4>
                            <h4>The truth is that video is rapidly growing as the best way to reach consumers online.
                            </h4>
                            <h4>People want to see what they’re buying, and they want to see in on video.
                            </h4>
                        </div>
                        <div id='paragraph-container'>
                            <h1>ARE YOU BEING PORTRAYED PROPERLY?</h1>
                            <h4><strong>We make sure your message is being captured the right way.</strong></h4>
                            <h4>Being portrayed properly allows you to connect with your audience in the best way possible.
                            </h4>
                        </div>
                        <div id='paragraph-container'>
                            <h1>WHAT’S YOUR FIRST IMPRESSION GOING TO BE?</h1>
                            <h4>We’ve all heard it before. You only get one first impression.
                            </h4>
                            <h4>Most practice this in their personal lives, few practice in their business.
                            </h4>
                            <h4>Long story short, the videos you put out are a reflection of your business.
                            </h4>
                            <h4>• • •</h4>
                        </div>
                        <div id='paragraph-container'>
                            <p>WHAT ARE YOU VIDEOS SAYING ABOUT YOU?</p>

                        </div>

                    </div>
                </div>


                <div id='horizontal-line'></div>

            </>









            // <div className='screenView' id='landingPageView'>



            // <section className='landing-view'>

            //     <div className='video-container'>
            //         <div className='button-video' onClick={this.iframePlay}>
            //             <img id='cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=2500w' alt='pic' />
            //             <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
            //             <div id="iframe-hidden"
            //                 className="iframe" >
            //                 <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"
            //                     width="640px"
            //                     height="360px"
            //                     allow='autoplay'
            //                     display="initial"
            //                     // position="absolute"
            //                     allowFullScreen />
            //             </div>
            //         </div>

            //     </div>


            // //     <section className='section'>


            // //         <div className='titles'>

            // //         </div>



            // //     </section>


            // // </section>


            // </div>

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
