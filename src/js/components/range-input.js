import vars from "../_vars";

vars.$rangeInput.addEventListener('input', function () {
  const value = this.value;
  vars.$rangeOutput.textContent = value + '%';
});
