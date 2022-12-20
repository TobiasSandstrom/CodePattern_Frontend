import showcaseLeft from '../Images/showcase-left.svg'
import showcaseRight from '../Images/showcase-right.svg'


const Showcase = () => {

    return (
        <div className='showcase'>
            <div className="showcase-container">
                <div className="showcase-left-img">
                    <img src={showcaseLeft} alt="" />

                </div>

                <div className="showcase-text">
                    <h1>SALE UP <br></br> To 50 % Off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <button> 
                        
                    <div className="btn-context">
                        SHOP NOW
                        </div>
                        
                    </button>
                </div>

                <div className="showcase-right-img">

                <img src={showcaseRight} alt="" />

                </div>

            </div>



        </div>
    )
}

export default Showcase