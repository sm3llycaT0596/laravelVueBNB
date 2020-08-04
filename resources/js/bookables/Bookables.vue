<template>
    <div>
        <div v-if="loading">Data is loading...</div>
        <div v-else>
            <bookable-list-item
                :item-title="bookable.title"
                :item-content="bookable.content"
                :price="1000"
                v-for="(bookable, index) in bookables"
                :key="index"
            ></bookable-list-item>
        </div>
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
            bookables: null,
            loading: false
        };
    },
    // beforeCreate() {
    //     console.log('before create');
    // },
    created() {
        setTimeout(() => {
            this.loading = true;
            this.bookables = [
                    {
                    id: 1,
                    title: "Cheap Villa !!!",
                    content: "A very cheap villa"
                    },
                    {
                    title: "Cheap Villa 2",
                    content: "A very cheap villa 2"
                    }
                ];
                this.loading = false;
        }, 5000);
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
