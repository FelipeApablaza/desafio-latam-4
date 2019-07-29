import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPlaceAction } from '../../../store/places/actions'

const defaultState = {
    name: '',
    location: '',
    type: '',
    population: '',
    rulers: '',
}
const Form = props => {
    const [place, setPlace] = useState(defaultState)

    const handlerOnChange = ({ target: { name, value } }) => {
        setPlace({ ...place, [name]: value })
    }

    const handlerOnClick = () => {
        props.addPlaceToList(place)
        setPlace(defaultState)
    }

    return (
        <div>
            <input name={'name'} value={place.name} onChange={handlerOnChange} placeholder={'name'} type={'text'} />
            <input name={'location'} value={place.location} onChange={handlerOnChange} placeholder={'location'} type={'text'} />
            <input name={'type'} value={place.type} onChange={handlerOnChange} placeholder={'type'} type={'text'} />
            <input name={'population'} value={place.population} onChange={handlerOnChange} placeholder={'population'} type={'number'} />
            <input name={'rulers'} value={place.rulers} onChange={handlerOnChange} placeholder={'rulers'} type={'text'} />
            <button onClick={handlerOnClick}>Create Place</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addPlaceToList: payload => dispatch(addPlaceAction(payload))
})

export default connect(null, mapDispatchToProps)(Form)