const CounterPlugin = function ({
  rootSelector,
  counterValue = 0,
  step = 1,
} = {}) {
  this._value = counterValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.decrementBtn = refs.container.querySelector("[data-action = decrement]");
  refs.incrementBtn = refs.container.querySelector("[data-action = increment]");
  refs.value = refs.container.querySelector("#value");
  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.updateValue();
  });

  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.updateValue();
  });
};

CounterPlugin.prototype.updateValue = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({ rootSelector: "#counter", step: 1 });
