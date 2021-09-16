module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/styles/main.scss";
                @import "@/styles/variables.scss";
                @import "@/styles/ui.scss";
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/pride/'
        : '/'
}