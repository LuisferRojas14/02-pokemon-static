
import { Layouts } from '../../../components/layouts'
import NoFavorites from '../../../components/NoFavorites'
import { useEffect, useState } from 'react';
import { localFavorites } from '../../../utils';

import { FavoritePokemons } from '../../../components/pokemon'
;


const FavoritesPage=() =>
{ 
  const [favoritePokemons, setFavoritePokemons]= useState<number[]>([]);
  useEffect(() =>{
    setFavoritePokemons( localFavorites.Pokemons());
  }, []);

  return (
  <Layouts title='Pokemon - Favorito'>
{
  favoritePokemons.length===0
  ?(
    <NoFavorites/>
  )
  :(  <FavoritePokemons pokemons={favoritePokemons}/>)
   
  }
   
  </Layouts>
  )
};

export default FavoritesPage