import { users } from "@/utils/db";
let access = false;
export function usersService (data){
    const user = users.find ((user) => user.email === data.email);
    if(data.email === user.email && data.password === user.password){
            access = true;
            console.log ("Acceso concedido")
    } else {
        console.log ("Acceso denegado")
    }
    
}