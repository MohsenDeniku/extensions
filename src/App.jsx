import { useState, useRef } from "react";

import "./App.css";
import Data from "./data.json";

// component imports
import SearchBar from "./components/SearchBar.jsx";
import MainContainer from "./components/MainContainer.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const mainData = useRef(JSON.parse(JSON.stringify(Data)));
  const currentFilter = useRef("all");
  const currentSearch = useRef("");
  const [darkMode, setDarkMode] = useState(false);
  const [dataCopy, setDataCopy] = useState(mainData.current);

  function toggleTheme() {
    setDarkMode((prevTheme) => !prevTheme);
  }

  function handleSearch(event) {
    console.log(currentFilter.current);
    currentSearch.current = event.target.value;
    setDataCopy(
      mainData.current.filter((item) => {
        if (currentFilter.current === "all") {
          return item.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        } else {
          return item.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) &&
            item.isActive === (currentFilter.current === "active"
            ? true
            : false);
        }
      })
    );
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className={`app-container ${darkMode ? "dark" : ""}`}>
        <SearchBar
          handleSearch={handleSearch}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
        <MainContainer
          mainData={mainData}
          data={dataCopy}
          setData={setDataCopy}
          darkMode={darkMode}
          currentFilter={currentFilter}
          currentSearch={currentSearch.current}
          handleSearch={handleSearch}
        />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
