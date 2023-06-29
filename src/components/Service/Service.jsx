import React, { useState } from "react";
import { Grid, Typography, Tabs, Tab, useMediaQuery, useTheme, makeStyles } from "@material-ui/core";
import Card from "./Card";
import azureCloudServicesImg from '../../images/azure-cloud-services.jpg';
import cloudMigrationSolutionsImg from '../../images/cloud-migration-solutions.jpg';
import cloudConsultingManagementImg from '../../images/cloud-consulting-management.jpg';
import devOpsAutomationImg from '../../images/devOps-automation.jpg';
import dataAnalyticsInsightsImg from '../../images/data-analytics-insights.jpg';
import ioTSolutionsDevelopmentImg from '../../images/iot-solutions-development.jpg';
import machineLearningServicesImg from '../../images/artificial-intelligence.jpg';
import dataScienceAIConsultingImg from '../../images/data-science-aionsulting.jpg';
import cybersecuritySolutionsImg from '../../images/cyber-security.jpg';
import networkSecurityServicesImg from '../../images/network-security-services.jpg';
import endpointProtectionImg from '../../images/endpoint-protection.jpg';
import networkDesignOptimizationImg from '../../images/network-design-optimization.jpg';
import networkMonitoringTroubleshootingImg from '../../images/network-monitoring-troubleshooting.jpg';
import managedITServicesImg from '../../images/managed-services.jpg';
import backupDisasterRecoveryImg from '../../images/disaster-recovery.jpg';
import web3DevelopmentImg from '../../images/web3-development.jpg';
import blockchainConsultingImg from '../../images/blockchain-consulting.jpg';
import smartContractDevelopmentImg from '../../images/smart-contract-development.jpg';
import decentralizedFinanceSolutionsImg from '../../images/decentralized-finance-solutions.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    tabContent: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }));

