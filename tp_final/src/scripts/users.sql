USE boris;

CREATE TABLE users( 
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(250) NOT NULL,
 password VARCHAR(250) NOT NULL
);

INSERT INTO courses (name, password) VALUES ('cziemba', 'pass123');
