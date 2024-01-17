import { useState, useEffect } from "react";
// import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import PropTypes from 'prop-types'

const UpdateRecipe = ({show, onHide, recipeId}) => {

  const [image, setImage] = useState("");
  const [changeRecipe, setChangeRecipe] = useState({
    title: "",
    ingredients: "",
    photo: "",
    video: "",
  });

  useEffect(()=>{
    if(show){
      axios.get(`${import.meta.env.VITE_API_URL}/recipe/${recipeId}`)
      .then((res)=>{
        setChangeRecipe(res.data)
      })
      .catch((error)=>{
        console.log(error.message);
      })
    }
    
  }, [show, recipeId])

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  };

  const handleUpdateRecipe = async (e) => {
    e.preventDefault(); 
    const form = new FormData();
    form.append("title", changeRecipe.title);
    form.append("ingredients", changeRecipe.ingredients);
    form.append("photo", image);
    form.append("video", changeRecipe.video);
    try {
      const result = await axios.put(`${import.meta.env.VITE_API_URL}/recipe/${recipeId}`, form)
      alert('Update Recipe Success')
      console.log(result);
    } catch (error) {
      alert('Update Recipe Failed')
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setChangeRecipe({
      ...changeRecipe,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group controlId="formProfilePicture">
          <Form.Label>Recipe Picture</Form.Label>
          <Form.Control type="file" onChange={handleUpload} />
        </Form.Group>
        <Form.Label>Recipe</Form.Label>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Edit name food"
            name="title"
            value={changeRecipe.title}
            onChange={handleChange}
            aria-label=".form-control-lg example"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Edit ingredients"
            name="ingredients"
            value={changeRecipe.ingredients}
            onChange={handleChange}
            aria-label=".form-control-lg example"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Edit video"
            name="video"
            value={changeRecipe.video}
            onChange={handleChange}
            aria-label=".form-control-lg example"
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="warning"
          name="submit"
          type="submit"
          onClick={handleUpdateRecipe}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    </>
  );
};



export default UpdateRecipe;
