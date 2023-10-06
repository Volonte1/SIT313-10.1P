import React from 'react';
import './FeaturedFreelancers.css';

import Freelancer1image from './images/Freelancer1.jpg';
import Freelancer2image from './images/Freelancer2.jpg';
import Freelancer3image from './images/Freelancer3.jpg';

/* images being imported */


const featuredFreelancersData = [
  {
    id: 1,
    name: 'Joshua Johnson',
    job: 'Web Developer',
    rating: 4,
    image: Freelancer1image,
  },
  {
    id: 2,
    name: 'Jane Doe',
    job: 'Graphic Designer',
    rating: 5,
    image: Freelancer2image,
  },
  {
    id: 3,
    name: 'Patrick Nell',
    job: 'UI/UX Designer',
    rating: 4,
    image: Freelancer3image,
  },
];

/* data being retained */

const FeaturedFreelancers = () => {
  return (

<div>
<h2 className="main-title">Featured Freelancers </h2>

    <div className="featured-freelancers">
      {featuredFreelancersData.map((freelancer) => (
        <div className="freelancer-card" key={freelancer.id}>
          <img src={freelancer.image} alt={`Profile of ${freelancer.name}`} />
          <h3>{freelancer.name}</h3>
          <p>{freelancer.job}</p>
          <div className="star-rating">
            {Array.from({ length: freelancer.rating }).map((_, index) => (
              <span key={index} className="star">
                &#9733;
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="see-more-container" style={{ display: 'flex', justifyContent: 'center' }}>
  <button className="see-more-button" style={{ display: 'flex', justifyContent: 'center'}}>See More</button>
</div>
</div>
 /* function to run, not complicated to work out */
  );
};

export default FeaturedFreelancers;