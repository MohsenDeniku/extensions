export default function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <p>
        Created by <a target="_blank" href="https://www.linkedin.com/in/mohsen-deniku">Mohsen Deniku</a>.
      </p>
    </footer>
  );
}
