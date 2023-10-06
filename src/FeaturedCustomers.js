import React from 'react';
import './FeaturedCustomers.css';

import Customer1Image from './images/Customer1.jpg';
import Customer2Image from './images/Customer2.jpg';
import Customer3Image from './images/Customer3.jpg';
/* imports the images of ol geezers to here */ 

const featuredCustomersData = [
  {
    id: 1,
    name: 'Customer 1',
    job: 'Jimothy knows his SEO stuff',
    rating: 1,
    image: Customer1Image,
  },
  {
    id: 2,
    name: 'Customer 2',
    job: 'Shoutout my boy Feddie ifykyk',
    rating: 1,
    image: Customer2Image,
  },
  {
    id: 3,
    name: 'Customer 3',
    job: 'Social media influencer',
    rating: 4,
    image: Customer3Image,
  },
];
/* this is the 3 different cards and the data they hold */ 

const FeaturedCustomers = () => {
  return (
    <div>
      <h2 className="main-title">Featured Customers</h2>

      <div className="featured-customers">
        {featuredCustomersData.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <img src={customer.image} alt={`Profile of ${customer.name}`} />
            <h3>{customer.name}</h3>
            <p>{customer.job}</p>
            <div className="star-rating">
              {Array.from({ length: customer.rating }).map((_, index) => (
                <span key={index} className="star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-container" style={{width:'5vw'}}>
        <button className="see-more-button">See More</button>
      </div>
    </div>
  );
};
/* this is the function that actually populates the cards and uses the CSS classes found in featured customers */
export default FeaturedCustomers;
