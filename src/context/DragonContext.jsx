import { createContext, useState } from "react";
import { api } from "../services/api";

export const DragonContext = createContext({});

function initialState() {
  return {
    name: "",
    type: "",
    createdAt: "",
    bio: [],
  };
}

export const DragonProvider = ({ children }) => {
  // const [ name, setName ] = useState("")
  // const [ type, setType ] = useState("")
  // const [ createdAt, setCreatedAt ] = useState("")
  const [values, setValues] = useState(initialState);
  const [id, setId] = useState(false);

  function handleAdd() {}

  function handleEdit(id) {
    api.patch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`);
  }

  function handleDelete(id) {
    api.delete(
      `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
    );
  }

  function handleSubmit() {}

  return (
    <DragonContext.Provider
      value={{ values, handleAdd, handleSubmit, handleEdit, handleDelete, id }}
    >
      {children}
    </DragonContext.Provider>
  );
};
