import * as cdk from 'aws-cdk-lib';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';
import { PhotosStack } from '../lib/PhotosStack';

const app = new cdk.App();
new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack');
