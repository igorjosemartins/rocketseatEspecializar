const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(res =>res.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(e => console.error(e))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(e => console.error(e))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(e => console.error(e))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {"Content-type": "application/json; chartset=UTF-8"}
    })
        .then(res => res.json())
        .then(data => alertApi.textContent = data)
        .catch(e => console.error(e))

}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(res => res.json())
        .then(data => alertApi.textContent = data)
        .catch(e => console.error(e))
}

const newUser = {
    name: "Igor Martins",
    avatar: "",
    city: "Florianópolis"
}

const updatedUser = {
    name: "PUT test",
    avatar: "https://picsum.photos/200/300",
    city: "PUT test"
}

//addUser(newUser)

//updateUser(updatedUser)

getUsers()
getUser()
