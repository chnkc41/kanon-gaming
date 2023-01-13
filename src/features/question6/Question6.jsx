import React, { useState } from 'react';
import { fruits } from 'constants';

const initialArray = [
  // {
  //   row: [
  //     {
  //       cherry: 0,
  //       apple: 0,
  //       banana: 0,
  //       lemon: 0
  //     },
  //     {
  //       cherry: 0,
  //       apple: 0,
  //       banana: 0,
  //       lemon: 0
  //     },
  //     {
  //       cherry: 0,
  //       apple: 0,
  //       banana: 0,
  //       lemon: 0
  //     }
  //   ]
  // }
];

const Question6 = () => {
  let [result, setResult] = useState(false);
  let [running, setRunning] = useState(false);
  let [message, setMessage] = useState('');
  const [gameItems] = useState(fruits);
  const [userCoins, setUserCoins] = useState(20);
  let [gameLogs, setGameLogs] = useState(initialArray);

  const startGame = () => {
    if (!running) {
      if (userCoins > 0) {
        setMessage('');
        luckyDraw();
      } else {
        setResult(false);
        setMessage('You finished all coins to play game!');
      }
    }
  };

  const luckyDraw = () => {
    setRunning(true);

    let rowCount = document.querySelectorAll('.row').length;

    let number = document.querySelectorAll('.game-col'),
      animtion = setInterval(() => {
        number.forEach((item) => {
          item.innerHTML = gameItems[Math.floor(Math.random() * 4)];
        });
      }, 50);

    setTimeout(async () => {
      let totalCoins = 0;
      let test = [];
      setRunning(false);
      clearInterval(animtion);

      for (let index = 1; index <= rowCount; index++) {
        let check = [];
        const columnsClassName = `.boxLine-${index}`;
        let currentRow = document.querySelectorAll(columnsClassName);

        currentRow.forEach((item) => {
          item.innerHTML = gameItems[Math.floor(Math.random() * 4)];
          check.push(item.innerHTML);
        });

        const winnerData = await winner(check);
        totalCoins += winnerData.winningCoins;

        test.push(winnerData.elementCounts);

        if (totalCoins > 0) {
          setResult(true);
          setUserCoins(userCoins + totalCoins - 1); // current coins - winning coins - spin  cost
          setMessage(`Congrats you won ${totalCoins} coins.`);
        } else {
          setResult(false);
          setUserCoins(userCoins - 1);
          setMessage('You did not win! Try again, this might be your lucky try!');
        }
      }
  
      setGameLogs(test);
    }, 1000);
  };

  const winner = (value) => {
    const elementCounts = {};
    for (let index = 0; index < value.length; index++) {
      const element = value[index];

      if (index === value.length - 1) {
        // check for last element
        if (value[index] === value[index - 1]) {
          elementCounts[element] = (elementCounts[element] || 0) + 1;
        }
      } else {
        if (value[index] === value[index + 1] || value[index] === value[index - 1]) {
          elementCounts[element] = (elementCounts[element] || 0) + 1;
        }
      }
    }

    // Count Coins
    const cherryCoins = elementCounts.cherry >= 3 ? 50 : 0 || elementCounts?.cherry === 2 ? 40 : 0;
    const appleCoins = elementCounts.apple >= 3 ? 20 : 0 || elementCounts?.apple === 2 ? 10 : 0;
    const bananaCoins = elementCounts.banana >= 3 ? 15 : 0 || elementCounts?.banana === 2 ? 5 : 0;
    const lemonCoins = elementCounts.lemon >= 3 ? 3 : 0;
    const winningCoins = cherryCoins + appleCoins + bananaCoins + lemonCoins;

    return { winningCoins, elementCounts };
  };

  return (
    <div className="p-15 flex flex-col justify-center align-center max-w-5xl mx-auto">
      <div className="flex flex-col justify-center align-center">
        <div className="">
          <div className="text-center font-bold mb-5 text-purple-700 text-xl">
            <h1 className="text-3xl">Play to Win</h1>
            <p className="h-6 my-3 ">User coins: {userCoins} </p>
            <p className={`h-6 my-3 ${result ? 'text-green-700' : 'text-red-600'}`}>{message}</p>
          </div>

          <div className="grid grid-rows-1 place-items-center gap-5">
            {[1, 2, 3].map((row) => (
              <div key={row} className="row flex gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((column) => (
                  <div key={column} className={`game-col boxLine-${row}`}>
                    Go!
                  </div>
                ))}
              </div>
            ))}
          </div> 

          <div className='max-w-2xl mx-auto'>
          <button
            className={`btn-main mt-5 ${running ? '!bg-gray-400' : ''} `}
            onClick={() => startGame()}
            disabled={running}
          >
            {!running ? 'Spin' : 'Please wait for last spin'}
          </button>
          </div>
        </div>
      

      {/* Logs */}
      <div className="flex justify-center mt-5">
        <div>
          <h2>Game Status:</h2>
          {gameLogs.map((item, index) => (
            <div key={index}>
              <li>
                <span>Row {index + 1} : </span>
                cherry: {item.cherry} - apple: {item.apple} - banana: {item.banana} - lemon:{' '}
                {item.lemon}
              </li>
            </div>
          ))}
        </div> 
      </div>

      </div>
    </div>
  );
};

export default Question6;
