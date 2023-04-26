import { updateFail, updateStart, updateSuccess } from "./userSlice";
import axios from "axios";
export const updateUsers = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://localhost:8000/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(updateFail());
  }
};
