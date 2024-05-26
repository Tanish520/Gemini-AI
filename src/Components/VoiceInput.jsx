import { useContext, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { context } from "../Context/Context";

const VoiceInput = () => {
  const { setInput, onSent } = useContext(context);
    
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleOnClick = () => {
    SpeechRecognition.startListening();

  };

  return (
    <div>
      {listening ? (
        <>
        <i onClick={SpeechRecognition.stopListening} class="fa-solid fa-stop"></i>
        {setInput(transcript)}
        </>
      ) : (
        <i onClick={SpeechRecognition.startListening} class="fa-solid fa-microphone icon"></i>
      )}
      {/* {transcript !== undefined ? setInput(transcript) : null} */}
    </div>
  );
};

export default VoiceInput;
