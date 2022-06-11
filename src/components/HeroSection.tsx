import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GithubAvatar from './Socials/GithubAvatar'
import LinkedInAvatar from './Socials/LinkedInAvatar'
import TwitterAvatar from './Socials/TwitterAvatar'
import AwsAvatar from './TechAvatar/AwsAvatar'
import CSharpAvatar from './TechAvatar/CSharpAvatar'
import DotNetAvatar from './TechAvatar/DotNetAvatar'
import JavascriptAvatar from './TechAvatar/JavascriptAvatar'
import NodeJsAvatar from './TechAvatar/NodeJsAvatar'
import ReactAvatar from './TechAvatar/ReactAvatar'
import TypescriptAvatar from './TechAvatar/TypescriptAvatar'

const avatarComponents = [
  TypescriptAvatar,
  JavascriptAvatar,
  ReactAvatar,
  NodeJsAvatar,
  DotNetAvatar,
  CSharpAvatar,
  AwsAvatar,
]

const socialsComponents = [GithubAvatar, LinkedInAvatar, TwitterAvatar]

// eslint-disable-next-line quotes
const text = "Here are my socials, let's get in touch!"

export default function HeroSection() {
  return (
    <>
      <Box component={'section'} mb={15}>
        <Box
          sx={{
            borderRadius: '50%',
            border: '4px solid #ccc',
            width: 205,
            height: 205,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            float: 'left',
            shapeOutside: 'circle(50%)',
            marginRight: '1rem',
          }}
        >
          <img
            src="img/portfolio.png"
            width={200}
            height={200}
            style={{ borderRadius: '50%' }}
          />
        </Box>
        <Box>
          <Box>
            {' '}
            <Typography variant="h4" fontWeight={600}>
              Hi, Joseph Izang here!
            </Typography>
            <Typography variant="h6">
              I am a Fullstack Software Developer
            </Typography>
            <Typography variant="h6">This is my tech stack:</Typography>
            <Box>
              <Stack direction="row" spacing={5} mt={3}>
                {avatarComponents.map((component, idx) => (
                  <Avatar
                    key={idx}
                    sx={{
                      width: 72,
                      height: 72,
                      background: '#f5f5f5',
                      borderColor: '#AEADA3',
                      borderRadius: '3px solid',
                      border: '50%',
                    }}
                  >
                    <Avatar
                      key={idx}
                      sx={{ width: 64, height: 64, background: '#fff' }}
                    >
                      {component()}
                    </Avatar>
                  </Avatar>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
        <Typography variant="h5" pt={5}>
          {text}
        </Typography>
        <Stack direction="row" spacing={5} mt={2}>
          {socialsComponents.map((component, idx) => component(idx))}
        </Stack>
      </Box>
    </>
  )
}
