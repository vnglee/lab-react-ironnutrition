
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm({addNewFood}) {

    const [newFood, setNewFood] = useState({
        name: '',
        image: '',
        calories: 0,
        servings: 0
    })

    const handleName = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleImage = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleCalories = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleServings = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addNewFood(newFood)
        setNewFood({
            name: '',
            image: '',
            calories: 0,
            servings: 0
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newFood.name} name="name" type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={newFood.image} name="image" type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={newFood.calories} name="calories" type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={newFood.servings} name="servings" type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
