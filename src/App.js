import React from 'react';

import { useState } from "react";

const RACES = [
  {
    name: "Bahrain GP",
    first: "Max Verstappen",
    second: "Sergio Perez",
    third: "Fernando Alonso",
    fourth: "Carlos Sainz",
    fifth: "Lewis Hamilton",
    sixth: "Lance Stroll",
    seventh: "George Russell",
    eighth: "Valtteri Bottas",
    ninth: "Pierre Gasly",
    tenth: "Alex Albon"
  },
  {
    name: "Saudi Arabian GP",
    first: "Sergio Perez",
    second: "Max Verstappen",
    third: "Fernando Alonso",
    fourth: "George Russell",
    fifth: "Lewis Hamilton",
    sixth: "Carlos Sainz",
    seventh: "Charles Leclerc",
    eighth: "Esteban Ocon",
    ninth: "Pierre Gasly",
    tenth: "Kevin Magnussen"
  },
  {
    name: "Australian GP",
    first: "Max Verstappen",
    second: "Lewis Hamilton",
    third: "Fernando Alonso",
    fourth: "Lance Stroll",
    fifth: "Sergio Perez",
    sixth: "Lando Norris",
    seventh: "Nico Hulkenberg",
    eighth: "Oscar Piastri",
    ninth: "Zhou Guanyu",
    tenth: "Yuki Tsunoda"
  },
  {
    name: "Azerbaijan GP",
    first: "Sergio Perez",
    second: "Max Verstappen",
    third: "Charles Leclerc",
    fourth: "Fernando Alonso",
    fifth: "Carlos Sainz",
    sixth: "Lewis Hamilton",
    seventh: "Lance Stroll",
    eighth: "George Russell",
    ninth: "Lando Norris",
    tenth: "Yuki Tsunoda"
  },
  {
    name: "Miami GP",
    first: "Max Verstappen",
    second: "Sergio Perez",
    third: "Fernando Alonso",
    fourth: "George Russell",
    fifth: "Carlos Sainz",
    sixth: "Lewis Hamilton",
    seventh: "Charles Leclerc",
    eighth: "Pierre Gasly",
    ninth: "Esteban Ocon",
    tenth: "Kevin Magnussen"
  },
  {
    name: "Monaco GP",
    first: "Max Verstappen",
    second: "Fernando Alonso",
    third: "Esteban Ocon",
    fourth: "Lewis Hamilton",
    fifth: "George Russell",
    sixth: "Charles Leclerc",
    seventh: "Pierre Gasly",
    eighth: "Carlos Sainz",
    ninth: "Lando Norris",
    tenth: "Oscar Piastri"
  },
  {
    name: "Spanish GP",
    first: "Max Verstappen",
    second: "Lewis Hamilton",
    third: "George Russell",
    fourth: "Sergio Perez",
    fifth: "Carlos Sainz",
    sixth: "Lance Stroll",
    seventh: "Fernando Alonso",
    eighth: "Esteban Ocon",
    ninth: "Zhou Guanyu",
    tenth: "Pierre Gasly"
  },
  {
    name: "Canadian GP",
    first: "Max Verstappen",
    second: "Fernando Alonso",
    third: "Lewis Hamilton",
    fourth: "Charles Leclerc",
    fifth: "Carlos Sainz",
    sixth: "Sergio Perez",
    seventh: "Alex Albon",
    eighth: "Esteban Ocon",
    ninth: "Lance Stroll",
    tenth: "Valtteri Bottas"
  }
];

function RaceHeader({ race }) {
  return <h2>{race.name}</h2>;
}

function RaceResult({ race }) {
  return (
    <ol>
      <li style={{ color: "gold" }}>{race.first}</li>
      <li style={{ color: "silver" }}>{race.second}</li>
      <li style={{ color: "brown" }}>{race.third}</li>
    </ol>
  );
}

