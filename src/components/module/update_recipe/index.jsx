import { useState, useEffect } from "react";
// import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { updateRecipe } from "../../../configs/redux/action/recipeAction";
import { useParams } from "react-router-dom";

const UpdateRecipe = ({show, onHide, recipe_id}) => {
  const dispatch = useDispatch();
  const {recipe} = useSelector((state) => state.recipe);
  // let {recipe_id} = useParams();

  const [image, setImage] = useState("");
  const [changeRecipe, setChangeRecipe] = useState({
    title: "",
    ingredients: "",
    photo: "",
    video: "",
  });
  

  // useEffect(()=>{
  //   if(show){
  //     axios.get(`${import.meta.env.VITE_API_URL}/recipe/${recipeId}`)
  //     .then((res)=>{
  //       setChangeRecipe(res.data)
  //     })
  //     .catch((error)=>{
  //       console.log(error.message);
  //     })
  //   }
    
  // }, [show, recipeId])

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
      const result = await dispatch(updateRecipe(form, recipe_id))
      alert('Update Recipe Success')
      console.log(result);
    } catch (error) {
      alert('Update Recipe Failed')
      console.log(error.message);
    }
    console.log(setChangeRecipe);
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
        <Form.Group style={{ marginLeft: "15px" }} controlId="formFile">
          <Form.Label>Recipe Picture</Form.Label>
          <Form.Control type="file" onChange={handleUpload} />
        </Form.Group>
        <Form.Label style={{ marginLeft: "15px" }} className="mt-2">Recipe</Form.Label>
        <div className="mb-3" style={{ marginLeft: "15px" }}>
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
        <div className="mb-3" style={{ marginLeft: "15px" }}>
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
        <div className="mb-3" style={{ marginLeft: "15px" }}>
          <input
            // style={{ '::placeholder': {fontSize: '14px'} }}
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
        <Button variant="secondary" onClick={onHide} style={{ border: "none", marginRight: "30px" }}>
          Close
        </Button>
        <Button
          variant="warning"
          name="submit"
          type="submit"
          onClick={handleUpdateRecipe}
          style={{ marginRight: "30px" }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    </>
  );
};

// UpdateRecipe.proptypes = {
//   show: PropTypes.any,
//   onHide: PropTypes.any,
//   recipe_id: PropTypes.any
// }





export default UpdateRecipe;
