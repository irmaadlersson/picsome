import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      //skapar en uppdaterad array genom att mappa över alla photon. Den kommer titta på varje photo objekt i den arrayen. Det vi letar efter är att hitta photot som har matchande ID med det som kommer in i denna funktion.
      if (photo.id === id) {
        //Om man hittar ID så kommer den att ha alla props från photo FÖRUTOM isFavorite som kommer att ändras till det mottsatta från vad det är just nu.
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        };
      } //om detta inte är sant, då kommer vi return photot.
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
