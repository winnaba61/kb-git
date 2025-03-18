function onClick() {
  if (
    !document.getElementById('num').value ||
    !document.getElementById('multiple').value
  ) {
    alert('숫자를 입력해주세요.');
    return;
  }
  const num = parseInt(document.getElementById('num').value);
  const multiple = parseInt(document.getElementById('multiple').value);
  const result = num * multiple;
  document.getElementById('result').innerText = `${result}`;
}
