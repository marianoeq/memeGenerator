const getdata = async() => {
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json();
    return data
}
 console.log(data)
export default getdata;