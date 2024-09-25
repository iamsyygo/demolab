<template>
    <div class="h-200vh w-100vw max-w-100%">
        <img src="https://picsum.photos/200" alt="">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes spin {
    to {
        // 5turn = 5 * 360deg = 1800deg
        // 1turn = 旋转一圈
        transform: rotateY(5turn);
    }
}

// 如果用户设置减少动画效果的偏好，将不会有以下动画效果
// @media (prefers-reduced-motion: no-preference) {
//     img {
//         animation: spin 5s ease infinite;
//     }
// }

@media (prefers-reduced-motion: no-preference) {

    // @supports 用于检查浏览器是否支持某个CSS属性
    // example: @supports (属性名称: 属性值) { /* some css */ }
    @supports (animation-timeline: scroll()) {
        img {
            animation: spin linear both;
            // animation-timeline: scroll();

            // see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll
            // scroll() 接受两个主要参数：scroller 和 axis。这些参数可以用来指定滚动源和滚动轴。
            // axis 参数可以是 x、y 或 block、inline。
            // block 和 inline 轴：这些轴是相对于书写模式的。在水平书写模式中，block 轴是垂直的，inline 轴是水平的。在垂直书写模式中，情况正好相反。
            // x 和 y 轴：这些轴是固定的，x 轴总是水平的，y 轴总是垂直的。
            // 书写模式表示的是不同语言的书写方向。在大多数情况下，书写模式是水平的，但是有些语言（如阿拉伯语和希伯来语）是垂直书写的。




            // animation-timeline: view(block 0% 50%);
            // https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view
            // view() 函数可以用来指定动画的开始和结束位置。视图进度时间轴通过主体元素在最近的祖先滚动容器内的可见性变化来推进。
            // 两个参数：axis 和 inset。axis 参数可以是 x、y 或 block、inline。inset 参数可以是 start、end、center 或 0% 到 100% 之间的值。
            // inset 用来指定动画从视图的开始和结束位置播放。start 和 end 表示视图的开始和结束位置，center 表示视图的中心位置。0% 和 100% 表示视图的开始和结束位置。
        }
    }
}
</style>