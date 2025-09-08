import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const score = ref(50);
  const maxHealth = ref(100);
  const maxAttack = ref(30);
  const maxDefense = ref(20);

  const getScore = computed(() => score.value);
  const getWinningScore = computed(() => score.value);

  const setNextAttack = () => {
    let attack = Math.floor(Math.random() * maxAttack.value) + 1;

    score.value += attack;
  };
  const setNextDeffense = () => {
    let deffense = Math.floor(Math.random() * maxDefense.value) + 1;

    score.value -= deffense;
  };
  const resetScore = () => {
    score.value = 50;
  };

  return {
    //state
    score,
    maxHealth,
    maxAttack,
    maxDefense,
    //getters
    getScore,
    getWinningScore,
    //actions
    setNextAttack,
    setNextDeffense,
    resetScore,
  };
});
