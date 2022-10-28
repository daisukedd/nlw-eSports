interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Download"/>
      <Button title="Upload"/>
      <Button title="Jumper"/>
    </div>
  )
}

export default App
