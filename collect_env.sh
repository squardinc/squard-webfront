#!/bin/bash

stage=$1
branch=$(git symbolic-ref --short HEAD)
if [ "${stage}" == "" ]; then
  stage=branch
fi

filepath="env/.${stage}"
if [ "${stage}" == "prod" ]; then
  filepath="env/.master"
fi

appsyncJson=$(aws appsync list-graphql-apis | jq -r ".graphqlApis[] | select(.tags.STAGE == \"${stage}\")")
appsyncApiId=$(echo ${appsyncJson} | jq -r ".apiId")
AWS_APPSYNC_GRAPHQL_ENDPOINT=$(echo ${appsyncJson} | jq -r ".uris.GRAPHQL")
AWS_APPSYNC_API_KEY=$(aws appsync list-api-keys --api-id ${appsyncApiId} | jq -r ".apiKeys[0].id")
AWS_COGNITO_IDENTITYPOOL_ID=$(aws cognito-identity list-identity-pools --max-results 20 | jq -r ".IdentityPools[] | select(.IdentityPoolName | contains(\"${stage}\")).IdentityPoolId")
AWS_COGNITO_USERPOOL_ID=$(echo ${appsyncJson} | jq -r ".additionalAuthenticationProviders[0].userPoolConfig.userPoolId")
AWS_COGNITO_USERPOOL_CLIENT_ID=$(aws cognito-idp list-user-pool-clients --user-pool-id ${AWS_COGNITO_USERPOOL_ID} | jq -r ".UserPoolClients[0].ClientId")

if [ "${stage}" == "prod" ]; then
  STRIPE_PUBLIC_KEY="pk_live_51HOHIqKhcfrw0Jk6XlypWHjqd1k9vgaHe22GWh7B4lGgtrodKoBymgoi8n6ZfT3hbSrSkHF47yXjhpugAn5TpPFY007yfSwq7K"
  GOOGLE_ANALYTICS_TRACKING_ID="UA-179078519-1"
elif [ "${stage}" == "staging" ]; then
  STRIPE_PUBLIC_KEY="pk_test_51HOHIqKhcfrw0Jk6zVGW8Bgupp1vBIVt1phpIEScPSQEnYAcaGO18BQPY4M4DORLZvaZbb2WwnoYFrIlavqFvBqd00hkurFQR1"
  GOOGLE_ANALYTICS_TRACKING_ID="UA-179078519-2"
else
  STRIPE_PUBLIC_KEY="pk_test_51Ha3f5LbwgOFTQrRLwmgyqGI9iaYAeAOF8LF43nedCdnflTxpyrjMxll6KICGoyXx0NY2lFxQUhsNU5XeqK9YJSP00eLoXffCb"
  GOOGLE_ANALYTICS_TRACKING_ID="UA-179078519-2"
fi

echo "GATSBY_AWS_REGION=ap-northeast-1
GATSBY_AWS_APPSYNC_GRAPHQL_ENDPOINT=${AWS_APPSYNC_GRAPHQL_ENDPOINT}
GATSBY_AWS_APPSYNC_API_KEY=${AWS_APPSYNC_API_KEY}
GATSBY_AWS_COGNITO_IDENTITYPOOL_ID=${AWS_COGNITO_IDENTITYPOOL_ID}
GATSBY_AWS_COGNITO_USERPOOL_ID=${AWS_COGNITO_USERPOOL_ID}
GATSBY_AWS_COGNITO_USERPOOL_CLIENT_ID=${AWS_COGNITO_USERPOOL_CLIENT_ID}
GATSBY_AWS_COGNITO_USERPOOL_DOMAIN=squard-${stage}.auth.ap-northeast-1.amazoncognito.com
GATSBY_AWS_S3_BUCKET_NAME=495476032358-${stage}-images
GATSBY_STRIPE_PUBLIC_KEY=${STRIPE_PUBLIC_KEY}
GOOGLE_ANALYTICS_TRACKING_ID=${GOOGLE_ANALYTICS_TRACKING_ID}" > "${filepath}"

echo "collected: ${filepath}"
cat "${filepath}"
