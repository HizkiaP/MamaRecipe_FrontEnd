// import React from "react";
import Image from "../../../asset/images/egg-recipe.png";
import Image2 from "../../../asset/images/Rectangle 314.png";
import Image3 from "../../../asset/images/play.svg";
import "./detail-recipe.css";
import Navbar from "../../components/module/navbar";
import Footer from "../../components/module/footer";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId } from "../../configs/redux/action/recipeAction";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipe } = useSelector((state) => state.recipe);
  let {recipe_id} = useParams();

  const handleGetRecipeID = async () => {
    try {
      const recipeByID = await dispatch(getRecipeId(recipe_id));
      console.log("RECIPE BY ID = ", recipeByID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetRecipeID();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col text-center ">
              <div>
                <p className="recipe-title">{recipe.title}</p>
              </div>
              <div>
                <img
                  className="mt-3 egg-recipe"
                  src={recipe.photo}
                  alt="egg-recipe"
                />
                {/*  <img className="position-absolute square1" src="assets/images/Group 66.svg" alt="">
                        <img className="position-absolute bookmark" src="assets/images/bookmark.svg" alt="bookmark"/>
                        <img className="position-absolute square2" src="assets/images/Group 74.svg" alt=""/>
                        <img className="position-absolute thumbs" src="assets/images/thumbs-up.svg" alt="thumbs-up"> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row py-3">
            <div className="col pt-5 offset-2">
              <h5 className="ingredient">Ingredients</h5>
              <p className="pt-3 pb-2">
                {/* - 2 eggs <br />
                - 2 tbsp mayonnaise <br />
                - 3 slices bread <br />
                - a little butter <br />
                - ⅓ carton of cress <br />
                - 2-3 slices of tomato or a lettuce leaf and a slice of ham or
                cheese <br />- crisps , to serve */}
                {recipe.ingredients}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col offset-2">
              <h5 className="pb-3 video">Video Step</h5>
              <button className="btn-play position-relative" onClick={() => navigate(`/detail-video/${recipe.recipe_id}`)}>
                <img
                  src={Image2}
                  alt="rectangle"
                  className="img-fluid pb-3 square"
                />
                <img src={Image3} alt="play" className="play-btn position-absolute"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 offset-2">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Comment :"
                ></textarea>
              </div>
              <div className="py-4 offset-2">
                <button className="btn button" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailRecipe;
