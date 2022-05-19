import axios from "axios";
import { useEffect, useState } from "react";
import { DragonsTypes } from "../../components/DragonsTypes";
import { Header } from "../Header";

import "../Home/styles.css";

export const Home = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    axios
      .get("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
      .then((response) => {
        setDragons(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      
      <div className="container-list">
        <main className="drangon-container">
          <h1>Tipos de Dragões</h1>
          <div className="all-container">
            {dragons
              .map((dragon, index) => {
                return (
                  <DragonsTypes
                    key={index}
                    id={dragon.id}
                    name={dragon.name}
                    type={dragon.type}
                    createdAt={dragon.createdAt}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </>
  );
}
