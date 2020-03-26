import React from 'react';
import './App.css';
import { data } from './data.js'
import { sortBy, where } from "underscore";
import Card from './Card';
import { render } from '@testing-library/react';

function App() {
	const [releaseOrder, setOrder] = React.useState(true);
	const [contentType, setContentType] = React.useState('all');
	let shownData;
	if (contentType !== 'all') {
		shownData = where(data, { type: contentType });
	} else {
		shownData = data;
	}
	const contentOptions = ['all', 'books', 'movies', 'series'];
	let headline;
  if (releaseOrder) {
		shownData = sortBy(shownData, "year");
		headline = "Order by Star Wars time"
  } else {
		shownData = sortBy(shownData, "formatted_year");
		headline = "Order by release date"
	}
	function Thinger() {
		return (
			contentOptions.map((c) => {
				const isActive = c === contentType ? "active" : "";
				return (
					<li className={`content ${isActive}`} key={c} onClick={(e) => setContentType(e.target.innerText)}>{c}</li>
				);
			})
		)
	}
  return (
    <div className="App">
      <header className="App-header">
				<h2>Star Wars order</h2>
			</header>
			<button onClick={() => setOrder(!releaseOrder)}>{headline}</button>
			<Thinger />
			{shownData.map(d => (
				<Card key={d.name} name={d.name} year={d.year} formatted_year={d.formatted_year} />
			))}
    </div>
  );
}

export default App;
