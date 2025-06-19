
import { useState, useEffect } from "react"
import "./testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment:
        "Absolutely love the quality of these clothes! The fabric is so soft and the fit is perfect. I've ordered three times already and each piece exceeded my expectations.",
      
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Los Angeles, CA",
      rating: 5,
      comment:
        "Fast shipping and amazing customer service. The hoodie I bought has become my favorite piece of clothing. The attention to detail is incredible!",
      
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami, FL",
      rating: 5,
      comment:
        "I was skeptical about ordering online, but these clothes are even better in person! The colors are vibrant and the sizing chart was spot on.",
      
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      comment:
        "Great value for money! The jeans I bought have held up perfectly after months of wear. Definitely recommending to all my friends.",
      
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "Seattle, WA",
      rating: 5,
      comment:
        "The sustainable materials and ethical production really matter to me. Plus, the clothes look amazing and feel great to wear!",
      
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>Don't just take our word for it - hear from our happy customers!</p>
        </div>

        <div className="testimonials-carousel">
          <button className="nav-button prev" onClick={prevSlide}>
            ‹
          </button>

          <div className="testimonial-wrapper">
            <div className="testimonials-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.comment}</p>
                    <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
                  </div>
                  <div className="testimonial-author">
                    
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            
          </div>

          <button className="nav-button next" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
          
        
      </div>
    </section>
  )
}

export default Testimonials
