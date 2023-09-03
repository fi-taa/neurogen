import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const StrokePrevention = () => {
    const navigate = useNavigate();
  // State to manage the open/closed state of the dialogs
  const [openRiskAssessmentDialog, setOpenRiskAssessmentDialog] =
    useState(false);
  const [openRecommendationsDialog, setOpenRecommendationsDialog] =
    useState(false);
  const [openDietPlanningDialog, setOpenDietPlanningDialog] = useState(false);
  const [openActivityMonitoringDialog, setOpenActivityMonitoringDialog] =
    useState(false);
  const [openStressManagementDialog, setOpenStressManagementDialog] =
    useState(false);
  const [openWeightManagementDialog, setOpenWeightManagementDialog] =
    useState(false);
  const [openSmokingCessationDialog, setOpenSmokingCessationDialog] =
    useState(false);
  const [openEducationDialog, setOpenEducationDialog] = useState(false);

  // Functions to open and close the dialogs
  const handleOpenDialog = (dialogType) => {
    switch (dialogType) {
      case "RiskAssessment":
        setOpenRiskAssessmentDialog(true);
        break;
      case "Recommendations":
        setOpenRecommendationsDialog(true);
        break;
      case "DietPlanning":
        setOpenDietPlanningDialog(true);
        break;
      case "ActivityMonitoring":
        setOpenActivityMonitoringDialog(true);
        break;
      case "StressManagement":
        setOpenStressManagementDialog(true);
        break;
      case "WeightManagement":
        setOpenWeightManagementDialog(true);
        break;
      case "SmokingCessation":
        setOpenSmokingCessationDialog(true);
        break;
      case "Education":
        setOpenEducationDialog(true);
        break;
      default:
        break;
    }
  };

  // Functions to close the dialogs
  const handleCloseDialog = (dialogType) => {
    switch (dialogType) {
      case "RiskAssessment":
        setOpenRiskAssessmentDialog(false);
        break;
      case "Recommendations":
        setOpenRecommendationsDialog(false);
        break;
      case "DietPlanning":
        setOpenDietPlanningDialog(false);
        break;
      case "ActivityMonitoring":
        setOpenActivityMonitoringDialog(false);
        break;
      case "StressManagement":
        setOpenStressManagementDialog(false);
        break;
      case "WeightManagement":
        setOpenWeightManagementDialog(false);
        break;
      case "SmokingCessation":
        setOpenSmokingCessationDialog(false);
        break;
      case "Education":
        setOpenEducationDialog(false);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2} fontWeight="bold">
        Stroke Prevention
      </Typography>
      <Grid container spacing={3}>
        {/* Risk Assessment */}
        <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => handleOpenDialog("RiskAssessment")}>
            <CardContent>
              <Typography variant="h6" component="div">
                Risk Assessment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Evaluate an individual's stroke risk based on health data,
                lifestyle, and family history.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/* Risk Assessment Dialog */}
          <Dialog
            open={openRiskAssessmentDialog}
            onClose={() => handleCloseDialog("RiskAssessment")}
          >
            <DialogTitle>Risk Assessment</DialogTitle>
            <DialogContent>
              {/* Add content for the Risk Assessment dialog */}
              <Typography variant="body1">
                Please provide the following information to assess your stroke
                risk:
              </Typography>
              <form>
                <TextField
                  label="Age"
                  type="number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Blood Pressure"
                  type="number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Cholesterol Level"
                  type="number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                {/* Add more fields as needed */}
                <Button variant="contained" color="primary" type="submit">
                  Assess Risk
                </Button>
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => handleCloseDialog("RiskAssessment")}
                color="primary"
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        {/* Personalized Recommendations */}
        <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => handleOpenDialog("Recommendations")}>
            <CardContent>
              <Typography variant="h6" component="div">
                Personalized Recommendations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Offer tailored advice on diet, exercise, and lifestyle changes.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/* Recommendations Dialog */}
          <Dialog
            open={openRecommendationsDialog}
            onClose={() => handleCloseDialog("Recommendations")}
          >
            <DialogTitle>Personalized Recommendations</DialogTitle>
            <DialogContent>
              {/* Add content for the Recommendations dialog */}
              <Typography variant="body1">
                Based on your assessment, here are personalized recommendations:
              </Typography>
              <ul>
                <li>Follow a balanced diet rich in fruits and vegetables.</li>
                <li>
                  Engage in regular physical activity for at least 30 minutes a
                  day.
                </li>
                <li>Reduce stress through relaxation techniques.</li>
                {/* Add more recommendations */}
              </ul>
            </DialogContent>
            <DialogActions>
            <Button
      color="primary"
      onClick={() => {
        handleCloseDialog("Recommendations");  // Close the dialog
        navigate("/paragraph");  // Navigate to the "/paragraph" route
      }}
    >
      Get More Info
    </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        {/* Add more cards and dialogs for other functionalities */}
        {/* ... */}
      </Grid>
    </Container>
  );
};

export default StrokePrevention;
