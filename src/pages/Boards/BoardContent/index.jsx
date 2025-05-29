import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: theme => `calc(100vh - ${theme.trello.appBarheight} - ${theme.trello.boardBarHeight})`
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
