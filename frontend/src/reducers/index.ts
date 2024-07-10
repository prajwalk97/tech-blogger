import { combineReducers } from "redux";

const initialState = {
    jwt: ''
};

const jwtReducer = (state = initialState, action: { type: string, payload: { jwt: string } }) => {
    switch (action.type) {
        case "UPDATE_JWT":
            return { ...state, jwt: action.payload?.jwt };
        default:
            return state;
    }
};

export const getJwt = (state: any) => {
    return state?.jwt?.jwt;
}
// export default jwtReducer;
const rootReducer = combineReducers({
    jwt: jwtReducer,
    // Add other reducers here if you have more
});

export default rootReducer;