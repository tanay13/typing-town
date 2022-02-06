import GlobalStyles from "./components/styles/Global.styles";
import Typing from "./components/styles/Typing.style";
import Text from "./components/Text";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <h2>Typing Town</h2>
      <Text></Text>
      <Typing></Typing>
    </>
  );
};

export default App;
