import "./CSS/App.css";

function App() {
  return (
    <div>
      <nav></nav>
      <main>
        <div className="formContainer">
          <div className="FormSwitch">
            <button>Signup</button>
            <button>login</button>
          </div>
          <div className="formInputs">
            <div>
              <p>Name:</p>
              <input type="text" />
            </div>
            <div>
              <p>Email:</p>
              <input type="text" />
            </div>
            <div>
              <p>Password:</p>
              <input type="text" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
