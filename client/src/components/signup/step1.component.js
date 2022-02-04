import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Step1 = () => {
    return (
        <>
            <Typography component="h1" variant="h5" align='center' gutterBottom>About</Typography>
            <Typography gutterBottom sx={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Vision</Typography>
            <Typography paragraph sx={{ fontSize: 12, marginLeft: '10px' }}>To our members, being a fan isn&apos;t enough.
                The Krause House is a Decentralized Autonomous Organization (DAO)
                governed by the community, the fans, the basketball lovers and purists.
                The Krause House is a community of hoop fanatics that are just crazy enough to buy an NBA team.</Typography>
            <Typography gutterBottom sx={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Important Links</Typography>
            <Typography paragraph sx={{ fontSize: 12, margin: '0 0 0 10px' }}><Link to="#" >Click here</Link> to learn more about Krause House</Typography>
            <Typography paragraph sx={{ fontSize: 12, margin: '0 0 0 10px'  }}><Link to="#" >Click here</Link> for other resources</Typography>
            <Typography paragraph sx={{ fontSize: 12, margin: '0 0 0 10px'  }}><Link to="#" >Click here</Link> to see how you can contribute</Typography>
        </>
    )
}

export default Step1