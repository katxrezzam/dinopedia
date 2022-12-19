import './Home.scss'
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeConcepts from "./HomeConcepts/HomeConcepts";
const Home = () => {

    return(
        <section className="home">
            <HomeHeader/>
            <HomeConcepts/>
        </section>
    )
}

export default Home
