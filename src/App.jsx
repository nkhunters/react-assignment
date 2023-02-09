import { useEffect, useState } from 'react';

const fetchScores = async () => {
  return [
    {
      id: '1',
      name: 'Spain',
      points: 7,
      group_id: '1',
    },
    {
      id: '2',
      name: 'France',
      points: 5,
      group_id: '2',
    },
    {
      id: '3',
      name: 'Croatia',
      points: 3,
      group_id: '2',
    },
    {
      id: '4',
      name: 'Denmark',
      points: 4,
      group_id: '1',
    },
    {
      id: '5',
      name: 'Portugal',
      points: 8,
      group_id: '1',
    },

    {
      id: '6',
      name: 'Argentina',
      points: 5,
      group_id: '2',
    },
  ];
};

const fetchGroups = async () => {
  return [
    {
      id: '1',
      name: 'Group A',
    },
    {
      id: '2',
      name: 'Group B',
    },
  ];
};

function App() {
  return (
    <div>
      <h1>Football - World cup 2022</h1>
      <div>
        <select>
          <option>All</option>
          <option>Group A</option>
          <option>Group B</option>
        </select>
      </div>
      <span>
        SORT BY: <button>NAME</button>
        <button>POINTS</button>
      </span>
      <ul>
        <li>Spain - 7</li>
        <li>Denmark - 8</li>
      </ul>
    </div>
  );
}

export default App;