function ResultTable({ races, filtertext }) {
  const rows = [];
  races.forEach((race) => {
    if (race.name.toLowerCase().indexOf(filtertext.toLowerCase()) === -1) {
      return;
    }
    rows.push(<RaceHeader race={race} />);
    rows.push(<RaceResult race={race} />);
  });
  return <h3>{rows}</h3>;
}

function Searchbar({ filtertext, onFilterTextChange }) {
  return (
    <div>
      <h1>Search</h1>
      <form>
        <input
          type="text"
          value={filtertext}
          placeholder="Search.."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </form>
    </div>
  );
}

function CreateMap() {
  const map = new Map();
  map.set("Max Verstappen", 0);
  map.set("Sergio Perez", 0);
  map.set("Charles Leclerc", 0);
  map.set("Carlos Sainz", 0);
  map.set("Lewis Hamilton", 0);
  map.set("George Russell", 0);
  map.set("Lando Norris", 0);
  map.set("Oscar Piastri", 0);
  map.set("Esteban Ocon", 0);
  map.set("Pierre Gasly", 0);
  map.set("Valtteri Bottas", 0);
  map.set("Zhou Guanyu", 0);
  map.set("Alex Albon", 0);
  map.set("Logan Sargeant", 0);
  map.set("Nico Hulkenberg", 0);
  map.set("Kevin Magnussen", 0);
  map.set("Yuki Tsunoda", 0);
  map.set("Nyck DeVries", 0);
  map.set("Fernando Alonso", 0);
  map.set("Lance Stroll", 0);
  return map;
}

function SortedPoints({ races, pointsMap }) {
  races.forEach((race) => {
    pointsMap.set(race.first, pointsMap.get(race.first) + 25);
    pointsMap.set(race.second, pointsMap.get(race.second) + 18);
    pointsMap.set(race.third, pointsMap.get(race.third) + 15);
    pointsMap.set(race.fourth, pointsMap.get(race.fourth) + 12);
    pointsMap.set(race.fifth, pointsMap.get(race.fifth) + 10);
    pointsMap.set(race.sixth, pointsMap.get(race.sixth) + 8);
    pointsMap.set(race.seventh, pointsMap.get(race.seventh) + 6);
    pointsMap.set(race.eighth, pointsMap.get(race.eighth) + 4);
    pointsMap.set(race.ninth, pointsMap.get(race.ninth) + 2);
    pointsMap.set(race.tenth, pointsMap.get(race.tenth) + 1);
  });
  var pointsArray = [];
  pointsMap.forEach((value, key) => {
    pointsArray.push({
      name: key,
      points: value
    });
  });
  var sortedPointsArray = pointsArray.sort(function (a, b) {
    return a.points > b.points ? -1 : b.points > a.points ? 1 : 0;
  });
  return sortedPointsArray;
}

function PointsElements({ sorted,counter }) {
  return (
    <tr>
      <td><h2>{counter}</h2></td>
      <td><h2>{sorted.name}</h2></td>
      <td><h2>{sorted.points}</h2></td>
    </tr>
  );
}

function PointsTable({ races }) {
  const pointsMap = CreateMap();
  const sortedPointsArray = SortedPoints({ races, pointsMap });
  const rows = [];
  var counter=1;
  sortedPointsArray.forEach((sorted) => {
    rows.push(<PointsElements sorted={sorted} counter={counter} />);
    counter++;
  });

  return (
    <div>
      <h1>Points Table</h1>
      <table>
        <thead>
          <tr>
            <th><h1>Position</h1></th>
            <th><h1>Driver</h1></th>
            <th><h1>Points</h1></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function CompleteTable({ races }) {
  const [filterText, setFilterText] = useState("");
  return (
    <div>
      <Searchbar filtertext={filterText} onFilterTextChange={setFilterText} />
      <hr></hr>
      <ResultTable races={races} filtertext={filterText} />
      <hr></hr>
      <PointsTable races={races} />
    </div>
  );
}

export default function App() {
  return <CompleteTable races={RACES} />;
}

