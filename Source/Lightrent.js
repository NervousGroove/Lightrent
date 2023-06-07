 document.getElementById("createIgr").addEventListener("click", function() {
  let igrUsername = document.getElementById("igrUsername").value;
  let igrPassword = document.getElementById("igrPassword").value;
  
  function encrypt(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      if (char < 65 || char > 90) {
        result += String.fromCharCode(char);
      } else if (char <= 77) {
        result += String.fromCharCode(char + 13);
      } else {
        result += String.fromCharCode(char - 13);
      }
    }
    return result;
  }
  
  let encryptedUsername = encrypt(igrUsername);
  let encryptedPassword = encrypt(igrPassword);
  
  let file = new File([encryptedPassword], igrUsername);
  
  function igrGetValues() {
    let decryptedUsername = "";
    let decryptedPassword = "";
    
    function decrypt(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char < 65 || char > 90) {
          result += String.fromCharCode(char);
        } else if (char <= 77) {
          result += String.fromCharCode(char + 13);
        } else {
          result += String.fromCharCode(char - 13);
        }
      }
      return result;
    }
    
    setTimeout(function() {
      decryptedUsername = decrypt(encryptedUsername);
      decryptedPassword = decrypt(encryptedPassword);
      encryptedUsername = encrypt(decryptedUsername);
      encryptedPassword = encrypt(decryptedPassword);
    }, 2000);
  }
  
  igrGetValues();
}); 

