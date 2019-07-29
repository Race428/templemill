import React from 'react'
import style from '../../../../css/CSS/packageDisplay.module.css'

import '../../../../css/CSS/odometer-theme-plaza.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updatePrice, updateDistributionSelection } from '../../../../Redux/Reducer';
import Odometer from 'react-odometerjs';

function PackageDiplay(props) {











    const pages = ['/shop/select-package', '/shop/select-details', '/shop/select-aspect-ratio', '/shop/select-style', '/shop/select-font', '/shop/select-distribution-options', '/shop/checkout']


    const { packageSelection, detailSelection, ratioSelection, styleSelection, musicSelection, fontSelection, distributionSelection } = props


    // console.log(packageSelection,detailSelection,ratioSelection,styleSelection)
    //have redux already have everything in the choices
    const packagePrices = [700, 900, 1200]

    const detailPrices = [0, 500, 1000]

    const ratioPrices = [0, 150, 300]

    const stylePrices = [0, 0, 0]

    const musicPrices = [0, 0, 0]

    const fontPrices = [0, 0, 0]

    const distributionPrices = [200, 200, 200, 200]

    const totalPrice = []

    const optionIndex = ['option1', 'option2', 'option3', 'option4']
    const musicIndex = ['music1', 'music2', 'music3', 'music4']










    // const [packageSelection] = useState(0)
    const packagePrice = () => {
        // console.log(packageSelection)
        var indexItem = optionIndex.indexOf(packageSelection)
        var price = packagePrices[indexItem]
        totalPrice.push(price)

    }


    const detailPrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(detailSelection)
        var price = detailPrices[indexItem]

        totalPrice.push(price)

    }

    const ratioPrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(ratioSelection)
        var price = ratioPrices[indexItem]

        totalPrice.push(price)

    }
    const stylePrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(styleSelection)
        var price = stylePrices[indexItem]

        totalPrice.push(price)

    }

    const musicPrice = () => {
        // console.log(detailSelection)
        var indexItem = musicIndex.indexOf(musicSelection)
        var price = musicPrices[indexItem]

        totalPrice.push(price)

    }

    const fontPrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(fontSelection)
        var price = fontPrices[indexItem]

        totalPrice.push(price)

    }


    const distributionPrice = () => {
        for (let i = 0; i < distributionSelection.length; i++) {

            var indexItem = optionIndex.indexOf(distributionSelection[i])
            var price = distributionPrices[indexItem]
            totalPrice.push(price)
        }

    }


    packagePrice()
    detailPrice()
    ratioPrice()
    stylePrice()
    musicPrice()
    // fontPrice()
    distributionPrice()




    const reducer = (a, b) => a + b

    var sumOfNums = totalPrice.reduce((reducer), 0)


    props.updatePrice(sumOfNums)




    const next = () => {

        const y = props.location.pathname

        var x = pages.indexOf(props.location.pathname) + 1


        if (props.distributionSelection.length === 0 && y === '/shop/select-distribution-options') {

            window.alert('Please Choose a Distribution Option')
           

        }
        else {
            props.history.push(pages[x])

           
        }


        if (props.fontSelection === 'Type Here' && y === '/shop/select-font') {
            window.alert('Please give us your font name.')
            props.history.push('/shop/select-font')
        }

        else {
         

           
        }

    }
    

    // making a funtion that takes int he index of the path name that then adds one and this.props.history.push's to the next index. Do the same opposite for the back button 


    return <div className={style.pageView}>

        <div className={style.selectedOptionDetails}>

            <div className={style.priceTitle}>Estimated Price: $  <div className={style.odeometer}>
                <Odometer value={sumOfNums} format="(dddd)" /></div>
           
            </div>
            <div className={style.button} onClick={() => next()}><h1>
                NEXT
            </h1></div>
        </div>

    </div>
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    updatePrice
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PackageDiplay))






// {

//     props.packageSelection === 'package1' ?
//         <h1>You have selected Video Series Package</h1> :
//         <> </>

// }
// {
//     props.packageSelection === 'package2' ?
//         <h1>You have selected Podcast Package</h1> :
//         <> </>

// }

// {
//     props.packageSelection === 'package3' ?
//         <h1>You have selected YouTube Package</h1> :
//         <> </>

// }


// {
//     props.detailSelection === 'option1' ?
//         <h1>You have selected 3 Months</h1> :
//         <> </>

// }
// {
//     props.detailSelection === 'option2' ?
//         <h1>You have selected 6 Months</h1> :
//         <> </>

// }

// {
//     props.detailSelection === 'option3' ?
//         <h1>You have selected 12 Months</h1> :
//         <> </>




// }



// {
//     props.ratioSelection === 'option1' ?
//         <h1>You have selected 1920x1080</h1> :
//         <> </>

// }
// {
//     props.ratioSelection === 'option2' ?
//         <h1>You have selected Wider</h1> :
//         <> </>

// }

// {
//     props.ratioSelection === 'option3' ?
//         <h1>You have selected Largest</h1> :
//         <> </>




// }