// import styles from '../styles/Hero.module.css';
import React, { useState } from 'react';
import { Container, Typography, Button, Image, Grid,Dialog,DialogTitle,DialogContent,DialogActions,TextField } from '@material-ui/core';




const Hero = () => {
//   return (
 
   
//     <div className={styles.container}>
//     <section className={styles.hero} id="home">
//         <div className={styles.container}>

//           <div className={styles.heroContent}>

//             <p className={styles.heroSubtitle}>
//               <ion-icon name="home"></ion-icon>

//               <span>Real Estate Agency</span>
//             </p>

//             <h2 className={styles.heroTitle}>Find Your Dream House By Us</h2>

//             <p className={styles.heroText}>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
//             </p>

//             <button className={styles.btn}>Make An Enquiry</button>

//           </div>

//           <figure className={styles.heroBanner}>
//             <img src="./home.png" alt="Modern house model" className={styles.w100}/>
//           </figure>

//         </div>
//       </section>


    

//       <style jsx>{`
//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         footer img {
//           margin-left: 0.5rem;
//         }
//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           text-decoration: none;
//           color: inherit;
//         }
//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: sans-serif ;
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: sans-serif ;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
 
//   )

return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Find Your Dream House By Us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Make An Enquiry
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="./home.png" alt="Modern house model" />
        </Grid>
      </Grid>
   
      
    </Container>
  );
}
export default Hero;
