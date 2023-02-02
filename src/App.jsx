import { useEffect, useState } from 'react'
import './App.css'
import CarList from './components/CarList'

function App() {
  
const nuevoCarro=[
  {
       id:845455,
    brand:"suzuki",
    model:"vitara",
    color:"gris",
     year:2020,
    price:45000000
},
{
       id:121552,
    brand:"ferrari",
    model:"lamborghiny",
    color:"blue",
     year:2023,
    price:750070000
}

]

const[newcar,setNewcar] = useState();
const [editecar,setEditecar] = useState(null)
useEffect(()=>{
  setNewcar(nuevoCarro);
},[])

//agregar carros nuevos
const agregarcarros = (data)=>{

  setNewcar([...newcar,data])
}

// borrar carros

const deletecar = (id)=>{
const deletefilter = newcar.filter(
carros => carros.id !== id
)
setNewcar(deletefilter);
};

//actualizar carros

const updatecar = (carros)=>{
  setEditecar(carros);

};
console.log(editecar);

  return (
    <div className="App">
    <CarList editecar={editecar} updatecar={updatecar} deletecar={deletecar} agregarcarros={agregarcarros} newcar={newcar} />
    </div>
  )
}

export default App
