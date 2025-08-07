import './App.css';

function App() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  return (
    <div className="container">
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
