import './Home.scss'
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeConcepts from "./HomeConcepts/HomeConcepts";
import Modal from "../../components/Modal/Modal";
const Home = () => {

    return(
        <section className="home">
            <HomeHeader/>
            <HomeConcepts/>
        </section>
    )
}

export default Home
