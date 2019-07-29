import React from 'react'
import Header from '../components/commons/Header/Header';
import Form from '../components/Places/Form/Form'
import List from '../components/Places/List/List';

const Places = () => {
    return (
        <div>
            <Header />
            <h2>Places</h2>
            <Form />
            <List />
        </div>
    )
}

export default Places