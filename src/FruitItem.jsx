import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
const initialState = 1
const reduce = (state,action)=>{
    
    switch (action) {
        case "increment":
            return state + 1
            case "decrement":
                return state === 1? state = 1: state - 1
                case "reset":
                    return initialState
                default:
             return state
            
    }
}

function FruitItem({fruit}){
    const [count,dispatch] = useReducer(reduce,initialState)
return(
<>
<div className='card'>
    <div className="card-heaser d-flex">
      <p>Fruit Name</p>:  {fruit.fruitName}
    </div>
    <div className='card-image imgBox'>
        <img src={fruit.fruitImage} alt="" className='card-img-top'/>
    </div>
    <div className="card-body d-flex">
     <p>Product Price </p>:  {fruit.fruitPrice} $
    </div>
    <div className="card-footer d-flex">
       <p>Product Code</p>: {fruit.fruitCode}
    </div>
<div className="counter d-flex justify-content-evenly">
    <button className='btn btn-warning' onClick={()=>dispatch("reset")}>Reset</button>
    <button className='btn btn-danger' onClick={()=>dispatch('decrement')}>-</button>
      {count}
    <button className='btn btn-success'  onClick={()=>dispatch('increment')}>+</button>
</div>

</div>
</>
)
}

export default FruitItem;