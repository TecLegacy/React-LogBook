import Herp from './components/hero/Herp';

function App() {
  const x = false;
  if (x) {
    return <div> hello</div>;
  }

  return (
    <>
      <Herp />
    </>
  );
}

export default App;
