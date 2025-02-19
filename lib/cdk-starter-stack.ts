import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

class L3Bucket extends Construct{
  constructor(scope: Construct, id: string, expiration: number){
    super(scope, id);

    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [{
          expiration: Duration.days(expiration)
      }]
    })
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket 3 ways:

    //L1
    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules : [{
          expirationInDays: 1,
          status: "Enabled"
        }]
      }
    })


    //L2
    new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
          expiration: Duration.days(2)
      }]
    })

    //L3
    new L3Bucket(this, 'MyL3Bucket', 3);
  }
}
