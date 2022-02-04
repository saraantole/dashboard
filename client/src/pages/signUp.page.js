import { Button, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Stepper from '../components/signup/stepper.component'
import { useEffect } from 'react'
import { getMemberById } from '../api'
import { useNavigate } from 'react-router-dom'

const SignUpPage = ({ currentAccount, setCurrentAccount }) => {
    const navigate = useNavigate()

    const connectToWallet = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                alert('Please install Metamask!')
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0])
        } catch (err) {
            if (err.code === 4001) {
                window.location.reload() // to avoid any pending request if the user closed the metamask window before
            }
            console.log(err)
        }
    }

    useEffect(() => {
        const checkIfMemberExists = async () => {
            try {
                await getMemberById(currentAccount)
                navigate( `/dashboard?member=${currentAccount}`)
            } catch (e) {
                console.log(e)
            }
        }

        currentAccount && checkIfMemberExists()
    }, [currentAccount])

    return (
        <>
            {!currentAccount && <Button onClick={async () => connectToWallet()} sx={{ position: 'absolute', right: '10px', top: '10px' }} variant="contained">Connect Wallet</Button>}
            <Card sx={{ width: '50vw', margin: '40px 0', padding: '30px', display: ' flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <Typography sx={{ fontSize: 16, textTransform: 'capitalize', fontWeight: 600 }} variant='overline' color="text.secondary" gutterBottom>Welcome!</Typography>
                <Stepper address={currentAccount} />
            </Card>
        </>
    )
}

export default SignUpPage