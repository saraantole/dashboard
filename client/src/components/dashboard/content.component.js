import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import { getAllMembers } from '../../api'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000
const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

const getTimeAgo = timestring => {
  const timestamp = new Date(timestring).getTime()
  const rtf = new Intl.RelativeTimeFormat()

  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUnitAndValueDate(secondsElapsed)
  return rtf.format(value, unit)
}

const chooseColor = role => {
  switch (role) {
    case 'Developer':
      return 'red'
    case 'Designer':
      return 'blue'
    case 'Biz Dev':
      return 'yellow'
    case 'Marketer':
      return 'pink'
    case 'Lurker':
      return 'green'
  }
}

export default function Content() {
  const [data, setData] = useState(undefined)

  useEffect(() => {
    const getMembers = async () => {
      try {
        const members = await getAllMembers()
        setData(members.data.data)
      } catch (e) {
        console.log(e)
        setData(null)
      }
    }

    getMembers()
  }, [])

  return (
    <Paper sx={{ width: '100%', margin: 'auto', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
        <Typography component="h2" variant="h6" sx={{ padding: '20px', fontWeight: 600 }}>All members</Typography>
        <Table aria-label="table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontWeight: 600, opacity: '50%' }}>Member details</TableCell>
              <TableCell sx={{ fontWeight: 600, opacity: '50%' }}>Discord name</TableCell>
              <TableCell sx={{ fontWeight: 600, opacity: '50%' }}>Date joined</TableCell>
              <TableCell sx={{ fontWeight: 600, opacity: '50%' }}>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? data.map((member, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Stack direction="row" spacing={2}>
                    <Avatar alt={member.name} src={member.image} />
                    <Stack>
                      {member.activity && <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{member.activity}</Typography>}
                      <Typography variant="body2">Updated {getTimeAgo(member.updatedAt)}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {new Date(member.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </Typography>
                  <Typography variant="body2">
                    {new Date(member.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </TableCell>
                <TableCell><Chip label={member.role} size='medium' sx={{ backgroundColor: () => chooseColor(member.role), color: 'white', textTransform: 'uppercase', fontWeight: 600 }} /></TableCell>
              </TableRow>
            ))
              :
              <Typography component="h2" variant="h6" sx={{ padding: '20px', fontWeight: 600 }}>No members yet.</Typography>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}