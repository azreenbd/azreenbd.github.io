<template>
    <div>
        <h1>Hello from Certainty</h1>
    </div>
</template>

<script>

export default {
    name: 'ApplicationForm',
    props: {
        forUser: {
            type: Boolean,
        }
    },
    data(){
        return{
            isLoading: true
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
