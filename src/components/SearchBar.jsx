
export default function SearchBar({handleSearch, darkMode, toggleTheme}) {


    return (
        <header className={`${darkMode ? 'dark' : ""}`}>
            <img className={`logo ${darkMode ? "dark" : ""}`} src={`/assets/images/logo${darkMode ? "-darkmode" : ""}.svg`} alt="theme icon"/>
            <input onChange={(event) => handleSearch(event)} type="text" placeholder={"Search..."}
                   className={`search-bar ${darkMode ? "dark" : ""}`}/>
            <img className={`theme-btn-${darkMode ? "sun" : "moon"}`} onClick={toggleTheme}
                 src={`/assets/images/icon-${darkMode ? "sun" : 'moon'}.svg`} alt=""/>
        </header>
    );
}