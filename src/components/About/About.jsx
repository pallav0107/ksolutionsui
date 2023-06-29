import React from "react";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  SiAmazonaws,
  SiCisco,
  SiFortinet,
  SiVmware,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiPython,
} from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#f5f5f5", // Light gray background color
    borderRadius: "8px",
  },
  addressContainer: {
    marginBottom: theme.spacing(4),
    color: "#272727", // Dark text color
  },
  mapContainer: {
    position: "relative",
    height: "400px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  mapIframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  capabilitiesContainer: {
    marginBottom: theme.spacing(4),
  },
  capabilitiesTitle: {
    marginBottom: theme.spacing(2),
    color: "#4a90e2", // Blue title color
    fontWeight: "bold",
  },
  capabilitiesList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  capabilitiesItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    color: "#272727", // Dark text color
  },
  capabilitiesIcon: {
    marginRight: theme.spacing(1),
    color: "#4a90e2", // Blue icon color
    fontSize: "1.5rem",
  },
  extendedCapabilitiesContainer: {
    marginTop: theme.spacing(4),
  },
  extendedCapabilitiesTitle: {
    marginBottom: theme.spacing(2),
    color: "#4a90e2", // Blue title color
    fontWeight: "bold",
  },
  extendedCapabilitiesList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  extendedCapabilitiesItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    color: "#272727", // Dark text color
  },
  extendedCapabilitiesIcon: {
    marginRight: theme.spacing(1),
    color: "#4a90e2", // Blue icon color
    fontSize: "1.5rem",
  },
}));
 

const AboutPage = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.aboutContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className={classes.capabilitiesContainer}>
            <Typography variant="h5" className={classes.capabilitiesTitle} gutterBottom>
              Our Capabilities
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#272727" }}>
              At our company, we excel in providing comprehensive solutions in the following areas:
            </Typography>
            <ul className={classes.capabilitiesList}>
              <li className={classes.capabilitiesItem}>
                <span className={classes.capabilitiesIcon}>
                  <SiAmazonaws />
                </span>
                AWS (Amazon Web Services)
              </li>
              <li className={classes.capabilitiesItem}>
                <span className={classes.capabilitiesIcon}>
                  <SiCisco />
                </span>
                Cisco Networking Solutions
              </li>
              <li className={classes.capabilitiesItem}>
                <span className={classes.capabilitiesIcon}>
                  <SiFortinet />
                </span>
                Fortinet Security Solutions
              </li>
              <li className={classes.capabilitiesItem}>
                <span className={classes.capabilitiesIcon}>
                  <SiVmware />
                </span>
                Virtualization
              </li>
              <li className={classes.capabilitiesItem}>
                <span className={classes.capabilitiesIcon}>
                  <SiGooglecloud />
                </span>
                GCP (Google Cloud Platform)
              </li>
              <li className={classes.capabilitiesItem}>
                <span className={classes.capabilitiesIcon}>
                  <SiMicrosoftazure />
                </span>
                Azure Cloud Services
              </li>
            </ul>
            <Typography variant="body1" style={{ color: "#272727" }}>
              Our team of experts is skilled and experienced in leveraging these technologies to empower
              businesses and drive digital transformation.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.extendedCapabilitiesContainer}>
      
            <Typography variant="body1" gutterBottom style={{ color: "#272727" }}>
              In addition to our core capabilities, we offer expertise in the following areas:
            </Typography>
            <ul className={classes.extendedCapabilitiesList}>
              <li className={classes.extendedCapabilitiesItem}>
                <span className={classes.extendedCapabilitiesIcon}>
                  <SiDocker />
                </span>
                Docker Containers
              </li>
              <li className={classes.extendedCapabilitiesItem}>
                <span className={classes.extendedCapabilitiesIcon}>
                  <SiKubernetes />
                </span>
                Kubernetes Orchestration
              </li>
              <li className={classes.extendedCapabilitiesItem}>
                <span className={classes.extendedCapabilitiesIcon}>
                  <SiPython />
                </span>
                Python Development
              </li>
              {/* Add more items as needed */}
            </ul>
            <Typography variant="body1" style={{ color: "#272727" }}>
              Our extended capabilities enable us to address diverse technological needs and deliver
              customized solutions for your business.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
