import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function AboutMe() {
  return (
    <>
      <Typography variant={'h3'} mt={15} mb={3} color={'#1D0532'}>
        A little About Me
      </Typography>
      <Box display={'flex'}>
        <img
          src="img/MyProfilePix.jpeg"
          width={300}
          height={300}
          style={{ margin: 5, borderRadius: 5, border: '3px solid #0c0c0c' }}
        />
        <Typography
          variant="h5"
          color={'#1D0532'}
          ml={5}
          fontFamily={'Sawarabi Mincho'}
          fontStyle={'italic'}
        >
          I am a Bible believing Christian, Husband, Father and tech junkie. I
          enjoy music, art and comic books. I enjoy football (soccer), squash
          racquets, tennis and basketball.
        </Typography>
      </Box>
    </>
  )
}
