import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper.style";
import Typing from "./styles/Typing.style";

export const content: string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime reiciendis nihil repudiandae animi adipisci asperiores aut a accusantium libero? Autem rerum officia quidem nam quisquam dolorum dolore omnis officiis";

function splitArr(): string[] {
  return content.split("");
}

interface Iprops {
  correct: Boolean | null;
  value: string;
  index: number;
}

function Letter(props: Iprops): ReactElement {
  const { correct, index, value } = props;

  if (correct == true)
    return <span style={{ backgroundColor: "green" }}>{value}</span>;

  if (correct == false)
    return <span style={{ backgroundColor: "red" }}>{value}</span>;

  return <span>{value}</span>;
}

const TypingBar = () => {
  const wordRef = useRef(splitArr());
  const [input, setInput] = useState("");

  useEffect(() => {
    if (
      input[input.length - 1] === content[input.length - 1] &&
      input.length - 1 >= 0
    ) {
    } else {
    }
  }, [input]);

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }

  function check(index: number): Boolean | null {
    if (index > input.length - 1) return null;

    if (content[index] === input[index]) return true;

    return false;
  }

  return (
    <>
      <Wrapper>
        {wordRef.current.map((letter, index) => {
          return (
            <Letter
              key={index}
              value={letter}
              index={index}
              correct={check(index)}
            />
          );
        })}
      </Wrapper>
      <Typing onChange={onChangeHandler} />
    </>
  );
};

export default TypingBar;
