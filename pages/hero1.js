import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Drawer, Collapse, IconButton } from '@material-ui/core';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const Hero = () => {
 

  return (
    
        <section className={styles.hero} id="home">
          <div className={styles.container}>
            <div className={styles.heroContent}>
            <Typography variant="h1" gutterBottom>
              Find Your Dream House By Us
            </Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <Button variant="contained" color="primary">
              Make An Enquiry
            </Button>
            </div>
          <figure className={styles.heroBanner}>
            <img src="./home.png" alt="Modern house model" sx={{width:80}} className={styles.w100}/>
          </figure>
          </div>
        </section>
       
   
  );
};

export default Hero;