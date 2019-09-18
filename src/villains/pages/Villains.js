import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchVillains} from '../villain-actions'

export default function Villains () {
    /* part of Redux pattern */
    const dispatch = useDispatch();
    const {villains}  = useSelector(state => state.villainReducer)

    useEffect(() => {
        dispatch(fetchVillains())
    }, [])

    return <ul>
        {villains.map(v => <li key={v.id}>{v.firstName}</li>)}
    </ul>
}