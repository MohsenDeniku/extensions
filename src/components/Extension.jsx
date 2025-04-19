import {useState} from "react";

export default function Extension({logo, name, description, isActive, toggleActive, darkMode, del, id}) {
    const [active, setActive] = useState(isActive)

    function handleClick() {
        setActive(prev => !prev)
        toggleActive(id)
    }

    return (
        <div className={`extension-container ${darkMode ? 'dark' : ""}`} >
            <div className="extension-top">
                <img src={logo} alt={name} className={"extension-img"} />
                <div className="extension-top-text-container">
                    <h2 className={`extension-name ${darkMode ? "dark" : ""}`}>
                        {name}
                    </h2>
                    <p className={`extension-description`}>
                        {description}
                    </p>
                </div>
            </div>
            <div className={`extension-bottom ${darkMode ? "dark" : ""}`}>
                <button onClick={() => del(id)}>
                    Remove
                </button>
                <div onClick={handleClick} className={`toggle-btn-container ${active ? "active" : ""}`}>
                    <div className={`toggle-btn ${active ? "active" : ""} `}>

                    </div>
                </div>
            </div>
        </div>
    )
}