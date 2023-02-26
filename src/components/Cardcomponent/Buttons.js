
import './Buttons.css';

const Button = ({button, filter}) => {
    
 return(
 <div className="text-center">
  
{
    button.map((cat) => {
        console.log(cat,'c');
        return (
  
   <button className="button all active text-danger text-center" type='button' onClick={() => filter(cat)}>{cat}</button>
 
             )
    })
}
 </div> 
     
 )
   
};

export default Button;


// return (<div>
//     <div className="buttons">
//         <button className="button all active" onClick={() => setFilter(demo)}>All</button>
        
//         <button className="button white" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//         {/* <button className="button grey" onClick={() => filterProduct("women's clothing")}>
//             Women's Clothing</button>
//         <button className="button blue" onClick={() => filterProduct("jewelery")}>Jewelery</button>
//         <button className="button yellow" onClick={() => filterProduct("electronics")}>Electronic</button> */}

//     </div>

//     {getFilter.map((el) => {
//         {/* console.log(el); */}
//         return (

//             (<div className="tm-gallery tm-mb-80" key={el.id} >
//                 <figure className="effect-goliath tm-gallery-item" >
//                     <img src={el.image} alt="Image" />
//                     <figcaption>
//                         <h2>{el.category}</h2>
//                         <p>{el.title}</p>
//                         <a href="img/gallery/img-01.jpg">View more</a>
//                     </figcaption>
//                 </figure>
//             </div>
//             )

//         );
//     })}

// </div>)