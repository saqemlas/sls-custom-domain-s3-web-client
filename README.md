# AWS Web Client

## Info 

This handles deployment for a static web client. 
- code will be bundled in deployment
- deployed to an S3 bucket
- cloudfront distribution with origin access identity
- create a dns record targeting the cloudfront distribution

1. Add the following ssm parameters to systems manager:

- `/dns/domain/name` *value is domain name registered with aws*
- `/dns/DOMAIN_NAME/hostedZoneId` *value is hosted zone id for registered domain*

2. Deploy stack to create certificate, *certificate should be propogated in deployment*
3. Visit website

## Architecture

<p align="center">
  <img src="/architecture-diagram.drawio.svg" />
</p>

## Usage 

### Credentials:
```bash
export AWS_PROFILE=<profile_name>
```

### Install Dependencies:

```bash
yarn run install
```

### Lint & Type Check:

```bash
yarn run lint && yarn run checktsc
```


### Deploy:

```bash
yarn run deploy
```

### Remove:

```bash
yarn run remove
```
