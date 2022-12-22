import '../Home.scss'
import Concept from "../../../components/Concept/Concept";
const HomeConcepts = () => {
    return(
        <section className={'home-concepts'}>
            <div className="width-wrapper">
                <div className="row-concepts">
                    <Concept/>
                    <Concept/>
                    <Concept/>
                </div>
            </div>
        </section>
    )
}

export default HomeConcepts