import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import Logo from '../Images/logo.PNG'

class Nav extends Component {

    componentDidMount() {



    }
    render() {
        return (
        


                <nav>




                    <div className='topRow'>


                        <ul>
                                <li>
                            <Link to='/'>

                                    HOME
                            </Link>

                            </li>

                                <li>
                            <Link to='/'>

                                    OUR WORK
                            </Link>

                            </li>

                                <li>
                            <Link to='/'>


                                    ABOUT
                            </Link>

                            </li>

                                <li>
                            <Link to='/'>

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
