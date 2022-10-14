var terminal = document.getElementById("terminal");


switch (terminal) {
  case "help":
    console.log("help");
    break;
  case "whoami":
    console.log("whoami");
    break;
  case "education":
    console.log("education");
    break;
  case "skills":
    console.log("skills");
    break;
  case "contact":
    console.log("contact");
    break;
  default:
    console.log("Command not found");
    break;
} 