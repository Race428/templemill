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




class About extends Component {

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
                    <div id='about-text'>


                        <h1>How It Started.</h1>

                        <h2>It all began very organically. Our Founders both dropped out of college and moved to the New York City area to work with a successful Entrepreneur named Gerard Adams.

</h2>
                        <br />
                        <h2>Essentially, Truman and Michael were Gerard’s personal videographers for over a year. They were almost always on call to take a photo, record a video or make a post for social media.

</h2>
                        <br />

                        <h2>The goal with all of this was to grow Gerard’s online presence using content marketing so he could bring more attention to his latest company, Fownders. Fownders was a social impact accelerator located in Newark, NJ that helped aspiring entrepreneurs learn the skills that need in order to reach their goals and create impactful companies.

</h2>
                        <br />

                        <h2>Since Truman and Michael started traveling all across the country working with some of the biggest influencers and celebrities in the space, they began to develop their own credibility. With the new credibility in their craft, individuals and brands began seeking their skills to help them grow their online presence as well.

</h2>
                        <br />

                        <h2>Truman and Michael began to think how they could best serve the needs of all of these new prospects. They realized they needed to come together and make this bigger than themselves individually.

</h2>
                        <br />

                        <h2>In early 2018, Templemill was created.

</h2>


                        <div id='mikey-truman'>

                            <div id='mikey'>

                                <img className='about-image' id='mikey-image' src='https://s3-us-west-1.amazonaws.com/achesonco/mikey.jpg' alt='mikey' />

                                <div className='about-founder-text'>
                                    <h1>
                                        Michael Richardson, Co-Founder
</h1>
                                    <h2>
                                        Michael Richardson originally found his love for media at a young age making videos skiing in the mountains of Utah and photographing portraits of his friends and family members.


                                    </h2>
                                    <br />
                                    <h2>At 12 years old, Michael made his first documentary on the dangers of drug abuse and presented it to an auditorium full of middle schoolers (Little did he know that he would be able to share those passions and ambition to create a change with a much broader audience).
</h2>
                                    <br />
                                    <h2>Years down the line after graduating from Utah Valley University, he moved to Newark, New Jersey to pursue an opportunity working with entrepreneur Gerard Adams and his social impact company “Fownders” teaching entrepreneurship to inner city youth. During this time Michael began working on the series Leaders Create Leaders (along with Templemill co-founder Truman Mylin and Digital Jeff) showcasing modern day leaders and accumulating over 10 million views.

</h2>
                                    <br />
                                    <h2>After working on 3 season of Leaders Create Leaders, and having the show picked up by Entrepreneur Network, Michael and Truman were ready for the next step in their career and decided to partner up and begin Templemill Productions.

</h2>

                                </div>
                            </div>


                            <div id='truman'>
                                <img className='about-image'  id='truman-image' src='https://s3-us-west-1.amazonaws.com/achesonco/truman.jpg' alt='truman' />

                                <div className='about-founder-text'>
                                    <h1>Truman Mylin, Co-Founder

</h1>
                                    <h2 id='about-h2'>Truman found a love of videography from a young age and began uploading content to YouTube in 2008. He received millions of views and started to realize the true power of video content.

</h2>
                                    <br />
                                    <h2  id='about-h2'>Truman moved to the greater New York City area to work under the wing of Gerard Adams and began growing his online influence using video, photo and social media.

</h2>
                                    <br />

                                    <h2 id='about-h2' >Since then, Truman has worked with some the world’s biggest brands, celebrities and influencers to grow their online presence.

</h2>
                                    <br />

                                    <h2 id='about-h2'>Along with Michael Richardson, Truman founded Templemill Productions at the start of 2018 to bring their expertise to even more businesses.

</h2>



                                </div>

                            </div>




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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(About))
