const axios = require("axios");

const API_URL = "http://192.168.1.33:8080/api/auth/local/register";
const API_TOKEN =
  "Bearer 32eb9c662fa6ed0757adda7fe2534f0e8090d2f89d464b5ae50a03cae2c8baa6c034c6d014d1dd6bbac45fa9fb808a9c03739af5c3edf90f726caa3fa268fcb50cc1c2e959c52e2ccccfa1089f8c4989f61fe195c7b63345c43b11f2182c121333239c7e30c6d83081c999cc28810a0ec7fc7d18ad0a09a6860fad08506b890e";

const payload = {
  username: "chonlatarn",
  email: "s6602041520047@email.kmutnb.ac.th",
  password: "knowney12867",
};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("ส่ง API สำเร็จ", response.data);
  })
  .catch((err) => {
    console.log("ส่งไม่ผ่าน", err);
  });
