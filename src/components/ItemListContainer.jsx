import { useState, useEffect } from 'react';
import { useParams } from'react-router-dom';

import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';
import { products } from '../data/product';


export const ItemListContainer = () => {

    const[items, setItems] = useState([]);
    const[loading, setLoading] = useState([]);

    const { id } =useParams();

    console.log(id);
    
    useEffect(() => {
        const promise = new Promise((resolve, reject)  => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });

        promise
            .then((response) => {
                if(id){
                    const filteres = response.filter(item => item.category=== id);
                    setItems(filteres)
                } else {
                    setItems(response)
                }
        })
        .finally(() => setLoading(false));
    }, [id]);

    return ( 
        <Container className= "mt-4">
                <h1>Catálogo</h1>
                <ItemList items={items} />
        </Container>
    );
};