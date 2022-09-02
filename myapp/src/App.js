import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from 'react';


function App() {
  const [itemComprado, setItemComprado] = useState(0);
  
  const comprarItem = () => {
    setItemComprado(itemComprado + 1)
  }

  return (
    <div className="App">
      <Cabecera cantidad = { itemComprado }/>
      <Listado comprarItem = { comprarItem } />
    </div>
  );
}

export default App;