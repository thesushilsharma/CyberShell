function handleCommand() {
  const inputElement = document.querySelector('#terminal-input');
  const outputElement = document.querySelector('#terminal-output');
  const command = inputElement.value.trim().toLowerCase();

  switch (command) {
    case '?':
    case 'help':
      console.log('help');
      commands(help);
      //outputElement.innerHTML += '<p>help info</p>';
      break;
    case 'whoami':
      console.log('whoami');
      outputElement.innerHTML += '<p>whoami info</p>';
      break;
    case 'education':
      console.log('education');
      outputElement.innerHTML += '<p>education info</p>';
      break;
    case 'skills':
      console.log('skills');
      outputElement.innerHTML += '<p>skills info</p>';
      break;
    case 'contact':
      console.log('contact');
      outputElement.innerHTML += '<p>contact info</p>';
      break;
    case 'clear':
      console.log('clear');
      outputElement.innerHTML = '';
      break;
    default:
      console.log('Command not found');
      outputElement.innerHTML += '<p>Command not found</p>';
      break;
  }

  function commands(commandoutput) {
    outputElement.innerHTML += '<p>' + commandoutput + '</p>';
    // Clear input field
    inputElement.value = '';
  }

}
