import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // let items = ["Cianjur","Bandung","Cirebon","SUkabumi","Padalarang"];

    return (
    <>
     <h1>{heading}</h1>
      {items.length == 0 && <p>No item found.</p>}
     <ul className="list-group">
        {items.map((item, index) => (
            <li 
             className={
                selectedIndex == index ? "list-group-item active": "list-group-item" 
             }
            key={item}
            onClick={() => 
            setSelectedIndex(index)}>
            {item}
            </li>
        ))}
    </ul>
    </>
    );}

export default ListGroup