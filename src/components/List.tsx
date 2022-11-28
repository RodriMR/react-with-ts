import { Employee } from "../types";
interface Props {
  employees: Array<Employee>;
}

export default function List({ employees }: Props) {
  return (
    <ul>
      {employees.map((employee) => {
        return (
          <li key={employee.name}>
            <img src={employee.avatar} alt={`Avatar for${employee}`} />
            <h4>
              {employee.name}(<small>{employee.workMonths}</small>)
            </h4>
            <p>{employee.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
}
