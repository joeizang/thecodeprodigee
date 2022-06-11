import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export interface GallerySectionCardProps {
  href: string
  appName: string
  description: string
  imageUrl: string
}

export default function GallerySectionCard({ href, appName, description, imageUrl }: GallerySectionCardProps) {
  return (
    <Box display={'flex'} mt={5}>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 5 }}>
        <Box display={'flex'}>
          <Button href={href}>
            <img src={imageUrl} width={150} height={150} style={{ borderRadius: 5 }} />
          </Button>
          <Box display="flex" flexDirection={'column'}>
            <Typography variant="h4" color={'#1d0532'} ml={3}>
              {appName}
            </Typography>
            <Typography variant="body2" color={'#1d0532'} ml={3} mt={5}>
              {description}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
