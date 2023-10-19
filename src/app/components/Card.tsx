import React from "react";
import Image from "next/image";
import styles1 from "../styles/home.module.css";
import styles2 from "../styles/homeLight.module.css";
import CardProps from "../interfaces/CardProps";

const Card: React.FC<CardProps> = ({
  country,
  population,
  region,
  capital,
  imageUrl,
  darkMode,
}) => {
  const styles = darkMode ? styles1 : styles2;
  return (
    <div className={styles.cardContainer}>
      <Image
        className={styles.cardImage}
        width={230}
        height={130}
        src={imageUrl}
        alt=""
      />
      <div className={styles.cardInfo}>
        <p className={styles.title}>{country}</p>
        <p className={styles.cardP}>
          Population:<span className={styles.gray}> {population} </span>
        </p>
        <p className={styles.cardP}>
          Region:<span className={styles.gray}> {region} </span>
        </p>
        <p className={styles.cardP}>
          Capital:<span className={styles.gray}> {capital} </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
