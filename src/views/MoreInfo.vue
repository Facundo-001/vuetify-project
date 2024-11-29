<template>
    <v-container class="py-4">
      <!-- Categoría principal -->
      <v-card class="main-category">
        <!-- Contenedor del texto -->
        <div class="glass-content">
          <v-card-title class="title">Categoría de Información</v-card-title>
          <v-card-text>
            Explora las diferentes categorías de información en esta sección. Haz clic en cada tarjeta para más detalles.
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
                <div v-if="expandedCard === index" class="expanded-text mt-2">
                  {{ item.fullDescription }}
                </div>
              </v-expand-transition>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="toggleExpand(index)"
              >
                {{ expandedCard === index ? "Ver menos" : "Ver más" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expandedCard: null,
        items: [
          {
            title: "Título 1",
            shortDescription: "Descripción breve de la tarjeta 1.",
            fullDescription:
              "Esta es la descripción completa de la tarjeta 1. Aquí puedes añadir detalles adicionales.",
          },
          {
            title: "Título 2",
            shortDescription: "Descripción breve de la tarjeta 2.",
            fullDescription:
              "Esta es la descripción completa de la tarjeta 2. Aquí puedes añadir detalles adicionales.",
          },
          {
            title: "Título 3",
            shortDescription: "Descripción breve de la tarjeta 3.",
            fullDescription:
              "Esta es la descripción completa de la tarjeta 3. Aquí puedes añadir detalles adicionales.",
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
    height: 300px; /* Altura fija */
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
    background: rgba(255, 255, 255, 0.4); /* Fondo semitransparente */
    backdrop-filter: blur(10px); /* Efecto de vidrio */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: #000; /* Texto oscuro */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra */
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
    .background-nice {
  background: url("https://wallpapers.com/images/hd/warframe-lotus-being-attacked-2t825sb4mao8zhv4.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Asegura que cubra toda la ventana */
  width: 100%; /* Se extiende al ancho completo */
  display: flex; /* Ayuda a alinear el contenido */
  flex-direction: column; /* Organiza los hijos en columnas */
}
  </style>
  