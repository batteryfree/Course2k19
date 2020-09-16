<template>
    <div class="forecast">
        <h2 class="forecast__headline">Forecast</h2>
        <div class="flex">

            <div class="forecast__wrap" v-for="(forecast, index) in forecasts" :key="index">
                <p>{{forecast.date}}</p>
                <div v-for="(dayForecasts, index) in forecast.main" :key="index">
                    <p class="forecast__txt">{{dayForecasts.dt}}</p>
                    <p class="forecast__txt forecast__txt--border-b">t:{{dayForecasts.temp}}C</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Forecast',
 
    props: {
        forecast: null
    },

    data() {
        return ({
            forecasts: this.forecast
        })
    },

    watch: {
        forecast: function() {
            this.forecasts = this.forecast;
        }
    }

}
</script>
<style>
.forecast {
    border: 1px solid #777;
    width: 800px;
    margin: 15px auto;
}
.forecast__headline {
    color: #555;
    font-size: 20px;
}

.forecast__wrap {
    width: 100px;
    margin: 5px auto;
}

.flex {
    display: flex;
}

.forecast__txt {
    font-size: 10px;
    font-weight: 600;
}

.forecast__txt--border-b {
border-bottom: 1px solid #555;
}

</style>