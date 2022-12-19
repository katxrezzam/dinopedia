import '../Home.scss'
const HomeHeader = () => {
    return(
        <header className={'home-header'}>
            <div className="wrapper">
                <div className="dino-info">
                    <span className='dino-title'>
                        <h1>Dinopedia</h1>
                    </span>
                    <div className="dino-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi distinctio libero ipsam illo quibusdam sint laudantium eligendi dicta! Voluptates a nulla architecto perferendis id. Velit sit est voluptates tenetur?</p>
                    </div>
                </div>
                <div className="dino-card">
                    <div className='circle'>
                        Cosas
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HomeHeader