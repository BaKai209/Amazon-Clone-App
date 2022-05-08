import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { LinkRedirect, MarkPrice } from '../styles/StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionProductos';
import { selectedModal } from '../redux/actions/actionModal';


const Galeria = ({categoria}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { products } = useSelector(store => store.products);
    console.log(products);

    const filtrado = products.filter(item => item.categoria === categoria);

    const enviarDatosModal = (codigo) => {
        dispatch(selectedModal(codigo));
    }
    
    useEffect(() => {
      dispatch(listAsync());
    }, []);

  return (
    <div className={classes.root}>
        {
            filtrado.map((card, index) => (
        <div key={index} className={classes.gallery__box}>
            <img onClick={() => enviarDatosModal(card)} 
            className={classes.gallery__image} src={card.foto1} />
            <LinkRedirect to='/'>{card.nombre}</LinkRedirect>
            <MarkPrice>${card.precio}</MarkPrice>
        </div>
            ))
        }

        
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        gap: theme.spacing(8),
        overflowX: 'scroll'
    },
    gallery__box: {
        minWidth: '240px', 
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    gallery__image: {
        width: '100%',
        minHeight: '320px',
        maxHeight: '320px',
        objectFit: 'content',
        cursor: 'pointer'
        
    }
}));

export default Galeria