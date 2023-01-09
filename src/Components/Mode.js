export default function Mode({ theme, toggleTheme }) {
  return (
    <div>
      <button className="toggle" onClick={toggleTheme}>
        🌙🌓
      </button>
    </div>
  );
}
