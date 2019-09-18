import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchHeroes, addHero, removeHero} from '../hero-actions'
import Button from '@material-ui/core/Button';


export default function Heroes () {
    /*part of Redux pattern*/
    const dispatch = useDispatch()
   const {heroes, isLoading} = useSelector(state => state.heroReducer);

   const [hero, setHero] = useState({});

    useEffect(() => {
        dispatch(fetchHeroes());
    }, [])

    const removeItem = (id) => {
        dispatch(removeHero(id))
    }

    const handleInputChange = ({currentTarget : input}) => {
            const newHero = {...hero};
            const {id, value} = input;
            newHero[id] = value;
            setHero(newHero)
    }

    const handleSubmit = (e) => {
             e.preventDefault(true)
            dispatch(addHero(hero))
    }

    return (<div>
        <h2>Heroes</h2>
            <form style={{display: 'grid', gridTemplateColumns: '1fr', gridRowGap: '1rem'}} 
            onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleInputChange} id="firstName" /><br />
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleInputChange} id="lastNam" /><br />
            <label htmlFor="house">House</label>
            <input onChange={handleInputChange} id="house" /><br />
            <label htmlFor="knownAs">Known For</label>
            <input onChange={handleInputChange} id="knownAs" />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
        <ul>
        {isLoading ? <h2>Loading..</h2> : heroes.map(h => <li key={h.id}>{h.firstName} 
              <Button variant="contained" color="secondary" onClick={() => removeItem(h.id)}>Delete</Button>
        </li>)}
    </ul>
    </div>)
}


