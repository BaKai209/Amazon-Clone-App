import React, { useEffect, useState } from 'react';

//Material UI
import { makeStyles } from '@material-ui/core';
import { getAuth } from 'firebase/auth';
import Subtotal from '../components/Subtotal';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';

const Checkout = () => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const { cart } = useSelector(store => store.cart);

    useEffect(() => {
      const auth = getAuth().currentUser;
      setUser(auth);
    }, [])
    

  return (
    <div className={classes.root}>
        <div className={classes.checkout__left}>
            <img 
            className={classes.checkout__ad}
            src='https://img.freepik.com/psd-gratis/plantilla-banner-curso-control-vuelo-drones-fondo-oscuro_444361-57.jpg'
            alt='Banner'
            />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your shopping Cart</h2>

                {
                  cart.map((item, index) => (
                    <CheckoutProduct 
                    key={index}
                    id={index}
                    nombre={item.nombre}
                    image={item.foto1}
                    precio={item.precio}
                    />
                  ))
                }
            
            </div>
        </div>
      <div className={classes.checkout__right}>
      <Subtotal />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: theme.spacing(2),
      backgroundColor: 'white',
      height: 'max-content'
    },
    checkout__ad: {
      width: '100%',
      marginBottom: '10px',
    },
    checkout__title: {
      marginRight: theme.spacing(1),
      padding: theme.spacing(1),
      borderBottom: '1px solid lightgray'
    },
    checkout__right: {
      marginLeft: '1rem'
    }
}))

export default Checkout;