import { UserProps } from "../types/user"

import { MdLocationPin } from "react-icons/md"

import { Link } from "react-router-dom"

import classes from "./User.module.css"

export default function User({login,
    avatar_url,
    followers,
    following,
    location,
}:UserProps)  {




    return(


       <div className={classes.user}>
<img src={avatar_url} alt={login}/>
<h2>{login}</h2>

{location && (
    <p className={classes.location}>
    <MdLocationPin/>
    <span>{location}</span>
    </p>
)}

<div>
    <div className={classes.stats}>
<p>Seguidores:</p>
<p className={classes.number}>{followers}</p>
    </div>
    <div>
        <p>Seguindo:</p>
        <p className={classes.number}>{following}</p>
    </div>
</div>
<Link to={`https://github.com/${login}`}> Ir para o GitHub</Link>
{/* add botão de repositorios  */}
</div>
    )
}