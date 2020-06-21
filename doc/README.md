---
title: Sorter
author: Juan Casado Ballesteros
date: May 7, 2020
---

## Requirements

Se necesita una aplicación capaz de realizar simulaciones de comunicación por medio de Web Sockets y de HTTP/REST.
Las simulaciones se componen de distintas cargas de trabajo que se realizarán en paralelo.
Adicionalmente se desea que tras la realización de una carga de trabajo pueda comenzar otra si así se indicó en un inicio.

Las cargas de trabajo elegidas serán ordenaciones.
Realmente la carga de trabajo a realizar tiene poca relevancia pues lo que de verdad importa es poder grabar las comunicaciones realizadas.
No obstante aunque se desea que el trabajo se realice en un servidor y no en el cliente (para poder grabar la comunicación) se desea que por motivos de testeo estas simulaciones puedan ser también ejecutadas en el cliente (en este caso sin producir una comunicación que poder grabar).

Para hacer ligeramente más sencillas las simulaciones se implementarán múltiples algoritmos de ordenación.
Será necesario por tanto tener unos datos que ordenar lo cual implica tener generadores de estos.

Finalmente se desea tener feedback visual de la simulación en curso.
Cuando la simulación esté compuesta de una sola tarea, se mostrará el estado de la ordenación, cuando sean varias se mostrará una barra de progreso.
El estado de la ordenación se mostrará mediante una gráfica matricial o una gráfica lineal.
Adicionalmente se podrá elegir no tener ningún feedback sobre el estado de la simulación y obtener solo el resultado final.

1. Crear simulaciones.
2. Una simulación debe poder almacenar tareas en paralelo y tareas secuenciales a realizar tras las tareas en paralelo.
3. Habrá tres tipos de tarea, tareas locales, tareas remotas por WebSockets y tareas remotas por HTTP/REST.
4. Todas las tareas en paralelo son copias del mismo tipo de tarea.
5. Las tareas secuenciales pueden ser de distinto tipo.
6. Cada tarea independientemente de su tipo se resolverá por medio de la aplicación de un algoritmo de ordenación sobre unos datos.
7. Habrá distintos tipos de algoritmos de ordenación: burbuja, inserción, merge-sort, quick-sort, heap-sort y shell-sort.
8. Habrá distintos tipos de datos a ordenar diferenciados por la forma en la que se generan: aleatorios, ordenados y parcialmente ordenados.
9. Habrá tres tipos de representaciones visuales: barra de progreso, gráfica matricial y gráfica lineal.
10. Las representaciones podrán actualizarse una vez cuando la simulación haya sido completada o cada vez que los datos sean alterados por el algoritmo de ordenación.
11. Una tarea se considera completada cuando los datos a ordenar han sido ordenados.
12. El progreso de una tarea se calcula a partir de la distancia de cada dato a su posición final después de ser ordenado (esta se conoce antes de comenzar la ordenación).

### Protocolos de comunicación

La principar diferencia entre ambos protocolos de comunicación es que el protocolo REST es un protocolo sin estado mientras que el protocolo Web Sockets sí tiene estado.
En la práctica esto se manifiesta como que REST consiste en una pregunta con una única respuesta.
Por el contrario Websockets puede verse como la creación de un canal por el que pueden emitirse múltiples preguntas a la vez que recibirse múltiples respuestas.
De esto lo que principalmente nos interesa explotar es obtener más de una respuesta a una única pregunta.

Por lo general las implementaciones de REST son mucho más ligeras que las implementaciones de WebSockets.
Esto se debe a la forma en la que la comunicación es establecida.

### Generación de los datos



### Algoritmos de ordenación



### Visualización de los datos



## Use cases



## Classes


