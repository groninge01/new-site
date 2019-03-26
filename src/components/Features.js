import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="is-parent column is-6">
        <div className="tile is-child box notification">
          <section className="section">
            <h2 className="first-letter">{item.heading}</h2>
            <p>{item.text}</p>
          </section>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
