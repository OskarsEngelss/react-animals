import { useEffect, useState } from "react";

function App() {
  const [zoodarzs, setZoodarzs] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("animals.json");
      const fetchedAnimals = await response.json();
      setZoodarzs(fetchedAnimals);
    }

    getData();
  }, []);

  console.log(zoodarzs)
  const renderZoodarzs = zoodarzs.map(singleAnimal => {
    return (
      <article>
        <img src={singleAnimal["image"]} alt={singleAnimal["animal"]} />
        <div class="info">
          <h2>{singleAnimal["animal"]}</h2>
          <p>{singleAnimal["description"]}</p>
          <ul>
            {singleAnimal["answers"].map(singleAnswer => 
              <li>{singleAnswer}</li>
            )}
          </ul>
        </div>
      </article>
    );
  });

  return <main>{renderZoodarzs}</main>;
}

export default App;
