<template>
    <div>
        <p>{{forecast.dt}}</p>
        <p>t:{{forecast.temp}}C</p>
    </div>
</template>
<script>
export default {
    name: 'ForecastDay',
    props: {
        dayForecast: null
    },

    data() {
        return ({
            forecast: this.dayForecast
        })
    },
}
</script>
