import React from 'react'
import { connect } from 'react-redux'

const List = props => {
    const { placesList } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Population</th>
                    <th>Rulers</th>
                </tr>
            </thead>
            <tbody>
                {placesList.map((item, index) =>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.location}</td>
                        <td>{item.type}</td>
                        <td>{item.population}</td>
                        <td>{item.rulers}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    ...state.placesReducer
})

export default connect(mapStateToProps, null)(List)