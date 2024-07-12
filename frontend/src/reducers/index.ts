import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    jwt: '',
    authorName: 'guest_user',
    isSignedIn: false
};
type jwtState = {
    jwt: string;
    authorName: string;
    isSignedIn: boolean;
}
const authReducer = (state: jwtState = initialState, action: any) => {
    switch (action.type) {
        case "UPDATE_JWT":
            const newState = {
                ...state,
                jwt: action.payload?.jwt,
                authorName: action.payload.authorName,
                isSignedIn: action.payload.isSignedIn
            };
            return newState;
        default:
            return state;
    }
};

export const getJwt = (state: any) => {
    return state.auth.jwt;
}

export const getIsSignedIn = (state: any) => {
    return state.auth.isSignedIn;
}

export const getAuthorName = (state: any) => {
    return state.auth.authorName;
}
// export default jwtReducer;
const rootReducer = combineReducers({
    auth: persistReducer({ key: 'auth', storage }, authReducer),
});

export default rootReducer;