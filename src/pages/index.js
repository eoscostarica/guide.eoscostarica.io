import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import '../css/homepage.css';

const MetaData={
  title:"EOS Costa Rica Developers Guide",
  description:"Welcome to our open-source developers portal. Begin your journey to learn about blockchain technology and all the stuff that makes it possible.",
  img:"../static/img/metaImage.png",
  hrefLangPath: "https://guide.eoscostarica.io/"
}

const lightTheme = makeStyles({

  heroButton:{
    width: 131,
    height: 50,
    fontFamily: "PT Sans",
    fontSize: 14.8,
    border: 'none',
    lineHeight: 1.8,
    letterSpacing:1.25,
    margin:"auto",
    backgroundColor:"#3EBBD3",
  },
  card:{
    backgroundColor: '#FFFFFF'
  },
  cardmedia:{
    height: 194
  },
  imgcard:{
    display:'block',
    width:150,
    margin: 'auto',
  },
  overline:{
    fontFamily: "PT Sans",
    fontSize: 12.7,
  },
  title: {
    fontFamily: "PT Sans",
    fontSize: 21.1,
    fontWeight: "bold",
  },
  body: {
    fontFamily: "Open Sans",
    fontSize: 13.8,
  },
  button:{
    fontFamily: "PT Sans",
    fontSize: 14.8,
    border: 'none',
    lineHeight: 1.8,
    letterSpacing:1.25,
    margin:"auto"
  },
  media: {
    objectFit: "cover",
    objectPosition:"bottom",
    height: 140,
  }
});

const DarkTheme = makeStyles({
heroButton:{
  width: 131,
  height: 50,
  fontFamily: "PT Sans",
  fontSize: 14.8,
  border: 'none',
  lineHeight: 1.8,
  letterSpacing:1.25,
  margin:"auto"
},
card:{
    backgroundColor: '#242526'
  },
  cardmedia:{
    height: 194
  },
  imgcard:{
    display:'block',
    width:150,
    margin: 'auto',
    filter:  'brightness(0) invert(1)',
  },
  overline:{
    fontFamily: "PT Sans",
    fontSize: 12.7,
    color: '#E9E9E9'
  },
  title: {
    fontFamily: "PT Sans",
    fontSize: 21.1,
    fontWeight: "bold",
    color: '#E9E9E9'
  },
  body: {
    fontFamily: "Open Sans",
    fontSize: 13.8,
    color: '#E9E9E9'
  },
  button:{
    fontFamily: "PT Sans",
    fontSize: 14.8,
    border: 'none',
    lineHeight: 1.8,
    letterSpacing:1.25,
    margin:"auto",
    color: '#E9E9E9'
  },
  media: {
    height: 140,
  }
});

const HeroSection  = () => {
  const images = ["https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/cards-icons/heroe.png"];
  const background = images[Math.floor(Math.random() * images.length)];
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;

  if(!isDarkTheme){
     classes = lightTheme();
  }else{
     classes = DarkTheme();
  }
  return(  
    <div className=" hero-header">
      <img className="hero-img" src={background} ></img>
      <div className="hero-content">
        <div className="title-container">
          <h1 className="EOS-Costa-Rica-Devel text-style-1 ">EOS Costa Rica</h1>
          <h1 className="EOS-Costa-Rica-Devel">Developers Guide</h1>
        </div>
        <div className="intro-container">
          <p className="intro-text">Welcome to our open-source developers portal. Begin your journey to learn about blockchain technology and all the stuff that makes it possible.</p>
        </div>
        <div className="buttons-intro-container">
          <Button className={classes.heroButton} href="/docs/engineering-culture">GET STARTED</Button> 
        </div>
      </div>
    </div>
  );
}

