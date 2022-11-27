import React from 'react';

export default function About() {
  return (
    // <div style={{backgroundColor : "lightcyan", width : "60rem"}}>
    //   <h1>About Me</h1>
    //   <img src= "https://unsplash.com/photos/yScEkBWloPw" alt= "portfolioimage" width="200px"></img>
      
    //   <p>
    //   Hello There ! I am Alka Sah. Having spent of a large chunk of my life  in Banking and customer service . I have finally found my passion
    //   in web design and technology. I'm an exceptionally creative designer and a coding elf.  I also create,evaluate,and improve product designs.
    //   truly believe in what I am doing as an user experience evangelist.
    //  </p>   
    // </div>

    <section className='container'>
      <h2 className='top-title'>Alka Sah</h2>
      <hr></hr>
      <div>
        <img class = "mb-5" id='avatar' src='https://photos.google.com/photo/AF1QipNKg8UBPrjDjc7OxARnH5NL43xV8d4LC5PCtEW_' alt='Alka Sah' height= "100px" width= "100px"></img>
        <p>
        Hello There ! I am Alka Sah. Having spent of a large chunk of my life  in Banking and customer service . I have finally found my passion
        in web design and technology. I'm an exceptionally creative designer and a coding elf.  I also create,evaluate,and improve product designs.
         truly believe in what I am doing as an user experience evangelist.  
        </p>
                
                
      </div>
    </section>
  );
}