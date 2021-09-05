​/* Población de la base de datos*/

INSERT INTO CUSTOMERS
VALUES (1, 'Diego', 'Vargas', 'diegovargas@gmail.com', 'carranco', 'estudiante', 'profile.jpg');
​
INSERT INTO SHOPPING_CART
VALUES (1, 1, 197);
​
INSERT INTO CATEGORIES
VALUES (1, 'Programación', NULL);

INSERT INTO CATEGORIES
VALUES (2, 'Python', 1);

INSERT INTO PRODUCTS
VALUES (1, 'Curso completo de Python 3 de la A a la Z - 2021 +50 horas', 
'Aprende Python 3 como un profesional empezando por las bases hasta programar tus propios algoritmos o juegos completos',
'¡Conviértete hoy mismo en un programador de Python y aprende una de las habilidades más solicitadas por las empresas que 
buscan empleados bien cualificados en este 2021!\nLos Data Scientist ganan en promedio más de $100,000 USD al año ya sea 
trabajando en empresas o como consultores externos. Sus portfolios de trabajos previos son su mejor arma para captar nuevos 
clientes y destacar como analistas de datos. Sin embargo, los datos no se analizan a mano, y el lenguaje de programación de 
Python se ha convertido en un requisito indispensable para aplicar algoritmos de Machine Learning o de Inteligencia Artificial 
como los que vemos en los cursos más avanzados. La programación con Python 3 se ha convertido en una habilidad importantísima para 
conseguir mejores trabajos en el siglo XXI.\n¡Este es el curso más completo, pero manteniendo la simplicidad para que aprender 
una tecnología como Python sea accesible para todos los estudiantes, para el lenguaje de programación Python en Keep Learning!. 
Ya sea que nunca hayas programado antes, o bien ya conozcas la sintaxis básica o tal vez quieras aprender sobre las funciones 
avanzadas de Python, ¡este curso es sin duda para ti! ', 'https://i.ibb.co/HY74rTy/python-Course.jpg', 249, 4200, 2);

INSERT INTO SHOPPING_CART_PRODUCTS VALUES (1, 1, 1);

INSERT INTO RATING VALUES (1, 3.7);

INSERT INTO REQUIREMENTS
VALUES (1, 'No es necesario ningún tipo de conocimiento en programación. Este curso es realmente te enseñará a programar desde cero.', 1);

INSERT INTO REQUIREMENTS
VALUES(2, 'Un ordenador con conexión a internet para poder descargar y ejecutar los notebooks de Python que te daremos durante el curso.',1);

INSERT INTO REQUIREMENTS
VALUES(3, 'Muchas ganas de aprender Python desde cero para seguir creciendo en las ramas de Inteligencia Artificial, Data Science y Machine Learning.',1);