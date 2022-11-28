import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { Employee } from "./types";
const INITIAL_STATE = [
  {
    name: "Dapelu",
    workMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=Dapelu",
    description: "Dapelu is a cook",
  },
  {
    name: "Sergio",
    workMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=Sergio",
  },
];

interface AppState {
  employees: Array<Employee>;
  newEmployeesNumber: number;
}
function App() {
  const [employees, setEmployees] = useState<AppState["employees"]>([]);
  const [newEmployeesNumber, setNewEmployeesNumber] =
    useState<AppState["newEmployeesNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setEmployees(INITIAL_STATE);
  }, []);

  const handleNewEmployee = (newEmployee: Employee): void => {
    setEmployees((employees) => [...employees, newEmployee]);
  };
  return (
    <div className="App" ref={divRef}>
      <h1>Employee list:</h1>
      <List employees={employees} />
      <Form onNewWorker={handleNewEmployee} />
    </div>
  );
}

export default App;
