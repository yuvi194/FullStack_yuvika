import './App.css';

function App() {
  const userName = "Yuvika"; 
  const getGreeting = () => "Welcome to React "; 
  return (
    <div>
        <h1>Hello World! </h1>
        <h1>Hello, {userName}!</h1>  
        <p>{getGreeting()}</p>      
        <p>Random Lucky Number: {Math.floor(Math.random() * 100)}</p>
    </div>
  );
}

export default App;