const Service = () => {
    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const classes = useStyles();
  
    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
    };
  
    const tabs = [
        "Cloud & DevOps",
        "Data, IoT & AI",
        "Security",
        "Network",
        "Managed Services",
        "Web3 Services",
      ];
      
      const services = [
        // Cloud & DevOps
        {
          title: "Azure Cloud Services",
          content: "Leverage Microsoft Azure to deploy and manage scalable cloud infrastructure for your organization.",
          imgsrc: azureCloudServicesImg
        },
        {
          title: "Cloud Migration Solutions",
          content: "Efficiently migrate your applications and data to the cloud using proven solutions and best practices.",
          imgsrc: cloudMigrationSolutionsImg
        },
        {
          title: "Cloud Consulting and Management",
          content: "Receive expert guidance and management of your cloud resources for optimal efficiency and cost-effectiveness.",
          imgsrc: cloudConsultingManagementImg
        },
        {
          title: "DevOps Automation",
          content: "Streamline your software development and operations processes through efficient DevOps automation.",
          imgsrc: devOpsAutomationImg
        },
      
        // Data, IoT & AI
        {
          title: "Data Analytics and Insights",
          content: "Unlock valuable insights from your data through advanced analytics tools and techniques.",
          imgsrc: dataAnalyticsInsightsImg
        },
        {
          title: "IoT Solutions and Development",
          content: "Build scalable IoT solutions to connect, monitor, and control devices for improved efficiency.",
          imgsrc: ioTSolutionsDevelopmentImg
        },
        {
          title: "Machine Learning Services",
          content: "Harness the power of machine learning algorithms to automate processes and make data-driven predictions.",
          imgsrc: machineLearningServicesImg
        },
        {
          title: "Data Science and AI Consulting",
          content: "Leverage the power of data science and AI to drive innovation and gain a competitive edge.",
          imgsrc: dataScienceAIConsultingImg
        },
      
        // Security
        {
          title: "Cybersecurity Solutions",
          content: "Protect your systems and data with comprehensive cybersecurity services and advanced threat detection.",
          imgsrc: cybersecuritySolutionsImg
        },
        {
          title: "Network Security Services",
          content: "Ensure the security and reliability of your network infrastructure through advanced security measures.",
          imgsrc: networkSecurityServicesImg
        },
        {
          title: "Endpoint Protection",
          content: "Secure your endpoints and prevent unauthorized access with advanced endpoint protection solutions.",
          imgsrc: endpointProtectionImg
        },
      
        // Network
        {
          title: "Network Design and Optimization",
          content: "Design and optimize your network infrastructure for improved performance, scalability, and efficiency.",
          imgsrc: networkDesignOptimizationImg
        },
        {
          title: "Network Monitoring and Troubleshooting",
          content: "Monitor and troubleshoot your network infrastructure to ensure optimal performance and reliability.",
          imgsrc: networkMonitoringTroubleshootingImg
        },
      
        // Managed Services
        {
          title: "Managed IT Services",
          content: "Let our experts handle your IT operations, including maintenance, monitoring, and support.",
          imgsrc: managedITServicesImg
        },
        {
          title: "Backup and Disaster Recovery",
          content: "Implement robust backup and disaster recovery solutions to safeguard your critical data and systems.",
          imgsrc: backupDisasterRecoveryImg
        },
      
        // Web3 Services
        {
          title: "Web3 Development",
          content: "Leverage Web3 technologies to build decentralized applications and enhance blockchain integration.",
          imgsrc: web3DevelopmentImg
        },
        {
          title: "Blockchain Consulting",
          content: "Get expert guidance on blockchain implementation and integration strategies for your business.",
          imgsrc: blockchainConsultingImg
        },
        {
          title: "Smart Contract Development",
          content: "Create and deploy secure and efficient smart contracts on various blockchain platforms.",
          imgsrc: smartContractDevelopmentImg
        },
        {
          title: "Decentralized Finance Solutions",
          content: "Explore DeFi solutions and leverage decentralized finance protocols for your financial needs.",
          imgsrc: decentralizedFinanceSolutionsImg
        }
      ];
      
      
      
      

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div id="cloud-devops" className="tab-pane">
            <Typography variant="h3" gutterBottom style={{ color: "#FF3366" }}>
              Accelerate your cloud journey
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#666666" }}>
              Azure, hybrid, and multi-cloud, transform your organization in the cloud
            </Typography>
            <Grid container spacing={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}>
            {services.slice(0, 3).map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                    imgsrc={service.imgsrc}
                    title={service.title}
                    textBody={service.content}
                    buttonContent="Learn More"
                    cardStyle={{ background: "#333333", color: "#FFFFFF" }}
                    />
                </Grid>
                ))}
            </Grid>
          </div>
        );
      case 1:
        return (
          <div id="data-iot-ai" className="tab-pane">
            <Typography variant="h3" gutterBottom style={{ color: "#FF3366" }}>
              Data, IoT & AI Solutions
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#666666" }}>
              Explore our cutting-edge services for data management, IoT, and AI.
            </Typography>
            <Grid container spacing={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}>
              {services.slice(4, 7).map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    imgsrc={service.imgsrc}
                    title={service.title}
                    textBody={service.content}
                    buttonContent="Learn More"
                    cardStyle={{ background: "#333333", color: "#FFFFFF" }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        );
      case 2:
        return (
          <div id="security" className="tab-pane">
            <Typography variant="h3" gutterBottom style={{ color: "#FF3366" }}>
              Security Services
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#666666" }}>
              Ensure the safety of your systems with our comprehensive security services.
            </Typography>
            <Grid container spacing={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}>
              {services.slice(8, 10).map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    imgsrc={service.imgsrc}
                    title={service.title}
                    textBody={service.content}
                    buttonContent="Learn More"
                    cardStyle={{ background: "#333333", color: "#FFFFFF" }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        );
      case 3:
        return (
          <div id="network" className="tab-pane">
            <Typography variant="h3" gutterBottom style={{ color: "#FF3366" }}>
              Network Services
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#666666" }}>
              Build a robust and reliable network infrastructure with our network services.
            </Typography>
            <Grid container spacing={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}>
              {services.slice(11, 13).map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    imgsrc={service.imgsrc}
                    title={service.title}
                    textBody={service.content}
                    buttonContent="Learn More"
                    cardStyle={{ background: "#333333", color: "#FFFFFF" }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        );
      case 4:
        return (
          <div id="managed-services" className="tab-pane">
            <Typography variant="h3" gutterBottom style={{ color: "#FF3366" }}>
              Managed Services
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#666666" }}>
              Let us handle your IT operations with our reliable and efficient managed services.
            </Typography>
            <Grid container spacing={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}>
              {services.slice(13, 15).map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    imgsrc={service.imgsrc}
                    title={service.title}
                    textBody={service.content}
                    buttonContent="Learn More"
                    cardStyle={{ background: "#333333", color: "#FFFFFF" }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        );
      case 5:
        return (
              <div id="web3-services" className="tab-pane">
                <Typography variant="h3" gutterBottom style={{ color: "#FF3366" }}>
                  Web3 Services
                </Typography>
                <Typography variant="body1" gutterBottom style={{ color: "#666666" }}>
                  Explore our services for Web3 development and blockchain integration.
                </Typography>
                <Grid container spacing={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}>
                  {services.slice(15, 19).map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card
                        imgsrc={service.imgsrc}
                        title={service.title}
                        textBody={service.content}
                        buttonContent="Learn More"
                        cardStyle={{ background: "#333333", color: "#FFFFFF" }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            );
 
        default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant={isSmallScreen ? "scrollable" : "standard"}
        scrollButtons={isSmallScreen ? "auto" : "on"}
        aria-label="Service Tabs"
      >
        {tabs.map((tab, index) => (
          <Tab label={tab} key={index} />
        ))}
      </Tabs>
      <div className={classes.tabContent}>{renderTabContent()}</div>
    </div>
  );
};

export default Service;
