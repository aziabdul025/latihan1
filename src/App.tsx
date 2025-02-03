//import Message from './Message';
//import Button from './Button';
import ListGroup from "./components/ListGroup"

function App() {let items = ["Sukabumi","Cianjur","Bandung","Tasikmalaya","Ciamis","Purwakarta"];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return <div><ListGroup items={items} heading="City" 
  onSelectItem={handleSelectItem}/></div>
}

export default App
