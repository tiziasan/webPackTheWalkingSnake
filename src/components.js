function setHTML() {
  const info = document.createElement('h5');
  info.innerText = 'Vai a schermo intero per avere la massima esperienza!';
  const btnPlay = document.createElement('button');
  btnPlay.innerText = 'Play Game!';
  btnPlay.addEventListener('click', start);

  const labelSpeed = document.createElement('label');
  labelSpeed.innerText = 'Select the speed    ';

  const selectSpeed = document.createElement('select');
  selectSpeed.id = 'speed';
  const optionSpeed1 = document.createElement('option');
  const optionSpeed2 = document.createElement('option');
  const optionSpeed3 = document.createElement('option');
  const optionSpeed4 = document.createElement('option');
  const optionSpeed5 = document.createElement('option');
  const optionSpeed6 = document.createElement('option');
  optionSpeed1.text = 'Regular';
  optionSpeed2.text = 'Fast';
  optionSpeed3.text = 'Slow';
  optionSpeed4.text = 'Super Slow';
  optionSpeed5.text = 'Super Fast';
  optionSpeed6.text = 'Insane';
  optionSpeed1.value = 150;
  optionSpeed2.value = 100;
  optionSpeed3.value = 250;
  optionSpeed4.value = 400;
  optionSpeed5.value = 70;
  optionSpeed6.value = 50;
  selectSpeed.add(optionSpeed1);
  selectSpeed.add(optionSpeed4);
  selectSpeed.add(optionSpeed3);
  selectSpeed.add(optionSpeed2);
  selectSpeed.add(optionSpeed5);
  selectSpeed.add(optionSpeed6);
  document.body.appendChild(info);
  document.body.appendChild(labelSpeed);
  document.body.appendChild(selectSpeed);
  document.body.appendChild(btnPlay);

}

export {setHTML};
