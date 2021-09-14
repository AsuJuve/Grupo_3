​/* Población de la base de datos*/

INSERT INTO CUSTOMERS
VALUES (1, 'Diego', 'Vargas', 'diegovargas@gmail.com', 'carranco', 'estudiante', 'profile.jpg'),
(2, 'Pamela', 'Flores', 'pameflores@gmail.com', 'feliz03', 'estudiante', 'ella.jpg'),
(3, 'Lucia', 'Reyes', 'lucia_reyes@hotmail.com', '123456lr', 'estudiante', 'ella2.jpg'),
(4, 'Armando', 'Garcia', 'armandoga12@gmail.com', 'suculenta2', 'estudiante', 'el2.jpg');
​
INSERT INTO SHOPPING_CART
VALUES (1, 1, 197),
(2,2, 499),
(3,3,359),
(4,4,1099);
​
INSERT INTO CATEGORIES
VALUES (1, 'Programación', NULL),
(2,'Ciencia de Datos', NULL),
(3, 'Desarrollo Web', NULL),
(4, 'Desarrollo Móvil', NULL);

INSERT INTO CATEGORIES
VALUES (5, 'Python', 1),
(6, 'PowerBI', 2),
(7, 'React', 3),
(8, 'Inteligencia Artificial',2),
(9, 'DART', 4);

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
avanzadas de Python, ¡este curso es sin duda para ti! ', 'https://i.ibb.co/HY74rTy/python-Course.jpg', 249, 4200, 5),
(2, 'Aprende React + Firebase | 2021 Actualizado', 'JavaScript + React + Firebase todo lo que necesitas saber', 'En este curso 
aprenderás todo lo necesario para poder encontrar tu primer trabajo dentro del mundo TI JavaScript. \nAprenderás todo lo necesario 
en JavaScript para poder adentrarte en el mundo de la programación con sus librerías y frameworks.\nTambién aprenderás todo lo 
necesario sobre react y como se puede llevar esta librería a otro nivel.\nPor ultimo y como toque final aprenderás Firebase el 
servicio de Google en la nube para gestión de usuarios, data y mucho mas.', 'https://i.ibb.co/7n5dnCq/react-Course.jpg', 7.99, 396,7),
(3,'Curso de PowerBI para principiantes', 'Aprende a usar PowerBi para realizar tus propios dashboards', 'En este curso de Power BI 
en español vas a aprender como hacer informes y reportes con dashboards en distintos proyectos, ejercicios y prácticas.', 
'https://i.ibb.co/qB83zC9/proyecto2-2.png', 10, 1206, 6),
(4, 'Curso de Inteligencia Artificial con python', 'Combina el poder de los datos, Reinforcement Learning, Q-Learning y Deep Learning 
para crear IA en contextos reales', 'Bienvenido Curso completo de Inteligencia Artificial de cero a experto, donde aprenderás conceptos 
claves del mundo de la IAy el aprendizaje automatizado tanto desde el punto de visto teórico como implementaciones prácticas con Python.',
'https://i.ibb.co/qsD6b7T/artificial-intelligence.jpg', 999, 539, 8);

INSERT INTO SHOPPING_CART_PRODUCTS VALUES (1, 1, 1),(2,2,2), (3,3,3),(4,4,4);

INSERT INTO RATING VALUES (1, 3.7),(2,4.5), (3, 4.1), (4, 3.2);

INSERT INTO REQUIREMENTS
VALUES (1, 'No es necesario ningún tipo de conocimiento en programación. Este curso es realmente te enseñará a programar desde cero.', 1),
(2, 'Un ordenador con conexión a internet para poder descargar y ejecutar los notebooks de Python que te daremos durante el curso.',1),
(3, 'Muchas ganas de aprender Python desde cero para seguir creciendo en las ramas de Inteligencia Artificial, Data Science y Machine Learning.',1),
(4, 'El unico requisito es tener muchas ganas de aprender da igual si no sabes JavaScript en el curso tendras los conceptos básicos.', 2),
(5, 'Conocimientos básicos de excel',3),
(6, 'Conocimientos medios de matemáticas, sobretodo de estadística y de álgebra lineal y avanzados del lenguaje de programación Python.', 4);
