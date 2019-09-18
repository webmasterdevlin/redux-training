import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchHeroes, removeHero} from '../hero-actions'

export default function Heroes () {
    /*part of Redux pattern*/
    const dispatch = useDispatch()
   const {heroes} = useSelector(state => state.heroReducer);

    useEffect(() => {
        dispatch(fetchHeroes());
    }, [])

    const removeItem = (id) => {
        dispatch(removeHero(id))
    }

    return (<ul>
        {heroes.map(h => <li>{h.firstName} 
        <button onClick={() => removeItem(h.id)}>Delete</button>
        </li>)}
    </ul>)
}


