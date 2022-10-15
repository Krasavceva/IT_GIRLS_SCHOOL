import "./App.css";
import Button from "./Button/Button";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Часов в день"],
  ["Учеба в ItGirlSchool", 4],
  ["Работа", 6],
  ["Отдых", 5],
  ["YouTube", 2],
  ["Сон", 7],
];

export const options = {
  title: "Mоя дневная активность",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <Button />
    </div>
  );
}

export default App;
