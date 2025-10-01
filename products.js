function ProductList() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedPost, setSelectedPost] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi fetch:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Đang tải…</p>;
  }

  // Hàm cắt body còn 100 ký tự
  const truncate = (text, maxLength = 100) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
  };

  return (
    <div>
      <div className="grid">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3>{post.id}. {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
            <p>{truncate(post.body)}</p>
            <button onClick={() => setSelectedPost(post)}>Xem chi tiết</button>
          </div>
        ))}
      </div>

      {/* Popup chi tiết */}
      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedPost(null)}>&times;</span>
            <h2>{selectedPost.id}. {selectedPost.title.charAt(0).toUpperCase() + selectedPost.title.slice(1)}</h2>
            <p>{selectedPost.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductList />);
