import Extension from "./Extension.jsx";
import {useEffect, useState} from "react";

export default function MainContainer({mainData, currentSearch, handleSearch, currentFilter, data, setData, darkMode}) {
    const [result, setResult] = useState(mapping(mainData.current))
    const [activeBtn, setActiveBtn] = useState(currentFilter.current)
    
    function toggleActive(id) {
        setData(prev => {
            prev.map(item => {
                if (item.name === id) {
                    item.isActive = !item.isActive
                }
            })
            return prev
        })
        mainData.current = mainData.current.map(item => item.name === id ? {...item, isActive: !item.isActive} : item)
    }

    function deleteExtension(id) {
        setData(prev => {
            return prev.filter(item => item.name !== id)
        })
        mainData.current = mainData.current.filter(item => item.name !== id)
        console.log(mainData.current)
    }

    function mapping(arr) {
        return arr.map(item => (
            <Extension description={item.description}
                       isActive={item.isActive}
                       logo={item.logo}
                       name={item.name}
                       darkMode={darkMode}
                       key={item.name}
                       id={item.name}
                       toggleActive={toggleActive}
                       del={deleteExtension}
            />
        ))
    }

    function render(filter = 'all') {
        if (filter === "active") {
            setResult(mapping(data.filter(item => item.isActive)))
            setActiveBtn("active")
            currentFilter.current = "active"
            handleSearch({target: {value: currentSearch}})
        } else if (filter === "inactive") {
            setResult(mapping(data.filter(item => !item.isActive)))
            setActiveBtn("inactive")
            currentFilter.current = "inactive"
            handleSearch({target: {value: currentSearch}})
        } else {
            setResult(mapping(data))
            setActiveBtn("all")
            currentFilter.current = "all"
            handleSearch({target: {value: currentSearch}})
        }
    }


    useEffect(() => {
        setResult(mapping(data))
    }, [darkMode, data]);
    return (
        <main className="main-container">
            <div className={`main-container-top ${darkMode ? "dark" : ""}`}>
                <h1>Extensions List</h1>
                <div className={`main-container-top-states ${darkMode ? "dark" : ""}`}>
                <button className={`filter-btn ${activeBtn === 'all' ? 'active-btn' : ''}`} onClick={() => render("all")}>
                    All
                    </button>
                    <button className={`filter-btn ${activeBtn === 'active' ? 'active-btn' : ''}`} onClick={() => render("active")}>
                        Active
                        </button>
                    <button className={`filter-btn ${activeBtn === 'inactive' ? 'active-btn' : ''}`} onClick={() => render("inactive")}>
                        Inactive
                        </button>
                </div>
            </div>
            <div className="main-container-content">
                {result}
            </div>
        </main>
    )
}

