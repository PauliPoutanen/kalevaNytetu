import React from "react"

const Tviit =({ tviit, handleDeleteTviit }) => {
    return(
        <li><b>{tviit.content}</b> {}
       / {tviit.date} {tviit.hours}:
        {tviit.minutes}
        
        <button onClick={()=>handleDeleteTviit(tviit.id)}>Poista teksti</button></li>
    )
}
export default Tviit