import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Step1 from './step1.component'
import Step2 from './step2.component'
import Step3 from './step3.component'
import Welcome from './welcome.component'
import { Typography } from '@mui/material'
import { addNewMember } from '../../api'
import { useNavigate } from 'react-router-dom'

const steps = ['Step1', 'Step2', 'Step3']

export default function StepperComponent({ address }) {
    const [activeStep, setActiveStep] = useState(0)
    const [skipped, setSkipped] = useState(new Set())
    const [form, setForm] = useState({})
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const isStepOptional = step => step === 2

    const isStepSkipped = step => skipped.has(step)

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values())
            newSkipped.add(activeStep)
            return newSkipped
        })
    }

    const handleNext = async () => {
        try {
            const { name, role } = form

            switch (activeStep) {
                case 0:
                    setActiveStep(prevActiveStep => prevActiveStep + 1)
                    break
                case 1:
                    if (!name || !role) {
                        setError('Please fill in this form.')
                        return
                    }

                    if (!address) {
                        setError('Connect your wallet')
                        return
                    }

                    setError(null)
                    await saveNewMember()
                    setActiveStep(prevActiveStep => prevActiveStep + 1)
                    break
                case 2:
                    // TODO: add meeting to platform (eg. Zoom)
                    setActiveStep(prevActiveStep => prevActiveStep + 1)
                    break
                case 3:
                    // TODO: go to Discord community
                    navigate( `/dashboard?member=${address}`)
                    break
            }

            let newSkipped = skipped
            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values())
                newSkipped.delete(activeStep)
            }

            setSkipped(newSkipped)
        } catch (e) {
            console.log(e)
        }

    }

    const saveNewMember = async () => {
        try {
            const { name, role, activity } = form

            await addNewMember({
                name,
                role,
                activity,
                _id: address
            })
        } catch (e) {
            console(e.message)
        }

    }

    return (
        <Box sx={{ width: '100%' }}>
            {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} size='small' sx={{ mr: 1, textTransform: 'none', position: 'absolute', top: '10px', right: '0' }}>
                    Skip and join Discord
                </Button>
            )}

            <Stepper activeStep={activeStep} sx={{ margin: '20px 0' }}>
                {steps.map((label, index) => {
                    const stepProps = {}
                    const labelProps = {}
                    if (isStepSkipped(index)) {
                        stepProps.completed = false
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}></StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <Box sx={{ backgroundColor: 'smokewhite' }} height={300}>
                {activeStep === 0 && <Step1 />}
                {activeStep === 1 && <Step2 form={form} setForm={setForm} />}
                {activeStep === 2 && <Step3 />}
                {activeStep === steps.length && <Welcome />}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button sx={{textTransform: 'none'}} onClick={handleNext} variant="contained" fullWidth>
                    {activeStep === steps.length ? 'Get in there!' : 'Next'}
                </Button>
            </Box>
            {error && <Typography color='error' variant='subtitle1'>{error}</Typography>}
        </Box>
    )
}