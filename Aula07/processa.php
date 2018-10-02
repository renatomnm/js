<?php

  include("conn.php");

  if(isset($_POST['enviar'])){

    $nome = $_POST['nome'];
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $stmt = $conn->prepare('INSERT INTO usuarios (nome,usuario,senha) VALUES(:nome, :usuario, :senha)');

    $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
    $stmt->bindParam(':usuario', $usuario, PDO::PARAM_STR);
    $stmt->bindParam(':senha', $senha, PDO::PARAM_STR);

    $stmt->execute();
    
    if($stmt){
      echo "Usuario $usuario inserido com sucesso";
    }

  }

?>
