import React from "react";
import "./Helloworld.css";

function Helloworld() {
  const picUrl = "https://picsum.photos/300/200/?random";
  const rArr = [1, 2, 3];
  /* const imgs = (rArr.map(element => (
    <img src={picUrl + element} alt={"Hobby" + element} />
  ))   
  ); */
  const h1 = React.createElement('h1', {className: 'small'}, 'Hallo Welt!');
  return (
    <div>
      {h1}
      <p>ich bin {2019 - 1984} Jahre alt.</p>
      <p className="big">Ich habe unterschiedliche Hobbys:</p>
      {/* img[src="https://picsum.photos/300/200/?random$" alt="Hobby$"]*3 
      <img src="https://picsum.photos/300/200/?random1" alt="Hobby1"/>
      <img src="https://picsum.photos/300/200/?random2" alt="Hobby2"/>
      <img src="https://picsum.photos/300/200/?random3" alt="Hobby3"/>
      <img src={picUrl + rArr[0]} alt="Hobby1" />
      <img src={picUrl + rArr[1]} alt="Hobby2" />
      <img src={picUrl + rArr[2]} alt="Hobby3" />*/}
      {/* {imgs} */}
      {rArr.map(element => (
        <img key={element.toString()} src={picUrl + element} alt={"Hobby" + element} />
      ))}
    </div>
  );
}

// Standard-Export
export default Helloworld;
// Bennanter Export
// export { Helloworld };
// Standard vor der FN
// export default function Helloworld() {  return(     <h1>Hallo Welt!</h1>  );}
