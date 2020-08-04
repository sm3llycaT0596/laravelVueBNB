<template>
    <div>
        <bookable-list-item v-if="bookable1"
        v-bind:item-title="bookable1.title"
        :item-content="bookable1.content"
        v-bind:price="2000">
        </bookable-list-item>
        <bookable-list-item v-if="bookable2"
        v-bind:item-title="bookable2.title"
        :item-content="bookable2.content"
        :price="1000">
        </bookable-list-item>
    </div>
</template>

<script>
import BookableListItem from './BookableListItem';

export default {
    components: {
       BookableListItem
    },
    data() {
        return {
            bookable1: null,
            bookable2: null
        };
    },
    // beforeCreate() {
    //     console.log('before create');
    // },
    created() {

        setTimeout(() => {
            this.bookable1 = {
                title: "Cheap Villa",
                content: "A very cheap villa"
            };
            this.bookable2 = {
                title: "Cheap Villa 2",
                content: "A very cheap villa 2"
            };
        }, 2000);
    }
    // beforeMount() {
    //     console.log('before mount');
    // },
    // mounted() {
    //     console.log('mounted');
    // },
    // beforeDestroy() {
    //     console.log('before destroy');
    // },
    // destroyed() {
    //     console.log('destroyed');
    // }
};
</script>
