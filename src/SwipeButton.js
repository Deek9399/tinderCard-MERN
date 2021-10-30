import React from "react";
import "./SwipeButton.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SwipeButton() {
  return (
    <div className="swipeButton">
      <IconButton>
        <ReplayIcon className="swipeButton__left" fontSize="large" />
      </IconButton>

      <IconButton>
        <StarRateIcon className="swipeButton__star" fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButton__flash" fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButton__favorite" fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon className="swipeButton__right" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
