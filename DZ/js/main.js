

function password() {
	var x = prompt('Кто пришел?');
	if (x == "Админ") {
		x = prompt("Пароль");

			if (x == "Черный властелин") {
		
			alert("Добро пожаловать!");
	}


			else if (x == null) {
			alert("Вход отменен");
		}

			else {
			alert("Пароль введен неверно!");
		}
	}

		else if (x == "") {
				alert("Введите логин!");
			}

		else if (x == null) {
		alert("Вход отменен");
	}


		 else {
		alert("Я вас не знаю");
	}



}