import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import Logo from '../Images/logo.PNG'

class Nav extends Component {

    componentDidMount() {



    }
    render() {
        return (
            <>


                <nav>

                    <div className='topRow'>
                        <Link to='/podcasts'>
                            <div>
                                HOME
                             </div>
                        </Link>
                        <Link to='/podcasts'>
                            <div>
                                OUR WORK
                             </div>
                        </Link>
                        <Link to='/podcasts'>
                            <div>
                                ABOUT
                             </div>
                        </Link>
                        <Link to='/shop/select-package'>
                            <div>
                                GET STARTED
                             </div>
                        </Link>

                    </div>
                    <div id='logo-box'>
                        {/* <Link to='/'> */}
                            <img id ='logo' src='https://s3-us-west-1.amazonaws.com/achesonco/temple.png ' alt='logo' />
                        {/* </Link> */}
                    </div>


                </nav>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Nav)
