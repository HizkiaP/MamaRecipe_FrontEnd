// import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({data}) => {
  return (
    <>
    <div className='position-relative'>
      <img src={data.photo} alt={data.title} className="chicken-bomb mt-3" />
      <p className="position-absolute chicken-text">
        {data.title}
      </p>
    </div>
    </>
  )
}

Cards.propTypes = {
    data: PropTypes.object
  }

export default Cards