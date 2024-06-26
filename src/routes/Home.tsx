import Search from "../components/Search"
import { useState } from "react"

export default function Home (){
    const [user, setUser]= useState(null)
    return(
        <div>
        <Search/>
        </div>
    )

}