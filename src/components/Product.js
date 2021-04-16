import React from 'react';
import 'bulma/css/bulma.css';

export const Product = ({ product }) => {
    const { title, price, description, image, category } = product;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
        </div>
    )
}