import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#1988bf",
                secondary: "#ffffff",
                accent: "#dae2e2",
                error: "#f44336",
                warning: "#ffc107",
                info: "#03a9f4",
                success: "#4caf50"
            },
            dark: {
                primary: "#3f51b5",
                secondary: "#009688",
                accent: "#8bc34a",
                error: "#f44336",
                warning: "#ffc107",
                info: "#03a9f4",
                success: "#4caf50"
            }
        }
    }
});
