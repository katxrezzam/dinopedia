import './Home.scss'
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeConcepts from "./HomeConcepts/HomeConcepts";
import HomeGrid from "./HomeGrid/HomeGrid";
import HomeNews from "./HomeNews/HomeNews";
const Home = () => {

    return(
        <section className="home">
            <HomeHeader/>
            <HomeConcepts/>
            <HomeNews/>
            <HomeGrid/>
        </section>
    )
}

export default Home
