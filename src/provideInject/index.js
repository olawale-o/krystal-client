import { inject, provide } from "vue";
export const provideWrapper = (name, value) => {
    return provide(name, value); 
}

export const injectWrapper = (name, value) => {
    return inject(name, value); 
}