export const updateCard = (body, resetForm,id, getData, save, setSave) => {
    const token = localStorage.getItem("token")

        
    if(!token){
        alert("Por Favor faça seu login")
    }
    
    axios.put(`${BASE_URL}/cards/list/${id}`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("UPDATE CARD",body)
        resetForm()

        getData()
        setSave(!save)
        
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu card não foi atualizado")
    })
}
