import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './company.css';
const CompaniesCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Major companies data with their logos
  const companies = [
    // Set 1
    [
      { name: 'Perplexity', logo: 'https://logo.clearbit.com/perplexity.ai' },
      { name: 'Supercell', logo: 'https://logo.clearbit.com/supercell.com' },
      { name: 'Monzo', logo: 'https://logo.clearbit.com/monzo.com' },
      { name: 'Raycast', logo: 'https://logo.clearbit.com/raycast.com' },
      { name: 'Retool', logo: 'https://logo.clearbit.com/retool.com' },
      { name: 'Mercury', logo: 'https://logo.clearbit.com/mercury.com' }
    ],
    // Set 2
    [
      { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' },
      { name: 'Figma', logo: 'https://logo.clearbit.com/figma.com' },
      { name: 'Notion', logo: 'https://logo.clearbit.com/notion.so' },
      { name: 'Linear', logo: 'https://logo.clearbit.com/linear.app' },
      { name: 'Vercel', logo: 'https://logo.clearbit.com/vercel.com' },
      { name: 'Shopify', logo: 'https://logo.clearbit.com/shopify.com' }
    ],
    // Set 3
    [
      { name: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com' },
      { name: 'Discord', logo: 'https://logo.clearbit.com/discord.com' },
      { name: 'Airbnb', logo: 'https://logo.clearbit.com/airbnb.com' },
      { name: 'Uber', logo: 'https://logo.clearbit.com/uber.com' },
      { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com' },
      { name: 'Twitter', logo: 'https://logo.clearbit.com/twitter.com' }
    ],
    // Set 4
    [
      { name: 'GitHub', logo: 'https://logo.clearbit.com/github.com' },
      { name: 'Slack', logo: 'https://logo.clearbit.com/slack.com' },
      { name: 'Zoom', logo: 'https://logo.clearbit.com/zoom.us' },
      { name: 'Dropbox', logo: 'https://logo.clearbit.com/dropbox.com' },
      { name: 'Canva', logo: 'https://logo.clearbit.com/canva.com' },
      { name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com' }
    ]
  ];

  // Auto-rotate effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % companies.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered, companies.length]);

  return (
    <div className="companies-carousel-wrapper">
      <div 
        className={`companies-carousel ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background logos */}
        <div className={`logos-grid ${isHovered ? 'blurred' : ''}`}>
          {companies[currentSet].map((company, index) => (
            <div key={`${currentSet}-${index}`} className="logo-item">
              
              <div className="logo-fallback">
                {company.name}
              </div>
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className={`overlay ${isHovered ? 'visible' : ''}`}>
          <div className="overlay-content">
            
            <div className="overlay-text">
              Meet our customers
              <ChevronRight className="arrow-icon" />
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        
      </div>
    </div>
  );
};

export default CompaniesCarousel;