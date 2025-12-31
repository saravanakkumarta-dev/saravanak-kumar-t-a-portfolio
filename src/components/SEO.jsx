import React from 'react';

const SEO = ({ title, description, name, type }) => {
  return (
    <>
      {/* Standard Metadata - React 19 hoists these to <head> automatically */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content="frontend developer, software engineer, React developer, web developer, portfolio" />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Alex Developer Portfolio" />
            
    </>
  );
};

export default SEO;