module.exports = {

    no_auth: process.env.WATCHMEN_WEB_NO_AUTH === 'true',

    public_host_name: process.env.WATCHMEN_BASE_URL, // required for OAuth dance

    auth: {
        GOOGLE_CLIENT_ID: process.env.WATCHMEN_GOOGLE_CLIENT_ID || '<Create credentials in Google Dev Console>',
        GOOGLE_CLIENT_SECRET: process.env.WATCHMEN_GOOGLE_CLIENT_SECRET || '<Create credentials in Google Dev Console>'
    },

    port: process.env.WATCHMEN_WEB_PORT, // default port

    admins: process.env.WATCHMEN_ADMINS,

    ga_analytics_ID: process.env.WATCHMEN_GOOGLE_ANALYTICS_ID,
    title: process.env.WATCHMEN_TITLE || 'watchmen',
    groups: process.env.WATCHMEN_GROUPS && process.env.WATCHMEN_GROUPS.split(',') || ['Default'],
    baseUrl: '/'
};
