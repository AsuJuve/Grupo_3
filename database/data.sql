​/* Población de la base de datos*/

INSERT INTO CUSTOMERS
VALUES ('5', 'Juventino', 'Aguilar', 'juve@hotmail.com', '$2a$10$Nbd4uUVucF8t6tY8zPJ0R.uiB1.7WVzJpwt.rcEzDGR2LIj3QnN8u', 'estudiante', 'https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/users%2F1628706454696_img_.jpg1631917781783?alt=media&token=82b6b77e-cd40-4cac-ba9b-3bd00ce75000'),
('15', 'admin', 'admin', 'admin@kl.com', '$2a$10$r/Zadvd4cwEhoPk6TBS7nuBRQ9RM2teA1LBhf/FLmxeC9aU62o9mK', 'admin', 'https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/users%2FLOGOKL.png?alt=media&token=7b785c10-d314-436e-a161-b0659ef344ff');
​
INSERT INTO SHOPPING_CART
VALUES (1, 1, 197);
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
avanzadas de Python, ¡este curso es sin duda para ti! ','https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/products%2Fpython-Course.jpeg1631930417183?alt=media&token=24ba3b46-0b17-4a92-92ed-9da79ae15540', 249, 4200, 4.5),
(2, 'Aprende React + Firebase | 2021 Actualizado', 'JavaScript + React + Firebase todo lo que necesitas saber', 'En este curso 
aprenderás todo lo necesario para poder encontrar tu primer trabajo dentro del mundo TI JavaScript. \nAprenderás todo lo necesario 
en JavaScript para poder adentrarte en el mundo de la programación con sus librerías y frameworks.\nTambién aprenderás todo lo 
necesario sobre react y como se puede llevar esta librería a otro nivel.\nPor ultimo y como toque final aprenderás Firebase el 
servicio de Google en la nube para gestión de usuarios, data y mucho mas.', 'https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/products%2Freact-Course.jpeg1631930381793?alt=media&token=138ee2ee-4314-44ed-a04e-6c90d541fc53', 159, 396,4.9),
(3,'Curso de PowerBI para principiantes', 'Aprende a usar PowerBi para realizar tus propios dashboards', 'En este curso de Power BI 
en español vas a aprender cómo hacer informes y reportes con dashboards en distintos proyectos, ejercicios y prácticas.', 
'https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/products%2Fproyecto2-2.png1631930539300?alt=media&token=a3315ba2-5d2d-43af-b40c-c8c1834d5c12', 199, 1206, 4.8)
(4, 'Curso de Inteligencia Artificial con python', 'Combina el poder de los datos, Reinforcement Learning, Q-Learning y Deep Learning 
para crear IA en contextos reales', 'Bienvenido Curso completo de Inteligencia Artificial de cero a experto, donde aprenderás conceptos 
claves del mundo de la IAy el aprendizaje automatizado tanto desde el punto de visto teórico como implementaciones prácticas con Python.',
'https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/products%2Fartificial-intelligence.jpeg1631930628233?alt=media&token=05a549a0-fa6b-46bd-ba46-2699cf50120c', 399, 539, 4.3),
(5,'Curso de C++: Básico a Avanzado','Curso diseñado para principiantes o estudiantes universitarios sin conocimientos previos del lenguaje.','El curso se enfocará en aprender los conceptos básicos y avanzados de C++ con Programación Modular . Un curso totalmente enfocado a estudiantes universitarios o principantes que deseen aprender programación con C++.
El modalidad de enseñanza del curso es totalmente teórico/práctico donde se explicará detalladamente cada uno de los temas y se desarrollarán programas a modo de práctica para poder reforzar los conocimientos adquiridos.
El curso también cuenta con un taller para poder unificar todo lo aprendido hasta el momento, y se desarrollará paso a paso una agenda.','https://firebasestorage.googleapis.com/v0/b/keeplearning-d82b7.appspot.com/o/products%2Fcourse3.jpg1631930864295?alt=media&token=059630f4-3662-4d6c-9ed0-0a059658c5d0',199,200,5.0);

INSERT INTO SHOPPING_CART_PRODUCTS VALUES (1, 1, 1),(2,2,2), (3,3,3),(4,4,4);

INSERT INTO RATING VALUES (1, 3.7),(2,4.5), (3, 4.1), (4, 3.2);

INSERT INTO REQUIREMENTS
VALUES (1, 'No es necesario ningún tipo de conocimiento en programación. Este curso es realmente te enseñará a programar desde cero.', 1),
(2, 'Un ordenador con conexión a internet para poder descargar y ejecutar los notebooks de Python que te daremos durante el curso.',1),
(3, 'Muchas ganas de aprender Python desde cero para seguir creciendo en las ramas de Inteligencia Artificial, Data Science y Machine Learning.',1),
(4, 'El unico requisito es tener muchas ganas de aprender da igual si no sabes JavaScript en el curso tendras los conceptos básicos.', 2),
(5, 'Conocimientos básicos de excel.',3),
(6, 'Conocimientos medios de matemáticas, sobretodo de estadística y de álgebra lineal y avanzados del lenguaje de programación Python.', 4),
(7, 'No se requieren conocimientos previos ya que se aprenderá desde 0 hasta lo más avanzado.');
