import React from 'react'
import PropTypes from 'prop-types'

import {
  CardListContainer,
  CardListElement
} from './components'

import Card from '../../../components/Card'

const CardList = ({
  itemsList
}) => (
  <CardListContainer>
    {
      itemsList.map((e, index) => (
        <CardListElement
          data-test='cardListElement'
          key={index}
        >
          <Card
            data-test='card'
            description={e.description}
            icon={e.icon}
            title={e.title}
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
