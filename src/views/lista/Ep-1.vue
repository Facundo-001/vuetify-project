<template>
  <div>
    <!-- Fondo de Xaku -->
    <v-main class="wf-main">
      <v-container class="wf-container h-100">
        <!-- Título principal con sombra y color llamativo -->
        <h2 class="title">¿Cómo comenzar en Warframe?</h2>
        <p class="description">
          Al iniciar el juego, deberás escoger uno de tres Warframes iniciales. Aquí encontrarás información sobre cada uno, con recomendaciones para ayudarte a decidir cuál elegir.
        </p>

        <!-- Tabla de Warframes con estilo neón -->
        <v-table class="warframe-table">
          <thead>
            <tr>
              <th>Warframe</th>
              <th>Estilo de Juego</th>
              <th>Ventajas</th>
              <th>Desventajas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Excalibur</td>
              <td>Enfocado en combate cuerpo a cuerpo y habilidades ofensivas.</td>
              <td class="pa-3">
                - Alta salud y armadura.<br>
                - Habilidad *Exalted Blade* genera una espada de energía muy poderosa.<br>
                - Fácil de usar y versátil.<br>
                ✔- recomendable para jugadores nuevos
              </td>
              <td>
                - Pocas habilidades de control de multitudes.<br>
                - Personalización limitada al inicio.<br>
                - Eventualmente, hay mejores versiones de Excalibur.
              </td>
            </tr>
            <tr>
              <td>Volt</td>
              <td>Mezcla de soporte y ofensiva a distancia.</td>
              <td>
                - Proporciona aumentos de velocidad y escudos protectores.<br>
                - Capacidad para controlar multitudes con electricidad.<br>
                - Útil en roles especializados y generales.
              </td>
              <td class="pa-3">
                - Es vulnerable (baja defensa).<br>
                - Consumo alto de energía inicial.<br>
                - Evoluciona más lento que otros.
              </td>
            </tr>
            <tr>
              <td>Mag</td>
              <td>Control y soporte, ideal para usuarios avanzados.</td>
              <td>
                - Destruye grupos de enemigos con *Polarize* y *Crush*.<br>
                - Puede generar sobrescudos.<br>
                - Gran crecimiento con mejoras específicas.
              </td>
              <td class="pa-3">
                - Inicio complicado, depende de armas al principio.<br>
                - Consumo alto de energía.<br>
                - Requiere complementos avanzados para desbloquear su potencial completo.
              </td>
            </tr>
          </tbody>
        </v-table>

        <!-- Información adicional con neón -->
        <p class="info">
          Si te preocupa elegir mal, ¡no te preocupes! Puedes desbloquear los otros Warframes más adelante:
          <ul>
            <li>Excalibur: se consigue en Marte.</li>
            <li>Volt: está disponible en el dojo del clan.</li>
            <li>Mag: se consigue en Fobos.</li>
          </ul>
        </p>
      </v-container>
    </v-main>

    <!-- Contenedor de partículas -->
    <div id="particles-js"></div>
  </div>
</template>


<style scoped>
/* Fondo de Xaku */
.wf-main {
  background-image: url('https://i.imgur.com/fbLuiRi.jpg'); /* Fondo de Xaku */
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
  padding: 50px 0;
  position: relative; /* Asegura que las partículas estén sobre el fondo */
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Pone las partículas detrás de otros elementos */
}

/* Contenedor principal */
.wf-container {
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.5);
}

/* Título con sombra y color */
.title {
  font-size: 36px;
  color: #47d4ff;
  text-shadow: 0 0 10px #47acff;
  margin-bottom: 20px;
}

/* Descripción */
.description {
  font-size: 16px;
  color: #ddd;
  margin-bottom: 30px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

/* Tabla con borde brillante y neón */
.warframe-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
}

.warframe-table th, .warframe-table td {
  padding: 15px;
  text-align: left;
  color: #f5f5f5;
}

.warframe-table th {
  background: linear-gradient(45deg, #47ffa3, #00d9ff);
  border-radius: 0px;
  color: #222;
  box-shadow: 0 0 10px rgba(255, 99, 71, 0.7);
}

.warframe-table tr:hover {
  background-color: rgba(71, 234, 255, 0.2);
  border: 2px solid #00d9ff;
}

.warframe-table td {
  background: #00000099;
}

.info {
  font-size: 16px;
  color: #ddd;
  margin-top: 20px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

.info ul {
  list-style-type: none;
  padding: 0;
}

.info li {
  margin: 5px 0;
}

.info li::before {
  content: '🌟';
  margin-right: 10px;
}
</style>
