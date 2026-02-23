import Layout from "../components/Layout/Layout";
import Button from "../components/Button";

const codeSample = `
<Button variant="primary">Primary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline-primary">Primary</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button variant="secondary" size="md" disabled>Disabled Secondary</Button>
`;

const ButtonShowcase = () => {
  return (
    <Layout>
      <div>
        <h2>Button Component Showcase</h2>
      </div>
      <div>
        <h4>Filled Buttons</h4>
        <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div>
        <h4>Outline Buttons</h4>
        <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
        </div>
      </div>

      <div>
        <h4>Disabled State</h4>
        <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" size="md" disabled>
            Disabled Secondary
          </Button>
        </div>
      </div>

      <div>
        <h4>Code</h4>
        <pre className="code-block">
          <code>{codeSample}</code>
        </pre>
      </div>
    </Layout>
  );
};

export default ButtonShowcase;
