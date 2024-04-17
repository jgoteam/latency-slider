import { styled, Box } from '@mui/system';

const VerticalSliderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(30), // Adjust the gap between sliders
}));

export default VerticalSliderContainer;