import React from "react";
import { Modal, Box, Grid } from "@mui/material";
import CustomButton from "./CustomButton/CustomButton";

class CustomModal extends React.Component {
  handleClose = (event, reason) => {
    if (reason === "backdropClick" && this.props.clickSource === "default") {
      return;
    } else if (reason === "reset-game") {
      this.props.resetGame();
    } else if (reason === "reset-round") {
      this.props.resetRound();
    }
    this.props.handleResultsClose();
  };

  handleClick = () => {
    if (this.props.currentPlayer < this.props.numOfPlayers) {
      this.props.switchPlayer();
    } else {
      this.props.updateRound();
    }
  };

  render() {
    return (
      <>
        <Modal
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEscapeKeyDown={
            this.props.clickSource === "default" ? true : false
          }
        >
          <Box sx={{ width: { xs: "90vw", sm: 450 } }} className="modal-style">
            {this.props.children}
            {this.props.clickSource === "reset-game" ||
            this.props.clickSource === "reset-round" ? (
              <>
                <Grid container justifyContent="space-around" sx={{ mt: 2 }}>
                  <Grid item xs={5}>
                    <CustomButton
                      onClick={this.handleClose}
                      className="btn btn-light-blue"
                    >
                      No
                    </CustomButton>
                  </Grid>
                  <Grid item xs={5}>
                    <CustomButton
                      onClick={() =>
                        this.handleClose("nil", this.props.clickSource)
                      }
                      className="btn btn-orange"
                    >
                      Yes
                    </CustomButton>
                  </Grid>
                </Grid>
              </>
            ) : this.props.clickSource === "rules" ||
              this.props.clickSource === "results-navbar" ||
              this.props.clickSource === "mobile-menu" ? (
              <CustomButton
                onClick={this.handleClose}
                className="btn btn-orange"
              >
                Close
              </CustomButton>
            ) : this.props.roundStatus === "lose" &&
              this.props.numOfPlayers === 1 ? (
              <CustomButton
                onClick={this.props.resetRound}
                className="btn btn-orange"
                style={{ marginBottom: "0.685rem" }}
              >
                Restart
              </CustomButton>
            ) : this.props.roundStatus === "end game" ? (
              <>
                <CustomButton
                  onClick={this.props.resetGame}
                  className="btn btn-orange"
                  style={{ marginBottom: "0.685rem" }}
                >
                  New Game
                </CustomButton>
                <CustomButton
                  onClick={this.handleClose}
                  className="btn btn-light-blue"
                >
                  Close
                </CustomButton>
              </>
            ) : (
              <>
                {this.props.currentPlayer === this.props.numOfPlayers ? (
                  <CustomButton
                    onClick={this.props.resetRound}
                    className={
                      this.props.roundWinners.length === 0 &&
                      this.props.numOfPlayers &&
                      this.props.numOfPlayers > 1
                        ? "btn btn-orange"
                        : "btn btn-light-blue"
                    }
                    style={{ marginBottom: "0.685rem" }}
                  >
                    Restart
                  </CustomButton>
                ) : null}
                {this.props.roundWinners.length === 0 &&
                this.props.currentPlayer === this.props.numOfPlayers &&
                this.props.numOfPlayers > 1 ? null : (
                  <CustomButton
                    onClick={this.handleClick}
                    className="btn btn-orange"
                  >
                    {this.props.numOfPlayers === 1
                      ? "Next Level"
                      : this.props.currentPlayer < this.props.numOfPlayers
                      ? "Next Player"
                      : "Next Level"}
                  </CustomButton>
                )}
              </>
            )}
          </Box>
        </Modal>
      </>
    );
  }
}

export default CustomModal;
