import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      const myBucket = new Bucket(this, 'PhotosBucket2', {
        bucketName: `photosbucket-002-${this.region}`
      });

      (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('ChildLogicalIDPhotosBucket002')
}}