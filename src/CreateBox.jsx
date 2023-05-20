import 'bootstrap/dist/css/bootstrap.min.css';

import {fruitsData} from './data'

import FruitItem from './FruitItem';

function CreateBox() {
    
    return(
     <>
     <div className='container-fluid bg-primary  general'>
        {fruitsData.map(fruit=><FruitItem key={fruit.id} fruit={fruit} />)}
     </div>
     </>
    )
}

export default CreateBox