import axios from "axios";
import {useEffect} from "react";

const HomeNews = () => {

    let url = 'https://newsapi.org/v2/everything?' +
        'q=dinosaur OR paleontology&'+

        'apiKey=c0356e10d38f414d9e96c680c8d74155';

    useEffect( () => {
        const loadNews = async () => {
            const response = await axios.get(url)
            console.log(response.data)
        }
        loadNews()
    },[])

    return(
        <section className={'home-news'}>
            <div className="width-wrapper">
                <div className="news-title">
                    <h1>News</h1>
                </div>
                <div className="news-grid">

                </div>
            </div>
        </section>
    )
}

export default HomeNews