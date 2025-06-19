import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';
import './carousel.css';
const ClothesCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [cart, setCart] = useState([]);

  // Sample clothes data with primary and hover images
  const clothesData = [
    {
      id: 1,
      name: "Classic Leather Boots",
      price: 89,
      originalPrice: null,
      primaryImage: "https://i.pinimg.com/736x/87/44/3b/87443b29be2c3132b0d6417228edf478.jpg?w=400&h=500&fit=crop",
      hoverImage: "https://www.tower-london.es/cdn/shop/files/dr.martens_15265001_16021.jpg?v=1696094857&width=800?w=400&h=500&fit=crop",
      category: "Boots",
      isNew: true
    },
    {
      id: 2,
      name: "1462 Quad Platform",
      price: 156,
      originalPrice: null,
      primaryImage: "https://www.angryyoungandpoor.com/store/pc/catalog/products/shoes/26944001dm.jpg?w=400&h=500&fit=crop",
      hoverImage: "https://cdn.media.amplience.net/i/drmartens/14345001.84.jpg?$mediummobile$&fmt=auto?w=400&h=500&fit=crop",
      category: "Platforms",
      sale: "22% OFF"
    },
    {
      id: 3,
      name: "Jadon boots",
      price: 134,
      originalPrice: null,
      primaryImage: "https://cdn.media.amplience.net/i/drmartens/40685001.83?$smart576$&fmt=auto?w=400&h=500&fit=crop",
      hoverImage: "https://n.nordstrommedia.com/it/de3a7d80-755a-4516-8926-135bb4f38605.jpeg?h=368&w=240&dpr=2?w=400&h=500&fit=crop",
      category: "Wedges"
    },
    {
      id: 4,
      name: "2976 Chelseas",
      price: 245,
      originalPrice: null,
      primaryImage: "https://i.pinimg.com/736x/6a/c2/2c/6ac22ca530cc7d98b75cbc81218cd976.jpg?w=400&h=500&fit=crop",
      hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfA54S2k9KoCkkM0SwXXZ6VZhgsg-2T5NTw&s?w=400&h=500&fit=crop",
      category: "Boots",
      sale: "18% OFF"
    },
    {
      id: 5,
      name: " Adrian loafers",
      price: 98,
      originalPrice: null,
      primaryImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzoYBoST7VgSEeKOEj46A2cR3EGOCSL6tLJK3EVT39f3MfXHFnlkE-bvri183czkrjcg&usqp=CAU?w=400&h=500&fit=crop",
      hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uUUEhWeX_-lvbdnSUEF3bUE-WFNi_6MELJtgmNz6QApm5RdHuDXOxMz_n2fW8ZjEFjs&usqp=CAU?w=400&h=500&fit=crop",
      category: "Heels",
      isNew: true
    },
    {
      id: 6,
      name: "3989 brogues",
      price: 78,
      originalPrice: null,
      primaryImage: "https://images.asos-media.com/products/dr-martens-1460-8-eye-boots-in-black-patent-leather/205324133-1-black/?$n_480w$&wid=476&fit=constrain?w=400&h=500&fit=crop",
      hoverImage: "https://i.ebayimg.com/images/g/QJoAAOSwQ5xhzhR2/s-l1200.jpg?w=400&h=500&fit=crop",
      category: "Sandals"
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 320; // Width of one item plus gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
    // Simple notification effect
    const button = document.querySelector(`[data-item-id="${item.id}"] .add-to-cart-btn`);
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Our Latest Shoes Collection</h2>
        <div className="cart-counter">
          <ShoppingCart size={20} />
          <span>{cart.length}</span>
        </div>
      </div>
      
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <ChevronLeft size={20} />
        </button>
        
        <div className="carousel-scroll" ref={scrollContainerRef}>
          {clothesData.map((item) => (
            <div 
              key={item.id}
              className="carousel-item"
              data-item-id={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="item-image-container">
                <img 
                  src={hoveredItem === item.id ? item.hoverImage : item.primaryImage}
                  alt={item.name}
                  className="item-image"
                />
                
                
                
               
                
                {/* Add to cart overlay */}
                <div className={`cart-overlay ${hoveredItem === item.id ? 'visible' : ''}`}>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="item-details">
                <div className="item-category">{item.category}</div>
                <h3 className="item-name">{item.name}</h3>
                <div className="item-price">
                  <span className="current-price">${item.price}</span>
                  {item.originalPrice && (
                    <span className="original-price">${item.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ClothesCarousel;