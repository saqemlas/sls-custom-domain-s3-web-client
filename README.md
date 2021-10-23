# Custom Domain Web Client S3 Bucket

## Info 

This handles deployment for an s3 Bucket hosting a single page application, a cloudfront distribution, and hosted zone A record.

- a script to bundle the code is executed on a serverless lifecycle hook 
- the build is uploaded to an s3 bucket
- cloudfront distribution with origin access identity to s3 bucket
- hosted zone A type record targeting cloudfront distribution as alias

Amazon S3 is an object storage service that stores data as objects within buckets. An object is a file and any metadata that describes the file. A bucket is a container for objects. Each object has a key (or key name), which is the unique identifier for the object within the bucket.

For more information...
- [React Typescript Handbook](https://www.typescriptlang.org/docs/handbook/react.html)
- [Serverless Framework: Serverless Scriptable Plugin](https://www.npmjs.com/package/serverless-scriptable-plugin)
- [AWS Documentation: How S3 Works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html#CoreConcepts)
- [AWS Documentation: Cloudfront Distribution with S3 Origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_S3Origin)
- [AWS Documentation: Using a CNAME with Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html)
- [AWS Documentation: Cloudfront Serve Static Wesbite](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/)

## Architecture

<p align="center">
  <img src="/architecture-diagram.drawio.svg" />
</p>

## Usage

### Set Up

1. Add the following ssm parameters to systems manager:

- `/dns/domain/name` *value is domain name registered with aws*
- `/dns/DOMAIN_NAME/hostedZoneId` *value is hosted zone id for registered domain*

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
