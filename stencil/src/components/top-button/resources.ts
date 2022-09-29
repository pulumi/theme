export const resources = {
    "pulumi:pulumi:Stack": [],
    "aws:autoscalling:DrainerECSLifeycleHook": [],
    "pulumi-service:infrastructure:DatabaseMigration": [],
    "pulumi-service:infrastructure:Certificate": [],
    "pulumi-service:infrastructure:Service": [],
    "pulumi:providers:aws": [],
    "pulumi-service:infrastructure:DynamoStreamer": [],
    "aws:cloudwatch/logGroup:LogGroup": [
        {
            "type": "aws:cloudwatch/logMetricFilter:LogMetricFilter",
            "weight": 58
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 12
        },
        {
            "type": "aws:ec2/flowLog:FlowLog",
            "weight": 3
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 3
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:iam/role:Role": [
        {
            "type": "aws:iam/rolePolicyAttachment:RolePolicyAttachment",
            "weight": 132
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 25
        },
        {
            "type": "aws:iam/rolePolicy:RolePolicy",
            "weight": 19
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 14
        },
        {
            "type": "aws:iam/instanceProfile:InstanceProfile",
            "weight": 5
        },
        {
            "type": "aws:s3/bucket:Bucket",
            "weight": 4
        },
        {
            "type": "aws:iam/policyAttachment:PolicyAttachment",
            "weight": 4
        },
        {
            "type": "aws:ec2/flowLog:FlowLog",
            "weight": 3
        },
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 3
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 3
        },
        {
            "type": "aws:rds/clusterInstance:ClusterInstance",
            "weight": 2
        },
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 1
        },
        {
            "type": "aws:backup/selection:Selection",
            "weight": 0
        }
    ],
    "aws:ec2/vpc:Vpc": [
        {
            "type": "aws:ec2/subnet:Subnet",
            "weight": 23
        },
        {
            "type": "aws:ec2/securityGroup:SecurityGroup",
            "weight": 15
        },
        {
            "type": "aws:ec2/routeTable:RouteTable",
            "weight": 13
        },
        {
            "type": "aws:elasticloadbalancingv2/targetGroup:TargetGroup",
            "weight": 5
        },
        {
            "type": "aws:lb/targetGroup:TargetGroup",
            "weight": 4
        },
        {
            "type": "aws:ec2/internetGateway:InternetGateway",
            "weight": 3
        },
        {
            "type": "aws:ec2/flowLog:FlowLog",
            "weight": 3
        },
        {
            "type": "aws:ec2/vpcEndpoint:VpcEndpoint",
            "weight": 0
        }
    ],
    "aws:s3/bucket:Bucket": [
        {
            "type": "aws:s3/bucketObject:BucketObject",
            "weight": 22
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 16
        },
        {
            "type": "aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock",
            "weight": 15
        },
        {
            "type": "aws:iam/policy:Policy",
            "weight": 9
        },
        {
            "type": "aws:s3/bucket:Bucket",
            "weight": 4
        },
        {
            "type": "aws:s3/bucketPolicy:BucketPolicy",
            "weight": 0
        },
        {
            "type": "aws:elasticloadbalancingv2/loadBalancer:LoadBalancer",
            "weight": 0
        },
        {
            "type": "aws:iam/rolePolicy:RolePolicy",
            "weight": 0
        }
    ],
    "aws:ec2/eip:Eip": [
        {
            "type": "aws:ec2/natGateway:NatGateway",
            "weight": 7
        }
    ],
    "aws:dynamodb/table:Table": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 4
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:ecs/cluster:Cluster": [
        {
            "type": "aws:ecs/service:Service",
            "weight": 8
        },
        {
            "type": "aws:ec2/launchConfiguration:LaunchConfiguration",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 1
        },
        {
            "type": "aws:ecs/clusterCapacityProviders:ClusterCapacityProviders",
            "weight": 0
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:rds/parameterGroup:ParameterGroup": [
        {
            "type": "aws:rds/clusterInstance:ClusterInstance",
            "weight": 2
        }
    ],
    "aws:wafv2/ipSet:IpSet": [
        {
            "type": "aws:wafv2/webAcl:WebAcl",
            "weight": 1
        }
    ],
    "aws:route53/zone:Zone": [
        {
            "type": "aws:route53/record:Record",
            "weight": 10
        }
    ],
    "aws:imagebuilder/component:Component": [
        {
            "type": "aws:imagebuilder/imageRecipe:ImageRecipe",
            "weight": 1
        }
    ],
    "aws:imagebuilder/distributionConfiguration:DistributionConfiguration": [
        {
            "type": "aws:imagebuilder/image:Image",
            "weight": 1
        }
    ],
    "aws:sns/topic:Topic": [
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 52
        },
        {
            "type": "aws:lambda/permission:Permission",
            "weight": 15
        },
        {
            "type": "aws:sns/topicSubscription:TopicSubscription",
            "weight": 15
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 12
        },
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        },
        {
            "type": "aws:iam/rolePolicy:RolePolicy",
            "weight": 0
        }
    ],
    "aws:sns:TopicEventSubscription": [],
    "awsx:x:ecs:FargateTaskDefinition": [],
    "aws:acm/certificate:Certificate": [
        {
            "type": "aws:route53/record:Record",
            "weight": 0
        },
        {
            "type": "aws:acm/certificateValidation:CertificateValidation",
            "weight": 0
        },
        {
            "type": "aws:elasticloadbalancingv2/listener:Listener",
            "weight": 0
        }
    ],
    "aws:ecr/repository:Repository": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 9
        },
        {
            "type": "aws:ecr/lifecyclePolicy:LifecyclePolicy",
            "weight": 6
        }
    ],
    "pulumi:providers:random": [],
    "aws:kinesis:StreamEventSubscription": [],
    "aws:kinesis/stream:Stream": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 3
        },
        {
            "type": "aws:lambda/permission:Permission",
            "weight": 1
        },
        {
            "type": "aws:lambda/eventSourceMapping:EventSourceMapping",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:kms/key:Key": [
        {
            "type": "aws:secretsmanager/secret:Secret",
            "weight": 26
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 3
        },
        {
            "type": "aws:iam/rolePolicy:RolePolicy",
            "weight": 2
        }
    ],
    "aws:iam/rolePolicy:RolePolicy": [
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 0
        }
    ],
    "aws:elasticloadbalancingv2/targetGroup:TargetGroup": [
        {
            "type": "aws:elasticloadbalancingv2/listenerRule:ListenerRule",
            "weight": 11
        },
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 11
        },
        {
            "type": "aws:elasticloadbalancingv2/listener:Listener",
            "weight": 3
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 3
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 1
        }
    ],
    "aws:ec2/subnet:Subnet": [
        {
            "type": "aws:ec2/routeTableAssociation:RouteTableAssociation",
            "weight": 21
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 9
        },
        {
            "type": "aws:ec2/natGateway:NatGateway",
            "weight": 7
        },
        {
            "type": "aws:autoscaling/group:Group",
            "weight": 5
        },
        {
            "type": "aws:lb/loadBalancer:LoadBalancer",
            "weight": 5
        },
        {
            "type": "aws:rds/subnetGroup:SubnetGroup",
            "weight": 3
        },
        {
            "type": "aws:elasticloadbalancingv2/loadBalancer:LoadBalancer",
            "weight": 3
        },
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 3
        },
        {
            "type": "aws:ec2/securityGroupRule:SecurityGroupRule",
            "weight": 3
        },
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 2
        },
        {
            "type": "aws:ec2/launchTemplate:LaunchTemplate",
            "weight": 1
        },
        {
            "type": "aws:ec2/securityGroup:SecurityGroup",
            "weight": 1
        },
        {
            "type": "aws:elasticsearch/domain:Domain",
            "weight": 1
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 1
        },
        {
            "type": "aws:ec2/vpcEndpoint:VpcEndpoint",
            "weight": 1
        }
    ],
    "aws:ec2/internetGateway:InternetGateway": [
        {
            "type": "aws:ec2/routeTable:RouteTable",
            "weight": 3
        },
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        }
    ],
    "random:index/randomId:RandomId": [
        {
            "type": "aws:sns/topic:Topic",
            "weight": 5
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 2
        },
        {
            "type": "aws:rds/cluster:Cluster",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/eventRule:EventRule",
            "weight": 0
        },
        {
            "type": "aws:secretsmanager/secretVersion:SecretVersion",
            "weight": 0
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 0
        },
        {
            "type": "aws:autoscaling/group:Group",
            "weight": 0
        }
    ],
    "aws:iam/instanceProfile:InstanceProfile": [
        {
            "type": "aws:imagebuilder/infrastructureConfiguration:InfrastructureConfiguration",
            "weight": 1
        },
        {
            "type": "aws:ec2/launchConfiguration:LaunchConfiguration",
            "weight": 1
        },
        {
            "type": "aws:ec2/launchTemplate:LaunchTemplate",
            "weight": 1
        }
    ],
    "aws:ec2/securityGroup:SecurityGroup": [
        {
            "type": "aws:ec2/securityGroup:SecurityGroup",
            "weight": 11
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 6
        },
        {
            "type": "aws:ec2/securityGroupRule:SecurityGroupRule",
            "weight": 4
        },
        {
            "type": "aws:ec2/launchTemplate:LaunchTemplate",
            "weight": 3
        },
        {
            "type": "aws:elasticloadbalancingv2/loadBalancer:LoadBalancer",
            "weight": 1
        },
        {
            "type": "aws:ec2/launchConfiguration:LaunchConfiguration",
            "weight": 1
        },
        {
            "type": "aws:rds/cluster:Cluster",
            "weight": 1
        },
        {
            "type": "aws:lb/loadBalancer:LoadBalancer",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 1
        },
        {
            "type": "aws:elasticsearch/domain:Domain",
            "weight": 0
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 0
        },
        {
            "type": "aws:ec2/vpcEndpoint:VpcEndpoint",
            "weight": 0
        }
    ],
    "aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock": [],
    "aws:iam/rolePolicyAttachment:RolePolicyAttachment": [
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 3
        },
        {
            "type": "aws:rds/clusterInstance:ClusterInstance",
            "weight": 2
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 0
        }
    ],
    "aws:route53/record:Record": [
        {
            "type": "aws:acm/certificateValidation:CertificateValidation",
            "weight": 0
        }
    ],
    "aws:ec2/flowLog:FlowLog": [],
    "aws:ecr/lifecyclePolicy:LifecyclePolicy": [],
    "aws:ec2/natGateway:NatGateway": [
        {
            "type": "aws:ec2/routeTable:RouteTable",
            "weight": 9
        }
    ],
    "aws:rds/subnetGroup:SubnetGroup": [
        {
            "type": "aws:rds/cluster:Cluster",
            "weight": 1
        }
    ],
    "aws:secretsmanager/secret:Secret": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 44
        },
        {
            "type": "aws:secretsmanager/secretVersion:SecretVersion",
            "weight": 26
        }
    ],
    "aws:ec2/routeTable:RouteTable": [
        {
            "type": "aws:ec2/routeTableAssociation:RouteTableAssociation",
            "weight": 21
        }
    ],
    "aws:elasticloadbalancingv2/loadBalancer:LoadBalancer": [
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 12
        },
        {
            "type": "aws:route53/record:Record",
            "weight": 5
        },
        {
            "type": "aws:elasticloadbalancingv2/listener:Listener",
            "weight": 3
        },
        {
            "type": "aws:wafv2/webAclAssociation:WebAclAssociation",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:imagebuilder/infrastructureConfiguration:InfrastructureConfiguration": [
        {
            "type": "aws:imagebuilder/image:Image",
            "weight": 1
        }
    ],
    "aws:acm/certificateValidation:CertificateValidation": [
        {
            "type": "aws:elasticloadbalancingv2/listener:Listener",
            "weight": 0
        }
    ],
    "aws:lambda/function:Function": [
        {
            "type": "aws:lambda/permission:Permission",
            "weight": 19
        },
        {
            "type": "aws:sns/topicSubscription:TopicSubscription",
            "weight": 15
        },
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 2
        },
        {
            "type": "aws:lambda/eventSourceMapping:EventSourceMapping",
            "weight": 1
        },
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:ec2/routeTableAssociation:RouteTableAssociation": [],
    "aws:ec2/launchConfiguration:LaunchConfiguration": [
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        }
    ],
    "aws:elasticloadbalancingv2/listener:Listener": [
        {
            "type": "aws:elasticloadbalancingv2/listenerRule:ListenerRule",
            "weight": 11
        }
    ],
    "aws:secretsmanager/secretVersion:SecretVersion": [],
    "aws:lambda/permission:Permission": [
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        }
    ],
    "aws:lambda/eventSourceMapping:EventSourceMapping": [],
    "aws:sns/topicSubscription:TopicSubscription": [
        {
            "type": "aws:cloudformation/stack:Stack",
            "weight": 1
        }
    ],
    "aws:rds/cluster:Cluster": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 6
        },
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 4
        },
        {
            "type": "aws:rds/clusterInstance:ClusterInstance",
            "weight": 2
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 1
        },
        {
            "type": "aws:backup/selection:Selection",
            "weight": 0
        }
    ],
    "aws:elasticloadbalancingv2/listenerRule:ListenerRule": [
        {
            "type": "aws:ecs/service:Service",
            "weight": 11
        }
    ],
    "aws:cloudformation/stack:Stack": [
        {
            "type": "aws:ecs/service:Service",
            "weight": 5
        },
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 3
        }
    ],
    "aws:rds/clusterInstance:ClusterInstance": [
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 3
        }
    ],
    "aws:ec2/launchTemplate:LaunchTemplate": [
        {
            "type": "aws:autoscaling/group:Group",
            "weight": 2
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 2
        }
    ],
    "aws:autoscaling/group:Group": [
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 1
        }
    ],
    "aws:wafv2/webAcl:WebAcl": [
        {
            "type": "aws:wafv2/webAclAssociation:WebAclAssociation",
            "weight": 1
        },
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 0
        },
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 0
        }
    ],
    "aws:wafv2/webAclAssociation:WebAclAssociation": [],
    "aws:imagebuilder/imageRecipe:ImageRecipe": [
        {
            "type": "aws:imagebuilder/image:Image",
            "weight": 1
        }
    ],
    "aws:ecs/taskDefinition:TaskDefinition": [
        {
            "type": "aws:ecs/service:Service",
            "weight": 12
        },
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 1
        },
        {
            "type": "aws:iam/rolePolicy:RolePolicy",
            "weight": 1
        }
    ],
    "aws:s3/bucketObject:BucketObject": [],
    "aws:imagebuilder/image:Image": [
        {
            "type": "aws:ec2/launchTemplate:LaunchTemplate",
            "weight": 1
        }
    ],
    "aws:ecs/service:Service": [
        {
            "type": "aws:cloudwatch/dashboard:Dashboard",
            "weight": 2
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 1
        },
        {
            "type": "aws:autoscaling/group:Group",
            "weight": 0
        }
    ],
    "pulumi:providers:aws-static-website": [],
    "pulumi-aws-static-website:index:Website": [],
    "pulumi-service:infrastructure:AsyncNotifier": [],
    "infrastructure:ReplicatedBucket": [],
    "awsx:x:ec2:SecurityGroup": [],
    "pulumi-service:infrastructure:OpenTracing": [],
    "workflow:index:PrivateLink": [],
    "pulumi-service:infrastructure:EC2InstanceConnectMonitor": [],
    "workflow:index:LoadBalancers": [],
    "pulumi-service:infrastructure:ScheduledTask": [],
    "workflow:index:Pool": [],
    "awsx:x:ecs:EC2TaskDefinition": [],
    "awsx:x:ec2:Vpc": [],
    "aws:backup/vault:Vault": [
        {
            "type": "aws:backup/plan:Plan",
            "weight": 1
        }
    ],
    "aws:lb:ApplicationLoadBalancer": [],
    "awsx:x:ecs:Cluster": [],
    "pulumi-service:infrastructure:TracingStorage": [],
    "awsx:x:ec2:IngressSecurityGroupRule": [],
    "awsx:x:ec2:EgressSecurityGroupRule": [],
    "workflow:index:AutoScalingGroupLifecycleHook": [],
    "workflow-pool:index:Service": [],
    "aws:cloudwatch/eventRule:EventRule": [
        {
            "type": "aws:cloudwatch/eventTarget:EventTarget",
            "weight": 3
        },
        {
            "type": "aws:lambda/permission:Permission",
            "weight": 1
        }
    ],
    "pulumi:providers:tls": [],
    "awsx:lb:ApplicationListener": [],
    "awsx:lb:ApplicationTargetGroup": [],
    "awsx:x:ecs:FargateService": [],
    "pulumi-service:infrastructure:ESMonitoring": [],
    "workflow:index:Secrets": [],
    "tls:index/privateKey:PrivateKey": [
        {
            "type": "aws:secretsmanager/secretVersion:SecretVersion",
            "weight": 0
        },
        {
            "type": "aws:ec2/launchTemplate:LaunchTemplate",
            "weight": 0
        }
    ],
    "aws:lb/targetGroup:TargetGroup": [
        {
            "type": "aws:lb/listener:Listener",
            "weight": 3
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 2
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 1
        },
        {
            "type": "aws:lb/listenerRule:ListenerRule",
            "weight": 0
        },
        {
            "type": "aws:lb/targetGroupAttachment:TargetGroupAttachment",
            "weight": 0
        }
    ],
    "aws:cloudwatch/logMetricFilter:LogMetricFilter": [],
    "aws:s3/bucketPolicy:BucketPolicy": [
        {
            "type": "aws:elasticloadbalancingv2/loadBalancer:LoadBalancer",
            "weight": 0
        }
    ],
    "aws:backup/plan:Plan": [
        {
            "type": "aws:backup/selection:Selection",
            "weight": 0
        }
    ],
    "aws:iam/serviceLinkedRole:ServiceLinkedRole": [],
    "aws:lb/loadBalancer:LoadBalancer": [
        {
            "type": "aws:lb/listener:Listener",
            "weight": 3
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 1
        },
        {
            "type": "aws:ec2/vpcEndpointService:VpcEndpointService",
            "weight": 0
        },
        {
            "type": "aws:lambda/function:Function",
            "weight": 0
        },
        {
            "type": "aws:lb/targetGroupAttachment:TargetGroupAttachment",
            "weight": 0
        }
    ],
    "aws:ecs/clusterCapacityProviders:ClusterCapacityProviders": [],
    "aws:iam/policy:Policy": [
        {
            "type": "aws:iam/policyAttachment:PolicyAttachment",
            "weight": 4
        }
    ],
    "aws:cloudwatch/eventTarget:EventTarget": [],
    "aws:cloudwatch/metricAlarm:MetricAlarm": [],
    "aws:ec2/vpcEndpointService:VpcEndpointService": [
        {
            "type": "aws:ec2/vpcEndpoint:VpcEndpoint",
            "weight": 0
        }
    ],
    "aws:iam/policyAttachment:PolicyAttachment": [],
    "aws:ec2/securityGroupRule:SecurityGroupRule": [],
    "aws:elasticsearch/domain:Domain": [
        {
            "type": "aws:cloudwatch/metricAlarm:MetricAlarm",
            "weight": 5
        },
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 2
        }
    ],
    "aws:lb/listener:Listener": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 1
        },
        {
            "type": "aws:ecs/service:Service",
            "weight": 1
        },
        {
            "type": "aws:lb/targetGroup:TargetGroup",
            "weight": 0
        },
        {
            "type": "aws:lb/listenerRule:ListenerRule",
            "weight": 0
        }
    ],
    "aws:ec2/vpcEndpoint:VpcEndpoint": [
        {
            "type": "aws:ecs/taskDefinition:TaskDefinition",
            "weight": 1
        }
    ],
    "aws:lb/listenerRule:ListenerRule": [
        {
            "type": "aws:ecs/service:Service",
            "weight": 0
        }
    ],
    "aws:cloudwatch/dashboard:Dashboard": [],
    "aws:backup/selection:Selection": [],
    "aws:lb/targetGroupAttachment:TargetGroupAttachment": []
}
