class contact{
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.messages = []
    }
}
class user{
    constructor(name, img, password, email){
        this.name = name
        this.password = password
        this.email = email
        this.img = img
        this.contactslist = []
    }
}

let users = {"ahmad1": new user("ahmad1", "ahmad2@gmail.com", "12345","images.jpg"),
"ahmad2": new user("ahmad2", "ahmad2@gmail.com", "12345","images.jpg"),
"ahmad3": new user("ahmad3", "ahmad2@gmail.com", "12345","images.jpg") }

function adduser(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let img = document.getElementById('input_img').value
    document.getElementById('name').value = ''
    document.getElementById('password').value = ''
    document.getElementById('email').value = ''
    document.getElementById('input_img').value = ''
    users[name] = new user(name, password, email, img)
    console.log(users)
}

// const addcontact = (ev)=>{
//     ev.preventDefault();
//     let user = {
//         personalname : document.getElementById('personal_name')
//     }
//     users.push(user)
//     document.forms[0].reset();
// }