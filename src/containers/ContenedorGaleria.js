import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Gallery from '../components/Gallery';


const ContenedorGaleria = () => {
    const classes = useStyles();
    
  return (
    <div className={classes.root}>
        <div>
        <Typography className={classes.root__title} variant='h5'>Productos relacionados con este artículo</Typography>
        <Galeria categoria='camaras' />
        </div>
        <div>
        <Typography className={classes.root__title} variant='h5'>Inspirado por tu historial de búsqueda</Typography>
        <Galeria categoria='juegos' />
        </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '94%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8)
    },
    root__title: {
        marginBottom: theme.spacing(4)
    }
}))

export default ContenedorGaleria