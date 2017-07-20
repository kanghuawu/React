export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload or, the payload does not have a .then
    // property we don't care about it, sent it on.
    if (!action.payload || !action.payload.then){
      console.log(action);
      return next(action);
    }
  };
}