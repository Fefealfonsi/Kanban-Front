import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const createCards = async (body, resetForm, getData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Por Favor faça seu login");
  }

  axios
    .post(`${BASE_URL}/cards`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      getData();
      resetForm();
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error.message);
      alert("ops, seu card não foi criado");
    });
};

export const deleteCard = (id, getData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Por Favor faça seu login");
  }

  axios
    .delete(`${BASE_URL}/cards/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      getData();
    })
    .catch((error) => {
      console.log(error.message);
      alert("ops, seu card não foi excluido");
    });
};

export const updateCard = (body, resetForm, id, getData, save, setSave) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Por Favor faça seu login");
  }

  axios
    .put(`${BASE_URL}/cards/${id}`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      resetForm();
      getData();
      setSave(!save);
    })
    .catch((error) => {
      console.log(error.message);
      alert("ops, seu card não foi atualizado");
    });
};
