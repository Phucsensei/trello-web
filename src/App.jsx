import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
      <div>ChiPhucDev</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" color="text.secondary">
        Hello World
      </Typography>

      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
