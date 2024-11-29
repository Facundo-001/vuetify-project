<template>
  <v-app>
    <v-main>
      <!-- Contenedor principal -->
      <v-container class="py-5">
        <v-row class="background-bonito ">


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
                </v-list>
              </v-card-text>
            </v-card>
            
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
                  <v-card-text>
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
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: "option-1", // Tab seleccionado
    };
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


@media (max-width: 768px) {
  .v-tabs {
    border: none;
  }
}
</style>