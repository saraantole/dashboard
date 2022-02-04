import Box from '@mui/material/Box'
import Navigator from '../components/dashboard/navigator.component'
import Content from '../components/dashboard/content.component'
import Header from '../components/dashboard/header.component'
import { useEffect } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import HomeIcon from '@mui/icons-material/Home'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import { getMemberById } from '../api'
import { useNavigate, useLocation } from 'react-router-dom'

const categories = [
  {
    id: 1,
    children: [
      { id: 'Home', icon: <HomeIcon /> },
      { id: 'Members directory', icon: <ConfirmationNumberIcon />, active: true},
      { id: 'Projects and ideas', icon: <EmojiObjectsIcon /> },
      { id: 'Events', icon: <PeopleAltIcon /> },
      { id: 'Agents', icon: <PersonIcon /> },
      { id: 'Resources', icon: <BookIcon />, },
    ],
  },
  {
    id: 2,
    children: [
      { id: 'Settings', icon: <SettingsIcon /> },
      { id: 'Subscription', icon: <MilitaryTechIcon /> },
    ],
  },
]

const DashboardPage = ({ currentAccount, setCurrentAccount }) => {
  const navigate = useNavigate()
  const search = useLocation().search

  useEffect(() => {
    const checkIfMemberExists = async () => {
      try {
        const memberAddress = new URLSearchParams(search).get('member')
        setCurrentAccount(memberAddress)
        const address = currentAccount || memberAddress
        await getMemberById(address)
      } catch (e) {
        navigate('/signup')
      }
    }

    checkIfMemberExists()
  }, [])

  return (
    <>
      <Navigator categories={categories} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header currentAccount={currentAccount} categories={categories} />
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          <Content categories={categories} />
        </Box>
      </Box>
    </>
  )
}

export default DashboardPage