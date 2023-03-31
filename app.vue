<script lang="ts" setup>
const [
  FirstModal,
  { isRevealed: firstIsRevealed, cancel: cancelFirst, reveal: revealFirst },
] = useConfirmModal({ title: "first modal" });
const [
  SecondModal,
  { isRevealed: secondIsRevealed, cancel: cancelSecond, reveal: revealSecond },
] = useConfirmModal({ title: "second modal" });
const [
  ThirdModal,
  { isRevealed: thirdIsRevealed, cancel: cancelThird, reveal: revealThird },
] = useConfirmModal({ title: "third title" });

function handleToggle(str: string) {
  switch (str) {
    case "first":
      firstIsRevealed.value ? cancelFirst() : revealFirst();
      break;
    case "second":
      secondIsRevealed.value ? cancelSecond() : revealSecond();
      break;
    case "third":
      thirdIsRevealed.value ? cancelThird() : revealThird();
      break;
  }
}
</script>
<template>
  <Body class="m-8 bg-gray-100 font-sans" />
  <div class="bg-gray-100 h-screen">
    <div>first modal revealed?: {{ firstIsRevealed }}</div>
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
