import { FaPaperPlane } from 'react-icons/fa'
import { Stack, Typography, useTheme } from '@mui/material'

export const AppLogo = () => {
  const { palette } = useTheme()
  return (
    <Stack direction={'row'} alignItems={'center'} columnGap={3}>
      <FaPaperPlane size={30} color={palette.primary.main} />
      <Typography color={'primary'} variant={'h3'} sx={{ fontWeight: 'bold' }}>
        Vagas de TI já!
      </Typography>
    </Stack>
  )
}
