const config = {
    s3: {
        REGION: "ap-southeast-2",
        BUCKET: "dailybookkeeping.com.au",
    },
    apiGateway: {
        REGION: "ap-southeast-2",
        URL: "api.dailybookkeeping.com.au",
    },
    cognito: {
        REGION: "ap-southeast-2",
        USER_POOL_ID: "ap-southeast-2_MHcajUNDA",
        APP_CLIENT_ID: "138ous4gmaf1ev6slmodof0kjj",
        IDENTITY_POOL_ID: "ap-southeast-2:ac4cea68-e608-4d5b-bbc9-cb08561a506e",
    },
};

export default config;
