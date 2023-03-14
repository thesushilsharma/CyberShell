function handleCommand() {
  const inputElement = document.querySelector('#terminal-input');
  const outputElement = document.querySelector('#terminal-output');
  const command = inputElement.value.trim().toLowerCase();

  switch (command) {
    case "?":
    case "help":
      console.log("help");
      // text = "help info";
      commands(help);
      break;
    case "whoami":
      console.log("whoami");
      commands(whoami);
      //text = "whoami info";
      break;
    case "education":
      console.log("education");
      commands(education);
      //text = "education info";
      break;
    case "skills":
      console.log("skills");
      commands(skills);
      //text = "skills info";
      break;
    case "contact":
      console.log("contact");
      commands(contact);
      //text = "contact info";
      break;
    case "banner":
      console.log("banner");
      commands(banner);
      //text = "banner";
      break;
    case "date":
      console.log("date");
      commands(date);
      //text = "date info";
      break;
    case "clear":
      console.log("clear");
      outputElement.innerHTML = '';
      commands(banner);
      //text = "clear info";
      break;
    default:
      console.log("Command not found");
      commands(invalid);
      // text = "Command not found";
      break;
  }

  function commands(commandoutput) {
    outputElement.innerHTML += '<p class="text-red-500">visitor@thesushilsharma:~$; ' + inputElement.value + '</p>';
    outputElement.innerHTML += '<p>' + commandoutput + '</p>';
    // Clear input field
    inputElement.value = '';
    window.scrollTo(0, document.body.offsetHeight);
  }

}