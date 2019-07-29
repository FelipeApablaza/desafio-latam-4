import React from 'react'
import Header from '../components/commons/Header/Header';
import Form from '../components/Heroes/Form/Form';
import List from '../components/Heroes/List/List';

const Heroes = () => {
    return (
        <div>
            <Header/>
            <h2>Heroes</h2>
            <Form/>
            <List/>
        </div>
    )
}

export default Heroes