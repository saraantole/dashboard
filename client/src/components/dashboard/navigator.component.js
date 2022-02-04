import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const title = {
  color: 'rgba(255, 255, 255, 0.7)',
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 5,
  px: 3,
}

const item = {
  py: '10px',
  px: 4,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    color: '#ffff',
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
}


export default function Navigator({ categories }) {
  return (

    <List disablePadding sx={{ height: '100%' }}>
      <ListItem sx={title}>
        <ListItemText>DAO Dashboard</ListItemText>
      </ListItem>
      {categories.map(({ id, children }) => (
        <Box key={id}>
          {children.map(({ id: childId, icon, active }) => (
            <ListItem disablePadding key={childId}>
              <ListItemButton value={childId} selected={active} sx={item}>
                <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{icon}</ListItemIcon>
                <ListItemText>{childId}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </List>

  )
}