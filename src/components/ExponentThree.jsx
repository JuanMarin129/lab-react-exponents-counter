const ExponentThree = (props) => {

  let numero = props.count;
  let resultado = numero**3;

  return ( 

    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}³</p>
      <p className="exponent-result">{props.count} * {props.count} * {props.count} = <span className="total">{resultado}</span></p>
    </div>)
  
};

export default ExponentThree;
