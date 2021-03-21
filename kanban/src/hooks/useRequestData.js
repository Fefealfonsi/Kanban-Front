import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, estadoInicial) {
  const [data, setData] = useState(estadoInicial);

    const token = localStorage.getItem("token")

    function getData(){
       
        axios
        .get(url, {
          headers:{
          Authorization: token
        }
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
      
      useEffect(() => {
        getData()
      }, [url]);

  return [data, getData]
}

