import { useEffect, useState } from "react";
// import React from "react";
// import axios from "axios";
import Image from "../../../asset/images/Ellipse 127.svg";
import Card from "../../components/module/card";
// import Swal from "sweetalert2";
import "./profile.css";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../../configs/redux/action/recipeAction";

const Profile = () => {
  const dispatch = useDispatch();
  const {recipe} = useSelector((state)=>state.recipe)
  // const [recipe, setRecipe] = useState([]);
  
  const handleGetRecipe = async () => {

    // axios.get(`${import.meta.env.VITE_API_URL}/recipe`).then((res) => {
    //   console.log(res.data.data);
    //   setRecipe(res.data.data);
    // });
    try {
      const recipes = await dispatch(getRecipe(recipe))
      console.log(recipes);

    } catch (error) {
      console.log(error);
    }

  };
    
  // const handleProfile = () => {

  // }

  useEffect(() => {
    // dispatch(getRecipe())
    handleGetRecipe();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center mt-5">
              <img src={Image} alt="profile-photo" className="add-pp" />
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5">
              <p className="profile-name">Garneta Sharina</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-4 ms-5 mt-4">
            <ul className="d-flex justify-content-between mx-3">
              <li className="my-recipe">My Recipe</li>
              <li className="saved-recipe">Saved Recipe</li>
              <li className="liked-recipe">Liked Recipe</li>
            </ul>
          </div>
          <div className="mb-4 line"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {recipe.map((item) => (
              <div className="col col-md-3 position-relative ms-3" key={item.recipe_id}>
                <Card data={item}></Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Profile;
