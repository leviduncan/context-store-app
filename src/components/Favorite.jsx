import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Favorite() {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        if(toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

  return (
    <>
        {toggle ? <FaHeart className="favs" onClick={handleClick} /> : <FaRegHeart className="favs" onClick={handleClick} />}
    </>
  )
}

export default Favorite