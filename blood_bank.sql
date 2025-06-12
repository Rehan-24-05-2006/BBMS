create database blood_bank;

use blood_bank;

create table users (
username varchar(50) not null,
id int primary key,
mobile varchar(10) not null,
age int,
email varchar(50) unique,
password varchar(50) not null,
bloodgroup varchar(4) not null,
gender varchar(10),
address varchar(150)
);

use blood_bank;
show tables;
select * from users;

show grants for 'root'@'localhost';
create user 'root'@'%' identified by 'Rehan@123';
grant select on blood_bank.users to 'root'@'%';
drop table doneruser;

create view bloodgroup as select * from users;

insert into users value("Rehan", 51, 6261614130, 18, "mrrkhan67@gamil.com", "Rehan@123", "A+", "Male", "Bhakrada" );

delete from users 
where mobile = 6261614130;

alter table users add column bag int default 5;
alter table users drop column bag;

create table simpuser(
username varchar(50) not null,
email varchar(50) unique,
password varchar(50) not null
);
insert into simpuser value("Rehan", "mrrkhan67@gamil.com", "Rehan@123" );


insert into donerUser value("khan", 6261614131, 20, "mansurikhanrehan@gamil.com", "Rehan@123", "A+", "Male", "Bhakrada" );

use blood_bank;
show tables;
select * from simpuser;
select * from users;
select * from bloodgroup;
