function CounterApp() {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const getClassName = () => {
    if (count > 0) return "positive";
    if (count < 0) return "negative";
    return "zero";
  };

  const getStatus = () => {
    if (count > 0) return "Dương";
    if (count < 0) return "Âm";
    return "Bằng không";
  };

  return (
    <div>
      <div
        className={getClassName()}
        style={{ fontSize: "40px", margin: "20px" }}
      >
        {count}
      </div>
      <p>Trạng thái: {getStatus()}</p>
      <div>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterApp />);
