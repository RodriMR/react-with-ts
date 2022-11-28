import useNewEmployeeForm from "../hooks/useNewEmployeeForm";
import { Employee } from "../types";

interface FormProps {
  onNewWorker: (newEmployee: Employee) => void;
}

export default function Form({ onNewWorker }: FormProps) {
  const [inputValues, dispatch] = useNewEmployeeForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewWorker(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({
      type: "change_value",
      payload: { inputName: name, inputValue: value },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          value={inputValues.workMonths}
          type="number"
          name="workMonths"
          placeholder="workMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new worker!</button>
      </form>
    </div>
  );
}
