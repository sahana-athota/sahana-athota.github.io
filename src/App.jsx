import React, { useState } from 'react';
import { Star, Settings } from 'lucide-react';
import ClothesCarousel from './carousel.jsx';
import CompaniesCarousel from './companies.jsx';
import FeatureShowcase from './feature.jsx';
import Testimonials from './testimonial.jsx';
import './app.css';

const App = () => {
  const [hoveredWord, setHoveredWord] = useState(null);



  const renderIncomeChart = () => (
    <div className="chart-widget trending-styles-chart">
    <div className="chart-header">
      <div className="chart-title">
        <span>Trending Styles</span>
        <span className="percentage-change">👗 +24.8%</span>
      </div>
      <Settings className="settings-icon" />
    </div>
    <div className="chart-value">Streetwear</div>
    <div className="chart-subtitle">Boho was #1 last year</div>
    <div className="bar-chart">
      {[0.5, 0.7, 0.6, 0.8, 0.9, 1.0, 0.7, 0.5, 0.6, 0.9, 0.8, 1.0].map((height, index) => (
        <div 
          key={index} 
          className="bar" 
          style={{ height: `${height * 60}px` }}
        />
      ))}
    </div>
    <div className="chart-labels">
      <span>Feb</span>
      <span>Jan</span>
    </div>
  </div>
  );

  const renderExpensesChart = () => (
    <div className="chart-widget comfort-distribution-chart">
    <div className="chart-header">
      <div className="chart-title">Comfort Level by Category</div>
      <Settings className="settings-icon" />
    </div>
    <div className="chart-value">Rated: 9.2/10</div>
    <div className="donut-chart">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="45" fill="none" stroke="#e5e7eb" strokeWidth="15"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#f59e0b" strokeWidth="15" 
                strokeDasharray="80 210" strokeDashoffset="0" transform="rotate(-90 60 60)"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#10b981" strokeWidth="15" 
                strokeDasharray="50 240" strokeDashoffset="-80" transform="rotate(-90 60 60)"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#3b82f6" strokeWidth="15" 
                strokeDasharray="40 250" strokeDashoffset="-130" transform="rotate(-90 60 60)"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#ec4899" strokeWidth="15" 
                strokeDasharray="40 260" strokeDashoffset="-170" transform="rotate(-90 60 60)"/>
      </svg>
    </div>
    <div className="legend">
      <div className="legend-item"><span className="legend-color" style={{background: '#f59e0b'}}></span>T-Shirts</div>
      <div className="legend-item"><span className="legend-color" style={{background: '#10b981'}}></span>Joggers</div>
      <div className="legend-item"><span className="legend-color" style={{background: '#3b82f6'}}></span>Hoodies</div>
      <div className="legend-item"><span className="legend-color" style={{background: '#ec4899'}}></span>Sneakers</div>
    </div>
  </div>
  );

  const renderRevenueChart = () => (
    <div className="chart-widget fit-satisfaction-chart">
    <div className="chart-value-large">9.1/10</div>
    <div className="chart-subtitle">Avg. customer rating</div>
    <div className="revenue-visual">
      <div className="revenue-bar">
        <div className="revenue-fill" style={{width: '91%'}}></div>
      </div>
      <div className="revenue-circle"></div>
    </div>
  </div>
  );

  return (
    <div className="dashboard-container">
      
      <div className="main-content">
        <div className="hero-text">
          <span> Wear What Matters —</span>
          <span 
            className={`hover-word ${hoveredWord === 'reports' ? 'active' : ''}`}
            onMouseEnter={() => setHoveredWord('reports')}
            onMouseLeave={() => setHoveredWord(null)}
          >  Comfort</span>
          <span> & </span>
          <span 
            className={`hover-word ${hoveredWord === 'dashboards' ? 'active' : ''}`}
            onMouseEnter={() => setHoveredWord('dashboards')}
            onMouseLeave={() => setHoveredWord(null)}
          >
           Style
          </span>
        </div>

        <div className="charts-container">
          {hoveredWord === 'dashboards' && renderIncomeChart()}
          {hoveredWord === 'reports' && (
            <>
              {renderExpensesChart()}
              {renderRevenueChart()}
            </>
          )}
        </div>

        

      </div>
      <ClothesCarousel/>
      <br></br>
      <FeatureShowcase/>
      <br></br>
      <Testimonials/>
      <CompaniesCarousel/>
    </div>
  );
};

export default App;