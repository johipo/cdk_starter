import * as cdk from 'aws-cdk-lib';
import { CfnOutput, Fn } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack {
    private stackSuffix: string;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      this.initializeSuffix();

      const photosBucket = new Bucket(this, 'PhotosBucket3', {
        bucketName: `photos-bucket-${this.stackSuffix}`
      });

      (photosBucket.node.defaultChild as CfnBucket).overrideLogicalId('LogicalIDPhotosBucket3');

      new CfnOutput(this, 'photos-bucket', {
        value: photosBucket.bucketArn, //This is the Bucket Physical ID
        exportName: 'photos-bucket'
      })
    }

    private initializeSuffix(){
      const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
      this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId))
    }
}