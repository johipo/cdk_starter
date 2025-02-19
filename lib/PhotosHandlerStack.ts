import * as cdk from 'aws-cdk-lib';
import { Fn } from 'aws-cdk-lib';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class PhotosHandlerStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
      
      const targetBucker = Fn.importValue('photos-bucket')

      new LambdaFunction(this, 'PhotosHandler', {
        runtime: Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: Code.fromInline(`
          export.handler = async (event) => {
            console.log("Hello: " + process.env.TARGE_BUCKET)
          }  
        `),
        environment: {
          TARGE_BUCKET: targetBucker
        }
      })
    }

   
}