function WeatherApp() {
  const weatherData = {
    hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65, icon: "☀️" },
    hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78, icon: "⛅" },
    danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82, icon: "🌧️" },
    bentre: { city: "Bến Tre", temp: 29, weather: "Mưa to", humidity: 80, icon: "🌧️" },
  };

  const [city, setCity] = React.useState("hanoi");
  const [data, setData] = React.useState(weatherData[city]);

  const handleChange = (e) => {
    const selected = e.target.value;
    setCity(selected);
    setData(weatherData[selected]);
  };

  const handleRefresh = () => {

    const newTemp = data.temp + Math.floor(Math.random() * 11 - 5);
    const newHumidity = data.humidity + Math.floor(Math.random() * 11 - 5);

    setData({
      ...data,
      temp: newTemp,
      humidity: newHumidity
    });
  };

  return (
    <div className="weather-container">
      <select value={city} onChange={handleChange}>
        <option value="hanoi">Hà Nội</option>
        <option value="hcm">TP.HCM</option>
        <option value="danang">Đà Nẵng</option>
        <option value="bentre">Bến Tre</option>
      </select>

      <div className="weather-card">
        <h2>{data.city} {data.icon}</h2>
        <p><strong>Nhiệt độ:</strong> {data.temp}°C</p>
        <p><strong>Thời tiết:</strong> {data.weather}</p>
        <p><strong>Độ ẩm:</strong> {data.humidity}%</p>
      </div>

      <button onClick={handleRefresh}>Làm mới</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WeatherApp />);
