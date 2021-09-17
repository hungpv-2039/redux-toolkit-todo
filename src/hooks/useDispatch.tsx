import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

function useCustomDispatch() {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch;
}

export default useCustomDispatch;
