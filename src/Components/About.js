// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";

const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };

function About ()  {
    return(

        <div style={styles.card}>
      <div style={styles.heading}>Lorem ipsum dolor</div>
      <div style={styles.content}>
        `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?`
      </div>
    </div>

        // <section className="main section">
        //     <div className="about">
        //     <div className="text">
        //         <div  className="header">
        //             <h1>About Me</h1>
        //         </div>
        //         <p>Hello there! I'm Sienna Li! I'm a web developer and designer based in San Francisco Bay Area.<br/>⠀</p>
        //         <p>Having spent a large chunk of my life in arts and music, I've finally found my passion at the web design and technology. I'm an exceptionally creative designer and a coding elf.<br/>⠀</p>
        //         <p>Currently I'm a student at <a className="school"href="https://bootcamp.berkeley.edu/coding/" target="_blank" rel="noreferrer">UC Berkeley Bootcamp</a> and spend most of my time designing websites. 
        //         When I'm not busy, you can find me obsessing over food, cats and traveling. 
        //         <br/>⠀</p>
        //     </div>
        //     <div className="avatar"></div> 
        //     </div>
        // </section>
    )
}
export default About;
