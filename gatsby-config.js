module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Sydney Ecommerce Theme`,
        short_name: `Sydney`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W95T4XRN",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        //
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
        routeChangeEventName: "ROUTE_CHANGE"
      },
    },
  ],
};
