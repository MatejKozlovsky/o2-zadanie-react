import { InputWithLabel } from "./components/inputWithLabel"

function App() {

  return (
    <>
      <InputWithLabel 
        label="Default"
        placeholder="Placeholder"
      />
      <InputWithLabel 
        label="Required"
        placeholder="Placeholder"
        required
      />
      <InputWithLabel 
        label="Disabled"
        placeholder="Placeholder"
        required
        disabled
      />
      <InputWithLabel
        label="Danger"
        variant={"danger"}
      />
      <InputWithLabel 
        label="Warning"
        variant={"warning"}
      />
    </>
  )
}

export default App
