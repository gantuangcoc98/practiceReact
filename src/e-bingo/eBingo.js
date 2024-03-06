import React, { useState, useEffect } from 'react';
import './eBingo.css';
import axios from 'axios';

const E_Bingo = () => {

  // Step 1 - Create an array that will store the player tokens
  const [tokenList, setTokenList] = useState([]);

  // Step 2 - Create an array that will store the card with its BINGO values
  const [cards, setCards] = useState([]); 

  const [addButtonVisible, setAddButtonVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  // Error handling
  const [code, setCode] = useState('');     
  const [error, setError] = useState('');

  // UI Stuff
  const [title, setTitle] = useState('Join a game:');

  const handleGameCodeFocus = () => {
    setError('');
    setInputFocused(true);
    setTitle('Join a game:');
  };

  const handleGameCodeBlur = () => {
    // When the input loses focus, set the input focus state to false
    setInputFocused(false);
  };

  const checkWin = async (playcardToken) => {
    console.log("Response: ");
    const url = `http://www.hyeumine.com/checkwin.php?playcard_token=${playcardToken}`;
    try {
      const response = await axios.get(url);
      console.log(`${playcardToken}:`, response.data);
      if (response.data == 1) {
        alert("Congratulations! A card won BINGO! Card token: " + playcardToken);
      }
    } catch (error) {
      console.error(`Error fetching data for ${playcardToken}:`, error);
    }
  };

  useEffect(() => { 
    const interval = setInterval(() => {
      for (const playcardToken of tokenList) {
        checkWin(playcardToken);
      } 
    }, 1000); 
    return () => clearInterval(interval);
  }, [tokenList]); 

  const getData = async () => {
    try {
      const response = await axios.get(`http://www.hyeumine.com/getcard.php?bcode=${code}`);
      if (response.data === 0) { 
        setError('Game not found. Pleast try a different code.');
        return; 
      }
      setError('');
      const card = response.data.card;
      const numbersArray = [card.B, card.I, card.N, card.G, card.O];
      const transposedArray = transpose(numbersArray);
      const playcardToken = response.data.playcard_token;
      
      setCards(prevCards => [...prevCards, { numbers: transposedArray, token: playcardToken }]);
      setTokenList(prevTokenList => [...prevTokenList, playcardToken]);

      setTitle("Game code:")
      setAddButtonVisible(true);
    } catch (err) {
        console.error(err);
    }
  };


  const transpose = (array) => {  
    return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
  };

  const handleOnClick = () => {
    getData(); 
  };

  const handleGameCodeChange = (e) => {
    setCode(e.target.value); 
  };

  const handleSubmitCode = (e) => {
    e.preventDefault(); 
    getData();
  };

  return (
    <div className="container">
      <h1>
        <form onSubmit={handleSubmitCode}>
          <label htmlFor="gameCode">{title}</label>
          <input
            id="gameCode"
            type="text"
            value={code}
            onChange={handleGameCodeChange}
            onFocus={handleGameCodeFocus}
            onBlur={handleGameCodeBlur} 
            placeholder='Insert game code here'
          />
          <button type="submit">Join</button>
        </form>

        {addButtonVisible && <button onClick={handleOnClick}>Add Card</button>}
      </h1>

      {error && !inputFocused && <p className="error">{error}</p>}  

      <div className="card">
        {cards.map((card, cardIndex) => (
          <div key={cardIndex} className="bingo-card"> 
            <div className="bingo-header">
              {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
                <div key={index} className="bingo-header-cell">{letter}</div>
              ))}
            </div>
            {card.numbers.map((column, columnIndex) => (
              <div key={columnIndex} className="bingo-column">
                {column.map((number, numberIndex) => (
                  <div key={numberIndex} className="bingo-cell">
                    {number}
                  </div>
                ))}
              </div>
            ))}
            <div className="bingo-card-id">Card token: {card.token}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default E_Bingo;
