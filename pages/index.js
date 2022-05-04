import { Container, Grid, TextField, Divider } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Home.module.css'
import {ItemBox} from '../components/item'
import { styled } from '@mui/material/styles';
import Drawer from 'react-modern-drawer'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'lightgrey',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'lightgrey',
    },
  },
});

const Home = () => {


  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SE Final Exxam</title>
        <meta name="description" content="Software Engineering Final Exam Part 2 Front-end" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fixed className={styles.navbar} >
        <Grid container spacing={5} direction="row" alignItems="center" >

          <Grid item className={styles.navItem}>
            <Image src="/menu.png" alt="Shop Logo" width={36} height={36} />
          </Grid>

          <Grid item className={styles.navItem}>
            <Image src="/shop.png" alt="Shop Logo" width={72} height={72} />
          </Grid>

          <Grid item className={styles.navItem}>
            <p>Online Store</p>
          </Grid>

          <Grid item xs={6} className={styles.navItem}>
            <Container>
              <Grid container spacing={1} direction="row" alignItems="center" >
                <Grid item xs={6}>
                  <CssTextField size='small' label="Search for products" id="custom-css-outlined-input" />
                </Grid>
                <Grid item>
                  <Image src="/search.png" alt="Menu Button" width={36} height={36} />
                </Grid>
              </Grid>
            </Container>
          </Grid>

          <Grid item align="right" className={styles.navItem}>

            <Container>
              <Grid container spacing={1} direction="row" alignItems="center" >
                <Grid item>
                <Image src="/person.png" alt="Shop Logo" width={50} height={50} />
                </Grid>
                <Grid item>
                  <p>Login / Register</p>
                </Grid>
              </Grid>
            </Container>
            
          </Grid>

        </Grid>
        
      </Container>

      <br></br>

      <Divider sx={{ borderBottomWidth: 5 }} />

      <br></br>

      <main className={styles.main}>
        <h1 className={styles.title}>
          
        </h1>

        <br />

        <div className={styles.carouselDiv}>
          <Carousel infiniteLoop autoPlay interval={3000} className={styles.carousel}>
            <div>
              <Image src="/sc1.png" alt="Shop Logo" width={413} height={295} />
            </div>
            <div>
              <Image src="/sc2.png" alt="Shop Logo" width={413} height={295} />
            </div>
            <div>
              <Image src="/sc3.png" alt="Shop Logo" width={413} height={295} />
            </div>
          </Carousel>
        </div>
        
        <Divider sx={{ borderBottomWidth: 5 }} />

        <Container>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <ItemBox />
          </Grid>
          <Grid item xs={6}>
            <ItemBox />
          </Grid>
          <Grid item xs={6}>
            <ItemBox />
          </Grid>
          <Grid item xs={6}>
            <ItemBox />
          </Grid>
          <Grid item xs={6}>
            <ItemBox />
          </Grid>
          <Grid item xs={6}>
            <ItemBox />
          </Grid>
        </Grid>

        </Container>

        <br />
        <br />
        <br />

      </main>
    </div>
  )
}

export default Home;