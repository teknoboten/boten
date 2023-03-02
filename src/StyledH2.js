import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'

const StyledH2 = styled(Typography)(({ theme }) => ({
  variant: 'h2',
  fontFamily: 'Silkscreen',
}))

export default function StyledCustomization() {
  return <StyledH2 />
}
