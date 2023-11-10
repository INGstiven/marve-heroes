/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import {   useState } from "react";
import { getHero } from "../api/api";
import { SearchComponent } from "../components/ssearch/search"
import { setSearchedhero } from "../store/slices/search";
import { setSelectedHero } from "../store/slices/heroes";
import "./heroes.scss"
import {  useDispatch, useSelector } from "react-redux";
import { Card, CardComponent } from "../components/card/card";
import { ChartComponent } from "../components/chart/chart";
import { createChartData } from "../utils/heroesChart";
import { ModalComponent } from "../components/modal/modal";
export const HeroesPage: React.FunctionComponent<unknown> = () => {
    const [showModal, setShowModal] = useState(false); 
    const hero = useSelector(state => (state as any).heroes);
    const dispatch = useDispatch();
    const [cards, setCards] = useState(new Array<Card>);
    const handleSearch = (value: unknown) => {
        dispatch(setSearchedhero(value));
        searchHeroes(value as string);
    }

    const searchHeroes = (heroName: string) => {
        getHero(heroName).then(response => {
            if(response.data){
                const convertedResponse = transformResponseToCard(response.data.data.results)
                setCards(convertedResponse as unknown as Card[])
            }
        });
    }

    const transformResponseToCard = (data: unknown[]): Card[] => {
        return (data as any[]).map((element : any) => {
            return {
     
                Name: element.Name,
                Hero: {
                    id: element.id,
                    name: element.name,
                    description: element.description,
                    thumbnail: element.thumbnail,
                    comics: element.comics,
                    series: element.series
                }
            } as unknown as Card
        }); 
    }

    const createReactNode = () : React.ReactNode => {
        const donoutChartComics = createChartData("Comics", hero.SelectedHero.comics);
        const donoutCharSeries = createChartData("Series", hero.SelectedHero.series);
        return <>
            {donoutChartComics && <div className="section">
                <ChartComponent data={donoutChartComics?.data} name={donoutChartComics?.name}></ChartComponent>
                
            </div>}
            {donoutCharSeries && <div className="section">
                <ChartComponent data={donoutCharSeries?.data} name={donoutCharSeries?.name}></ChartComponent>     
            </div>}

        </>
    }

    const handleClick = (card: Card) => {
        dispatch(setSelectedHero(card.Hero));
        setShowModal(true);
    }
    return(
        //addd container class to classname prop to get the items displayed inline and uncomment styles in heroes.scss
        <>    
            <SearchComponent EmitValue={handleSearch}/>
            <div className="container heroes-container">
                {cards.map((card, index) => {
                    return <a href="#" key={index}><CardComponent Hero={card.Hero} Name={card.Name} Onclick={() => handleClick(card)} key={index}></CardComponent></a>
                })}
            </div>
     
            {showModal && (<ModalComponent Content = {createReactNode()} isModalVisible={showModal} ModalName={hero.name} OnClose={() => setShowModal(false)}></ModalComponent>)}
      
        </>
    )
}