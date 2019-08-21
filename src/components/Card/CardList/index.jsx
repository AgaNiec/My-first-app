import React from 'react'
import PropTypes from 'prop-types'

import {
  CardListContainer,
  CardListElement
} from './components'

import CardItem from '../CardItem'

const CardList = ({
  itemsList
}) => (
  <CardListContainer>
    {
      itemsList.map(({ description, icon, title }, index) => (
        <CardListElement
          data-test='cardListElement'
          key={index}
        >
          <CardItem
            data-test='cardItem'
            description={description}
            icon={icon}
            title={title}
          />
        </CardListElement>
      ))
    }
  </CardListContainer>
)

export default CardList

CardList.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string
    })
  )
}

CardList.defaultProps = {
  itemsList: []
}
