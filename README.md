# Curso "RxJS en contexto"

## Módulo 1: El Curso

¿Por qué otro curso de RxJS?
Para aplicar RxJS efectivamente se requiere un cambio de forma de pensar, que para muchos no es muy fácil de adoptar. He visto muchos cursos y tutoriales de RxJS y muchos fallan en enseñar los conceptos de RxJS aplicados al contexto de desarrollo de software, muchos empiezan con analogías para poder enseñar el concepto, e inmediatamente muestran el código asumiendo que quedó claro cómo aplicar el concepto al código, es decir que existe un salto demasiado grande desde la analogía de las frutas que van en una línea de producción de una fábrica hasta juntar múltiples streams de datos en Angular.

Este curso intenta enseñar RxJS reduciendo esa brecha entre la analogía y la aplicación práctica de RxJS para poder adoptar sus conceptos más fácilmente.

### Programación Reactiva e Imperativa
En mi experiencia se hace difícil adoptar RxJS no por la tecnología en sí, sino por no saber cómo aplicarla correctamente en una aplicación, puesto que requiere un cambio de mentalidad o paradigma en la forma de cómo manejar los datos.

Y si no llegamos a cambiar de paradigma, no podremos explotar las capacidades de RxJS, y por ejemplo Angular, ya adoptó RxJS y si no programas de forma reactiva, es decir que programas de forma imperativa, podrás lograr, de todas formas, la funcionalidad que quieres hacer, pero no aprovecharás los beneficios de la programación reactiva y de RxJS.

Es como querer utilizar un taladro  para hacer un hoyo en un cartón, al final lo lograrás, pero el taladro se hizo para realizar otro tipo de trabajo.

Analogía de programación imperativa:
https://www.youtube.com/watch?v=ZAozscMwCSo

Analogía de programación reactiva:
https://www.youtube.com/watch?v=DwYuocLqAMk 

RxJS empieza a tener sentido cuando aprendes programación reactiva, pero aprendemos programación reactiva con RxJS.

### Katas
Una kata en artes marciales japonesas es la repetición de una combinación de movimientos (patadas, puñetes, etc), el objetivo es que estas combinaciones se conviertan en una segunda naturaleza, este concepto también se puede utilizar en otras áreas del conocimiento, por ejemplo en programación: https://en.wikipedia.org/wiki/Kata_(programming) 

Creo que nosotros los programadores somos solucionadores de problemas, nos pagan por eso, pero creo haber encontrado un patrón en la forma de resolver problemas, que es la de encontrar una solución y olvidar demasiado rápido el cómo se solucionó el problema, o cómo aplicarlo en otro escenario, obligandonos a buscar nuevamente la solución cuando se nos presenta el mismo problema en el futuro.

Tenemos pereza para analizar a fondo las soluciones que encontramos, practicarlas y aprenderlas, si lograramos practicar y aprender muchas soluciones podríamos ser programadores más efectivos, rápidos y entregar código de mejor calidad.

Esta habilidad de resolver un problema con una solución ya aprendida se logra repitiendo la solución del problema una y otra y otra vez para que quede en nuestra memoria (por ejemplo, no buscamos la documentación cuando queremos hacer un “for”, o crear un objeto).

Además cuando logramos entender y “memorizar” la solución a un problema, empezamos automáticamente a entender mejor el código (o concepto), exploramos más soluciones, combinamos soluciones, las adaptamos a otras situaciones, buscamos más opciones, etc, es decir, abstraemos y adoptamos la solución para poder aplicarla en otro escenario, por eso me parece que si resolvemos problemas con RxJS repetidamente podremos entender mejor los conceptos y mantenerlos en nuestra memoria. La creatividad llega después de la habilidad.

Los ejercicios del curso se realizarán en una aplicación nueva creada en Angular, las katas de este curso se deben realizar en esta aplicación hasta que se puedan implementar de memoria, sin tener que volver a ver el contenido de este curso, la documentación de RxJS, o algún otro recurso de internet (después de lograr el objetivo si se puede revisar todo). Si en algún momento no recuerdas cómo continuar puedes revisar la solución, pero repetir hasta que no sea necesario hacerlo (mejor si repites inclusive cuando lo sepas de memoria).


