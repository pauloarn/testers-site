import { Avatar, Grid, Menu, MenuItem } from '@mui/material'
import { AppLogo } from '@components/AppLogo'
import CustomButton from 'plc-shared/components/input/CustomButton'
import { useNavigate } from 'plc-shared/router'
import { useUserAuth } from '@hooks/useUserAuth'
import { FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import { useAuth } from '@modules/Autenticacao/AuthProvider'

export const ConsultaHeader = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const { name } = useUserAuth()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onClickSair = () => {
    if (auth.initialized) auth.handleLogout()
  }

  return (
    <Grid container item justifyContent={'space-evenly'} alignItems={`center`}>
      <Grid item>
        <AppLogo />
      </Grid>
      <Grid item>
        <CustomButton
          size={'large'}
          id={'fc6bd602-718f-4fbc-80f6-d769f4047893'}
          variant={'contained'}
          fullWidth
          onClick={() => navigate('/configuracao')}
        >
          Configurar alerta de vagas
        </CustomButton>
      </Grid>
      <Grid item>
        <CustomButton
          id={'02f875f9-f6bd-4b3d-b413-806c549a2811'}
          onClick={handleClick}
          startIcon={<Avatar />}
          endIcon={<FaCaretDown size={15} />}
        >
          {name}
        </CustomButton>
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem onClick={onClickSair}>Sair</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  )
}
