import axios from 'axios'
const url="http://localhost:8080/api/"
export default {
  createUser(data) {
    return axios
      .post(url + 'users', data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
  },
  updateUser(id, data) {
    return axios
      .put(url + 'users/' + id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
  },
  deleteUser(id) {
    return axios
      .delete(url + 'users/' + id)
  },
  getAllUsers() {
    return axios
      .get(url + 'users')
  }
}
