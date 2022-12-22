import { Grid, Typography } from '@mui/material'
import { DrawImage } from 'plc-shared/components'

export const Error404 = () => {
  const selectImage = () => {
    const imageList = ['undraw_not_found_1.svg', 'undraw_not_found_2.svg']
    const randomNumber = Math.floor(Math.random() * imageList.length)

    return imageList[randomNumber] ?? 'undraw_not_found_1.svg'
  }

  return (
    <Grid
      container
      direction={'column'}
      wrap={'nowrap'}
      alignItems={'center'}
      justifyContent={'center'}
      style={{
        width: '100%',
        height: '100%',
        margin: 0,
        overflow: 'hidden'
      }}
      rowGap={4}
    >
      <Grid item>
        <Typography color={'primary'} variant={'h5'} align={'center'}>
          Página Não Encontrada
        </Typography>
      </Grid>
      <Grid item>
        <DrawImage style={{ width: '70%', margin: 'auto' }} name={selectImage()} />
      </Grid>
    </Grid>
  )
}
