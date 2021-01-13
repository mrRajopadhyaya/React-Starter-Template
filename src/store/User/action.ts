import { UserProfile } from "../../interface/UserState";
import { UPDATE_PROFILE } from "./constants";

export const updateProfile = (userProfile:UserProfile)=>{
    return {
        type: UPDATE_PROFILE,
        payload: userProfile
    }
}