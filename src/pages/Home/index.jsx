import { useEffect, useState } from "react";
import { DragonsTypes } from "../../components/DragonsTypes";
import { api } from "../../services/api";
import { Header } from "../Header";

import "../Home/styles.css";

export const Home = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    api
      .get("/api/v1/dragon")
      .then((response) => {
        setDragons(response.data);
      });
  }, [setDragons]);

  return (
    <>
      <Header />
      <div className="container-list">
        <main className="drangon-container">
          <h1>Tipos de Dragões</h1>
          <div className="all-container">
            {dragons
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((dragon) => {
                return (
                  <DragonsTypes
                  key={dragon.id}
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
};
