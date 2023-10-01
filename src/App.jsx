
import React, { useEffect, useState } from "react";
const cities = ['Ariyalur','bangalore','bombay', 'cuddalore', 'chennai','coimbatore', 'vadalur', 'Chidambaram'];

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const onClickInputHandler = () => {
    setIsInputClicked(true);
  }
  const onChangeHandler = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    // Filter cities based on the input text
    const filtered = cities.filter(element => element.toLowerCase().includes(inputText.toLowerCase()));
    setFilteredCities(filtered);
  }
  useEffect(()=>{
            setFilteredCities([...cities.filter(element=> element?.startsWith(searchText))])
    
        },[searchText])

  return (
    <>
      <input
        value={searchText}
        onChange={onChangeHandler}
        onClick={onClickInputHandler}
        placeholder="Search for a city"
      />
      {isInputClicked && (
        <div className="dropdown">
          {filteredCities.length > 0 ? (
            filteredCities.map((element, idx) => (
              <option key={idx} onClick={() => setSearchText(element)}> 
                {element}
              </option>
            ))
          ) : (
            <div>No matching cities found</div>
          )}
        </div>
      )}
      
    </>
  );
}

export default App;

