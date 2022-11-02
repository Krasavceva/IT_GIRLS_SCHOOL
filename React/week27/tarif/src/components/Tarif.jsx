import React from "react";
import "../assets/main.css";
import icon from "../assets/icon.png"


export default function Tarif(props) {
  const classCard=(props.isSelected ? "selected" : '');
  return(
      <div className={`card ${classCard}`}>
             <header className={`card_header ${props.theme.card_header}`}>Безлимитный{props.rate}</header>
             <div className={`card_price ${props.theme.card_price}`}>
                 <p className="card__value">руб</p>
                 <p className="card__number">{props.rate}</p>
                 <p className="card__date">/мес</p>
             </div>
 <div className="card__speed">До{props.speed}Мбит</div>
 <footer className="footer">Объём включенного трафика не ограничен</footer>
  <img src={icon} className="card__icon"/>
</div>
  );
  
}




