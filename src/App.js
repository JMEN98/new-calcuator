import { useState } from "react";

function App() {
  const [calu, setCalu] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "."];
    
  const updateCalu = (value) => {
     if (ops.includes(value) && calu===''|| ops.includes(value)&&ops.includes(calu.slice(-1)))
     {return}

      setCalu(calu+value)
      if (!ops.includes(value)){
        setResult(eval(calu+value).toString())

      }
  }


  const creaeDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(  <button onClick={()=>updateCalu(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  };
  const calculate =()=>{
   setCalu(eval(calu).toString())

  }

  const del=()=>{

    

    if (calu==''){
      return
    }
   
    const value = calu.slice(0, -1)
    setCalu(value)
 
    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult(eval(value.toString()));  
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         {result?<span>({result})</span>:''} 
         {calu||"0"}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalu("/")} >/</button>
          <button onClick={()=>updateCalu("*")}> *</button>
          <button onClick={()=>updateCalu("+")}> +</button>
          <button onClick={()=>updateCalu("-")}> -</button>

          <button onClick={del} >DEL</button>
        </div>
        <div className="digits">
          {creaeDigits()}
          <button onClick={()=>updateCalu("0")}>0</button>
          <button onClick={()=>updateCalu(".")}>.</button>
          <button onClick={()=>calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
