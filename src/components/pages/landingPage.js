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


                <div id='clients'>

                    <div id='paragraph-container'>
                        <p>A Few Words From Our Clients.</p>
                    </div>
                    <div id='client-container'>
                        <div className='client-image-container'>
                            <img id='client-image' src="https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/t/5baa6ae024a69467b83dd749/1537914401823/IMG_9196.jpg?" alt='victoria-justice' />
                        </div>
                        <div id='client-image-text-container'>

                            <div id='client-text'>
                                <h2>“I loved working with the guys at Templemill. They have great energy and they made me feel really comfortable. We got great shots and I look forward to working with them again.”</h2>
                                <br />
                                <h2>-Victoria Justice</h2>
                                <br />
                                <h2>For True Religion</h2>

                            </div>

                        </div>
                    </div>
                    <div id='client-container'>
                        <div className='client-image-container'>
                            <img id='client-image' src="https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/t/5baa707953450a8566cf9669/1537914480982/IMG_9198.jpg?
                            
" alt='Maddy Grace' />
                        </div>
                        <div id='client-image-text-container'>

                            <div id='client-text'>
                                <h2>“Every time I shoot with Templemill Productions, it’s so fun and stress free. They know what they’re good at and they nail it every time. Love working with the guys over there and can’t wait for more shoots in the future!”</h2>
                                <br />
                                <h2>--Maddy Grace</h2>
                                <br />
                                <h2>For Revolve Magazine</h2>

                            </div>

                        </div>
                    </div>
                    <div id='client-container'>
                        <div className='client-image-container'>
                            <img id='client-image' src="https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/t/5baa6e894785d3a28629acfe/1537914571157/DSC05339+2.jpg?format=1000w
                            
" alt='Maddy Grace' />
                        </div>
                        <div id='client-image-text-container'>

                            <div id='client-text'>
                                <h2>“Templemill Productions has been by far the best video production company I’ve ever hired. They’re fast, reliable and can tell stories better than anyone I know.”</h2>
                                <br />
                                <h2>-Ulyses Osuna</h2>
                                <br />
                                <h2>CEO of Influencer Press</h2>

                            </div>

                        </div>
                    </div>
                    <div id='client-container'>
                        <div className='client-image-container'>
                            <img id='client-image' src="https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/t/5bbe77544785d3666838c8f2/1539209147909/scott.jpeg?format=1000w
                            
" alt='Maddy Grace' />
                        </div>
                        <div id='client-image-text-container'>

                            <div id='client-text'>
                                <h2>“I have been a Celebrity Chef for five years. I've worked with some of the greatest talent on the planet, but the guys at Templemill are at the top of my list! They are young, passionate about what they are doing, talented, energetic, and have mad skills. It is my honor to recommend them to any and all brands, large or small."

</h2>
                                <br />
                                <h2>-Chef Bryan-David Scott</h2>
                                <br />
                                <h2>Celebrity Chef</h2>



                            </div>

                        </div>
                    </div>
                    <div id='horizontal-line'></div>

                   <div id='bottom-text'>
                    <h2>An Eye For Originality</h2>
                    <br/>
                    <p>As a team of creatives, we are dedicated to displaying the excellence in our clients through video and distribution. While the majority of our work falls under the umbrella of lifestyle brands, thought leaders and startups, our services are applicable to any industry. Our team has shot in nearly all environments from sandy beaches to the tops of skyscrapers.</p>
                    
                    <div id='lets-work-button'>
                        Let's Work
                    </div>
                    </div>




                </div>
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
