import {useState, useRef} from 'react'

import './App.css'
import Data from "./data.json";

// component imports
import SearchBar from "./components/SearchBar.jsx";
import MainContainer from "./components/MainContainer.jsx";


function App() {
    const mainData = useRef(JSON.parse(JSON.stringify(Data)))

    const [darkMode, setDarkMode] = useState(false)
    const [dataCopy, setDataCopy] = useState(mainData.current)

    function toggleTheme() {
        setDarkMode(prevTheme => !prevTheme)
    }
    
    function handleSearch(event) {
        if (event.target.value) {
            setDataCopy(dataCopy.filter(item => item.name.toLowerCase()
                .includes(event.target.value.toLowerCase())))
        } else {
            setDataCopy(mainData.current)
        }
        console.log(mainData)
    }

    return (
        <div className={`app ${darkMode ? "dark" : ""}`}>
            <div className={`app-container ${darkMode ? "dark" : ""}`}>
                <SearchBar handleSearch={handleSearch} darkMode={darkMode} toggleTheme={toggleTheme}/>
                <MainContainer mainData={mainData.current} data={dataCopy} setData={setDataCopy} darkMode={darkMode}/>
            </div>
        </div>

    )
}

export default App
