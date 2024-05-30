import React from "react";
import {Chip, Tooltip} from "@mui/material";
import StyleSheet from "../Tooltip/Card.module.css";

const Card = ({data}) => {
    const {image,follows,title,songs} = data;
    return(
        <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
          <div className={StyleSheet.wrapper}>
            <div className={StyleSheet.card}>
              <img src={image} alt='album' className={StyleSheet.img}/>
              <div className={StyleSheet.banner}>
                <Chip label={`${follows} Follows`} className={StyleSheet.chip} size="small"/>
              </div>
            </div>
            <div className={StyleSheet.titleWrapper}>
              <p style={{color: "white"}}>{title}</p>
            </div>
          </div>
          </Tooltip>
    )
}

export default Card;