import axios from "axios"
import React, { useEffect } from "react";

const BASE_URL = "http://localhost:5000"

export const createCards = (body, resetForm) => {
    const token = localStorage.getItem("token")

    // console.log("BODY",body,"GETDATA",getData)
    
    if(!token){
        alert("Por Favor faça seu login")
    }
    
    axios.post(`${BASE_URL}/cards`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("CREATE CARD",body)
        // getData()
        resetForm()
        
        
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu card não foi criado")
    })
}

export const deleteCard = (id) => {
    const token = localStorage.getItem("token")

   
    if(!token){
        alert("Por Favor faça seu login")
    }
    
    axios.delete(`${BASE_URL}/cards/${id}`, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("deletou")
        // getData()
        // resetForm()
        
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu card não foi excluido")
    })
}

export const updateCard = (body, resetForm,id) => {
    const token = localStorage.getItem("token")

    // console.log("BODY",body,"GETDATA",getData)
    
    if(!token){
        alert("Por Favor faça seu login")
    }
    
    axios.put(`${BASE_URL}/cards/${id}`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("UPDATE CARD",body)
        // getData()
        resetForm()
        
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu card não foi atualizado")
    })
}
