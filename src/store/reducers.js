const initialState = {
  location: "",
  salaryRange: 0,
  availability: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_SALARY_RANGE":
      return { ...state, salaryRange: action.payload };
    case "SET_AVAILABILITY":
      return { ...state, availability: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
