var messageGenerator = {
		showMessage : function(message) {
			var messageParagraph = document.getElementById("acs560HelloMessage");
			var message = document.createTextNode(message);
			messageParagraph.appendChild(message);
		}
	};
	
window.onload = function(){
	messageGenerator.showMessage("Hello ACS560!");
}
