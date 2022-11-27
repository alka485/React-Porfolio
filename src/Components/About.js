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
        <img class = "mb-5" id='avatar' src='https://avatars3.githubusercontent.com/u/11549316?s=460&u=9cbb3efedf0845c6fb20524c104ba92fff38c871&v=4' alt='Alka Sah'></img>
        <p>
                Seasoned programmer with over 20 years of experience incorporating user and business requirements into cost-effective, 
                secure and user-friendly solutions known for scalability and durability. 
                </p>
                <p>
                Strong knowledge of commercial and open source CMS development 
                software/database engineering tools.
                </p>
                <p>
                Proven leader and consultant; drive system architecture decisions and lead projects from concept through the release process.
                </p>
      </div>
    </section>
  );
}