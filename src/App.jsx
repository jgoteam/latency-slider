import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import VerticalSlider from "./components/VerticalSlider";
import VerticalSliderContainer from "./components/VerticalSliderContainer";
import "./App.css";

/*
Color Codes:

Base: '#007FFF' light blue
50 ms:          green
150 ms:         yellow
300 ms:         red

*/

function App() {
  const [mainSliderValue, setMainSliderValue] = useState(0);
  const [secondSliderlatency, setSecondSliderLatency] = useState(50);

  const handleMainSliderChange = (e, value) => {
    setMainSliderValue(value);
  };

  const handleLatencyChange = (event) => {
    setSecondSliderLatency(event.target.value);
  };

  return (
    <>
      <FormControl autoWidth sx={{ display: "inline-block" }}>
        <FormHelperText sx={{ fontSize: "18px" }}>Latency</FormHelperText>
        <Select value={secondSliderlatency} onChange={handleLatencyChange}>
          <MenuItem value={50}> 50 ms</MenuItem>
          <MenuItem value={150}>150 ms</MenuItem>
          <MenuItem value={300}>300 ms</MenuItem>
          <MenuItem value={500}>500 ms</MenuItem>
          <MenuItem value={1000}>1000 ms</MenuItem>
        </Select>
      </FormControl>
      <VerticalSliderContainer>
        <VerticalSlider
          orientation="vertical"
          value={mainSliderValue}
          delay={0}
          handleMainSliderChange={handleMainSliderChange}
        />
      </VerticalSliderContainer>
      <VerticalSliderContainer>
        <VerticalSlider
          orientation="vertical"
          value={mainSliderValue}
          delay={secondSliderlatency}
          handleMainSliderChange={handleMainSliderChange}
        />
      </VerticalSliderContainer>
    </>
  );
}

export default App;
