import vars from "../_vars";

vars.$rangeInput.addEventListener('input', function () {
  const value = this.value;
  console.log('value:', value)
  vars.$rangeOutput.textContent = value + '%';
});
