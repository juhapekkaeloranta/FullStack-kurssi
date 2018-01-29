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

export default { getAll, create, saveAll, printFoo }