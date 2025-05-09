export default function Modal({ message, name, image, onConfirm, onCancel, darkMode }) {
    return (
        <div className={`modal-overlay ${darkMode ? "dark" : ""}`}>
            <div className={`modal ${darkMode ? "dark" : ""}`}>
                <div className="modal-extension">
                    <img src={image} alt="extension image" />
                    <h2>{name}</h2>
                </div>
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm} className="confirm-btn">Yes</button>
                    <button onClick={onCancel} className="cancel-btn">No</button>
                </div>
            </div>
        </div>
    );
}