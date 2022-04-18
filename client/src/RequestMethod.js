import axios from "axios";
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")));
console.log(Token);

export const userRequest = axios.create({
  headers: { token: `Bearer ${Token}` },
});
