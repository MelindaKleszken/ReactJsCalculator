import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/logo1.png';
import './App.css';

const App = () => {
//states//
const [pokemons, setPokemon] = useState([
{name: '???',
sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
type1: "",
type2: ""},
{name: '???',
sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
type1: "",
type2: ""},
{name: '???',
sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
type1: "",
type2: ""},
{name: '???',
sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
type1: "",
type2: ""},
{name: '???',
sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
type1: "",
type2: ""},
{name: '???',
sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
type1: "",
type2: ""}])
const headers = [
{to: '/',
text: 'Home',
className: 'navLink topHeader'},
{to: '/NatDex',
text: 'National Dex',
className: 'navLink topHeader'},
{to: '/KalDex',
text: 'Kalos Dex',
className: 'navLink topHeader'},
{to: '/OAloDex',
text: 'Old Alola Dex',
className: 'navLink topHeader'},
{to: '/NAloDex',
text: 'New Alola Dex',
className: 'navLink topHeader'},
{to: '/TypeCalc',
text: 'Type Calculator',
className: 'navLink topHeader'}];
const midHeaders = [
{to: '/',
text: 'Home',
className: 'navLink midHeader'},
{to: '/',
text: 'National',
className: 'navLink midHeader'},
{to: '/',
text: 'Team Planner',
className: 'navLink midHeader'}]

const pokiFillerFunc = () => {
for (let i = 0; i < 151; i++) {

}
}

return (
<Router>
<div>
<nav className='heading'>
<img className='logo' src={logo} alt=''></img>
{headers.map((header, index) => {
return <NavBar key={index} className={header.className} to={header.to} text={header.text}/>
})}
<Link className='navLink' id='navURL' to='/'>PokemonTeamBuilder.net</Link>
</nav>
<TPlanner className='bannerTitle' id='bannerTitleh2' text='TEAM PLANNER'/>
{midHeaders.map((midHeader, index) => {
return <NavBar key={index} className={midHeader.className} to={midHeader.to} text={midHeader.text}/>
})}
<TPlanner className='midTitle' id='midTitleh2' text='Team Planner'/>
<div>
<h2 className='yourTeam'>Your Team</h2>
{pokemons.map((pokemon, index) => {
return <TeamDisplay key={index} name={pokemon.name} sprite={pokemon.sprite} type1={pokemon.type1} type2={pokemon.type2}/>
})}
</div>
<h2 className='yourOptions'>Your Options</h2>

</div>
</Router>
);
}

const NavBar = (props) => {
return(
<Link className={props.className} to={props.to}>{props.text}</Link>
)
}

const TPlanner = (props) => {
return(
<div className={props.className}>
<h2 id={props.id}>{props.text}</h2>
</div>
)
}

const TeamDisplay = (props) => {
return(
<>
<div className='pokiCircle'>
<img src={props.sprite} alt=''></img>
</div>
<div>
<div>
<p className='pokiName'>{props.name}</p>
</div>
<div>
<img src={props.type1} alt=''></img>
<img src={props.type2} alt=''></img>
</div>
</div>
</>
)
}

export default App;