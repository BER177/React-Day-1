let uniqId = 0;

function TodoApp() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  // Xử lý input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Thêm task mới
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  // Xóa task
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Đánh dấu hoàn thành
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Tính toán thống kê
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  return (
    <div>
      {/* Form nhập */}
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nhập task mới..."
        />
        <button type="submit">Thêm</button>
      </form>

      {/* Danh sách task */}
      {todos.length === 0 ? (
        <p>Chưa có task nào. Hãy thêm task đầu tiên!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDelete(todo.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}

      {/* Thống kê */}
      <p>
        Tổng: {total} task(s), Hoàn thành: {completed}, Còn lại: {remaining}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);
