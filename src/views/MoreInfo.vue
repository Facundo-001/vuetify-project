<template>
    <v-app>
        <v-main class="bg-grey-lighten-4 d-flex flex-column justify-center align-center" style="min-height: 100vh; background: #fff;">
            <!-- Nueva Categoría: Info -->
            <v-col class="d-flex justify-center mt-5">
                <v-card 
                class="text-center pa-4" 
                style="border: 2px solid #555; background: #f5f5f5; color: #333;" 
                width="600px"
                >
                <!-- Título de la categoría -->
                <v-card-title style="background: #222; color: #fff;">Categoría: Información</v-card-title>

                <!-- Subtítulo -->
                <v-card-subtitle style="background: #eee; color: #555;">Detalles y conceptos clave</v-card-subtitle>

                <!-- Contenido de la categoría -->
                <v-card-text>
                    <div style="text-align: left;">
                    <p>
                        La categoría <strong>"Info"</strong> está diseñada para agrupar información útil y detallada 
                        sobre componentes, herramientas o cualquier tema relacionado con el diseño de interfaces.
                    </p>
                    <p><strong>¿Qué encontrarás aquí?</strong></p>
                    <ul>
                        <li>Explicaciones claras sobre el propósito de los componentes.</li>
                        <li>Guías rápidas para implementarlos de manera efectiva.</li>
                        <li>Ejemplos prácticos para inspirar tu diseño.</li>
                    </ul>
                    <p>
                        Esta sección busca ser una referencia práctica para desarrolladores y diseñadores que 
                        necesitan aprender rápidamente cómo usar las herramientas disponibles en Vuetify o cualquier otro framework.
                    </p>
                    </div>
                </v-card-text>

                <!-- Botones de acción -->
                <v-card-actions class="justify-center">
                    <v-btn class="success" outlined> Más Info </v-btn>
                    <v-btn class="error" outlined> Reportar Problema </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-main>

    </v-app>
</template>