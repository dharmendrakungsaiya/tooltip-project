import Card from "./Components/Tooltip/Card";
import {fetchTopAlbum} from "./Components/api/api";
import { useState, useEffect } from "react";

function App() {
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    const getTopAlbum = async () => {
      const data = await fetchTopAlbum();
      setAlbumData(data);
    };
    getTopAlbum();
  }, []);

  return (
    <div>
      {albumData ? <Card data={albumData} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
