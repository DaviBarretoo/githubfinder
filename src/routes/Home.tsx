import Search from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user"

export default function Home (){
    const [user, setUser]= useState<UserProps | null>(null)

    // Logando a API

    const loadUser = async(userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

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
        {user && <p>{user.login}</p>}
        </div>
    )

}