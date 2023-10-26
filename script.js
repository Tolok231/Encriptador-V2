function encriptar() {
    var inputText = document.getElementById('input-text').value;
    var outputText = '';
  
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      outputText += String.fromCharCode(charCode + 5);
    }
  
    document.getElementById('output-text').value = outputText;
  }
  
  function desencriptar() {
    var inputText = document.getElementById('input-text').value;
    var outputText = '';
  
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      outputText += String.fromCharCode(charCode - 5);
    }
  
    document.getElementById('output-text').value = outputText;
  }
  