import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Nav() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              The Code Prodigee
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
