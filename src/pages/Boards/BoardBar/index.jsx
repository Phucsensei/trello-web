import Box from '@mui/material/Box'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const Board_style = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: theme => theme.trello.boardBarHeight,
        justifyContent: 'space-between',
        overflowX: 'auto',
        gap: 2,
        borderBottom: '1px solid white',
        paddingX: '16px',
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Chip sx={Board_style} icon={<SpaceDashboardIcon />} label="ChiPhucDev" clickable />
        <Chip sx={Board_style} icon={<VpnLockIcon />} label="Public/Private Workspaces" clickable />
        <Chip sx={Board_style} icon={<AddToDriveIcon />} label="Add to Google Drive" clickable />
        <Chip sx={Board_style} icon={<BoltIcon />} label="Automation" clickable />
        <Chip sx={Board_style} icon={<FilterListIcon />} label="Filter" clickable />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
          max={6}
        >
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
          <Tooltip title="TranChiPhuc">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/486039186_1029034495752989_3052485726274769344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bdG_5_Ds3vYQ7kNvwEcdzQi&_nc_oc=AdlzmUinVmqCBz-vqtFg2f6qEBHbb2sUYxhIBqSLJkdTQLgkTmvlDiJbfwomzrYAdstw4OdWNdtpFA1u69W_teHO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&oh=03_Q7cD2QEi2g33NLGzufkYjW6iqPc3WgVC_WTTXInnaMJlzpGcwA&oe=685C471B"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
