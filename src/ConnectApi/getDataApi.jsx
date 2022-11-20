


const getData = async (url) => {
    try {
    const res = await fetch(url)
    const response = await res.json()
   console.log(response)
    return response
    }
    catch (error) {
        console.log(error)
    }
}




export default getData
