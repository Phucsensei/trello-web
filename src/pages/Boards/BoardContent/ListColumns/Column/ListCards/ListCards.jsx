import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: theme => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${theme.trello.columnHeaderHeight} -
            ${theme.trello.columnfooterheight}
)`,
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#dfc2cf' }
      }}
    >
      {cards.map(card => (
        <Card key={card?._id} card={card} />
      ))}
    </Box>
  )
}

export default ListCards
