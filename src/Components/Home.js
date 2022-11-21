 import React from 'react';
// import Card from 'react-bootstrap/Card';
// function Home () {
//     return(
// <>
//         {[
//             'Light'           
//           ].map((variant) => (
//             <Card
//               bg={variant.toLowerCase()}
//               key={variant}
//               text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//               style={{ width: '50rem' }}
//               className="mb-2"
//             >
//               <Card.Header as = 'h8'>Alka Sah
              
//               <Card.Link href = "/About">About Me</Card.Link>
//                 <Card.Link href = "/Portfolio">Portfolio</Card.Link>
//                 <Card.Link href = "/">Contact</Card.Link>
//                 <Card.Link href = "/">Resume</Card.Link>
                
//                 </Card.Header>  
//               <Card.Body>
//                 <Card.Title>Alka Sah </Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Card.Link href = "/About">About Me</Card.Link>
//                 <Card.Link href = "/Portfolio">Portfolio</Card.Link>
//                 <Card.Link href = "/">Contact</Card.Link>
//                 <Card.Link href = "/">Resume</Card.Link>
//               </Card.Body>
//             </Card>
//           ))}
//           </>
//    )
// }
//  export default Home;

export default function Home() {
  return (
    <div style={{backgroundColor : "lightcyan"}}>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}
