// import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import {FaTrash} from 'react-icons/fa'
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";
// import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import Modal from "../update_recipe";
import UpdateRecipe from "../update_recipe";
import { deleteRecipe } from '../../../configs/redux/action/recipeAction';
import { useNavigate, useParams } from 'react-router-dom';
// import DeleteConfirmationModal from "../update_recipe";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteRecipeId, setDeleteRecipeId] = useState();
  const [showModal, SetModal] = useState(false);
  const [selectById, setSelectById] = useState(null);
  // let {recipe_id} = useParams();
  // const {recipe} = useSelector((state) => state.recipe);

  const handleUpdate = (recipeId) => {
    setSelectById(recipeId)
    SetModal(true)
  }

  const handleDelete = (recipe_id) => {
    // dispatch()
    setDeleteRecipeId(recipe_id)

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this recipe!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteRecipe(recipe_id)
      } else {
        setDeleteRecipeId(null);
      }
    });
  }

  // useEffect(()=>{
  //   if(deleteRecipeId !== null){
  //     handleDeleteConfirmed()
  //   }
  // }, [deleteRecipeId])

  // const handleDeleteConfirmed = () => {
   
  // }

  const handleDeleteRecipe = async (recipe_id) => {
    try {
      // await axios.delete(`${import.meta.env.VITE_API_URL}/recipe/${deleteRecipeId}`)
      const recipe = await dispatch(deleteRecipe(recipe_id))
      console.log(recipe);
      Swal.fire({
        icon: "success",
        title: "Delete Success",
        text: "Delete Success"
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Delete Failed" 
      })
    }
  }

  return (
    <>
    <div className='position-relative'>
      <img src={data.photo} alt={data.title} className="chicken-bomb mt-3" onClick={() => navigate(`/detail-recipe/${data.recipe_id}`)} />
      <button onClick={() => handleDelete(data.recipe_id)} className="position-absolute delete-button"><FaTrash /></button>
      <button onClick={() => handleUpdate(data.recipe_id)} className="position-absolute edit-button"><TbEdit/></button>
      <p className="position-absolute chicken-text">
        {data.title}
      </p>
    </div>
    <UpdateRecipe
      show = {showModal}
      onHide={()=>SetModal(false)}
      recipe_id={selectById}
      />
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object
}

export default Card;
