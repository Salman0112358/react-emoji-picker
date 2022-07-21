import "../utils/index.css";
export default function PageFooter(): JSX.Element {
  return (
    <footer>
      <div id="welcome-section">
        <h1 id="welcome-msg">{greeting}</h1>
      </div>
    </footer>
  );
}

const greeting = "Welcome to the emoji App Picker!";
