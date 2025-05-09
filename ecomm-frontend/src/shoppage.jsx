import React, { useState, useEffect } from 'react';
import './App.css';

function Shoppage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          {
            products(first:100, channel:"channel-pln") {
              edges {
                node {
                  id
                  name
                  description
                  slug
                  thumbnail {
                    url
                  }
                  pricing {
                    priceRange {
                      start {
                        gross {
                          amount
                          currency
                        }
                      }
                    }
                  }
                  category {
                    name
                    slug
                  }
                }
              }
            }
          }
        `;

        const response = await fetch('https://store-9k2h1dqr.saleor.cloud/graphql/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const { data, errors } = await response.json();

        if (errors) {
          throw new Error(errors[0].message);
        }

        setProducts(data.products.edges.map(edge => edge.node));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const parseDescription = (description) => {
    if (!description) return '';
    try {
      const parsed = JSON.parse(description);
      return parsed.blocks[0]?.data?.text || '';
    } catch {
      return description;
    }
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.thumbnail?.url || 'https://via.placeholder.com/300'} 
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300';
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-category">{product.category?.name}</div>
              <div 
                className="product-description" 
                dangerouslySetInnerHTML={{ __html: parseDescription(product.description) }}
              />
              <div className="product-price">
                {product.pricing?.priceRange?.start?.gross?.amount} {product.pricing?.priceRange?.start?.gross?.currency}
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoppage;
