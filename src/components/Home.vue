<template>
    <div class="text-center">
        <p>Let´s play the game</p>
        <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
        <span class="text-primary pb-3">Max Score: {{ gameStore.maxHealth }}</span>
        <br>
        <span class="text-succes pb-3 h3" v-if="gameStore.getScore >= 100">
            You Won!
        </span>
        <span class="text-danger pb-3 h3" v-if="gameStore.getScore < 0">
            You Lost!
        </span>
        <div class="row" v-if="gameStore.getScore < 100 && gameStore.getScore > 0">
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
        <div v-else>
            <button class="form-control btn btn-primary p-4" @click="gameStore.resetScore()">
                Reset Game
            </button>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from '@/store/gameStore';

const increment = () => {
    gameStore.setNextAttack();
}

const decrement = () => {
    gameStore.setNextDeffense();
}

const random = () => {
    Math.random() > 0.5 ? increment() : decrement();
}

const gameStore = useGameStore();
</script>