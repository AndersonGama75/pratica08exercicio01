function validar() {

	var formulario = document.forms["f_form"];
	var login = formulario.f_login.value;
	var eMail = formulario.f_email.value;
	var senha = formulario.f_senha.value;
	var confSenha = formulario.f_confSenha.value;

	if (login == "") {
		alert("Preencha o campo Login!");
		formulario.f_login.focus();
		return false;
	}

	if (eMail == "") {   // eMail.indexOf('@') == -1   >>   Assegura que o usuário digite uma arroba, ou seja, que esteja dentro do formato type="email"
		alert("Preencha o campo E-mail!");
		formulario.f_email.focus();
		return false;
	}

	if ((eMail.indexOf('@') == -1 || eMail.indexOf('.com') == -1) && (eMail.indexOf('@') == -1 || eMail.indexOf('.com.br') == -1)) {
		alert("seu e-mail deve ser no formato: nome@servidor.com ou nome@servidor.com.br");
		return false;
	}

	if (senha == "" || senha.length <= 5) {
		alert("A senha deve ter no mínimo 6 caracteres!");
		formulario.f_senha.focus();
		return false;
	}
	if (confSenha == "") {
		alert("O campo 'Confirmar Senha' deve ser preenchido.");
		return false;
	}

	if (confSenha != senha) {
		alert("As senhas digitadas são diferentes.");
		return false;
	}

}