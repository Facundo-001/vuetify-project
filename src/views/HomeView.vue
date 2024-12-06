<template>
  <v-app>
    <v-main style="background: url('https://preview.redd.it/jnhor8nex8451.jpg?auto=webp&s=4f2050e4d3b972a493db41aceda160d4017b42ea'); background-size: cover; background-position: center;">
      <!-- Contenedor principal -->
      <v-container class="py-5">
        <v-row class="">


          <!-- Sidebar con info adicional -->
          <v-col cols="" md="4">
            <v-card>
              <v-card-title class="bg-info white--text">
                <h3>Información</h3>
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Última actualización: 25/11/24</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Próximos cambios: Módulo 3</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Evento especial: Warframe Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Nuevo parche: 2.4.1</v-list-item-title>
                  </v-list-item>
                  <!-- Botón secreto oculto -->
                  <v-list-item>
                    <v-btn
                      class="hd"
                      @click="handleSecretButtonClick"
                    >
                      Secret
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
            

    <!-- Diálogo para ingresar la fecha -->
    <v-dialog v-model="dateDialog" max-width="400">
      <v-card>
        <v-card-title>
          <span>Introduce la fecha secreta</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Fecha (ejemplo: 3 de junio)"
            v-model="secretDateInput"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="verifyDate">Confirmar</v-btn>
          <v-btn color="secondary" @click="dateDialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Segundo diálogo con contenido desbloqueado -->
    <v-dialog v-model="unlockedDialog" max-width="700">
      <v-card>
        <v-card-title>
          <span>¡Contenido Desbloqueado!</span>
        </v-card-title>
        <v-card-text>
          <p>Musicas que me gustan y un poco sobre mi.</p>
          <ul>
            <li><video src="https://www.youtube.com/watch?v=fYYcuNw288s"></video></li>
            <li><video src="https://www.youtube.com/watch?v=3dCy6TQd5lw"></video></li>
            <li><video src="https://www.youtube.com/watch?v=v-1nwQgCc7I&list=RDMM&start_radio=1&rv=3dCy6TQd5lw"></video></li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="unlockedDialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

          </v-col>
          <v-card>
          <v-toolbar color="primary" title="User Profile">
          </v-toolbar>

          <div class="d-flex flex-row">
            <v-tabs
              v-model="tab"
              color="primary"
              direction="vertical"
            >
              <v-tab prepend-icon="mdi-account" text="Option 1" value="option-1"></v-tab>
              <v-tab prepend-icon="mdi-lock" text="Option 2" value="option-2"></v-tab>
              <v-tab prepend-icon="mdi-access-point" text="Option 3" value="option-3"></v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="option-1">
                <v-card flat>
                  <v-card-text style="background: transparent;">
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                    </p>

                    <p>
                      Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                    </p>

                    <p class="mb-0">
                      Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item value="option-2">
                <v-card flat>
                  <v-card-text>
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
        </v-row>

        <!-- Noticias -->

        
        <!-- Ejemplo de Cards -->
        <v-row justify="center" class="d-flex flex-wrap">
          <v-col cols="12" md="6">
            <v-card elevation="2" class="text-center mb-4">
              <v-card-title class="bg-primary text-white">
                Tarjeta 1
              </v-card-title>
              <v-card-text>
                Las cards permiten mostrar información clara y concisa.
              </v-card-text>
              <v-card-actions>
                <v-btn outlined color="primary">Ver Más</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="2" class="text-center mb-4">
              <v-card-title class="bg-secondary text-white">
                Tarjeta 2
              </v-card-title>
              <v-card-text>
                Se adaptan perfectamente a diferentes tamaños de pantalla.
              </v-card-text>
              <v-card-actions>
                <v-btn outlined color="secondary">Descubrir</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app class=" bg-indigo-darken-2">
    <v-container class="py-5">
      <v-row>
        <!-- Sección de descripción -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <h3 class="text-primary text--lighten-1 font-weight-bold">Warframe Inicios</h3>
          <p>
            Comparte mi experiencia y consejos para iniciar en el universo de Warframe. Aprende sobre los Warframes, armas, y estrategias para dominar las misiones.
          </p>
        </v-col>

        <!-- Enlaces útiles -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <h4 class="text-primary text--lighten-1 font-weight-bold">Enlaces Útiles</h4>
          <v-list dense>
            <v-list-item link href="#inicio">
              <v-list-item-content>Inicio</v-list-item-content>
            </v-list-item>
            <v-list-item link href="#guias">
              <v-list-item-content>Guías</v-list-item-content>
            </v-list-item>
            <v-list-item link href="#contacto">
              <v-list-item-content>Contacto</v-list-item-content>
            </v-list-item>
            <v-list-item>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Redes Sociales -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <h4 class="text-primary text--lighten-1 font-weight-bold">Redes Sociales</h4>
          <v-btn icon href="https://www.facebook.com" target="_blank">
            <v-icon large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://www.twitter.com" target="_blank">
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://www.instagram.com" target="_blank">
            <v-icon large>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>


      <!-- Sección inferior -->
      <v-row class="mt-5">
        <v-col cols="12" class="text-center">
          <small>&copy; 2024 Warframe Inicios. Todos los derechos reservados.</small>

        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: "option-1", // Tab seleccionado
      clickCount: 0, // Contador de clics en el botón secreto
      dateDialog: false, // Estado del primer diálogo
      unlockedDialog: false, // Estado del segundo diálogo
      secretDateInput: "", // Entrada del usuario para la fecha secreta
    };
  },
  methods: {
    handleSecretButtonClick() {
      // Incrementa el contador y abre el diálogo si llega a 3
      this.clickCount++;
      if (this.clickCount === 10) {
        this.dateDialog = true;
        this.clickCount = 0; // Reinicia el contador
      }
    },
    verifyDate() {
      // Verifica si la fecha ingresada es correcta
      if (this.secretDateInput.toLowerCase() == "20 de marzo") {
        this.dateDialog = false;
        this.unlockedDialog = true;
      } else {
        alert("Fecha incorrecta. Intenta de nuevo.");
      }
    },
  },
};
</script>

<style scoped>
.text-red {
  color: red !important;
}

.v-tabs {
  border-right: 1px solid #ddd;
}

.text-primary {
  color: #00ffe4 !important; /* Azul brillante estilo Warframe */
}

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

.hd{
  opacity: 0;
}
.hd:hover{
  opacity: 1;
}

@media (max-width: 768px) {
  .v-tabs {
    border: none;
  }
}
</style>