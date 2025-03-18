window.onload = () => {
  let result = document.getElementById('result');
  let textarea = document.getElementById('textarea');
  result.innerHTML = textarea.value.length;

  textarea.onchange = () => {
    result.innerHTML = textarea.value.length;
  };
};
