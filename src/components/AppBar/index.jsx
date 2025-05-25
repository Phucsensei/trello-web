import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'

function AppBar() {
  return (
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
  )
}

export default AppBar
