"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles1 from "../styles/itemSelected.module.css";
import styles2 from "../styles/itemSelectedLight.module.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import CountryDetailsProps from "../interfaces/CountryDetailsProps";
import Country from "../interfaces/Country";

const CountryDetails: React.FC<CountryDetailsProps> = ({ params }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [data, setData] = useState<Country>();
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${params.country}`)
      .then((res) => setData(res?.data?.[0]));
  }, []);
  const styles = darkMode ? styles1 : styles2;
  return (
    <div className={styles.mainContainer}>
      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <Link className={styles.link} href="/">
        <button className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <span>Back</span>
        </button>
      </Link>
      <main className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.infoImage}
            width={450}
            height={380}
            src={data?.flags?.svg}
            alt="flag"
          />
        </div>
        <div className={styles.countryInfo}>
          <h2 className={styles.title}>{data?.name?.common}</h2>
          <div className={styles.moreInfo}>
            <div>
              <p className={styles.p}>
                Native name: <span> {data?.name?.official} </span>{" "}
              </p>
              <p className={styles.p}>
                Population: <span>{data?.population} </span>
              </p>
              <p className={styles.p}>
                Region: <span> {data?.region}</span>
              </p>
              <p className={styles.p}>
                Sub Region: <span>{data?.subregion} </span>
              </p>
              <p className={styles.p}>
                Capital: <span>{data?.capital?.[0]} </span>
              </p>
            </div>
            <div>
              <p className={styles.p}>
                Top Level Domain: <span> {data?.tld?.[0]} </span>{" "}
              </p>
              <p className={styles.p}>
                Currencies:{" "}
                {data?.currencies &&
                  Object.keys(data.currencies).map((currencyCode) => (
                    <span key={currencyCode}>
                      {data.currencies[currencyCode].name}
                      {Object.keys(data.currencies).indexOf(currencyCode) !==
                      Object.keys(data.currencies).length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
              </p>
              <p className={styles.p}>
                Languages:{" "}
                <span>
                  {" "}
                  {data?.currencies &&
                    Object?.values?.(data?.languages).join(", ")}{" "}
                </span>
              </p>
            </div>
          </div>
          {data?.borders && (
            <>
              <p className={styles.pBorder}>Border Countries:</p>
              <div className={styles.borderCountriesContainer}>
                {data?.borders?.map((borderCountry: string, index: number) => (
                  <Link
                    key={index}
                    className={styles.link}
                    href={`/${borderCountry}`}
                  >
                    <div>
                      <button className={styles.countriesButtons}>
                        {borderCountry}
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CountryDetails;
