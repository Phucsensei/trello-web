import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = event => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="lable-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>

        <MenuItem value="dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeIcon fontSize="small" /> Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: theme => theme.trello.appBarheight
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: theme => theme.trello.boardBarHeight
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: theme => `calc(100vh - ${theme.trello.appBarheight} - ${theme.trello.boardBarHeight})`
        }}
      >
        Board Content
      </Box>
    </Container>
  )
}

export default App
