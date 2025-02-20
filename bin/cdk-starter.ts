import * as cdk from 'aws-cdk-lib';
import { Aspects } from 'aws-cdk-lib';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';
import { PhotosStack } from '../lib/PhotosStack';
import { Tagger } from './Tagger';

const app = new cdk.App();
const photosStack = new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack', {
  targetBucketArn: photosStack.photosBucketArn
});

const tagger = new Tagger('level_1')
Aspects.of(app).add(tagger);