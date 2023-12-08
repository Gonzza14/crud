# CRUD realizado en ANGULAR y SPRING BOOT

<h2>Tecnologias utilizadas</h2>
<ul>
<li>Java 21</li>
<li>Spring Boot 3.2.0</li>
<li>Angular 17</li>
<li>PostgreSQL 15</li>
<LI>Bootstrap 5</li>
</ul>

<h2>Clonar el repositorio</h2>
<code> git clone https://github.com/Gonzza14/crud.git</code>

<h2>Restaurar base de datos en postgresql con PgAdmin4</h2>

<ol>
    <li>Ingresar a PgAdmin y logearse en el servidor con sus credenciales</li>
    <li>Crear una base de datos con el nombre de "prueba-tecnica-ids"</li>
    <li>Dar click derecho y seleccionar Restore</li>
    <li>Seleccionar el archivo "backup.sql" que esta donde se clono el repositorio</li>
</ol>

<h2>Configurar conexion de base de datos en el backend</h2>

<p>Dentro de la carpeta Backend nos dirigmos al archivo src/main/resources/application.properties</p>

<p>Se deben reemplazar las credenciales con las de su servidor de base de datos</p>

<code>
    spring.datasource.url=jdbc:postgresql://localhost:5432/prueba-tecnica-ids
    spring.datasource.username=(Aqui se coloca el nombre de usuario)
    spring.datasource.password=(Aqui se coloca la contraseña)
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.hibernate.ddl-auto=update
</code>

<h2>Correr proyecto con el IDE Eclipse</h2>

<p>Se debe utilizar <strong>JAVA 21</strong> para que el proyecto funcione<p>

<ol>
    <li>Abrir el proyecto en el IDE Eclipse</li>
    <li>En el explorador de paquetes dar click derecho al proyecto</li>
    <li>Ponemos el cursor sobre la opcion Maven y en el menu desplegado seleccionaremos Update Project</li>
    <li>En la ventana que se despliegue, seleccionaremos el proyecto y presionaremos en el boton "Ok"</li>
    <li>Corremos el proyecto con el boton Ejecutar</li>
    <li>La aplicacion estara corriendo en http://localhost:8080</li>
</ol>

<h2>Instalacion del frontend desde la consola</h2>

<ol>
    <li>Navegar a la carpeta del proyecto: cd frontend</li>
    <li>Instalamos las dependencias: npm install</li>
    <li>Corremos la aplicacion con: ng serve</li>
    <li>La aplicacion estara corriendo en http://localhost:4200</li>
</ol>

<h2>Credenciales para poder realizar operacion de inserción, modificación y eliminación en el crud</h2>

<p>Usuario: gonzza, password: hola</p>
<p>Usuario: jorgui, password: hola</p>

<h2>Pantallas de la aplicación</h2>

<p>Pantalla de inicio sin logearse</p>

<img src="https://github.com/Gonzza14/crud/blob/main/img/pagina-inicio-sin-login.png"></img>

<p>Pantalla de login</p>

<img src="https://github.com/Gonzza14/crud/blob/main/img/login.png"></img>

<p>Pantalla de inicio logueado</p>

<img src="https://github.com/Gonzza14/crud/blob/main/img/crud.png"></img>
