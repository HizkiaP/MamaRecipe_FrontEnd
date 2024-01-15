// import React from "react";
import Image from "../../../../asset/images/barbecue-1.svg";
import Image2 from "../../../../asset/images/bg-login.png";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../configs/redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading} = useSelector((state)=>state.user);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });


  const handleLogin = async () => {
    try {
      const user = await dispatch(login(data));
      console.log(user);
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data);
  // const handleLogin = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_API_URL}/login`,
  //       {
  //         email: data.email,
  //         password: data.password,
  //       }
  //     );
  //     console.log(response);
  //     const user = response.data;
  //     localStorage.setItem('token', user.token)
  //     setLoading(false);
  //     alert("Login Success");
  //     navigate("/main");

  //   } catch (error) {
  //     const message = error.response.data.message;
  //     alert(message);
  //     // alert('Your password is incorrect')
  //   }
  // };

  return (
    <>
      <div className="container-md-fluid">
        <div className="row login-wrapper1">
          <div className="col col-6 position-relative column1">
            <img
              className="opacity-25 bground"
              src={Image2}
              alt="background-login"
            />
            <img
              className="position-absolute top-50 start-50 translate-middle bbq"
              src={Image}
              alt="barbeque"
            />
            {/* <!-- <p className="position-absolute start-50 translate-middle mama">Mama Recipe.</p> --> */}
          </div>
          <div className="col col-6 mt-5">
            <div className="col-lg-10 mb-5 text-center title">
              <h2>Welcome</h2>
              <p>Log in into your exiting account</p>
            </div>
            <div className="mb-3 ms-2 email">
              <Input
                type="text"
                placeholder="examplexxx@gmail.com"
                label="E-mail"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              {/* <label htmlFor="formGroupExampleInput" className="form-label">E-mail</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput"
                        placeholder="examplexxx@gmail.com"/> */}
            </div>
            <div className="mb-3 ms-2 password">
              <Input
                type="password"
                placeholder="Password"
                label="Password"
                name="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              {/* <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="text" className="form-control opacity-50" id="formGroupExampleInput2" placeholder="Password"/> */}
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
              <Button onClick={handleLogin}>{loading ? "loading..." : "Login"}</Button>
              {/* <button className="btn" type="submit"> <a className="log" href="landingpage.html">Log in</a></button> */}
            </div>
            <div className="mt-2">
              <p>
                <a href="#" className="ms-2 forgot">
                  Forgot Password ?
                </a>
              </p>
            </div>
            <div className="mt-2">
              <p>
                <Link to="/register" className="ms-2 acc">
                  Don’t have an account? <span className="sign">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
