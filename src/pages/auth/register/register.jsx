// import React from "react";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import Image from "../../../../asset/images/bg-login.png";
import Image2 from "../../../../asset/images/barbecue-1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./register.css";
import { register } from "../../../configs/redux/action/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading} = useSelector((state)=>state.user)
  const [regis, setRegis] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confPassword: ""
  });

  const handleRegister = async () => {
    try {
      const user = await dispatch(register(regis))
      console.log(user);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
    // console.log(regis);
    // axios.post(`${import.meta.env.VITE_API_URL}/register`, {
    //   username: regis.username,
    //   email: regis.email,
    //   phonenumber: regis.phonenumber,
    //   password: regis.password,
    //   confPassword: regis.confPassword
    // })
    // .then(()=>{
    //   navigate('/login')
    // })
    // .catch(()=>{
    //   alert('Register Failed')
    // })
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setRegis({
      ...regis,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <div className="container-md-fluid">
        <div className="row regis-wrapper">
          <div className="col-md position-relative wrapper1">
            <img
              className="opacity-25 bground"
              src={Image}
              alt="background-login"
            />
            <img
              className="position-absolute top-50 start-50 translate-middle bbq"
              src={Image2}
              alt="barbeque"
            />
            {/* <!-- <p className="position-absolute start-50 translate-middle mama">Mama Recipe.</p> --> */}
          </div>
          <div className="col-md wrapper2">
            <div className="text-center mb-2 title">
              <h2>Let’s Get Started !</h2>
              <p>Create new account to access all features</p>
            </div>
            <div className="mb-3 ms-2 name">
              <Input 
              type="text" 
              placeholder="Name" 
              label="Name"
              name="username" 
              value={regis.username} 
              onChange={handleChange}/>
              {/* <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput"
                        placeholder="Name"> */}
            </div>
            <div className="mb-3 ms-2 address">
              <Input
                type="text"
                placeholder="Enter email address"
                label="Email Address"
                name="email"
                value={regis.email}
                onChange={handleChange}
              />
              {/* <label for="formGroupExampleInput2" className="form-label">Email Address</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput2" placeholder="Enter email address"> */}
            </div>
            <div className="mb-3 ms-2 phone">
              <Input
                type="text"
                placeholder="08xxxxxxxxxx"
                label="Phone Number"
                name="phonenumber"
                value={regis.phonenumber}
                onChange={handleChange}
              />
              {/* <label for="formGroupExampleInput" className="form-label">Phone Number</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput"
                        placeholder="08xxxxxxxxxx"> */}
            </div>
            <div className="mb-3 ms-2 pass">
              <Input
                type="password"
                placeholder="Create New Password"
                label="Create New Password"
                name="password"
                value={regis.password}
                onChange={handleChange}
              />
              {/* <label for="formGroupExampleInput2" className="form-label">Create New Password</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput2" placeholder="Create New Password"> */}
            </div>
            <div className="mb-3 ms-2 new-pass">
              <Input
                type="password"
                placeholder="New Password"
                label="New Password"
                name="confPassword"
                value={regis.confPassword}
                onChange={handleChange}
              />
              {/* <label for="formGroupExampleInput2" className="form-label">New Password</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput2" placeholder="New Password"> */}
            </div>
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>
            <div className="mt-4 ms-2">
              <Button onClick={handleRegister}>{loading ? "loading..." : "Register Account"}</Button>
              {/* <button className="btn" type="submit">Register Account</button> */}
            </div>
            <div className="mt-2">
              <p>
                <Link to="/login" className="ms-2 acc">
                  Already have account?{" "}
                  <span className="sign">Log in Here</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
