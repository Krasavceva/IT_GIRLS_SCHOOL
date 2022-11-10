import React from "react";
import './hero.css';



export default class Hero extends React.Component{
render(){
    const {name, userName, photo, universe, alterego, occupation, friends, superpower, more} = this.props;
    return(
<div className="hero-card">
                <div className="name">{name}</div>
                <div className="username">{userName}</div>
                <img className="photo"src={photo}/>
                <div className="universe">Вселенная: {universe}</div>
                <div className="alterego">Альтер эго: {alterego}</div>
                <div className="occupation">Род деятельности: {occupation}</div>
                <div className="friends">Друзья: {friends}</div>
                <div className="superpower">Суперсилы: {superpower}</div>
                <div className="more">Подробнее: {more}</div>
            </div>

    )
}

}