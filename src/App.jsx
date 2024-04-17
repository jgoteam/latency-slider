import { useState } from 'react';
import VerticalSlider from "./components/VerticalSlider";
import VerticalSliderContainer from "./components/VerticalSliderContainer";
import './App.css';

/*
Color Codes:

Base: '#007FFF' light blue
50 ms:          green
150 ms:         yellow
300 ms:         red

*/

function App() {
  const [mainSliderValue, setMainSliderValue] = useState(0);

  const handleMainSliderChange = (e, value) => {
    setMainSliderValue(value);
  };

  return (
    <VerticalSliderContainer>
      <VerticalSlider
        orientation="vertical"
        value={mainSliderValue}
        delay={0}
        handleMainSliderChange={handleMainSliderChange}
      />
      {[50, 150, 350].map((delay, index) => (
        <VerticalSlider
          key={index}
          orientation="vertical"
          value={mainSliderValue}
          delay={delay}
          handleMainSliderChange={handleMainSliderChange}
        />
      ))}
    </VerticalSliderContainer>
  );
}

export default App;
