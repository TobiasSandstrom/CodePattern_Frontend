import Showcase from '../Components/Showcase'
import Featured from '../Components/Featured'
import SaleBanners from '../Components/SaleBanners'
import FlashSale29 from '../Components/FlashSale29'
import FlashSale49 from '../Components/FlashSale49'
import CustomerWaranty from '../Components/CustomerWaranty'
import Footer from '../Components/Footer'
const Home = () => {


  return (
    <div className='home'>
      <Showcase />
      <Featured />
      <SaleBanners />
      <FlashSale29 />
      <FlashSale49 />
      <CustomerWaranty />
      <Footer />
    </div>

  )
}

export default Home