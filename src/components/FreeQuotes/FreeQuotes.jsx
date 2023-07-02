import React, { Fragment, useState } from "react";
import { reduxForm, Field } from "redux-form";
import { Flex } from "reflexbox";
import { Button, TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import quotesValidation from "../Validation/quotesValidation";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import firebase from "firebase/app";
import "firebase/firestore";
// import ReCAPTCHA from "react-google-recaptcha";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PPROJECTID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESURE,
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const saveFormData = async (data) => {
  const collectionRef = firestore.collection("ksoltution-FreeQuote");
  await collectionRef.add(data).then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });;
};

const FreeQuotes = ({ handleSubmit, submitting }) => {
  const [open, setOpen] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState(null);

  const submit = async (values) => {
    // if (!captchaValue) {
    //   // Captcha validation failed
    //   return;
    // }

    try {
      setIsSaving(true);
      await saveFormData(values);
      setSaveSuccess(true);
      setOpen("success");
      // Reset form fields here
      // Enable the Submit button here
    } catch (error) {
      setOpen("failure");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Fragment>
      <Container component="main" style={{ backgroundColor: "aliceblue" }}>
        <Flex
          justifyContent="center"
          style={{
            backgroundColor: "aliceblue",
            height: "-webkit-fill-available",
            width: "-webkit-fill-available",
          }}
        >
          <div
            style={{
              backgroundColor: "aliceblue",
              height: "500px",
              width: "600px",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{
                color: "#014F86",
                textDecoration: "underline",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Get Free Quote
            </Typography>
            <form onSubmit={handleSubmit(submit)}>
              <Field
                name="firstName"
                component={renderTextField}
                label="First Name"
              />
              <div style={{ display: "flex" }}>
                <Field
                  name="company"
                  component={renderTextField}
                  label="Company"
                  style={{ flex: 1, marginRight: "8px" }}
                />
                <Field
                  name="telephoneNumber"
                  component={renderTextField}
                  label="Telephone Number"
                  style={{ flex: 1 }}
                />
              </div>
              <Field
                name="businessEmail"
                component={renderTextField}
                label="Business Email"
              />
              <Field
                name="message"
                component={renderTextField}
                label="Message"
                multiline
                minRows={4}
                style={{
                  width: "100%",
                  paddingTop: "2%",
                  border: saveSuccess ? "2px solid green" : "0px solid #FFFF",
                }}
              />

              {/* <ReCAPTCHA
                sitekey="6LduDdAmAAAAAK03_h-sv52PY3Axxsu1KZ0qbKkz"
                onChange={(value) => setCaptchaValue(value)}
              /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={submitting || isSaving}// || !captchaValue}
                style={{ marginTop: "16px" }}
              >
                {submitting || isSaving ? "Submitting..." : "Submit"}
              </Button>

              {/* Dialog for success */}
              <Dialog
                maxWidth="md"
                open={open === "success"}
                aria-labelledby="max-width-dialog-title"
                style={{
                  backgroundColor: "#E7F3F8",
                }}
              >
                {/* Dialog content */}
              </Dialog>

              {/* Dialog for failure */}
              <Dialog
                maxWidth="xs"
                open={open === "failure"}
                aria-labelledby="max-width-dialog-title"
                style={{
                  backgroundColor: "#E7F3F8",
                }}
              >
                {/* Dialog content */}
              </Dialog>
            </form>
          </div>
        </Flex>
      </Container>
    </Fragment>
  );
};

const renderTextField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default reduxForm({
  form: "editFreeQuotes",
  validate: quotesValidation,
})(FreeQuotes);
