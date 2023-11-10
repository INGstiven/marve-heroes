/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { Hero } from "../../types/heroes/hero"
import { getResourceUrl } from "../../api/api";
import   "./card.scss"
export interface Card{
    Hero: Hero;
    Name: string;
    Onclick: () => void
}
export const CardComponent: React.FunctionComponent<Card> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Name = "",
    Hero = {} as Hero,
    Onclick
}) => {
    const cardStyle = useMemo(() => ({width: "18rem", height: "40rem"}), [])
    const imgStyle = useMemo(() => ({width: "100%", height: "240px"}), [])

    const getImage = ()=>{
        return  getResourceUrl(`${Hero.thumbnail?.path + '.' + Hero.thumbnail?.extension}`);
    }

    return(
        <>
            <div className="card heroes-card" style={cardStyle} onClick={Onclick}>
                <img src={getImage()} className="card-img-top" alt="..." style={imgStyle}/>
                <div className="card-body">
                    <h5 className="card-title">{Hero.name}</h5>
                    <label>Description</label>
                    <p>{Hero.description}</p>
                </div>     
            </div>   
     
        </>
    )
}