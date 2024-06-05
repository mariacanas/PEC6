### a) ¿Cuál es la función de los componentes y servicios?

**Componentes:**
- Los componentes son los encargados de mostrar y gestionar la interfaz de usuario. Estos se van a usar cuando necesitemos manejar varias secciones de la pantalla.

**Servicios:**
- Los servicios se usan para escribir lógica que no estará relacionada de forma directa con lo que se presenta en la pantalla, como por ejemplo realizar algún cálculo. Se van a utilizar cuando necesitemos compartir datos entre varios componentes.

### b) ¿Qué es la "inyección de dependencias"? ¿Para qué sirve el decorador `@Injectable`?

La inyección de dependencias sirve para que, cuando una clase necesita un servicio, en vez de estar creándolo por sí misma, lo pueda recibir por parte de Angular de una fuente externa. Esto nos facilita el mantenimiento del código, porque estas dependencias se manejan de forma automática.

El decorador `@Injectable` es una etiqueta que se coloca en una clase para indicar que puede recibir dependencias. Esto le dice a Angular que debe proporcionar las dependencias necesarias para esa clase.

### c) Explica los siguientes conceptos de la programación reactiva que se usan en RxJS

**Observable:**
- Representa una serie de eventos o valores que van a ocurrir en un futuro.

**Subscription:**
- Representa la ejecución de un Observable y nos va a permitir poder cancelarlo.

**Operators:**
- Sirven para manipular y gestionar flujos de datos dentro de los Observables. Un ejemplo de ello es `map` o `filter`.

**Subject:**
- Es un tipo de Observable que también puede emitir valores de forma manual.

**Schedulers:**
- Sirven para controlar cuándo se tienen que ejecutar aquellas tareas que están relacionadas con los Observables, lo que nos va a permitir gestionar el rendimiento.

### d) ¿Cuál es la diferencia entre promesas y observables?

Las promesas representan un valor que va a estar disponible en un futuro, mientras que los observables pueden emitir varios valores a lo largo del tiempo. En ambos casos, también pueden emitir un error si algo sale mal.

Mientras que las promesas se resuelven una vez con un resultado o se rechazan, una vez que esto se resuelve, su estado no va a cambiar. Por otro lado, los observables pueden emitir desde cero hasta varios valores a lo largo del tiempo, lo que los hace más adecuados para manejar varios flujos de datos.

El principal uso de las promesas es para operaciones más simples y asíncronas únicas, mientras que los observables se utilizan para operaciones asíncronas que necesitan manejar múltiples valores durante su ejecución.

### e) ¿Cuál es la función de la tubería (`pipe`) `async`?

La tubería `async` se utiliza en plantillas HTML para trabajar con observables o promesas de una manera más sencilla.

Sus funciones principales son encargarse de suscribirse de forma automática a un observable o promesa y actualizar la vista con el valor más reciente. Cuando un componente que usa la tubería `async` se destruye, la suscripción de esa tubería se cancela de forma automática, lo cual evita fugas de memoria. Al suscribirse de forma automática, la tubería `async` nos evita tener que hacerlo manualmente en el código TypeScript.
