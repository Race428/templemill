import React, { Component } from 'react'
import axios from 'axios'




export default class adminLandingPage extends Component {

    constructor() {
        super()

        this.state = {
            podcastToggle: false,
            blogToggle: false,
            title: '',
            description: '',
            content: '',
            url: '',
            date: '',
            clients: []
        }
    }


    componentDidMount() {


        axios.get('/api/podcasts/getall').then((res => {
            this.setState({
                clients: res.data
            })
        }))


    }




    buttonToggle = (name, value) => {
        this.setState({ [name]: value })
    }


    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }



    // podcastUpload = () => {
    //     this.setState({
    //         podcastToggle: !this.state.podcastToggle
    //     })
    //     axios.post('/api/podcasts/upload', {
    //         title: this.state.title,
    //         description: this.state.description,
    //         content: this.state.content,
    //         url: this.state.url,
    //         date: this.state.date

    //     }).then(res => {
    //         console.log('went through', res)
    //     })
    //     this.setState({
    //         title: '',
    //         description: '',
    //         content: '',
    //         url: '',
    //         date: ''
    //     })
    // }




    // blogUpload = () => {


    //     this.setState({
    //         blogToggle: !this.state.blogToggle
    //     })
    //     axios.post('/api/blog/upload', {
    //         title: this.state.title,
    //         description: this.state.description,
    //         content: this.state.content,
    //         url: this.state.url,
    //         date: this.state.date
    //     }).then(res => {
    //         console.log('went through', res)
    //     })
    //     this.setState({
    //         title: '',
    //         description: '',
    //         content: '',
    //         url: '',
    //         date: ''
    //     })
    // }




    deletePost = (podcast_id) => {
        axios.delete(`/api/podcast/delete/${podcast_id}`).then(
            (res) => {
                res.sendStatus(200)
            }
        )

        this.props.history.push('/adminLanding')


        // this.componentDidUpdate = () => {
        //     axios.get('/api/podcasts/getall').then((res => {
        //         this.setState({
        //             podcasts: res.data
        //         })
        //     }))
        // }
    }





    render() {
        const clients = this.state.clients.map((element) => {
            return <div className='dashPod'>
                <h3>{element.title}</h3>
                <button className='deletePodcast' onClick={e => this.deletePost(element.podcast_id)}>X</button>
            </div>
        })


        return (
            <>
                <div className='pageView'>
                    <div className='dashHead'> <h2>Admin Dashboard</h2>
                    </div>
                    <div className='dashboard'>

                        <div className='podcastContainer'>
                            <p>Clients</p>
                            {clients}
                        </div>
                    </div>

              
                  


                </div>
            </>
        )
    }

}