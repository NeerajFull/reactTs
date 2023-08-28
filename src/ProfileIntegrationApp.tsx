import React from "react";
import ProfileIntegration from "profileintegration/ProfileIntegrationApp";

function ProfileIntegrationApp() {
  const appConfig = {
    brandId: "110003eb-76c1-4b81-a96a-4cdf91bf70fb",
    merchant: "e6132ac0-9665-45b5-ba1f-4243bb0d0ca4",
    userId: "630d40ea-0ea9-4e96-b44f-bc1b7c3253b9",
    mode: "localhost",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY5MzIwODY1NywicHJval9pZCI6InNldG1vcmUiLCJ0eXBlIjoidXNlciIsInN1YiI6IjYzMGQ0MGVhLTBlYTktNGU5Ni1iNDRmLWJjMWI3YzMyNTNiOSIsImV4cCI6MTY5MzgxMzQ1NywianRpIjoiMjQzY2ZhWExYUHg5dlVVaSJ9.KB7syw2CmDzuDUwAWQfVaktpiqazXWie-iDeDXV48U7terpVgzMBwxmIJPYvP2hBJpkDk_AIN6U7O_1ZlhwPj6viI3mRt2hvAQKRFbWQPBIIYTibtMVsnpTSxReAi7DC2hY5BOf4RNUVVG4uHw5uGZqZnl4Hur6e7faIyGCsNN-UJTKbW_fLh7s5txhkxsg7drl7evhpHmYGoJUrmZgvMlIaPS2pagruuFTBK-qTXv9tL84wjdh8o3zW-YD2S5TQycEqSvqTvhSO7crsUeOhd5H660zHIfes53mUGNmKYa5O_CDfvqWwrWwwziJVUF-aSe6iD2nJYwLK_RcYxcshxw",
    allowToConnect: true,
    lang: "english",
    // connect: {
    //   type: 'OFFICE365',
    //   variantName: 'neutralSecondary',
    //   client: 'onboarding',
    //   triggerEvent: true,
    // },
  };

  return <ProfileIntegration appConfig={appConfig} />;
}

export default ProfileIntegrationApp;
