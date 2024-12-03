<template>
  <v-app>
    <v-main
      style="
        background: url('https://wallpapers.com/images/hd/warframe-tenno-ancient-soldier-msans4eaku86x17x.jpg');
        background-size: cover;
        min-height: calc(130vh - 64px); /* Ajusta para incluir el header si existe */
        display: flex;
        flex-direction: column;
      "
    >
      <v-container class="py-4 flex-grow-1">
        <!-- Categoría principal -->
        <v-card class="main-category">
          <!-- Contenedor del texto -->
          <div class="glass-content">
            <v-card-title class="title">Categoría de Información</v-card-title>
            <v-card-text>
              Explora las diferentes categorías de información en esta sección.
              Haz clic en cada tarjeta para más detalles.
            </v-card-text>
          </div>
        </v-card>

        <!-- Tarjetas de información -->
        <v-row>
          <v-col
            v-for="(item, index) in items"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="info-card">
              <v-card-title class="info-title">
                {{ item.title }}
              </v-card-title>
              <v-card-text>
                <div class="text-truncate">
                  {{ item.shortDescription }}
                </div>
                <v-expand-transition>
                  <div
                    v-if="expandedCard === index"
                    class="expanded-text mt-2"
                  >
                    {{ item.fullDescription }}
                  </div>
                </v-expand-transition>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="toggleExpand(index)">
                  {{ expandedCard === index ? "Ver menos" : "Ver más" }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="text-button bg-indigo-darken-2">
      <v-container class="py-5">
        <v-row>
          <!-- Sección de descripción -->
          <v-col cols="12" md="4" class="text-center text-md-left">
            <h3 class="text-primary text--lighten-1 font-weight-bold">
              Warframe Inicios
            </h3>
            <p>
              Comparte mi experiencia y consejos para iniciar en el universo de
              Warframe. Aprende sobre los Warframes, armas, y estrategias para
              dominar las misiones.
            </p>
          </v-col>

          <!-- Enlaces útiles -->
          <v-col cols="12" md="4" class="text-center text-md-left">
            <h4 class="text-primary text--lighten-1 font-weight-bold">
              Enlaces Útiles
            </h4>
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
            </v-list>
          </v-col>

          <!-- Redes Sociales -->
          <v-col cols="12" md="4" class="text-center text-md-left">
            <h4 class="text-primary text--lighten-1 font-weight-bold">
              Redes Sociales
            </h4>
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
            <small
              >&copy; 2024 Warframe Inicios. Todos los derechos reservados.</small
            >
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
      expandedCard: null,
      items: [
        {
          title: "¿De qué se trata esta página?",
          shortDescription: "No es muy obvio?",
          fullDescription:
            "Para el que no sepa y no haya leído, aquí mostraré cómo yo empecé y los pasos que tomé para avanzar rápidamente.",
        },
        {
          title: "Aclaración",
          shortDescription: "Advertencia",
          fullDescription:
            "Todo lo que digo fue a base de mi experiencia jugando. Claramente no todo lo que diga puede ser correcto, son solo consejos.",
        },
        {
          title: "¿Con qué fue creada esta página?",
          shortDescription: "Principalmente con Vue.",
          fullDescription:
            "Obvio, con un poco de CSS, HTML, JavaScript, Vue, Router, y Vuetify.",
        },
      ],
    };
  },
  methods: {
    toggleExpand(index) {
      this.expandedCard = this.expandedCard === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.main-category {
  margin-bottom: 20px;
  width: 100%;
  height: 300px;
  text-align: center;
  background: url("https://i.pinimg.com/originals/3f/07/60/3f0760cc566192ac3168a730f175fc5a.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

/* Contenedor del texto */
.glass-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: #000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Títulos */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Tarjetas de información */
.info-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Títulos de las tarjetas */
.info-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* Texto truncado */
.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Texto expandido */
.expanded-text {
  font-size: 14px;
  color: #555;
}
</style>
