const config = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "josp-photography",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://mps4m3ync8.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_Gr2tZ8G8o",
    APP_CLIENT_ID: "52a8jekjm702v6nvak7emug1lp",
    IDENTITY_POOL_ID: "us-west-2:b35de957-65c2-4eb4-8853-ca7c60a20d03",
  },
};

export default config;