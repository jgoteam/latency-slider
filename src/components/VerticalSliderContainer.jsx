import { styled, Box } from '@mui/system';

const VerticalSliderContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  margin: '5rem',
  marginTop: '0rem',
  gap: theme.spacing(30), // Adjust the gap between sliders
}));

export default VerticalSliderContainer;