import { Icon } from "../../types/icon/icon"
import "./icon.css"
export const IconComponent: React.FunctionComponent<Icon> = ({
    TagName = ""
    ,Height = "50px"
    ,Width = "50px"
    ,ImageUrl = ""
    ,OnClick = () => {}}) =>{
   
    const Onclick = () =>{
        OnClick();
    }
    return(
        <img className="icon" title={TagName} src={ImageUrl} style={{height:Height, width: Width}} onClick={Onclick}></img>
    );

}