import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { Pokemon } from '../../interfaces/pokemon-full';
import { count } from 'console';
import { useRouter } from 'next/router';

interface Props{
    pokemonId:number;
}
export const FavoritesCardPokemon:FC<Props>=({pokemonId})=> {
  const router = useRouter();
  const onFavoriteClicked = ()=>{
router.push(`/pokemon/${pokemonId}`);
  }
  return (
    <Grid xs= {6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
    <Card hoverable clickable css={{padding:10}}>
      <Card.Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      width={'100%'}
      height={150}
      />
    </Card>
  </Grid>
)
};
  
