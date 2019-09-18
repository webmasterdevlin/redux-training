import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchHeroes, removeHero} from '../hero-actions'
import Button from '@material-ui/core/Button';


export default function Heroes () {
    /*part of Redux pattern*/
    const dispatch = useDispatch()
   const {heroes, isLoading} = useSelector(state => state.heroReducer);

    useEffect(() => {
        dispatch(fetchHeroes());
    }, [])

    const removeItem = (id) => {
        dispatch(removeHero(id))
    }

    return (<div>
        <h2>Heroes</h2>
        <ul>
        {isLoading ? <h2>Loading..</h2> : heroes.map(h => <li key={h.id}>{h.firstName} 
              <Button variant="contained" color="secondary" onClick={() => removeItem(h.id)}>Delete</Button>
        </li>)}
    </ul>
    </div>)
}


