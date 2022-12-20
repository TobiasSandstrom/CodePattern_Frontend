import MapProducts from '../../Functions/MapProducts'


const Featured = () => {

    return (

        <div className="featured">
            <h3>Featured Products</h3>
            <div className="featured-container">
                {MapProducts(8)}
            </div>

        </div>
    )
}

export default Featured