import { Container, Grid, TextField, Divider } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Home.module.css'

export default function Home() {
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
            <Image src="/menu.png" alt="Menu Button" width={36} height={36} />
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
                  <TextField id='Search' size='small' fullWidth label='search' variant='outlined' className={styles.searchbar}/>
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
        


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
