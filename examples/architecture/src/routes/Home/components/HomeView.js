import React from 'react';
import FrontendImage from '../assets/frontendpe.jpg';

export const HomeView = () => (
  <div className="dashboard-view">
    <h4 className="dashboard-view-title">Welcome to the Frontendpe Meetup 3.0!</h4>
    <img
      alt="The crew!"
      className="dashboard-view-banner"
      src={FrontendImage}
    />
  </div>
);

export default HomeView;
