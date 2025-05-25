import Box from '@mui/material/Box'

function BoardContent() {
  return (
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
  )
}

export default BoardContent
