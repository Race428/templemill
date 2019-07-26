import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'

// import Logo from '../Images/logo.PNG'

class Nav extends Component {

    componentDidMount() {

var location = this.props.props.location.pathname


if(location === '/'){
    $('#home').attr('id','active-link')
} 

if(location === '/work'){
    $('#work').attr('id','active-link')
} 

    }
    render() {
        return (
        


                <nav>




                    <div className='topRow'>


                        <ul>
                                <li >
                            <Link  id='home' to='/'>

                                    HOME
                            </Link>

                            </li>

                                <li >
                            <Link  id='work' to='/work'>

                                    OUR WORK
                            </Link>

                            </li>

                                <li >
                            <Link  id='about' to='/'>


                                    ABOUT
                            </Link>

                            </li>

                                <li >
                            <Link  id='get-started' to='/'>

                                    GET STARTED
                            </Link>

                            </li>
                        </ul>

                    </div>

                    <div id='logo-box'>
                        {/* <Link to='/'> */}
                        <img id='logo' src='https://s3-us-west-1.amazonaws.com/achesonco/temple.png ' alt='logo' />
                        {/* </Link> */}
                    </div>


                </nav>
          

        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Nav)