### Objetivos
Aprender los conceptos de Observables
Aprender la creación de Observables
Aprender el concepto de Subject
Empezar a adoptar el paradigma reactivo Identificando flujos en aplicaciones


### Requisitos
Este curso está dirigido a programadores web que quieran mejorar su comprensión de RxJS, se asume que se tiene conocimientos en:
Angular básico: Creación de proyectos, componentes y servicios.
Javascript/Typescript básico: Entender tipos y cómo se aplican en Angular.


### Que es RxJS?
Básicamente, RxJS es una librería de JavaScript que ayuda a manejar flujos de datos en una aplicación, generalmente datos asíncronos, es decir que no suceden uno luego de otro en el mismo orden o que no tiene la misma duración al ejecutarse.

RxJS es la implementación de la programación reactiva en JavaScript, este tipo de programación se basa en la creación de flujos de datos en base al tipo de datos Observable. La programación reactiva está implementada en muchas otras plataformas adicionalmente a JavaScript, para más información puedes ver la página: http://reactivex.io/.

RxJS se basa en 2 patrones de diseño: “observer” e “iterator”:
https://es.wikipedia.org/wiki/Observer_(patrón_de_diseño) 
https://es.wikipedia.org/wiki/Iterador_(patrón_de_diseño) 


## Módulo 2: Observable y Observer
En este curso, usaremos una analogía para poder entender los conceptos más importantes de RxJS, imaginemos que somos los encargados de construir y gestionar carreteras, también tendremos la responsabilidad de gestionar el flujo de los autos que pasarán por ellas (los datos).

### Observable
Como responsable de la construcción de carreteras empezaremos construyendo una, esta carretera estará inicialmente cerrada, luego la abriremos para dejar pasar los autos. Llamaremos a la carretera “Observable”.

### Observer
Para poder tener estadísticas de nuestras carreteras contrataremos a una persona para que recolecte los datos de los vehículos que pasan por nuestra carretera. Le llamaremos a esta persona el observador (Observer). Y puede realizar solo 3 tareas: 
1) hacer algo cuando pase un vehículo
2) avisar cuando algo anda mal con el vehículo (error), y/o
3) avisar cuando ya no pasen más vehículos.

### Subscribe
Cuando nosotros decidamos abrir nuestra carretera y que empiecen a pasar los vehículos, pondremos a trabajar a la persona que hemos contratado, y que inicie el trabajo que le indicaremos que haga. A este evento, en el que abrimos la carretera y el Observer empieza su trabajo le llamaremos “Subscribe”.

### Subscription
Para que el observador pueda trabajar recolectando los datos de nuestra carretera, necesitamos tener un contrato con esta persona, para que cuando sus servicios ya no sean necesarios terminemos ese contrato. A este contrato le llamaremos “Subscription”.

### Observable... en la Práctica
Un observable es un tipo de objeto, el cual crea un flujo de datos en la aplicación, la creación de un observable puede realizarse de diferentes formas, tal vez la más simple es el uso del operador “of” o “from”.

“of” y “from” son una función, las cuales reciben datos como parámetros (números, texto, objetos, etc), devuelven un observable y envía automáticamente esos datos.

### Observer... en la Práctica
El Observer es un objeto de 3 funciones (las 3 son opcionales), este objeto es enviado como parámetro al Observable cuando se realiza la suscripción. Estas 3 funciones son:
1) “next”: esta función recibe como parámetro el valor que llega al flujo
2) “error”: esta función recibe como parámetro un error en el caso de que se genere uno.
3) “complete”: esta función no recibe ningún parámetro y se ejecuta cuando el observable ha terminado de recibir datos.

### Subscription…. en la Práctica
Cuando se ejecuta el método subscribe() en el observable, se devuelve un objeto de tipo “Subscription”, el cual está enlazado al Observable y básicamente se utiliza cuando queramos eliminar la suscripción al observable.

### Subscribe
Este método del observable se ejecuta para empezar a recibir datos en el flujo que hemos creado.
