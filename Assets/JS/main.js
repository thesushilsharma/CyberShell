function switchfunction() {

    var terminal = document.getElementById("terminal").value;
    var text = "";
    
    switch (terminal) {
      case "?":
      case "help":
        console.log("help");
        text = "help info";
        break;
      case "whoami":
        console.log("whoami");
        text = "whoami info";
        break;
      case "education":
        console.log("education");
        text = "education info";
        break;
      case "skills":
        console.log("skills");
        text = "skills info";
        break;
      case "contact":
        console.log("contact");
        text = "contact info";
        break;
      default:
        console.log("Command not found");
        text = "Command not found";
        break;
    }

    document.getElementById("output").innerHTML = text;
    
    }