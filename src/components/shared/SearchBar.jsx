import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const onQueryChange = (e) => setQuery(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        className={styles.searchBar}
        value={query}
        onChange={onQueryChange}
      />
      <div className={styles.searchBtn}>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
