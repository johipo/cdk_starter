import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

interface PhotosHandlerStackProps extends StackProps {
  targetBucketArn: string
}

export class PhotosHandlerStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: PhotosHandlerStackProps) {
      super(scope, id, props);
      
      new LambdaFunction(this, 'PhotosHandler', {
        runtime: Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: Code.fromInline(`
          export.handler = async (event) => {
            console.log("Hello: " + process.env.TARGE_BUCKET)
          }  
        `),
        environment: {
          TARGE_BUCKET: props.targetBucketArn
        }
      })
    }

   
}