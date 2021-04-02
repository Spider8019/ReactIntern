import React from "react"

const Card = (props)=>{
    return (<>
        <div className="cardContainer">
           <div className="cardImg">
             <img className="cardImgFull"src={props.image} alt="abc"/>
           </div>
           <div className="cardText">
               <p className="cardDate">{props.date}</p>
               <h1 className="cardHeading">{props.title}</h1>
               <p className='cardContent'>{props.info}</p>
           </div>

        </div>
    </>)
}

export default Card