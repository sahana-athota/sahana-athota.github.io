"use client"

import { useState, useEffect } from "react"
import { CreditCard, Zap, Database, Calendar } from "lucide-react"
import "./feature-showcase.css"

const features = [
  {
    id: "billing",
    title: "Style That Lasts",
    icon: CreditCard,
    heading: "Explore timeless pieces designed to stay relevant through every season.",
    description: "We believe great fashion shouldn’t chase trends—it should transcend them. Our collections blend classic silhouettes with subtle modern twists, creating wardrobe staples that never go out of style.",
    color: "pink",
  },
  {
    id: "charging",
    title: " Feel-Good Fashion",
    icon: Zap,
    heading: "Eco-friendly materials and mindful production—because looking good shouldn’t cost the Earth.",
    description: "Each piece is made with eco-conscious fabrics and ethical production practices. We’re committed to quality that not only feels good but does good—for the planet and the people who make it.",
    color: "yellow",
  },
  {
    id: "catalog",
    title: "Perfect Fit Promise",
    icon: Database,
    heading: "Sizing and cuts that celebrate real bodies, real movement, and real comfort.",
    description: "From petite to plus, our sizing is thoughtfully engineered to embrace every body. With detailed size guides and flexible fits, you’ll find confidence in every stitch",
    color: "green",
  },
  {
    id: "events",
    title: "Comfort, Elevated",
    icon: Calendar,
    heading: "Soft fabrics, refined finishes—made to move with you, from day to night.",
    description: "Soft-touch materials. Breathable weaves. Seamless stitching. Whether you’re dressing for errands or evening plans, comfort and style should never be a trade-off",
    color: "blue",
  },
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev == 100) {
          setActiveFeature((current) => (current + 1) % features.length)
          console.log(activeFeature,features.length);
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])
 
  
  const handleTabClick = (index) => {
    setActiveFeature(index)
    setProgress(0)
  }

  const currentFeature = features[activeFeature]
  const IconComponent = currentFeature.icon

  return (
    <div className="feature-showcase">
      <div className="feature-showcase__container">
        <div className="feature-showcase__header">
          <h1 className="feature-showcase__title">
            OUR UNPARALLELED
            <br />
            <span className="feature-showcase__subtitle">CAPABILITIES</span>
          </h1>
        </div>

        <div className="feature-showcase__tabs">
          {features.map((feature, index) => {
            const TabIcon = feature.icon
            const isActive = index === activeFeature

            return (
              <button
                key={feature.id}
                className={`feature-tab ${isActive ? "feature-tab--active" : ""} feature-tab--${feature.color}`}
                onClick={() => handleTabClick(index)}
              >
                <div className="feature-tab__icon">
                  <TabIcon size={24} />
                </div>
                <span className="feature-tab__title">{feature.title}</span>
                {isActive && (
                  <div className="feature-tab__progress">
                    <div className="feature-tab__progress-bar" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        <div className="feature-showcase__content">
          <div className="feature-showcase__text">
            <h2 className="feature-showcase__heading">{currentFeature.heading}</h2>
            <p className="feature-showcase__description">{currentFeature.description}</p>
          </div>

          <div className="feature-showcase__visual">
            <div className="feature-showcase__dashboard">
              <div className="dashboard">
                <div className="dashboard__header">
                  <div className="dashboard__icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="dashboard__title">EMS</span>
                </div>

                <div className="dashboard__content">
                  <div className="dashboard__section">
                    <h3 className="dashboard__section-title">{currentFeature.title}</h3>

                    <div className="dashboard__metrics">
                      
                      <div class="metric">
                        <div className="metric__label"><strong className="metric__value">10,000+</strong> wear tests conducted</div>
                        <div className="metric__label"><strong className="metric__value">95%</strong> customer satisfaction on long-term use</div>
                        <div className="metric__label"><strong className="metric__value">80%</strong> of fabrics sourced organically</div>
                        <div className="metric__label"><strong className="metric__value">100%</strong> carbon-neutral shipping</div>
                    </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
