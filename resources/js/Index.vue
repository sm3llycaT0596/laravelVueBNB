<template>
    <div>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link v-bind:to="{ name: 'example' }">Example</router-link>
        <router-view></router-view>
    </div>
</template>
