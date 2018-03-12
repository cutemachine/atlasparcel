import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SearchResults extends Component {
  static propTypes = {
    matchingResults: PropTypes.arrayOf(PropTypes.object),
    onResultClicked: PropTypes.func
  };

  render () {
    if (!this.props.matchingResults.length) {
      return (
        <p>Nothing found, keep on searching!</p>
      )
    }

    return (
      <ul
        style={{
          listStyleType: 'none',
          margin: '16px 0',
          padding: 0
        }}
      >
        {
          this.props.matchingResults.map(result => (
            <li key={result.name} style={{padding: 8}}>
              <Link
                to={result.link}
                onClick={this.props.onResultClicked}
              >
                {result.name}
              </Link>
              <span style={{display: 'block'}}>{result.description}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}
