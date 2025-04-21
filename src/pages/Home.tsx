import Navbar from "../components/Navbar.tsx"
import Herosection from "../components/Herosection"
import Marqueee from "../components/Marqueee"
import Howitworks from "../components/Howitworks"
import Rewardshowcase from "../components/Rewardshowcase"
import Testimonials from "../components/Testimonials"
import Footer from "../components/footer.tsx"
const Home = () => {
  return (
    <>
        <Navbar/>
        <Herosection/>
        <Marqueee/>
        <Howitworks/>
        <Rewardshowcase/>
        <Testimonials/>
        <Footer/>
    </>
)
}

export default Home