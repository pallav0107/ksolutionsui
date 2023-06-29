import React, { Fragment } from "react";
import { Flex, Box } from "reflexbox";
import termsPdf from "./website-terms-and-conditions-of-use-blog-67268286231326228481.pdf";
import privacyPdf from "./Privacy-Policy.pdf";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Footer = () => {
  return (
    <Fragment>
      <Box
        width="100%"
        backgroundColor="#595959"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDirection="column" alignItems="center" marginBottom="20px">
            <Box marginleft="15%" minWidth="max-content">
              <a href={termsPdf} style={{ color: "aliceblue" }} rel="noreferrer noopener" target="_blank">
                Terms and Conditions
              </a>{" "}
              &nbsp;
              <a
                marginleft="2px"
                href={privacyPdf}
                style={{ color: "aliceblue" }}
                target="_blank" rel="noreferrer noopener"
              >
                Privacy Policy
              </a>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center" marginBottom="20px">
          <Box>
              <p style={{ color: "white", marginleft: "20px" }}>
                © Copyright 2020 ksolutions &nbsp; Designed by:&nbsp;
                <a href={termsPdf} target="_blank" rel="noreferrer noopener" style={{ color: "white" }}>
                  {" "}
                  ksolutions
                </a>
              </p>
            </Box>
             
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
            style={{ marginleft: "20px" }}
          >
            <Flex flex-direction="column" marginRight="40px">
              <FacebookIcon
                style={{ color: "white", marginRight: "20px" }}
              ></FacebookIcon>
              <InstagramIcon
                style={{ color: "white", marginRight: "20px" }}
              ></InstagramIcon>
              <LinkedInIcon
                style={{ color: "white", marginRight: "20px" }}
              ></LinkedInIcon>
            </Flex>
          </Flex>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Footer;
