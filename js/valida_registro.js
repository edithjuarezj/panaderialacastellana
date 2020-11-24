with(document.registro){
	onsubmit = function(e){
		e.preventDefault();
		ok = true;
		if(ok && username.value==""){
			ok=false;
			alert("Debe escribir un nombre de usuario");
			username.focus();
		}
		if(ok &&fullname.value==""){
			ok=false;
			alert("Debe escribir su nombre");
			fullname.focus();
		}
		if(ok && email.value==""){
			ok=false;
			alert("Debe escribir su email");
			email.focus();
		}
		if(ok && comment.value==""){
			ok=false;
			alert("Debe escribir su pedido");
			comment.focus();
		}
		


		if(ok){ submit(); }
	}
}
