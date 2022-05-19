import { useState } from "react";
import { Header } from "../Header";

import './styles.css'

function initialState() {
  return {
    name: "",
    type: "",
    histories: "",
  };
}

export const RegistersDragon = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }



  return (
    <>
      <Header />
      <main>
         <div className="container-form">
            <h1>Cadastrar Dragão</h1>
            <div className="line-register"></div>
            <div className="content-form">
               <form className="">
                  <div className="fields">
                  <label htmlFor="name">Nome</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     onChange={onChange}
                     value={values.name}
                  />
                  </div>
                  <div className="fields">
                  <label htmlFor="type">Tipo</label>
                  <input
                     type="text"
                     name="type"
                     id="type"
                     onChange={onChange}
                     value={values.type}
                  />
                  </div>
                  <div className="fields">
                  <label htmlFor="histories">Histórias</label>
                  <textarea
                     type="text"
                     name="histories"
                     id="histories"
                     onChange={onChange}
                     value={values.histories}
                  />
                  </div>
                  <div className="btn-register">
                  <button type="submit">Cadastrar</button>
                  </div>
               </form>
            </div>
         </div>
      </main>
    </>
  );
};
