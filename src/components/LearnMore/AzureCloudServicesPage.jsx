import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mermaid from 'mermaid';

// Define the Mermaid diagram codes
const mermaidDiagrams = [
  {
    id: 'web-app-diagram',
    title: 'Web App',
    code: `
    graph LR
      A[Web App] --> B[API App]
      A --> C[Function App]
      A --> D[Logic App]
      A --> E[Storage]
      A --> F[Database]
    `,
    description: 'The Web App component serves as the front-end interface for your application.',
  },
  // Add more diagrams for other Azure Cloud Services
];

const useStyles = makeStyles((theme) => ({
  diagramContainer: {
    marginBottom: theme.spacing(4),
  },
}));

class AzureCloudServicesPage extends React.Component {
  componentDidMount() {
    // Initialize Mermaid when the component mounts
    mermaid.initialize({
      startOnLoad: true,
    });
  }

  renderMermaidDiagram(id, title, code, description) {
    return (
      <Grid item xs={12} key={id}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <div className="mermaid">{code}</div>
        <Typography variant="body1">{description}</Typography>
      </Grid>
    );
  }

  render() {
    const classes = useStyles();

    return (
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Azure Cloud Services
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Leverage Microsoft Azure to deploy and manage scalable cloud infrastructure for your organization.
        </Typography>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Solution Architecture
        </Typography>
        <Grid container spacing={4} className={classes.diagramContainer}>
          {mermaidDiagrams.map(({ id, title, code, description }) =>
            this.renderMermaidDiagram(id, title, code, description)
          )}
        </Grid>
      </Container>
    );
  }
}

export default AzureCloudServicesPage;
