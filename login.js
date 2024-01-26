// Insert your code here
document.querySelector('#register').addEventListener('click', function () {
    const formData = {
        name: document.querySelector("#registerName").value,
        email: document.querySelector("#registerEmail").value,
        password: document.querySelector("#registerPassword").value
    }
    fetch('https://weatherappback-omega.vercel.app/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then(response => response.json()
        .then(data => {
            console.log(data)
            window.location.assign("index.html")
        }))
})

document.querySelector('#connection').addEventListener('click', function () {
    const formData = {
        email: document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    }
    fetch('https://weatherappback-omega.vercel.app/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then(response => response.json()
        .then(data => {
            console.log(data)
            window.location.assign("index.html")
        }))
})