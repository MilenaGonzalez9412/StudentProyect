import React from 'react'
import './style.css';
import astronaut from './astronaut.png'
import rocket from './rocket.png'

export default function Main() {
  return (
<div className="container2">
		<section>
			<h2>
                <span>React</span>
                <br/>WorkShop<br/>
                <span>Examen</span>
                </h2>
			<div className="set">
				<div><img src={rocket}/></div>
				<div><img src={astronaut}/></div>
				<div><img src={rocket}/></div>
				<div><img src={astronaut}/></div>
			</div>
			<div className="set set2">
            <div><img src={rocket}/></div>
                <div><img src={astronaut}/></div>
				<div><img src={rocket}/></div>
                <div><img src={astronaut}/></div>
			</div>
		</section>
	</div>
  );
}
