import { saveUserList,} from "../reducers/userList";

import store from "../Store";

const { dispatch } = store;

export function userList(data){
    console.log(data+" kk");
    dispatch(saveUserList(data))
}

