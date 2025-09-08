<template>

    <div>
        <h1 class="text-center">Info</h1>
        <p class="text-center">Esta es la página de información</p>
        <p>Este es un juego simple, en donde puedes incrementar, decrementar o escoger un número aleatorio en el score.
            El score empieza con 50 puntos y puedes ganar si llegas a {{ gameStore.maxHealth }}.</p>
            <label for="maxHealth">Establezca el score máximo para ganar:</label>
            <input type="text" id="maxHealth" v-model="gameStore.maxHealth">
    </div>
</template>

<script setup>
import { useGameStore } from '@/store/gameStore';

const gameStore = useGameStore();
</script>
