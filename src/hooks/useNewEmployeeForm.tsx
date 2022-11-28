import { useReducer } from "react";
import { Employee } from "../types";
const INITIAL_STATE = { name: "", workMonths: 0, avatar: "", description: "" };

interface FormState {
  inputValues: Employee;
}
type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const useNewEmployeeForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewEmployeeForm;
