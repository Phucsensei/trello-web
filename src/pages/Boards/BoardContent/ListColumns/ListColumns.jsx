import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  /** Thằng SortableContext yêu cầu items là 1 mảng dạng ['id-1', 'id-2', 'id-3'] chứ không phải [{id: 'id-1'}, {id: 'id-2'}, {id: 'id-3'}]
  Nếu không đúng thì vẫn có thể kéo thả được, nhưng nó sẽ không có animation
  https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512
*/

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        {columns?.map(column => (
          <Column key={column?._id} column={column} />
        ))}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 4, py: 1 }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
