// src/App.js
import './App.css';
import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  
  const [foodList, setFoodList] = useState(foods)
  const [foodInfo, setFoodInfo] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...foodList]

    setFoodList(updatedFoods)
  }

  const filterFoodList = (str) => {
    let filterFoods

      if (str === '') {
        filterFoods = foodInfo
      } else {
        filterFoods = foodInfo.filter((food) => {
          return food.name.toLowerCase().includes(str.toLowerCase())
      })
      }

      setFoodList(filterFoods)
  }

 const deleteFood = (name) => {
    const filterFoods = foodList.filter(food => {
      return food.name !== name
    })

    setFoodList(filterFoods)
  }


  return (
    <div>
           <AddFoodForm addNewFood={addNewFood}/>

        <Button> Hide Form / Add New Food </Button>

      <Search filterFoodList={filterFoodList}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
    

      {foodList.map(food => 
          <FoodBox key={food._id} food={food} deleteFood={deleteFood}/>
      )}
    
   
      </Row>
    </div>
  );
}
export default App;