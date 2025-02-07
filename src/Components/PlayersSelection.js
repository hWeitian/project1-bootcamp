import React from "react";
import CustomButton from "./CustomButton/CustomButton";
import {
  Typography,
  Grid,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import GameInfoButton from "./GameInfoButton";

class PlayersSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersNum: "1",
    };
  }

  handleChange = (event, newPlayersNum) => {
    if (newPlayersNum !== null) {
      this.setState({
        playersNum: newPlayersNum,
      });
    }
  };

  handleSubmit = () => {
    this.props.setNumOfPlayers(this.state.playersNum);
  };

  handleDisplayModal = (source) => {
    this.props.displayModal(source);
  };

  render() {
    return (
      <>
        <Container
          maxWidth="false"
          disableGutters
          sx={{
            backgroundColor: "#152938",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid container justifyContent="center">
            <Grid container justifyContent="center" mb={7}>
              <Typography
                variant="h4"
                sx={{ color: "#FCFCFC", fontWeight: 700 }}
              >
                MEMORY GAME
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "#FCFCFC",
                borderRadius: "40px",
                p: 3,
              }}
              xs={11}
              sm={6}
              md={5}
              lg={4}
            >
              <Grid
                container
                sx={{ mb: 3 }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: "#304859",
                    }}
                  >
                    Number of Players
                  </Typography>
                </Grid>
                <Grid item>
                  <GameInfoButton onClick={this.handleDisplayModal} size={30} />
                </Grid>
              </Grid>
              <Grid container sx={{ mb: 3 }}>
                <ToggleButtonGroup
                  value={this.state.playersNum}
                  exclusive
                  onChange={this.handleChange}
                  aria-label="Platform"
                  sx={{
                    display: "flex",
                    flex: "1 0 18%",
                    gap: "10px",
                  }}
                  fullWidth
                >
                  <ToggleButton value="1" className="btn btn-mist">
                    1
                  </ToggleButton>

                  <ToggleButton value="2" className="btn btn-mist">
                    2
                  </ToggleButton>
                  <ToggleButton value="3" className="btn btn-mist">
                    3
                  </ToggleButton>
                  <ToggleButton value="4" className="btn btn-mist">
                    4
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item>
                <CustomButton
                  className="btn btn-orange"
                  onClick={this.handleSubmit}
                >
                  Start Game!
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default PlayersSelection;
