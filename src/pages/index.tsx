import { NextPage, GetStaticProps } from "next"
import { Layouts } from "../../components/layouts";
import { pokeApi } from "../../api";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import React from 'react';
import { PokemonCard } from "../../components/pokemon";


interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props>=({pokemons}) => {

return(
  
    <Layouts title="Listado de Pokemon">
    <Grid.Container gap={2} justify="flex-start">
      {
    pokemons.map((pokemon ) =>(
      <PokemonCard key={pokemon.id} pokemon={pokemon}/>

    ))
}
    </Grid.Container>
    </Layouts>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[]=data.results.map( (poke, i) => ({...poke,
    id:i+1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
 } ) )
  return {
    props: {
   pokemons
    }
  }
}

export default HomePage; 