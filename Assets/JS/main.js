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
    document.getElementById("output").innerHTML = text;
    
    }