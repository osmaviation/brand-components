module.exports = {
    title: "OSM Aviation - Components",
    themeConfig: {
        nav: [
            {
                text: "VuePress",
                link: "https://vuepress.vuejs.org/"
            },
            {
                text: "Tailwind CSS",
                link: "https://tailwindcss.com/"
            }
        ],
        sidebar: [["/", "Home"]]
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.js"),
            require("autoprefixer")
        ]
    }
};