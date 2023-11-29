import { useEffect, useState } from "react";
import "../index.css";

function Chuckjokes() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jokesArray = [];

        for (let i = 0; i < 20; i++) {
          const response = await fetch(
            "https://md-chuck-norris-jokes.herokuapp.com/jokes/random/?X-API-Key=d3f43c4f-9ac9-45a2-8976-f26ab574a3c0"
          );
          const data = await response.json();

          const newData = {
            id: data.id,
            value: data.value,
            author: data.author,
          };

          jokesArray.push(newData);
          console.log(newData);
        }

        setDataList(jokesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-20">
        <center>
          <img src="./Head-Title.png" alt="" id="style-head-img" />
          <br />

          <section className="animate-spin">
            <img src="./circle-load.png" alt="" id="style-load-circle" />
          </section>

          {dataList.map((item) => (
            <div
              key={item.id}
              className="border border-gray-600 text-white mt-5 rounded-md"
              id="style-content-border"
            >
              <p className="mt-2 underline">Joke #{item.id}:</p>
              <br />

              <div
                className="border border-gray-950 rouded-full text-stone-950"
                id="joke-border"
              >
                <p className="mt-2 mb-2">{item.value}</p>
              </div>

              <p className="mt-4">Author: {item.author}</p>
              <br />
            </div>
          ))}
        </center>
      </div>
    </div>
  );
}

export default Chuckjokes;
