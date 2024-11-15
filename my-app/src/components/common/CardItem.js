// src/components/CardItem.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardItem.css'; // 개별 카드 CSS 파일 import
import { FaStar } from 'react-icons/fa'; // Font Awesome 아이콘 불러오기

function CardItem({ title, instructor, rating, numReviews, price, imageUrl, buttonLabel }) {
    return (
        <Card className="card-item">
            <Card.Img variant="top" src={imageUrl} className="card-image" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="card-instructor"> {instructor}</Card.Text>
                <div className="card-rating">
                  <FaStar className={`star-icon ${rating >= 1 ? 'filled' : ''}`} />
                  <span>{rating.toFixed(1)} </span>
                  <span className="num-reviews">({numReviews})</span>
                </div>
                <Card.Text className="card-price"> {price.toLocaleString()}</Card.Text>
            </Card.Body>

            <div className="card-overlay">
                <h3>{title}</h3>
                <p>난이도</p>
                <p>태그</p>
            </div>

        </Card>
    );
}

export default CardItem;

