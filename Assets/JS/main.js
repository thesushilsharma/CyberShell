function switchfunction() {

  // output commands
  var commands = function (commandoutput) {
    document.getElementById("output").innerHTML += "<p>" + commandoutput + "</p>";
  }
  document.querySelector('#terminal').focus()
  var terminal = document.querySelector('#terminal').value.trim().toLowerCase();
  var text = "";

  switch (terminal) {
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
    case "clear":
      console.log("clear");
      commands(banner);
      //text = "clear info";
      break;
    default:
      console.log("Command not found");
      commands(invalid);
      // text = "Command not found";
      break;
  }

  // document.getElementById("output").innerHTML = text;

}