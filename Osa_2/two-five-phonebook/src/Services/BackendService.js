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

const deleteObject = (idToDelete) => {
  console.log(idToDelete);
  console.log(baseUrl.concat('/').concat(idToDelete))
  return axios.delete(baseUrl.concat('/').concat(idToDelete))
}

export default { getAll, create, saveAll, printFoo, deleteObject }