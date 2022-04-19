// import axios from "axios";
// const Token = JSON.parse(JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("persist:root"))))).currentUser.token;
// console.log(Token);

// export const userRequest = axios.create({
//   headers: { token: `Bearer ${Token}` },
// });

// export const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
//   const token =
//     JSON.parse(localStorage.getItem("user")) &&
//     JSON.parse(localStorage.getItem("user"))["token"];
//   if (jwtDecode(token).exp < Date.now() / 1000) {
//     next(action);
//     localStorage.clear();
//   }
//   next(action);
// };