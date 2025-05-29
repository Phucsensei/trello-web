import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Check from '@mui/icons-material/Check'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Started() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button
        sx={{ color: 'white' }}
        id="basic-button-started"
        aria-controls={open ? 'basic-menu-started' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Started
      </Button>
      <Menu
        id="basic-menu-started"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-started'
        }}
      >
        <MenuItem>
          <ListItemText onClick={handleClose} inset>
            Single
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={handleClose} inset>
            1.15
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={handleClose} inset>
            Double
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon onClick={handleClose}>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={handleClose}>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={handleClose}>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={handleClose}>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Started
