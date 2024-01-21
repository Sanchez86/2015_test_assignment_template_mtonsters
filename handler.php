<META HTTP-EQUIV='Refresh' CONTENT='10,URL=index.html'>
<?

if($_SERVER['REQUEST_METHOD']=='POST'){
	$name = trim(strip_tags($_POST["name"]));
	$email = trim(strip_tags($_POST["email"]));
	$message = trim(strip_tags($_POST["message"]));
	$preg_match = preg_match("/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/",$email);
	if($email == 0){
		echo "Ваше сообщени не отправленно<br>Не корректный e-mail адрес";
	}else{
		mail($email,$name,$message);
		echo('Ваше сообщение успешно отправлено со следующими параметрами:<br>&nbsp;&nbsp;&nbsp;
		Имя: <strong>'.$name.'</strong><br>&nbsp;&nbsp;&nbsp;
		e-mail: <strong>'.$email.'</strong><br>&nbsp;&nbsp;&nbsp;
		Сообщение: <strong>'.$message.'</strong><br><br>
		Через 10 секунд вы перейдете на предыдущую страницу.
');
	}
}


?>