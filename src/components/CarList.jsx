import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const CarList = ({ editecar, newcar, agregarcarros, deletecar, selectedcar,updatecar }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, reset } = useForm();

  const submit = (data, e) => {
    e.preventDefault();
    data.id = Date.now();

    if (editecar !== null) {
      updatecar(data)
    }
    else
    {
      agregarcarros(data);
    }
    const clear = { brand: "", model: "", color: "", year: "", price: "" };
    reset(clear);
    console.log(data);
  };

  useEffect(() => {
    reset(editecar);
  }, [editecar]);

  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Crear Carros
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ marginLeft: "auto" }}>
              {" "}
              Carros nuevos
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="formcar" onSubmit={handleSubmit(submit)} action="">
              <div className="container-input">
                <label htmlFor="brand-input">marca</label> <br />
                <input
                  type="text"
                  placeholder="escribe tu marca"
                  {...register("brand")}
                  required
                />
              </div>
              <div className="container-input">
                <label htmlFor="model-input">modelo</label>
                <br />
                <input
                  type="text"
                  placeholder="escribe el modelo"
                  {...register("model")}
                  required
                />
              </div>
              <div className="container-input">
                <label htmlFor="color-input">color</label> <br />
                <input
                  type="text"
                  placeholder="escribe tu color"
                  {...register("color")}
                  required
                />
              </div>
              <div className="container-input">
                <label htmlFor="year-input">año</label>
                <br />
                <input
                  type="number"
                  placeholder="escribe el año"
                  {...register("year")}
                />
              </div>
              <div className="container-input">
                <label htmlFor="price-input">precio</label>
                <br />
                <input
                  type="number"
                  placeholder="precio"
                  {...register("price")}
                />
              </div>

              <Button className="btn-form" onClick={handleClose} type="submit">
                Submit
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>

      {newcar?.map((carros) => (
        <ul className="father-map" key={carros.id}>
          <li>
            <b>id:</b> {carros.id}
          </li>
          <li>
            <b>Marca: </b> {carros.brand}
          </li>
          <li>
            <b>Modelo: </b>
            {carros.model}
          </li>
          <li>
            <b>Color: </b>
            {carros.color}
          </li>
          <li>
            <b>Año: </b>
            {carros.year}
          </li>
          <li>
            <b>Precio: </b>
            {carros.price}
          </li>

          <div className="btn">
            <Button variant="danger" onClick={() => deletecar(carros.id)}>
              Eliminar
            </Button>
            <Button variant="success" onClick={() => selectedcar(carros)}>
              Actualizar
            </Button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default CarList;
