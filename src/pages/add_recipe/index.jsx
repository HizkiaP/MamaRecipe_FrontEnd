// import React, { useState } from "react";
import Navbar from "../../components/module/navbar";
import Image from "../../../asset/images/image.svg";
import "./add-recipe.css";
import Footer from "../../components/module/footer";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRecipe } from "../../configs/redux/action/recipeAction";


const AddRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [image, setImage] = useState("");
  const [addRecipe, setAddRecipe] = useState({
    title: "",
    ingredients: "",
    photo: "",
    video: "",
  });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  };

  const handleAddRecipe = async (e) => {
    try {
      e.preventDefault(); 
    const form = new FormData();
    form.append("title", addRecipe.title);
    form.append("ingredients", addRecipe.ingredients);
    form.append("photo", image);
    form.append("video", addRecipe.video);
    const recipe = await dispatch(postRecipe(form))
    console.log(recipe);
    alert("Add Recipe Success")
    navigate("/main")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAddRecipe({
      ...addRecipe,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="row py-5">
            <div className="col position-relative offset-1">
              <div className="mb-3 ms-2">
                <input
                  onChange={handleUpload}
                  type="file"
                  className="form-control text-start ps-4 opacity-50 add-image"
                  id="image"
                ></input>
                <div className="row">
                  <div className="col">
                    <img
                      src={Image}
                      alt="image"
                      className="position-absolute add-img"
                    />
                    <p className="position-absolute add-img-photo">Add Photo</p>
                  </div>
                </div>
              </div>
              <div className="mb-3 ms-2">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control opacity-50 add-title"
                  id="formGroupExampleInput"
                  placeholder="Title"
                  name="title"
                  value={addRecipe.title}
                />
              </div>
              <div className="mb-3 ms-2">
                <textarea
                  onChange={handleChange}
                  type="text"
                  className="form-control opacity-50 add-ingredients"
                  id="formGroupExampleInput"
                  placeholder="Ingredients"
                  name="ingredients"
                  value={addRecipe.ingredients}
                />
              </div>
              <div className="mb-3 ms-2">
                <input
                  onChange={handleChange}
                  type="text"
                  className="text-start ps-4 opacity-50 add-video"
                  placeholder="Video"
                  name="video"
                  value={addRecipe.video}
                />
                  
                
              </div>
              <div className="py-4 offset-2">
                <button
                  onClick={handleAddRecipe}
                  className="btn add-button"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddRecipe;
