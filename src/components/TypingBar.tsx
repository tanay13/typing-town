import { ChangeEvent, useEffect, useState } from "react";
import Typing from "./styles/Typing.style";

export const content: string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime reiciendis nihil repudiandae animi adipisci asperiores aut a accusantium libero? Autem rerum officia quidem nam quisquam dolorum dolore omnis officiis";

const TypingBar = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (input[input.length - 1] === content[input.length - 1]) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }, [input]);

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }

  return <Typing onChange={onChangeHandler} value={input} />;
};

export default TypingBar;
