function CommentSystem() {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [form, setForm] = React.useState({ name: "", email: "", body: "" });

  // Lấy comment từ API
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi fetch:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.body) return;

    const newComment = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      body: form.body,
      time: "Vừa xong"
    };

    setComments([newComment, ...comments]); // thêm vào đầu
    setForm({ name: "", email: "", body: "" }); // reset form
  };

  if (loading) return <p>Đang tải…</p>;

  return (
    <div className="comment-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Nội dung bình luận"
          value={form.body}
          onChange={handleChange}
        />
        <button type="submit">Gửi</button>
      </form>

      <div className="comment-list">
        {comments.map((cmt) => (
          <div key={cmt.id} className="comment-item">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(cmt.name)}&background=random`}
              alt={cmt.name}
              className="avatar"
            />
            <div>
              <p><strong>{cmt.name}</strong> ({cmt.email})</p>
              <p>{cmt.body}</p>
              <small>{cmt.time || "2 giờ trước"}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CommentSystem />);
