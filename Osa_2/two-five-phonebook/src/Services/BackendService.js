import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (objectToCreate) => {
  return axios.post(baseUrl, objectToCreate)
}

const saveAll = (objectToSave) => {
  return axios.post(baseUrl, objectToSave)
}

const printFoo = () => {
  console.log('fooFromBackendService!');
}

const getByName = (nameToFind) => {
  console.log(nameToFind);
  return (
    axios.get(baseUrl.concat('?name=').concat(nameToFind))
  )
}

const deleteById = (idToDelete) => {
  return (
    axios.delete(baseUrl.concat('/').concat(idToDelete))
  )
}

const deleteByName = (nameToDelete) => {
  return (
    getByName(nameToDelete)
    .then(response => {
      const idToDelete = response.data[0].id
      console.log(baseUrl.concat('/').concat(idToDelete))
      return (
        deleteById(idToDelete)
      )
   })
  )
}

export default { getAll, create, saveAll, printFoo, deleteByName }