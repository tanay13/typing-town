import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper.style";
import Typing from "./styles/Typing.style";

export const content: string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime reiciendis nihil repudiandae animi adipisci asperiores aut a accusantium libero? Autem rerum officia quidem nam quisquam dolorum dolore omnis officiis";

function splitArr(): string[] {
  return content.split("");
}

interface Iprops {
  correct: Boolean;
  value: string;
  index: number;
}

function Letter(props: Iprops): ReactElement {
  const { correct, index, value } = props;

  if (correct) return <span style={{ color: "green" }}>{value}</span>;

  if (!correct) return <span style={{ color: "red" }}>{value}</span>;

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

  return (
    <>
      <Wrapper>
        {wordRef.current.map((letter, index) => {
          return (
            <Letter
              key={index}
              value={letter}
              index={index}
              correct={input[input.length - 1] === letter}
            />
          );
        })}
      </Wrapper>
      <Typing onChange={onChangeHandler} />
    </>
  );
};

export default TypingBar;
