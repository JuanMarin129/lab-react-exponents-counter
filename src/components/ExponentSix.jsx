const ExponentSix = (props) => {

  let numero = props.count;
  let resultado = numero**6;


  return (
      <div className="exponent-counter-container">
          <p className="exponent-label">{props.count}⁶</p>
          <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{resultado}</span></p>
      </div>
  )
};

export default ExponentSix;
