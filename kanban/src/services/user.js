import axios from "axios"


const BASE_URL = " http://localhost:5000"


export const login = async (body) => {
    
    axios.post(`${BASE_URL}/login`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        window.location.href = "/";
        
    })
    .catch(error => {
        alert("Login ou senha inválidos!")
        console.log(error.message)
    })
}