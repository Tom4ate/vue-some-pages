<script setup lang="ts">
//   defineProps<{
//     // title: string
//   }>()
</script>

<template>
    
    <div class="circle-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<style scoped>

    .circle-container {
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .circle {
        position: absolute;
        top: 20px;
        left: 20px;
        transform: translate(-50%, -50%);
        height: 15%;
        width: 15%;
        border-radius: 50%;
        background-color: #008CBA;
    }

    .circle:nth-child(1) {
        transform: translate(-50%, -50%) rotate(0deg) translate(0, -60vh);
    }

    .circle:nth-child(2) {
        transform: translate(-50%, -50%) rotate(45deg) translate(0, -60vh);
    }

    .circle:nth-child(3) {
        transform: translate(-50%, -50%) rotate(90deg) translate(0, -60vh);
    }

    .circle:nth-child(4) {
        transform: translate(-50%, -50%) rotate(135deg) translate(0, -60vh);
    }

    .circle:nth-child(5) {
        transform: translate(-50%, -50%) rotate(180deg) translate(0, -60vh);
    }

    .circle:nth-child(6) {
        transform: translate(-50%, -50%) rotate(225deg) translate(0, -60vh);
    }

    .circle:nth-child(7) {
        transform: translate(-50%, -50%) rotate(270deg) translate(0, -60vh);
    }

    .circle:nth-child(8) {
        transform: translate(-50%, -50%) rotate(315deg) translate(0, -60vh);
    }

@media (min-width: 1024px) {
}
</style>
