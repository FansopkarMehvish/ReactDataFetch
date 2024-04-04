import React, {useState} from 'react';
import { Container, ListGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

export default function List() {

    const info = [
        {"country": "USA", "capital": "Washington, D.C."},
        {"country": "Canada", "capital": "Ottawa"},
        {"country": "United Kingdom", "capital": "London"},
        {"country": "France", "capital": "Paris"},
        {"country": "Germany", "capital": "Berlin"},
        {"country": "Italy", "capital": "Rome"},
        {"country": "Japan", "capital": "Tokyo"},
        {"country": "Brazil", "capital": "Brasília"},
        {"country": "Australia", "capital": "Canberra"},
        {"country": "South Africa", "capital": "Pretoria"}
    ];
    
    const [data, setData]=useState(false);

    const handleList = () => {
        setData(!data);
    };

    let id=1;
    return (
        <Container>
            <h1>Countries and their Capitals</h1>
            <Button onClick={handleList} variant="primary" className="mb-3">
                {data ? "Hide List" : "Show List"}
            </Button>
            {data &&
                <ListGroup>
                    {info.map((item, index) => (
                        <ListGroup.Item variant="dark" key={index}>{id++}. {item.country}: {item.capital}</ListGroup.Item>
                    ))}
                </ListGroup>
            }
        </Container>
    );
}