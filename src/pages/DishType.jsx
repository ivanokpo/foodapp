import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'



function DishType() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const baseUrl = 'http://localhost:3001/recipes/dishType'

    const getCuisine = async () => {
        const data = await fetch(`${baseUrl}/${params.type}`)
        const recipes = await data.json();
        console.log(recipes)
        setCuisine(recipes);
    }

    useEffect(() => {
        getCuisine();
        
    }, [params.type]);

  return (
      <Grid>
      {cuisine.map( (dish) => {
          return(
            <Card key={dish.id}>
            <Link to={'/recipes/'+ dish.id}>
            <img src={dish.image} alt="" width="200" height="auto"/>
            <h4>{dish.title}</h4>
            
            </Link>
        </Card>
               ) } )}
     </Grid>
    
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`

    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`


export default DishType;