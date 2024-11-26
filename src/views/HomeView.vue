<template>
  <v-layout class=" rounded-md">
    <v-app-bar class="letra-titulo bg-amber" title="World of liberty">
      <h4>{{ currentTime }}</h4>
      <v-btn color="white">home</v-btn>
      <v-btn color="white">Sorpresa</v-btn>
      <router-link to="/more-info"><v-btn color="white">info</v-btn></router-link>
      <v-btn color="white">Categoria</v-btn>
      <v-btn color="red">Exit</v-btn>
    </v-app-bar>

    <v-navigation-drawer style="background: #111; color: #fff;">
      <v-list>
        <v-list-item title="Navigation drawer">
          <li></li>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-grey-lighten-4 d-flex flex-column justify-center align-center" style="min-height: 100vh; background: #fff;">
  <!-- Título principal -->
  <v-container width="100%" height="100vh" class="background-bonito">
    <v-col class="d-flex justify-center align-content-center flex-wrap">
      <h2 class="w-75">Noticias - 25/11/24</h2>
      <v-card>
        <v-toolbar class="bg-amber-accent-4" title="Parches y Actualizaciones">
        </v-toolbar>

        <div class="d-flex flex-row">
          <v-tabs
            v-model="tab"
            color="cyan"
            direction="vertical"
          >
            <v-tab prepend-icon="mdi-account" text="Se viene un firewall?" value="option-1"></v-tab>
            <v-tab prepend-icon="mdi-lock" text="version mobil?" value="option-2"></v-tab>
            <v-tab prepend-icon="mdi-access-point" text="Cuando saldra la pagina?" value="option-3"></v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="option-1">
              <v-card flat>
                <v-card-text>
                  <h2>Firewall</h2>
                  <p>
                    Si! si se viene pronto una actualizacion con firewall y con ello implementaremos cosas nuevas!
                  </p>
                    <h3 class="ma-2">cositas que probablemente se integren</h3>
                  <p>
                    <strong>Inicio de sesion:</strong> si como leen un inicio de decion cual permita crear un perfil con foto y nombre personalizado
                  </p>

                  <p class="mb-0">
                    <strong>Calendarios para tareas:</strong> se vera si se importa un calendario que sirve para tareas, recordatorios y multiples cosas que tengan que ver en cierto dias y todo eso
                  </p>
                </v-card-text>
              </v-card>
            </v-tabs-window-item>

            <v-tabs-window-item value="option-2">
              <v-card flat>
                <v-card-text>
                  <h2>¿Habra aplicacion mobil?</h2>
                  <p>
                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                  </p>

                  <p>
                    Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                  </p>

                  <p>
                    Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                  </p>

                  <p>
                    Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                  </p>

                  <p class="mb-0">
                    Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                  </p>
                </v-card-text>
              </v-card>
            </v-tabs-window-item>

            <v-tabs-window-item value="option-3">
              <v-card flat>
                <v-card-text>
                  <p>
                    Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                  </p>

                  <p class="mb-0">
                    Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-card>
    </v-col>
  </v-container>
  <h1 class="mr-4 ma-4 letra-titulo" style="letter-spacing: 5px;">Testeando cards</h1>

  <!-- Contenedor de la Card -->
  <v-col class="d-flex justify-center">
    <v-card 
      class="text-center pa-0" 
      style="border: 2px solid #222; background: #43A047; color: #111;" 
      width="500px"
    >
      <!-- Título de la Card -->
      <v-card-title style="background: #111; color: #fff;">Tarjeta de acceso</v-card-title>

      <!-- Subtítulo de la Card -->
      <v-card-subtitle style="background: #efefef;">Explorando el potencial de las Cards</v-card-subtitle>

      <!-- Contenido principal de la Card -->
      <v-card-text>
        Las **cards** son uno de los componentes más usados en Vuetify y otros frameworks porque 
        combinan estilo y funcionalidad de una forma elegante. En este ejemplo, exploramos sus principales usos, beneficios y configuración.

        <div style="text-align: left; margin-top: 1rem;">
          <p><strong>1. ¿Qué se puede lograr con las cards?</strong></p>
          <ul>
            <li>Mostrar información en bloques claros, como perfiles de usuario, productos o noticias.</li>
            <li>Combinar texto, imágenes, botones y enlaces en un solo contenedor.</li>
            <li>Adaptar el diseño de las cards a diferentes tamaños de pantalla con facilidad.</li>
          </ul>

          <p><strong>2. Beneficios de las cards:</strong></p>
          <p>
            <ul>
              <li><strong>Modularidad:</strong> Son fáciles de mover, duplicar o modificar.</li>
              <li><strong>Responsividad:</strong> Se adaptan automáticamente a cualquier pantalla.</li>
              <li><strong>Diseño atractivo:</strong> Vuetify ofrece estilos predefinidos que puedes personalizar.</li>
              <li><strong>Interactividad:</strong> Puedes añadir botones, formularios o animaciones dentro de las cards.</li>
            </ul>
          </p>

          <p><strong>3. Ejemplo práctico:</strong></p>
          <p>
            Imagina que estás desarrollando una tienda en línea. Una card podría usarse para mostrar información de un producto, como:
          </p>
          <ul>
            <li>Una imagen del producto en la parte superior.</li>
            <li>El nombre del producto y una breve descripción en el centro.</li>
            <li>Botones para comprar o ver más detalles en la parte inferior.</li>
          </ul>

          <p><strong>4. Personalización:</strong></p>
          <p>
            Las cards son extremadamente flexibles. Aquí algunos ejemplos de personalización que puedes implementar:
          </p>
          <ul>
            <li>Cambiar los colores de fondo y texto según el tema de tu página.</li>
            <li>Añadir bordes redondeados para dar un estilo más suave.</li>
            <li>Incorporar sombras para crear profundidad.</li>
            <li>Usar props como <code>hover</code> para resaltar las cards al pasar el cursor.</li>
          </ul>

          <p><strong>5. Tips adicionales:</strong></p>
          <p>
            - Usa <code>&lt;v-responsive&gt;</code> dentro de la card para mostrar imágenes que se ajusten automáticamente al tamaño del contenedor.<br>
            - Integra acciones adicionales, como menús desplegables, para una experiencia más completa.
          </p>
        </div>
      </v-card-text>

      <!-- Botones de acción -->
      <v-card-actions class="justify-center">
        <v-btn class="primary" outlined> Cerrar </v-btn>
        <v-btn class="secondary" outlined> Ver Más </v-btn>
        <v-btn class="info" outlined> Ayuda </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      currentTime: "", // Almacena la hora actual
      tab: 'option-1',
    };
    
  },
  methods: {
    // Función para obtener la hora actual
    getTime() {
      const now = new Date(); // Crea un objeto de fecha actual
      const hours = now.getHours().toString().padStart(2, "0"); // Obtiene las horas (formato 2 dígitos)
      const minutes = now.getMinutes().toString().padStart(2, "0"); // Obtiene los minutos
      const seconds = now.getSeconds().toString().padStart(2, "0"); // Obtiene los segundos
      return `Tu hora: ${hours}:${minutes}:${seconds}`; // Formatea la hora
    },
    // Actualiza el tiempo mostrado
    updateTime() {
      this.currentTime = this.getTime();
    },
  },
  mounted() {
    // Al cargar la página, actualiza la hora
    this.updateTime();

    // Opcional: Actualiza la hora automáticamente cada segundo
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
};
</script>
<style scoped>
.background-bonito {
  position: relative; /* Necesario para el pseudo-elemento */
  background-image: url('@/assets/lang.jpg'); /* Imagen de fondo (asegúrate de que exista en /src/assets) */
  /* background-size: cover; Ajusta la imagen para que cubra todo el contenedor */
 background-position: center;  /* Centra la imagen */
  /* height: 100vh; Ocupa toda la altura de la pantalla */
  display: flex;
  background-repeat: repeat;
  /* align-items: center; Opcional: centra el contenido verticalmente */
  /* justify-content: center; Opcional: centra el contenido horizontalmente */
  /* overflow: hidden; Evita desbordamientos */
}

.background-bonito::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px); /* Efecto de desenfoque */
  -webkit-backdrop-filter: blur(10px); /* Compatibilidad con navegadores basados en WebKit */
  background-color: rgba(255, 255, 255, 0.3); /* Color blanco semitransparente para simular el cristal */
  z-index: 1; /* Asegura que esté encima del fondo */
}

.background-bonito > * {
  position: relative; /* El contenido debe estar encima del pseudo-elemento */
  z-index: 2; /* Superior al pseudo-elemento */
  color: #333; /* Texto oscuro para buen contraste */
  font-size: 1.5rem; /* Tamaño de texto opcional */
  text-align: center; /* Alineación opcional */
}
</style>