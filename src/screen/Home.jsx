import React from "react";
import HeaderImage from "../HeaderImage";
import FeaturedFreelancers from "../FeaturedFreelancers";
import SignupSection from "../SignupSection";
import CustomerList from '../FeaturedCustomers';



const Home = () => {
    return(
        <>
            <HeaderImage />
            <FeaturedFreelancers />
            <CustomerList />
            <SignupSection />
        </>
    )
}

export default Home;
 