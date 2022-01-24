import {useState} from 'react'
import Test2 from './test2'
function Test() {
    const[word,setWord]=useState("parent")
    return (
        <div>
            <h1>{word}</h1>
            <Test2 changewords={word=>setWord(word)}/>
        </div>
    )
}

export default Test
