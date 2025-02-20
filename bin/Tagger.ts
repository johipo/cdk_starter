import { CfnResource, IAspect, Tags } from "aws-cdk-lib";
import { IConstruct } from "constructs";

export class Tagger implements IAspect{
    private key: string;

    constructor(key:string) {
        this.key = key;
    }

    visit(node: IConstruct): void {
        //console.log('visiting: ' + node.node.id);
        if (node instanceof CfnResource) {
            const resourceType = node.cfnResourceType || "Unknown Resource";
            Tags.of(node).add(this.key, resourceType);
            console.log(`Tag applied to resource ${node.node.id} (Type: ${resourceType})`);
        }
    }
}