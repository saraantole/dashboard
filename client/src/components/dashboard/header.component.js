import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

const formatAddress = address => {
    if (address) {
        return (
            address.split('').filter((_letter, index) => index < 4).join('')
            + '...' +
            address.split('').filter((_letter, index) => index > address.length - 5).join('')
        )
    }
}


function Header({ currentAccount }) {
    return (
        <AppBar sx={{ backgroundColor: '#eaeff1', color: '#212121' }} position="sticky" elevation={0}>
            <Toolbar>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs>
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
                            Members Directory
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs />
                    <Grid item>
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item>
                        <Chip size="small" label={formatAddress(currentAccount)} />
                        <IconButton color="inherit" sx={{ p: 1 }}>
                            <Avatar src="/" alt="My Avatar" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header