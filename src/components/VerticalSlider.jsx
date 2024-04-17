import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";
import { styled, alpha, Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function VerticalSlider({
  handleMainSliderChange,
  value,
  delay,
}) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setCurrentValue(value);
    }, delay);
  }, [value, delay]);

  const handleChange = (_, newValue) => {
    setCurrentValue(newValue);
    handleMainSliderChange(null, newValue);
  };

  return (
    <Box sx={{ height: 300, paddingBottom: '0.50rem', display: 'inline-block' }}>
      <Slider
        orientation="vertical"
        value={currentValue}
        sx={{ marginBottom: "4em" }}
        delay={delay}
        onChange={delay === 0 ? handleChange : null}
      />
    </Box>
  );
}

// Blue Gradient
//   100: "#DAECFF",
//   200: "#99CCF3",
//   400: "#3399FF",
//   300: "#66B2FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   700: "#0059B3",
//   900: "#003A75",

const Slider = styled(BaseSlider)(
  ({ delay }) => `
  color: ${delay === 0 ? "#007FFF" : "red"};
  height: 95%;
  width: 4px;
  display: inline-block;
  position: relative;
  margin-top: 0.75rem;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  & .${sliderClasses.rail} {
    display: inline-flex;
    position: absolute;
    height: 100%;
    width: inherit;
    border-radius: 6px;
    background-color: currentColor;
    opacity: 0.3;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    width: inherit;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${delay === 0 ? "#007FFF" : "red"};
    left: 50%;
    -webkit-transform: translate(-50%, 50%);
    -moz-transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
    transition-property: box-shadow, width, height;
    transition-timing-function: step(${(350/delay)}, jump-none);
    transition-duration: ${350-delay}ms;
    transition-behavior: allow-discrete;

    &:hover {
      ${delay === 0 ? `box-shadow: 0 0 0 6px ${alpha("#99CCF3", 0.3)}` : null};
    }

    &.${sliderClasses.focusVisible} {
      ${delay === 0 ? `box-shadow: 0 0 0 8px ${alpha("#99CCF3", 0.5)}` : null};
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha("#99CCF3", 0.5)};
      outline: none;
      width: 100px;
      height: 100px;
    }
  }
`
);
