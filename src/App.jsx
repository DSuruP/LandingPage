
// import Collection from './components/Collection'
// import ExploreOptions from './components/ExploreOptions'
// import NavBar from './components/FrontNavBar'
// import OrderType from './components/OrderType'
// import PopularLocalities from './components/PopularLocalities'
// import ZomatoAppLook from './components/ZomatoAppLook'

import AppLook from "./Pages/LandingPages/components/AppLook"
import Collection from "./Pages/LandingPages/components/Collection"
import ExploreOptions from "./Pages/LandingPages/components/ExploreOptions"
import Footer from "./Pages/LandingPages/components/Footer"
import NavBar from "./Pages/LandingPages/components/FrontNavBar"
import OneCard from "./Pages/LandingPages/components/OneCard"
import OrderType from "./Pages/LandingPages/components/OrderType"
import PopularLocalities from "./Pages/LandingPages/components/PopularLocalities"

function App() {

  return (
    <>
      <NavBar/>
      <OneCard/>
      <OrderType/>
      <Collection/>
      <PopularLocalities/>
      <AppLook/>
      <ExploreOptions/>
      <Footer/>
    </>
  )
}

export default App
