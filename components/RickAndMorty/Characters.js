import { useState, useContext, useEffect } from "react";
import Filter from "./Filter";
import { RickContext } from "../RickAndMorty/RickContext";
import RickItem from "./RickItem";
import RickStyle from "../../styles/RickItem.module.css";
import Pagination from "../RickAndMorty/Pagination";
const Characters = (props) => {
  const [api, setApi] = useContext(RickContext);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [isDead, setIsDead] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}&status=${isDead}&species=${species}&gender=${gender}&page=${page}`
    )
      .then((res) => res.json())
      .then((response) => {
        setApi(response.results);
        setMaxPage(response.info.pages);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [api, name, species, gender, isDead, page]);
  const updateFilters = (prop) => {
    setName(prop.name);
    setSpecies(prop.species);
    setGender(prop.gender);
    setIsDead(prop.isDead);
    setPage(1);
  };
  const updatePage = (prop) => {
    setPage(prop.page);
  };
  return (
    <div>
      <div>
        {isLoaded ? (
          <Pagination updatePage={updatePage} page={page} maxPage={maxPage} />
        ) : (
          <p>loading</p>
        )}
      </div>
      <div>
        <Filter
          name={name}
          species={species}
          isDead={isDead}
          gender={gender}
          updateFilterStates={updateFilters}
        />
      </div>
      <div className={RickStyle.cardParent}>
        {api.map((temp, index) => (
          <RickItem key={index} data={temp} />
        ))}
      </div>
      <div>
        {isLoaded ? (
          <Pagination page={page} maxPage={maxPage} />
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};
export default Characters;
