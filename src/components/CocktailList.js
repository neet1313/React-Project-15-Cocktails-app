import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinksData, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (drinksData.length < 1) {
    return <section className='section section-title'>No cocktails matched your search criteria</section>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {drinksData.map((drink) => {
          const { id } = drink;
          return <Cocktail key={id} {...drink} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
