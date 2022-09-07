import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const { drinksData } = useGlobalContext();

  const cocktailItem = drinksData.find((item) => item.id === cocktailId);
  useEffect(() => {
    setCocktail(cocktailItem);
  }, [cocktailItem]);

  if (!cocktail) {
    return <Loading />
  }

  const { name, image, category, info, glass, instructions, ingredients } = cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name}></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section >
  )
}

export default SingleCocktail;