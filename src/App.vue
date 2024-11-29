<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar class="letra-titulo" app dense color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer" class="d-md-none"></v-app-bar-nav-icon>
      <v-toolbar-title>Warframe Inicios</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="ma-3">Tu hora: {{ time }}</span>
      <router-link class="none-desing" to="/">
        <v-btn text class="d-none d-md-flex">Home</v-btn>
      </router-link>
      <v-btn text class="d-none d-md-flex">Sorpresa</v-btn>
      <router-link class="none-desing" to="/more-info">
        <v-btn class="d-none d-md-flex">Info</v-btn>
      </router-link>
      <v-btn text class="d-none d-md-flex">Categoría</v-btn>
      <v-btn text class="d-none d-md-flex" color="error">Salir</v-btn>
    </v-app-bar>

    <!-- Menú lateral para móviles -->
    <v-navigation-drawer v-model="drawer" app class="d-md-none">
      <v-list>
        <v-list-item-group>
            <router-link class="none-desing" to="/">
              <v-list-item-title>Home</v-list-item-title>
            </router-link>
          <v-list-item>
            
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Sorpresa</v-list-item-title>
          </v-list-item>
          <router-link class="none-desing" to="/more-info">
            <v-list-item>
              <v-list-item-title>Info</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-item>
            <v-list-item-title>Categoría</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-red">Salir</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false, // Estado del menú lateral
      time: this.formatTime(new Date()), // Formato de hora
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    formatTime(date) {
      // Formato de hora HH:MM:SS
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    setInterval(() => {
      this.time = this.formatTime(new Date());
    }, 1000); // Actualiza el reloj cada segundo
  },
};
</script>
<style scoped>


</style>