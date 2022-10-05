import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        className={styles.input}
      />
      <button type="submit" className={styles["search-btn"]}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
