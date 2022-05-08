import React from 'react';
import { makeStyles } from '@material-ui/core';
import DetailContainer from '../containers/DetailContainer';
import GaleryCarrusel from '../containers/GaleryCarrusel';


const Home = () => {

const classes = useStyles()
  return (
    <div className={classes.home}>
      <DetailContainer/>
      <GaleryCarrusel/>
    </div>
  );
};

const useStyles = makeStyles((theme)=>({
  home:{
    width:'100%',
    height:'100vh',
    background:'',

  }
}))

export default Home;