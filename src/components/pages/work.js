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

    constructor() {
        super()

        this.state = {
            url: ""
        }
    }


    componentDidMount() {






    }





    iframePlay = async (video) => {



        var albumUrl = ['https://player.vimeo.com/video/289365772?app_id=122963&wmode=opaque&autoplay=1', 'https://player.vimeo.com/video/289365339?app_id=122963&wmode=opaque&autoplay=1', 'https://player.vimeo.com/video/291756216?app_id=122963&wmode=opaque&autoplay=1', 'https://player.vimeo.com/video/291759838?app_id=122963&wmode=opaque&autoplay=1']



        await this.setState({
            url: albumUrl[video]
        })

        $('#album-iframe-container-hidden').attr('id', 'album-iframe-container-shown')
$('button-iframe').fadeIn('fast')

        // var iframeUrl = ['hi', '34']



    }

    iframeExit = async () => {

        await this.setState({
            url: ''
        })
        $('#album-iframe-container-shown').attr('id', 'album-iframe-container-hidden')

       
      
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

                            <div className='album-photo-cover-button-container' id='album-video-1'>

                                <div className='album-button-video' onClick={() => this.iframePlay(0)}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5b983175562fa7cc6713eb6b/1537900582714/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >

                                    </div>


                                </div>
                                <p id='album-title'>Ulyses Osuna On Personal Brandings</p>

                            </div>

                            <div className='album-photo-cover-button-container' id='album-video-2'>

                                <div className='album-button-video' onClick={() => this.iframePlay(1)}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5b9831a640ec9a22e63fcb09/1537900386706/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >

                                    </div>


                                </div>
                                <p id='album-title'>The Mercedes-Benz G-Class G 500 4x4² | Platinum Motors</p>
                            </div>

                            <div className='album-photo-cover-button-container' id='album-video-3'>

                                <div className='album-button-video' onClick={() => this.iframePlay(2)}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5baa734b1905f4ea7000fb62/1537900299422/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />
                                    <div id="album-iframe-hidden"
                                        className="album-iframe" >

                                    </div>


                                </div>
                                <p id='album-title'>Chef Bryan David Scott - NYC Tour</p>
                            </div>


                            <div className='album-photo-cover-button-container' id='album-video-4'>

                                <div className='album-button-video' onClick={() => this.iframePlay(3)}>
                                    <img id='album-cover-image' src='https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5b9830dc4fa51ac1f46d133d/5baa770cec212dabb7c2059c/1537900320472/?format=500w' alt='pic' />
                                    <img id='play-icon' src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f7.png' alt='play-icon' />



                                </div>
                                <p id='album-title'>Ulyses Osuna Good Morning La La Land</p>
                            </div>







                        </div>


                        <div id='horizontal-line-2'></div>
                        <div id='lets-work-button'>
                        Let's Work
                    </div>
               

                    </div>

                    {/* <div id="album-iframe-hidden"
                        className="album-iframe" >


                        <Iframe url="https://player.vimeo.com/video/289365725?autoplay=1&loop=1&autopause=0"

                            allow='autoplay'
                            display="initial"

                            allowFullScreen />
                    </div> */}
                    <div id='album-iframe-container-hidden'>
                        <div id='button-iframe'>
                            <div onClick={this.iframeExit} id='x-button'>X</div>
                            <iframe id='album-iframe' mozallowfullscreen="" allowfullscreen="" src={this.state.url} webkitallowfullscreen="" frameborder="0" title="Templemill Productions-Video" >

                            </iframe>

                        </div>


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
