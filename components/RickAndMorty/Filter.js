import React, { useState } from "react";
import RickStyle from "../../styles/RickItem.module.css";
const Filter = (props) => {
  const [name, setName] = useState(props.name);
  const [species, setSpecies] = useState(props.species);
  const [isDead, setIsDead] = useState(props.isDead);
  const [gender, setGender] = useState(props.gender);
  const submit = (e) => {
    e.preventDefault();

    let x = {
      name: name,
      species: species,
      isDead: isDead,
      gender: gender,
    };

    props.updateFilterStates(x);
  };
  return (
    <div>
      <form className={RickStyle.form} onSubmit={submit}>
        <input
          className={RickStyle.Input}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Character Name"
        ></input>
        <input
          className={RickStyle.Input}
          type="text"
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="Species"
        ></input>
        <select
          className={RickStyle.Input}
          value={isDead}
          onChange={(e) => setIsDead(e.target.value)}
        >
          <option value=""></option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          className={RickStyle.Input}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button className={RickStyle.button} type="submit">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
