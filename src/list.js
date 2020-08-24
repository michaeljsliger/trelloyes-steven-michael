import React from 'react';
import Card from './card';
import STORE from './store';

function List(props) {
    const arr = [];
    for (let i = 0; i < props.cards.length; i++){
        arr.push(
            <Card title={props.cards[i].title} content={props.cards[i].content} />
        )
    }

    return (
        <section class="List">
        <header class="List-header">
        <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
            {arr}
         </div>
         </section>
        
    )
}

export default List;