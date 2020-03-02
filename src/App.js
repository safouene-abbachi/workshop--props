import React from 'react';
import Header from "./Header"
import Item from './Item';
import Footer from "./Footer"
import './App.css';



const data = [{name : "iphone",
count : 3,
price : 800},
{name : "ipod",
count : 1,
price : 500},
{name : "ipad",
count : 2,
price : 1200},
] 

function App() {
  return (
    <div className="App">
     <Header/>
    
     <Item productItems={data}/>
     <Footer total={data}/>
    </div>
  );
}

export default App;
