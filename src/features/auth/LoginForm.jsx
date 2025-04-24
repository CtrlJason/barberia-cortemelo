import { usersService } from "@/services/users.service"
import { useState } from "react"

function LoginForm(){
    function sendData (data){
        usersService(data)
    }    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let data = [email,password]
    return (
        <>
            <div className="h-20 mt-20">
                <input type="email" required placeholder="Escribe tu email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" required placeholder="Escribe tu contraseña" onChange={(p) => setPassword(p.target.value)}/>
                <button onClick={() => sendData(data = data)}>Iniciar Sesion</button>
            </div>
        </>
    )
} 

export default LoginForm