import React, { useState, useEffect } from "react";
import Card from "./Components/Tooltip/Card";
import { fetchTopAlbum } from "./Components/api/api";

function App() {
  const [albumData, setAlbumData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopAlbum = async () => {
      const data = await fetchTopAlbum();
      if (data) {
        setAlbumData(data);
      }
      setLoading(false);
    };
    getTopAlbum();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : (albumData ? <Card data={albumData[0]} /> : <p>No data available</p>)}
     </div>
  );
}

export default App;