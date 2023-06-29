import React, { useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Flex, Box } from "reflexbox";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import { CheckCircleOutlineOutlined, LocalOfferOutlined } from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import FreeQuotes from "../FreeQuotes/FreeQuotes";
import gear from "../../images/gear.jpg";
import kGif from "../../images/k.gif";
// import { TalkTo } from "talkto-sdk";
import cyber from "../../images/eye.jpg";
import devops from "../../images/devops.jpg";
import goldeneye from "../../images/cyber.jpg";
import Service from "../Service/Service";
import AboutPage from "../About/About";

const Home = ({ services, quotes, capabilities, history }) => {
  
  useEffect(() => {
    if (services) {
      window.scrollTo(0, 700);
    }
    if (quotes) {
      window.scrollTo(0, 2300);
    }
    if (capabilities) {
      window.scrollTo(0, 3000);
    }
  }, [services, quotes, capabilities]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.talkjs.com/talk.js';
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const useStyles = makeStyles(theme => ({
    capabilitiesTitle: {
      marginBottom: theme.spacing(2),
      color: "#4a90e2", // Blue title color
      fontWeight: "bold",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }));

 
  const classes = useStyles();
function Item(props) {
  return (
    <div className="item-container">
      <div className="gif-background" style={{ backgroundImage: `url(${kGif})` }} />
      <Paper className="content">{props.item}</Paper>
    </div>
  );
}
  

  var items = [];
  items.push(
    <Flex
      flexDirection={['column', 'row']}
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "white" }}
    >
      <Box width={[1, 1 / 2]} p={2} style={{ marginTop: "50px" }}>
        <div className={classes.paper}>
          <div
            style={{
              marginTop: "100px",
              width: "100%",
              fontSize: "30px",
              fontFamily: "Hoefler Text",
              opacity: 1,
              textAlign: "center",
            }}
          >
              <Typography variant="h3" className={classes.capabilitiesTitle} gutterBottom>
              Guard your digital fortress with ironclad certainty.
            </Typography>
            
          </div>
        </div>
      </Box>
      <Box width={[1, 1 / 2]} p={2} tyle={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
        <img
          src={goldeneye}
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "600px",
            borderRadius: "50%",
            verticalAlign: "bottom",
          }}
          alt={goldeneye}
        />
      </Box>
    </Flex>
  );
  items.push(
    <Flex
      flexDirection={['column', 'row']}
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "white" }}
    >
      <Box width={[1, 1 / 2]} p={2} style={{ marginTop: "50px" }}>
        <div className={classes.paper}>
          <div
            style={{
              marginTop: "100px",
              width: "100%",
              fontSize: "30px",
              fontFamily: "Hoefler Text",
              opacity: 1,
              textAlign: "center",
            }}
          >
           
            <Typography variant="h3" className={classes.capabilitiesTitle} gutterBottom>
            Unleash the power of Web3 and pave the path to decentralized prosperity!
            </Typography>
          </div>
        </div>
      </Box>
      <Box
        width={[1, 1 / 2]}
        p={2}
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <img
          src={cyber}
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "600px",
            borderRadius: "50%",
            verticalAlign: "bottom",
          }}
          alt={cyber}
        />
      </Box>
    </Flex>
  );
  items.push(
    <Flex
      flexDirection={['column', 'row']}
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "white" }}
    >
      <Box width={[1, 1 / 2]} p={2} style={{ marginTop: "50px" }}>
        <div className={classes.paper}>
          <div
            style={{
              marginTop: "100px",
              width: "100%",
              fontSize: "30px",
              fontFamily: "Hoefler Text",
              opacity: 1,
              textAlign: "center",
            }}
          >
              <Typography variant="h3" className={classes.capabilitiesTitle} gutterBottom>
              Streamline your development journey with Azure DevOps
            </Typography>
            
          </div>
        </div>
      </Box>
      <Box
        width={[1, 1 / 2]}
        p={2}
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <img
          src={devops}
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "600px",
            borderRadius: "50%",
            verticalAlign: "bottom",
          }}
          alt={devops}
        />
      </Box>
    </Flex>
  );
  
  const generateMotto = () => {
    // Generate a random motto for the company
    const mottos = [
      "Driving Innovation through Technology",
      "Simplifying Your Digital Journey",
      "Enhancing Connectivity for a Smarter World",
      "Unlocking the Potential of Digital Transformation",
      "Empowering Organizations with Intelligent Solutions",
      "Creating a Secure and Agile IT Environment",
      "Building Trust in a Digital World",
      "Transforming Businesses with Cutting-Edge Technology",
      "Enabling Seamless Collaboration and Productivity",
      "Optimizing IT Operations for Efficiency and Scalability",
      "Empowering Growth through Strategic IT Solutions",
    ];
    
    const randomIndex = Math.floor(Math.random() * mottos.length);
    return mottos[randomIndex];
  };

  const mottos = [generateMotto(), generateMotto(), generateMotto(), generateMotto(), generateMotto()];
  return (
    <div style={{ "backgroundColor": "aliceblue" }}>

<Container>
      <Box py={4}>
  
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          {mottos.map((motto, index) => (
            <div key={index}>
              <Typography variant="h5" className={classes.capabilitiesTitle} gutterBottom>
                {motto}
              </Typography>
            </div>
          ))}
        </Carousel>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Box display="flex" alignItems="center">
              <CheckCircleOutlineOutlined color="primary" />
              <Typography variant="h6" className="feature-text" style={{ marginleft: "8px" }}>
                ISO 27001 Certified
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <LocalOfferOutlined color="primary" />
              <Typography variant="h6" className="feature-text" style={{ marginleft: "8px" }}>
                Advanced NSW Supplier(SCM20)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>

      <div className="carousel-container">
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {items.map((item, i) => (
          <div key={i} className="carousel-item">
            <div className="carousel-item-content">
              <Item item={item} />
            </div>
            {/* <div className="gif-background" style={{ backgroundImage: `url(${kGif})` }} /> */}
          </div>
        ))}
      </Carousel>
    </div>
   
      <Box style={{ "backgroundColor": "aliceblue" }}>
        <div className={classes.paper} style={{ "marginTop": "30px" }}>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "#014F86",
              "fontWeight": "700",
              "marginTop": "10px"
            }}
          >
            Services
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "blue",
              "fontWeight": "700"
            }}
          >
            -&nbsp;-&nbsp;
            <img
              src={gear}
              style={{
                height: "20px",
                "verticalAlign": "text-bottom"
              }}
              alt={gear}
            />
            &nbsp;-&nbsp;-
          </Typography>
        </div>
         <Box style={{ "backgroundColor": "aliceblue" }}>
              <Service></Service>
         </Box>
      </Box>

      <Box style={{ "backgroundColor": "aliceblue" }}>
        <div className={classes.paper} style={{ "marginTop": "30px" }}>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "#014F86",
              "fontWeight": "700",
              "marginTop": "10px"
            }}
          >
            Capabilities
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "blue",
              "fontWeight": "700"
            }}
          >
            -&nbsp;-&nbsp;
            <img
              src={gear}
              style={{
                height: "20px",
                "verticalAlign": "text-bottom"
              }}
              alt={gear}
            />
            &nbsp;-&nbsp;-
          </Typography>
        </div>
         <Box style={{ "backgroundColor": "aliceblue" }}>
              <AboutPage/> 
         </Box>
      </Box>
      <Container
        component="main"
        width="100%"
        style={{ "backgroundColor": "aliceblue" }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "#014F86",
              "fontWeight": "700",
              "marginTop": "10px"
            }}
          >
            Contact Us
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "blue",
              "fontWeight": "700"
            }}
          >
            -&nbsp;-&nbsp;
            <img
              src={gear}
              style={{
                height: "20px",
                "verticalAlign": "text-bottom"
              }}
              alt={gear}
            />
            &nbsp;-&nbsp;-
          </Typography>
        </div>
        <Grid container spacing={2} style={{ "backgroundColor": "aliceblue" }}>
        <Grid
            item
            xs={12}
            sm={6}
            style={{ height: "600px", "marginTop": "50px" }}
          >
            <FreeQuotes home history={history} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ height: "600px", marginTop: "52px" }}
          >
            <Grid style={{ height: "30%" }}>
              <Box marginleft="3%">
                <div className={classes.paper} style={{ marginTop: "0px" }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    style={{
                      color: "#014F86",
                      "textDecoration": "underline"
                    }}
                  >
                    {" "}
                    Address{" "}
                  </Typography>
                </div>
                <p> 48 - Sydney Road, Manly, NSW,sydney, 2095 </p>
              </Box>
              <Box marginleft="3%" marginBottom="10px">
                <div>
                  <CallIcon></CallIcon> &nbsp;+61 416283705
                </div>
                <div>
                  <MailIcon></MailIcon> &nbsp;sales@k-solutions.dev
                </div>
              </Box>
            </Grid>
            <Grid style={{ height: "45%" }}>
              <iframe
                height="100%"
                width="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.602418497896!2d151.28370521495546!3d-33.796763780676116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ab08b293817f%3A0xcb25cda4d6cbd56e!2s48%20Sydney%20Rd%2C%20Manly%20NSW%202095%2C%20Australia!5e0!3m2!1sen!2ssg!4v1607757969753!5m2!1sen!2ssg"
                frameBorder="0"
                aria-hidden="false"
                title="maps"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
      </Container>
 
    </div>
  );
};

export default Home;
