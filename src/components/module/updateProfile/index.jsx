import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "../../base/button";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../configs/redux/action/userAction";
// import { useParams } from "react-router-dom";

const UpdateProfile = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [picture, setPicture] = useState("");
  const [changeUser, setChangeUser] = useState({
    username: "",
    image: "",
  });
  // let { user_id } = useParams();

  const handleUploadPicture = (e) => {
    const file = e.target.files[0];
    setPicture(file);
    console.log(file);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    console.log("USER = ", user);
    const form = new FormData();
    form.append("username", changeUser.username);
    form.append("image", picture);
    form.append("email", user.email);
    form.append("password", user.password);
    form.append("phonenumber", user.phonenumber);
    console.log("USERNAME = ", changeUser.username);
    console.log("PICTURE = ", picture);
    try {
      const result = await dispatch(updateUser(form));
      console.log(result);
      alert("Update Profile Success");
    } catch (error) {
      console.log(error);
      alert("Update Profile Failed");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setChangeUser({
      ...changeUser,
      [e.target.name]: value,
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group
          style={{ marginLeft: "20px" }}
          controlId="formFile"
          className="mb-3"
        >
          <Form.Label>User Picture</Form.Label>
          <Form.Control type="file" onChange={handleUploadPicture} />
        </Form.Group>
        <Form.Group controlId="formUsername" style={{ marginLeft: "20px" }}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Edit Username"
            name="username"
            value={changeUser.username}
            onChange={handleChange}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} style={{ marginRight: "25px" }}>
          Close
        </Button>
        <Button
          style={{ marginRight: "25px" }}
          onClick={handleUpdateUser}
          type="submit"
          name="submit"
        >
          Save changes
        </Button>
        {/* <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProfile;
