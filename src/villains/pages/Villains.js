import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchVillains, removeVillain} from '../villain-actions'
import Button from '@material-ui/core/Button';

export default function Villains () {
    /* part of Redux pattern */
    const dispatch = useDispatch();
    const {villains, isLoading}  = useSelector(state => state.villainReducer)

    useEffect(() => {
        dispatch(fetchVillains())
    }, [])

    const removeItem = id => {
        dispatch(removeVillain(id))
    }

    return (<div>
        <h2>Villains</h2>
        <ul>
        {isLoading ? <h2>Loading..</h2> :villains.map(v => <li key={v.id}>{v.firstName}     
        <Button variant="contained" color="secondary" onClick={() => removeItem(v.id)}>Delete</Button></li>)}
    </ul>
    </div>)
}