import { useNavigate } from "react-router-dom"

export function NotFound(){

    const navigate = useNavigate()
    
    return (
        <div className="flex flex-col"> 
            <p>Pagina non trovata</p>
            <img src="" />
            <button className="btn primary" onClick={() => {
                navigate("/home")
            }}>go home</button>
        </div>
    )
}