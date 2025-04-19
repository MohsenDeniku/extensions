import Extension from "./Extension.jsx";
import {useEffect, useState} from "react";

export default function MainContainer({mainData, data, setData, darkMode}) {
    const [result, setResult] = useState(mapping(mainData))

    function toggleActive(id) {
        setData(prev => {
            prev.map(item => {
                if (item.name === id) {
                    item.isActive = !item.isActive
                }
            })
            return prev
        })
        mainData = mainData.map(item => item.name === id ? {...item, isActive: !item.isActive} : item)
    }

    function deleteExtension(id) {
        setData(prev => {
            return prev.filter(item => item.name !== id)
        })
        mainData = mainData.filter(item => item.name !== id)
        console.log(mainData)
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
        } else if (filter === "inactive") {
            setResult(mapping(data.filter(item => !item.isActive)))
        } else {
            setResult(mapping(data))
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
                    <button onClick={() => render("all")}>All</button>
                    <button onClick={() => render("active")}>Active</button>
                    <button onClick={() => render("inactive")}>Inactive</button>
                </div>
            </div>
            <div className="main-container-content">
                {result}
            </div>
        </main>
    )
}

