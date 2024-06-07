


a) **¿Cuál es la diferencia entre definir un servicio usando el decorador `@Injectable` o `@NgModule`?**

Las principales diferencias entre estos dos decoradores es que `@Injectable` se usa para marcar una clase como un servicio que se puede inyectar en otras partes de la aplicación. Para que el servicio esté disponible en toda la aplicación se utiliza la propiedad `providedIn` y se le pueden asignar varios valores como `root` que es para que se carge en cualquier módulo o `any` para que se carge en un módulo en específico. Mientras que `@NgModule` se utiliza para definir un módulo que va a agrupar varios componentes, servicios... Para ello se utiliza la propiedad `providers` dentro del módulo.

Por lo tanto, mientras que uno se usa para la mayoría de casos debido a su simplifidad y optimización automática, el otro se usa para casos en los que se necesita un control más detallado sobre el alcance del servicio.

b) **¿Qué otras opciones admite el decorador `@Injectable` para la propiedad `providedIn`? ¿Para qué sirven las otras configuraciones?**

Las opciones que puede aceptar ese decorador con la propiedad `providedIn` son:

- `root`: Este es el valor predeterminado, además de ser el más usado. El cual proporciona un único servicio a nivel de la aplicación, porque se coloca en la raiz.

- `any`: Este servicio se ha proporcionar en todos los módulos de la aplicación. Cuando un módulo necesita/solicita el servicio va a recibir una instancia nueva separada.

En resumen, las otras configuraciones lo que van a hacer es permitirnos adaptar el alcance del servicio a diferentes necesidades dentro de una aplicación en Angular.
