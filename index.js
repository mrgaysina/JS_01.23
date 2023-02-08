Array.prototype.customFilter = function (func, obj) {
  const newArr = [];
  let context = this;
  if (arguments.length > 1) {
    context = obj;
  }
  for (let i = 0; i < context.length; i++) {
    if (func.call(context, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

function createDebounceFunction(callback, ms) {
  let timer = setTimeout(callback, ms);
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}
