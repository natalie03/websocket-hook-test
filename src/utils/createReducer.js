//I think this could easily be moved to bli-utils 
const createReducer = function(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handle = fnMap[type];
    return handle ? handle(state, payload) : state;
  };
};

export default createReducer;
