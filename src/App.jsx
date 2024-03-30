import { useEffect, useState } from "react";
import "./App.css";
import DisplayHomePage from "./homPage/homePage";

function App() {
  // const [gifs, setGifs] = useState([]);

  // useEffect(() => {
  //   const fetchGifs = async () => {
  //     const url =
  //       "https://api.giphy.com/v1/gifs/search?api_key=d2FE15EsXoKpRksn5uUeqoJv4S9stUkr&q=thousand+sunny&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  //     try {
  //       const response = await fetch(url);
  //       const { data } = await response.json();
  //       setGifs(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchGifs();
  // }, []);

  return (
    <>
      <DisplayHomePage />
    </>
  );
}

export default App;
