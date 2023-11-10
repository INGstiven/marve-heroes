import { useState } from "react";
import "./search.scss"
export interface Search{
    EmitValue: (valuje: string) => void;
    Id?: string;
}
export const SearchComponent: React.FunctionComponent<Search> = ({ EmitValue = () => {}}) => {
    const [text, setText] = useState("");
    return(
        <div className="search-container-wrapper">
            <div className="search-container"> 
                <div className="text-search-container">
                    <input type="text" placeholder="Hero Name" value={text} onChange={(event) => {
                        setText(event.target.value)
                        EmitValue(event.target.value);
                    }}></input>
                </div>
                <div className="img-container">
                    <a href="#">
                        <img src="../../assets/icons/search.svg"></img>
                    </a> 
                </div>   
            </div>        
        </div>
    )
}