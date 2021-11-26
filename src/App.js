import React, {useState} from 'react'

const App = () => {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const setToList = () => {
        setList([...list, input])
        setInput('')
    }
    const deleteItem = (item) =>{
        setList(list.filter(el => el !== item))
    }
   
    return (
        <>
            <div className="card" style={{width: 380, margin: 30}}>
                <input  type="text" 
                        className="form-control large" 
                        onChange={changeInput} 
                        value={input}
                        />
                <a  href="#" 
                    className="btn btn-primary" 
                    onClick={setToList} >Add to list</a>
                <div className="card-body">
                    <h5 className="card-title text-center">List</h5>
                    <ul className="list-group list-group-flush d-flex">
                        {list.map((el, index) => {
                            return <li className="list-group-item d-flex" key={index}>
                                        {el}<button type="button" 
                                                    className="btn-close ms-auto" 
                                                    onClick={() => deleteItem(el)} />
                                    </li>
                                        
                                    
                        })}
                    </ul>
                    
                </div>
            </div>
        </>
    )
}
export default App