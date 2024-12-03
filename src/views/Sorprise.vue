<template>
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto my-4" max-width="500">
              <v-card-title class="headline">Sorpresa de Warframe</v-card-title>
              <v-card-subtitle class="subheading">
                Conoce algo nuevo sobre el universo de Warframe
              </v-card-subtitle>
  
              <v-card-text>
                <v-row class="d-flex justify-center">
                  <v-col v-for="(item, index) in warframeTips" :key="index" cols="12" sm="6">
                    <v-card outlined>
                      <v-card-title>{{ item.title }}</v-card-title>
                      <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                      <v-card-text>{{ item.description }}</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
  
              <v-card-actions>
                <v-btn color="primary" @click="showRandomTip">¡Dame otra sorpresa!</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        warframeTips: [
          {
            title: "Orokin Void",
            subtitle: "El mundo perdido",
            description:
              "La **Orokin Void** es una zona del universo de Warframe en la que habitan los Orokin, civilización antigua con tecnología avanzada. En estas misiones puedes conseguir recursos raros y mods poderosos.",
          },
          {
            title: "Warframe Excalibur",
            subtitle: "El guerrero clásico",
            description:
              "Excalibur es uno de los Warframes más emblemáticos del juego. Su habilidad, **Exalted Blade**, le permite invocar una espada energética masiva para cortar a sus enemigos a través de la pantalla.",
          },
          {
            title: "El Sistema Solar",
            subtitle: "Explora y conquista",
            description:
              "El Sistema Solar en Warframe es el escenario principal, donde los jugadores viajan entre planetas, luchando contra diversas facciones y completando misiones, desde el Sistema de Grineer hasta los misteriosos Templos Orokin.",
          },
          {
            title: "Las Facciones",
            subtitle: "Aliados y enemigos",
            description:
              "En Warframe, existen múltiples facciones como los **Grineer**, **Corpus**, y **Infestation**, cada uno con su propia historia, motivación y estilo de combate. Aprender sobre sus conflictos puede ayudarte a entender mejor el mundo del juego.",
          },
        ],
      };
    },
    methods: {
      showRandomTip() {
        const randomIndex = Math.floor(Math.random() * this.warframeTips.length);
        const randomTip = this.warframeTips[randomIndex];
        this.$refs.randomTipTitle.innerText = randomTip.title;
        this.$refs.randomTipSubtitle.innerText = randomTip.subtitle;
        this.$refs.randomTipDescription.innerText = randomTip.description;
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    background-color: #2e3b4e;
    color: #ffffff;
    border-radius: 10px;
  }
  
  .v-card-title,
  .v-card-subtitle {
    text-align: center;
    font-weight: bold;
  }
  
  .v-btn {
    width: 100%;
    background-color: #ff3d00;
    color: #ffffff;
    font-weight: 600;
  }
  
  .v-btn:hover {
    background-color: #ff5722;
  }
  
  .v-row {
    margin-top: 20px;
  }
  
  .v-card-actions {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  </style>
  