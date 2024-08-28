export const middleware = (store) => {
  return (action) => {
    //Trong tham số store sẽ có 2 hàm:
    //- getState() ==> Trả về toàn bộ state của store
    //- dispatch() ==> Thực hiện việc dispatch lên reducer
    // console.log("Store", store);
    // console.log(store.getState());
    // console.log("action", action);
    // if (action.type === "todos/add") {
    //   console.log("Bạn vừa thêm todos", action.payload.task);
    //   store.dispatch({ type: "counter/increment" });
    // }
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }
  };
};

//Bao gồm: state, dispatch, action
