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
      <router-link class="none-desing" to=/soprise>
        <v-btn text class="d-none d-md-flex">Sorpresa</v-btn>
      </router-link>
      <router-link class="none-desing" to="/more-info">
        <v-btn class="d-none d-md-flex">Info</v-btn>
      </router-link>
      <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          :to="item.link"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-account"
          text="Iniciar Sesion"
          style="color: #4c00ff; text-shadow: 0 0 10px #4c00ff; background: #111;"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        style="color: #29ff4c; text-shadow: 0 0 10px #29ff4c; background: #111;"
        prepend-icon="mdi-account"
        title="Iniciar Sesion"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="First name*"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                hint="example of helper text only on focus"
                label="Middle name"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                style="color: #29ff4c;"
                hint="example of persistent helper text"
                label="Last name*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Email*"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Confirm Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                auto-select-first
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
            <v-list-item-title class="text-red">Iniciar Sesion</v-list-item-title>
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
      items: [
        {title: 'Que warframe escoger', link: 'Guia-inicio'},
        {title: 'Que hacer con mis primeros platinos'},
        {title: 'Ahora que?'},
      ],
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