<template>
  <div class="container_list">
    <sidebar></sidebar>
    <div class="main_statistics">
      <div class="title_main">
        <h3>Статистика</h3>
      </div>
      <div class="statistics_page">
        <div class="grafics">
          <TrendChart
                :datasets="[
                    {
                      data: chartData,
                      smooth: true,
                      fill: true
                    },
                     {
                      data: chartData.map(item => item *2),
                      smooth: true,
                      fill: true
                    }
                  ]"
                  :grid="{
                     verticalLines: true,
                     horizontalLines: true
                  }"
                :labels='{
                   xLabels: labels,
                  yLabels: 5
                }'
          :min="0">
          </TrendChart>
        </div>
        <div class="btn_grafics">
          <button @click="getRandomChartData">Случайные данные</button>
          <button>Добавить данные</button>
          <button @click="deleteChartData">Удалить данные</button>
          <button @click="addChartData">Увеличить кол-во данных</button>
          <button @click="removeChartData">Уменьшить кол-во данных</button>
        </div>
        <div class="no_statistic">
          <p>К сожалению статистика не достапна с мобилного устройства</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";

export default {
  name: "statistics",
  components: {sidebar},
  data () {
    return {
      chartData: [10, 50, 20, 100, 40, 60, 80, 70, 30,
      ],
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь']
    }
  },
  methods: {
    getRandomChartData () {
      this.chartData = this.chartData.map(() => this.getRandomArbitrary(1, 200))
    },
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    removeChartData() {
      this.chartData.pop()
      this.labels.pop()
     },
     addChartData(){
       this.chartData = this.chartData.map(() => this.getRandomArbitrary(1, 200));
        switch(this.labels.length){
          case 2:
            this.labels.push('Март')
          break
          case 3:
            this.labels.push('Апрель')
          break
          case 4:
            this.labels.push('Май')
          break
          case 5:
            this.labels.push('Июнь')
          break
          case 6:
            this.labels.push('Июль')
            break
            case 7:
              this.labels.push('Август')
              break
              case 8:
                this.labels.push('Сентябрь')
                break
        }
     },
     deleteChartData(){
       this.chartData = []
     }
      
    }
    
}   
    

</script>

<style scoped></style>