export const changeHandler = (dispatch, setStateAction) => {
  return (evt) => {
    if (!evt.target.value) {
        return
      }
      const value = evt.target.value;
      dispatch(setStateAction(value));
    };
  };