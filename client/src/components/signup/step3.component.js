import { Box, Typography, CardContent, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { useState } from 'react'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const inOneWeek = new Date(tomorrow)
inOneWeek.setDate(inOneWeek.getDate() + 7)

const inTwoWeeks = new Date(tomorrow)
inTwoWeeks.setDate(inTwoWeeks.getDate() + 14)

const inThreeWeeks = new Date(tomorrow)
inThreeWeeks.setDate(inThreeWeeks.getDate() + 21)

const Step3 = () => {
    const [call, setCall] = useState('')
    const formatDate = date => {
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }

    return (
        <CardContent>
            <Typography component="h1" variant="h5">Attend an onboarding call</Typography>
            <Box component="form" onSubmit={() => null} noValidate sx={{ mt: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="call">ATTEND AN UPCOMING ONBOARDING CALL</InputLabel>
                    <Select
                        labelId="call"
                        id="call"
                        label="Call"
                        value={call}
                        onChange={e => setCall(e.target.value)} 
                    >
                        <MenuItem value={tomorrow}>{formatDate(tomorrow)}</MenuItem>
                        <MenuItem value={inOneWeek}>{formatDate(inOneWeek)}</MenuItem>
                        <MenuItem value={inTwoWeeks}>{formatDate(inTwoWeeks)}</MenuItem>
                        <MenuItem value={inThreeWeeks}>{formatDate(inThreeWeeks)}</MenuItem>
                    </Select>
                </FormControl>
                <Box display='flex' justifyContent='flex-end'>
                    <Button variant="text" sx={{ textTransform: 'none', color: 'black', fontWeight: 600, fontSize: '12px' }} endIcon={<GoogleIcon />}>Add to Calendar</Button>
                </Box>
            </Box>
        </CardContent>
    )
}

export default Step3