import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";


const Content = () => {
    const[items, setItems] = useState ([
        {
            id: 3,
            checked: false,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 1,
            checked: false,
            item: "Item 3"
        },
    ]);
    const handleCheck = (id) =>{
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    // const [name, setName] = useState('Abutech');
    // const [count, setCount] = useState('0');
    // const handleNameChange = () =>{
    //     const names = ['Abutech', 'Idris', 'Ajibola'];
    //     const int = Math.floor(Math.random() *3);
    //     setName(names[int]);
    //     alert(name)
    // }

    // const handleClick = () => {
    //     setCount(count +1)
    //     setCount(count +1)
    //     console.log(count)
    // }

    return(
        <main>
            {/* <p>Hello {name}!</p>
            <button onClick={handleNameChange}>Change Name</button><br></br>
            <button onClick={handleClick}>Click it 2</button><br></br> */} 
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox" 
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                        />
                        <label 
                            style={(item.checked) ? {color: 'red'} : null}
                            onDoubleClick={() => handleCheck(item.id)}>
                            {item.item}
                        </label>
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)}
                            role="button" 
                            tabindex="0" 
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is Empty</p>
            )};
        </main>
    )
}

export default Content;