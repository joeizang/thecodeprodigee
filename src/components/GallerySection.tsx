import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GallerySectionCard, { GallerySectionCardProps } from './GalleryComponents/GallerySectionCard'

const appArray: GallerySectionCardProps[] = [
  {
    appName: 'SLA',
    href: 'https://sheleadsafrica.org/',
    description: 'Backend REST APIs for React Native app',
    imageUrl: 'img/restapi.png',
  },
  {
    appName: 'AppQuest',
    href: 'https://nola.finance',
    description: 'Backend REST APIs for ReactNative app',
    imageUrl: 'img/restapi.png',
  },
  {
    appName: 'RemixIDE',
    href: 'https://remix.ethereum.org',
    description: 'The IDE for solidity and blockchain development',
    imageUrl: 'img/remixide homepage.png',
  },
  {
    appName: 'ABCQix',
    href: 'abcqix.com',
    description: 'Language learning Platform for Children',
    imageUrl: 'img/AbcQix.png',
  },
  {
    appName: 'Remix Rewards',
    href: '',
    description: '',
    imageUrl: 'img/remixrewards.png',
  },
]

export default function GallerySection() {
  return (
    <>
      <Box component={'section'}>
        <Typography variant="h4" color={'#1D0532'}>
          Here are projects I have been involved in both Open Source and non Open Source
        </Typography>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
          {appArray.map((app) => (
            <GallerySectionCard
              description={app.description}
              imageUrl={app.imageUrl}
              href={app.href}
              appName={app.appName}
              key={app.appName}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}
