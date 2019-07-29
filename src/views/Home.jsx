import React from 'react'
import Header from '../components/commons/Header/Header'
import HeroesList from '../components/Heroes/List/List'
import PlacesList from '../components/Places/List/List'

const Home = () => {
    return (
        <div>
            <Header />
            <HeroesList />
            <PlacesList />
        </div>
    )
}

export default Home