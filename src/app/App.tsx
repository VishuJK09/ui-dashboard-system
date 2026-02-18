import Button from "../components/Button";

function App() {
  return (
    <>
      <div style={{ padding: "20px 20px 20px 20px" }}>
        <h1 style={{ margin: "0" }}>UI Library</h1>
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3 style={{ marginBlockEnd: "8px", marginBlockStart: "0" }}>
            Buttons
          </h3>
        </div>
        <div>
          <Button>Default</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
        <div>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" size="md" disabled>
            Disabled Secondary
          </Button>
        </div>
        <div>
            <Button variant="success" size="md">
              Success Button
            </Button>
            <Button variant="warning" size="md">
              Warning Button
            </Button>
            <Button variant="danger" size="md">
                Danger Button
            </Button>
        </div>
        <div>
            <Button variant="outline-primary" size="md">
              Outline Primary
            </Button>
            <Button variant="outline-secondary" size="md">
              Outline Secondary
            </Button>
        </div>

      </div>
    </>
  );
}

export default App;
