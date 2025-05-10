export function GetPlants () {
    return fetch ('http://192.168.131.101:8080/dca/api/plants')
    .then((res)=>{
        return res;
    })
    .then((res) => {
        return res.json()
    })
    .catch((err)=>{
        console.log('aparece un error',err)
    })
}