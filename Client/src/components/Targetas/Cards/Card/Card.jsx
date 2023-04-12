
import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addFavorite, removeFavorite } from '../../../Redux/actions';


function Card(props) {
  const{id, addFavorite, removeFavorite, myFavorites}= (props)
const[isFav, setIsFav]= useState(false)

/*  
Si el estado isFav es true, entonces settea ese estado en false, y despacha la función removeFav que recibiste por props pasándole el id del personaje como argumento.

Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFav que recibiste por props, pasándole props como argumento. */
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(props.id)
    } else {
      setIsFav(true);
      addFavorite(props);
    }
  }

  //---El useEffect comprueba que la card esté dentro de favoritos------- 
  //---El useEfect actualiza la lista de favorito------------------------
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        //esta es la lista de favoritos
        setIsFav(true);
      }
    });
  }, [props.id, myFavorites]);
  
  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.favButton} onClick={handleFavorite}>❤️
        </button>
      ) : (
        <button className={styles.favButton} onClick={handleFavorite}>🤍
        </button>
      )}

      {/*  El condicional "!props.isFavorite && ..." se usa para quitar el boton X de la card cuando este "true" en el componente Favorites */}
      {!props.isFavorite && (
        <button className={styles.cardButton} onClick={props.onCloseCard}>
          X
        </button>
      )}
      <h3>{props.id}</h3>
      <div className={styles.name}>
        <h2>{props.name}</h2>
      </div>
      <div className={styles.speciesYGenero}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>

      {/* al hacer click en la imagen y el nombre de la card te renderiza a detail */}
      <Link to={`/detail/${id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
    </div>
  );
}

//----------fuera del Componente -----------
// ---------se mejoran las actios para que se puedan dispachar---------
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character))
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id))
    }
  }
}


//----myFavorites ya es una parte de las props
const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card); //mapDispatchToProps se usa porque no se quiere traer el estado global, ya eur no se necesita




