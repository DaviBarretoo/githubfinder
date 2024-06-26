import Search from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user"
import User from "../components/User"
import Error from "../components/Error"

export default function Home (){
    const [user, setUser]= useState<UserProps | null>(null)
const [error, setError] = useState(false)
    // Logando a API

    const loadUser = async(userName: string) => {
        setError(false)
        setUser(null)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        if(res.status === 404) {
            setError(true)
            return;
        }
        // Pegando somente o que eu vou usar do objeto recebido do Data
    const { avatar_url, login, location,followers,following} = data
   

    const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
    }

    setUser(userData)
};
    return(
        <div>
        <Search loadUser={loadUser}/>
         {/* usando Spreadoperator para "espalhar as info do user" */}
        {user && <User {...user}/>}
        {error && <Error/>}
        </div>
    )

}