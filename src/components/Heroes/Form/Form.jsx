import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addHeroAction } from '../../../store/heroes/actions'

const defaultState = {
    name: '',
    age: '',
    house: '',
    weapon: '',
    skill: '',
}
const Form = props => {
    const [hero, setHero] = useState(defaultState)

    const handlerOnChange = ({ target: { name, value } }) => {
        setHero({ ...hero, [name]: value })
    }

    const handlerOnClick = () => {
        props.addHeroToList(hero)
        setHero(defaultState)
    }

    return (
        <div>
            <input name={'name'} value={hero.name} onChange={handlerOnChange} placeholder={'name'} type={'text'} />
            <input name={'age'} value={hero.age} onChange={handlerOnChange} placeholder={'age'} type={'number'} />
            <input name={'house'} value={hero.house} onChange={handlerOnChange} placeholder={'house'} type={'text'} />
            <input name={'weapon'} value={hero.weapon} onChange={handlerOnChange} placeholder={'weapon'} type={'text'} />
            <input name={'skill'} value={hero.skill} onChange={handlerOnChange} placeholder={'skill'} type={'text'} />
            <button onClick={handlerOnClick}>Create Hero</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addHeroToList: payload => dispatch(addHeroAction(payload))
})

export default connect(null, mapDispatchToProps)(Form)