import React, { useState, useEffect } from 'react';

export const Display = () => {
  const [data, setData]:any = useState(null);

  useEffect(() => {
    // As this code is run inside useEffect, it's guaranteed to only run on the client side
    const jsonString = sessionStorage.getItem('savedIdeas');
    if (jsonString) {
      try {
        const parsedData:any = JSON.parse(jsonString);
        setData(parsedData);
        
      } catch (error) {
        console.error("Error parsing JSON string:", error);
        // Handle error
      }
    }
  }, []);

  return(
    <div>
        {data ? (
    <div className = "text-center pt-8">
        <h1 className="text-2xl pb-4">You Chose...</h1>
        <h2 className="text-4xl pb-4">{data.title}</h2>
         <p className="text-xl">{data.description}</p>
    </div>
  ) : (
    <p>No data to display</p>
  )}
        
    </div>
    ); 
};



   

    
