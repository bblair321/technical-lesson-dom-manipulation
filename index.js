const userInfo = {
    username: "flatuser123",
    description: "Hi, welcome to my webpage! Just a new user of this website!",
    theme: "red"
}

function displayUser(userinfo){
    const header = document.querySelector("#main")
    header.textContent = userInfo.username + " 's Personal Webpage"
    header.className = userInfo.theme

    const description = document.createElement("p")
    const body = document.querySelector("body")

    description.textContent = userInfo.description
    description.className = userInfo.theme

    body.append(description)
}

displayUser(userInfo)

