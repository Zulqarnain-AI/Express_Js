export default function login(){
    return `
    <form action="/submit" method = "post">
    <input type="text" placeholder="enter username" />
    <br><br>
    <input type="password" placeholder="enter password" />
    <br><br>
    <button>Log in</button>
    </from>
    `
}