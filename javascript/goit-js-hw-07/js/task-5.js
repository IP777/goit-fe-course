let textInput = document.querySelector('#name-input');


/*<input type="text"> oninput: <span id="result"></span>
<script>
  var input = document.body.children[0];

  input.oninput = function() {
    document.getElementById('result').innerHTML = input.value;
  };
</script>*/

const handleAddText = () => document.querySelector('#name-output').innerHTML = textInput.value;


textInput.addEventListener('keydown', handleAddText)

/*
try{

}catch{

}
*/

