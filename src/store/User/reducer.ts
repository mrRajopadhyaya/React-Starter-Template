import { ReduxAction } from "../../interface/Common";
import { UserState } from "../../interface/UserState";

const initialState: UserState = {
  profile: {
    name: "",
    address: "",
  },
};

export const UserReducer = (
  state: UserState = initialState,
  action: ReduxAction
) => {
  switch (action?.type) {
    case "ADD_PROFILE":
      return {
        ...state,
        profile: { ...action.payload },
      };
    default:
      return state;
  }
};
