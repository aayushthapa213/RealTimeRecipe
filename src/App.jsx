import { useState } from "react";
import Search from "../src/components/search";
import FoodList from "../src/components/FoodList";
import Nav from "../src/components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer"
import FoodDetail from "./components/FoodDetail";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId = {setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}
