import Button from "./components/ui/button";

function App() {
    return (
        <div style={{ padding: "40px" }}>
            <h1>UI Dashboard System</h1>

            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button disabled>Disabled Button</Button>
        </div>
    )
}

export default App
