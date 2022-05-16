import {useState} from "react";

const CustomButton = (props) => {
    const [buttonClass, setButtonClass] = useState("likeButton")
    const [buttonClass2, setButtonClass2] = useState("dislikeButton")

    function handleClick(event){
        if (buttonClass == "likeButton"){
            setButtonClass(likeButtonActive);
            setButtonClass2("dislikeButton");
        }
        else{setButtonClass("likeButton");
    }
    }
    else if(event.target.id == "dislike"){
        if(buttonClass2 == "dislikeButton")
    }
}