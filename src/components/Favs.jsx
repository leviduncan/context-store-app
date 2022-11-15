import { useContext } from 'react'
import AppContext from '../context/store';
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Favs() {
    const { favs, setFavs } = useContext(AppContext)

const changeFavorite = () => {
    !favs ? setFavs(true) : setFavs(false)
}

console.log(favs)

  return (
    <>
        {!favs ? <FaRegHeart className="favs" onClick={changeFavorite}/> : <FaHeart className="favs" onClick={changeFavorite}/>}
    </>
  )
}

export default Favs