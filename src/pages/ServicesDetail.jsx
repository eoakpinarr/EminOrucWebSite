import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import services from '../mock/services.json';

// Helper function to format the URL title back to a readable format
const formatTitleForComparison = (title) => {
  return title.toLowerCase().replace(/-/g, ' '); // Converts dashes back to spaces and lowercase for comparison
};

const ServicesDetail = () => {
  const { title } = useParams();  // Use title from params instead of id
  const formattedTitle = formatTitleForComparison(title);  // Convert the URL title back to match the original service titles

  // Find the service based on the formatted title
  const service = services.find(s => s.title.toLowerCase() === formattedTitle);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="flex py-4 max-w-[1200px] mx-auto md:flex-row flex-col ">
      <img src={service.image} alt={service.title} className="md:w-1/2 w-[90%] mx-auto mb-3 flex-1 rounded-xl" />
      <div className="flex flex-col md:w-1/2 p-4">
        <h1 className="text-3xl font-semibold mb-2">{service.title}</h1>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesDetail;
