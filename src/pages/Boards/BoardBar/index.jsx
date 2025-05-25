import Box from '@mui/material/Box'

function BoardBar() {
  return (
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
  )
}

export default BoardBar
