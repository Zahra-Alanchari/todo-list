import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_TODO, ADD_TODO_SUCCESS, CHECK_TODO, CHECK_TODO_SUCCESS, FETCH_TODO, FETCH_TODO_SUCCESS } from "./action";

function* addtodoSaga(action) {
  try {
    const res = yield call(fetch, "http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });
    const data = yield res.json()
    yield put({type:ADD_TODO_SUCCESS, payload:data})
  } catch (err) {
    console.log(err);
  }
  yield;
}
function* fetchTodoSaga(){
    try{
        const res = yield call(fetch, "http://localhost:3001/todos")
        const data = yield res.json()
        yield put({type: FETCH_TODO_SUCCESS, payload:data})
    }catch(err){console.log(err)}

}
function* chechTodoSaga(action){
    console.log(action,"cccc")
    try{
        const res = yield call(fetch, `http://localhost:3001/todos/${action.payload.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({checked:action.payload.checked}),
          });
          const data = yield res.json()
          yield put({type:CHECK_TODO_SUCCESS, payload:data})

    }catch(err){console.log(err)}
}

export default function* todoSagas() {
  yield takeEvery(ADD_TODO, addtodoSaga);
  yield takeEvery(FETCH_TODO,fetchTodoSaga)
  yield takeEvery(CHECK_TODO,chechTodoSaga)
}
