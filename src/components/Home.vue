<template>
    <div class="text-center">
        <p>Let´s play the game</p>
        <h2 class="text-primary pb-3">Current Score: {{ gameStore.score }}</h2>
        <span class="text-primary pb-3">Max Score: {{ gameStore.maxHealth }}</span>
        <br>
        <div class="row">
            <div class="col-5 offset-1">
                <button class="form-control btn btn-success p-4" @click="increment">Increment</button>
            </div>
            <div class="col-5">
                <button class="form-control btn btn-danger p-4" @click="decrement">Decrement</button>
            </div>
            <div class="col-6 offset-3 pt-2">
                <button class="form-control btn btn-warning p-4" @click="random">Random</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useGameStore } from '@/store/gameStore';

const increment = () => {
    gameStore.score += Math.floor(Math.random() * 30) + 1
}

const decrement = () => {
    gameStore.score -= Math.floor(Math.random() * 30) + 1
}

const random = () => {
    Math.random() > 0.5 ? increment() : decrement();
}

const gameStore = useGameStore();
</script>