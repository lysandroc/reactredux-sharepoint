const spConfig = {
    projectFiles: [
        './index.html',
        // './Default.aspx',
        // './Elements.xml',
        // './SharePointProjectItem.spdata',
        './client/config.js',
        './public/**.*'
    ],
    coreOptions: {
        siteUrl: 'https://testettt.sharepoint.com/sites/dev'    // https://{Your Tenant}.sharepoint.com/sites/{Your Dev Site}
    }
}

module.exports = spConfig;