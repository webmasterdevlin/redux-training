import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchVillains, removeVillain, addVillain} from '../villain-actions'
import Button from '@material-ui/core/Button';

export default function Villains () {
    const [villain, setVillain] = useState({});
    /* part of Redux pattern */
    const dispatch = useDispatch();
    const {villains, isLoading}  = useSelector(state => state.villainReducer)

    useEffect(() => {
        dispatch(fetchVillains())
    }, [])

    const removeItem = id => {
        dispatch(removeVillain(id))
    }

    const handleInputChange =({currentTarget : input}) => {
         const newVillain = {...villain};
            const {id, value} = input;
            newVillain[id] = value;
            setVillain(newVillain)
    }

    const handleSubmit = (e) => {
        e.preventDefault(true);
        dispatch(addVillain(villain))
    }

    return (<div>
        <h2>Villains</h2>
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
        {isLoading ? <h2>Loading..</h2> :villains.map(v => <li key={v.id}>{v.firstName}     
        <Button variant="contained" color="secondary" onClick={() => removeItem(v.id)}>Delete</Button></li>)}
    </ul>
    </div>)
}