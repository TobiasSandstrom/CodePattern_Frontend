import StarRating from "../Views/Components/StarRating"


//Single responsibility helt enkelt
// Tar emot en integer och renderar så många stjärnor på produktens card

export function SetRating(rating:number){

    const stars = [] as any
    for (let i = 0; i < rating; i++) {
        stars.push(<StarRating key={i} />)
    }
    return stars

}