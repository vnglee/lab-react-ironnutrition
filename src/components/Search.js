import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 5
function Search({filterFoodList}) {

    const [searchFood, setSearch] = useState()

    const handleSubmit = (e) => {
        // e.preventDefault()
        setSearch(e.target.value)
        filterFoodList(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchFood} type="text" onChange={handleSubmit} />
    </>
  );
}

export default Search;
