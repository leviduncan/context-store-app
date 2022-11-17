import React from 'react'

const FavoriteContext = React.createContext({})

export const FavoriteProvider = ({ children }) => {
    return (
        <FavoriteContext.Provider value={{

        }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext