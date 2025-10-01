function ProfileCard() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Gọi API khi component mount
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi fetch API:", error);
        setLoading(false);
      });
  }, []); // dependency [] => chỉ gọi 1 lần

  if (loading) {
    return <p>Đang tải…</p>;
  }

  if (!user) {
    return <p>Lỗi khi tải dữ liệu.</p>;
  }

  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProfileCard />);
