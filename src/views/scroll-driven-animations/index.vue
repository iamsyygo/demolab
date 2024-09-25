<template>
    <div class="h-200vh w-100vw max-w-100%">

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes spin {
    to {
        transform: rotateY(5turn);
    }
}


// 如果用户设置减少动画效果的偏好，将不会有以下动画效果
@media (prefers-reduced-motion: no-preference) {
    div {
        animation: spin 5s ease infinite;
    }
}
</style>