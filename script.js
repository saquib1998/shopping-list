var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var remButton = document.createElement('button');
	remButton.appendChild(document.createTextNode('remove'));
	remButton.classList = 'delete';
	li.appendChild(remButton);
	li.addEventListener('click', function() {
		this.classList.toggle('done');
		remButton.addEventListener('click', function() {
			this.parentElement.remove();
		});
	});

	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);