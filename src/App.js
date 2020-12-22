import React from 'react';
import './App.css';
import { data } from './data.js'
import { sortBy, where, filter } from "underscore";
import Card from './Card';

function App() {
	const contentOptions = ['books', 'movies', 'series', 'games'];
	const [releaseOrder, setOrder] = React.useState(true);
	const [contentType, setContentType] = React.useState(contentOptions);
	

	let headline;
	let orderedData;
  if (releaseOrder) {
		orderedData = sortBy(data, "year");
		headline = "Order by Star Wars time"
  } else {
		orderedData = sortBy(data, "formatted_year");
		headline = "Order by release date"
	}
	function ContentSelect() {
		return (
			contentOptions.map((c) => {
				return (
					<div className="hey">
						<label for={c}>
							<input type="checkbox" id={c} name={c} />
							{c}
						</label>
					</div>
				)
			})
		)
	}
  return (
    <div className="App">
			<nav>
				<h2>Star Wars order</h2>
				<button onClick={() => setOrder(!releaseOrder)}>{headline}</button>
			</nav>
			<section className="App-content">
				<div className="App-sidebar">
					<ContentSelect />
				</div>
				<div className="App-cards">
					{orderedData.map((d, i) => (
						<Card
							key={d.name}
							position={i+1}
							name={d.name}
							year={d.year}
							formatted_year={d.formatted_year}
						/>
					))}
				</div>
			</section>
    </div>
  );
}

export default App;
