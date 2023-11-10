/* eslint-disable no-debugger */
import React from "react";
import { IconComponent } from "../icon/icon";
import {  useNavigate, } from "react-router-dom";
import  "./section.css"
import { CarouselComponent } from "../carousel/carousel";
export interface Section{
    name: string
}
export const SectionComponent: React.FunctionComponent<unknown> = () => {
    const navigate = useNavigate();
    const handleIconEvent = () => {
        navigate("/heroes")
    }
    return (
        <div>
           <title>
                <h1>WELCOME!</h1>
            </title> 
            <div className="image-gallery-wrapper">
                <CarouselComponent Infinite={true} AutoPlay={true}></CarouselComponent>
            </div>  
            <h1>   
                This is a page with a heroes search inplementation. The Api was taken from https://superheroapi.com/
          
            </h1>
   
            <section>
                <div className="container">
                    <div className="item">
                        <a href="#">
                            <IconComponent TagName={"Heroes"} Width={"100px"} Height={"100px"} ImageUrl="../../assets/icons/heroes.jpg" OnClick={handleIconEvent}></IconComponent>
                        </a>
                    </div>
                    <div className="item">
                        <IconComponent TagName={"Heroes"} Width={"100px"} Height={"100px"} ImageUrl="../../assets/icons/question.jpg"></IconComponent>
                    </div>
                    <div className="item">
                        <IconComponent TagName={"Heroes"} Width={"100px"} Height={"100px"} ImageUrl="../../assets/icons/exclamation.png"></IconComponent>
                    </div>
                </div>
            </section> 
        </div>
       
    )

}