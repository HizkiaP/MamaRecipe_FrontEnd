import { useEffect, useState } from "react";
// import React from "react";
// import axios from "axios";
// import Image from "../../../asset/images/Ellipse 127.svg";
import Pencil from "../../../asset/images/edit-3.png";
import Avatar from "../../../asset/images/profile-avatar.png";
import Card from "../../components/module/card";
// import Swal from "sweetalert2";
import "./profile.css";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipe,
  getRecipeByUserId,
} from "../../configs/redux/action/recipeAction";
import { getByUserId } from "../../configs/redux/action/userAction";
import { useNavigate, useParams } from "react-router-dom";
import UpdateProfile from "../../components/module/updateProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipe } = useSelector((state) => state.recipe);
  const { user } = useSelector((state) => state.user);
  const [showModal, setModal] = useState(false);
  let { user_id } = useParams();
  // const [recipe, setRecipe] = useState([]);

  // const handleGetRecipe = async () => {
  //   try {
  //     const recipes = await dispatch(getRecipe(recipe));
  //     console.log("DATA RECIPE = ", recipes);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleGetRecipeByUserId = async () => {
    try {
      const recipeUser = await dispatch(getRecipeByUserId(recipe));
      console.log("RECIPE USER ID = ", recipeUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetProfile = async () => {
    try {
      const getUserByID = await dispatch(getByUserId(user));
      console.log("DATA USER BY ID = ", getUserByID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // dispatch(getRecipe())
    handleGetRecipeByUserId();
  }, []);

  useEffect(() => {
    handleGetProfile();
  }, []);

  const updateProfileClick = () => {
    setModal(true);
  };

  // const handleUpdateUser = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const form = new FormData();
  //     form.append('')
  //     const userUpdate = await dispatch(updateUser())
  //   } catch (error) {

  //   }
  // }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="position-relative">
              <div className="col d-flex justify-content-center mt-5">
                <img
                  src={user.image ? user.image : Avatar}
                  alt="profile-photo"
                  className="add-pp"
                />
              </div>
              <div>
                <button
                  className="position-absolute pencil start-50"
                  onClick={() => updateProfileClick(user_id)}
                >
                  <img src={Pencil} alt="update-profile" />
                </button>
              </div>
              <UpdateProfile show={showModal} onHide={() => setModal(false)} />
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5">
              <p className="profile-name">{user.username}</p>
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
            <div className="col col-md-3 d-flex gap-3">
              {recipe
                ? recipe.map((item) => (
                    <Card key={item.recipe_id} data={item}></Card>
                  ))
                : "No Recipe Added Yet"}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
