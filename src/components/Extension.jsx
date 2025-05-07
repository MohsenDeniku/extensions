import { useState } from "react";
import Modal from "./Modal.jsx";

export default function Extension({ logo, name, description, isActive, toggleActive, darkMode, del, id }) {
    const [active, setActive] = useState(isActive);
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setActive(prev => !prev);
        toggleActive(id);
    }

    function handleRemove() {
        setShowModal(true);
    }

    function confirmRemove() {
        del(id);
        setShowModal(false);
    }

    function cancelRemove() {
        setShowModal(false);
    }

    return (
        <div className={`extension-container ${darkMode ? 'dark' : ""}`}>
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
                <button onClick={handleRemove}>
                    Remove
                </button>
                <div onClick={handleClick} className={`toggle-btn-container ${active ? "active" : ""}`}>
                    <div className={`toggle-btn ${active ? "active" : ""} `}></div>
                </div>
            </div>
            {showModal && (
                <Modal
                    message="Are you sure you want to remove this extension?"
                    image={logo}
                    name={name}
                    onConfirm={confirmRemove}
                    onCancel={cancelRemove}
                    darkMode={darkMode}
                />
            )}
        </div>
    );
}