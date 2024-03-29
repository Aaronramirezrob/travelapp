
import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { getCharacter, getPeople, searchCharacter } from './api/people';

function App() {

  const inputSearch = useRef(null);

  const [people, setPeople] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [currentCharacter, setCurrentCharacter] = useState(1);
  const [detail, setDetails] = useState({});

  const [page, setPage] = useState(1);
  const [ errorState, setErrorState] = useState({hasError: false});

  useEffect(() => {
    getPeople(page)
    .then(setPeople)
    .catch(handleError);
  }, [page]);

  const handleError = (err) => {
    setErrorState({hasError: true, message: err.message})
  }

  useEffect(() => {
    getCharacter(currentCharacter).then(setDetails);
  }, [currentCharacter])

  const showDetails = (character) => {
    const id = Number(character.url.split("/").slice(-2)[0]);
    setCurrentCharacter(id);
  }

  const onChangeTextSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setTextSearch(text);
  }

  const onSearchSubmit = (event) => {
    if(event.key !== "Enter") return; 

    inputSearch.current.value = "";
    setDetails({});
    searchCharacter(textSearch)
    .then(setPeople)
    .catch(handleError);
    
  }

  const onChangePage = (next) => {
    if(!people.previous && page + next <= 0 )  return;
    if(![people.next && page + next >= 9]) return;

    setPage(page + next);
  }

  return (
  <div>
  <input ref={inputSearch} onChange={onChangeTextSearch} onKeyDown={onSearchSubmit} type='text' placeholder='Busca un personaje'/>
    <ul>
    {errorState.hasError && <div>{errorState.message}</div>}
    {people?.results?.map(character => (
      <li key={character.name} onClick={() => showDetails(character)}>{character.name}</li>
    ))}
    </ul>

    <section>
      <button onClick={() => onChangePage(-1)}>Prev</button>| {page} |<button onClick={() => onChangePage(1)}>Next</button>
    </section>

    <aside>
      <h1>{detail.name}</h1>
      <ul>
        <li>height: {detail.height} </li>
        <li>mass: {detail.mass} </li>
        <li>birth: {detail.birth} </li>
      </ul>
    </aside>
  </div>
  )
}

export default App;
