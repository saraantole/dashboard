import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const Step2 = ({ form, setForm }) => {
    return (
        <>
            <Typography component="h1" variant="h5" align='center'>Choose your role</Typography>
            <Box component="form" onSubmit={() => null} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="text"
                    label="DISCORD OR NAME"
                    name="text"
                    autoComplete="text"
                    placeholder='vitalik#3443'
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <FormControl fullWidth>
                    <InputLabel id="role">I AM A...</InputLabel>
                    <Select
                        labelId="role"
                        id="role"
                        value={form.role || ''}
                        onChange={e => setForm({ ...form, role: e.target.value })}
                    >
                        <MenuItem value='Developer'>Developer</MenuItem>
                        <MenuItem value='Marketer'>Marketer</MenuItem>
                        <MenuItem value='Biz Dev'>Biz Dev</MenuItem>
                        <MenuItem value='Lurker'>Lurker</MenuItem>
                        <MenuItem value='Designer'>Designer</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    margin="normal"
                    fullWidth
                    id="text"
                    label="I AM DOING..."
                    name="text"
                    autoComplete="text"
                    placeholder='Working on a project'
                    onChange={e => setForm({ ...form, activity: e.target.value })}
                />
            </Box>
        </>
    )
}

export default Step2