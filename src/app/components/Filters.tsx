import React from "react";
import styles1 from "../styles/home.module.css";
import styles2 from "../styles/homeLight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FiltersProps from "../interfaces/FiltersProps";

const Filters: React.FC<FiltersProps> = ({
  darkMode,
  setSearch,
  setRegion,
}) => {
  const styles = darkMode ? styles1 : styles2;
  return (
    <div className={styles.filtersContainer}>
      <InputGroup className={styles.searchContainer}>
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faMagnifyingGlass}
        />
        <Form.Control
          className={styles.inputSearch}
          placeholder="Search for a country..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </InputGroup>

      <div className={styles.regionContainer}>
        <Form.Select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setRegion(e.target.value)
          }
          className={styles.inputRegion}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Form.Select>
        <FontAwesomeIcon
          className={styles.dropDownArrow}
          icon={faChevronDown}
        />
      </div>
    </div>
  );
};

export default Filters;
