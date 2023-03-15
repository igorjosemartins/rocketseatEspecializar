const url = "http://localhost:5500/api"

// constants
const newUser = {
  name: "Igor",
  avatar: "https://picsum.photos/200/300",
  city: "Florianópolis",
}

const userUpdated = {
  name: "Axios PUT test",
  avatar: "https://picsum.photos/200/300",
  city: "test",
}

// functions
function getUsers() {
  axios
    .get(url)
    .then((res) => {
      apiResult.textContent = JSON.stringify(res.data)
    })
    .catch((e) => console.error(e))
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => console.error(e))
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((res) => {
      const data = res.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch((e) => console.error(e))
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((res) => console.log(res))
    .catch((e) => console.error(e))
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((res) => console.log(res))
    .catch((e) => console.error(e))
}

getUsers()

// addNewUser(newUser)

getUser(3)

// updateUser(5, userUpdated)

// deleteUser(7)
