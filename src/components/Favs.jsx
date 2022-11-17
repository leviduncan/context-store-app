import { useContext } from 'react'
import AppContext from '../context/store';
import FavoriteContext from '../context/FavoriteContext';
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Favs(props) {
    const { products } = useContext(AppContext)
    const { favs, setFavs } = useContext(FavoriteContext)
    const { id } = props


const changeFavorite = () => {
    !favs ? setFavs(true) : setFavs(false)
}

const result = products.filter(item => item.id === id)

console.log(result)

  return (
    <>
        {
            result.map((item) => (
                !favs ? <FaRegHeart className="favs" onClick={changeFavorite}/> : <FaHeart className="favs" onClick={changeFavorite}/>
            )
            
            )
        }
    </>
  )
}

export default Favs