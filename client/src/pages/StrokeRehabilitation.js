import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const StrokeRehabilitation = () => {
  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2} fontWeight="bold">
        Stroke Rehabilitation
      </Typography>
      <Grid container spacing={3}>
        {/* Personalized Rehabilitation Plans */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Personalized Rehabilitation Plans
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create tailored rehabilitation plans based on medical history,
                stroke severity, and physical condition.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Exercise and Physical Therapy */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Exercise and Physical Therapy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Offer guided exercises and physical therapy routines with
                progress tracking.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Speech and Language Therapy */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Speech and Language Therapy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Provide speech and language therapy exercises and assessments
                for speech-impaired patients.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Medication Reminders */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Medication Reminders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Send medication reminders and track adherence.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Progress Tracking */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Progress Tracking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monitor and visualize patient progress over time.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Community and Support */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Community and Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Facilitate online support groups and communities for emotional
                support.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Accessibility */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Accessibility
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ensure an accessible user interface for individuals with
                disabilities.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StrokeRehabilitation;
