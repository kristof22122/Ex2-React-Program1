import React from 'react';
import AppSCSS from './App.module.scss';

import { Star } from './components/Star'

class App extends React.Component {
  state = {
    badReviews: 0,
    neutralReviews: 0,
    goodReviews: 0,
  };

  setStar = (starNumber) => {
    return (
      <>
        <input
          type="radio"
          id={`star-${starNumber}`}
          name="rating"
          value={starNumber}
          className={AppSCSS.rating__item}
          onChange={this.handleChange}
          checked={false}
        />
        <label
          htmlFor={`star-${starNumber}`}
          title={`Star ${starNumber}`}
          className={AppSCSS.rating__label}
        ></label>	
      </>
    )
  };

  handleChange = (event) => {
    const {
      value,
    } = event.target;

    this.setState((currentState) => {
      const {
        badReviews: currentBedReviews,
        neutralReviews: currentNeutralReviews,
        goodReviews: currentGoodReviews,
      } = currentState;

      return {
        badReviews: (+value < 3) ? currentBedReviews + 1 : currentBedReviews,
        neutralReviews: (+value === 3) ? currentNeutralReviews + 1 : currentNeutralReviews,
        goodReviews: (+value >= 4 ) ? currentGoodReviews + 1 : currentGoodReviews,
      }
    });
  };

  render() {
    const {
      badReviews,
      neutralReviews,
      goodReviews,
    } = this.state;

    const allReviews = badReviews + neutralReviews + goodReviews;

    return (
      <div className={AppSCSS.ReviewsWidget}>
        <h1>
          Reviews widget
        </h1>
        <form>
          <Star handleChange={this.handleChange} />
        </form>
        <div>
          <p>
            Bad Reviews: {badReviews}
          </p>
          <p>
            Neutral Reviews: {neutralReviews}
          </p>
          <p>
            Good Reviews: {goodReviews}
          </p>
          <p>
            All Reviews: {allReviews}
          </p>
          <p>
            Good reviews in percent: {(allReviews)
              ? Math.round((goodReviews / allReviews) * 100) 
              : 0}%
          </p>
        </div>
      </div>
    );
  }
}

export default App;
