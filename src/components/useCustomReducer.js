import { useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import { DATA } from "./action";

const defaultState = {
  data: "",
  isLoading: true,
};

export const useCustomReducer = (url) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [isErr, setErr] = useState(false);

  //   console.log(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          state.isLoading = false;
          setErr(true);
          return;
        }
        const respData = await resp.json();

        // console.log(data);
        dispatch({ type: DATA, payload: { respData } });
      } catch (error) {
        setErr(true);
        // console.log(isErr);
        // return;
      }

      state.isLoading = false;
      // console.log(state.isLoading);
    };

    fetchData();
  }, []);

  return [state.isLoading, isErr, state.data];
};
