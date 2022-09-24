import React from "react";
import styles from '../../styles/nav.module.css'

export const pokedex = () => {
  return (
    <div class="nav-button">
      <div class="nav-center-circle"></div>
      <div class="nav-button-vertical"></div>
      <div class="nav-button-horizontal">
        <div class="border-top"></div>
        <div class="border-bottom"></div>
      </div>
    </div>
  );
};
