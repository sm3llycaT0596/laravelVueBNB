import ExampleComponent from "./components/ExampleComponent";
import Example from "./components/Example";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home",
    },
    {
        path: "/example",
        component: Example,
        name: "example",
    },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history",
  });

  export default router;
