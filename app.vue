<script lang="ts" setup>
const title = ref('first title')
const [
  FirstModal,
  { isRevealed: firstIsRevealed, cancel: cancelFirst, reveal: revealFirst },
] = useConfirmModal({ title });
const [
  SecondModal,
  { isRevealed: secondIsRevealed, cancel: cancelSecond, reveal: revealSecond },
] = useConfirmModal({ title: "second title" });
const [
  ThirdModal,
  { isRevealed: thirdIsRevealed, cancel: cancelThird, reveal: revealThird },
] = useConfirmModal({ title: "third title" });

function handleToggle(str: string) {
  switch (str) {
    case "first":
      firstIsRevealed.value ? cancelFirst() : revealFirst().then(console.log);
      break;
    case "second":
      secondIsRevealed.value ? cancelSecond() : revealSecond().then(console.log);
      break;
    case "third":
      thirdIsRevealed.value ? cancelThird() : revealThird().then(console.log);
      break;
  }
}
</script>
<template>
  <Body class="m-8 bg-gray-100 font-sans" />
  <div class="bg-gray-100 h-screen">
    <div>first modal revealed?: {{ firstIsRevealed }}</div>
    <label>
      First modal title
      <input type="text" v-model="title">
    </label>
    <button @click="() => handleToggle('first')">Toggle first Modal</button>
    <div>second modal revealed?: {{ secondIsRevealed }}</div>
    <button @click="() => handleToggle('second')">Toggle second Modal</button>
    <div>third modal revealed?: {{ thirdIsRevealed }}</div>
    <button @click="handleToggle('third')">Toggle third Modal</button>
    <div class="grid gap-4 grid-cols-3 mt-8 mx-4">
      <div>
        <FirstModal />
      </div>
      <div>
        <SecondModal />
      </div>
      <div>
        <ThirdModal />
      </div>
    </div>
  </div>
</template>
