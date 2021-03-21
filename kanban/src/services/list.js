import axios from "axios";
const BASE_URL = "http://localhost:5000";

export const updateList = async (id, getData, columnName) => {
  const token = localStorage.getItem("token");

  const body = {
    list: columnName,
  };

  if (!token) {
    alert("Por Favor faça seu login");
  }
  axios
    .put(`${BASE_URL}/cards/list/${id}`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      getData();
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error.message);
      alert("ops, seu card não foi atualizado");
    });
};