const CustomCard = (props) => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;

  if(!isDarkTheme){
     classes = lightTheme();
  }else{
     classes = DarkTheme();
  }
  
  return (
    <Card className="cardroot" className={classes.card} variant="outlined">
      <div className="card-img-container"> 
        <img src={props.img} className={classes.imgcard}></img>
      </div>
      <CardContent>
        <Typography className={classes.overline} gutterBottom>SECTION</Typography>
        <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{props.title}</Typography>
        <Typography className={classes.body} variant="body2" component="p">{props.body}</Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} href={props.href} >Read More</Button>    
      </CardActions>
  </Card>
  );
}

const CardsSection = () => {

  return (
    <div className="container section-container">
      <h1 className="section-title">Get started with these resources</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard
          title="Developer Guidelines"
          body= "Guides for developers on how to program in open source."
          href= "/docs/open-source-guidelines"
          img="https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/cards-icons/guidelines.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard
          title="Learn EOSIO"
          body= "Set of information necessary to learn about the EOSIO protocol."
          href= "/docs/eos-learn/eosio-protocol"
          img="https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/1d17451528083fef3efe62f603f895d972e47efa/static/img/cards-icons/icons-eosio.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard
          title="Tutorials"
          body= "Support information needed to perform the installation and execution of processes."
          href= "docs/tutorials/getting-started"
          img="https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/cards-icons/tutorials.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Tools"
          body= "Set of useful tools during the learning process."
          href= "docs/tools/glossary"
          img="https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/cards-icons/tools.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Community"
          body= "Links to EOS community sites of interest."
          href= "docs/community-resources/telegram-channels"
          img="https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/cards-icons/community.svg"></CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomCard 
          title="Open source projects"
          body= "List of open source projects that we carry out."
          href= "docs/open-source-projects"
          img="https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/09d2e8422c246a3f0d8481ee3185cd0683e280d6/static/img/cards-icons/icons-opensource.svg"></CustomCard>
      </Grid>
    </Grid>
    </div>    
  );
}

const CustomArticle= (props) =>{
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;
  
  if(!isDarkTheme){
     classes = lightTheme();
  }
  else{
     classes = DarkTheme();
  }

  return (
    <Card className="cardroot" className={classes.card} variant="outlined">
      <CardMedia
          className={classes.media}
          image={props.img}
        />
      <CardContent>
        <Typography className={classes.overline} gutterBottom>ARTICLES</Typography>
        <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{props.title}</Typography>
        <Typography className={classes.body} variant="body2" component="p">{props.body}</Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} href={props.href} >Read More</Button>    
      </CardActions>
  </Card>
  );
}

const MediumSection = () => {

  return (
    <div className="container section-container">
       <h1 className="section-title">Read our blog posts</h1>
       <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
      <Grid item xs={12} sm={12} md={4}>
        <CustomArticle 
          title="Get to Know EOS Costa Rica"
          body= "Learn more about our history, team and projects we carry out."
          href= "https://medium.com/@eoscostarica/get-to-know-eos-costa-rica-f91f5b0bb7c4"
          img="https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png"></CustomArticle>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomArticle 
          title="You Should Participate in an Open-Source Project"
          body= "We show some important aspects for which it should be dealt with in open source projects."
          href= "https://medium.com/@eoscostarica/you-should-participate-in-an-open-source-project-c259f8759d41"
          img="https://miro.medium.com/max/875/1*_eTme4t7HJfE7aeeyd3kxQ.jpeg"></CustomArticle>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CustomArticle 
          title="What Is Blockchain?"
          body= "We explain, with examples, what a blockchain is and how it works."
          href= "https://medium.com/@eoscostarica/what-is-blockchain-an-introduction-9535ed3e6005"
          img="https://miro.medium.com/max/875/1*ohmD1qq4dAUOu4G-gXtaqA.jpeg"></CustomArticle>
      </Grid>
    </Grid>
    </div>
  );
}

const HomePage = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}>
      <HeroSection></HeroSection>
      <CardsSection></CardsSection>
      <MediumSection></MediumSection>
    </Layout>
  );
  
};

export default HomePage;
