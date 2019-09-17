import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchHeroes} from '../hero-actions'

export default function Heroes () {
    /*part of Redux pattern*/
    const dispatch = useDispatch()
   const {heroes} = useSelector(state => state.heroReducer);

    useEffect(() => {
        dispatch(fetchHeroes());
    }, [])

    return (<ul>
        {heroes.map(h => <li>{h.firstName}</li>)}
    </ul>)
}


