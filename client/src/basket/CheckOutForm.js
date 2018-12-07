import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: purple[500]
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
});

function CustomizedInputs(props) {
  const {
    classes,
    handleSubmit,
    handleInput,
    name,
    lastname,
    city,
    email,
    adress,
    telephone
  } = props;

  return (
    <div style={MyStyles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div style={MyStyles.grid} className={classes.container}>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Name
              </InputLabel>
              <Input
                name="name"
                onChange={handleInput}
                value={name}
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Last Name
              </InputLabel>
              <Input
                name="lastname"
                onChange={handleInput}
                value={lastname}
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>

          <div>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Email
              </InputLabel>
              <Input
                name="email"
                onChange={handleInput}
                value={email}
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Adress
              </InputLabel>
              <Input
                name="adress"
                onChange={handleInput}
                value={adress}
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>

          <div>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                city
              </InputLabel>
              <Input
                name="city"
                onChange={handleInput}
                value={city}
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Telephone
              </InputLabel>
              <Input
                name="telephone"
                onChange={handleInput}
                value={telephone}
                id="custom-css-standard-input"
                classes={{
                  underline: classes.cssUnderline
                }}
              />
              <button>continue</button>
            </FormControl>
          </div>
        </div>
      </form>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);

let MyStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr",
    gridGap: "1%",
    textAlign: "center",
    padding: "15px 15px"
  },
  wrapper: {
    textAlign: " center"
  },
  bottom: {
    marginTop: "30px",
    marginBottom: "40px"
  }
};
