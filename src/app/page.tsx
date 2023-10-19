"use client";
import styles1 from "./styles/home.module.css";
import styles2 from "./styles/homeLight.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Card from "./components/Card";
import Link from "next/link";
import Country from "./interfaces/Country";

export default function Home() {
  const [data, setData] = useState<Country[]>();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>();
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [regionSelected, setRegionSelected] = useState<string>("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  useEffect(() => {
    if (regionSelected) {
      const newData = data?.filter(
        (countryInfo: Country) =>
          countryInfo.name.common
            .toLowerCase()
            .includes(search.toLowerCase()) &&
          countryInfo.region == regionSelected
      );
      setFilteredCountries(newData);
    } else {
      const newData = data?.filter((countryInfo: Country) =>
        countryInfo.name.common.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCountries(newData);
    }
  }, [search]);

  useEffect(() => {
    if (regionSelected != "") {
      const newData = data?.filter(
        (countryInfo: Country) => countryInfo.region == regionSelected
      );
      setFilteredCountries(newData);
    } else setFilteredCountries(data);
  }, [regionSelected]);

  const styles = darkMode ? styles1 : styles2;

  return (
    <div className={styles.mainContainer}>
      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <section>
        <Filters
          darkMode={darkMode}
          setSearch={setSearch}
          setRegion={setRegionSelected}
        />
      </section>
      <main className={styles.cardsContainer}>
        {filteredCountries?.map((countryInfo: Country, index: number) => (
          <Link
            key={index}
            className={styles.link}
            href={`${countryInfo?.altSpellings?.[0]}`}
          >
            <Card
              country={countryInfo.name.common}
              region={countryInfo.region}
              population={countryInfo.population}
              capital={countryInfo.capital?.[0]}
              imageUrl={countryInfo.flags.svg}
              darkMode={darkMode}
            />
          </Link>
        ))}
      </main>
    </div>
  );
}
