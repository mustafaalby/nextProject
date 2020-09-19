import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";
import React from "react";
import RickStyle from "../../styles/RickItem.module.css";
const RickItem = (props) => {
  return (
    <div className={RickStyle.card}>
      <img src={props.data.image} />
      <div className={RickStyle.cardInside}>
        <h3>Name :{props.data.name}</h3>
        <p>Status :{props.data.status}</p>
        <p>Species :{props.data.species}</p>
        <p>Type :{props.data.Type}</p>
        <p>Gender :{props.data.gender}</p>
        <p>Played in:{props.data.episode.length} episode</p>
        <p>Origin: {props.data.origin.name}</p>
      </div>
    </div>
  );
};

export default RickItem;
