const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(res => {
            apiResult.textContent = JSON.stringify(res.data)
        })
        .catch(e => console.error(e))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(res => {
            console.log(res)
        })
        .catch(e => console.error(e))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(res => {
            const data = res.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(e => console.error(e))
}

const newUser = {
    name: "Igor",
    avatar: "https://picsum.photos/200/300",
    city: "Florianópolis"
}

getUsers()

//addNewUser(newUser)

getUser(2)