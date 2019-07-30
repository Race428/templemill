import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/pages/landingPage'
import Work from './components/pages/work'
import About from './components/pages/about'
// import AdminLogin from './Components/Pages/adminLogin'
// import AdminLanding from './Components/Pages/adminLanding'
// import Podcasts from './Components/Pages/podcasts'
import Step1 from './components/pages/Store/step1'
import Step2 from './components/pages/Store/step2'
import Step3 from './components/pages/Store/step3'
import Step4 from './components/pages/Store/step4'
import Step5 from './components/pages/Store/step5'
import Step6 from './components/pages/Store/step6'
import Checkout from './components/pages/Store/Summary'
import AdminLogin from './components/pages/adminLogin'
import AdminLanding from './components/pages/adminLanding'





export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/work' component={Work} />
    <Route path='/about' component={About} />

    <Route path='/shop/select-package' component={Step1} />
    <Route path='/shop/select-details' component={Step2} />
    <Route path='/shop/select-aspect-ratio' component={Step3} />
    <Route path='/shop/select-style' component={Step4} />
    <Route path='/shop/select-font' component={Step5} />
    <Route path='/shop/select-distribution-options' component={Step6} />
    <Route path='/shop/checkout' component={Checkout} />
    <Route path='/login' component={AdminLogin} />
    <Route path='/adminLanding' component={AdminLanding} />



    {/* <Route path='/login' component={AdminLogin} /> */}
    {/* <Route path='/adminLanding' component={AdminLanding} /> */}
    {/* <Route path='/podcasts' component={Podcasts} />
      <Route path='/shop/select-package' component={Step1} />
      <Route path='/shop/select-details' component={Step2} />
      <Route path='/shop/select-aspect-ratio' component={Step3} />
      <Route path='/shop/select-style' component={Step4} />
      <Route path='/shop/select-font' component={Step5} />
      <Route path='/shop/select-distribution-options' component={Step6} />
      <Route path='/shop/checkout' component={Checkout} />
 */}









  </Switch>
)
