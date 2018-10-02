create database aula7;

use aula7;

create table usuarios (
	id int(11) not null auto_increment primary key,
    nome varchar(30),
    usuario varchar(25),
    senha varchar(15)
) default charset = utf8;

select * from usuarios