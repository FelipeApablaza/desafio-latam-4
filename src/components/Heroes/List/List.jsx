import React from 'react'
import { connect } from 'react-redux'

const List = props => {
    const { heroesList } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>House</th>
                    <th>Weapon</th>
                    <th>Skill</th>
                </tr>
            </thead>
            <tbody>
                {heroesList.map((item, index) =>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.house}</td>
                        <td>{item.weapon}</td>
                        <td>{item.skill}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    ...state.heroesReducer
})

export default connect(mapStateToProps, null)(List)