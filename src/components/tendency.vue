<template>
  <div class="container">
    <ve-line :data="chartData"></ve-line>
    <ve-histogram :data="chartData"></ve-histogram>
    <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "2020/1/1", 访问用户: 238, 下单用户: 109, 下单率: 0.52 },
          { 日期: "2020/1/2", 访问用户: 353, 下单用户: 223, 下单率: 0.26 },
          { 日期: "2020/1/3", 访问用户: 292, 下单用户: 262, 下单率: 0.76 },
          { 日期: "2020/1/4", 访问用户: 172, 下单用户: 120, 下单率: 0.49 },
          { 日期: "2020/1/5", 访问用户: 379, 下单用户: 349, 下单率: 0.323 },
          { 日期: "2020/1/6", 访问用户: 459, 下单用户: 429, 下单率: 0.78 },
          { 日期: "2020/1/7", 访问用户: 570, 下单用户: 329, 下单率: 0.59 }
        ]
      }
    };
  }
};
</script>

<style>
</style>
