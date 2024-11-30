document.getElementById('processBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  
  // Simulasi logika AI sederhana
  const output = `AI memproses: "${inputText.toUpperCase()}"`;
  
  document.getElementById('outputText').innerText = output;
});