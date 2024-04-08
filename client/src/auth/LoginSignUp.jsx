import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsKey } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, register, clearError } from "../store/slices/userSlice";
import ErrorAlert from "./ErrorAlert";
import Loader from "./Loader";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tab, setTab] = useState("login");

  const switchTab = () => {
    if (tab == "login") {
      setTab("signup");
    } else {
      setTab("login");
    }
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginSubmit = (e) => {
    e.preventDefault();
    const object = { loginEmail, loginPassword };
    dispatch(login(object));
    dispatch(clearError());
  };

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userDetail;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/user.png");

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    if (avatar) {
      myForm.set("avatar", avatar);
    }
    console.log(myForm.get("email"));
    dispatch(register(myForm));
    dispatch(clearError());
  };

  const registerDataChange = (e) => {
    if (e.target.name == "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#F0F0F0]">
            <div className="w-[30vmax]  flex flex-col border-2 shadow-lg bg-white sm:w-4/5">
              <div className="w-full border-b-2">
                <button
                  onClick={switchTab}
                  className={
                    tab == "login"
                      ? "bg-[#00286b] text-white px-[1.5vmax] py-[1vmax] w-1/2"
                      : " px-[1.5vmax] py-[1vmax] w-1/2"
                  }
                >
                  Login
                </button>
                <button
                  onClick={switchTab}
                  className={
                    tab == "signup"
                      ? "bg-[#00286b] text-white px-[1.5vmax] py-[1vmax] w-1/2"
                      : " px-[1.5vmax] py-[1vmax] w-1/2"
                  }
                >
                  Register
                </button>
              </div>
              {tab == "login" ? (
                <form
                  onSubmit={loginSubmit}
                  className="flex flex-col p-[3vmax] gap-8    "
                >
                  <div className="flex gap-4 items-center text-lg  border-2 border-gray-200  px-[1.5vmax] ">
                    <AiOutlineMail />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Email"
                      className="w-full py-[1vmax] bg-white"
                      value={loginEmail}
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex gap-4 items-center text-lg border-2   px-[1.5vmax]">
                    <BsKey />
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Enter Password"
                      className="w-full py-[1vmax] bg-white"
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                      }}
                    />
                  </div>
                  <Link
                    to="/password/forgot"
                    className="text-right text-sm text-blue-400"
                  >
                    Forgot Password?
                  </Link>
                  <input
                    type="submit"
                    value="Login"
                    className="py-[1vmax] bg-[#00286b]  text-white cursor-pointer"
                  />
                </form>
              ) : (
                <form
                  onSubmit={registerSubmit}
                  encType="multipart/form-data"
                  className="flex flex-col p-[3vmax] gap-8    "
                >
                  <div className="flex gap-4 items-center text-lg  border-2 border-gray-200  px-[1.5vmax] ">
                    <AiOutlineUser />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your Name"
                      className="w-full py-[1vmax] bg-white"
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="flex gap-4 items-center text-lg  border-2 border-gray-200  px-[1.5vmax] ">
                    <AiOutlineMail />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your Email"
                      className="w-full py-[1vmax] bg-white"
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="flex gap-4 items-center text-lg border-2   px-[1.5vmax]">
                    <BsKey />
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Create Password"
                      className="w-full py-[1vmax] bg-white"
                      value={password}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="flex  items-center  gap-4">
                    <img
                      src={avatarPreview}
                      alt="you"
                      className="w-[20%] rounded-full"
                    />
                    <button className="bg-gray-400 p-[1vmax] w-full text-white overflow-hidden">
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        className=" "
                        onChange={registerDataChange}
                      />
                    </button>
                  </div>

                  <input
                    type="submit"
                    value="Register"
                    // disabled={loading ? true : false}
                    className=" py-[1vmax] bg-[#00286b]  text-white cursor-pointer"
                  />
                </form>
              )}
            </div>
          </div>
          {error ? <ErrorAlert message={error} alert={true} /> : ""}
          {/* <ErrorAlert
            message="To access forem and blogs login first."
            alert={true}
          /> */}
        </>
      )}
    </>
  );
};

export default LoginSignUp;
