import PEOPLE_API from "./api"
import api from "./api"


const getApi = async (url) => {
    try {
    const res = await fetch(url)
    const response = await res.json()
    // console.log(response.results)
    return response
    } 
    catch (error) {
        console.log(error)
    }
    // fetch(PEOPLE_API)
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.log(error))
}




export default getApi