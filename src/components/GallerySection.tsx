import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default function GallerySection() {
  return (
    <>
      <Box component={'section'}>
        <Typography variant="h4" color={'#1D0532'}>
          Here are projects I have been involved in both Open Source and non Open Source
        </Typography>
        <Box display={'flex'} mt={5}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box display={'flex'}>
              <img src="img/remixide homepage.png" width={150} height={155} />
              <Typography variant="h4" color={'#1d0532'} ml={3}>
                RemixIDE
              </Typography>
              <Box display="block">
                <Typography variant="body2" color={'#1d0532'}>
                  The IDE for solidity and blockchain based development
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box display={'flex'} mt={5}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box display={'flex'}>
              <img src="img/remixide homepage.png" width={150} height={155} />
              <Typography variant="h4" color={'#1d0532'} ml={3}>
                RemixIDE
              </Typography>
              <Box display="block">
                <Typography variant="body2" color={'#1d0532'}>
                  The IDE for solidity and blockchain based development
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box mt={5}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box>
              <img src="img/remixide homepage.png" width={150} height={155} />
              <Typography variant="h4" color={'#1d0532'} ml={22}>
                RemixIDE
              </Typography>
              <Box>
                <Typography variant="body2" color={'#1d0532'}>
                  The IDE for solidity and blockchain based developments
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box display={'flex'} mt={5}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box display={'flex'}>
              <img src="img/remixide homepage.png" width={150} height={155} />
              <Typography variant="h4" color={'#1d0532'} ml={3}>
                RemixIDE
              </Typography>
              <Box>
                <Typography component={'p'} variant="body2" color={'#1d0532'}>
                  The IDE for solidity and blockchain based development
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  )
}
