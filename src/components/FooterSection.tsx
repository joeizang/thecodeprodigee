import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function FooterSection() {
  return (
    <>
      <Box mt={10} sx={{ borderTop: '1px solid #ccc' }}>
        <Typography variant="h6" color={'#1D0532'}>
          &copy;Joseph Izang {'    '} {new Date().getFullYear().toString()}
        </Typography>
      </Box>
    </>
  )
}
