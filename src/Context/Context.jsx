import { createContext, useState } from "react";
import run from "../Config/Config";
import { useAuth0 } from "@auth0/auth0-react";

export const context = createContext();

const ContextProvider = (props) => {
    const {user, loginWithRedirect, logout, isAuthenticated} = useAuth0();
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [profileView, setProfileView] = useState(false);
    const delayPara = (index, nextWord) => {
        setTimeout(function() {
            setResultData(prev => prev + nextWord);
        },75*index);
    }
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }
    const onSent = async(prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            setResultData("");
            setInput(prompt);
            response = await run(prompt);
            setRecentPrompt(prompt);
        }
        else{
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            setResultData("");
            response = await run(input);
        }
        
        let responseArray = response.split("**");
        let newArray = "";
        for(let i=0; i<responseArray.length; i++){
            if(i%2 === 0){
                newArray += responseArray[i];
            }
            else{
                newArray += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse = newArray.split("*").join("</br>");
        let newResponseArray = newResponse.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
        setInput("");
    }

    
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
        profileView,
        setProfileView
    }

    return (
        <context.Provider value={contextValue}>
            {props.children} 
        </context.Provider>
    )
}

export default ContextProvider;