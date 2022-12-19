export const resources = {
    "kubernetes": {
        "yaml": {
            "configfile": [
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/Service",
                "monitoring.coreos.com/v1/PrometheusRule"
            ],
            "configgroup": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "rbac.authorization.k8s.io/v1/Role"
            ]
        },
        "apps/v1": {
            "daemonset": [
                "core/v1/Namespace",
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "helm.sh/v3/Chart",
                "yaml/ConfigFile",
                "core/v1/Secret",
                "materialize.cloud/v2/Eip"
            ],
            "deployment": [
                "core/v1/Service",
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap",
                "core/v1/Secret"
            ],
            "statefulset": [
                "core/v1/Secret",
                "core/v1/Service",
                "core/v1/Namespace",
                "core/v1/ConfigMap",
                "argoproj.io/v1alpha1/Application",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "serving.knative.dev/v1/Service"
            ]
        },
        "rbac.authorization.k8s.io/v1": {
            "clusterrolebinding": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "apps/v1/Deployment",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler"
            ],
            "clusterrole": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "core/v1/ConfigMap",
                "apps/v1/Deployment",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "autoscaling/v1/HorizontalPodAutoscaler"
            ],
            "role": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "apps/v1/Deployment",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "core/v1/ServiceAccount"
            ],
            "rolebinding": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "apps/v1/Deployment",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap",
                "core/v1/ServiceAccount",
                "autoscaling/v1/HorizontalPodAutoscaler"
            ]
        },
        "core/v1": {
            "serviceaccount": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "apps/v1/Deployment",
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ],
            "configmap": [
                "apps/v1/Deployment",
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount",
                "yaml/ConfigGroup"
            ],
            "namespace": [
                "core/v1/Secret",
                "core/v1/Service",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/PrometheusRule",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ],
            "secret": [
                "apps/v1/Deployment",
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "core/v1/ConfigMap",
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/ServiceMonitor"
            ],
            "service": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "apps/v1/Deployment",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler"
            ],
            "persistentvolumeclaim": [
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "core/v1/PersistentVolume",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "yaml/ConfigFile",
                "core/v1/Service",
                "apps/v1/StatefulSet"
            ],
            "endpoints": [
                "core/v1/Service",
                "networking.k8s.io/v1/Ingress",
                "core/v1/Namespace",
                "elasticsearch.k8s.elastic.co/v1/Elasticsearch"
            ],
            "pod": [
                "core/v1/Service",
                "core/v1/Namespace",
                "core/v1/Secret",
                "core/v1/ConfigMap",
                "monitoring.coreos.com/v1/ServiceMonitor"
            ],
            "persistentvolume": [
                "core/v1/PersistentVolumeClaim",
                "core/v1/Namespace",
                "storage.k8s.io/v1/StorageClass",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount"
            ],
            "limitrange": [
                "core/v1/Namespace"
            ],
            "resourcequota": [
                "core/v1/Namespace"
            ],
            "configmappatch": [
                "helm.sh/v3/Release",
                "apps/v1/Deployment"
            ],
            "serviceaccountpatch": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ConfigMap",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "secretpatch": [
                "core/v1/Namespace",
                "kci.rocks/v1alpha1/Database"
            ]
        },
        "helm.sh/v3": {
            "release": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "cilium.io/v2/CiliumNetworkPolicy",
                "core/v1/PersistentVolumeClaim",
                "cis.f5.com/v1/VirtualServer",
                "cilium.io/v2/CiliumClusterwideNetworkPolicy",
                "yaml/ConfigFile",
                "core/v1/ServiceAccount"
            ],
            "chart": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Service",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/PrometheusRule",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap"
            ]
        },
        "storage.k8s.io/v1": {
            "storageclass": [
                "core/v1/PersistentVolume",
                "core/v1/Service",
                "core/v1/PersistentVolumeClaim",
                "yaml/ConfigGroup",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v3/Release",
                "apps/v1/StatefulSet"
            ],
            "csidriver": [
                "storage.k8s.io/v1/StorageClass",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apps/v1/DaemonSet",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/Namespace"
            ],
            "storageclasspatch": [
                "helm.sh/v3/Release"
            ]
        },
        "traefik.containo.us/v1alpha1": {
            "middleware": [
                "traefik.containo.us/v1alpha1/IngressRoute",
                "core/v1/Namespace",
                "networking.k8s.io/v1beta1/Ingress",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Secret",
                "core/v1/Service",
                "helm.sh/v3/Release",
                "networking.k8s.io/v1/Ingress"
            ],
            "ingressroute": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "traefik.containo.us/v1alpha1/Middleware",
                "core/v1/Service",
                "traefik.containo.us/v1alpha1/TLSOption",
                "traefik.containo.us/v1alpha1/ServersTransport",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ],
            "serverstransport": [
                "traefik.containo.us/v1alpha1/IngressRoute"
            ],
            "tlsoption": [
                "traefik.containo.us/v1alpha1/IngressRoute",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "traefik.containo.us/v1alpha1/Middleware",
                "core/v1/Service",
                "apps/v1/StatefulSet",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ],
            "tlsstore": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apps/v1/Deployment",
                "traefik.containo.us/v1alpha1/IngressRoute"
            ],
            "ingressrouteudp": [
                "core/v1/Service"
            ],
            "ingressroutetcp": [
                "core/v1/Service",
                "core/v1/Namespace",
                "networking.k8s.io/v1/Ingress",
                "apps/v1/Deployment"
            ]
        },
        "apiextensions.k8s.io/v1": {
            "customresourcedefinition": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount"
            ]
        },
        "networking.k8s.io/v1": {
            "ingress": [
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap"
            ],
            "networkpolicy": [
                "argoproj.io/v1alpha1/Application",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "yaml/ConfigGroup",
                "core/v1/Secret",
                "core/v1/Service"
            ],
            "ingressclass": [
                "networking.k8s.io/v1/Ingress",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ]
        },
        "batch/v1beta1": {
            "cronjob": [
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "core/v1/Secret",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "batch/v1": {
            "job": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "core/v1/ServiceAccount"
            ],
            "cronjob": [
                "core/v1/Secret",
                "core/v1/ConfigMap",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "core/v1/Service",
                "elasticsearch.k8s.elastic.co/v1/Elasticsearch",
                "apps/v1/Deployment",
                "apps/v1/StatefulSet"
            ]
        },
        "autoscaling/v2beta2": {
            "horizontalpodautoscaler": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "apps/v1/Deployment",
                "core/v1/Service",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "core/v1/ServiceAccount"
            ]
        },
        "policy/v1beta1": {
            "poddisruptionbudget": [
                "monitoring.coreos.com/v1/PrometheusRule",
                "yaml/ConfigGroup",
                "core/v1/Service",
                "core/v1/ConfigMap",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "autoscaling/v1/HorizontalPodAutoscaler"
            ],
            "podsecuritypolicy": [
                "monitoring.coreos.com/v1/PrometheusRule",
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/Service",
                "apps/v1/Deployment",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "core/v1/ConfigMap",
                "core/v1/ServiceAccount"
            ]
        },
        "monitoring.coreos.com/v1": {
            "prometheusrule": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Service",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "podmonitor": [
                "core/v1/ConfigMap",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "monitoring.coreos.com/v1/ServiceMonitor"
            ],
            "servicemonitor": [
                "monitoring.coreos.com/v1/PrometheusRule",
                "yaml/ConfigGroup",
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler"
            ],
            "prometheus": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Service",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "yaml/ConfigFile",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "helm.sh/v3/Chart"
            ],
            "alertmanager": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "apps/v1/Deployment",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ConfigMap",
                "core/v1/ServiceAccount"
            ],
            "thanosruler": [
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "core/v1/Secret",
                "core/v1/Service"
            ]
        },
        "autoscaling.k8s.io/v1": {
            "verticalpodautoscaler": [
                "apps/v1/Deployment",
                "aws.crossplane.io/v1beta1/ProviderConfig",
                "yaml/ConfigFile",
                "gcp.crossplane.io/v1beta1/ProviderConfig",
                "core/v1/Service",
                "yaml/ConfigGroup",
                "core/v1/ServiceAccount"
            ]
        },
        "networking.gke.io/v1": {
            "managedcertificate": [
                "networking.k8s.io/v1/Ingress",
                "networking.k8s.io/v1beta1/Ingress",
                "core/v1/Namespace",
                "core/v1/Service"
            ]
        },
        "cloud.google.com/v1": {
            "backendconfig": [
                "core/v1/Service",
                "core/v1/Namespace",
                "core/v1/Secret",
                "install.istio.io/v1alpha1/IstioOperator",
                "networking.k8s.io/v1/Ingress"
            ]
        },
        "networking.gke.io/v1beta1": {
            "frontendconfig": [
                "networking.k8s.io/v1/Ingress",
                "networking.k8s.io/v1beta1/Ingress",
                "core/v1/Namespace",
                "argoproj.io/v1alpha1/Application",
                "core/v1/Secret",
                "core/v1/Service"
            ],
            "managedcertificate": [
                "extensions/v1beta1/Ingress",
                "apps/v1/Deployment",
                "networking.k8s.io/v1beta1/Ingress",
                "core/v1/Namespace"
            ]
        },
        "apiregistration.k8s.io/v1": {
            "apiservice": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Service",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "monitoring.coreos.com/v1/ServiceMonitor"
            ]
        },
        "elasticsearch.k8s.elastic.co/v1": {
            "elasticsearch": [
                "core/v1/Secret",
                "batch/v1/CronJob",
                "batch/v1/Job",
                "apps/v1/Deployment",
                "kibana.k8s.elastic.co/v1/Kibana",
                "beat.k8s.elastic.co/v1beta1/Beat",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ]
        },
        "kibana.k8s.elastic.co/v1": {
            "kibana": [
                "elasticsearch.k8s.elastic.co/v1/Elasticsearch",
                "beat.k8s.elastic.co/v1beta1/Beat",
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "networking.istio.io/v1beta1/VirtualService",
                "getambassador.io/v3alpha1/Mapping",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "kustomize": {
            "directory": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "policy/v1beta1/PodSecurityPolicy",
                "apps/v1/Deployment"
            ]
        },
        "secrets-store.csi.x-k8s.io/v1alpha1": {
            "secretproviderclass": [
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apps/v1/DaemonSet",
                "core/v1/ServiceAccount",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "rabbitmq.com/v1beta1": {
            "rabbitmqcluster": [
                "apps/v1/Deployment",
                "batch/v1/Job",
                "core/v1/Namespace",
                "core/v1/Secret",
                "policy/v1/PodDisruptionBudget",
                "apps/v1/StatefulSet",
                "networking.k8s.io/v1/Ingress",
                "monitoring.coreos.com/v1/PodMonitor"
            ]
        },
        "admissionregistration.k8s.io/v1": {
            "mutatingwebhookconfiguration": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ],
            "validatingwebhookconfiguration": [
                "yaml/ConfigGroup",
                "monitoring.coreos.com/v1/PrometheusRule",
                "core/v1/Service",
                "core/v1/ConfigMap",
                "apps/v1/Deployment",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount"
            ]
        },
        "helm.sh/v2": {
            "chart": [
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Service"
            ]
        },
        "networking.k8s.io/v1beta1": {
            "ingress": [
                "core/v1/Service",
                "monitoring.coreos.com/v1/PrometheusRule",
                "yaml/ConfigGroup",
                "apps/v1/Deployment",
                "autoscaling/v1/HorizontalPodAutoscaler",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap"
            ],
            "ingressclass": [
                "traefik.containo.us/v1alpha1/TLSStore",
                "core/v1/Namespace"
            ]
        },
        "rbac.authorization.k8s.io/v1beta1": {
            "clusterrole": [
                "core/v1/Namespace",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "cert-manager.io/v1alpha2/Certificate",
                "core/v1/Secret",
                "certmanager.k8s.io/v1alpha1/ClusterIssuer",
                "helm.sh/v2/Chart",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ],
            "clusterrolebinding": [
                "core/v1/Namespace",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "cert-manager.io/v1alpha2/Certificate",
                "core/v1/Secret",
                "certmanager.k8s.io/v1alpha1/ClusterIssuer",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "helm.sh/v2/Chart"
            ],
            "role": [
                "core/v1/Namespace",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "cert-manager.io/v1alpha2/Certificate",
                "core/v1/Secret",
                "dns.gardener.cloud/v1alpha1/DNSEntry",
                "core/v1/Service",
                "ceph.rook.io/v1/CephCluster"
            ],
            "rolebinding": [
                "core/v1/Namespace",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "cert-manager.io/v1alpha2/Certificate",
                "core/v1/Secret",
                "apps/v1/Deployment",
                "ceph.rook.io/v1/CephCluster",
                "ceph.rook.io/v1/CephBlockPool"
            ]
        },
        "admissionregistration.k8s.io/v1beta1": {
            "mutatingwebhookconfiguration": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "core/v1/Secret",
                "networking.istio.io/v1alpha3/Gateway",
                "core/v1/ServiceAccount",
                "certmanager.k8s.io/v1alpha1/ClusterIssuer",
                "cert-manager.io/v1alpha2/Certificate"
            ],
            "validatingwebhookconfiguration": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "helm.sh/v3/Chart",
                "networking.istio.io/v1alpha3/EnvoyFilter",
                "core/v1/Secret",
                "certmanager.k8s.io/v1alpha1/ClusterIssuer",
                "cert-manager.io/v1alpha2/Certificate"
            ]
        },
        "apiextensions.k8s.io/v1beta1": {
            "customresourcedefinition": [
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "helm.sh/v3/Chart",
                "networking.istio.io/v1alpha3/EnvoyFilter",
                "yaml/ConfigFile",
                "apps/v1/Deployment"
            ]
        },
        "cert-manager.io/v1alpha2": {
            "clusterissuer": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apps/v1/Deployment",
                "cert-manager.io/v1alpha2/Certificate"
            ],
            "certificate": [
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "core/v1/Secret",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/Namespace",
                "cert-manager.io/v1alpha2/ClusterIssuer",
                "core/v1/ServiceAccount"
            ],
            "issuer": [
                "cert-manager.io/v1alpha2/Certificate",
                "core/v1/Secret",
                "core/v1/Namespace"
            ]
        },
        "policy/v1": {
            "poddisruptionbudget": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment",
                "core/v1/Namespace",
                "core/v1/Service",
                "core/v1/Secret",
                "core/v1/ConfigMap",
                "networking.k8s.io/v1/Ingress",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ]
        },
        "autoscaling/v2": {
            "horizontalpodautoscaler": [
                "apps/v1/Deployment",
                "core/v1/Namespace",
                "core/v1/Service",
                "helm.sh/v3/Chart",
                "networking.istio.io/v1alpha3/Gateway",
                "helm.sh/v3/Release",
                "apps/v1/StatefulSet"
            ]
        },
        "monitoring.coreos.com/v1alpha1": {
            "alertmanagerconfig": [
                "core/v1/Secret",
                "core/v1/Namespace",
                "core/v1/Service",
                "networking.k8s.io/v1/Ingress"
            ]
        },
        "cert-manager.io/v1": {
            "clusterissuer": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "cert-manager.io/v1/Certificate",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "rbac.authorization.k8s.io/v1/Role",
                "apps/v1/Deployment"
            ],
            "certificate": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "cert-manager.io/v1/ClusterIssuer",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment",
                "helm.sh/v3/Chart",
                "networking.k8s.io/v1/Ingress"
            ],
            "issuer": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "rbac.authorization.k8s.io/v1/Role",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "cert-manager.io/v1/Certificate"
            ]
        },
        "autoscaling/v1": {
            "horizontalpodautoscaler": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ]
        },
        "extensions/v1beta1": {
            "ingress": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "deployment": [
                "core/v1/Namespace",
                "yaml/ConfigFile",
                "core/v1/Service",
                "core/v1/Secret",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v2/Chart",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap"
            ],
            "daemonset": [
                "core/v1/Secret",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "core/v1/ConfigMap"
            ],
            "podsecuritypolicy": [
                "core/v1/Namespace",
                "core/v1/Secret"
            ]
        },
        "cert-manager.io/v1beta1": {
            "certificate": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "clusterissuer": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ],
            "issuer": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ]
        },
        "autoscaling/v2beta1": {
            "horizontalpodautoscaler": [
                "core/v1/Namespace",
                "networking.istio.io/v1alpha3/Gateway",
                "apps/v1/Deployment",
                "monitoring.kiali.io/v1alpha1/MonitoringDashboard",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/Service"
            ]
        },
        "custompodautoscaler.com/v1": {
            "custompodautoscaler": [
                "apps/v1/Deployment"
            ]
        },
        "operator.tigera.io/v1": {
            "apiserver": [
                "yaml/ConfigFile",
                "helm.sh/v3/Release",
                "rbac.authorization.k8s.io/v1/Role",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/PersistentVolumeClaim",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ],
            "installation": [
                "helm.sh/v3/Release",
                "yaml/ConfigFile",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/Role",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "core/v1/Namespace",
                "core/v1/PersistentVolumeClaim"
            ]
        },
        "k8s.cni.cncf.io/v1": {
            "networkattachmentdefinition": [
                "helm.sh/v3/Release",
                "operator.tigera.io/v1/APIServer",
                "operator.tigera.io/v1/Installation"
            ]
        },
        "projectcontour.io/v1": {
            "tlscertificatedelegation": [
                "core/v1/ServiceAccount",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Service",
                "core/v1/Namespace",
                "cert-manager.io/v1/Certificate",
                "apps/v1/DaemonSet",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ],
            "httpproxy": [
                "core/v1/Service",
                "core/v1/Namespace",
                "cert-manager.io/v1/Certificate"
            ]
        },
        "actions.summerwind.dev/v1alpha1": {
            "runnerdeployment": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "horizontalrunnerautoscaler": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ]
        },
        "onepassword.com/v1": {
            "onepassworditem": [
                "apps/v1/Deployment",
                "core/v1/Namespace",
                "apps/v1/StatefulSet"
            ]
        },
        "argoproj.io/v1alpha1": {
            "application": [
                "core/v1/Service",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/Role",
                "networking.k8s.io/v1/NetworkPolicy"
            ],
            "appproject": [
                "core/v1/Namespace",
                "yaml/ConfigGroup",
                "argoproj.io/v1alpha1/Application",
                "argoproj.io/v1alpha1/ApplicationSet",
                "helm.sh/v3/Release",
                "cert-manager.io/v1/ClusterIssuer"
            ],
            "rollout": [
                "core/v1/Service",
                "keda.sh/v1alpha1/ScaledObject",
                "apps/v1/Deployment"
            ],
            "eventbus": [
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "applicationset": [
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "argoproj.io/v1alpha1/AppProject"
            ],
            "workflowtemplate": [
                "argoproj.io/v1alpha1/CronWorkflow"
            ],
            "cronworkflow": [
                "argoproj.io/v1alpha1/WorkflowTemplate",
                "core/v1/ServiceAccount",
                "core/v1/Namespace"
            ],
            "eventsource": [
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "core/v1/Secret"
            ]
        },
        "vpcresources.k8s.aws/v1beta1": {
            "securitygrouppolicy": [
                "batch/v1beta1/CronJob",
                "batch/v1/Job",
                "apps/v1/Deployment",
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "helm.sh/v3/Chart"
            ]
        },
        "aadpodidentity.k8s.io/v1": {
            "azurepodidentityexception": [
                "helm.sh/v3/Chart",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/DaemonSet",
                "apps/v1/Deployment"
            ],
            "azureidentity": [
                "aadpodidentity.k8s.io/v1/AzureIdentityBinding",
                "helm.sh/v3/Release",
                "aadpodidentity.k8s.io/v1/AzurePodIdentityException"
            ],
            "azureidentitybinding": [
                "aadpodidentity.k8s.io/v1/AzureIdentity",
                "helm.sh/v3/Release"
            ]
        },
        "logging.banzaicloud.io/v1beta1": {
            "logging": [
                "storage.k8s.io/v1/StorageClass",
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ],
            "flow": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "logging.banzaicloud.io/v1beta1/ClusterOutput"
            ],
            "clusteroutput": [
                "logging.banzaicloud.io/v1beta1/Flow",
                "logging.banzaicloud.io/v1beta1/ClusterFlow",
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "elasticsearch.k8s.elastic.co/v1/Elasticsearch"
            ],
            "clusterflow": [
                "logging.banzaicloud.io/v1beta1/ClusterOutput"
            ]
        },
        "elbv2.k8s.aws/v1beta1": {
            "ingressclassparams": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/Role",
                "helm.sh/v3/Release",
                "core/v1/Service"
            ],
            "targetgroupbinding": [
                "core/v1/Service"
            ]
        },
        "cilium.io/v2": {
            "ciliumclusterwidenetworkpolicy": [
                "helm.sh/v3/Release",
                "cilium.io/v2/CiliumNetworkPolicy",
                "core/v1/Namespace",
                "helm.sh/v3/Chart"
            ],
            "ciliumnetworkpolicy": [
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "helm.sh/v3/Chart",
                "apps/v1/Deployment",
                "cilium.io/v2/CiliumClusterwideNetworkPolicy",
                "networking.k8s.io/v1/Ingress",
                "core/v1/ConfigMap",
                "storage.k8s.io/v1/StorageClass"
            ]
        },
        "materialize.cloud/v2": {
            "eip": [
                "apps/v1/DaemonSet",
                "helm.sh/v3/Release"
            ]
        },
        "secrets-store.csi.x-k8s.io/v1": {
            "secretproviderclass": [
                "helm.sh/v3/Release",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apps/v1/DaemonSet",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "storage.k8s.io/v1/StorageClass",
                "cert-manager.io/v1/ClusterIssuer"
            ]
        },
        "scheduling.k8s.io/v1": {
            "priorityclass": [
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "yaml/ConfigGroup",
                "batch/v1/Job",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "databases.spotahome.com/v1/RedisFailover",
                "rabbitmq.com/v1beta1/RabbitmqCluster",
                "core/v1/Namespace"
            ]
        },
        "external-secrets.io/v1beta1": {
            "externalsecret": [
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "admissionregistration.k8s.io/v1/ValidatingWebhookConfiguration",
                "rbac.authorization.k8s.io/v1/Role"
            ],
            "secretstore": [
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "admissionregistration.k8s.io/v1/ValidatingWebhookConfiguration",
                "rbac.authorization.k8s.io/v1/Role"
            ],
            "clustersecretstore": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "admissionregistration.k8s.io/v1/ValidatingWebhookConfiguration",
                "rbac.authorization.k8s.io/v1/Role"
            ]
        },
        "networking.gke.io/v1beta2": {
            "managedcertificate": [
                "networking.k8s.io/v1/Ingress",
                "networking.k8s.io/v1beta1/Ingress",
                "core/v1/Namespace",
                "apps/v1/Deployment"
            ]
        },
        "source.toolkit.fluxcd.io/v1beta2": {
            "helmrepository": [
                "core/v1/Namespace",
                "helm.toolkit.fluxcd.io/v2beta1/HelmRelease",
                "kustomize.toolkit.fluxcd.io/v1beta2/Kustomization"
            ],
            "gitrepository": [
                "kustomize.toolkit.fluxcd.io/v1beta2/Kustomization",
                "core/v1/Namespace",
                "core/v1/Secret"
            ]
        },
        "helm.toolkit.fluxcd.io/v2beta1": {
            "helmrelease": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "traefik.containo.us/v1alpha1/Middleware",
                "kustomize.toolkit.fluxcd.io/v1beta2/Kustomization",
                "storage.k8s.io/v1/StorageClass",
                "source.toolkit.fluxcd.io/v1beta2/HelmRepository"
            ]
        },
        "kustomize.toolkit.fluxcd.io/v1beta2": {
            "kustomization": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "source.toolkit.fluxcd.io/v1beta1/GitRepository",
                "core/v1/ConfigMap",
                "core/v1/Service",
                "networking.k8s.io/v1/NetworkPolicy"
            ]
        },
        "karpenter.k8s.aws/v1alpha1": {
            "awsnodetemplate": [
                "karpenter.sh/v1alpha5/Provisioner",
                "yaml/ConfigFile",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "admissionregistration.k8s.io/v1/ValidatingWebhookConfiguration",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ]
        },
        "karpenter.sh/v1alpha5": {
            "provisioner": [
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "admissionregistration.k8s.io/v1/ValidatingWebhookConfiguration",
                "karpenter.k8s.aws/v1alpha1/AWSNodeTemplate",
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ]
        },
        "networking.istio.io/v1alpha3": {
            "envoyfilter": [
                "yaml/ConfigGroup",
                "core/v1/ConfigMap",
                "apps/v1/Deployment",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Service",
                "core/v1/Secret",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ],
            "gateway": [
                "networking.istio.io/v1alpha3/VirtualService",
                "core/v1/Service",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "policy/v1beta1/PodDisruptionBudget",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ],
            "virtualservice": [
                "networking.istio.io/v1alpha3/Gateway",
                "core/v1/Service",
                "security.istio.io/v1beta1/AuthorizationPolicy",
                "core/v1/Namespace",
                "core/v1/ConfigMap",
                "networking.istio.io/v1alpha3/EnvoyFilter",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1beta1/Deployment"
            ],
            "destinationrule": [
                "core/v1/Namespace",
                "networking.istio.io/v1alpha3/Gateway",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Service",
                "helm.sh/v2/Chart"
            ],
            "serviceentry": [
                "apps/v1/StatefulSet",
                "core/v1/Namespace",
                "core/v1/Service"
            ]
        },
        "networking.istio.io/v1beta1": {
            "gateway": [
                "networking.istio.io/v1beta1/VirtualService",
                "core/v1/Namespace",
                "cert-manager.io/v1/Certificate",
                "core/v1/Secret",
                "networking.istio.io/v1alpha3/EnvoyFilter",
                "core/v1/ConfigMap",
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ],
            "virtualservice": [
                "core/v1/Service",
                "core/v1/Namespace",
                "networking.istio.io/v1beta1/Gateway",
                "apps/v1/Deployment",
                "core/v1/ConfigMap",
                "core/v1/Secret",
                "kibana.k8s.elastic.co/v1/Kibana"
            ],
            "sidecar": [
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "install.istio.io/v1alpha1/IstioOperator"
            ],
            "serviceentry": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "install.istio.io/v1alpha1/IstioOperator",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "destinationrule": [
                "apps/v1/Deployment",
                "core/v1/Namespace",
                "core/v1/Service",
                "keycloak.org/v1alpha1/Keycloak"
            ]
        },
        "deploy.getunleash.io/v1alpha1": {
            "unleashcloud": [
                "core/v1/Namespace"
            ]
        },
        "cloud.google.com/v1beta1": {
            "backendconfig": [
                "core/v1/Service",
                "core/v1/Secret",
                "core/v1/Namespace",
                "install.istio.io/v1alpha1/IstioOperator",
                "argoproj.io/v1alpha1/Application",
                "apps/v1/Deployment"
            ]
        },
        "gcp.crossplane.io/v1beta1": {
            "providerconfig": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Secret",
                "helm.sh/v3/Release",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apps/v1/Deployment"
            ]
        },
        "install.istio.io/v1alpha1": {
            "istiooperator": [
                "networking.istio.io/v1beta1/ServiceEntry",
                "core/v1/Namespace",
                "yaml/ConfigFile",
                "core/v1/Service",
                "mutations.gatekeeper.sh/v1alpha1/Assign",
                "templates.gatekeeper.sh/v1beta1/ConstraintTemplate",
                "helm.sh/v3/Release",
                "monitoring.coreos.com/v1/ServiceMonitor"
            ]
        },
        "security.istio.io/v1beta1": {
            "authorizationpolicy": [
                "networking.istio.io/v1alpha3/VirtualService",
                "apps/v1/Deployment",
                "core/v1/Service",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ],
            "requestauthentication": [
                "core/v1/Namespace"
            ],
            "peerauthentication": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Namespace",
                "helm.sh/v3/Release",
                "install.istio.io/v1alpha1/IstioOperator",
                "yaml/ConfigFile",
                "core/v1/Service"
            ]
        },
        "snapshot.storage.k8s.io/v1": {
            "volumesnapshotclass": [
                "helm.sh/v3/Release",
                "core/v1/Secret"
            ]
        },
        "configuration.konghq.com/v1": {
            "kongclusterplugin": [
                "core/v1/Service",
                "helm.sh/v3/Release"
            ]
        },
        "policy.linkerd.io/v1beta1": {
            "serverauthorization": [
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "server": [
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ]
        },
        "linkerd.io/v1alpha2": {
            "serviceprofile": [
                "helm.sh/v3/Release"
            ]
        },
        "getambassador.io/v2": {
            "module": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "getambassador.io/v3alpha1/Mapping",
                "getambassador.io/v3alpha1/Listener",
                "getambassador.io/v3alpha1/Host",
                "core/v1/Service",
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole"
            ],
            "authservice": [
                "getambassador.io/v3alpha1/Host",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "getambassador.io/v2/Host",
                "core/v1/Service",
                "getambassador.io/v2/Module"
            ],
            "mapping": [
                "getambassador.io/v3alpha1/Host",
                "core/v1/Service",
                "getambassador.io/v2/Host",
                "cert-manager.io/v1/Certificate",
                "core/v1/Namespace",
                "getambassador.io/v2/Module",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap"
            ],
            "ratelimitservice": [
                "getambassador.io/v3alpha1/Host",
                "getambassador.io/v2/Host",
                "core/v1/Service",
                "getambassador.io/v2/Module"
            ],
            "host": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/Service",
                "cert-manager.io/v1/Certificate",
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "getambassador.io/v2/Mapping"
            ]
        },
        "getambassador.io/v3alpha1": {
            "host": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Service",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "getambassador.io/v2/Mapping",
                "core/v1/Namespace"
            ],
            "listener": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "helm.sh/v3/Chart",
                "getambassador.io/v3alpha1/Host",
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment"
            ],
            "mapping": [
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace",
                "cert-manager.io/v1/Certificate",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment"
            ],
            "module": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "getambassador.io/v3alpha1/Host",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "helm.sh/v3/Release",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/Role"
            ],
            "tlscontext": [
                "helm.sh/v3/Release"
            ],
            "filter": [
                "getambassador.io/v3alpha1/FilterPolicy",
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "core/v1/Secret"
            ],
            "filterpolicy": [
                "getambassador.io/v3alpha1/Filter",
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "kubernetesendpointresolver": [
                "core/v1/Namespace"
            ]
        },
        "kyverno.io/v1": {
            "clusterpolicy": [
                "helm.sh/v3/Release",
                "core/v1/ConfigMap",
                "core/v1/Namespace"
            ]
        },
        "kiali.io/v1alpha1": {
            "kiali": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment"
            ]
        },
        "install.tetrate.io/v1alpha1": {
            "managementplane": [
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "core/v1/Secret",
                "cert-manager.io/v1/Certificate"
            ],
            "controlplane": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "core/v1/Secret",
                "core/v1/Service"
            ]
        },
        "cis.f5.com/v1": {
            "policy": [
                "helm.sh/v3/Release",
                "cis.f5.com/v1/VirtualServer"
            ],
            "tlsprofile": [
                "cis.f5.com/v1/VirtualServer",
                "helm.sh/v3/Release"
            ],
            "virtualserver": [
                "helm.sh/v3/Release",
                "cis.f5.com/v1/TLSProfile",
                "cis.f5.com/v1/Policy"
            ]
        },
        "comcast.github.io/v1": {
            "kuberhealthycheck": [
                "helm.sh/v3/Release"
            ]
        },
        "mutations.gatekeeper.sh/v1alpha1": {
            "assign": [
                "helm.sh/v3/Release",
                "install.istio.io/v1alpha1/IstioOperator"
            ]
        },
        "config.gatekeeper.sh/v1alpha1": {
            "config": [
                "helm.sh/v3/Release",
                "install.istio.io/v1alpha1/IstioOperator"
            ]
        },
        "templates.gatekeeper.sh/v1beta1": {
            "constrainttemplate": [
                "yaml/ConfigFile",
                "helm.sh/v3/Release",
                "install.istio.io/v1alpha1/IstioOperator",
                "constraints.gatekeeper.sh/v1beta1/K8sRequiredProbes",
                "constraints.gatekeeper.sh/v1beta1/K8sContainerResources"
            ]
        },
        "constraints.gatekeeper.sh/v1beta1": {
            "k8srequiredprobes": [
                "install.istio.io/v1alpha1/IstioOperator",
                "helm.sh/v3/Release",
                "templates.gatekeeper.sh/v1beta1/ConstraintTemplate"
            ],
            "k8scontainerresources": [
                "install.istio.io/v1alpha1/IstioOperator",
                "helm.sh/v3/Release",
                "templates.gatekeeper.sh/v1beta1/ConstraintTemplate"
            ]
        },
        "keda.sh/v1alpha1": {
            "scaledobject": [
                "apps/v1/Deployment",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "keda.sh/v1alpha1/TriggerAuthentication",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "triggerauthentication": [
                "keda.sh/v1alpha1/ScaledObject",
                "core/v1/Secret",
                "core/v1/Namespace"
            ]
        },
        "velero.io/v1": {
            "backupstoragelocation": [
                "core/v1/Namespace",
                "velero.io/v1/Schedule",
                "core/v1/ServiceAccount",
                "core/v1/Secret"
            ],
            "schedule": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ],
            "volumesnapshotlocation": [
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "velero.io/v1/Schedule",
                "core/v1/Secret"
            ]
        },
        "opentelemetry.io/v1alpha1": {
            "opentelemetrycollector": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Service",
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ]
        },
        "cert-manager.k8s.cloudflare.com/v1": {
            "originissuer": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "core/v1/ServiceAccount",
                "helm.sh/v3/Release",
                "apps/v1/Deployment",
                "helm.sh/v3/Chart",
                "helm.sh/v2/Chart",
                "rbac.authorization.k8s.io/v1/ClusterRole"
            ]
        },
        "dapr.io/v1alpha1": {
            "component": [
                "dapr.io/v1alpha1/Subscription",
                "core/v1/Namespace"
            ],
            "configuration": [
                "core/v1/Namespace"
            ],
            "subscription": [
                "core/v1/Namespace",
                "dapr.io/v1alpha1/Component"
            ]
        },
        "operator.victoriametrics.com/v1beta1": {
            "vmpodscrape": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ],
            "vmagent": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ],
            "vmcluster": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ]
        },
        "awspca.cert-manager.io/v1beta1": {
            "awspcaclusterissuer": [
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "pingcap.com/v1alpha1": {
            "tidbcluster": [
                "helm.sh/v3/Chart",
                "pingcap.com/v1alpha1/BackupSchedule",
                "core/v1/ServiceAccount",
                "storage.k8s.io/v1/StorageClass"
            ],
            "backupschedule": [
                "core/v1/Secret",
                "pingcap.com/v1alpha1/TidbCluster"
            ]
        },
        "aws.crossplane.io/v1beta1": {
            "providerconfig": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apps/v1/Deployment",
                "core/v1/Namespace",
                "autoscaling.k8s.io/v1/VerticalPodAutoscaler",
                "core/v1/ConfigMap"
            ]
        },
        "source.toolkit.fluxcd.io/v1beta1": {
            "gitrepository": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "kustomize.toolkit.fluxcd.io/v1beta2/Kustomization",
                "core/v1/Secret",
                "core/v1/Service",
                "networking.k8s.io/v1/NetworkPolicy",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ]
        },
        "autoscaling.k8s.io/v1beta2": {
            "verticalpodautoscaler": [
                "monitoring.coreos.com/v1/Prometheus"
            ]
        },
        "cert-manager.io/v1alpha3": {
            "clusterissuer": [
                "networking.k8s.io/v1beta1/Ingress",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Secret"
            ],
            "certificate": [
                "core/v1/Namespace",
                "networking.istio.io/v1alpha3/Gateway"
            ]
        },
        "dns.gardener.cloud/v1alpha1": {
            "dnsentry": [
                "core/v1/Service",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1beta1/Role",
                "rbac.authorization.k8s.io/v1beta1/RoleBinding"
            ]
        },
        "garo.tietoevry.com/v1alpha1": {
            "githubactionrunner": [
                "core/v1/Namespace"
            ]
        },
        "apiregistration.k8s.io/v1beta1": {
            "apiservice": [
                "core/v1/Namespace"
            ]
        },
        "storage.k8s.io/v1beta1": {
            "csidriver": [
                "core/v1/ServiceAccount"
            ]
        },
        "externaldns.k8s.io/v1alpha1": {
            "dnsendpoint": [
                "core/v1/Namespace",
                "core/v1/Service"
            ]
        },
        "monitoring.grafana.com/v1alpha1": {
            "grafanaagent": [
                "monitoring.grafana.com/v1alpha1/MetricsInstance",
                "monitoring.grafana.com/v1alpha1/LogsInstance",
                "core/v1/ServiceAccount",
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "metricsinstance": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "monitoring.coreos.com/v1/ServiceMonitor",
                "helm.sh/v3/Release",
                "monitoring.grafana.com/v1alpha1/GrafanaAgent"
            ],
            "logsinstance": [
                "monitoring.grafana.com/v1alpha1/PodLogs",
                "core/v1/Namespace",
                "core/v1/Secret",
                "helm.sh/v3/Release",
                "monitoring.grafana.com/v1alpha1/GrafanaAgent"
            ],
            "podlogs": [
                "core/v1/Namespace",
                "helm.sh/v3/Release",
                "monitoring.grafana.com/v1alpha1/LogsInstance"
            ]
        },
        "redis.redis.opstreelabs.in/v1beta1": {
            "redis": [
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ]
        },
        "core.k8s.kubemq.io/v1alpha1": {
            "kubemqcluster": [
                "helm.sh/v3/Release",
                "core/v1/ConfigMap",
                "core/v1/Namespace"
            ]
        },
        "mongodbcommunity.mongodb.com/v1": {
            "mongodbcommunity": [
                "cert-manager.io/v1/Issuer",
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "core/v1/Secret"
            ]
        },
        "integreatly.org/v1alpha1": {
            "grafanadatasource": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ],
            "grafanadashboard": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment"
            ],
            "grafana": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Secret",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding"
            ]
        },
        "kafka.strimzi.io/v1beta2": {
            "kafkatopic": [
                "apps/v1/Deployment",
                "core/v1/Namespace"
            ],
            "kafka": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "core/v1/ConfigMap",
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment"
            ],
            "kafkamirrormaker2": [
                "core/v1/Secret"
            ]
        },
        "mysql.sql.crossplane.io/v1alpha1": {
            "user": [
                "mysql.sql.crossplane.io/v1alpha1/Grant"
            ],
            "grant": [
                "mysql.sql.crossplane.io/v1alpha1/User"
            ]
        },
        "monitoring.googleapis.com/v1": {
            "podmonitoring": [
                "core/v1/Service",
                "networking.k8s.io/v1/Ingress",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace"
            ]
        },
        "iamauthenticator.k8s.aws/v1alpha1": {
            "iamidentitymapping": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "yaml/ConfigFile",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ]
        },
        "pulumi.com/v1": {
            "stack": [
                "core/v1/Namespace",
                "core/v1/Secret"
            ]
        },
        "gloo.solo.io/v1": {
            "upstream": [
                "helm.sh/v3/Release",
                "gateway.solo.io/v1/VirtualService",
                "core/v1/Service"
            ]
        },
        "gateway.solo.io/v1": {
            "virtualservice": [
                "gloo.solo.io/v1/Upstream"
            ]
        },
        "beat.k8s.elastic.co/v1beta1": {
            "beat": [
                "core/v1/ServiceAccount",
                "elasticsearch.k8s.elastic.co/v1/Elasticsearch",
                "core/v1/Namespace",
                "kibana.k8s.elastic.co/v1/Kibana",
                "core/v1/ConfigMap",
                "core/v1/Service",
                "apps/v1/StatefulSet",
                "policy/v1/PodDisruptionBudget"
            ]
        },
        "monitoring.googleapis.com/v1alpha1": {
            "podmonitoring": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Namespace",
                "apps/v1/Deployment"
            ],
            "operatorconfig": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "core/v1/Namespace"
            ]
        },
        "elasticsearch.k8s.elastic.co/v1beta1": {
            "elasticsearch": [
                "core/v1/ConfigMap",
                "core/v1/Namespace",
                "kibana.k8s.elastic.co/v1beta1/Kibana",
                "apps/v1/StatefulSet",
                "core/v1/Secret",
                "cert-manager.io/v1/Certificate",
                "batch/v1/Job"
            ]
        },
        "kibana.k8s.elastic.co/v1beta1": {
            "kibana": [
                "networking.istio.io/v1alpha3/VirtualService",
                "core/v1/Namespace",
                "elasticsearch.k8s.elastic.co/v1beta1/Elasticsearch"
            ]
        },
        "jaegertracing.io/v1": {
            "jaeger": [
                "core/v1/Namespace",
                "core/v1/ServiceAccount",
                "core/v1/Secret",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/Service",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apps/v1/Deployment"
            ]
        },
        "ceph.rook.io/v1": {
            "cephblockpool": [
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "storage.k8s.io/v1/StorageClass",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1beta1/RoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1beta1/Role",
                "apps/v1/Deployment"
            ],
            "cephfilesystem": [
                "storage.k8s.io/v1/StorageClass",
                "core/v1/Namespace"
            ],
            "cephcluster": [
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "storage.k8s.io/v1/StorageClass",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/Secret",
                "rbac.authorization.k8s.io/v1beta1/RoleBinding",
                "ceph.rook.io/v1/CephObjectStore",
                "ceph.rook.io/v1/CephBlockPool",
                "core/v1/ServiceAccount"
            ],
            "cephobjectstore": [
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1beta1/RoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1beta1/Role",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "ceph.rook.io/v1/CephCluster"
            ],
            "cephobjectstoreuser": [
                "storage.k8s.io/v1/StorageClass",
                "apps/v1/Deployment",
                "networking.k8s.io/v1beta1/Ingress",
                "ceph.rook.io/v1/CephBlockPool",
                "ceph.rook.io/v1/CephCluster",
                "ceph.rook.io/v1/CephObjectStore"
            ]
        },
        "metallb.io/v1beta1": {
            "ipaddresspool": [
                "metallb.io/v1beta1/L2Advertisement",
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "l2advertisement": [
                "core/v1/Namespace",
                "metallb.io/v1beta1/IPAddressPool"
            ]
        },
        "about.k8s.io/v1alpha1": {
            "clusterproperty": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment"
            ]
        },
        "caching.internal.knative.dev/v1alpha1": {
            "image": [
                "core/v1/Service",
                "core/v1/ConfigMap",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "batch/v1/Job",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding"
            ]
        },
        "serving.knative.dev/v1": {
            "service": [
                "core/v1/Secret",
                "core/v1/Service",
                "core/v1/ConfigMap",
                "core/v1/Namespace",
                "apps/v1/StatefulSet",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "eventing.knative.dev/v1/Broker"
            ]
        },
        "eventing.knative.dev/v1": {
            "broker": [
                "eventing.knative.dev/v1/Trigger",
                "sources.knative.dev/v1beta1/KafkaSource",
                "core/v1/ConfigMap",
                "serving.knative.dev/v1/Service"
            ],
            "trigger": [
                "eventing.knative.dev/v1/Broker",
                "core/v1/ConfigMap"
            ]
        },
        "sources.knative.dev/v1beta1": {
            "kafkasource": [
                "core/v1/ConfigMap",
                "eventing.knative.dev/v1/Broker"
            ]
        },
        "datadoghq.com/v1alpha1": {
            "datadogagent": [
                "core/v1/Namespace"
            ]
        },
        "trust.cert-manager.io/v1alpha1": {
            "bundle": [
                "helm.sh/v3/Release",
                "cert-manager.io/v1/Certificate"
            ]
        },
        "operator.tekton.dev/v1alpha1": {
            "tektonconfig": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ],
            "tektonchain": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "cdi.kubevirt.io/v1beta1": {
            "cdi": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ConfigMap",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "kubevirt.io/v1": {
            "kubevirt": [
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment"
            ]
        },
        "storage.loft.sh/v1": {
            "virtualcluster": [
                "core/v1/Namespace"
            ]
        },
        "databases.spotahome.com/v1": {
            "redisfailover": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "scheduling.k8s.io/v1/PriorityClass"
            ]
        },
        "stackgres.io/v1": {
            "sginstanceprofile": [
                "stackgres.io/v1/SGCluster",
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "sgpoolingconfig": [
                "stackgres.io/v1/SGCluster",
                "helm.sh/v3/Release",
                "core/v1/Namespace"
            ],
            "sgcluster": [
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "stackgres.io/v1/SGInstanceProfile",
                "stackgres.io/v1/SGPoolingConfig",
                "stackgres.io/v1beta1/SGObjectStorage"
            ]
        },
        "stackgres.io/v1beta1": {
            "sgobjectstorage": [
                "stackgres.io/v1/SGCluster",
                "helm.sh/v3/Release",
                "core/v1/Namespace",
                "core/v1/Secret"
            ]
        },
        "operators.coreos.com/v1": {
            "olmconfig": [
                "yaml/ConfigFile"
            ],
            "operatorgroup": [
                "yaml/ConfigFile",
                "operators.coreos.com/v1alpha1/Subscription",
                "core/v1/Namespace"
            ]
        },
        "operators.coreos.com/v1alpha1": {
            "catalogsource": [
                "yaml/ConfigFile"
            ],
            "clusterserviceversion": [
                "yaml/ConfigFile"
            ],
            "subscription": [
                "core/v1/Namespace",
                "keycloak.org/v1alpha1/Keycloak",
                "operators.coreos.com/v1/OperatorGroup"
            ]
        },
        "operators.coreos.com/v1alpha2": {
            "operatorgroup": [
                "core/v1/Namespace"
            ]
        },
        "external-secrets.io/v1alpha1": {
            "clustersecretstore": [
                "external-secrets.io/v1alpha1/ExternalSecret",
                "core/v1/Namespace"
            ],
            "externalsecret": [
                "external-secrets.io/v1alpha1/ClusterSecretStore"
            ]
        },
        "gateway.networking.k8s.io/v1alpha2": {
            "gatewayclass": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ]
        },
        "operator.projectcontour.io/v1alpha1": {
            "contour": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service"
            ]
        },
        "postgres-operator.crunchydata.com/v1beta1": {
            "postgrescluster": [
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment"
            ]
        },
        "acid.zalan.do/v1": {
            "postgresql": [
                "core/v1/ConfigMap",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "helm.sh/v2/Chart",
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "core/v1/Service"
            ],
            "operatorconfiguration": [
                "acid.zalan.do/v1/postgresql",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/Namespace"
            ]
        },
        "kci.rocks/v1alpha1": {
            "database": [
                "core/v1/SecretPatch",
                "core/v1/Namespace"
            ],
            "dbinstance": [
                "core/v1/Secret"
            ]
        },
        "appmesh.k8s.aws/v1beta2": {
            "mesh": [
                "helm.sh/v3/Release"
            ]
        },
        "crdb.cockroachlabs.com/v1alpha1": {
            "crdbcluster": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Namespace",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "apps/v1/Deployment",
                "core/v1/Service",
                "admissionregistration.k8s.io/v1/MutatingWebhookConfiguration"
            ]
        },
        "minio.min.io/v2": {
            "tenant": [
                "core/v1/Namespace"
            ]
        },
        "upgrade.cattle.io/v1": {
            "plan": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/ConfigMap",
                "core/v1/Namespace",
                "apps/v1/Deployment"
            ]
        },
        "crd.projectcalico.org/v1": {
            "bgpconfiguration": [
                "crd.projectcalico.org/v1/BGPPeer"
            ],
            "bgppeer": [
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apps/v1/DaemonSet",
                "core/v1/ConfigMap",
                "apps/v1/Deployment",
                "core/v1/Secret"
            ]
        },
        "keycloak.org/v1alpha1": {
            "keycloak": [
                "networking.istio.io/v1beta1/DestinationRule",
                "core/v1/Service",
                "keycloak.org/v1alpha1/KeycloakRealm",
                "core/v1/Secret",
                "core/v1/Namespace",
                "operators.coreos.com/v1alpha1/Subscription"
            ],
            "keycloakrealm": [
                "core/v1/Namespace",
                "keycloak.org/v1alpha1/Keycloak"
            ]
        },
        "operator.knative.dev/v1alpha1": {
            "knativeserving": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/Namespace"
            ],
            "knativeeventing": [
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "apps/v1/Deployment"
            ]
        },
        "clickhouse.altinity.com/v1": {
            "clickhouseinstallation": [
                "core/v1/ConfigMap",
                "apiextensions.k8s.io/v1/CustomResourceDefinition",
                "core/v1/PersistentVolume",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/ServiceAccount",
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "core/v1/Service"
            ]
        },
        "spinnaker.io/v1alpha2": {
            "spinnakerservice": [
                "core/v1/Namespace"
            ]
        },
        "kubedb.com/v1alpha1": {
            "postgres": [
                "core/v1/Secret",
                "core/v1/ConfigMap",
                "core/v1/Namespace"
            ],
            "elasticsearch": [
                "core/v1/Namespace"
            ]
        },
        "monitoring.kiali.io/v1alpha1": {
            "monitoringdashboard": [
                "yaml/ConfigFile",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/Role",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "apps/v1/Deployment",
                "core/v1/Service",
                "policy/v1beta1/PodDisruptionBudget",
                "autoscaling/v2beta1/HorizontalPodAutoscaler"
            ]
        },
        "core.cnrm.cloud.google.com/v1beta1": {
            "configconnectorcontext": [
                "core/v1/Service",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "apps/v1/Deployment",
                "core/v1/Secret",
                "rbac.authorization.k8s.io/v1/Role",
                "apiextensions.k8s.io/v1/CustomResourceDefinition"
            ]
        },
        "config.istio.io/v1alpha2": {
            "instance": [
                "core/v1/Namespace",
                "networking.istio.io/v1alpha3/Gateway",
                "apps/v1/Deployment"
            ],
            "handler": [
                "core/v1/Namespace",
                "apps/v1/Deployment",
                "networking.istio.io/v1alpha3/Gateway",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v2/Chart"
            ],
            "rule": [
                "core/v1/Namespace",
                "networking.istio.io/v1alpha3/Gateway",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v2/Chart"
            ],
            "attributemanifest": [
                "core/v1/Namespace",
                "networking.istio.io/v1alpha3/Gateway",
                "apps/v1/Deployment",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v2/Chart"
            ],
            "metric": [
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v2/Chart"
            ],
            "kubernetes": [
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "helm.sh/v2/Chart"
            ],
            "stdio": [
                "core/v1/Namespace"
            ],
            "kubernetesenv": [
                "core/v1/Namespace"
            ],
            "logentry": [
                "core/v1/Namespace"
            ],
            "prometheus": [
                "core/v1/Namespace"
            ]
        },
        "kafka.strimzi.io/v1beta1": {
            "kafkatopic": [
                "apps/v1/Deployment",
                "kafka.strimzi.io/v1beta1/Kafka"
            ],
            "kafka": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "rbac.authorization.k8s.io/v1/RoleBinding",
                "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
                "core/v1/Namespace",
                "kafka.strimzi.io/v1beta1/KafkaTopic",
                "helm.sh/v3/Chart",
                "core/v1/ConfigMap"
            ]
        },
        "helm.fluxcd.io/v1": {
            "helmrelease": [
                "core/v1/Namespace",
                "cert-manager.io/v1/ClusterIssuer",
                "core/v1/Secret"
            ]
        },
        "apps/v1beta2": {
            "deployment": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "core/v1/ConfigMap"
            ],
            "daemonset": [
                "core/v1/ConfigMap"
            ],
            "statefulset": [
                "core/v1/Namespace"
            ]
        },
        "apiregistration/v1beta1": {
            "apiservice": [
                "core/v1/Namespace",
                "certmanager.k8s.io/v1alpha1/ClusterIssuer",
                "certmanager.k8s.io/v1alpha1/Issuer"
            ]
        },
        "certmanager.k8s.io/v1alpha1": {
            "clusterissuer": [
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "apps/v1/Deployment",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "core/v1/Service",
                "core/v1/Secret"
            ],
            "issuer": [
                "core/v1/Namespace",
                "rbac.authorization.k8s.io/v1beta1/ClusterRoleBinding",
                "rbac.authorization.k8s.io/v1beta1/ClusterRole",
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "core/v1/ServiceAccount",
                "rbac.authorization.k8s.io/v1/ClusterRole",
                "apps/v1/Deployment",
                "core/v1/Service"
            ],
            "certificate": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "certmanager.k8s.io/v1alpha1/Issuer"
            ]
        },
        "servicebroker.couchbase.com/v1alpha1": {
            "servicebrokerconfig": [
                "core/v1/Namespace"
            ]
        },
        "apps/v1beta1": {
            "deployment": [
                "core/v1/Namespace",
                "core/v1/Service",
                "networking.istio.io/v1alpha3/VirtualService",
                "core/v1/Secret",
                "core/v1/ConfigMap"
            ],
            "statefulset": [
                "core/v1/Namespace",
                "core/v1/Secret",
                "core/v1/Service",
                "core/v1/ConfigMap",
                "apps/v1/StatefulSet"
            ]
        },
        "getambassador.io/v1": {
            "mapping": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition",
                "helm.sh/v2/Chart"
            ]
        },
        "hydra.ory.sh/v1alpha1": {
            "oauth2client": [
                "core/v1/Secret"
            ]
        },
        "apiregistration/v1": {
            "apiservice": [
                "core/v1/Namespace"
            ]
        },
        "authentication.istio.io/v1alpha1": {
            "policy": [
                "core/v1/Namespace"
            ]
        },
        "scheduling.k8s.io/v1beta1": {
            "priorityclass": [
                "helm.sh/v2/Chart"
            ]
        },
        "serving.knative.dev/v1alpha1": {
            "service": [
                "apiextensions.k8s.io/v1beta1/CustomResourceDefinition"
            ]
        }
    },
    "aws": {
        "s3": {
            "bucket": [
                "s3/BucketObject",
                "lambda/Function",
                "s3/BucketPublicAccessBlock",
                "glue/Job",
                "s3/BucketPolicy",
                "iam/Policy",
                "glue/CatalogTable",
                "cloudfront/Distribution"
            ],
            "bucketpublicaccessblock": [
                "s3/BucketV2",
                "s3/Bucket",
                "s3/BucketPolicy",
                "s3/BucketOwnershipControls",
                "cfg/DeliveryChannel",
                "ec2/FlowLog",
                "iam/UserPolicyAttachment"
            ],
            "bucketpolicy": [
                "s3/BucketV2",
                "s3/Bucket",
                "cloudfront/OriginAccessIdentity",
                "iam/Role",
                "s3/BucketPublicAccessBlock",
                "iam/User",
                "cloudtrail/Trail",
                "cloudfront/Distribution"
            ],
            "bucketnotification": [
                "sns/Topic",
                "s3/BucketV2",
                "sns/TopicPolicy",
                "s3/Bucket",
                "sqs/Queue",
                "lambda/Function",
                "lambda/Permission",
                "sqs/QueuePolicy"
            ],
            "bucketv2": [
                "lambda/Function",
                "s3/BucketLoggingV2",
                "s3/BucketVersioningV2",
                "s3/BucketServerSideEncryptionConfigurationV2",
                "s3/BucketAclV2",
                "s3/BucketLifecycleConfigurationV2",
                "s3/BucketPolicy",
                "s3/BucketPublicAccessBlock"
            ],
            "bucketobject": [
                "s3/Bucket",
                "cloudfront/Distribution",
                "lambda/Function",
                "cloudformation/Stack",
                "ssm/Document",
                "glue/Job",
                "ec2/Instance",
                "lambda/LayerVersion"
            ],
            "bucketobjectv2": [
                "s3/Bucket",
                "lambda/Function",
                "lambda/LayerVersion",
                "glue/Job",
                "synthetics/Canary",
                "s3/BucketV2",
                "mskconnect/CustomPlugin",
                "transcribe/Vocabulary"
            ],
            "bucketcorsconfigurationv2": [
                "s3/BucketV2",
                "s3/Bucket",
                "route53/Record"
            ],
            "bucketaclv2": [
                "s3/BucketV2",
                "s3/Bucket"
            ],
            "bucketmetric": [
                "s3/BucketV2",
                "s3/Bucket"
            ],
            "bucketversioningv2": [
                "s3/BucketV2",
                "codepipeline/Pipeline",
                "s3/BucketObjectv2",
                "s3/Bucket"
            ],
            "bucketserversideencryptionconfigurationv2": [
                "s3/BucketV2",
                "s3/Bucket",
                "kms/Key"
            ],
            "bucketlifecycleconfigurationv2": [
                "s3/BucketV2",
                "s3/Bucket",
                "cloudtrail/Trail"
            ],
            "bucketloggingv2": [
                "s3/BucketV2",
                "s3/Bucket"
            ],
            "inventory": [
                "s3/BucketV2"
            ],
            "bucketeventsubscription": [
                "s3/Bucket"
            ],
            "objectcopy": [
                "s3/Bucket",
                "s3/BucketNotification"
            ],
            "bucketownershipcontrols": [
                "s3/Bucket",
                "s3/BucketV2",
                "s3/BucketPublicAccessBlock"
            ],
            "bucketwebsiteconfigurationv2": [
                "s3/BucketV2",
                "cloudfront/Distribution"
            ],
            "bucketobjectlockconfigurationv2": [
                "s3/BucketV2"
            ],
            "bucketreplicationconfig": [
                "s3/BucketV2",
                "s3/Bucket",
                "iam/Role"
            ],
            "bucketintelligenttieringconfiguration": [
                "s3/Bucket"
            ],
            "bucketaccelerateconfigurationv2": [
                "s3/BucketV2"
            ],
            "accesspoint": [
                "s3/Bucket",
                "ec2/Vpc"
            ]
        },
        "ec2": {
            "subnet": [
                "ec2/RouteTableAssociation",
                "lambda/Function",
                "ec2/VpcEndpoint",
                "ecs/Service",
                "ec2/Vpc",
                "ec2/NatGateway",
                "eks/Cluster",
                "lb/LoadBalancer"
            ],
            "eip": [
                "ec2/NatGateway",
                "lambda/Function",
                "ec2/Subnet",
                "route53/Record",
                "ec2/EipAssociation",
                "ec2/Instance",
                "lb/LoadBalancer",
                "ec2/InternetGateway"
            ],
            "securitygroup": [
                "ec2/SecurityGroupRule",
                "lambda/Function",
                "ec2/Vpc",
                "ecs/Service",
                "ec2/VpcEndpoint",
                "ec2/LaunchTemplate",
                "efs/MountTarget",
                "lb/LoadBalancer"
            ],
            "securitygrouprule": [
                "ec2/SecurityGroup",
                "ec2/LaunchConfiguration",
                "ec2/VpcEndpoint",
                "eks/Addon",
                "iam/Role",
                "eks/NodeGroup",
                "emr/Cluster",
                "sagemaker/NotebookInstance"
            ],
            "natgateway": [
                "ec2/Route",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation",
                "ec2/Subnet",
                "ec2/Eip",
                "ec2/Vpc",
                "ec2/InternetGateway",
                "networkfirewall/RuleGroup"
            ],
            "routetable": [
                "ec2/Route",
                "ec2/RouteTableAssociation",
                "ec2/Vpc",
                "ec2/VpcEndpoint",
                "ec2/NatGateway",
                "ec2/VpcEndpointRouteTableAssociation",
                "ec2/Subnet",
                "ec2/InternetGateway"
            ],
            "routetableassociation": [
                "ec2/RouteTable",
                "ec2/Subnet",
                "ecs/Service",
                "lambda/Function",
                "ec2/NatGateway",
                "eks/Cluster",
                "rds/SubnetGroup",
                "ec2/VpcEndpoint"
            ],
            "vpc": [
                "ec2/SecurityGroup",
                "ec2/Subnet",
                "ec2/RouteTable",
                "ec2/VpcEndpoint",
                "lb/TargetGroup",
                "ec2/Route",
                "ec2/InternetGateway",
                "ec2/VpcPeeringConnection"
            ],
            "internetgateway": [
                "ec2/Route",
                "ec2/Vpc",
                "ec2/InternetGatewayAttachment",
                "ec2/RouteTableAssociation",
                "ec2/RouteTable",
                "ec2/Eip",
                "ec2/NatGateway",
                "ec2/DefaultRouteTable"
            ],
            "route": [
                "ec2/RouteTable",
                "ec2/VpcPeeringConnection",
                "ec2/NatGateway",
                "ec2/InternetGateway",
                "ec2/Vpc",
                "ec2transitgateway/VpcAttachment",
                "ec2transitgateway/TransitGateway",
                "ec2/VpcPeeringConnectionAccepter"
            ],
            "vpcdhcpoptions": [
                "ec2/VpcDhcpOptionsAssociation",
                "ec2/Subnet",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation",
                "route53/Zone",
                "ec2/Vpc",
                "ec2/Route",
                "directoryservice/Directory"
            ],
            "keypair": [
                "ec2/Instance",
                "ec2/LaunchTemplate",
                "ec2/LaunchConfiguration",
                "eks/NodeGroup",
                "cloudformation/Stack",
                "ec2/SpotInstanceRequest",
                "ssm/Parameter"
            ],
            "vpngateway": [
                "ec2/Route",
                "ec2/VpnConnection",
                "ec2/RouteTable",
                "autoscaling/Group",
                "ec2/VpnGatewayRoutePropagation",
                "ec2/Vpc",
                "directconnect/GatewayAssociation",
                "ec2/VpnGatewayAttachment"
            ],
            "vpcdhcpoptionsassociation": [
                "ec2/Vpc",
                "ec2/VpcDhcpOptions",
                "ec2/Subnet",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation",
                "route53/Zone",
                "ec2/Route"
            ],
            "vpcendpoint": [
                "ec2/Subnet",
                "ec2/Vpc",
                "ec2/SecurityGroup",
                "ec2/RouteTable",
                "ec2/SecurityGroupRule",
                "ec2/VpcEndpointRouteTableAssociation",
                "ec2/RouteTableAssociation",
                "ec2/VpcEndpointSubnetAssociation"
            ],
            "networkacl": [
                "ec2/NetworkAclRule",
                "ec2/Subnet",
                "ec2/Vpc",
                "ec2/SecurityGroup",
                "ec2/RouteTableAssociation",
                "eks/NodeGroup",
                "ec2/NetworkAclAssociation",
                "rds/SubnetGroup"
            ],
            "vpcpeeringconnection": [
                "ec2/Route",
                "ec2/VpcPeeringConnectionAccepter",
                "ec2/Vpc",
                "ec2/PeeringConnectionOptions",
                "ec2/RouteTable",
                "ec2/VpcIpv4CidrBlockAssociation",
                "ec2/Subnet",
                "ec2/RouteTableAssociation"
            ],
            "flowlog": [
                "ec2/Vpc",
                "s3/BucketV2",
                "iam/Role",
                "cloudwatch/LogGroup",
                "s3/Bucket",
                "iam/RolePolicy",
                "s3/BucketObject",
                "s3/BucketPublicAccessBlock"
            ],
            "launchtemplate": [
                "autoscaling/Group",
                "ec2/SecurityGroup",
                "eks/NodeGroup",
                "iam/InstanceProfile",
                "eks/Cluster",
                "ec2/Subnet",
                "ecs/TaskDefinition",
                "ec2/KeyPair"
            ],
            "customergateway": [
                "ec2/VpnConnection"
            ],
            "defaultsecuritygroup": [
                "ec2/Vpc",
                "ec2/SecurityGroupRule",
                "ec2/SecurityGroup",
                "mq/Broker",
                "ec2/NetworkInterface",
                "elasticache/Cluster",
                "ec2/VpcEndpoint",
                "rds/Cluster"
            ],
            "vpnconnection": [
                "ec2transitgateway/Route",
                "ec2transitgateway/RouteTableAssociation",
                "ec2/CustomerGateway",
                "ec2/VpnConnectionRoute",
                "cloudwatch/MetricAlarm",
                "ec2transitgateway/TransitGateway",
                "ec2/VpnGateway",
                "secretsmanager/Secret"
            ],
            "vpcendpointservice": [
                "ec2/VpcEndpoint",
                "route53/Record",
                "lb/LoadBalancer",
                "ec2/VpcEndpointConnectionNotification",
                "ec2/VpcEndpointConnectionAccepter"
            ],
            "internetgatewayattachment": [
                "ec2/Route",
                "ec2/Vpc",
                "ec2/InternetGateway"
            ],
            "defaultroutetable": [
                "ec2/RouteTableAssociation",
                "ec2/Route",
                "ec2/Vpc",
                "ec2/InternetGateway",
                "ec2/VpcEndpoint",
                "ec2/DefaultVpc",
                "ec2/NatGateway",
                "ec2/VpcPeeringConnection"
            ],
            "instance": [
                "ec2/SecurityGroup",
                "route53/Record",
                "ec2/Subnet",
                "cloudwatch/MetricAlarm",
                "ec2/RouteTableAssociation",
                "iam/InstanceProfile",
                "ec2/VolumeAttachment",
                "ec2/Eip"
            ],
            "launchconfiguration": [
                "cloudformation/Stack",
                "ec2/SecurityGroup",
                "iam/InstanceProfile",
                "ec2/SecurityGroupRule",
                "eks/Cluster",
                "autoscaling/Group",
                "s3/Bucket",
                "eks/Addon"
            ],
            "vpcipv4cidrblockassociation": [
                "ec2/Subnet",
                "ec2/Vpc",
                "ec2/VpcPeeringConnection",
                "ec2/Route",
                "rds/SubnetGroup",
                "elasticache/SubnetGroup",
                "docdb/SubnetGroup"
            ],
            "vpcipamorganizationadminaccount": [
                "organizations/Account"
            ],
            "vpcipam": [
                "ec2/VpcIpamPool",
                "ec2/VpcIpamScope"
            ],
            "vpcipampool": [
                "ec2/VpcIpam",
                "ec2/VpcIpamPoolCidr",
                "ram/ResourceAssociation"
            ],
            "vpcipamscope": [
                "ec2/VpcIpam"
            ],
            "vpcipampoolcidr": [
                "ec2/VpcIpamPool"
            ],
            "vpcendpointpolicy": [
                "ec2/VpcEndpoint"
            ],
            "defaultnetworkacl": [
                "ec2/Subnet",
                "ec2/Vpc"
            ],
            "vpcendpointroutetableassociation": [
                "ec2/RouteTable",
                "ec2/VpcEndpoint",
                "ec2/Vpc"
            ],
            "defaultsubnet": [
                "eks/NodeGroup",
                "eks/Cluster",
                "lb/LoadBalancer",
                "ecs/Service",
                "rds/SubnetGroup",
                "efs/MountTarget",
                "ec2/Instance",
                "elasticache/SubnetGroup"
            ],
            "defaultvpc": [
                "ec2/SecurityGroup",
                "ec2/VpcEndpoint",
                "ec2/Subnet",
                "batch/ComputeEnvironment",
                "ec2/DefaultSecurityGroup",
                "ec2/FlowLog",
                "ec2/DefaultRouteTable",
                "ec2/RouteTable"
            ],
            "vpcpeeringconnectionaccepter": [
                "ec2/PeeringConnectionOptions",
                "ec2/Route",
                "ec2/VpcPeeringConnection",
                "ec2/Vpc",
                "ec2/RouteTable",
                "ec2/Instance"
            ],
            "networkaclrule": [
                "ec2/NetworkAcl",
                "ec2/Subnet",
                "ec2/Vpc"
            ],
            "networkaclassociation": [
                "ec2/Subnet",
                "ec2/NetworkAcl"
            ],
            "vpngatewayroutepropagation": [
                "ec2/RouteTable",
                "ec2/VpnGateway"
            ],
            "vpnconnectionroute": [
                "ec2/VpnConnection"
            ],
            "networkinterface": [
                "ec2/Instance",
                "ec2/Route",
                "ec2/SecurityGroup",
                "route53/Record",
                "ec2/Subnet",
                "ec2/Eip",
                "ec2/RouteTableAssociation",
                "ec2/RouteTable"
            ],
            "mainroutetableassociation": [
                "ec2/RouteTable",
                "ec2/Vpc"
            ],
            "eipassociation": [
                "ec2/SecurityGroupRule",
                "ec2/Instance",
                "ec2/Eip",
                "ec2/SecurityGroup",
                "ec2/SpotInstanceRequest",
                "ec2/NetworkInterface"
            ],
            "volumeattachment": [
                "ec2/Instance",
                "ebs/Volume",
                "ssm/Association",
                "organizations/Account"
            ],
            "managedprefixlist": [
                "ec2/Subnet",
                "ec2/SecurityGroup"
            ],
            "spotinstancerequest": [
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "ec2/RouteTableAssociation",
                "ec2/NetworkInterface",
                "iam/InstanceProfile",
                "ec2/EipAssociation",
                "ec2/Eip",
                "ec2/KeyPair"
            ],
            "spotfleetrequest": [
                "ec2/LaunchTemplate",
                "ec2/Subnet"
            ],
            "tag": [
                "ec2/Subnet",
                "ram/PrincipalAssociation",
                "ram/ResourceAssociation",
                "ec2/RouteTableAssociation",
                "eks/Cluster",
                "ec2/Vpc",
                "ec2/RouteTable",
                "emr/Cluster"
            ],
            "peeringconnectionoptions": [
                "ec2/VpcPeeringConnectionAccepter",
                "ec2/VpcPeeringConnection"
            ],
            "vpcendpointconnectionaccepter": [
                "ec2/VpcEndpoint",
                "ec2/VpcEndpointService"
            ],
            "vpcendpointsubnetassociation": [
                "ec2/VpcEndpoint",
                "ec2/Subnet",
                "autoscaling/Group"
            ],
            "amicopy": [
                "ec2/Instance",
                "ec2/LaunchTemplate",
                "ec2/LaunchConfiguration"
            ],
            "networkinterfacesecuritygroupattachment": [
                "ec2/Instance",
                "ec2/SecurityGroup",
                "ec2/NetworkInterface"
            ],
            "ami": [
                "ec2/Instance"
            ],
            "egressonlyinternetgateway": [
                "ec2/RouteTable",
                "ec2transitgateway/VpcAttachment",
                "route53/VpcAssociationAuthorization",
                "ec2/Vpc",
                "ec2/Route"
            ],
            "vpngatewayattachment": [
                "ec2/Vpc",
                "ec2/VpnGateway",
                "directconnect/GatewayAssociationProposal"
            ],
            "transitgatewaypeeringattachmentaccepter": [
                "ec2transitgateway/PeeringAttachment"
            ],
            "amifrominstance": [
                "ec2/Instance"
            ],
            "placementgroup": [
                "ec2/Instance"
            ],
            "vpcendpointconnectionnotification": [
                "ec2/VpcEndpointService",
                "sns/Topic"
            ],
            "spotdatafeedsubscription": [
                "s3/Bucket"
            ],
            "vpcipampoolcidrallocation": [
                "ec2/Vpc"
            ],
            "dedicatedhost": [
                "ec2/Instance"
            ]
        },
        "iam": {
            "policy": [
                "iam/RolePolicyAttachment",
                "iam/Role",
                "iam/PolicyAttachment",
                "dynamodb/Table",
                "iam/UserPolicyAttachment",
                "sqs/Queue",
                "s3/Bucket",
                "iam/GroupPolicyAttachment"
            ],
            "role": [
                "iam/RolePolicyAttachment",
                "iam/Policy",
                "lambda/Function",
                "iam/RolePolicy",
                "ecs/TaskDefinition",
                "cloudwatch/LogGroup",
                "glue/Job",
                "iam/InstanceProfile"
            ],
            "rolepolicy": [
                "iam/Role",
                "lambda/Function",
                "sqs/Queue",
                "dynamodb/Table",
                "s3/Bucket",
                "secretsmanager/Secret",
                "ssm/Parameter",
                "cloudwatch/LogGroup"
            ],
            "rolepolicyattachment": [
                "iam/Policy",
                "iam/Role",
                "lambda/Function",
                "eks/Cluster",
                "eks/NodeGroup",
                "iam/InstanceProfile",
                "cloudwatch/EventRuleEventSubscription",
                "ec2/SecurityGroupRule"
            ],
            "openidconnectprovider": [
                "iam/Role",
                "eks/Cluster",
                "eks/NodeGroup",
                "ec2/Subnet",
                "eks/Addon",
                "iam/RolePolicyAttachment",
                "ec2/SecurityGroupRule",
                "iam/Policy"
            ],
            "instanceprofile": [
                "ec2/LaunchConfiguration",
                "iam/Role",
                "lambda/Function",
                "ec2/LaunchTemplate",
                "ec2/Instance",
                "iam/RolePolicyAttachment",
                "elasticbeanstalk/Environment",
                "batch/ComputeEnvironment"
            ],
            "user": [
                "iam/AccessKey",
                "iam/UserPolicy",
                "iam/UserPolicyAttachment",
                "iam/UserGroupMembership",
                "iam/PolicyAttachment",
                "iam/GroupMembership",
                "iam/UserLoginProfile",
                "s3/BucketPolicy"
            ],
            "accesskey": [
                "iam/User",
                "ssm/Parameter",
                "ecs/TaskDefinition",
                "secretsmanager/SecretVersion",
                "lambda/Function",
                "codebuild/Project",
                "mskconnect/Connector",
                "ec2/LaunchConfiguration"
            ],
            "userpolicy": [
                "iam/User",
                "iam/Role",
                "s3/Bucket",
                "ecr/Repository",
                "route53/Zone",
                "kms/Key",
                "sqs/Queue",
                "ecs/Service"
            ],
            "policyattachment": [
                "iam/Policy",
                "iam/Role",
                "iam/User",
                "iam/Group",
                "organizations/Account",
                "iam/RolePolicyAttachment",
                "lambda/Function",
                "iam/AccessKey"
            ],
            "userpolicyattachment": [
                "iam/Policy",
                "iam/User",
                "s3/Bucket",
                "iam/AccessKey",
                "ses/EmailIdentity",
                "s3/BucketPublicAccessBlock",
                "kms/Key"
            ],
            "sshkey": [
                "ssm/Parameter",
                "iam/User"
            ],
            "servercertificate": [
                "lb/Listener"
            ],
            "group": [
                "iam/GroupPolicyAttachment",
                "iam/UserGroupMembership",
                "iam/GroupPolicy",
                "iam/GroupMembership",
                "iam/PolicyAttachment",
                "iam/User",
                "iam/Policy",
                "iam/Role"
            ],
            "grouppolicy": [
                "iam/Group",
                "s3/Bucket",
                "iam/Role",
                "iam/Policy",
                "organizations/Account",
                "batch/JobQueue",
                "elastictranscoder/Pipeline",
                "kms/Key"
            ],
            "groupmembership": [
                "iam/User",
                "iam/Group",
                "iam/Role"
            ],
            "samlprovider": [
                "iam/Role",
                "ec2clientvpn/Route",
                "ec2clientvpn/Endpoint",
                "ec2clientvpn/AuthorizationRule",
                "ec2clientvpn/NetworkAssociation"
            ],
            "servicelinkedrole": [
                "elasticsearch/Domain",
                "cfg/Recorder",
                "opensearch/Domain",
                "ssm/MaintenanceWindowTask",
                "organizations/DelegatedAdministrator",
                "redshift/Cluster"
            ],
            "grouppolicyattachment": [
                "iam/Group",
                "iam/Policy",
                "kms/Key",
                "s3/Bucket",
                "sqs/Queue",
                "apigateway/RestApi",
                "iam/Role"
            ],
            "usergroupmembership": [
                "iam/Group",
                "iam/User",
                "iam/Policy"
            ],
            "userloginprofile": [
                "iam/User",
                "iam/AccessKey"
            ]
        },
        "cloudwatch": {
            "metricalarm": [
                "sns/Topic",
                "dynamodb/Table",
                "cloudwatch/CompositeAlarm",
                "sqs/Queue",
                "cloudwatch/Dashboard",
                "lb/LoadBalancer",
                "lambda/Function",
                "sfn/StateMachine"
            ],
            "eventrule": [
                "cloudwatch/EventTarget",
                "lambda/Permission",
                "sqs/QueuePolicy",
                "cloudwatch/EventBus",
                "iam/Role",
                "lambda/Function",
                "cloudwatch/MetricAlarm",
                "cloudwatch/LogGroup"
            ],
            "eventruleeventsubscription": [
                "iam/RolePolicyAttachment",
                "lambda/Permission",
                "iam/Role",
                "iam/RolePolicy",
                "lambda/Function",
                "apigateway/RestApi",
                "apigateway/Deployment",
                "apigateway/Stage"
            ],
            "loggroup": [
                "lambda/Function",
                "iam/Role",
                "cloudwatch/LogMetricFilter",
                "ecs/TaskDefinition",
                "cloudwatch/LogSubscriptionFilter",
                "lambda/Permission",
                "apigateway/Stage",
                "cloudwatch/LogStream"
            ],
            "eventtarget": [
                "cloudwatch/EventRule",
                "lambda/Function",
                "iam/Role",
                "cloudwatch/EventBus",
                "sns/Topic",
                "sqs/Queue",
                "sfn/StateMachine",
                "ec2/SecurityGroup"
            ],
            "logstream": [
                "cloudwatch/LogGroup",
                "kinesis/FirehoseDeliveryStream",
                "iam/RolePolicy",
                "lambda/Function",
                "ec2clientvpn/Endpoint",
                "iam/Role",
                "ecs/TaskDefinition",
                "ec2clientvpn/Route"
            ],
            "logsubscriptionfilter": [
                "cloudwatch/LogGroup",
                "lambda/Function",
                "lambda/Permission",
                "iam/Role",
                "kinesis/FirehoseDeliveryStream",
                "eks/Cluster",
                "rds/Instance",
                "kinesis/Stream"
            ],
            "eventbus": [
                "cloudwatch/EventTarget",
                "cloudwatch/EventRule",
                "lambda/Function",
                "cloudwatch/EventArchive",
                "iam/RolePolicy",
                "ecs/TaskDefinition",
                "cloudwatch/EventBusPolicy",
                "iam/Policy"
            ],
            "metricstream": [
                "iam/Role",
                "kinesis/FirehoseDeliveryStream"
            ],
            "compositealarm": [
                "cloudwatch/MetricAlarm",
                "sns/Topic",
                "ecs/Service",
                "lb/TargetGroup",
                "efs/FileSystem"
            ],
            "eventarchive": [
                "cloudwatch/EventBus",
                "cloudformation/Stack"
            ],
            "eventbuspolicy": [
                "cloudwatch/EventBus",
                "iam/Role"
            ],
            "dashboard": [
                "cloudwatch/MetricAlarm",
                "lambda/Function",
                "ecs/Service",
                "cloudwatch/LogGroup",
                "s3/Bucket",
                "cloudwatch/EventRule",
                "ecs/Cluster",
                "sqs/Queue"
            ],
            "logmetricfilter": [
                "cloudwatch/LogGroup",
                "cloudwatch/MetricAlarm",
                "cloudwatch/Dashboard",
                "elasticbeanstalk/Environment",
                "lambda/Function"
            ],
            "logresourcepolicy": [
                "cloudwatch/LogGroup",
                "opensearch/Domain",
                "route53/ResolverQueryLogConfig",
                "mq/Broker",
                "elasticsearch/Domain",
                "cloudwatch/EventRule"
            ],
            "eventconnection": [
                "cloudwatch/EventApiDestination"
            ],
            "eventapidestination": [
                "cloudwatch/EventTarget",
                "iam/Role",
                "cloudwatch/EventConnection",
                "iam/Policy"
            ],
            "logdestination": [
                "cloudwatch/LogDestinationPolicy",
                "cloudwatch/LogSubscriptionFilter",
                "iam/Role",
                "kinesis/Stream"
            ],
            "logdestinationpolicy": [
                "cloudwatch/LogSubscriptionFilter",
                "cloudwatch/LogDestination"
            ],
            "eventpermission": [
                "cloudwatch/EventBus"
            ]
        },
        "eks": {
            "cluster": [
                "ec2/Subnet",
                "eks/NodeGroup",
                "ec2/LaunchConfiguration",
                "cloudformation/Stack",
                "ec2/SecurityGroup",
                "iam/Role",
                "iam/OpenIdConnectProvider",
                "ec2/RouteTableAssociation"
            ],
            "nodegroup": [
                "ec2/Subnet",
                "autoscaling/Tag",
                "iam/Role",
                "eks/Cluster",
                "ec2/LaunchTemplate",
                "iam/RolePolicyAttachment",
                "ec2/RouteTableAssociation",
                "eks/Addon"
            ],
            "addon": [
                "ec2/SecurityGroupRule",
                "eks/Cluster",
                "eks/NodeGroup",
                "ec2/SecurityGroup",
                "iam/Role",
                "ec2/LaunchConfiguration",
                "iam/RolePolicyAttachment",
                "iam/OpenIdConnectProvider"
            ],
            "fargateprofile": [
                "ec2/Subnet",
                "ec2/RouteTableAssociation",
                "iam/Role",
                "eks/Cluster",
                "iam/RolePolicyAttachment",
                "ec2/SecurityGroupRule",
                "eks/IdentityProviderConfig",
                "ec2/SecurityGroup"
            ],
            "identityproviderconfig": [
                "eks/Cluster",
                "eks/FargateProfile"
            ]
        },
        "dynamodb": {
            "table": [
                "lambda/Function",
                "cloudwatch/MetricAlarm",
                "iam/Policy",
                "dynamodb/TableItem",
                "lambda/EventSourceMapping",
                "iam/RolePolicy",
                "appautoscaling/Target",
                "ecs/TaskDefinition"
            ],
            "tableitem": [
                "dynamodb/Table",
                "athena/Workgroup",
                "glue/CatalogDatabase",
                "s3/Bucket",
                "secretsmanager/Secret",
                "ecs/Service",
                "neptune/Cluster",
                "elasticsearch/Domain"
            ],
            "kinesisstreamingdestination": [
                "dynamodb/Table",
                "kinesis/Stream"
            ],
            "globaltable": [
                "lambda/Function",
                "dynamodb/Table"
            ]
        },
        "sns": {
            "topic": [
                "cloudwatch/MetricAlarm",
                "sns/TopicSubscription",
                "lambda/Function",
                "lambda/Permission",
                "sns/TopicPolicy",
                "s3/BucketNotification",
                "cloudwatch/EventTarget",
                "iam/Policy"
            ],
            "topicsubscription": [
                "sns/Topic",
                "sqs/Queue",
                "lambda/Function",
                "cloudformation/Stack",
                "iam/Role",
                "sqs/QueuePolicy",
                "kinesis/FirehoseDeliveryStream",
                "sns/TopicPolicy"
            ],
            "topicpolicy": [
                "s3/BucketNotification",
                "sns/Topic",
                "s3/Bucket",
                "budgets/Budget",
                "sns/TopicSubscription",
                "organizations/Account",
                "cloudtrail/Trail",
                "cloudwatch/MetricAlarm"
            ],
            "topiceventsubscription": [
                "sns/Topic",
                "lambda/Function"
            ],
            "platformapplication": [
                "iam/Policy",
                "ecs/TaskDefinition"
            ],
            "smspreferences": [
                "iam/Role"
            ]
        },
        "secretsmanager": {
            "secret": [
                "secretsmanager/SecretVersion",
                "ecs/TaskDefinition",
                "lambda/Function",
                "iam/Policy",
                "iam/RolePolicy",
                "rds/Proxy",
                "iam/Role",
                "dynamodb/TableItem"
            ],
            "secretversion": [
                "secretsmanager/Secret",
                "rds/Instance",
                "rds/Cluster",
                "ecs/TaskDefinition",
                "iam/Role",
                "iam/RolePolicy",
                "secretsmanager/SecretRotation",
                "iam/AccessKey"
            ],
            "secretrotation": [
                "lambda/Function",
                "secretsmanager/Secret",
                "secretsmanager/SecretVersion"
            ],
            "secretpolicy": [
                "secretsmanager/Secret",
                "iam/Role",
                "msk/ScramSecretAssociation",
                "iam/OpenIdConnectProvider"
            ]
        },
        "lambda": {
            "function": [
                "lambda/Permission",
                "iam/Role",
                "lambda/EventSourceMapping",
                "dynamodb/Table",
                "cloudwatch/LogGroup",
                "cloudwatch/EventTarget",
                "apigateway/Deployment",
                "sqs/Queue"
            ],
            "permission": [
                "lambda/Function",
                "apigateway/Stage",
                "apigateway/Deployment",
                "cloudwatch/EventRule",
                "apigateway/RestApi",
                "sns/Topic",
                "apigatewayv2/Api",
                "apigateway/BasePathMapping"
            ],
            "eventsourcemapping": [
                "lambda/Function",
                "sqs/Queue",
                "dynamodb/Table",
                "lambda/Alias",
                "kinesis/Stream",
                "sns/Topic",
                "secretsmanager/Secret",
                "kinesis/StreamConsumer"
            ],
            "layerversion": [
                "lambda/Function",
                "s3/BucketObject",
                "s3/Bucket",
                "s3/BucketObjectv2",
                "iam/Role"
            ],
            "functioneventinvokeconfig": [
                "lambda/Function",
                "sqs/Queue",
                "sns/Topic",
                "iam/RolePolicyAttachment",
                "cloudwatch/EventBus"
            ],
            "alias": [
                "lambda/Permission",
                "apigateway/RestApi",
                "apigateway/Deployment",
                "lambda/Function",
                "lambda/EventSourceMapping",
                "lambda/ProvisionedConcurrencyConfig",
                "lb/TargetGroupAttachment",
                "cloudwatch/EventTarget"
            ],
            "provisionedconcurrencyconfig": [
                "lambda/Function",
                "lambda/Alias"
            ],
            "functionurl": [
                "lambda/Function",
                "cloudfront/Distribution"
            ],
            "invocation": [
                "lambda/Function",
                "sfn/StateMachine",
                "cloudwatch/LogGroup",
                "rds/Cluster"
            ]
        },
        "appmesh": {
            "mesh": [
                "appmesh/VirtualNode",
                "appmesh/VirtualService",
                "appmesh/VirtualRouter",
                "appmesh/Route",
                "appmesh/VirtualGateway"
            ],
            "virtualrouter": [
                "appmesh/Route",
                "appmesh/VirtualService",
                "appmesh/Mesh"
            ],
            "virtualnode": [
                "appmesh/Route",
                "ecs/TaskDefinition",
                "appmesh/VirtualService",
                "appmesh/Mesh",
                "servicediscovery/Service",
                "servicediscovery/PrivateDnsNamespace"
            ],
            "route": [
                "appmesh/VirtualRouter",
                "appmesh/VirtualNode",
                "appmesh/Mesh"
            ],
            "virtualservice": [
                "appmesh/VirtualNode",
                "appmesh/Mesh",
                "appmesh/VirtualRouter",
                "servicediscovery/Service"
            ],
            "virtualgateway": [
                "appmesh/Mesh"
            ]
        },
        "servicediscovery": {
            "service": [
                "ecs/Service",
                "servicediscovery/PrivateDnsNamespace",
                "lambda/Function",
                "cloudformation/Stack",
                "ecs/TaskDefinition",
                "servicediscovery/Instance",
                "apigatewayv2/Integration",
                "appmesh/VirtualNode"
            ],
            "privatednsnamespace": [
                "servicediscovery/Service",
                "ecs/TaskDefinition",
                "lambda/Function",
                "ec2/Vpc",
                "ec2/Subnet",
                "appmesh/VirtualNode",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation"
            ],
            "instance": [
                "servicediscovery/Service",
                "lb/LoadBalancer",
                "servicediscovery/PrivateDnsNamespace",
                "cloudfront/Distribution",
                "rds/ClusterEndpoint",
                "elasticache/Cluster",
                "rds/Cluster"
            ]
        },
        "sqs": {
            "queue": [
                "lambda/Function",
                "lambda/EventSourceMapping",
                "kms/Key",
                "cloudwatch/MetricAlarm",
                "iam/Policy",
                "sqs/QueuePolicy",
                "sns/TopicSubscription",
                "ecs/TaskDefinition"
            ],
            "queuepolicy": [
                "sqs/Queue",
                "cloudwatch/EventRule",
                "sns/Topic",
                "s3/BucketNotification",
                "s3/Bucket",
                "cloudwatch/EventTarget",
                "sns/TopicSubscription",
                "lambda/Function"
            ],
            "queueeventsubscription": [
                "lambda/Function",
                "sqs/Queue"
            ],
            "redrivepolicy": [
                "sqs/Queue"
            ],
            "redriveallowpolicy": [
                "sqs/Queue"
            ]
        },
        "ecs": {
            "taskdefinition": [
                "ecs/Service",
                "iam/Role",
                "cloudwatch/LogGroup",
                "secretsmanager/Secret",
                "sqs/Queue",
                "ecr/Repository",
                "ssm/Parameter",
                "s3/Bucket"
            ],
            "service": [
                "ec2/Subnet",
                "ecs/TaskDefinition",
                "ec2/SecurityGroup",
                "ecs/Cluster",
                "ec2/RouteTableAssociation",
                "lb/TargetGroup",
                "cloudwatch/MetricAlarm",
                "appautoscaling/Target"
            ],
            "cluster": [
                "ecs/Service",
                "cloudwatch/MetricAlarm",
                "appautoscaling/Target",
                "cloudwatch/EventTarget",
                "ecs/TaskDefinition",
                "appautoscaling/Policy",
                "ecs/ClusterCapacityProviders",
                "lambda/Function"
            ],
            "capacityprovider": [
                "ecs/Cluster",
                "ecs/Service",
                "autoscaling/Group",
                "ecs/ClusterCapacityProviders"
            ],
            "clustercapacityproviders": [
                "ecs/Cluster",
                "ecs/CapacityProvider"
            ]
        },
        "ecr": {
            "repository": [
                "ecr/LifecyclePolicy",
                "ecr/RepositoryPolicy",
                "ecs/TaskDefinition",
                "lambda/Function",
                "iam/Policy",
                "ssm/Parameter",
                "codebuild/Project",
                "iam/RolePolicy"
            ],
            "lifecyclepolicy": [
                "ecr/Repository",
                "ecs/Service",
                "ec2/SecurityGroup"
            ],
            "repositorypolicy": [
                "ecr/Repository",
                "organizations/Account",
                "iam/Role",
                "iam/User"
            ],
            "registryscanningconfiguration": [
                "ecr/Repository"
            ]
        },
        "kinesis": {
            "stream": [
                "iam/RolePolicy",
                "lambda/EventSourceMapping",
                "kinesis/FirehoseDeliveryStream",
                "kms/Key",
                "lambda/Function",
                "iam/Role",
                "iam/Policy",
                "iot/TopicRule"
            ],
            "firehosedeliverystream": [
                "iam/Role",
                "lambda/Function",
                "s3/BucketV2",
                "cloudwatch/LogSubscriptionFilter",
                "s3/Bucket",
                "iam/Policy",
                "glue/CatalogTable",
                "cloudwatch/LogGroup"
            ],
            "streamconsumer": [
                "lambda/EventSourceMapping",
                "kinesis/Stream",
                "iam/RolePolicy"
            ],
            "analyticsapplication": [
                "iam/Role",
                "kinesis/Stream"
            ]
        },
        "elasticache": {
            "subnetgroup": [
                "ec2/Subnet",
                "elasticache/Cluster",
                "elasticache/ReplicationGroup",
                "ec2/RouteTableAssociation",
                "lambda/Function",
                "ec2/RouteTable",
                "ec2/Route",
                "ec2/Vpc"
            ],
            "cluster": [
                "ecs/TaskDefinition",
                "elasticache/SubnetGroup",
                "ec2/SecurityGroup",
                "lambda/Function",
                "ssm/Parameter",
                "route53/Record",
                "ec2/Vpc",
                "elasticbeanstalk/Environment"
            ],
            "replicationgroup": [
                "lambda/Function",
                "ecs/TaskDefinition",
                "elasticbeanstalk/Environment",
                "ec2/SecurityGroup",
                "elasticache/SubnetGroup",
                "route53/Record",
                "ssm/Parameter",
                "ec2/Subnet"
            ],
            "parametergroup": [
                "elasticache/ReplicationGroup",
                "elasticache/Cluster",
                "ssm/Parameter"
            ],
            "user": [
                "elasticache/UserGroup"
            ],
            "usergroup": [
                "elasticache/User",
                "elasticache/ReplicationGroup"
            ]
        },
        "rds": {
            "subnetgroup": [
                "ec2/Subnet",
                "rds/Instance",
                "rds/Cluster",
                "ec2/RouteTableAssociation",
                "rds/ClusterInstance",
                "lambda/Function",
                "ec2/RouteTable",
                "ec2/Route"
            ],
            "cluster": [
                "rds/ClusterInstance",
                "secretsmanager/SecretVersion",
                "ec2/SecurityGroup",
                "ecs/TaskDefinition",
                "rds/SubnetGroup",
                "lambda/Function",
                "ssm/Parameter",
                "lb/TargetGroupAttachment"
            ],
            "clusterinstance": [
                "rds/Cluster",
                "rds/SubnetGroup",
                "rds/ParameterGroup",
                "cloudwatch/MetricAlarm",
                "iam/Role",
                "ecs/Service",
                "kms/Key",
                "ec2/SecurityGroupRule"
            ],
            "clusterparametergroup": [
                "rds/Cluster",
                "rds/ClusterInstance",
                "ec2/SecurityGroupRule"
            ],
            "instance": [
                "cloudwatch/MetricAlarm",
                "secretsmanager/SecretVersion",
                "ecs/TaskDefinition",
                "ec2/SecurityGroup",
                "rds/SubnetGroup",
                "lambda/Function",
                "ssm/Parameter",
                "secretsmanager/Secret"
            ],
            "parametergroup": [
                "rds/Instance",
                "rds/ClusterInstance",
                "rds/Cluster",
                "ssm/Parameter",
                "ec2/SecurityGroupRule"
            ],
            "optiongroup": [
                "rds/Instance",
                "iam/Role",
                "ec2/SecurityGroup"
            ],
            "proxy": [
                "secretsmanager/Secret",
                "ec2/Subnet",
                "rds/ProxyDefaultTargetGroup",
                "rds/ProxyTarget",
                "lb/TargetGroupAttachment",
                "iam/Policy",
                "iam/Role",
                "ec2/SecurityGroup"
            ],
            "proxyendpoint": [
                "lambda/Function",
                "ecs/TaskDefinition",
                "rds/Proxy",
                "ec2/SecurityGroup",
                "ec2/Subnet",
                "ec2/RouteTableAssociation",
                "route53/Record",
                "rds/Cluster"
            ],
            "proxydefaulttargetgroup": [
                "rds/ProxyTarget",
                "rds/Proxy",
                "rds/ProxyEndpoint",
                "rds/Cluster",
                "rds/ClusterInstance"
            ],
            "roleassociation": [
                "iam/Role",
                "rds/Instance"
            ],
            "clusterroleassociation": [
                "iam/Role",
                "rds/Cluster"
            ],
            "proxytarget": [
                "rds/Proxy",
                "rds/ProxyDefaultTargetGroup",
                "rds/Cluster",
                "rds/Instance",
                "rds/ClusterInstance"
            ],
            "clusterendpoint": [
                "rds/Cluster",
                "rds/ClusterInstance",
                "route53/Record",
                "servicediscovery/Instance"
            ],
            "eventsubscription": [
                "sns/Topic",
                "rds/Instance"
            ],
            "globalcluster": [
                "rds/Cluster"
            ],
            "clustersnapshot": [
                "rds/Cluster"
            ],
            "snapshot": [
                "rds/Instance"
            ]
        },
        "lb": {
            "applicationloadbalancer": [
                "acm/CertificateValidation",
                "route53/Zone",
                "acm/Certificate",
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "ec2/SecurityGroupRule",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation"
            ],
            "targetgroup": [
                "lb/ListenerRule",
                "lb/TargetGroupAttachment",
                "lb/Listener",
                "ecs/Service",
                "ec2/Vpc",
                "cloudwatch/MetricAlarm",
                "ecs/TaskDefinition",
                "autoscaling/Group"
            ],
            "loadbalancer": [
                "lb/Listener",
                "route53/Record",
                "ec2/Subnet",
                "cloudwatch/MetricAlarm",
                "ec2/SecurityGroup",
                "ec2/RouteTableAssociation",
                "apigateway/Integration",
                "lb/TargetGroup"
            ],
            "listener": [
                "lb/ListenerRule",
                "lb/LoadBalancer",
                "ecs/Service",
                "lb/TargetGroup",
                "ecs/TaskDefinition",
                "lb/ListenerCertificate",
                "alb/LoadBalancer",
                "route53/Record"
            ],
            "listenerrule": [
                "lb/Listener",
                "lb/TargetGroup",
                "alb/TargetGroup",
                "ecs/Service",
                "alb/Listener",
                "route53/Record",
                "ec2/SecurityGroupRule",
                "lb/LoadBalancer"
            ],
            "targetgroupattachment": [
                "lb/TargetGroup",
                "lambda/Permission",
                "lambda/Function",
                "lb/LoadBalancer",
                "ec2/Instance",
                "rds/Cluster",
                "rds/Proxy",
                "lambda/Alias"
            ],
            "listenercertificate": [
                "lb/Listener",
                "acm/CertificateValidation",
                "acm/Certificate",
                "route53/Zone",
                "lb/ListenerRule",
                "route53/Record",
                "elasticloadbalancingv2/Listener"
            ]
        },
        "acm": {
            "certificate": [
                "acm/CertificateValidation",
                "route53/Record",
                "cloudfront/Distribution",
                "lb/Listener",
                "lb/ListenerCertificate",
                "route53/Zone",
                "apigateway/DomainName",
                "apigatewayv2/DomainName"
            ],
            "certificatevalidation": [
                "route53/Record",
                "acm/Certificate",
                "cloudfront/Distribution",
                "lb/Listener",
                "lb/ListenerCertificate",
                "apigatewayv2/DomainName",
                "apigateway/DomainName",
                "lb/ApplicationLoadBalancer"
            ]
        },
        "appautoscaling": {
            "target": [
                "appautoscaling/Policy",
                "ecs/Service",
                "dynamodb/Table",
                "ecs/Cluster",
                "appautoscaling/ScheduledAction",
                "iam/Role",
                "ssm/Parameter",
                "rds/Cluster"
            ],
            "policy": [
                "appautoscaling/Target",
                "cloudwatch/MetricAlarm",
                "ecs/Service",
                "ecs/Cluster",
                "lb/TargetGroup",
                "lb/LoadBalancer",
                "rds/Cluster",
                "apigateway/RestApi"
            ],
            "scheduledaction": [
                "appautoscaling/Target",
                "apigateway/RestApi",
                "docdb/Cluster"
            ]
        },
        "route53": {
            "record": [
                "route53/Zone",
                "acm/CertificateValidation",
                "lb/LoadBalancer",
                "acm/Certificate",
                "cloudfront/Distribution",
                "ec2/Instance",
                "apigateway/DomainName",
                "s3/BucketObject"
            ],
            "healthcheck": [
                "cloudwatch/MetricAlarm",
                "route53/Record",
                "ec2/Instance",
                "cloudformation/Stack"
            ],
            "zone": [
                "route53/Record",
                "cloudfront/Distribution",
                "acm/Certificate",
                "iam/Policy",
                "lb/ListenerCertificate",
                "ec2/Vpc",
                "route53/VpcAssociationAuthorization",
                "route53/ZoneAssociation"
            ],
            "resolverendpoint": [
                "route53/ResolverRule",
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "ec2/RouteTableAssociation",
                "ec2/DefaultSubnet",
                "ec2clientvpn/Endpoint",
                "ec2/DefaultSecurityGroup"
            ],
            "resolverrule": [
                "route53/ResolverRuleAssociation",
                "route53/ResolverEndpoint",
                "ram/ResourceAssociation",
                "ec2/Instance"
            ],
            "resolverruleassociation": [
                "route53/ResolverRule",
                "ec2/Vpc",
                "ram/ResourceAssociation",
                "ram/PrincipalAssociation",
                "rds/SubnetGroup",
                "elasticache/SubnetGroup",
                "docdb/SubnetGroup"
            ],
            "querylog": [
                "cloudwatch/LogGroup"
            ],
            "resolverquerylogconfig": [
                "route53/ResolverQueryLogConfigAssociation",
                "cloudwatch/LogGroup",
                "cloudwatch/LogResourcePolicy"
            ],
            "resolverquerylogconfigassociation": [
                "route53/ResolverQueryLogConfig",
                "ec2/Vpc"
            ],
            "vpcassociationauthorization": [
                "route53/ZoneAssociation",
                "route53/Zone",
                "ec2/Vpc",
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "ec2/InternetGateway",
                "ec2/NetworkAcl",
                "ec2/EgressOnlyInternetGateway"
            ],
            "zoneassociation": [
                "route53/Zone",
                "route53/VpcAssociationAuthorization",
                "ec2/Vpc"
            ],
            "keysigningkey": [
                "route53/HostedZoneDnsSec",
                "route53/Record",
                "route53/Zone",
                "kms/Key"
            ],
            "hostedzonednssec": [
                "route53/Record",
                "route53/Zone",
                "route53/KeySigningKey"
            ],
            "resolverfirewalldomainlist": [
                "route53/ResolverFirewallRule"
            ],
            "resolverfirewallrulegroup": [
                "route53/ResolverFirewallRule",
                "route53/ResolverFirewallRuleGroupAssociation"
            ],
            "resolverfirewallrule": [
                "route53/ResolverFirewallDomainList",
                "route53/ResolverFirewallRuleGroup"
            ],
            "resolverfirewallrulegroupassociation": [
                "ec2/Vpc",
                "route53/ResolverFirewallRuleGroup"
            ],
            "trafficpolicy": [
                "route53/TrafficPolicyInstance",
                "lb/LoadBalancer"
            ],
            "trafficpolicyinstance": [
                "route53/Zone",
                "route53/TrafficPolicy"
            ],
            "delegationset": [
                "route53/Zone",
                "route53/Record"
            ]
        },
        "apigateway": {
            "domainname": [
                "apigateway/BasePathMapping",
                "route53/Record",
                "acm/Certificate",
                "acm/CertificateValidation",
                "apigateway/Stage",
                "route53/Zone",
                "apigateway/Deployment",
                "apigatewayv2/ApiMapping"
            ],
            "restapi": [
                "apigateway/Resource",
                "apigateway/Method",
                "apigateway/Integration",
                "lambda/Permission",
                "apigateway/MethodResponse",
                "apigateway/IntegrationResponse",
                "apigateway/Response",
                "lambda/Function"
            ],
            "deployment": [
                "lambda/Permission",
                "lambda/Function",
                "apigateway/Integration",
                "apigateway/Method",
                "apigateway/Stage",
                "apigateway/IntegrationResponse",
                "apigateway/RestApi",
                "lambda/Alias"
            ],
            "stage": [
                "lambda/Permission",
                "apigateway/BasePathMapping",
                "apigateway/MethodSettings",
                "apigateway/UsagePlan",
                "apigateway/Deployment",
                "apigateway/RestApi",
                "ecs/TaskDefinition",
                "cloudwatch/LogGroup"
            ],
            "basepathmapping": [
                "apigateway/RestApi",
                "apigateway/Stage",
                "apigateway/DomainName",
                "lambda/Permission",
                "apigateway/Deployment",
                "iam/Role",
                "s3/BucketObject",
                "route53/Record"
            ],
            "response": [
                "apigateway/RestApi",
                "apigateway/Deployment"
            ],
            "methodsettings": [
                "apigateway/RestApi",
                "apigateway/Stage",
                "apigateway/Deployment",
                "cloudwatch/LogSubscriptionFilter",
                "apigateway/Account"
            ],
            "resource": [
                "apigateway/Integration",
                "apigateway/Method",
                "apigateway/MethodResponse",
                "apigateway/IntegrationResponse",
                "apigateway/RestApi",
                "apigateway/Deployment",
                "lambda/Permission",
                "apigateway/RequestValidator"
            ],
            "method": [
                "apigateway/Integration",
                "apigateway/MethodResponse",
                "apigateway/Resource",
                "apigateway/IntegrationResponse",
                "apigateway/Deployment",
                "apigateway/RestApi",
                "apigateway/Authorizer",
                "lambda/Permission"
            ],
            "authorizer": [
                "apigateway/Method",
                "lambda/Permission",
                "apigateway/RestApi",
                "lambda/Function",
                "iam/Role",
                "cognito/UserPool",
                "apigateway/Resource",
                "apigateway/Deployment"
            ],
            "integration": [
                "apigateway/Deployment",
                "apigateway/Resource",
                "apigateway/RestApi",
                "apigateway/Method",
                "apigateway/IntegrationResponse",
                "lambda/Function",
                "apigateway/MethodResponse",
                "apigateway/VpcLink"
            ],
            "methodresponse": [
                "apigateway/IntegrationResponse",
                "apigateway/Method",
                "apigateway/Resource",
                "apigateway/RestApi",
                "apigateway/Deployment",
                "apigateway/Integration",
                "apigateway/Model",
                "apigateway/RequestValidator"
            ],
            "integrationresponse": [
                "apigateway/Deployment",
                "apigateway/Resource",
                "apigateway/MethodResponse",
                "apigateway/RestApi",
                "apigateway/Method",
                "apigateway/Integration",
                "lambda/Function",
                "lambda/Permission"
            ],
            "account": [
                "apigateway/RestApi",
                "iam/Role",
                "apigateway/Stage",
                "iam/RolePolicy",
                "apigateway/MethodSettings"
            ],
            "usageplan": [
                "apigateway/UsagePlanKey",
                "lambda/Function",
                "apigateway/RestApi",
                "apigateway/Stage",
                "apigateway/Resource",
                "apigateway/Method",
                "apigateway/Integration",
                "apigateway/MethodResponse"
            ],
            "restapipolicy": [
                "apigateway/Deployment",
                "apigateway/RestApi",
                "ec2/VpcEndpoint",
                "ec2/Vpc",
                "iam/Role"
            ],
            "apikey": [
                "apigateway/UsagePlanKey",
                "ecs/TaskDefinition",
                "ssm/Parameter",
                "apigateway/Resource",
                "secretsmanager/SecretVersion",
                "apigateway/Method",
                "apigateway/Integration",
                "apigateway/MethodResponse"
            ],
            "usageplankey": [
                "apigateway/UsagePlan",
                "apigateway/ApiKey",
                "apigateway/Resource",
                "apigateway/Method",
                "apigateway/Integration",
                "apigateway/MethodResponse",
                "apigateway/IntegrationResponse",
                "apigateway/RequestValidator"
            ],
            "vpclink": [
                "apigateway/Integration",
                "lb/LoadBalancer",
                "apigateway/Deployment",
                "apigateway/RestApi",
                "apigateway/x",
                "eks/Cluster",
                "lb/TargetGroup",
                "lb/Listener"
            ],
            "requestvalidator": [
                "apigateway/Method",
                "apigateway/Resource",
                "apigateway/Integration",
                "apigateway/MethodResponse",
                "apigateway/IntegrationResponse",
                "apigateway/RestApi",
                "apigateway/Model",
                "apigateway/Deployment"
            ],
            "documentationpart": [
                "apigateway/RestApi",
                "apigateway/DocumentationVersion"
            ],
            "model": [
                "apigateway/Method",
                "apigateway/MethodResponse",
                "apigateway/Resource",
                "apigateway/RestApi",
                "apigateway/Integration",
                "apigateway/IntegrationResponse",
                "apigateway/Deployment",
                "apigateway/RequestValidator"
            ],
            "documentationversion": [
                "apigateway/DocumentationPart",
                "apigateway/Stage",
                "apigateway/RestApi"
            ]
        },
        "wafv2": {
            "webaclassociation": [
                "apigateway/Stage",
                "wafv2/WebAcl",
                "lb/LoadBalancer",
                "alb/LoadBalancer",
                "cloudwatch/LogGroup",
                "wafv2/WebAclLoggingConfiguration",
                "elasticloadbalancingv2/LoadBalancer"
            ],
            "ipset": [
                "wafv2/WebAcl",
                "ec2/Eip",
                "ec2/NatGateway",
                "wafv2/RuleGroup",
                "ec2/Vpc",
                "ecs/TaskDefinition"
            ],
            "webacl": [
                "wafv2/WebAclAssociation",
                "cloudfront/Distribution",
                "wafv2/WebAclLoggingConfiguration",
                "wafv2/IpSet",
                "wafv2/RegexPatternSet",
                "cloudwatch/MetricAlarm",
                "cloudwatch/Dashboard",
                "wafv2/RuleGroup"
            ],
            "webaclloggingconfiguration": [
                "wafv2/WebAcl",
                "cloudwatch/LogGroup",
                "wafv2/WebAclAssociation",
                "kinesis/FirehoseDeliveryStream"
            ],
            "regexpatternset": [
                "wafv2/WebAcl",
                "wafv2/RuleGroup"
            ],
            "rulegroup": [
                "wafv2/WebAcl",
                "wafv2/IpSet",
                "wafv2/RegexPatternSet"
            ]
        },
        "ssm": {
            "patchbaseline": [
                "ssm/PatchGroup"
            ],
            "parameter": [
                "ecs/TaskDefinition",
                "lambda/Function",
                "iam/RolePolicy",
                "iam/Policy",
                "kms/Key",
                "sqs/Queue",
                "dynamodb/Table",
                "rds/Instance"
            ],
            "patchgroup": [
                "ssm/PatchBaseline",
                "ec2/LaunchTemplate"
            ],
            "association": [
                "ec2/Instance",
                "ssm/Document",
                "s3/Bucket",
                "ec2/VolumeAttachment",
                "ssm/Parameter",
                "secretsmanager/Secret",
                "route53/Record"
            ],
            "activation": [
                "iam/Role"
            ],
            "maintenancewindow": [
                "ssm/MaintenanceWindowTask",
                "ssm/MaintenanceWindowTarget"
            ],
            "maintenancewindowtarget": [
                "ssm/MaintenanceWindowTask",
                "ssm/MaintenanceWindow",
                "ec2/Instance"
            ],
            "document": [
                "iam/Role",
                "s3/Bucket",
                "s3/BucketObject",
                "ssm/Association",
                "autoscaling/LifecycleHook",
                "ssm/MaintenanceWindowTask",
                "lb/LoadBalancer",
                "lambda/Function"
            ],
            "maintenancewindowtask": [
                "iam/Role",
                "ssm/MaintenanceWindow",
                "ssm/MaintenanceWindowTarget",
                "sns/Topic",
                "ssm/Document",
                "s3/Bucket",
                "route53/Record",
                "ec2/Instance"
            ],
            "resourcedatasync": [
                "s3/Bucket",
                "s3/BucketPolicy"
            ]
        },
        "efs": {
            "filesystem": [
                "efs/MountTarget",
                "efs/AccessPoint",
                "batch/JobDefinition",
                "cloudwatch/MetricAlarm",
                "ecs/TaskDefinition",
                "efs/BackupPolicy",
                "efs/FileSystemPolicy",
                "datasync/EfsLocation"
            ],
            "backuppolicy": [
                "efs/FileSystem"
            ],
            "mounttarget": [
                "efs/AccessPoint",
                "efs/FileSystem",
                "ec2/SecurityGroup",
                "ec2/Subnet",
                "cloudformation/Stack",
                "ec2/Instance",
                "ec2/RouteTableAssociation",
                "ec2/Vpc"
            ],
            "accesspoint": [
                "lambda/Function",
                "efs/MountTarget",
                "efs/FileSystem",
                "batch/JobDefinition",
                "ecs/TaskDefinition",
                "cloudformation/Stack",
                "iam/RolePolicyAttachment",
                "datasync/EfsLocation"
            ],
            "filesystempolicy": [
                "efs/FileSystem",
                "efs/AccessPoint"
            ]
        },
        "directconnect": {
            "gatewayassociation": [
                "ec2/VpnGateway",
                "directconnect/Gateway",
                "ec2/Vpc",
                "directconnect/GatewayAssociationProposal"
            ],
            "gateway": [
                "directconnect/GatewayAssociation",
                "ec2/VpnGateway"
            ],
            "connection": [
                "directconnect/PrivateVirtualInterface"
            ],
            "privatevirtualinterface": [
                "ec2/VpnGateway",
                "directconnect/Connection"
            ],
            "gatewayassociationproposal": [
                "ec2/VpnGateway",
                "directconnect/GatewayAssociation",
                "ec2/VpnGatewayAttachment"
            ]
        },
        "directoryservice": {
            "conditionalforwader": [
                "directoryservice/Directory",
                "ec2/Vpc"
            ],
            "directory": [
                "ec2/SecurityGroupRule",
                "ec2/Subnet",
                "directoryservice/LogService",
                "ec2/Vpc",
                "directoryservice/ConditionalForwader",
                "ec2/VpcDhcpOptions",
                "ec2/RouteTableAssociation",
                "fsx/WindowsFileSystem"
            ],
            "logservice": [
                "directoryservice/Directory",
                "cloudwatch/LogGroup"
            ]
        },
        "autoscaling": {
            "group": [
                "ec2/Subnet",
                "ec2/LaunchTemplate",
                "codedeploy/DeploymentGroup",
                "lb/TargetGroup",
                "cloudwatch/MetricAlarm",
                "autoscaling/Policy",
                "ec2/LaunchConfiguration",
                "autoscaling/LifecycleHook"
            ],
            "policy": [
                "cloudwatch/MetricAlarm",
                "autoscaling/Group",
                "elasticbeanstalk/Environment",
                "cloudformation/Stack",
                "ecs/Cluster",
                "ecs/Service",
                "lb/TargetGroup",
                "lb/LoadBalancer"
            ],
            "tag": [
                "eks/NodeGroup"
            ],
            "schedule": [
                "autoscaling/Group",
                "ecs/Cluster"
            ],
            "lifecyclehook": [
                "autoscaling/Group",
                "iam/Role",
                "ssm/Document",
                "eks/Addon",
                "iam/Policy",
                "iam/RolePolicyAttachment",
                "eks/Cluster",
                "sns/Topic"
            ],
            "attachment": [
                "autoscaling/Group",
                "lb/TargetGroup",
                "alb/TargetGroup",
                "eks/NodeGroup",
                "cloudformation/Stack"
            ],
            "notification": [
                "sns/Topic",
                "autoscaling/Group",
                "cloudformation/Stack",
                "lambda/Permission",
                "sns/TopicSubscription",
                "autoscaling/LifecycleHook"
            ]
        },
        "alb": {
            "targetgroupattachment": [
                "alb/TargetGroup",
                "ec2/Instance",
                "lambda/Function",
                "lambda/Permission",
                "lb/TargetGroup",
                "lambda/Alias"
            ],
            "loadbalancer": [
                "lambda/Function",
                "lb/Listener",
                "ec2/Subnet",
                "cognito/UserPool",
                "ec2/SecurityGroup",
                "alb/Listener",
                "route53/Record",
                "cloudwatch/MetricAlarm"
            ],
            "listener": [
                "alb/ListenerRule",
                "alb/LoadBalancer",
                "lb/ListenerRule",
                "alb/TargetGroup",
                "ecs/Service",
                "cloudformation/Stack",
                "lb/TargetGroup",
                "alb/ListenerCertificate"
            ],
            "targetgroup": [
                "ecs/Service",
                "alb/ListenerRule",
                "lb/ListenerRule",
                "lb/Listener",
                "ec2/Vpc",
                "cloudwatch/MetricAlarm",
                "alb/Listener",
                "codedeploy/DeploymentGroup"
            ],
            "listenerrule": [
                "alb/TargetGroup",
                "alb/Listener",
                "lb/TargetGroup",
                "cloudformation/Stack",
                "route53/Record"
            ],
            "listenercertificate": [
                "acm/Certificate",
                "lb/Listener",
                "acm/CertificateValidation",
                "alb/Listener",
                "route53/Record"
            ]
        },
        "apigatewayv2": {
            "domainname": [
                "apigatewayv2/ApiMapping",
                "route53/Record",
                "acm/CertificateValidation",
                "acm/Certificate",
                "s3/Bucket",
                "s3/BucketObject",
                "apigateway/BasePathMapping",
                "cloudformation/Stack"
            ],
            "api": [
                "apigatewayv2/Route",
                "apigatewayv2/Integration",
                "lambda/Permission",
                "apigatewayv2/Stage",
                "lambda/Function",
                "ecs/TaskDefinition",
                "apigatewayv2/ApiMapping",
                "apigatewayv2/Authorizer"
            ],
            "stage": [
                "lambda/Function",
                "apigatewayv2/Api",
                "apigatewayv2/Route",
                "apigatewayv2/Integration",
                "apigatewayv2/ApiMapping",
                "cloudwatch/LogGroup",
                "iam/Policy",
                "iam/RolePolicy"
            ],
            "integration": [
                "apigatewayv2/Route",
                "apigatewayv2/Api",
                "lambda/Function",
                "apigatewayv2/Stage",
                "apigatewayv2/IntegrationResponse",
                "apigatewayv2/VpcLink",
                "apigateway/Deployment",
                "iam/Role"
            ],
            "apimapping": [
                "apigatewayv2/Api",
                "apigatewayv2/Stage",
                "apigatewayv2/DomainName",
                "route53/Record",
                "apigateway/RestApi",
                "apigateway/Stage",
                "apigateway/DomainName"
            ],
            "route": [
                "apigatewayv2/Integration",
                "apigatewayv2/Api",
                "apigatewayv2/Authorizer",
                "apigatewayv2/Stage",
                "apigatewayv2/Deployment",
                "apigatewayv2/RouteResponse",
                "apigateway/Deployment",
                "lambda/Permission"
            ],
            "integrationresponse": [
                "apigatewayv2/Api",
                "apigatewayv2/Integration"
            ],
            "routeresponse": [
                "apigatewayv2/Api",
                "apigatewayv2/Route"
            ],
            "vpclink": [
                "ec2/Subnet",
                "apigatewayv2/Integration",
                "ec2/SecurityGroup",
                "ec2/RouteTableAssociation",
                "ec2/Vpc"
            ],
            "authorizer": [
                "apigatewayv2/Route",
                "apigatewayv2/Api",
                "cognito/UserPoolClient",
                "cognito/UserPool",
                "lambda/Permission",
                "lambda/Function",
                "iam/Role"
            ],
            "deployment": [
                "apigatewayv2/Route",
                "apigatewayv2/Api",
                "apigatewayv2/Stage"
            ]
        },
        "securityhub": {
            "account": [
                "securityhub/Member",
                "securityhub/StandardsSubscription",
                "securityhub/OrganizationAdminAccount",
                "securityhub/FindingAggregator",
                "securityhub/ProductSubscription"
            ],
            "standardssubscription": [
                "securityhub/Account"
            ],
            "productsubscription": [
                "securityhub/Account"
            ],
            "organizationadminaccount": [
                "securityhub/Member",
                "organizations/Account",
                "securityhub/Account",
                "securityhub/OrganizationConfiguration",
                "organizations/Organization"
            ],
            "findingaggregator": [
                "securityhub/Account"
            ],
            "organizationconfiguration": [
                "securityhub/Member",
                "securityhub/OrganizationAdminAccount"
            ],
            "member": [
                "securityhub/Account",
                "securityhub/OrganizationAdminAccount",
                "securityhub/OrganizationConfiguration"
            ]
        },
        "guardduty": {
            "detector": [
                "guardduty/Member",
                "guardduty/OrganizationConfiguration",
                "guardduty/OrganizationAdminAccount",
                "guardduty/PublishingDestination",
                "guardduty/Filter"
            ],
            "filter": [
                "guardduty/Detector",
                "eks/NodeGroup"
            ],
            "organizationadminaccount": [
                "organizations/Account",
                "guardduty/Detector",
                "guardduty/OrganizationConfiguration",
                "organizations/Organization"
            ],
            "member": [
                "guardduty/Detector",
                "guardduty/OrganizationConfiguration"
            ],
            "organizationconfiguration": [
                "guardduty/Member",
                "guardduty/Detector",
                "guardduty/OrganizationAdminAccount"
            ],
            "publishingdestination": [
                "s3/BucketPolicy",
                "guardduty/Detector",
                "kms/Key",
                "s3/Bucket",
                "s3/BucketV2"
            ]
        },
        "kms": {
            "key": [
                "sqs/Queue",
                "kms/Alias",
                "lambda/Function",
                "kms/Grant",
                "iam/Role",
                "sns/Topic",
                "ssm/Parameter",
                "iam/Policy"
            ],
            "alias": [
                "kms/Key",
                "iam/Policy",
                "secretsmanager/Secret",
                "iam/Role",
                "lambda/Function",
                "sqs/Queue",
                "kms/Grant",
                "ssm/Parameter"
            ],
            "grant": [
                "kms/Key",
                "iam/Role",
                "kms/Alias",
                "iam/User",
                "secretsmanager/Secret"
            ],
            "replicakey": [
                "kms/Key"
            ]
        },
        "cloudtrail": {
            "trail": [
                "s3/Bucket",
                "iam/Role",
                "cloudwatch/LogGroup",
                "s3/BucketPolicy",
                "kms/Key",
                "s3/BucketV2",
                "iam/RolePolicy",
                "organizations/Organization"
            ]
        },
        "ec2clientvpn": {
            "endpoint": [
                "ec2clientvpn/AuthorizationRule",
                "ec2clientvpn/NetworkAssociation",
                "ec2clientvpn/Route",
                "acm/Certificate",
                "cloudwatch/LogGroup",
                "ec2/SecurityGroup",
                "cloudwatch/LogStream",
                "ec2/Vpc"
            ],
            "authorizationrule": [
                "ec2clientvpn/Endpoint",
                "ec2/Vpc",
                "ec2/Subnet",
                "iam/SamlProvider",
                "cloudwatch/LogGroup",
                "cloudwatch/LogStream",
                "acm/Certificate",
                "ram/ResourceShare"
            ],
            "networkassociation": [
                "ec2clientvpn/Route",
                "ec2/Subnet",
                "ec2clientvpn/Endpoint",
                "ec2/RouteTableAssociation",
                "ec2/SecurityGroup",
                "ec2/RouteTable",
                "ec2/Route",
                "ec2/Vpc"
            ],
            "route": [
                "ec2clientvpn/Endpoint",
                "ec2clientvpn/NetworkAssociation",
                "ec2/Vpc",
                "ec2/Subnet",
                "iam/SamlProvider",
                "cloudwatch/LogGroup",
                "cloudwatch/LogStream",
                "acm/Certificate"
            ]
        },
        "cloudfront": {
            "originaccessidentity": [
                "cloudfront/Distribution",
                "s3/BucketPolicy",
                "s3/Bucket",
                "route53/Record",
                "ssm/Parameter"
            ],
            "function": [
                "cloudfront/Distribution"
            ],
            "distribution": [
                "route53/Record",
                "s3/BucketObject",
                "s3/Bucket",
                "route53/Zone",
                "acm/Certificate",
                "cloudfront/OriginAccessIdentity",
                "lambda/Function",
                "acm/CertificateValidation"
            ],
            "originrequestpolicy": [
                "cloudfront/Distribution",
                "cloudfront/CachePolicy"
            ],
            "cachepolicy": [
                "cloudfront/Distribution",
                "cloudfront/OriginRequestPolicy"
            ],
            "publickey": [
                "cloudfront/KeyGroup",
                "ecs/TaskDefinition",
                "ssm/Parameter",
                "secretsmanager/SecretVersion",
                "cloudfront/FieldLevelEncryptionProfile",
                "iam/RolePolicyAttachment",
                "appautoscaling/Target"
            ],
            "keygroup": [
                "cloudfront/Distribution",
                "cloudfront/PublicKey"
            ],
            "responseheaderspolicy": [
                "cloudfront/Distribution"
            ],
            "originaccesscontrol": [
                "cloudfront/Distribution"
            ],
            "realtimelogconfig": [
                "cloudfront/Distribution",
                "iam/Role"
            ],
            "fieldlevelencryptionprofile": [
                "cloudfront/FieldLevelEncryptionConfig",
                "ssm/Parameter",
                "cloudfront/PublicKey"
            ],
            "fieldlevelencryptionconfig": [
                "cloudfront/Distribution",
                "cloudfront/FieldLevelEncryptionProfile"
            ],
            "monitoringsubscription": [
                "cloudfront/Distribution"
            ]
        },
        "datasync": {
            "s3location": [
                "datasync/Task",
                "s3/Bucket",
                "iam/Role"
            ],
            "efslocation": [
                "datasync/Task",
                "efs/FileSystem",
                "ec2/SecurityGroup",
                "efs/MountTarget",
                "efs/AccessPoint"
            ],
            "task": [
                "datasync/EfsLocation",
                "datasync/S3Location",
                "cloudwatch/LogGroup"
            ]
        },
        "waf": {
            "ipset": [
                "waf/Rule",
                "waf/WebAcl",
                "ec2/Eip"
            ],
            "rule": [
                "waf/WebAcl",
                "waf/ByteMatchSet",
                "waf/IpSet",
                "waf/SizeConstraintSet",
                "waf/XssMatchSet",
                "waf/SqlInjectionMatchSet",
                "waf/RegexMatchSet"
            ],
            "webacl": [
                "cloudfront/Distribution",
                "waf/Rule",
                "waf/IpSet",
                "waf/RateBasedRule"
            ],
            "bytematchset": [
                "waf/Rule",
                "waf/RateBasedRule"
            ],
            "ratebasedrule": [
                "waf/WebAcl",
                "waf/ByteMatchSet"
            ],
            "sizeconstraintset": [
                "waf/Rule"
            ],
            "xssmatchset": [
                "waf/Rule"
            ],
            "sqlinjectionmatchset": [
                "waf/Rule"
            ],
            "regexpatternset": [
                "waf/RegexMatchSet"
            ],
            "regexmatchset": [
                "waf/Rule",
                "waf/RegexPatternSet"
            ]
        },
        "fsx": {
            "openzfsfilesystem": [
                "ec2/Subnet",
                "fsx/OpenZfsVolume",
                "cloudwatch/Dashboard",
                "ec2/RouteTableAssociation",
                "route53/Record",
                "ec2/SecurityGroup"
            ],
            "windowsfilesystem": [
                "ec2/SecurityGroup",
                "cloudwatch/MetricAlarm",
                "ec2/Subnet",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation",
                "fsx/Backup",
                "cloudwatch/LogGroup",
                "ec2/Vpc"
            ],
            "openzfsvolume": [
                "fsx/OpenZfsFileSystem"
            ],
            "lustrefilesystem": [
                "ec2/Subnet",
                "ec2/SecurityGroup"
            ],
            "backup": [
                "ec2/Subnet",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation",
                "ec2/Vpc",
                "ec2/Instance",
                "fsx/WindowsFileSystem"
            ]
        },
        "elasticbeanstalk": {
            "environment": [
                "ec2/Subnet",
                "ec2/RouteTableAssociation",
                "codepipeline/Pipeline",
                "elasticbeanstalk/Application",
                "ec2/SecurityGroup",
                "ec2/Vpc",
                "elasticache/ReplicationGroup",
                "iam/Role"
            ],
            "application": [
                "elasticbeanstalk/Environment",
                "codepipeline/Pipeline",
                "elasticbeanstalk/ConfigurationTemplate",
                "elasticbeanstalk/ApplicationVersion",
                "iam/Role",
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "ec2/RouteTable"
            ],
            "applicationversion": [
                "elasticbeanstalk/Environment",
                "elasticbeanstalk/Application",
                "s3/BucketObject",
                "s3/Bucket"
            ],
            "configurationtemplate": [
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "elasticbeanstalk/Environment",
                "ec2/Vpc",
                "elasticbeanstalk/Application"
            ]
        },
        "appsync": {
            "datasource": [
                "appsync/Resolver",
                "iam/Role",
                "appsync/GraphQLApi",
                "lambda/Function",
                "appsync/Function",
                "dynamodb/Table",
                "iam/RolePolicy",
                "elasticsearch/Domain"
            ],
            "resolver": [
                "appsync/DataSource",
                "appsync/GraphQLApi",
                "appsync/Function",
                "dynamodb/Table",
                "s3/Bucket",
                "lambda/Function"
            ],
            "function": [
                "appsync/Resolver",
                "appsync/DataSource",
                "appsync/GraphQLApi",
                "dynamodb/Table"
            ],
            "graphqlapi": [
                "appsync/Resolver",
                "appsync/DataSource",
                "appsync/Function",
                "appsync/ApiKey",
                "lambda/Function",
                "iam/Policy",
                "iam/Role",
                "iam/RolePolicy"
            ],
            "apikey": [
                "appsync/GraphQLApi",
                "lambda/Function",
                "s3/BucketObject",
                "ecs/TaskDefinition"
            ],
            "apicache": [
                "appsync/GraphQLApi"
            ],
            "domainname": [
                "appsync/DomainNameApiAssociation",
                "route53/Record",
                "acm/Certificate"
            ],
            "domainnameapiassociation": [
                "appsync/GraphQLApi",
                "appsync/DomainName"
            ]
        },
        "sfn": {
            "statemachine": [
                "cloudwatch/MetricAlarm",
                "iam/Role",
                "lambda/Function",
                "cloudwatch/EventTarget",
                "cloudwatch/LogGroup",
                "iam/Policy",
                "ecs/TaskDefinition",
                "iam/RolePolicy"
            ],
            "activity": [
                "sfn/StateMachine",
                "iam/Policy",
                "ecs/TaskDefinition"
            ]
        },
        "msk": {
            "cluster": [
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "ecs/TaskDefinition",
                "msk/Configuration",
                "cloudwatch/LogGroup",
                "ec2/RouteTableAssociation",
                "ssm/Parameter",
                "msk/ScramSecretAssociation"
            ],
            "configuration": [
                "msk/Cluster"
            ],
            "scramsecretassociation": [
                "secretsmanager/Secret",
                "msk/Cluster",
                "secretsmanager/SecretVersion",
                "secretsmanager/SecretPolicy"
            ]
        },
        "cloudformation": {
            "stack": [
                "efs/MountTarget",
                "ec2/Subnet",
                "ecs/Service",
                "ec2/LaunchConfiguration",
                "eks/Cluster",
                "ec2/RouteTableAssociation",
                "ecs/TaskDefinition",
                "efs/AccessPoint"
            ],
            "stackset": [
                "cloudformation/StackSetInstance",
                "iam/Role",
                "cloudformation/Stack",
                "iam/OpenIdConnectProvider"
            ],
            "stacksetinstance": [
                "cloudformation/StackSet",
                "secretsmanager/Secret",
                "organizations/OrganizationalUnit",
                "organizations/Organization"
            ]
        },
        "codecommit": {
            "repository": [
                "codebuild/Project",
                "iam/RolePolicy",
                "sagemaker/CodeRepository",
                "codepipeline/Pipeline",
                "iam/Policy",
                "ssm/Parameter"
            ]
        },
        "athena": {
            "database": [
                "s3/Bucket",
                "kinesis/FirehoseDeliveryStream",
                "glue/CatalogTable",
                "lambda/Function",
                "iam/RolePolicy",
                "ecs/TaskDefinition",
                "glue/Crawler",
                "s3/BucketV2"
            ],
            "workgroup": [
                "lambda/Function",
                "dynamodb/TableItem",
                "s3/BucketV2",
                "athena/NamedQuery",
                "s3/Bucket",
                "iam/RolePolicy",
                "iam/Policy",
                "s3/BucketPolicy"
            ],
            "namedquery": [
                "athena/Workgroup",
                "glue/CatalogDatabase",
                "s3/BucketPolicy"
            ]
        },
        "codeartifact": {
            "domain": [
                "codeartifact/Repository",
                "codeartifact/RepositoryPermissionsPolicy",
                "kms/Key",
                "codeartifact/DomainPermissions"
            ],
            "repository": [
                "codeartifact/Domain",
                "codeartifact/RepositoryPermissionsPolicy"
            ],
            "domainpermissions": [
                "codeartifact/Domain"
            ],
            "repositorypermissionspolicy": [
                "codeartifact/Domain",
                "codeartifact/Repository"
            ]
        },
        "ses": {
            "domainidentity": [
                "route53/Record",
                "ses/DomainDkim",
                "ses/IdentityNotificationTopic",
                "ses/DomainIdentityVerification",
                "ses/MailFrom",
                "ecs/TaskDefinition",
                "iam/Policy",
                "cognito/UserPool"
            ],
            "domaindkim": [
                "route53/Record",
                "ses/DomainIdentity",
                "ses/DomainIdentityVerification",
                "ses/MailFrom"
            ],
            "mailfrom": [
                "route53/Record",
                "ses/DomainIdentity",
                "ses/DomainDkim"
            ],
            "configurationset": [
                "ses/EventDestination",
                "lambda/Function",
                "cognito/UserPool",
                "ssm/Parameter"
            ],
            "template": [
                "ecs/TaskDefinition",
                "lambda/Function"
            ],
            "receiptrule": [
                "ses/ReceiptRuleSet",
                "sns/Topic",
                "s3/Bucket",
                "s3/BucketPolicy",
                "lambda/Function",
                "lambda/Permission",
                "s3/BucketV2",
                "ses/ActiveReceiptRuleSet"
            ],
            "eventdestination": [
                "ses/ConfigurationSet",
                "sns/Topic",
                "iam/Role",
                "kinesis/FirehoseDeliveryStream",
                "ses/ConfgurationSet"
            ],
            "receiptruleset": [
                "ses/ReceiptRule",
                "ses/ActiveReceiptRuleSet",
                "ses/DomainIdentityVerification",
                "lambda/Permission"
            ],
            "activereceiptruleset": [
                "ses/ReceiptRuleSet",
                "ses/ReceiptRule",
                "ses/DomainIdentityVerification"
            ],
            "domainidentityverification": [
                "route53/Record",
                "ses/DomainIdentity",
                "ses/DomainDkim",
                "ecs/TaskDefinition",
                "ses/EmailIdentity",
                "ses/ActiveReceiptRuleSet",
                "ses/ReceiptRuleSet",
                "lambda/Function"
            ],
            "identitynotificationtopic": [
                "sns/Topic",
                "ses/DomainIdentity",
                "ses/EmailIdentity"
            ],
            "emailidentity": [
                "ses/IdentityNotificationTopic",
                "ses/IdentityPolicy",
                "iam/RolePolicy",
                "cognito/UserPool",
                "iam/UserPolicyAttachment",
                "iam/UserPolicy",
                "ses/DomainIdentityVerification"
            ],
            "identitypolicy": [
                "ses/EmailIdentity"
            ],
            "confgurationset": [
                "lambda/Function",
                "ses/EventDestination"
            ]
        },
        "codedeploy": {
            "application": [
                "codedeploy/DeploymentGroup",
                "codepipeline/Pipeline",
                "iam/RolePolicy",
                "codestarnotifications/NotificationRule",
                "lambda/Function"
            ],
            "deploymentgroup": [
                "codedeploy/Application",
                "lb/TargetGroup",
                "autoscaling/Group",
                "codepipeline/Pipeline",
                "lb/Listener",
                "iam/Role",
                "ecs/Service",
                "ecs/Cluster"
            ],
            "deploymentconfig": [
                "codedeploy/DeploymentGroup",
                "iam/RolePolicy"
            ]
        },
        "codestarnotifications": {
            "notificationrule": [
                "codepipeline/Pipeline",
                "sns/Topic",
                "codedeploy/Application",
                "codebuild/Project"
            ]
        },
        "codebuild": {
            "project": [
                "codepipeline/Pipeline",
                "iam/Role",
                "s3/Bucket",
                "ec2/Subnet",
                "ec2/RouteTableAssociation",
                "route53/Record",
                "ec2/SecurityGroup",
                "ec2/Vpc"
            ],
            "webhook": [
                "codebuild/Project"
            ]
        },
        "codepipeline": {
            "pipeline": [
                "codebuild/Project",
                "codestarnotifications/NotificationRule",
                "iam/Role",
                "s3/Bucket",
                "elasticbeanstalk/Environment",
                "codestarconnections/Connection",
                "elasticbeanstalk/Application",
                "codedeploy/DeploymentGroup"
            ]
        },
        "docdb": {
            "subnetgroup": [
                "ec2/Subnet",
                "docdb/Cluster",
                "ec2/RouteTableAssociation",
                "rds/Cluster",
                "ec2/SecurityGroup",
                "ec2/RouteTable",
                "ec2/Vpc",
                "ec2/Route"
            ],
            "cluster": [
                "docdb/ClusterInstance",
                "ec2/SecurityGroupRule",
                "lambda/Function",
                "ec2/SecurityGroup",
                "ecs/TaskDefinition",
                "docdb/SubnetGroup",
                "docdb/ClusterParameterGroup",
                "secretsmanager/SecretVersion"
            ],
            "clusterinstance": [
                "docdb/Cluster",
                "ec2/Subnet"
            ],
            "clusterparametergroup": [
                "docdb/Cluster"
            ]
        },
        "cognito": {
            "userpool": [
                "lambda/Function",
                "cognito/UserPoolClient",
                "lambda/Permission",
                "cognito/UserPoolDomain",
                "ecs/TaskDefinition",
                "cognito/UserGroup",
                "iam/Policy",
                "alb/LoadBalancer"
            ],
            "userpooldomain": [
                "ecs/TaskDefinition",
                "lambda/Function",
                "cognito/UserPool",
                "lb/ListenerRule",
                "route53/Record",
                "acm/Certificate",
                "cognito/UserPoolUICustomization",
                "acm/CertificateValidation"
            ],
            "userpoolclient": [
                "lambda/Function",
                "cognito/UserPool",
                "ecs/TaskDefinition",
                "cognito/IdentityPool",
                "apigatewayv2/Authorizer",
                "ssm/Parameter",
                "cognito/IdentityPoolRoleAttachment",
                "lb/ListenerRule"
            ],
            "identitypool": [
                "cognito/IdentityPoolRoleAttachment",
                "iam/Role",
                "cognito/UserPoolClient",
                "cognito/UserPool",
                "iam/RolePolicy",
                "ecs/TaskDefinition",
                "elasticsearch/Domain",
                "s3/BucketObject"
            ],
            "identitypoolroleattachment": [
                "iam/Role",
                "cognito/IdentityPool",
                "cognito/UserPool",
                "cognito/UserPoolClient",
                "iam/RolePolicy",
                "cognito/UserGroup"
            ],
            "resourceserver": [
                "cognito/UserPoolClient",
                "cognito/UserPool",
                "apigatewayv2/Route"
            ],
            "usergroup": [
                "cognito/UserPool",
                "cognito/UserInGroup",
                "iam/Role",
                "cognito/IdentityPoolRoleAttachment",
                "cognito/UserPoolClient",
                "lambda/Function"
            ],
            "userpooluicustomization": [
                "cognito/UserPool",
                "cognito/UserPoolClient",
                "cognito/UserPoolDomain"
            ],
            "identityprovider": [
                "cognito/UserPoolClient",
                "cognito/UserPool",
                "cloudwatch/MetricAlarm"
            ],
            "user": [
                "cognito/UserInGroup",
                "cognito/UserPool",
                "secretsmanager/SecretVersion"
            ],
            "riskconfiguration": [
                "cognito/UserPool"
            ],
            "useringroup": [
                "cognito/UserPool",
                "cognito/UserGroup",
                "cognito/User"
            ]
        },
        "batch": {
            "computeenvironment": [
                "batch/JobQueue",
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "iam/Role",
                "iam/InstanceProfile",
                "ec2/LaunchTemplate",
                "iam/RolePolicyAttachment",
                "ec2/DefaultVpc"
            ],
            "jobqueue": [
                "batch/JobDefinition",
                "batch/ComputeEnvironment",
                "cloudwatch/EventTarget",
                "iam/GroupPolicy",
                "cloudwatch/EventRule",
                "secretsmanager/SecretVersion"
            ],
            "jobdefinition": [
                "iam/Role",
                "batch/JobQueue",
                "efs/FileSystem",
                "efs/AccessPoint",
                "cloudwatch/EventTarget",
                "ecr/Repository",
                "cloudwatch/LogGroup",
                "docdb/Cluster"
            ]
        },
        "organizations": {
            "organizationalunit": [
                "organizations/Account",
                "organizations/PolicyAttachment",
                "organizations/Organization",
                "cloudformation/StackSetInstance",
                "s3/Bucket"
            ],
            "account": [
                "ssoadmin/AccountAssignment",
                "ecr/RepositoryPolicy",
                "account/AlternativeContact",
                "organizations/OrganizationalUnit",
                "iam/Role",
                "iam/PolicyAttachment",
                "securityhub/OrganizationAdminAccount",
                "iam/Policy"
            ],
            "policy": [
                "organizations/PolicyAttachment",
                "iam/Role",
                "ec2/Eip",
                "organizations/Organization"
            ],
            "policyattachment": [
                "organizations/Policy",
                "organizations/OrganizationalUnit",
                "organizations/Organization",
                "organizations/Account"
            ],
            "organization": [
                "organizations/OrganizationalUnit",
                "organizations/Account",
                "organizations/PolicyAttachment",
                "s3/BucketPolicy",
                "cloudformation/StackSetInstance",
                "guardduty/OrganizationAdminAccount",
                "securityhub/OrganizationAdminAccount",
                "organizations/DelegatedAdministrator"
            ],
            "delegatedadministrator": [
                "organizations/Account",
                "accessanalyzer/Analyzer",
                "iam/ServiceLinkedRole",
                "organizations/Organization"
            ]
        },
        "ram": {
            "resourceshare": [
                "ram/ResourceAssociation",
                "ec2/Route",
                "ram/PrincipalAssociation",
                "ram/ResourceShareAccepter",
                "ec2transitgateway/VpcAttachment",
                "ec2clientvpn/Route",
                "ec2clientvpn/AuthorizationRule",
                "ec2transitgateway/VpcAttachmentAccepter"
            ],
            "principalassociation": [
                "ec2/Tag",
                "ram/ResourceShare",
                "ram/ResourceShareAccepter",
                "ec2/Route",
                "ec2transitgateway/TransitGateway",
                "organizations/Account",
                "ec2transitgateway/RouteTablePropagation",
                "ec2transitgateway/VpcAttachment"
            ],
            "resourceassociation": [
                "ec2/Tag",
                "ram/ResourceShare",
                "ec2/Subnet",
                "route53/ResolverRuleAssociation",
                "route53/ResolverRule",
                "ec2transitgateway/TransitGateway",
                "ec2/Route",
                "ec2transitgateway/RouteTablePropagation"
            ],
            "resourceshareaccepter": [
                "ram/PrincipalAssociation",
                "ram/ResourceShare",
                "ec2transitgateway/VpcAttachment"
            ]
        },
        "ec2transitgateway": {
            "transitgateway": [
                "ec2/Route",
                "ec2transitgateway/VpcAttachment",
                "ec2/RouteTable",
                "ec2transitgateway/RouteTable",
                "ram/ResourceAssociation",
                "ec2transitgateway/Route",
                "ram/PrincipalAssociation",
                "ec2/VpnConnection"
            ],
            "route": [
                "ec2transitgateway/RouteTable",
                "ec2transitgateway/VpcAttachment",
                "ec2transitgateway/PeeringAttachment",
                "ec2/VpnConnection",
                "ec2transitgateway/TransitGateway",
                "ec2/Vpc",
                "ec2/Subnet",
                "ec2transitgateway/RouteTablePropagation"
            ],
            "vpcattachment": [
                "ec2/Route",
                "ec2/Subnet",
                "ec2transitgateway/Route",
                "ec2/Vpc",
                "ec2transitgateway/RouteTablePropagation",
                "ec2/RouteTableAssociation",
                "ec2transitgateway/RouteTableAssociation",
                "ec2transitgateway/TransitGateway"
            ],
            "routetable": [
                "ec2transitgateway/Route",
                "ec2transitgateway/RouteTableAssociation",
                "ec2transitgateway/RouteTablePropagation",
                "ec2transitgateway/TransitGateway",
                "ec2transitgateway/VpcAttachment",
                "ram/ResourceShare"
            ],
            "routetableassociation": [
                "ec2transitgateway/RouteTable",
                "ec2transitgateway/VpcAttachment",
                "ec2/VpnConnection",
                "ram/PrincipalAssociation",
                "ram/ResourceAssociation",
                "ec2transitgateway/VpcAttachmentAccepter",
                "ec2transitgateway/PeeringAttachment",
                "ec2transitgateway/Route"
            ],
            "vpcattachmentaccepter": [
                "ec2transitgateway/VpcAttachment",
                "ec2transitgateway/RouteTablePropagation",
                "ec2/Subnet",
                "ec2/RouteTable",
                "ec2/RouteTableAssociation",
                "ec2transitgateway/RouteTableAssociation",
                "ec2/Vpc",
                "ram/ResourceShare"
            ],
            "routetablepropagation": [
                "ec2transitgateway/VpcAttachment",
                "ec2transitgateway/RouteTable",
                "ram/PrincipalAssociation",
                "ram/ResourceAssociation",
                "ec2transitgateway/VpcAttachmentAccepter",
                "ec2/Subnet",
                "ec2/Vpc",
                "ec2transitgateway/Route"
            ],
            "peeringattachment": [
                "ec2transitgateway/Route",
                "ec2transitgateway/TransitGateway",
                "ec2/TransitGatewayPeeringAttachmentAccepter",
                "ec2transitgateway/RouteTableAssociation"
            ]
        },
        "cur": {
            "reportdefinition": [
                "s3/Bucket"
            ]
        },
        "ssoadmin": {
            "permissionset": [
                "ssoadmin/AccountAssignment",
                "ssoadmin/ManagedPolicyAttachment",
                "ssoadmin/PermissionSetInlinePolicy",
                "ssoadmin/CustomerManagedPolicyAttachment"
            ],
            "accountassignment": [
                "ssoadmin/PermissionSet",
                "ssoadmin/PermissionSetInlinePolicy",
                "organizations/Account"
            ],
            "managedpolicyattachment": [
                "ssoadmin/PermissionSet"
            ],
            "permissionsetinlinepolicy": [
                "ssoadmin/AccountAssignment",
                "ssoadmin/PermissionSet"
            ],
            "customermanagedpolicyattachment": [
                "ssoadmin/PermissionSet"
            ]
        },
        "cfg": {
            "configurationaggregator": [
                "iam/Role"
            ],
            "recorder": [
                "cfg/Rule",
                "cfg/DeliveryChannel",
                "cfg/RecorderStatus",
                "iam/Role",
                "iam/ServiceLinkedRole",
                "cfg/ConformancePack"
            ],
            "deliverychannel": [
                "cfg/RecorderStatus",
                "cfg/Recorder",
                "s3/Bucket",
                "sns/Topic",
                "lambda/Function",
                "s3/BucketPublicAccessBlock",
                "s3/BucketPolicy",
                "kms/Key"
            ],
            "recorderstatus": [
                "cfg/DeliveryChannel",
                "cfg/Recorder"
            ],
            "conformancepack": [
                "s3/BucketPolicy",
                "cfg/Recorder"
            ],
            "rule": [
                "cfg/Recorder",
                "cloudwatch/EventRule"
            ]
        },
        "backup": {
            "vault": [
                "backup/Plan",
                "kms/Key",
                "backup/VaultNotifications",
                "backup/VaultPolicy",
                "kms/Alias",
                "backup/VaultLockConfiguration"
            ],
            "plan": [
                "backup/Selection",
                "backup/Vault"
            ],
            "selection": [
                "backup/Plan",
                "iam/Role",
                "dynamodb/Table",
                "ebs/Volume",
                "efs/FileSystem",
                "rds/Cluster",
                "rds/Instance",
                "s3/Bucket"
            ],
            "vaultlockconfiguration": [
                "backup/Vault"
            ],
            "vaultpolicy": [
                "backup/Vault",
                "organizations/Organization"
            ],
            "vaultnotifications": [
                "sns/Topic",
                "backup/Vault"
            ]
        },
        "pinpoint": {
            "app": [
                "lambda/Function",
                "ecs/TaskDefinition",
                "pinpoint/GcmChannel",
                "pinpoint/ApnsSandboxChannel",
                "pinpoint/SmsChannel",
                "iam/Policy",
                "pinpoint/ApnsChannel"
            ],
            "apnssandboxchannel": [
                "pinpoint/App"
            ],
            "gcmchannel": [
                "pinpoint/App"
            ],
            "apnschannel": [
                "pinpoint/App"
            ],
            "smschannel": [
                "pinpoint/App"
            ]
        },
        "neptune": {
            "subnetgroup": [
                "neptune/Cluster",
                "neptune/ClusterInstance",
                "ec2/Subnet",
                "ec2/RouteTableAssociation",
                "sagemaker/NotebookInstance"
            ],
            "cluster": [
                "lambda/Function",
                "neptune/ClusterInstance",
                "iam/Policy",
                "dynamodb/TableItem",
                "neptune/SubnetGroup",
                "ec2/SecurityGroup",
                "sagemaker/NotebookInstanceLifecycleConfiguration",
                "iam/Role"
            ],
            "clusterinstance": [
                "neptune/Cluster",
                "neptune/SubnetGroup",
                "lambda/Function"
            ],
            "clusterparametergroup": [
                "neptune/Cluster",
                "iam/Role"
            ],
            "eventsubscription": [
                "sns/Topic"
            ]
        },
        "iot": {
            "topicrule": [
                "lambda/Permission",
                "iam/Role",
                "lambda/Function",
                "dynamodb/Table",
                "kinesis/Stream",
                "sqs/Queue",
                "kinesis/FirehoseDeliveryStream",
                "s3/Bucket"
            ],
            "thinggroup": [
                "iot/ThingGroupMembership"
            ],
            "thingtype": [
                "iot/Thing"
            ],
            "policy": [
                "iot/PolicyAttachment"
            ],
            "certificate": [
                "iot/PolicyAttachment",
                "iot/ThingPrincipalAttachment"
            ],
            "thing": [
                "iot/ThingGroupMembership",
                "iot/ThingPrincipalAttachment",
                "iot/ThingType"
            ],
            "rolealias": [
                "iam/Role"
            ],
            "policyattachment": [
                "iot/Policy",
                "iot/Certificate"
            ],
            "thinggroupmembership": [
                "iot/Thing",
                "iot/ThingGroup"
            ],
            "thingprincipalattachment": [
                "iot/Certificate",
                "iot/Thing"
            ]
        },
        "apprunner": {
            "autoscalingconfigurationversion": [
                "apprunner/Service"
            ],
            "connection": [
                "apprunner/Service"
            ],
            "observabilityconfiguration": [
                "apprunner/Service"
            ],
            "service": [
                "apprunner/CustomDomainAssociation",
                "ecr/Repository",
                "apprunner/AutoScalingConfigurationVersion",
                "iam/Role",
                "apprunner/Connection",
                "apprunner/ObservabilityConfiguration"
            ],
            "customdomainassociation": [
                "apprunner/Service"
            ]
        },
        "glue": {
            "catalogdatabase": [
                "glue/CatalogTable",
                "glue/Crawler",
                "dynamodb/TableItem",
                "glue/Job",
                "lakeformation/Permissions",
                "athena/NamedQuery",
                "iam/Policy",
                "kinesis/FirehoseDeliveryStream"
            ],
            "catalogtable": [
                "glue/CatalogDatabase",
                "s3/Bucket",
                "kinesis/FirehoseDeliveryStream",
                "glue/Crawler",
                "glue/Job",
                "iam/RolePolicy",
                "kinesis/Stream",
                "s3/BucketObject"
            ],
            "workflow": [
                "glue/Trigger",
                "sfn/StateMachine"
            ],
            "crawler": [
                "glue/Trigger",
                "iam/Role",
                "glue/CatalogDatabase",
                "s3/Bucket",
                "glue/SecurityConfiguration",
                "glue/Classifier",
                "glue/Connection",
                "sqs/Queue"
            ],
            "trigger": [
                "glue/Job",
                "glue/Workflow",
                "glue/Crawler"
            ],
            "connection": [
                "glue/Job",
                "glue/Crawler",
                "ec2/SecurityGroup",
                "ec2/Subnet",
                "redshift/Cluster",
                "ec2/Vpc",
                "rds/Instance",
                "rds/Cluster"
            ],
            "job": [
                "iam/Role",
                "s3/Bucket",
                "glue/Trigger",
                "glue/SecurityConfiguration",
                "glue/Connection",
                "cloudwatch/EventTarget",
                "glue/CatalogDatabase",
                "s3/BucketObject"
            ],
            "securityconfiguration": [
                "glue/Job",
                "glue/Crawler",
                "kms/Key"
            ],
            "datacatalogencryptionsettings": [
                "kms/Key"
            ],
            "classifier": [
                "glue/Crawler"
            ]
        },
        "elasticsearch": {
            "domain": [
                "lambda/Function",
                "iam/Policy",
                "elasticsearch/DomainPolicy",
                "ec2/SecurityGroup",
                "cloudwatch/MetricAlarm",
                "kinesis/FirehoseDeliveryStream",
                "dynamodb/TableItem",
                "ec2/Subnet"
            ],
            "domainpolicy": [
                "elasticsearch/Domain",
                "iam/Role",
                "ec2/NatGateway",
                "ec2/Vpc"
            ]
        },
        "codestarconnections": {
            "connection": [
                "codepipeline/Pipeline",
                "iam/Policy",
                "iam/RolePolicy"
            ]
        },
        "mwaa": {
            "environment": [
                "s3/Bucket",
                "iam/Role",
                "s3/BucketObject",
                "ec2/SecurityGroup",
                "ec2/Subnet",
                "ec2/RouteTableAssociation"
            ]
        },
        "inspector": {
            "assessmenttarget": [
                "inspector/AssessmentTemplate"
            ],
            "assessmenttemplate": [
                "cloudwatch/EventTarget",
                "inspector/AssessmentTarget"
            ]
        },
        "ebs": {
            "encryptionbydefault": [
                "eks/Cluster",
                "ebs/DefaultKmsKey"
            ],
            "volume": [
                "ec2/VolumeAttachment",
                "cloudwatch/MetricAlarm",
                "iam/RolePolicy",
                "backup/Selection",
                "ec2/Subnet",
                "ec2/Instance",
                "organizations/Account"
            ],
            "defaultkmskey": [
                "ebs/EncryptionByDefault",
                "kms/Key"
            ],
            "snapshotcopy": [
                "kms/Key"
            ]
        },
        "globalaccelerator": {
            "accelerator": [
                "globalaccelerator/Listener",
                "route53/Record"
            ],
            "listener": [
                "globalaccelerator/EndpointGroup",
                "globalaccelerator/Accelerator",
                "lb/LoadBalancer",
                "lb/Listener"
            ],
            "endpointgroup": [
                "globalaccelerator/Listener",
                "lb/LoadBalancer",
                "alb/LoadBalancer"
            ]
        },
        "redshift": {
            "parametergroup": [
                "redshift/Cluster"
            ],
            "subnetgroup": [
                "ec2/Subnet",
                "redshift/Cluster",
                "ec2/RouteTableAssociation",
                "ec2/RouteTable",
                "ec2/Route",
                "ec2/Vpc"
            ],
            "cluster": [
                "glue/Job",
                "glue/Connection",
                "redshift/SubnetGroup",
                "ecs/TaskDefinition",
                "ec2/SecurityGroup",
                "redshift/ParameterGroup",
                "ec2/SecurityGroupRule",
                "iam/Role"
            ],
            "scheduledaction": [
                "iam/Role"
            ],
            "clusteriamroles": [
                "iam/Role",
                "redshift/Cluster"
            ],
            "snapshotschedule": [
                "redshift/SnapshotScheduleAssociation"
            ],
            "snapshotscheduleassociation": [
                "redshift/Cluster",
                "redshift/SnapshotSchedule"
            ]
        },
        "mq": {
            "broker": [
                "ecs/TaskDefinition",
                "ec2/Subnet",
                "lb/TargetGroupAttachment",
                "lambda/EventSourceMapping",
                "ec2/SecurityGroup",
                "ec2/RouteTableAssociation",
                "mq/Configuration",
                "secretsmanager/SecretVersion"
            ],
            "configuration": [
                "mq/Broker"
            ]
        },
        "wafregional": {
            "bytematchset": [
                "wafregional/Rule"
            ],
            "ipset": [
                "wafregional/Rule"
            ],
            "rule": [
                "wafregional/WebAcl",
                "wafregional/ByteMatchSet",
                "wafregional/IpSet"
            ],
            "webacl": [
                "wafregional/Rule",
                "wafregional/WebAclAssociation",
                "wafregional/RateBasedRule"
            ],
            "webaclassociation": [
                "wafregional/WebAcl",
                "apigateway/Stage"
            ],
            "ratebasedrule": [
                "wafregional/WebAcl"
            ]
        },
        "networkfirewall": {
            "rulegroup": [
                "networkfirewall/FirewallPolicy",
                "ec2/NatGateway"
            ],
            "firewallpolicy": [
                "networkfirewall/Firewall",
                "networkfirewall/RuleGroup"
            ],
            "firewall": [
                "ec2/Route",
                "ec2/RouteTableAssociation",
                "ec2/Subnet",
                "networkfirewall/LoggingConfiguration",
                "ec2/Vpc",
                "networkfirewall/FirewallPolicy"
            ],
            "loggingconfiguration": [
                "cloudwatch/LogGroup",
                "networkfirewall/Firewall"
            ]
        },
        "synthetics": {
            "canary": [
                "s3/Bucket",
                "iam/Role",
                "s3/BucketObjectv2"
            ]
        },
        "amp": {
            "workspace": [
                "iam/RolePolicy"
            ]
        },
        "sagemaker": {
            "featuregroup": [
                "iam/Role"
            ],
            "notebookinstancelifecycleconfiguration": [
                "sagemaker/NotebookInstance",
                "s3/BucketObject",
                "emr/Cluster",
                "cloudformation/Stack",
                "neptune/Cluster"
            ],
            "notebookinstance": [
                "ec2/SecurityGroupRule",
                "ec2/SecurityGroup",
                "iam/Role",
                "ec2/Subnet",
                "sagemaker/NotebookInstanceLifecycleConfiguration",
                "kms/Key",
                "sagemaker/CodeRepository",
                "ec2/RouteTableAssociation"
            ],
            "model": [
                "sagemaker/EndpointConfiguration",
                "iam/Role"
            ],
            "endpointconfiguration": [
                "sagemaker/Model",
                "sagemaker/Endpoint"
            ],
            "endpoint": [
                "sagemaker/EndpointConfiguration"
            ],
            "coderepository": [
                "sagemaker/NotebookInstance",
                "codecommit/Repository",
                "secretsmanager/Secret",
                "secretsmanager/SecretVersion"
            ],
            "domain": [
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "sagemaker/UserProfile",
                "iam/Role",
                "ec2/Vpc"
            ],
            "userprofile": [
                "iam/Role",
                "sagemaker/Domain"
            ]
        },
        "transfer": {
            "server": [
                "transfer/User",
                "transfer/SshKey",
                "transfer/Tag",
                "route53/Record",
                "ec2/Subnet",
                "ec2/Eip",
                "iam/Role",
                "ec2/Tag"
            ],
            "user": [
                "transfer/SshKey",
                "iam/Role",
                "transfer/Server",
                "s3/Bucket",
                "s3/BucketV2",
                "kms/Key"
            ],
            "sshkey": [
                "transfer/Server",
                "transfer/User"
            ],
            "tag": [
                "transfer/Server",
                "route53/Zone"
            ]
        },
        "elasticloadbalancingv2": {
            "targetgroup": [
                "elasticloadbalancingv2/ListenerRule",
                "cloudwatch/MetricAlarm",
                "elasticloadbalancingv2/Listener",
                "autoscaling/Group",
                "ecs/Service",
                "cloudwatch/Dashboard",
                "ec2/Vpc",
                "ecs/TaskDefinition"
            ],
            "loadbalancer": [
                "cloudwatch/MetricAlarm",
                "elasticloadbalancingv2/Listener",
                "route53/Record",
                "ec2/Subnet",
                "ec2/SecurityGroup",
                "wafv2/WebAclAssociation",
                "cloudwatch/Dashboard",
                "ecs/TaskDefinition"
            ],
            "listener": [
                "elasticloadbalancingv2/ListenerRule",
                "elasticloadbalancingv2/LoadBalancer",
                "elasticloadbalancingv2/TargetGroup",
                "acm/Certificate",
                "ecs/Service",
                "acm/CertificateValidation",
                "lb/ListenerCertificate",
                "ecs/TaskDefinition"
            ],
            "listenerrule": [
                "elasticloadbalancingv2/Listener",
                "elasticloadbalancingv2/TargetGroup",
                "ecs/Service"
            ],
            "listenercertificate": [
                "lb/Listener",
                "acm/Certificate",
                "acm/CertificateValidation"
            ]
        },
        "elastictranscoder": {
            "pipeline": [
                "iam/GroupPolicy",
                "s3/Bucket",
                "iam/Role",
                "ecs/TaskDefinition",
                "sns/Topic"
            ]
        },
        "budgets": {
            "budget": [
                "sns/Topic",
                "sns/TopicPolicy"
            ]
        },
        "dms": {
            "endpoint": [
                "dms/ReplicationTask",
                "iam/Role",
                "iam/RolePolicyAttachment",
                "s3/Bucket",
                "secretsmanager/SecretVersion",
                "secretsmanager/Secret",
                "ec2/VpcEndpoint",
                "redshift/Cluster"
            ],
            "replicationinstance": [
                "dms/ReplicationTask",
                "cloudwatch/MetricAlarm",
                "ec2/SecurityGroup",
                "dms/ReplicationSubnetGroup",
                "dms/EventSubscription",
                "secretsmanager/SecretVersion",
                "cloudwatch/Dashboard",
                "iam/Role"
            ],
            "replicationtask": [
                "dms/Endpoint",
                "dms/ReplicationInstance",
                "dms/EventSubscription",
                "cloudwatch/Dashboard",
                "cloudwatch/MetricAlarm",
                "iam/RolePolicy"
            ],
            "eventsubscription": [
                "dms/ReplicationTask",
                "sns/Topic",
                "dms/ReplicationInstance"
            ],
            "replicationsubnetgroup": [
                "ec2/Subnet",
                "dms/ReplicationInstance",
                "iam/Role",
                "iam/RolePolicyAttachment",
                "ec2/RouteTableAssociation"
            ],
            "certificate": [
                "dms/Endpoint"
            ]
        },
        "acmpca": {
            "certificateauthoritycertificate": [
                "acmpca/Certificate",
                "acmpca/CertificateAuthority"
            ],
            "certificate": [
                "acmpca/CertificateAuthorityCertificate",
                "acmpca/CertificateAuthority"
            ],
            "certificateauthority": [
                "acm/Certificate",
                "acmpca/Certificate",
                "acmpca/CertificateAuthorityCertificate"
            ]
        },
        "appstream": {
            "fleet": [
                "appstream/FleetStackAssociation",
                "iam/Role",
                "ec2/SecurityGroup"
            ],
            "stack": [
                "appstream/FleetStackAssociation"
            ],
            "fleetstackassociation": [
                "appstream/Fleet",
                "appstream/Stack"
            ]
        },
        "account": {
            "alternativecontact": [
                "organizations/Account"
            ]
        },
        "fms": {
            "adminaccount": [
                "organizations/Account"
            ]
        },
        "memorydb": {
            "subnetgroup": [
                "ec2/Subnet",
                "memorydb/Cluster",
                "ec2/RouteTable",
                "ec2/NetworkAcl",
                "ec2/Vpc",
                "ec2/RouteTableAssociation"
            ],
            "cluster": [
                "ecs/TaskDefinition",
                "lambda/Function",
                "ec2/SecurityGroup",
                "memorydb/SubnetGroup",
                "memorydb/ParameterGroup"
            ],
            "parametergroup": [
                "memorydb/Cluster"
            ]
        },
        "lightsail": {
            "staticip": [
                "lightsail/StaticIpAttachment"
            ],
            "instance": [
                "lightsail/StaticIpAttachment",
                "lightsail/InstancePublicPorts",
                "lightsail/KeyPair"
            ],
            "keypair": [
                "lightsail/Instance"
            ],
            "staticipattachment": [
                "lightsail/StaticIp",
                "lightsail/Instance"
            ],
            "instancepublicports": [
                "lightsail/Instance"
            ]
        },
        "transcribe": {
            "vocabulary": [
                "s3/BucketV2",
                "s3/BucketObjectv2"
            ]
        },
        "timestreamwrite": {
            "database": [
                "lambda/Function",
                "timestreamwrite/Table",
                "ecs/TaskDefinition"
            ],
            "table": [
                "lambda/Function",
                "timestreamwrite/Database",
                "ecs/TaskDefinition"
            ]
        },
        "cloudhsmv2": {
            "cluster": [
                "ec2/Subnet",
                "ec2/SecurityGroupRule",
                "ec2/Instance"
            ]
        },
        "opensearch": {
            "domain": [
                "cloudwatch/MetricAlarm",
                "lambda/Function",
                "ecs/TaskDefinition",
                "ec2/Subnet",
                "cloudwatch/LogGroup",
                "ec2/SecurityGroup",
                "iam/RolePolicy",
                "cloudwatch/EventTarget"
            ],
            "domainpolicy": [
                "iam/Role",
                "opensearch/Domain"
            ]
        },
        "lakeformation": {
            "resource": [
                "s3/Bucket",
                "lakeformation/Permissions",
                "iam/Role"
            ],
            "permissions": [
                "glue/CatalogDatabase",
                "iam/Role",
                "s3/Bucket",
                "glue/CatalogTable",
                "lakeformation/Resource"
            ]
        },
        "dax": {
            "subnetgroup": [
                "ec2/Subnet",
                "dax/Cluster",
                "ec2/RouteTableAssociation"
            ],
            "parametergroup": [
                "dax/Cluster"
            ],
            "cluster": [
                "ecs/TaskDefinition",
                "iam/Role",
                "lambda/Function",
                "ec2/SecurityGroup",
                "dax/SubnetGroup",
                "dax/ParameterGroup",
                "sns/Topic"
            ]
        },
        "schemas": {
            "discoverer": [
                "cloudwatch/EventBus"
            ]
        },
        "location": {
            "placeindex": [
                "lambda/Function",
                "iam/Policy",
                "iam/RolePolicy"
            ],
            "map": [
                "iam/RolePolicy"
            ]
        },
        "grafana": {
            "workspace": [
                "grafana/WorkspaceSamlConfiguration",
                "s3/Bucket",
                "iam/Role"
            ],
            "workspacesamlconfiguration": [
                "grafana/Workspace"
            ]
        },
        "mskconnect": {
            "customplugin": [
                "s3/BucketV2",
                "s3/BucketObjectv2"
            ],
            "connector": [
                "iam/Role",
                "cloudwatch/LogGroup",
                "iam/AccessKey"
            ]
        },
        "qldb": {
            "ledger": [
                "lambda/Function",
                "iam/Policy"
            ]
        },
        "dlm": {
            "lifecyclepolicy": [
                "iam/Role"
            ]
        },
        "accessanalyzer": {
            "analyzer": [
                "organizations/DelegatedAdministrator"
            ]
        },
        "workspaces": {
            "directory": [
                "directoryservice/Directory"
            ]
        },
        "elb": {
            "loadbalancer": [
                "cloudwatch/MetricAlarm",
                "autoscaling/Group"
            ],
            "loadbalancerpolicy": [
                "elb/ListenerPolicy"
            ],
            "listenerpolicy": [
                "elb/LoadBalancerPolicy"
            ]
        },
        "appconfig": {
            "application": [
                "appconfig/Environment",
                "appconfig/ConfigurationProfile",
                "ssm/Parameter",
                "appconfig/HostedConfigurationVersion",
                "appconfig/Deployment"
            ],
            "environment": [
                "ssm/Parameter",
                "appconfig/Deployment",
                "appconfig/Application"
            ],
            "configurationprofile": [
                "ssm/Parameter",
                "appconfig/HostedConfigurationVersion",
                "appconfig/Application"
            ],
            "hostedconfigurationversion": [
                "appconfig/Deployment",
                "appconfig/Application",
                "appconfig/ConfigurationProfile"
            ],
            "deployment": [
                "appconfig/Application",
                "appconfig/Environment",
                "appconfig/HostedConfigurationVersion"
            ]
        },
        "redshiftdata": {
            "statement": [
                "iam/Role",
                "redshift/Cluster"
            ]
        },
        "imagebuilder": {
            "component": [
                "imagebuilder/ImageRecipe"
            ],
            "distributionconfiguration": [
                "imagebuilder/Image"
            ],
            "imagerecipe": [
                "imagebuilder/Image",
                "imagebuilder/Component"
            ],
            "infrastructureconfiguration": [
                "imagebuilder/Image",
                "iam/InstanceProfile"
            ],
            "image": [
                "ec2/LaunchTemplate",
                "imagebuilder/DistributionConfiguration",
                "imagebuilder/ImageRecipe",
                "imagebuilder/InfrastructureConfiguration"
            ]
        },
        "emr": {
            "cluster": [
                "ec2/SecurityGroupRule",
                "ec2/SecurityGroup",
                "lb/TargetGroupAttachment",
                "emr/ManagedScalingPolicy",
                "ec2/Tag",
                "sagemaker/NotebookInstanceLifecycleConfiguration",
                "iam/InstanceProfile",
                "sagemaker/NotebookInstance"
            ],
            "instancegroup": [
                "emr/Cluster"
            ],
            "managedscalingpolicy": [
                "sagemaker/NotebookInstance",
                "emr/Cluster"
            ],
            "securityconfiguration": [
                "emr/Cluster",
                "sagemaker/NotebookInstance",
                "kms/Key",
                "s3/BucketObject"
            ]
        },
        "amplify": {
            "app": [
                "amplify/Branch",
                "amplify/DomainAssociation",
                "iam/Role"
            ],
            "branch": [
                "amplify/DomainAssociation",
                "lambda/Function",
                "amplify/App",
                "apigateway/Deployment",
                "apigatewayv2/Stage",
                "apigateway/ApiKey"
            ],
            "domainassociation": [
                "amplify/App",
                "amplify/Branch"
            ]
        },
        "shield": {
            "protection": [
                "ec2/Eip",
                "lb/LoadBalancer"
            ]
        },
        "mediaconvert": {
            "queue": [
                "lambda/Function"
            ]
        },
        "applicationloadbalancing": {
            "listenercertificate": [
                "acm/Certificate",
                "lb/Listener"
            ]
        },
        "licensemanager": {
            "licenseconfiguration": [
                "licensemanager/Association"
            ],
            "association": [
                "licensemanager/LicenseConfiguration"
            ]
        },
        "storagegateway": {
            "gateway": [
                "ecs/TaskDefinition",
                "cloudwatch/EventRule",
                "storagegateway/SmbFileShare"
            ],
            "smbfileshare": [
                "s3/Bucket",
                "iam/Role",
                "kms/Key",
                "storagegateway/Gateway"
            ]
        },
        "elasticloadbalancing": {
            "loadbalancer": [
                "ec2/Instance",
                "ec2/Subnet",
                "ec2/SecurityGroup"
            ]
        }
    },
    "azure": {
        "core": {
            "resourcegroup": [
                "monitoring/MetricAlert",
                "sql/FirewallRule",
                "loganalytics/DataSourceWindowsPerformanceCounter",
                "network/NetworkSecurityRule",
                "servicebus/Subscription",
                "automation/RunBook",
                "servicebus/Queue",
                "monitoring/ScheduledQueryRulesAlert"
            ],
            "templatedeployment": [
                "storage/Blob",
                "core/ResourceGroup",
                "network/Subnet",
                "appservice/AppService",
                "appservice/Slot",
                "appservice/Plan",
                "compute/VirtualMachine",
                "compute/Extension"
            ],
            "subscriptionpolicyassignment": [
                "authorization/Assignment",
                "core/SubscriptionPolicyRemediation",
                "policy/Definition"
            ],
            "subscriptionpolicyremediation": [
                "authorization/Assignment",
                "core/SubscriptionPolicyAssignment"
            ]
        },
        "network": {
            "natgateway": [
                "network/SubnetNatGatewayAssociation",
                "network/NatGatewayPublicIpAssociation",
                "core/ResourceGroup",
                "authorization/Assignment"
            ],
            "networksecuritygroup": [
                "network/NetworkSecurityRule",
                "network/SubnetNetworkSecurityGroupAssociation",
                "core/ResourceGroup",
                "network/NetworkInterfaceSecurityGroupAssociation",
                "network/NetworkInterface",
                "core/TemplateDeployment",
                "network/PublicIp"
            ],
            "publicip": [
                "core/ResourceGroup",
                "network/NetworkInterface",
                "network/ApplicationGateway",
                "containerservice/KubernetesCluster",
                "network/VirtualNetworkGateway",
                "network/NatGatewayPublicIpAssociation",
                "trafficmanager/Endpoint",
                "dns/ARecord"
            ],
            "virtualnetwork": [
                "network/Subnet",
                "network/VirtualNetworkPeering",
                "dns/Zone",
                "core/ResourceGroup",
                "privatedns/ZoneVirtualNetworkLink",
                "core/TemplateDeployment",
                "managementresource/ManangementLock",
                "siterecovery/ReplicatedVM"
            ],
            "natgatewaypublicipassociation": [
                "network/NatGateway",
                "network/PublicIp"
            ],
            "subnet": [
                "core/TemplateDeployment",
                "network/NetworkInterface",
                "managementresource/ManangementLock",
                "appservice/SlotVirtualNetworkSwiftConnection",
                "network/VirtualNetwork",
                "appservice/VirtualNetworkSwiftConnection",
                "core/ResourceGroup",
                "network/SubnetNetworkSecurityGroupAssociation"
            ],
            "subnetnetworksecuritygroupassociation": [
                "network/NetworkSecurityGroup",
                "network/Subnet",
                "core/TemplateDeployment"
            ],
            "profile": [
                "core/ResourceGroup",
                "network/Subnet",
                "containerservice/Group"
            ],
            "subnetnatgatewayassociation": [
                "network/Subnet",
                "network/NatGateway"
            ],
            "applicationgateway": [
                "network/NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation",
                "dns/ARecord",
                "monitoring/DiagnosticSetting",
                "network/PublicIp",
                "core/ResourceGroup",
                "network/Subnet",
                "network/NetworkInterface",
                "authorization/Assignment"
            ],
            "subnetroutetableassociation": [
                "network/Subnet",
                "network/RouteTable",
                "core/TemplateDeployment"
            ],
            "publicipprefix": [
                "network/PublicIp",
                "core/ResourceGroup"
            ],
            "routetable": [
                "network/Route",
                "network/SubnetRouteTableAssociation",
                "policy/Assignment",
                "core/ResourceGroup",
                "network/VirtualNetwork",
                "core/TemplateDeployment"
            ],
            "firewall": [
                "network/Route",
                "network/FirewallApplicationRuleCollection",
                "network/FirewallNatRuleCollection",
                "network/FirewallNetworkRuleCollection",
                "network/Subnet",
                "core/ResourceGroup",
                "monitoring/DiagnosticSetting",
                "containerservice/KubernetesCluster"
            ],
            "route": [
                "network/RouteTable",
                "core/ResourceGroup",
                "network/Firewall",
                "network/PublicIp"
            ],
            "firewallapplicationrulecollection": [
                "network/Firewall"
            ],
            "firewallnatrulecollection": [
                "network/PublicIp",
                "network/Firewall"
            ],
            "firewallnetworkrulecollection": [
                "network/Firewall"
            ],
            "networkinterface": [
                "compute/VirtualMachine",
                "core/ResourceGroup",
                "network/Subnet",
                "compute/WindowsVirtualMachine",
                "compute/LinuxVirtualMachine",
                "network/NetworkInterfaceSecurityGroupAssociation",
                "network/PublicIp",
                "dns/ARecord"
            ],
            "networkinterfacebackendaddresspoolassociation": [
                "network/NetworkInterface",
                "lb/BackendAddressPool",
                "compute/VirtualMachine",
                "compute/Extension"
            ],
            "virtualnetworkpeering": [
                "managementresource/ManangementLock",
                "network/VirtualNetwork",
                "core/ResourceGroup"
            ],
            "localnetworkgateway": [
                "network/VirtualNetworkGatewayConnection",
                "core/ResourceGroup"
            ],
            "networksecurityrule": [
                "network/NetworkSecurityGroup",
                "core/ResourceGroup",
                "network/ApplicationSecurityGroup"
            ],
            "expressroutecircuitauthorization": [
                "network/VirtualNetworkGatewayConnection"
            ],
            "virtualnetworkgateway": [
                "network/VirtualNetworkGatewayConnection",
                "core/ResourceGroup",
                "network/PublicIp",
                "network/Subnet"
            ],
            "virtualnetworkgatewayconnection": [
                "core/ResourceGroup",
                "network/VirtualNetworkGateway",
                "network/ExpressRouteCircuitAuthorization",
                "network/LocalNetworkGateway"
            ],
            "networkinterfacesecuritygroupassociation": [
                "network/NetworkSecurityGroup",
                "network/NetworkInterface"
            ],
            "networkinterfaceapplicationgatewaybackendaddresspoolassociation": [
                "network/ApplicationGateway",
                "compute/WindowsVirtualMachine"
            ],
            "applicationsecuritygroup": [
                "core/ResourceGroup",
                "network/NetworkSecurityRule",
                "network/NetworkInterfaceApplicationSecurityGroupAssociation"
            ],
            "networkinterfaceapplicationsecuritygroupassociation": [
                "network/NetworkInterface",
                "network/ApplicationSecurityGroup",
                "compute/VirtualMachine"
            ],
            "trafficmanagerprofile": [
                "network/TrafficManagerAzureEndpoint",
                "network/TrafficManagerEndpoint",
                "dns/CNameRecord",
                "core/ResourceGroup"
            ],
            "trafficmanagerazureendpoint": [
                "network/TrafficManagerProfile"
            ],
            "trafficmanagerendpoint": [
                "core/ResourceGroup",
                "network/TrafficManagerProfile"
            ]
        },
        "containerservice": {
            "registry": [
                "authorization/Assignment",
                "keyvault/Secret",
                "core/ResourceGroup",
                "appservice/FunctionApp"
            ],
            "kubernetescluster": [
                "authorization/Assignment",
                "containerservice/KubernetesClusterNodePool",
                "core/ResourceGroup",
                "authorization/UserAssignedIdentity",
                "network/PublicIp",
                "network/Subnet",
                "operationalinsights/AnalyticsWorkspace",
                "monitoring/DiagnosticSetting"
            ],
            "kubernetesclusternodepool": [
                "containerservice/KubernetesCluster",
                "network/Subnet"
            ],
            "group": [
                "core/ResourceGroup",
                "network/Profile"
            ]
        },
        "storage": {
            "account": [
                "storage/Blob",
                "storage/Container",
                "appservice/FunctionApp",
                "authorization/Assignment",
                "keyvault/Secret",
                "compute/Extension",
                "appservice/AppService",
                "storage/Table"
            ],
            "container": [
                "storage/Blob",
                "storage/Account",
                "appservice/AppService",
                "compute/Extension",
                "appservice/FunctionApp",
                "authorization/Assignment",
                "automation/Module",
                "keyvault/Secret"
            ],
            "blob": [
                "core/TemplateDeployment",
                "storage/Account",
                "storage/Container",
                "compute/Extension",
                "appservice/FunctionApp",
                "keyvault/AccessPolicy",
                "datafactory/IntegrationRuntimeSelfHosted",
                "automation/Module"
            ],
            "share": [
                "storage/Account",
                "core/TemplateDeployment",
                "appservice/AppService"
            ],
            "datalakegen2filesystem": [
                "storage/DataLakeGen2Path",
                "privatelink/Endpoint",
                "privatedns/ARecord",
                "synapse/Workspace",
                "storage/Account"
            ],
            "datalakegen2path": [
                "storage/DataLakeGen2Filesystem"
            ],
            "managementpolicy": [
                "storage/Account"
            ],
            "queue": [
                "storage/Account",
                "appservice/FunctionApp",
                "eventgrid/EventSubscription",
                "storage/Blob",
                "appservice/AppService"
            ],
            "accountnetworkrules": [
                "storage/Account"
            ],
            "encryptionscope": [
                "storage/Account",
                "keyvault/Key"
            ],
            "customermanagedkey": [
                "storage/Account",
                "keyvault/AccessPolicy",
                "keyvault/Key"
            ],
            "table": [
                "storage/Account",
                "appservice/FunctionApp",
                "storage/Blob"
            ],
            "zipblob": [
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "storage/Account",
                "storage/Container"
            ]
        },
        "eventgrid": {
            "topic": [
                "appservice/FunctionApp",
                "eventgrid/EventSubscription",
                "core/ResourceGroup",
                "keyvault/Secret"
            ],
            "eventsubscription": [
                "servicebus/Namespace",
                "servicebus/Queue",
                "eventgrid/Topic",
                "storage/Account",
                "storage/Container",
                "appservice/FunctionApp",
                "storage/Queue",
                "iot/IoTHub"
            ]
        },
        "servicebus": {
            "namespace": [
                "servicebus/Subscription",
                "servicebus/Queue",
                "servicebus/SubscriptionRule",
                "servicebus/Topic",
                "authorization/Assignment",
                "servicebus/QueueAuthorizationRule",
                "appservice/FunctionApp",
                "keyvault/Secret"
            ],
            "queue": [
                "servicebus/Subscription",
                "servicebus/QueueAuthorizationRule",
                "servicebus/Namespace",
                "core/ResourceGroup",
                "keyvault/Secret",
                "eventgrid/EventSubscription",
                "monitoring/AutoscaleSetting"
            ],
            "topic": [
                "servicebus/Subscription",
                "servicebus/SubscriptionRule",
                "servicebus/TopicAuthorizationRule",
                "servicebus/Namespace",
                "core/ResourceGroup",
                "monitoring/MetricAlert",
                "appservice/FunctionApp"
            ],
            "subscription": [
                "servicebus/SubscriptionRule",
                "servicebus/Topic",
                "core/ResourceGroup",
                "servicebus/Namespace",
                "servicebus/Queue"
            ],
            "subscriptionrule": [
                "servicebus/Topic",
                "servicebus/Namespace",
                "core/ResourceGroup",
                "servicebus/Subscription"
            ],
            "queueauthorizationrule": [
                "keyvault/Secret",
                "servicebus/Queue",
                "servicebus/Namespace",
                "core/ResourceGroup"
            ],
            "namespaceauthorizationrule": [
                "core/ResourceGroup",
                "servicebus/Namespace",
                "appservice/AppService",
                "appservice/FunctionApp",
                "keyvault/Secret"
            ],
            "topicauthorizationrule": [
                "servicebus/Topic",
                "keyvault/Secret",
                "core/ResourceGroup",
                "servicebus/Namespace"
            ],
            "namespacedisasterrecoveryconfig": [
                "servicebus/Namespace"
            ],
            "namespacenetworkruleset": [
                "servicebus/Namespace"
            ]
        },
        "appservice": {
            "plan": [
                "appservice/AppService",
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "core/TemplateDeployment",
                "monitoring/AutoscaleSetting",
                "appinsights/Insights",
                "keyvault/AccessPolicy",
                "appservice/FunctionAppSlot"
            ],
            "functionapp": [
                "storage/Account",
                "appservice/Plan",
                "keyvault/Secret",
                "keyvault/AccessPolicy",
                "core/ResourceGroup",
                "appinsights/Insights",
                "authorization/Assignment",
                "storage/Blob"
            ],
            "functionappslot": [
                "storage/Account",
                "appservice/Plan",
                "appservice/FunctionApp"
            ],
            "appservice": [
                "authorization/Assignment",
                "keyvault/AccessPolicy",
                "keyvault/Secret",
                "appservice/Plan",
                "appservice/Slot",
                "appservice/SlotVirtualNetworkSwiftConnection",
                "core/TemplateDeployment",
                "core/ResourceGroup"
            ],
            "virtualnetworkswiftconnection": [
                "network/Subnet",
                "appservice/AppService",
                "appservice/FunctionApp"
            ],
            "certificatebinding": [
                "appservice/CustomHostnameBinding",
                "appservice/ManagedCertificate"
            ],
            "customhostnamebinding": [
                "core/ResourceGroup",
                "appservice/AppService",
                "appservice/Certificate",
                "dns/CNameRecord",
                "appservice/ManagedCertificate",
                "appservice/CertificateBinding",
                "dns/TxtRecord"
            ],
            "certificate": [
                "appservice/CustomHostnameBinding",
                "core/ResourceGroup"
            ],
            "slot": [
                "appservice/SlotVirtualNetworkSwiftConnection",
                "core/TemplateDeployment",
                "appservice/AppService",
                "keyvault/AccessPolicy",
                "keyvault/KeyVault",
                "appinsights/Insights"
            ],
            "slotvirtualnetworkswiftconnection": [
                "network/Subnet",
                "appservice/AppService",
                "appservice/Slot"
            ],
            "managedcertificate": [
                "appservice/CertificateBinding",
                "appservice/CustomHostnameBinding"
            ]
        },
        "appinsights": {
            "insights": [
                "appservice/FunctionApp",
                "appservice/AppService",
                "core/ResourceGroup",
                "appinsights/ApiKey",
                "appservice/Plan",
                "appinsights/WebTest",
                "keyvault/Secret",
                "monitoring/ScheduledQueryRulesAlert"
            ],
            "webtest": [
                "appinsights/Insights",
                "core/ResourceGroup"
            ],
            "apikey": [
                "appservice/FunctionApp",
                "appinsights/Insights",
                "keyvault/Secret"
            ]
        },
        "eventhub": {
            "eventhubnamespace": [
                "eventhub/AuthorizationRule",
                "eventhub/EventHub",
                "eventhub/ConsumerGroup",
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "authorization/Assignment",
                "network/Subnet",
                "appservice/AppService"
            ],
            "eventhub": [
                "eventhub/AuthorizationRule",
                "eventhub/ConsumerGroup",
                "eventhub/EventHubNamespace",
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "eventhub/EventHubAuthorizationRule",
                "storage/Account",
                "storage/Blob"
            ],
            "consumergroup": [
                "eventhub/EventHub",
                "eventhub/AuthorizationRule",
                "eventhub/EventHubNamespace",
                "core/ResourceGroup",
                "storage/Blob"
            ],
            "authorizationrule": [
                "keyvault/Secret",
                "eventhub/EventHub",
                "eventhub/EventHubNamespace",
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "eventhub/ConsumerGroup",
                "streamanalytics/StreamInputEventHub",
                "apimanagement/Logger"
            ],
            "eventhubnamespaceauthorizationrule": [
                "eventhub/EventHubNamespace"
            ],
            "eventhubnamespacedisasterrecoveryconfig": [
                "eventhub/EventHubNamespace"
            ],
            "namespaceauthorizationrule": [
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "servicebus/Namespace"
            ],
            "eventhubauthorizationrule": [
                "appservice/FunctionApp",
                "eventhub/EventHub",
                "core/ResourceGroup",
                "eventhub/EventHubNamespace"
            ],
            "namespace": [
                "keyvault/Secret",
                "core/ResourceGroup"
            ]
        },
        "dns": {
            "txtrecord": [
                "dns/CNameRecord",
                "dns/Zone",
                "core/ResourceGroup",
                "appservice/CustomHostnameBinding"
            ],
            "cnamerecord": [
                "appservice/AppService",
                "dns/TxtRecord",
                "appservice/CustomHostnameBinding",
                "core/ResourceGroup",
                "dns/Zone",
                "trafficmanager/Profile",
                "network/TrafficManagerProfile"
            ],
            "arecord": [
                "network/NetworkInterface",
                "core/ResourceGroup",
                "network/ApplicationGateway",
                "dns/Zone",
                "network/PublicIp"
            ],
            "zone": [
                "dns/TxtRecord",
                "dns/CNameRecord",
                "network/VirtualNetwork",
                "dns/ARecord",
                "core/ResourceGroup",
                "dns/NsRecord",
                "managementresource/ManangementLock",
                "dns/SrvRecord"
            ],
            "nsrecord": [
                "dns/Zone"
            ],
            "ptrrecord": [
                "core/ResourceGroup",
                "dns/Zone"
            ],
            "mxrecord": [
                "core/ResourceGroup",
                "dns/Zone"
            ],
            "srvrecord": [
                "core/ResourceGroup",
                "dns/Zone"
            ]
        },
        "keyvault": {
            "accesspolicy": [
                "keyvault/Secret",
                "keyvault/KeyVault",
                "storage/Blob",
                "appservice/AppService",
                "appservice/FunctionApp",
                "msi/UserAssignedIdentity",
                "authorization/UserAssignedIdentity",
                "core/ResourceGroup"
            ],
            "secret": [
                "keyvault/KeyVault",
                "keyvault/AccessPolicy",
                "appservice/AppService",
                "appservice/FunctionApp",
                "storage/Account",
                "servicebus/QueueAuthorizationRule",
                "sql/SqlServer",
                "eventhub/AuthorizationRule"
            ],
            "keyvault": [
                "keyvault/Secret",
                "keyvault/AccessPolicy",
                "automation/JobSchedule",
                "authorization/Assignment",
                "appservice/AppService",
                "core/ResourceGroup",
                "appservice/FunctionApp",
                "keyvault/Certificate"
            ],
            "key": [
                "keyvault/KeyVault",
                "automation/DscConfiguration",
                "storage/CustomerManagedKey",
                "keyvault/AccessPolicy",
                "storage/EncryptionScope",
                "appservice/AppService",
                "storage/Account"
            ],
            "certificate": [
                "keyvault/KeyVault",
                "keyvault/Secret",
                "keyvault/AccessPolicy",
                "servicefabric/Cluster",
                "core/TemplateDeployment",
                "network/ApplicationGateway"
            ]
        },
        "cosmosdb": {
            "account": [
                "appservice/FunctionApp",
                "cosmosdb/MongoCollection",
                "cosmosdb/Table",
                "cosmosdb/SqlDatabase",
                "core/ResourceGroup",
                "appservice/AppService",
                "privatelink/Endpoint",
                "storage/Blob"
            ],
            "sqldatabase": [
                "cosmosdb/SqlContainer",
                "cosmosdb/Account",
                "core/ResourceGroup"
            ],
            "sqlcontainer": [
                "cosmosdb/SqlDatabase",
                "core/ResourceGroup",
                "appservice/FunctionApp",
                "cosmosdb/Account"
            ],
            "mongodatabase": [
                "cosmosdb/MongoCollection",
                "appservice/AppService",
                "core/ResourceGroup",
                "cosmosdb/Account"
            ],
            "mongocollection": [
                "core/ResourceGroup",
                "cosmosdb/Account",
                "cosmosdb/MongoDatabase"
            ],
            "table": [
                "cosmosdb/Account"
            ],
            "gremlindatabase": [
                "cosmosdb/GremlinGraph",
                "appservice/FunctionApp",
                "cosmosdb/Account"
            ],
            "gremlingraph": [
                "appservice/FunctionApp",
                "cosmosdb/GremlinDatabase"
            ]
        },
        "privatelink": {
            "endpoint": [
                "privatedns/ARecord",
                "core/ResourceGroup",
                "network/Subnet",
                "storage/Account",
                "synapse/Workspace",
                "keyvault/KeyVault",
                "storage/Container",
                "storage/DataLakeGen2Filesystem"
            ]
        },
        "apimanagement": {
            "service": [
                "apimanagement/User",
                "apimanagement/Product",
                "keyvault/AccessPolicy",
                "core/ResourceGroup",
                "authorization/Assignment",
                "apimanagement/IdentityProviderAadb2c",
                "apimanagement/Policy",
                "appservice/AppService"
            ],
            "product": [
                "apimanagement/ProductApi",
                "apimanagement/Subscription",
                "apimanagement/ProductPolicy",
                "apimanagement/Service",
                "apimanagement/Api",
                "core/ResourceGroup",
                "apimanagement/ProductGroup"
            ],
            "api": [
                "apimanagement/ApiOperation",
                "apimanagement/ProductApi",
                "apimanagement/ApiOperationPolicy",
                "apimanagement/ApiPolicy",
                "apimanagement/Product",
                "appservice/FunctionApp",
                "apimanagement/ApiVersionSet",
                "core/ResourceGroup"
            ],
            "apioperation": [
                "apimanagement/Api",
                "apimanagement/ApiOperationPolicy",
                "core/ResourceGroup"
            ],
            "productapi": [
                "apimanagement/Api",
                "apimanagement/Product"
            ],
            "apioperationpolicy": [
                "apimanagement/ApiOperation",
                "apimanagement/Api"
            ],
            "subscription": [
                "apimanagement/Product",
                "apimanagement/User",
                "keyvault/Secret",
                "keyvault/KeyVault"
            ],
            "logger": [
                "apimanagement/Diagnostic",
                "core/ResourceGroup",
                "appinsights/Insights",
                "eventhub/EventHubNamespace",
                "eventhub/AuthorizationRule",
                "apimanagement/Service"
            ],
            "identityprovideraadb2c": [
                "core/ResourceGroup",
                "apimanagement/Service"
            ],
            "policy": [
                "apimanagement/Service"
            ],
            "diagnostic": [
                "core/ResourceGroup",
                "apimanagement/Logger"
            ],
            "certificate": [
                "apimanagement/NamedValue"
            ],
            "apiversionset": [
                "apimanagement/Api",
                "apimanagement/Service"
            ],
            "user": [
                "apimanagement/Service",
                "apimanagement/Subscription"
            ],
            "namedvalue": [
                "apimanagement/Certificate"
            ],
            "apipolicy": [
                "apimanagement/Api",
                "apimanagement/Backend"
            ],
            "productgroup": [
                "apimanagement/Product"
            ],
            "productpolicy": [
                "core/ResourceGroup",
                "apimanagement/Product"
            ],
            "backend": [
                "apimanagement/ApiPolicy",
                "appservice/FunctionApp",
                "core/ResourceGroup"
            ]
        },
        "compute": {
            "virtualmachine": [
                "compute/Extension",
                "monitoring/ScheduledQueryRulesAlert",
                "backup/ProtectedVM",
                "monitoring/MetricAlert",
                "network/NetworkInterface",
                "core/ResourceGroup",
                "core/TemplateDeployment",
                "storage/Account"
            ],
            "extension": [
                "compute/VirtualMachine",
                "storage/Blob",
                "storage/Account",
                "core/TemplateDeployment",
                "operationalinsights/AnalyticsWorkspace",
                "storage/Container",
                "automation/Account",
                "automation/DscConfiguration"
            ],
            "windowsvirtualmachine": [
                "compute/ManagedDisk",
                "compute/DataDiskAttachment",
                "network/NetworkInterface",
                "core/ResourceGroup",
                "compute/Extension",
                "network/NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation",
                "compute/AvailabilitySet",
                "dataprotection/BackupInstanceDisk"
            ],
            "manageddisk": [
                "compute/DataDiskAttachment",
                "core/ResourceGroup",
                "compute/WindowsVirtualMachine",
                "compute/VirtualMachine"
            ],
            "datadiskattachment": [
                "compute/ManagedDisk",
                "compute/WindowsVirtualMachine",
                "compute/VirtualMachine",
                "core/TemplateDeployment"
            ],
            "linuxvirtualmachine": [
                "compute/Extension",
                "network/NetworkInterface",
                "network/PublicIp",
                "core/ResourceGroup"
            ],
            "availabilityset": [
                "compute/VirtualMachine",
                "core/ResourceGroup",
                "compute/WindowsVirtualMachine"
            ],
            "bastionhost": [
                "monitoring/DiagnosticSetting",
                "core/ResourceGroup",
                "network/PublicIp",
                "network/Subnet"
            ],
            "sharedimagegallery": [
                "compute/SharedImageVersion",
                "compute/SharedImage",
                "core/ResourceGroup"
            ],
            "sharedimage": [
                "compute/SharedImageVersion",
                "core/ResourceGroup",
                "compute/SharedImageGallery"
            ],
            "sharedimageversion": [
                "core/ResourceGroup",
                "compute/SharedImageGallery",
                "compute/SharedImage"
            ]
        },
        "sql": {
            "sqlserver": [
                "sql/FirewallRule",
                "sql/Database",
                "appservice/AppService",
                "keyvault/Secret",
                "sql/ActiveDirectoryAdministrator",
                "core/ResourceGroup",
                "sql/VirtualNetworkRule",
                "appservice/FunctionApp"
            ],
            "firewallrule": [
                "sql/SqlServer",
                "core/ResourceGroup",
                "containerservice/KubernetesCluster"
            ],
            "activedirectoryadministrator": [
                "sql/SqlServer",
                "core/ResourceGroup"
            ],
            "database": [
                "monitoring/MetricAlert",
                "appservice/AppService",
                "sql/SqlServer",
                "core/ResourceGroup",
                "sql/FailoverGroup",
                "keyvault/Secret",
                "appservice/FunctionApp",
                "mssql/ElasticPool"
            ],
            "failovergroup": [
                "sql/Database",
                "sql/SqlServer",
                "mssql/ElasticPool",
                "core/ResourceGroup"
            ],
            "virtualnetworkrule": [
                "sql/SqlServer",
                "core/ResourceGroup",
                "network/Subnet"
            ],
            "elasticpool": [
                "core/ResourceGroup",
                "sql/SqlServer"
            ]
        },
        "cognitive": {
            "account": [
                "core/ResourceGroup",
                "keyvault/Secret",
                "privatelink/Endpoint"
            ]
        },
        "search": {
            "service": [
                "authorization/Assignment",
                "keyvault/Secret",
                "core/ResourceGroup",
                "appservice/AppService",
                "appservice/FunctionApp"
            ]
        },
        "mssql": {
            "elasticpool": [
                "sql/Database",
                "sql/SqlServer",
                "monitoring/MetricAlert",
                "core/ResourceGroup",
                "sql/FailoverGroup"
            ],
            "server": [
                "mssql/Database",
                "mssql/FirewallRule",
                "mssql/ServerExtendedAuditingPolicy",
                "mssql/VirtualNetworkRule",
                "keyvault/Secret",
                "core/ResourceGroup"
            ],
            "firewallrule": [
                "mssql/Server"
            ],
            "serverextendedauditingpolicy": [
                "mssql/Server"
            ],
            "virtualnetworkrule": [
                "sql/SqlServer",
                "mssql/Server"
            ],
            "database": [
                "mssql/DatabaseExtendedAuditingPolicy",
                "keyvault/Secret",
                "mssql/Server"
            ],
            "databaseextendedauditingpolicy": [
                "mssql/Database"
            ]
        },
        "authorization": {
            "assignment": [
                "storage/Account",
                "appservice/AppService",
                "authorization/UserAssignedIdentity",
                "core/ResourceGroup",
                "containerservice/KubernetesCluster",
                "datafactory/Factory",
                "core/SubscriptionPolicyRemediation",
                "servicebus/Namespace"
            ],
            "userassignedidentity": [
                "authorization/Assignment",
                "keyvault/AccessPolicy",
                "appservice/FunctionApp",
                "core/ResourceGroup",
                "containerservice/KubernetesCluster",
                "keyvault/Secret",
                "keyvault/KeyVault",
                "appservice/AppService"
            ],
            "roledefinition": [
                "authorization/Assignment",
                "core/ResourceGroup",
                "network/Subnet"
            ]
        },
        "redis": {
            "cache": [
                "redis/FirewallRule",
                "appservice/AppService",
                "monitoring/MetricAlert",
                "core/ResourceGroup",
                "keyvault/Secret",
                "appservice/FunctionApp",
                "redis/LinkedServer"
            ],
            "firewallrule": [
                "redis/Cache",
                "core/ResourceGroup",
                "containerservice/KubernetesCluster"
            ],
            "linkedserver": [
                "redis/Cache",
                "core/ResourceGroup"
            ]
        },
        "datafactory": {
            "factory": [
                "authorization/Assignment",
                "keyvault/AccessPolicy",
                "appservice/AppService",
                "core/ResourceGroup",
                "monitoring/MetricAlert",
                "monitoring/DiagnosticSetting",
                "datafactory/IntegrationRuntimeSelfHosted",
                "appservice/FunctionApp"
            ],
            "integrationruntimeselfhosted": [
                "storage/Blob",
                "storage/Account",
                "core/ResourceGroup",
                "authorization/Assignment",
                "datafactory/Factory"
            ]
        },
        "securitycenter": {
            "advancedthreatprotection": [
                "storage/Account"
            ]
        },
        "monitoring": {
            "diagnosticsetting": [
                "operationalinsights/AnalyticsWorkspace",
                "network/ApplicationGateway",
                "keyvault/KeyVault",
                "datafactory/Factory",
                "containerservice/KubernetesCluster",
                "storage/Account",
                "core/ResourceGroup",
                "frontdoor/Frontdoor"
            ],
            "metricalert": [
                "core/ResourceGroup",
                "monitoring/ActionGroup",
                "sql/Database",
                "compute/VirtualMachine",
                "servicebus/Topic",
                "appservice/AppService",
                "servicebus/Namespace",
                "redis/Cache"
            ],
            "actiongroup": [
                "monitoring/MetricAlert",
                "monitoring/ScheduledQueryRulesAlert",
                "core/ResourceGroup",
                "appservice/Plan",
                "appservice/FunctionApp"
            ],
            "autoscalesetting": [
                "appservice/Plan",
                "core/ResourceGroup",
                "servicebus/Queue",
                "servicebus/Namespace"
            ],
            "scheduledqueryrulesalert": [
                "monitoring/ActionGroup",
                "core/ResourceGroup",
                "compute/VirtualMachine",
                "operationalinsights/AnalyticsWorkspace",
                "appinsights/Insights",
                "appservice/Plan"
            ]
        },
        "policy": {
            "assignment": [
                "core/ResourceGroup",
                "authorization/Assignment",
                "network/RouteTable",
                "policy/PolicySetDefinition"
            ],
            "definition": [
                "policy/PolicySetDefinition",
                "core/SubscriptionPolicyAssignment"
            ],
            "policysetdefinition": [
                "policy/Definition",
                "policy/Assignment"
            ]
        },
        "privatedns": {
            "zone": [
                "privatedns/ZoneVirtualNetworkLink",
                "core/ResourceGroup",
                "privatedns/ARecord",
                "privatedns/CnameRecord",
                "network/VirtualNetwork",
                "privatelink/Endpoint"
            ],
            "zonevirtualnetworklink": [
                "privatedns/Zone",
                "core/ResourceGroup",
                "network/VirtualNetwork"
            ],
            "arecord": [
                "privatelink/Endpoint",
                "privatedns/Zone",
                "keyvault/AccessPolicy",
                "storage/Account",
                "synapse/Workspace",
                "core/ResourceGroup",
                "storage/Container",
                "storage/DataLakeGen2Filesystem"
            ],
            "cnamerecord": [
                "privatedns/Zone"
            ]
        },
        "postgresql": {
            "server": [
                "postgresql/FirewallRule",
                "postgresql/Configuration",
                "postgresql/Database",
                "postgresql/VirtualNetworkRule",
                "core/ResourceGroup",
                "keyvault/KeyVault",
                "containerservice/KubernetesCluster"
            ],
            "firewallrule": [
                "core/ResourceGroup",
                "postgresql/Server",
                "postgresql/Database"
            ],
            "database": [
                "core/ResourceGroup",
                "postgresql/Server",
                "keyvault/Secret",
                "postgresql/FirewallRule"
            ],
            "configuration": [
                "postgresql/Server",
                "core/ResourceGroup"
            ],
            "virtualnetworkrule": [
                "postgresql/Server",
                "core/ResourceGroup",
                "network/VirtualNetwork",
                "network/Subnet"
            ],
            "flexibleserverconfiguration": [
                "postgresql/FlexibleServer"
            ],
            "flexibleserver": [
                "postgresql/FlexibleServerConfiguration",
                "keyvault/Secret"
            ]
        },
        "waf": {
            "policy": [
                "network/ApplicationGateway",
                "core/ResourceGroup",
                "network/PublicIp",
                "network/VirtualNetwork"
            ]
        },
        "operationalinsights": {
            "analyticsworkspace": [
                "loganalytics/DataSourceWindowsPerformanceCounter",
                "monitoring/ScheduledQueryRulesAlert",
                "compute/Extension",
                "monitoring/DiagnosticSetting",
                "loganalytics/DataSourceWindowsEvent",
                "operationalinsights/AnalyticsSolution",
                "loganalytics/LinkedService",
                "core/ResourceGroup"
            ],
            "analyticssolution": [
                "core/ResourceGroup",
                "operationalinsights/AnalyticsWorkspace"
            ]
        },
        "synapse": {
            "workspace": [
                "synapse/FirewallRule",
                "authorization/Assignment",
                "privatelink/Endpoint",
                "privatedns/ARecord",
                "keyvault/AccessPolicy",
                "keyvault/Secret",
                "synapse/SqlPool",
                "core/ResourceGroup"
            ],
            "firewallrule": [
                "synapse/Workspace"
            ],
            "sqlpool": [
                "synapse/Workspace"
            ]
        },
        "iot": {
            "iothub": [
                "monitoring/MetricAlert",
                "iot/IotHubDps",
                "appservice/Plan",
                "appservice/FunctionApp",
                "eventgrid/EventSubscription",
                "core/ResourceGroup",
                "storage/Account",
                "iot/SharedAccessPolicy"
            ],
            "iothubdps": [
                "iot/DpsSharedAccessPolicy",
                "core/ResourceGroup",
                "iot/IoTHub"
            ],
            "dpssharedaccesspolicy": [
                "core/ResourceGroup",
                "iot/IotHubDps"
            ],
            "sharedaccesspolicy": [
                "iot/IoTHub"
            ]
        },
        "lb": {
            "loadbalancer": [
                "lb/Rule",
                "lb/Probe",
                "lb/BackendAddressPool",
                "lb/NatPool",
                "core/ResourceGroup",
                "network/PublicIp",
                "network/Subnet",
                "monitoring/MetricAlert"
            ],
            "probe": [
                "lb/Rule",
                "lb/LoadBalancer",
                "core/ResourceGroup"
            ],
            "backendaddresspool": [
                "lb/Rule",
                "network/NetworkInterfaceBackendAddressPoolAssociation",
                "lb/LoadBalancer",
                "core/TemplateDeployment",
                "core/ResourceGroup"
            ],
            "rule": [
                "lb/LoadBalancer",
                "lb/Probe",
                "lb/BackendAddressPool",
                "core/ResourceGroup"
            ],
            "natpool": [
                "core/ResourceGroup",
                "lb/LoadBalancer"
            ]
        },
        "management": {
            "lock": [
                "containerservice/KubernetesCluster",
                "storage/Account"
            ]
        },
        "frontdoor": {
            "firewallpolicy": [
                "frontdoor/Frontdoor"
            ],
            "frontdoor": [
                "monitoring/DiagnosticSetting",
                "monitoring/MetricAlert",
                "network/PublicIp",
                "frontdoor/FirewallPolicy",
                "core/ResourceGroup"
            ]
        },
        "dataprotection": {
            "backupvault": [
                "authorization/Assignment",
                "dataprotection/BackupInstanceDisk",
                "dataprotection/BackupPolicyBlobStorage",
                "dataprotection/BackupPolicyDisk",
                "dataprotection/BackupInstanceBlogStorage"
            ],
            "backuppolicyblobstorage": [
                "dataprotection/BackupInstanceBlogStorage",
                "dataprotection/BackupVault"
            ],
            "backuppolicydisk": [
                "dataprotection/BackupInstanceDisk",
                "dataprotection/BackupVault"
            ],
            "backupinstanceblogstorage": [
                "dataprotection/BackupVault",
                "dataprotection/BackupPolicyBlobStorage"
            ],
            "backupinstancedisk": [
                "dataprotection/BackupVault",
                "dataprotection/BackupPolicyDisk",
                "compute/WindowsVirtualMachine"
            ]
        },
        "devtest": {
            "globalvmshutdownschedule": [
                "compute/WindowsVirtualMachine"
            ]
        },
        "maps": {
            "account": [
                "keyvault/Secret",
                "core/ResourceGroup"
            ]
        },
        "signalr": {
            "service": [
                "keyvault/Secret",
                "core/ResourceGroup",
                "privatelink/Endpoint",
                "appservice/FunctionApp"
            ]
        },
        "machinelearning": {
            "workspace": [
                "authorization/Assignment",
                "keyvault/AccessPolicy",
                "core/ResourceGroup",
                "storage/Account",
                "appinsights/Insights",
                "keyvault/KeyVault"
            ]
        },
        "servicefabric": {
            "cluster": [
                "core/TemplateDeployment",
                "core/ResourceGroup",
                "storage/Account",
                "keyvault/Certificate"
            ]
        },
        "mysql": {
            "server": [
                "mysql/FirewallRule",
                "mysql/Database",
                "core/ResourceGroup",
                "mysql/VirtualNetworkRule"
            ],
            "database": [
                "core/ResourceGroup",
                "mysql/Server"
            ],
            "firewallrule": [
                "core/ResourceGroup",
                "mysql/Server"
            ],
            "virtualnetworkrule": [
                "core/ResourceGroup",
                "network/Subnet",
                "mysql/Server"
            ]
        },
        "cdn": {
            "profile": [
                "cdn/Endpoint",
                "core/ResourceGroup",
                "storage/Account"
            ],
            "endpoint": [
                "appservice/FunctionApp",
                "cdn/Profile",
                "core/ResourceGroup",
                "storage/Account",
                "appservice/AppService"
            ]
        },
        "recoveryservices": {
            "vault": [
                "backup/ProtectedVM",
                "backup/PolicyVM",
                "core/ResourceGroup",
                "siterecovery/ReplicatedVM",
                "siterecovery/Fabric",
                "siterecovery/ProtectionContainer",
                "siterecovery/NetworkMapping",
                "siterecovery/ReplicationPolicy"
            ]
        },
        "automation": {
            "account": [
                "automation/RunBook",
                "automation/JobSchedule",
                "automation/Schedule",
                "compute/Extension",
                "automation/StringVariable",
                "automation/Module",
                "automation/DscConfiguration",
                "automation/DscNodeConfiguration"
            ],
            "module": [
                "automation/DscConfiguration",
                "automation/DscNodeConfiguration",
                "core/ResourceGroup",
                "automation/Account",
                "storage/Account",
                "storage/Container",
                "storage/Blob"
            ],
            "stringvariable": [
                "core/ResourceGroup",
                "automation/Account"
            ],
            "schedule": [
                "automation/JobSchedule",
                "automation/RunBook",
                "core/ResourceGroup",
                "automation/Account"
            ],
            "credential": [
                "core/ResourceGroup",
                "automation/Account"
            ],
            "runbook": [
                "automation/JobSchedule",
                "core/ResourceGroup",
                "automation/Account",
                "automation/Schedule",
                "storage/Blob"
            ],
            "jobschedule": [
                "core/ResourceGroup",
                "automation/Account",
                "automation/Schedule",
                "automation/RunBook",
                "keyvault/KeyVault",
                "storage/Account"
            ],
            "dscconfiguration": [
                "compute/Extension",
                "automation/DscNodeConfiguration",
                "core/ResourceGroup",
                "automation/Account",
                "automation/Module",
                "core/TemplateDeployment",
                "keyvault/Key"
            ],
            "dscnodeconfiguration": [
                "compute/Extension",
                "core/ResourceGroup",
                "automation/Account",
                "automation/DscConfiguration",
                "automation/Module"
            ]
        },
        "appconfiguration": {
            "configurationstore": [
                "appservice/FunctionApp",
                "appservice/AppService",
                "authorization/Assignment",
                "core/ResourceGroup",
                "keyvault/Secret",
                "apimanagement/Api"
            ]
        },
        "streamanalytics": {
            "job": [
                "streamanalytics/StreamInputEventHub",
                "core/ResourceGroup"
            ],
            "streaminputeventhub": [
                "eventhub/AuthorizationRule",
                "core/ResourceGroup",
                "eventhub/EventHubNamespace",
                "eventhub/EventHub",
                "streamanalytics/Job"
            ]
        },
        "databricks": {
            "workspace": [
                "core/ResourceGroup"
            ]
        },
        "loganalytics": {
            "dataexportrule": [
                "storage/Account"
            ],
            "datasourcewindowsperformancecounter": [
                "core/ResourceGroup",
                "operationalinsights/AnalyticsWorkspace"
            ],
            "datasourcewindowsevent": [
                "core/ResourceGroup",
                "operationalinsights/AnalyticsWorkspace"
            ],
            "linkedservice": [
                "core/ResourceGroup",
                "operationalinsights/AnalyticsWorkspace",
                "automation/Account",
                "core/TemplateDeployment"
            ]
        },
        "batch": {
            "account": [
                "core/ResourceGroup"
            ]
        },
        "bot": {
            "channeldirectline": [
                "keyvault/Secret"
            ]
        },
        "backup": {
            "policyvm": [
                "backup/ProtectedVM",
                "recoveryservices/Vault",
                "core/ResourceGroup"
            ],
            "protectedvm": [
                "backup/PolicyVM",
                "recoveryservices/Vault",
                "compute/VirtualMachine",
                "core/ResourceGroup"
            ],
            "policyfileshare": [
                "backup/ProtectedFileShare",
                "recoveryservices/Vault"
            ],
            "protectedfileshare": [
                "recoveryservices/Vault",
                "backup/PolicyFileShare"
            ]
        },
        "logicapps": {
            "workflow": [
                "logicapps/TriggerRecurrence",
                "logicapps/ActionHttp",
                "core/ResourceGroup"
            ],
            "triggerrecurrence": [
                "logicapps/Workflow"
            ],
            "actionhttp": [
                "appservice/AppService",
                "logicapps/Workflow"
            ]
        },
        "siterecovery": {
            "replicationpolicy": [
                "siterecovery/ReplicatedVM",
                "siterecovery/ProtectionContainerMapping",
                "recoveryservices/Vault",
                "core/ResourceGroup"
            ],
            "fabric": [
                "siterecovery/ReplicatedVM",
                "siterecovery/NetworkMapping",
                "siterecovery/ProtectionContainer",
                "siterecovery/ProtectionContainerMapping",
                "recoveryservices/Vault",
                "core/ResourceGroup"
            ],
            "protectioncontainer": [
                "siterecovery/ReplicatedVM",
                "siterecovery/ProtectionContainerMapping",
                "recoveryservices/Vault",
                "siterecovery/Fabric",
                "core/ResourceGroup"
            ],
            "networkmapping": [
                "siterecovery/Fabric",
                "recoveryservices/Vault",
                "core/ResourceGroup",
                "network/VirtualNetwork"
            ],
            "protectioncontainermapping": [
                "siterecovery/ProtectionContainer",
                "recoveryservices/Vault",
                "siterecovery/ReplicationPolicy",
                "siterecovery/Fabric",
                "core/ResourceGroup"
            ],
            "replicatedvm": [
                "siterecovery/Fabric",
                "siterecovery/ProtectionContainer",
                "core/ResourceGroup",
                "network/VirtualNetwork",
                "recoveryservices/Vault",
                "siterecovery/ReplicationPolicy",
                "network/Subnet"
            ]
        },
        "role": {
            "definition": [
                "role/Assignment",
                "core/ResourceGroup",
                "msi/UserAssignedIdentity"
            ],
            "assignment": [
                "msi/UserAssignedIdentity",
                "core/ResourceGroup",
                "appservice/FunctionApp",
                "role/Definition",
                "network/Subnet",
                "storage/Account",
                "sql/SqlServer",
                "ad/ServicePrincipal"
            ]
        },
        "msi": {
            "userassignedidentity": [
                "role/Assignment",
                "keyvault/AccessPolicy",
                "compute/VirtualMachine",
                "core/ResourceGroup",
                "role/Definition",
                "appservice/FunctionApp"
            ]
        },
        "managementresource": {
            "manangementlock": [
                "network/VirtualNetworkPeering",
                "network/Subnet",
                "network/VirtualNetwork",
                "dns/Zone"
            ]
        },
        "ad": {
            "application": [
                "ad/ServicePrincipal"
            ],
            "serviceprincipal": [
                "ad/ServicePrincipalPassword",
                "role/Assignment",
                "ad/Application",
                "keyvault/KeyVault",
                "containerservice/KubernetesCluster"
            ],
            "serviceprincipalpassword": [
                "ad/ServicePrincipal"
            ]
        },
        "trafficmanager": {
            "profile": [
                "trafficmanager/Endpoint",
                "dns/CNameRecord",
                "core/ResourceGroup"
            ],
            "endpoint": [
                "core/ResourceGroup",
                "network/PublicIp",
                "trafficmanager/Profile"
            ]
        }
    },
    "azure-native": {
        "managedidentity": {
            "userassignedidentity": [
                "authorization/RoleAssignment",
                "web/WebApp",
                "web/WebAppSlot",
                "resources/ResourceGroup",
                "keyvault/Vault",
                "containerservice/ManagedCluster",
                "containerservice/ManagedCluster",
                "appconfiguration/KeyValue"
            ]
        },
        "sql": {
            "server": [
                "sql/VirtualNetworkRule",
                "sql/FirewallRule",
                "sql/ServerBlobAuditingPolicy",
                "resources/ResourceGroup",
                "network/PrivateEndpoint",
                "sql/Database"
            ],
            "database": [
                "resources/ResourceGroup",
                "sql/Server"
            ],
            "extendedserverblobauditingpolicy": [
                "sql/Server",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "storage/StorageAccount"
            ],
            "firewallrule": [
                "resources/ResourceGroup",
                "sql/Server"
            ],
            "elasticpool": [
                "sql/Database",
                "sql/Server",
                "resources/ResourceGroup",
                "insights/MetricAlert"
            ],
            "backupshorttermretentionpolicy": [
                "sql/Server",
                "sql/Database"
            ],
            "longtermretentionpolicy": [
                "sql/Server",
                "sql/Database"
            ],
            "virtualnetworkrule": [
                "resources/ResourceGroup",
                "network/VirtualNetwork",
                "sql/Server"
            ],
            "serverazureadadministrator": [
                "sql/Server",
                "resources/ResourceGroup"
            ],
            "failovergroup": [
                "sql/Server",
                "keyvault/Secret",
                "sql/Database",
                "resources/ResourceGroup",
                "eventgrid/SystemTopicEventSubscription"
            ],
            "serversecurityalertpolicy": [
                "sql/ServerVulnerabilityAssessment",
                "sql/Server",
                "resources/ResourceGroup"
            ],
            "serverblobauditingpolicy": [
                "resources/ResourceGroup",
                "sql/Server"
            ],
            "servervulnerabilityassessment": [
                "sql/Server",
                "sql/ServerSecurityAlertPolicy",
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "storage/BlobContainer"
            ],
            "extendeddatabaseblobauditingpolicy": [
                "resources/ResourceGroup"
            ]
        },
        "operationalinsights": {
            "workspace": [
                "insights/DiagnosticSetting",
                "insights/DiagnosticSetting",
                "resources/ResourceGroup",
                "insights/Component",
                "insights/DiagnosticSetting",
                "web/WebApp",
                "insights/ScheduledQueryRule",
                "containerinstance/ContainerGroup"
            ],
            "savedsearch": [
                "operationalinsights/Workspace",
                "resources/ResourceGroup"
            ],
            "dataexport": [
                "operationalinsights/Workspace",
                "storage/StorageAccount",
                "resources/ResourceGroup"
            ],
            "linkedservice": [
                "operationalinsights/Workspace",
                "resources/ResourceGroup",
                "automation/AutomationAccount"
            ]
        },
        "servicebus": {
            "namespace": [
                "servicebus/NamespaceAuthorizationRule",
                "app/ContainerApp",
                "resources/ResourceGroup",
                "web/WebApp"
            ],
            "queue": [
                "servicebus/Namespace",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "servicebus/QueueAuthorizationRule",
                "servicebus/Subscription",
                "web/WebApp",
                "insights/MetricAlert",
                "eventgrid/EventSubscription"
            ],
            "queueauthorizationrule": [
                "servicebus/Namespace",
                "servicebus/Queue",
                "resources/ResourceGroup"
            ],
            "namespaceauthorizationrule": [
                "app/ContainerApp",
                "resources/ResourceGroup",
                "servicebus/Namespace",
                "web/WebApp"
            ],
            "topic": [
                "servicebus/Subscription",
                "servicebus/Rule",
                "servicebus/Namespace",
                "servicebus/TopicAuthorizationRule",
                "resources/ResourceGroup",
                "keyvault/Secret",
                "eventgrid/EventSubscription",
                "authorization/ManagementLockByScope"
            ],
            "subscription": [
                "servicebus/Rule",
                "servicebus/Topic",
                "servicebus/Namespace",
                "resources/ResourceGroup",
                "servicebus/Queue",
                "appconfiguration/KeyValue",
                "web/WebApp"
            ],
            "rule": [
                "servicebus/Subscription",
                "servicebus/Topic",
                "servicebus/Namespace",
                "resources/ResourceGroup"
            ],
            "topicauthorizationrule": [
                "keyvault/Secret",
                "servicebus/Topic",
                "servicebus/Namespace",
                "resources/ResourceGroup"
            ],
            "namespacenetworkruleset": [
                "servicebus/Namespace",
                "web/WebApp",
                "network/Subnet"
            ]
        },
        "documentdb": {
            "databaseaccount": [
                "resources/ResourceGroup"
            ],
            "sqlresourcesqldatabase": [
                "documentdb/SqlResourceSqlContainer",
                "resources/ResourceGroup",
                "documentdb/DatabaseAccount"
            ],
            "sqlresourcesqlcontainer": [
                "resources/ResourceGroup",
                "documentdb/DatabaseAccount",
                "documentdb/SqlResourceSqlDatabase"
            ],
            "sqlresourcesqlroleassignment": [
                "documentdb/SqlResourceSqlContainer",
                "documentdb/SqlResourceSqlDatabase",
                "documentdb/DatabaseAccount",
                "managedidentity/UserAssignedIdentity",
                "web/WebApp",
                "resources/ResourceGroup",
                "documentdb/SqlResourceSqlRoleDefinition"
            ],
            "service": [
                "resources/ResourceGroup",
                "documentdb/DatabaseAccount"
            ],
            "sqlresourcesqlstoredprocedure": [
                "documentdb/DatabaseAccount",
                "documentdb/SqlResourceSqlDatabase",
                "documentdb/SqlResourceSqlContainer",
                "resources/ResourceGroup"
            ],
            "mongodbresourcemongodbdatabase": [
                "documentdb/MongoDBResourceMongoDBCollection",
                "documentdb/DatabaseAccount",
                "resources/ResourceGroup"
            ],
            "mongodbresourcemongodbcollection": [
                "documentdb/DatabaseAccount",
                "documentdb/MongoDBResourceMongoDBDatabase",
                "resources/ResourceGroup"
            ],
            "sqlresourcesqlroledefinition": [
                "documentdb/SqlResourceSqlRoleAssignment",
                "documentdb/DatabaseAccount",
                "documentdb/SqlResourceSqlDatabase"
            ],
            "gremlinresourcegremlindatabase": [
                "documentdb/GremlinResourceGremlinGraph",
                "documentdb/DatabaseAccount"
            ],
            "gremlinresourcegremlingraph": [
                "documentdb/DatabaseAccount",
                "documentdb/GremlinResourceGremlinDatabase"
            ]
        },
        "storage": {
            "storageaccount": [
                "network/PrivateEndpoint",
                "network/PrivateRecordSet",
                "storage/FileServiceProperties",
                "authorization/RoleAssignment",
                "resources/ResourceGroup",
                "insights/DiagnosticSetting"
            ],
            "blobcontainer": [
                "storage/Blob",
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "web/WebApp",
                "storage/ManagementPolicy",
                "eventgrid/EventSubscription",
                "containerinstance/ContainerGroup"
            ],
            "blob": [
                "storage/StorageAccount",
                "storage/StorageAccountStaticWebsite",
                "resources/ResourceGroup",
                "storage/BlobContainer",
                "web/WebApp",
                "web/AppServicePlan",
                "web/WebAppApplicationSettings"
            ],
            "storageaccountstaticwebsite": [
                "storage/Blob",
                "resources/ResourceGroup",
                "storage/StorageAccount",
                "cdn/Endpoint",
                "storage/StorageAccount",
                "storage/BlobContainer",
                "web/WebApp"
            ],
            "queue": [
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "eventgrid/EventSubscription",
                "eventgrid/SystemTopicEventSubscription",
                "web/WebApp",
                "web/WebAppApplicationSettingsSlot",
                "web/WebAppSlot"
            ],
            "blobserviceproperties": [
                "storage/StorageAccount",
                "resources/ResourceGroup"
            ],
            "fileserviceproperties": [
                "resources/ResourceGroup",
                "storage/StorageAccount"
            ],
            "fileshare": [
                "resources/ResourceGroup",
                "storage/StorageAccount",
                "web/WebApp",
                "storage/StorageAccount",
                "app/ManagedEnvironmentsStorage",
                "containerinstance/ContainerGroup",
                "recoveryservices/ProtectedItem"
            ],
            "table": [
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "web/AppServicePlan"
            ],
            "managementpolicy": [
                "resources/ResourceGroup",
                "storage/StorageAccount",
                "storage/BlobContainer",
                "storage/StorageAccount",
                "authorization/RoleAssignment",
                "network/PrivateEndpoint",
                "network/PrivateDnsZoneGroup",
                "web/AppServicePlan"
            ],
            "encryptionscope": [
                "storage/StorageAccount"
            ]
        },
        "keyvault": {
            "vault": [
                "keyvault/Secret",
                "network/PrivateEndpoint",
                "network/PrivateRecordSet",
                "resources/ResourceGroup",
                "network/VirtualNetwork",
                "containerservice/ManagedCluster",
                "insights/DiagnosticSetting"
            ],
            "key": [
                "keyvault/Vault",
                "resources/ResourceGroup",
                "web/WebAppApplicationSettings",
                "web/WebAppApplicationSettingsSlot",
                "containerinstance/ContainerGroup",
                "insights/DiagnosticSetting",
                "keyvault/Secret",
                "appconfiguration/KeyValue"
            ],
            "secret": [
                "keyvault/Vault",
                "resources/ResourceGroup",
                "web/WebApp"
            ]
        },
        "containerinstance": {
            "containergroup": [
                "storage/FileShare",
                "insights/DiagnosticSetting",
                "resources/ResourceGroup"
            ]
        },
        "resources": {
            "resourcegroup": [
                "appconfiguration/KeyValue",
                "sql/FirewallRule",
                "keyvault/Secret",
                "web/WebApp",
                "authorization/RoleAssignment",
                "storage/Queue",
                "insights/MetricAlert",
                "storage/Blob"
            ],
            "deployment": [
                "resources/ResourceGroup"
            ]
        },
        "cognitiveservices": {
            "account": [
                "web/WebApp",
                "keyvault/Secret",
                "resources/ResourceGroup"
            ]
        },
        "cdn": {
            "profile": [
                "cdn/AFDEndpoint",
                "cdn/AFDOriginGroup",
                "cdn/RuleSet",
                "cdn/Rule",
                "cdn/AFDOrigin",
                "cdn/Route",
                "cdn/Endpoint",
                "cdn/CustomDomain"
            ],
            "endpoint": [
                "cdn/CustomDomain",
                "storage/StorageAccount",
                "cdn/Profile"
            ],
            "customdomain": [
                "cdn/Profile",
                "cdn/Endpoint"
            ],
            "afdendpoint": [
                "cdn/Route",
                "network/RecordSet",
                "resources/ResourceGroup",
                "cdn/Profile",
                "cdn/SecurityPolicy"
            ],
            "afdorigingroup": [
                "cdn/AFDOrigin",
                "cdn/Route",
                "resources/ResourceGroup",
                "cdn/Profile"
            ],
            "ruleset": [
                "cdn/Route",
                "cdn/Rule",
                "resources/ResourceGroup",
                "cdn/Profile"
            ],
            "rule": [
                "resources/ResourceGroup",
                "cdn/Profile",
                "cdn/RuleSet"
            ],
            "afdorigin": [
                "cdn/AFDOriginGroup",
                "resources/ResourceGroup",
                "cdn/Profile",
                "web/WebApp",
                "cdn/Route",
                "storage/StorageAccount"
            ],
            "route": [
                "cdn/AFDOriginGroup",
                "resources/ResourceGroup",
                "cdn/Profile",
                "cdn/RuleSet",
                "cdn/AFDEndpoint",
                "cdn/AFDCustomDomain",
                "cdn/AFDOrigin"
            ],
            "afdcustomdomain": [
                "cdn/SecurityPolicy",
                "cdn/Route",
                "network/RecordSet",
                "resources/ResourceGroup",
                "cdn/Profile",
                "cdn/Secret"
            ],
            "securitypolicy": [
                "cdn/AFDCustomDomain",
                "resources/ResourceGroup",
                "cdn/Profile",
                "network/Policy",
                "cdn/AFDEndpoint"
            ],
            "secret": [
                "cdn/AFDCustomDomain",
                "resources/ResourceGroup",
                "cdn/Profile"
            ]
        },
        "insights": {
            "component": [
                "web/WebAppApplicationSettings",
                "web/WebApp",
                "web/WebAppApplicationSettingsSlot",
                "resources/ResourceGroup",
                "appconfiguration/KeyValue",
                "insights/ScheduledQueryRule",
                "operationalinsights/Workspace",
                "keyvault/Secret"
            ],
            "webtest": [
                "insights/MetricAlert"
            ],
            "actiongroup": [
                "insights/MetricAlert",
                "insights/ScheduledQueryRule",
                "resources/ResourceGroup",
                "insights/ActivityLogAlert",
                "alertsmanagement/SmartDetectorAlertRule",
                "logic/Workflow",
                "insights/MetricAlert",
                "insights/ScheduledQueryRule"
            ],
            "metricalert": [
                "insights/Component",
                "insights/ActionGroup"
            ],
            "diagnosticsetting": [
                "operationalinsights/Workspace",
                "storage/StorageAccount",
                "keyvault/Vault",
                "web/WebApp",
                "databricks/Workspace",
                "eventhub/Namespace",
                "dbforpostgresql/Server",
                "datafactory/Factory"
            ],
            "autoscalesetting": [
                "web/AppServicePlan",
                "resources/ResourceGroup",
                "insights/DiagnosticSetting",
                "web/AppServicePlan",
                "containerservice/ManagedCluster"
            ],
            "privatelinkscopedresource": [
                "operationalinsights/Workspace",
                "insights/Component"
            ],
            "scheduledqueryrule": [
                "resources/ResourceGroup",
                "insights/ActionGroup"
            ],
            "activitylogalert": [
                "web/WebApp",
                "sql/Database"
            ],
            "componentcurrentbillingfeature": [
                "insights/Component"
            ]
        },
        "appconfiguration": {
            "configurationstore": [
                "resources/ResourceGroup"
            ],
            "keyvalue": [
                "appconfiguration/ConfigurationStore",
                "resources/ResourceGroup",
                "keyvault/Vault",
                "keyvault/Secret",
                "storage/StorageAccount",
                "eventgrid/Topic",
                "managedidentity/UserAssignedIdentity",
                "documentdb/DatabaseAccount"
            ]
        },
        "dataprotection": {
            "backupvault": [
                "dataprotection/BackupPolicy",
                "authorization/RoleAssignment",
                "dataprotection/BackupInstance",
                "resources/ResourceGroup"
            ],
            "backuppolicy": [
                "dataprotection/BackupInstance",
                "dataprotection/BackupVault"
            ],
            "backupinstance": [
                "storage/StorageAccount",
                "dataprotection/BackupVault",
                "dataprotection/BackupPolicy"
            ]
        },
        "authorization": {
            "roleassignment": [
                "keyvault/Vault",
                "storage/StorageAccount",
                "eventhub/Namespace",
                "web/WebApp"
            ],
            "roledefinition": [
                "authorization/RoleAssignment"
            ],
            "managementlockbyscope": [
                "storage/StorageAccount",
                "servicebus/Topic",
                "dbforpostgresql/Server",
                "servicebus/Namespace",
                "containerservice/ManagedCluster",
                "sql/Server",
                "documentdb/DatabaseAccount",
                "sql/Database"
            ],
            "policydefinitionatmanagementgroup": [
                "authorization/PolicySetDefinitionAtManagementGroup"
            ],
            "policyassignment": [
                "authorization/PolicySetDefinitionAtManagementGroup",
                "authorization/RoleAssignment",
                "authorization/PolicyExemption",
                "resources/ResourceGroup"
            ],
            "managementlockatresourcegrouplevel": [
                "resources/ResourceGroup"
            ],
            "policysetdefinitionatmanagementgroup": [
                "authorization/PolicyDefinitionAtManagementGroup",
                "authorization/PolicyAssignment"
            ],
            "policyexemption": [
                "authorization/PolicyAssignment"
            ]
        },
        "web": {
            "certificate": [
                "web/WebAppHostNameBinding",
                "web/AppServicePlan",
                "web/WebApp",
                "resources/ResourceGroup",
                "keyvault/Vault"
            ],
            "webapp": [
                "keyvault/Vault",
                "web/WebAppSlot",
                "web/AppServicePlan",
                "web/WebAppHostNameBinding",
                "resources/ResourceGroup",
                "storage/StorageAccount",
                "insights/DiagnosticSetting",
                "insights/Component"
            ],
            "webapphostnamebinding": [
                "web/WebApp",
                "web/Certificate",
                "network/RecordSet",
                "resources/ResourceGroup",
                "web/AppServicePlan",
                "insights/DiagnosticSetting"
            ],
            "appserviceplan": [
                "insights/MetricAlert",
                "web/WebApp",
                "insights/DiagnosticSetting",
                "insights/AutoscaleSetting",
                "web/WebAppSlot",
                "resources/ResourceGroup"
            ],
            "webappslot": [
                "keyvault/Vault",
                "web/WebApp",
                "web/AppServicePlan",
                "resources/ResourceGroup",
                "managedidentity/UserAssignedIdentity",
                "web/WebAppSwiftVirtualNetworkConnectionSlot",
                "insights/Component",
                "sql/Server"
            ],
            "webapppubliccertificate": [
                "resources/ResourceGroup",
                "web/WebApp"
            ],
            "webappslotconfigurationnames": [
                "resources/ResourceGroup",
                "web/WebApp"
            ],
            "webappapplicationsettingsslot": [
                "web/WebApp",
                "resources/ResourceGroup",
                "web/WebAppSlot",
                "insights/Component",
                "storage/StorageAccount",
                "keyvault/Vault",
                "network/PrivateRecordSet",
                "keyvault/Key"
            ],
            "webappconnectionstringsslot": [
                "resources/ResourceGroup",
                "appconfiguration/ConfigurationStore",
                "web/WebApp",
                "web/WebAppSlot"
            ],
            "connection": [
                "logic/Workflow",
                "resources/ResourceGroup",
                "logic/Workflow",
                "logic/IntegrationServiceEnvironment",
                "logic/IntegrationServiceEnvironmentManagedApi",
                "storage/StorageAccount"
            ],
            "webappswiftvirtualnetworkconnection": [
                "web/WebApp",
                "network/Subnet",
                "resources/ResourceGroup",
                "network/VirtualNetwork"
            ],
            "webappapplicationsettings": [
                "keyvault/Secret",
                "web/WebApp",
                "resources/ResourceGroup",
                "keyvault/Vault",
                "insights/Component",
                "insights/Component",
                "storage/StorageAccount",
                "network/PrivateRecordSet"
            ],
            "webappdiagnosticlogsconfiguration": [
                "web/WebApp",
                "resources/ResourceGroup"
            ],
            "staticsite": [
                "resources/ResourceGroup",
                "network/FrontDoor",
                "network/PrivateEndpoint",
                "web/StaticSiteCustomDomain",
                "app/ContainerApp"
            ],
            "staticsitecustomdomain": [
                "web/StaticSite"
            ],
            "webappauthsettingsv2": [
                "resources/ResourceGroup",
                "web/WebApp"
            ],
            "webappmetadata": [
                "web/WebApp",
                "resources/ResourceGroup",
                "insights/Component",
                "insights/DiagnosticSetting",
                "web/AppServicePlan"
            ],
            "webappswiftvirtualnetworkconnectionslot": [
                "web/WebApp",
                "web/WebAppSlot",
                "network/Subnet",
                "resources/ResourceGroup"
            ],
            "webappconnectionstrings": [
                "web/WebApp",
                "keyvault/Vault",
                "sql/Database",
                "resources/ResourceGroup",
                "sql/Server"
            ],
            "webappauthsettings": [
                "web/WebApp"
            ],
            "webappauthsettingsslot": [
                "web/WebApp",
                "web/WebAppSlot"
            ],
            "webappvnetconnection": [
                "web/WebApp"
            ],
            "webappvnetconnectionslot": [
                "web/WebApp",
                "web/WebAppSlot"
            ]
        },
        "network": {
            "frontdoor": [
                "web/WebApp",
                "resources/ResourceGroup",
                "insights/DiagnosticSetting",
                "cdn/Endpoint",
                "network/Zone",
                "storage/StorageAccount",
                "network/RulesEngine",
                "web/StaticSite"
            ],
            "rulesengine": [
                "network/FrontDoor",
                "web/AppServicePlan"
            ],
            "virtualnetwork": [
                "network/VirtualNetworkPeering",
                "network/Subnet",
                "network/VirtualNetworkLink",
                "resources/ResourceGroup",
                "web/WebApp",
                "network/PrivateEndpoint",
                "network/PrivateZone",
                "databricks/Workspace"
            ],
            "subnet": [
                "network/VirtualNetworkPeering",
                "network/SecurityRule",
                "network/NetworkInterface",
                "storage/StorageAccount",
                "network/VirtualNetwork",
                "containerservice/AgentPool",
                "network/PrivateEndpoint",
                "network/NetworkSecurityGroup"
            ],
            "privateendpoint": [
                "resources/ResourceGroup",
                "network/VirtualNetwork",
                "sql/Server",
                "cache/Redis"
            ],
            "privatezone": [
                "network/VirtualNetworkLink",
                "network/PrivateRecordSet",
                "network/PrivateDnsZoneGroup",
                "resources/ResourceGroup",
                "network/VirtualNetwork",
                "network/Subnet",
                "insights/DiagnosticSetting",
                "containerservice/ManagedCluster"
            ],
            "privaterecordset": [
                "keyvault/Secret",
                "network/PrivateZone",
                "network/PrivateEndpoint",
                "resources/ResourceGroup",
                "web/WebAppApplicationSettings",
                "dbforpostgresql/Server",
                "web/WebAppApplicationSettingsSlot",
                "keyvault/Vault"
            ],
            "virtualnetworklink": [
                "network/VirtualNetwork",
                "resources/ResourceGroup",
                "network/PrivateZone",
                "dbforpostgresql/Server",
                "containerservice/ManagedCluster",
                "network/PrivateRecordSet",
                "dbforpostgresql/Server"
            ],
            "virtualnetworkpeering": [
                "network/VirtualNetwork",
                "network/Subnet",
                "resources/ResourceGroup"
            ],
            "privatednszonegroup": [
                "network/PrivateEndpoint",
                "resources/ResourceGroup",
                "network/PrivateZone",
                "authorization/RoleAssignment",
                "network/ApplicationGateway",
                "sql/Server",
                "storage/ManagementPolicy",
                "storage/StorageAccount"
            ],
            "recordset": [
                "web/WebAppHostNameBinding",
                "network/Zone",
                "resources/ResourceGroup",
                "network/Profile",
                "web/WebApp",
                "cdn/AFDEndpoint",
                "cdn/AFDCustomDomain",
                "network/PublicIPAddress"
            ],
            "publicipaddress": [
                "insights/DiagnosticSetting",
                "resources/ResourceGroup",
                "network/NatGateway",
                "network/NetworkInterface",
                "network/LoadBalancer",
                "network/ApplicationGateway",
                "network/PublicIPPrefix",
                "network/RecordSet"
            ],
            "networksecuritygroup": [
                "network/Subnet",
                "resources/ResourceGroup",
                "network/NetworkInterface",
                "insights/DiagnosticSetting",
                "network/FlowLog",
                "network/VirtualNetwork",
                "authorization/RoleAssignment",
                "storage/StorageAccount"
            ],
            "routetable": [
                "network/Subnet",
                "network/Route",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "network/VirtualNetwork",
                "network/PublicIPAddress",
                "network/FirewallPolicyRuleGroup",
                "network/AzureFirewall"
            ],
            "networkinterface": [
                "compute/VirtualMachine",
                "resources/ResourceGroup",
                "network/Subnet",
                "insights/DiagnosticSetting",
                "network/NetworkSecurityGroup",
                "network/PublicIPAddress",
                "network/VirtualNetwork",
                "network/LoadBalancer"
            ],
            "bastionhost": [
                "network/PublicIPAddress",
                "resources/ResourceGroup",
                "network/Subnet"
            ],
            "profile": [
                "network/RecordSet",
                "web/WebApp",
                "resources/ResourceGroup",
                "network/Endpoint",
                "network/PublicIPAddress"
            ],
            "zone": [
                "network/RecordSet",
                "resources/ResourceGroup",
                "network/FrontDoor",
                "authorization/RoleAssignment",
                "botservice/Bot"
            ],
            "firewallpolicy": [
                "network/FirewallPolicyRuleGroup",
                "network/AzureFirewall",
                "network/FirewallPolicyRuleCollectionGroup",
                "network/Subnet"
            ],
            "firewallpolicyrulegroup": [
                "network/Subnet",
                "network/FirewallPolicy",
                "network/AzureFirewall",
                "network/RouteTable"
            ],
            "azurefirewall": [
                "network/Subnet",
                "network/Route",
                "insights/DiagnosticSetting",
                "network/RouteTable",
                "network/VirtualHub",
                "network/PublicIPAddress",
                "network/FirewallPolicy",
                "network/FirewallPolicyRuleGroup"
            ],
            "firewallpolicyrulecollectiongroup": [
                "containerservice/ManagedCluster",
                "network/VirtualNetwork",
                "network/Subnet",
                "network/FirewallPolicy"
            ],
            "loadbalancer": [
                "network/PublicIPAddress",
                "compute/VirtualMachine",
                "network/NetworkInterface",
                "resources/ResourceGroup",
                "insights/DiagnosticSetting",
                "network/Subnet",
                "network/PrivateLinkService"
            ],
            "privatelinkservice": [
                "network/PrivateEndpoint",
                "resources/ResourceGroup",
                "network/VirtualNetwork",
                "containerservice/ManagedCluster",
                "network/LoadBalancer"
            ],
            "route": [
                "network/RouteTable",
                "network/VirtualNetwork",
                "network/Subnet",
                "containerservice/ManagedCluster",
                "network/AzureFirewall"
            ],
            "securityrule": [
                "network/Subnet",
                "resources/ResourceGroup",
                "containerservice/ManagedCluster",
                "network/NetworkSecurityGroup",
                "network/ApplicationGateway",
                "network/PublicIPAddress"
            ],
            "webapplicationfirewallpolicy": [
                "network/ApplicationGateway",
                "resources/ResourceGroup"
            ],
            "applicationgateway": [
                "insights/MetricAlert",
                "insights/DiagnosticSetting",
                "resources/ResourceGroup",
                "authorization/RoleAssignment",
                "network/PublicIPAddress",
                "managedidentity/UserAssignedIdentity",
                "insights/DiagnosticSetting",
                "network/WebApplicationFirewallPolicy"
            ],
            "networkwatcher": [
                "network/FlowLog",
                "resources/ResourceGroup"
            ],
            "natgateway": [
                "network/Subnet",
                "insights/MetricAlert",
                "network/PublicIPAddress",
                "resources/ResourceGroup",
                "network/VirtualNetwork"
            ],
            "flowlog": [
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "network/NetworkSecurityGroup",
                "network/NetworkWatcher",
                "operationalinsights/Workspace"
            ],
            "networkprofile": [
                "containerinstance/ContainerGroup",
                "resources/ResourceGroup",
                "network/VirtualNetwork"
            ],
            "virtualnetworkgateway": [
                "resources/ResourceGroup",
                "network/PublicIPAddress",
                "network/Subnet",
                "network/VirtualNetworkGatewayConnection",
                "network/VirtualNetwork"
            ],
            "dnsresolver": [
                "network/InboundEndpoint",
                "resources/ResourceGroup",
                "network/VirtualNetwork"
            ],
            "inboundendpoint": [
                "resources/ResourceGroup",
                "network/Subnet",
                "network/DnsResolver"
            ],
            "virtualnetworkgatewayconnection": [
                "resources/ResourceGroup",
                "network/VirtualNetworkGateway"
            ],
            "publicipprefix": [
                "network/PublicIPAddress"
            ],
            "virtualwan": [
                "network/VirtualHub",
                "resources/ResourceGroup"
            ],
            "virtualhub": [
                "network/AzureFirewall",
                "network/VirtualNetwork",
                "network/VirtualWan",
                "resources/ResourceGroup",
                "network/HubVirtualNetworkConnection"
            ],
            "hubvirtualnetworkconnection": [
                "network/VirtualNetwork",
                "resources/ResourceGroup",
                "network/VirtualHub"
            ],
            "policy": [
                "cdn/SecurityPolicy",
                "resources/ResourceGroup"
            ],
            "endpoint": [
                "resources/ResourceGroup",
                "network/Profile"
            ]
        },
        "app": {
            "managedenvironment": [
                "app/ContainerApp",
                "app/ManagedEnvironmentsStorage",
                "web/WebApp",
                "keyvault/Secret",
                "operationalinsights/Workspace",
                "resources/ResourceGroup",
                "app/ContainerApp",
                "network/PrivateZone"
            ],
            "containerapp": [
                "app/ManagedEnvironment",
                "resources/ResourceGroup",
                "servicebus/NamespaceAuthorizationRule",
                "containerregistry/Registry",
                "insights/Component",
                "operationalinsights/Workspace",
                "documentdb/DatabaseAccount",
                "servicebus/Namespace"
            ],
            "managedenvironmentsstorage": [
                "app/ContainerApp",
                "resources/ResourceGroup",
                "storage/StorageAccount",
                "storage/FileShare",
                "app/ManagedEnvironment"
            ],
            "certificate": [
                "app/ContainerApp",
                "app/ManagedEnvironment"
            ],
            "daprcomponent": [
                "app/ManagedEnvironment",
                "app/ContainerApp"
            ]
        },
        "datafactory": {
            "factory": [
                "datafactory/Pipeline",
                "datafactory/Trigger",
                "datafactory/LinkedService",
                "datafactory/Dataset",
                "insights/DiagnosticSetting"
            ],
            "linkedservice": [
                "datafactory/Pipeline",
                "datafactory/Factory",
                "documentdb/DatabaseAccount",
                "documentdb/SqlResourceSqlDatabase"
            ],
            "dataset": [
                "datafactory/Pipeline",
                "datafactory/Factory"
            ],
            "dataflow": [
                "datafactory/Pipeline",
                "datafactory/Factory",
                "datafactory/Dataset"
            ],
            "pipeline": [
                "datafactory/Trigger",
                "datafactory/Dataset",
                "datafactory/Factory",
                "datafactory/LinkedService"
            ],
            "integrationruntime": [
                "authorization/RoleAssignment",
                "resources/ResourceGroup",
                "datafactory/Factory",
                "insights/DiagnosticSetting",
                "network/Subnet",
                "sql/Server"
            ],
            "trigger": [
                "resources/ResourceGroup",
                "datafactory/Factory"
            ]
        },
        "databricks": {
            "workspace": [
                "authorization/RoleAssignment",
                "network/VirtualNetwork",
                "resources/ResourceGroup",
                "network/PrivateZone",
                "storage/StorageAccount",
                "insights/DiagnosticSetting",
                "logic/Workflow",
                "insights/ScheduledQueryRule"
            ]
        },
        "eventhub": {
            "namespace": [
                "keyvault/Secret",
                "eventhub/EventHub",
                "eventhub/NamespaceAuthorizationRule",
                "eventhub/EventHubAuthorizationRule",
                "insights/DiagnosticSetting",
                "eventhub/NamespaceNetworkRuleSet",
                "resources/ResourceGroup"
            ],
            "namespaceauthorizationrule": [
                "keyvault/Secret",
                "resources/ResourceGroup",
                "eventhub/Namespace"
            ],
            "namespacenetworkruleset": [
                "resources/ResourceGroup",
                "eventhub/Namespace"
            ],
            "eventhub": [
                "keyvault/Secret",
                "resources/ResourceGroup",
                "eventhub/Namespace",
                "eventhub/EventHubAuthorizationRule"
            ],
            "consumergroup": [
                "eventhub/Namespace",
                "resources/ResourceGroup",
                "eventhub/EventHub"
            ],
            "eventhubauthorizationrule": [
                "eventhub/Namespace",
                "eventhub/EventHub",
                "resources/ResourceGroup",
                "devices/IotHubResource",
                "streamanalytics/StreamingJob",
                "web/WebApp",
                "keyvault/Secret"
            ]
        },
        "containerservice": {
            "managedcluster": [
                "authorization/RoleAssignment",
                "insights/MetricAlert",
                "operationalinsights/Workspace",
                "resources/ResourceGroup",
                "network/Subnet"
            ],
            "agentpool": [
                "resources/ResourceGroup",
                "network/Subnet",
                "containerservice/ManagedCluster"
            ]
        },
        "dbforpostgresql": {
            "server": [
                "dbforpostgresql/FirewallRule",
                "web/WebApp",
                "dbforpostgresql/Configuration",
                "keyvault/Secret"
            ],
            "database": [
                "resources/ResourceGroup",
                "dbforpostgresql/Server"
            ],
            "virtualnetworkrule": [
                "dbforpostgresql/Server",
                "resources/ResourceGroup",
                "network/Subnet",
                "network/VirtualNetwork"
            ],
            "configuration": [
                "resources/ResourceGroup",
                "dbforpostgresql/Server"
            ],
            "firewallrule": [
                "resources/ResourceGroup",
                "dbforpostgresql/Server",
                "network/PublicIPAddress"
            ],
            "serverkey": [
                "resources/ResourceGroup",
                "dbforpostgresql/Server"
            ]
        },
        "cache": {
            "redis": [
                "resources/ResourceGroup"
            ],
            "firewallrule": [
                "cache/Redis",
                "resources/ResourceGroup"
            ],
            "patchschedule": [
                "resources/ResourceGroup",
                "cache/Redis"
            ]
        },
        "signalrservice": {
            "signalr": [
                "web/WebApp",
                "keyvault/Secret",
                "resources/ResourceGroup",
                "network/PrivateEndpoint",
                "web/WebAppApplicationSettings",
                "signalrservice/SignalRCustomCertificate",
                "signalrservice/SignalRCustomDomain",
                "insights/DiagnosticSetting"
            ],
            "signalrcustomcertificate": [
                "signalrservice/SignalRCustomDomain",
                "resources/ResourceGroup",
                "signalrservice/SignalR"
            ],
            "signalrcustomdomain": [
                "resources/ResourceGroup",
                "signalrservice/SignalR",
                "signalrservice/SignalRCustomCertificate"
            ]
        },
        "containerregistry": {
            "registry": [
                "authorization/RoleAssignment",
                "app/ContainerApp",
                "resources/ResourceGroup",
                "containerinstance/ContainerGroup",
                "web/WebApp",
                "authorization/RoleAssignment",
                "machinelearningservices/Workspace",
                "network/Subnet"
            ]
        },
        "maps": {
            "account": [
                "authorization/RoleAssignment",
                "resources/ResourceGroup"
            ]
        },
        "eventgrid": {
            "topic": [
                "appconfiguration/KeyValue",
                "eventgrid/EventSubscription",
                "web/WebApp",
                "resources/ResourceGroup",
                "web/WebAppApplicationSettingsSlot"
            ],
            "eventsubscription": [
                "storage/StorageAccount",
                "web/WebApp",
                "eventgrid/Domain",
                "storage/BlobContainer",
                "eventgrid/Topic",
                "storage/Queue",
                "servicebus/Topic",
                "servicebus/Queue"
            ],
            "systemtopic": [
                "eventgrid/SystemTopicEventSubscription",
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "eventgrid/EventSubscription",
                "eventhub/Namespace"
            ],
            "systemtopiceventsubscription": [
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "eventgrid/SystemTopic",
                "storage/Queue",
                "storage/BlobContainer",
                "web/WebApp",
                "eventhub/EventHub"
            ],
            "domain": [
                "eventgrid/EventSubscription",
                "appconfiguration/KeyValue",
                "keyvault/Secret",
                "resources/ResourceGroup"
            ]
        },
        "relay": {
            "namespace": [
                "appconfiguration/KeyValue",
                "resources/ResourceGroup"
            ]
        },
        "logic": {
            "workflow": [
                "resources/ResourceGroup",
                "web/Connection",
                "web/WebApp",
                "logic/IntegrationServiceEnvironmentManagedApi",
                "insights/ActionGroup",
                "logic/IntegrationServiceEnvironment",
                "databricks/Workspace",
                "managedidentity/UserAssignedIdentity"
            ],
            "integrationserviceenvironment": [
                "logic/Workflow",
                "logic/IntegrationServiceEnvironmentManagedApi",
                "network/Subnet",
                "web/Connection"
            ],
            "integrationserviceenvironmentmanagedapi": [
                "logic/Workflow",
                "web/Connection",
                "logic/IntegrationServiceEnvironment"
            ]
        },
        "dbformysql": {
            "firewallrule": [
                "resources/ResourceGroup",
                "dbformysql/Server"
            ],
            "server": [
                "dbformysql/Database",
                "dbformysql/FirewallRule",
                "resources/ResourceGroup",
                "keyvault/Secret"
            ],
            "database": [
                "resources/ResourceGroup",
                "dbformysql/Server"
            ]
        },
        "synapse": {
            "sqlpool": [
                "keyvault/Secret",
                "resources/ResourceGroup",
                "synapse/Workspace"
            ],
            "workspace": [
                "keyvault/Secret",
                "authorization/RoleAssignment",
                "synapse/IpFirewallRule",
                "synapse/BigDataPool",
                "synapse/WorkspaceSqlAadAdmin",
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "storage/BlobContainer"
            ],
            "ipfirewallrule": [
                "resources/ResourceGroup",
                "synapse/Workspace"
            ],
            "workspacesqlaadadmin": [
                "resources/ResourceGroup",
                "synapse/Workspace"
            ],
            "bigdatapool": [
                "resources/ResourceGroup",
                "synapse/Workspace"
            ]
        },
        "recoveryservices": {
            "protectioncontainer": [
                "recoveryservices/ProtectedItem",
                "storage/StorageAccount",
                "resources/ResourceGroup"
            ],
            "protecteditem": [
                "resources/ResourceGroup",
                "compute/VirtualMachine",
                "recoveryservices/Vault",
                "recoveryservices/ProtectionPolicy",
                "compute/VirtualMachineExtension",
                "storage/StorageAccount",
                "storage/FileShare",
                "recoveryservices/ProtectionContainer"
            ],
            "vault": [
                "recoveryservices/ProtectedItem",
                "recoveryservices/ProtectionPolicy",
                "resources/ResourceGroup"
            ],
            "protectionpolicy": [
                "recoveryservices/ProtectedItem",
                "resources/ResourceGroup",
                "recoveryservices/Vault"
            ]
        },
        "alertsmanagement": {
            "smartdetectoralertrule": [
                "resources/ResourceGroup",
                "insights/Component",
                "insights/ActionGroup"
            ]
        },
        "machinelearningservices": {
            "workspace": [
                "authorization/RoleAssignment",
                "storage/StorageAccount",
                "resources/ResourceGroup",
                "keyvault/Vault",
                "machinelearningservices/MachineLearningCompute",
                "insights/Component",
                "managedidentity/UserAssignedIdentity",
                "insights/Component"
            ],
            "machinelearningcompute": [
                "resources/ResourceGroup",
                "machinelearningservices/Workspace"
            ]
        },
        "devices": {
            "iothubresource": [
                "eventhub/EventHub",
                "eventhub/EventHubAuthorizationRule",
                "eventhub/Namespace",
                "resources/ResourceGroup"
            ]
        },
        "subscription": {
            "alias": [
                "authorization/RoleAssignment",
                "management/ManagementGroupSubscription"
            ]
        },
        "management": {
            "managementgroup": [
                "management/ManagementGroupSubscription",
                "authorization/RoleAssignment"
            ],
            "managementgroupsubscription": [
                "subscription/Alias",
                "management/ManagementGroup"
            ]
        },
        "azureactivedirectory": {
            "b2ctenant": [
                "resources/ResourceGroup"
            ]
        },
        "apimanagement": {
            "apimanagementservice": [
                "apimanagement/ProductApi",
                "apimanagement/ApiOperation",
                "apimanagement/Api",
                "apimanagement/ApiPolicy",
                "apimanagement/ApiVersionSet",
                "apimanagement/ApiOperation",
                "apimanagement/ApiOperationPolicy",
                "apimanagement/Backend"
            ],
            "backend": [
                "apimanagement/ApiPolicy",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup",
                "web/WebApp",
                "apimanagement/NamedValue",
                "apimanagement/ApiOperationPolicy"
            ],
            "api": [
                "apimanagement/ApiOperation",
                "apimanagement/ApiOperationPolicy",
                "apimanagement/ApiSchema",
                "apimanagement/ApiPolicy",
                "apimanagement/ProductApi",
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService"
            ],
            "apioperation": [
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService",
                "apimanagement/Api",
                "apimanagement/ApiSchema",
                "apimanagement/ApiOperationPolicy"
            ],
            "subscription": [
                "apimanagement/ApiManagementService",
                "apimanagement/Product",
                "resources/ResourceGroup"
            ],
            "logger": [
                "apimanagement/ApiDiagnostic",
                "apimanagement/ApiManagementService",
                "apimanagement/Diagnostic",
                "resources/ResourceGroup",
                "insights/Component",
                "insights/Component"
            ],
            "apidiagnostic": [
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService",
                "apimanagement/Logger"
            ],
            "apipolicy": [
                "apimanagement/NamedValue",
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService",
                "apimanagement/Api"
            ],
            "group": [
                "apimanagement/ProductGroup",
                "apimanagement/GroupUser",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup"
            ],
            "namedvalue": [
                "apimanagement/ApiVersionSet",
                "apimanagement/ApiPolicy",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup",
                "apimanagement/ApiOperationPolicy",
                "apimanagement/Backend",
                "apimanagement/ApiPolicy",
                "apimanagement/ProductPolicy"
            ],
            "product": [
                "apimanagement/ProductApi",
                "apimanagement/ApiVersionSet",
                "apimanagement/Subscription",
                "apimanagement/ProductGroup",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup",
                "apimanagement/ProductPolicy"
            ],
            "productapi": [
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup",
                "apimanagement/Api",
                "apimanagement/Product",
                "apimanagement/Api"
            ],
            "productgroup": [
                "apimanagement/Product",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup",
                "apimanagement/Group"
            ],
            "apioperationpolicy": [
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService",
                "apimanagement/Api",
                "apimanagement/ApiOperation"
            ],
            "apiversionset": [
                "apimanagement/Api",
                "apimanagement/NamedValue",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup",
                "apimanagement/Product"
            ],
            "property": [
                "apimanagement/ApiManagementService"
            ],
            "certificate": [
                "apimanagement/ApiManagementService"
            ],
            "policy": [
                "apimanagement/ApiManagementService"
            ],
            "tag": [
                "apimanagement/ApiManagementService"
            ],
            "schema": [
                "apimanagement/ApiManagementService"
            ],
            "user": [
                "apimanagement/ApiManagementService"
            ],
            "groupuser": [
                "apimanagement/ApiManagementService",
                "apimanagement/Group"
            ],
            "apischema": [
                "apimanagement/ApiOperation",
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService",
                "apimanagement/Api"
            ],
            "productpolicy": [
                "apimanagement/Product",
                "apimanagement/NamedValue",
                "apimanagement/ApiManagementService",
                "resources/ResourceGroup"
            ],
            "apitagdescription": [
                "apimanagement/ApiManagementService",
                "apimanagement/Api"
            ],
            "diagnostic": [
                "apimanagement/ApiManagementService",
                "apimanagement/Logger"
            ],
            "tagbyoperation": [
                "apimanagement/Api",
                "apimanagement/ApiOperation",
                "apimanagement/ApiManagementService"
            ],
            "notificationrecipientemail": [
                "resources/ResourceGroup",
                "apimanagement/ApiManagementService"
            ]
        },
        "compute": {
            "virtualmachine": [
                "compute/VirtualMachineExtension",
                "network/NetworkInterface",
                "compute/GalleryImageVersion",
                "resources/ResourceGroup",
                "compute/Disk",
                "recoveryservices/ProtectedItem",
                "authorization/RoleAssignment",
                "keyvault/Secret"
            ],
            "virtualmachineextension": [
                "compute/VirtualMachine",
                "resources/ResourceGroup",
                "recoveryservices/ProtectedItem",
                "security/ServerVulnerabilityAssessment",
                "operationalinsights/Workspace",
                "storage/StorageAccount",
                "automation/HybridRunbookWorker",
                "security/JitNetworkAccessPolicy"
            ],
            "virtualmachinescaleset": [
                "network/NetworkSecurityGroup"
            ],
            "gallery": [
                "compute/GalleryImageVersion",
                "compute/GalleryImage",
                "resources/ResourceGroup"
            ],
            "galleryimage": [
                "compute/GalleryImageVersion",
                "resources/ResourceGroup",
                "compute/Gallery"
            ],
            "galleryimageversion": [
                "resources/ResourceGroup",
                "compute/VirtualMachine",
                "compute/Gallery",
                "compute/GalleryImage"
            ],
            "diskencryptionset": [
                "authorization/ManagementLockByScope",
                "containerservice/ManagedCluster",
                "authorization/RoleAssignment",
                "keyvault/Key",
                "resources/ResourceGroup"
            ],
            "disk": [
                "compute/VirtualMachine",
                "resources/ResourceGroup",
                "compute/Snapshot"
            ],
            "sshpublickey": [
                "resources/ResourceGroup"
            ],
            "snapshot": [
                "compute/Disk",
                "resources/ResourceGroup"
            ]
        },
        "portal": {
            "dashboard": [
                "operationalinsights/Workspace",
                "resources/ResourceGroup"
            ]
        },
        "media": {
            "mediaservice": [
                "media/StreamingEndpoint",
                "authorization/RoleAssignment",
                "keyvault/Secret",
                "storage/StorageAccount",
                "resources/ResourceGroup"
            ],
            "streamingendpoint": [
                "resources/ResourceGroup",
                "cdn/Profile",
                "media/MediaService"
            ]
        },
        "operationsmanagement": {
            "solution": [
                "operationalinsights/Workspace",
                "resources/ResourceGroup"
            ]
        },
        "search": {
            "service": [
                "keyvault/Secret",
                "resources/ResourceGroup"
            ]
        },
        "appplatform": {
            "storage": [
                "storage/StorageAccount",
                "resources/ResourceGroup"
            ]
        },
        "webpubsub": {
            "webpubsub": [
                "webpubsub/WebPubSubHub",
                "resources/ResourceGroup"
            ],
            "webpubsubhub": [
                "resources/ResourceGroup",
                "webpubsub/WebPubSub"
            ]
        },
        "notificationhubs": {
            "namespace": [
                "notificationhubs/NotificationHub",
                "resources/ResourceGroup"
            ],
            "notificationhub": [
                "resources/ResourceGroup",
                "notificationhubs/Namespace"
            ]
        },
        "batch": {
            "batchaccount": [
                "batch/Pool",
                "storage/StorageAccount",
                "resources/ResourceGroup"
            ],
            "pool": [
                "resources/ResourceGroup",
                "network/Subnet",
                "batch/BatchAccount"
            ]
        },
        "securityinsights": {
            "sentinelonboardingstate": [
                "operationalinsights/Workspace",
                "resources/ResourceGroup"
            ],
            "scheduledalertrule": [
                "operationalinsights/Workspace",
                "resources/ResourceGroup",
                "storage/StorageAccount"
            ]
        },
        "security": {
            "servervulnerabilityassessment": [
                "compute/VirtualMachine",
                "compute/VirtualMachineExtension"
            ],
            "jitnetworkaccesspolicy": [
                "resources/ResourceGroup",
                "compute/VirtualMachine",
                "compute/VirtualMachineExtension"
            ]
        },
        "aad": {
            "domainservice": [
                "resources/ResourceGroup",
                "network/Subnet"
            ]
        },
        "automation": {
            "automationaccount": [
                "authorization/RoleAssignment",
                "automation/Runbook",
                "resources/ResourceGroup",
                "operationalinsights/LinkedService",
                "automation/HybridRunbookWorkerGroup",
                "automation/HybridRunbookWorker",
                "compute/VirtualMachineExtension",
                "automation/SoftwareUpdateConfigurationByName"
            ],
            "hybridrunbookworkergroup": [
                "automation/HybridRunbookWorker",
                "automation/JobSchedule",
                "resources/ResourceGroup",
                "automation/AutomationAccount"
            ],
            "hybridrunbookworker": [
                "compute/VirtualMachineExtension",
                "resources/ResourceGroup",
                "compute/VirtualMachine",
                "automation/AutomationAccount",
                "automation/HybridRunbookWorkerGroup"
            ],
            "softwareupdateconfigurationbyname": [
                "resources/ResourceGroup",
                "automation/AutomationAccount"
            ],
            "schedule": [
                "automation/JobSchedule",
                "resources/ResourceGroup",
                "automation/AutomationAccount"
            ],
            "runbook": [
                "resources/ResourceGroup",
                "storage/StorageAccount",
                "automation/AutomationAccount",
                "automation/JobSchedule"
            ],
            "jobschedule": [
                "resources/ResourceGroup",
                "automation/AutomationAccount",
                "automation/HybridRunbookWorkerGroup",
                "automation/Schedule",
                "automation/Runbook"
            ]
        },
        "botservice": {
            "bot": [
                "insights/DiagnosticSetting",
                "resources/ResourceGroup",
                "network/Zone"
            ]
        },
        "datashare": {
            "account": [
                "authorization/RoleAssignment",
                "resources/ResourceGroup"
            ]
        },
        "purview": {
            "account": [
                "authorization/RoleAssignment",
                "synapse/Workspace",
                "resources/ResourceGroup"
            ]
        },
        "servicefabric": {
            "managedcluster": [
                "servicefabric/NodeType",
                "network/Subnet",
                "servicefabric/NodeType"
            ],
            "nodetype": [
                "servicefabric/ManagedCluster"
            ]
        },
        "kusto": {
            "cluster": [
                "kusto/ReadWriteDatabase",
                "resources/ResourceGroup"
            ],
            "readwritedatabase": [
                "resources/ResourceGroup",
                "kusto/Cluster"
            ]
        },
        "streamanalytics": {
            "streamingjob": [
                "resources/ResourceGroup",
                "eventhub/Namespace",
                "eventhub/EventHub",
                "eventhub/EventHubAuthorizationRule"
            ]
        }
    },
    "gcp": {
        "storage": {
            "bucket": [
                "storage/BucketObject",
                "storage/BucketIAMMember",
                "projects/Service",
                "cloudfunctions/Function",
                "storage/BucketIAMBinding",
                "organizations/Project",
                "projects/IAMMember",
                "container/Cluster"
            ],
            "bucketiammember": [
                "storage/Bucket",
                "serviceAccount/Account",
                "storage/TransferJob",
                "projects/Service",
                "appengine/StandardAppVersion",
                "organizations/Project",
                "cloudfunctions/Function",
                "projects/IAMCustomRole"
            ],
            "bucketiambinding": [
                "storage/Bucket",
                "serviceAccount/Account",
                "organizations/Project",
                "storage/BucketAccessControl",
                "composer/Environment",
                "sql/DatabaseInstance",
                "serviceAccount/Key",
                "storage/HmacKey"
            ],
            "bucketobject": [
                "storage/Bucket",
                "cloudfunctions/Function",
                "organizations/Project",
                "storage/ObjectACL",
                "appengine/StandardAppVersion",
                "secretmanager/SecretIamMember",
                "compute/Instance",
                "kms/CryptoKeyIAMBinding"
            ],
            "bucketaccesscontrol": [
                "storage/BucketIAMBinding",
                "storage/Bucket",
                "organizations/Project",
                "serviceAccount/Account"
            ],
            "transferjob": [
                "storage/BucketIAMMember",
                "storage/Bucket",
                "organizations/Project",
                "projects/Service",
                "projects/IAMMember"
            ],
            "notification": [
                "storage/Bucket",
                "pubsub/Topic",
                "pubsub/TopicIAMBinding",
                "pubsub/TopicIAMMember"
            ],
            "bucketiampolicy": [
                "storage/Bucket",
                "projects/IAMMember",
                "serviceAccount/Account",
                "orgpolicy/Policy"
            ],
            "hmackey": [
                "secretmanager/SecretVersion",
                "serviceAccount/Account",
                "artifactregistry/RepositoryIamBinding",
                "storage/BucketIAMBinding"
            ],
            "defaultobjectaccesscontrol": [
                "storage/Bucket"
            ],
            "bucketacl": [
                "storage/Bucket",
                "serviceAccount/Account"
            ],
            "objectaccesscontrol": [
                "storage/Bucket",
                "storage/BucketObject"
            ],
            "defaultobjectacl": [
                "storage/BucketObject",
                "storage/Bucket",
                "serviceAccount/Account"
            ],
            "objectacl": [
                "storage/Bucket",
                "storage/BucketObject"
            ]
        },
        "dns": {
            "managedzone": [
                "dns/RecordSet",
                "secretmanager/SecretIamBinding",
                "compute/Network",
                "projects/Service",
                "monitoring/AlertPolicy",
                "organizations/Project",
                "projects/IAMMember",
                "composer/Environment"
            ],
            "recordset": [
                "dns/ManagedZone",
                "compute/GlobalAddress",
                "projects/Service",
                "compute/ManagedSslCertificate",
                "compute/Address",
                "compute/Instance",
                "organizations/Project",
                "compute/GlobalForwardingRule"
            ]
        },
        "monitoring": {
            "uptimecheckconfig": [
                "monitoring/AlertPolicy",
                "dns/ManagedZone",
                "dns/RecordSet",
                "organizations/Project"
            ],
            "alertpolicy": [
                "monitoring/NotificationChannel",
                "serviceAccount/Account",
                "monitoring/UptimeCheckConfig",
                "logging/Metric",
                "organizations/Project",
                "cloudscheduler/Job",
                "dns/ManagedZone",
                "pubsub/Subscription"
            ],
            "notificationchannel": [
                "monitoring/AlertPolicy",
                "secretmanager/SecretIamBinding",
                "projects/IAMMember",
                "composer/Environment",
                "organizations/Project"
            ],
            "dashboard": [
                "organizations/Project"
            ],
            "monitoredproject": [
                "organizations/Project"
            ],
            "customservice": [
                "organizations/Project"
            ]
        },
        "compute": {
            "globaladdress": [
                "compute/GlobalForwardingRule",
                "dns/RecordSet",
                "projects/Service",
                "servicenetworking/Connection",
                "compute/ManagedSslCertificate",
                "organizations/Project",
                "compute/URLMap",
                "compute/BackendService"
            ],
            "firewall": [
                "container/Cluster",
                "compute/Network",
                "container/NodePool",
                "organizations/Project",
                "compute/Route",
                "projects/Service",
                "compute/Subnetwork",
                "compute/GlobalAddress"
            ],
            "network": [
                "container/Cluster",
                "compute/Firewall",
                "compute/Subnetwork",
                "compute/Router",
                "sql/DatabaseInstance",
                "projects/Service",
                "redis/Instance",
                "servicenetworking/Connection"
            ],
            "resourcepolicy": [
                "compute/DiskResourcePolicyAttachment",
                "compute/Instance",
                "organizations/Project"
            ],
            "instance": [
                "dns/RecordSet",
                "compute/Disk",
                "serviceAccount/Account",
                "compute/Network",
                "compute/Address",
                "compute/Subnetwork",
                "compute/InstanceGroup",
                "compute/NetworkEndpoint"
            ],
            "diskresourcepolicyattachment": [
                "compute/ResourcePolicy",
                "compute/Disk"
            ],
            "router": [
                "compute/RouterNat",
                "compute/Network",
                "compute/VPNTunnel",
                "compute/RouterInterface",
                "compute/RouterPeer",
                "compute/Subnetwork",
                "organizations/Project",
                "compute/Address"
            ],
            "healthcheck": [
                "compute/InstanceGroupManager",
                "compute/BackendService",
                "compute/RegionInstanceGroupManager",
                "organizations/Project",
                "container/Cluster",
                "container/NodePool",
                "projects/Service",
                "compute/RegionBackendService"
            ],
            "subnetwork": [
                "container/Cluster",
                "compute/Network",
                "compute/Address",
                "secretmanager/SecretIamBinding",
                "compute/Instance",
                "compute/RouterNat",
                "compute/Firewall",
                "vpcaccess/Connector"
            ],
            "regionhealthcheck": [
                "compute/RegionBackendService",
                "projects/Service",
                "compute/Firewall",
                "compute/Subnetwork"
            ],
            "routernat": [
                "compute/Address",
                "compute/Router",
                "compute/Subnetwork",
                "compute/Network",
                "organizations/Project",
                "container/Cluster",
                "projects/Service"
            ],
            "backendservice": [
                "compute/URLMap",
                "iap/WebBackendServiceIamMember",
                "compute/RegionNetworkEndpointGroup",
                "projects/Service",
                "cloudrun/Service",
                "compute/HealthCheck",
                "compute/InstanceGroup",
                "compute/SecurityPolicy"
            ],
            "backendbucket": [
                "compute/URLMap",
                "storage/Bucket",
                "projects/Service",
                "organizations/Project",
                "compute/BackendBucketSignedUrlKey",
                "compute/GlobalAddress"
            ],
            "regionbackendservice": [
                "compute/RegionUrlMap",
                "compute/RegionHealthCheck",
                "compute/ForwardingRule",
                "projects/Service",
                "compute/RegionInstanceGroupManager",
                "compute/HealthCheck",
                "compute/InstanceGroup",
                "compute/Subnetwork"
            ],
            "managedsslcertificate": [
                "compute/TargetHttpsProxy",
                "projects/Service",
                "organizations/Project",
                "dns/RecordSet",
                "compute/GlobalAddress",
                "compute/URLMap",
                "compute/GlobalForwardingRule",
                "dns/ManagedZone"
            ],
            "urlmap": [
                "compute/TargetHttpsProxy",
                "compute/TargetHttpProxy",
                "compute/BackendService",
                "organizations/Project",
                "projects/Service",
                "compute/BackendBucket",
                "container/Cluster",
                "container/NodePool"
            ],
            "regionurlmap": [
                "compute/RegionTargetHttpsProxy",
                "compute/RegionBackendService",
                "compute/RegionTargetHttpProxy",
                "compute/Subnetwork"
            ],
            "targethttpsproxy": [
                "compute/GlobalForwardingRule",
                "compute/URLMap",
                "compute/ManagedSslCertificate",
                "projects/Service",
                "organizations/Project",
                "dns/RecordSet",
                "compute/SSLPolicy",
                "compute/SSLCertificate"
            ],
            "regiontargethttpproxy": [
                "compute/ForwardingRule",
                "compute/RegionUrlMap",
                "compute/Subnetwork"
            ],
            "globalforwardingrule": [
                "compute/GlobalAddress",
                "compute/TargetHttpsProxy",
                "compute/TargetHttpProxy",
                "projects/Service",
                "organizations/Project",
                "dns/RecordSet",
                "container/Cluster",
                "container/NodePool"
            ],
            "forwardingrule": [
                "compute/Address",
                "compute/Network",
                "compute/Subnetwork",
                "compute/RegionTargetHttpsProxy",
                "compute/TargetHttpsProxy",
                "compute/RegionBackendService",
                "dns/RecordSet",
                "compute/Instance"
            ],
            "securitypolicy": [
                "compute/BackendService",
                "projects/Service",
                "organizations/Project",
                "compute/URLMap",
                "monitoring/AlertPolicy"
            ],
            "sslpolicy": [
                "compute/TargetHttpsProxy",
                "organizations/Project",
                "projects/Service",
                "compute/RegionTargetHttpsProxy"
            ],
            "address": [
                "organizations/Project",
                "projects/Service",
                "compute/RouterNat",
                "dns/RecordSet",
                "compute/Instance",
                "compute/ForwardingRule",
                "compute/Subnetwork",
                "container/Cluster"
            ],
            "instancetemplate": [
                "compute/InstanceGroupManager",
                "compute/RegionInstanceGroupManager",
                "compute/Subnetwork",
                "serviceAccount/Account",
                "compute/Network",
                "compute/InstanceFromTemplate",
                "storage/Bucket",
                "organizations/Project"
            ],
            "instancegroupmanager": [
                "compute/InstanceTemplate",
                "compute/HealthCheck",
                "compute/URLMap",
                "compute/Network",
                "organizations/Project",
                "compute/HttpHealthCheck",
                "compute/Autoscaler"
            ],
            "regioninstancegroupmanager": [
                "compute/RegionAutoscaler",
                "compute/InstanceTemplate",
                "compute/HealthCheck",
                "compute/BackendService",
                "compute/RegionBackendService",
                "compute/Subnetwork"
            ],
            "regionautoscaler": [
                "compute/RegionInstanceGroupManager"
            ],
            "targethttpproxy": [
                "compute/GlobalForwardingRule",
                "compute/URLMap",
                "organizations/Project",
                "projects/Service",
                "container/Cluster",
                "container/NodePool",
                "compute/ForwardingRule"
            ],
            "regionnetworkendpointgroup": [
                "compute/BackendService",
                "cloudrun/Service",
                "projects/Service",
                "compute/GlobalAddress",
                "organizations/Project",
                "apigateway/Gateway"
            ],
            "projectmetadataitem": [
                "organizations/Project",
                "serviceAccount/IAMBinding"
            ],
            "httphealthcheck": [
                "compute/BackendService",
                "compute/InstanceGroupManager",
                "compute/URLMap",
                "compute/GlobalAddress",
                "organizations/Project"
            ],
            "route": [
                "compute/Firewall",
                "compute/Network",
                "organizations/Project",
                "redis/Instance",
                "container/NodePool",
                "container/Cluster"
            ],
            "targetpool": [
                "compute/ForwardingRule",
                "compute/Instance",
                "organizations/Project"
            ],
            "subnetworkiammember": [
                "organizations/Project"
            ],
            "sharedvpcserviceproject": [
                "projects/Service",
                "projects/IAMMember",
                "folder/IAMMember",
                "compute/Subnetwork",
                "organizations/Project",
                "compute/GlobalAddress",
                "compute/SharedVPCHostProject"
            ],
            "sharedvpchostproject": [
                "compute/SharedVPCServiceProject",
                "projects/Service"
            ],
            "subnetworkiampolicy": [
                "compute/Subnetwork"
            ],
            "havpngateway": [
                "compute/VPNTunnel",
                "compute/Network"
            ],
            "instancefromtemplate": [
                "pubsub/TopicIAMMember",
                "projects/IAMMember",
                "compute/InstanceTemplate",
                "storage/BucketIAMMember",
                "secretmanager/SecretVersion",
                "secretmanager/SecretIamMember",
                "dns/RecordSet"
            ],
            "externalvpngateway": [
                "compute/VPNTunnel",
                "projects/Service"
            ],
            "vpntunnel": [
                "compute/RouterInterface",
                "compute/Router",
                "compute/HaVpnGateway",
                "compute/ExternalVpnGateway"
            ],
            "routerinterface": [
                "compute/RouterPeer",
                "compute/Router",
                "compute/VPNTunnel"
            ],
            "routerpeer": [
                "compute/Router",
                "compute/RouterInterface"
            ],
            "disk": [
                "compute/Instance",
                "compute/DiskResourcePolicyAttachment",
                "projects/Service",
                "compute/AttachedDisk"
            ],
            "instancegroupnamedport": [
                "container/Cluster",
                "organizations/Project",
                "container/NodePool"
            ],
            "networkpeering": [
                "compute/Network",
                "compute/Subnetwork"
            ],
            "image": [
                "compute/Instance",
                "storage/BucketObject"
            ],
            "instancegroup": [
                "compute/BackendService",
                "compute/Instance",
                "compute/RegionBackendService",
                "compute/Firewall",
                "compute/GlobalAddress"
            ],
            "regionsslcertificate": [
                "compute/RegionTargetHttpsProxy",
                "projects/Service",
                "compute/Subnetwork"
            ],
            "sslcertificate": [
                "projects/Service",
                "compute/TargetHttpsProxy",
                "secretmanager/Secret"
            ],
            "regiontargethttpsproxy": [
                "compute/ForwardingRule",
                "compute/RegionUrlMap",
                "compute/RegionSslCertificate",
                "compute/SSLPolicy",
                "compute/Subnetwork"
            ],
            "globalnetworkendpointgroup": [
                "compute/GlobalNetworkEndpoint",
                "compute/BackendService",
                "projects/Service",
                "organizations/Project"
            ],
            "globalnetworkendpoint": [
                "compute/GlobalNetworkEndpointGroup",
                "organizations/Project",
                "apigateway/Gateway"
            ],
            "networkendpointgroup": [
                "compute/NetworkEndpoint",
                "compute/BackendService"
            ],
            "networkendpoint": [
                "compute/NetworkEndpointGroup",
                "compute/Instance"
            ],
            "backendbucketsignedurlkey": [
                "cloudrun/Service",
                "compute/BackendBucket",
                "storage/BucketIAMMember",
                "secretmanager/Secret",
                "secretmanager/SecretVersion"
            ],
            "organizationsecuritypolicy": [
                "compute/OrganizationSecurityPolicyRule",
                "compute/OrganizationSecurityPolicyAssociation",
                "organizations/Folder"
            ],
            "organizationsecuritypolicyassociation": [
                "organizations/Folder",
                "compute/OrganizationSecurityPolicy"
            ],
            "organizationsecuritypolicyrule": [
                "compute/OrganizationSecurityPolicy"
            ],
            "targettcpproxy": [
                "compute/GlobalForwardingRule",
                "compute/BackendService"
            ],
            "autoscaler": [
                "pubsub/Subscription",
                "compute/InstanceGroupManager",
                "organizations/Project"
            ],
            "attacheddisk": [
                "compute/Instance",
                "compute/Disk"
            ],
            "vpngateway": [
                "compute/ForwardingRule",
                "compute/Network"
            ],
            "instanceiammember": [
                "compute/Instance"
            ]
        },
        "serviceAccount": {
            "account": [
                "projects/IAMMember",
                "cloudrun/Service",
                "cloudrun/IamBinding",
                "projects/IAMBinding",
                "serviceAccount/IAMMember",
                "storage/BucketIAMMember",
                "secretmanager/SecretIamMember",
                "serviceAccount/Key"
            ],
            "key": [
                "serviceAccount/Account",
                "container/Cluster",
                "container/NodePool",
                "projects/IAMMember",
                "secretmanager/SecretVersion",
                "projects/Service",
                "projects/IAMCustomRole",
                "projects/IAMBinding"
            ],
            "iambinding": [
                "serviceAccount/Account",
                "container/Cluster",
                "container/NodePool",
                "projects/IAMMember",
                "organizations/Project",
                "cloudscheduler/Job",
                "iam/WorkloadIdentityPool",
                "projects/Service"
            ],
            "iammember": [
                "serviceAccount/Account",
                "pubsub/TopicIAMMember",
                "container/Cluster",
                "kms/KeyRingIAMMember",
                "projects/IAMMember",
                "kms/CryptoKeyIAMMember",
                "storage/BucketIAMMember",
                "pubsub/SubscriptionIAMMember"
            ],
            "iampolicy": [
                "serviceAccount/Account",
                "container/Cluster"
            ]
        },
        "container": {
            "cluster": [
                "projects/IAMBinding",
                "container/NodePool",
                "compute/InstanceGroupNamedPort",
                "projects/IAMMember",
                "compute/Network",
                "serviceAccount/IAMBinding",
                "compute/Firewall",
                "storage/Bucket"
            ],
            "nodepool": [
                "projects/IAMBinding",
                "container/Cluster",
                "projects/IAMMember",
                "compute/InstanceGroupNamedPort",
                "serviceAccount/Account",
                "compute/URLMap",
                "compute/GlobalForwardingRule",
                "serviceAccount/Key"
            ],
            "registry": [
                "cloudrun/Service",
                "storage/BucketIAMMember",
                "projects/Service",
                "organizations/Project"
            ]
        },
        "artifactregistry": {
            "repository": [
                "artifactregistry/RepositoryIamMember",
                "projects/Service",
                "cloudrun/Service",
                "artifactregistry/RepositoryIamBinding",
                "artifactregistry/RepositoryIamPolicy",
                "compute/InstanceTemplate",
                "kms/CryptoKey",
                "organizations/Project"
            ],
            "repositoryiammember": [
                "cloudrun/Service",
                "serviceAccount/Account",
                "artifactregistry/Repository",
                "projects/Service",
                "organizations/Project"
            ],
            "repositoryiampolicy": [
                "serviceAccount/Account",
                "artifactregistry/Repository"
            ],
            "repositoryiambinding": [
                "serviceAccount/Account",
                "artifactregistry/Repository",
                "serviceAccount/Key",
                "projects/IAMCustomRole",
                "storage/HmacKey"
            ]
        },
        "projects": {
            "iambinding": [
                "container/Cluster",
                "container/NodePool",
                "serviceAccount/Account",
                "organizations/Project",
                "projects/IAMMember",
                "projects/Service",
                "projects/IAMCustomRole",
                "cloudbuild/Trigger"
            ],
            "iamcustomrole": [
                "projects/IAMMember",
                "projects/IAMBinding",
                "cloudrun/IamBinding",
                "storage/BucketIAMMember",
                "organizations/Project",
                "serviceAccount/Key",
                "pubsub/SubscriptionIAMMember",
                "serviceAccount/IAMBinding"
            ],
            "iammember": [
                "serviceAccount/Account",
                "organizations/Project",
                "projects/Service",
                "projects/IAMBinding",
                "container/NodePool",
                "container/Cluster",
                "pubsub/TopicIAMMember",
                "serviceAccount/Key"
            ],
            "service": [
                "storage/Bucket",
                "projects/IAMMember",
                "organizations/Project",
                "cloudrun/Service",
                "serviceAccount/Account",
                "cloudtasks/Queue",
                "firestore/Document",
                "compute/Address"
            ],
            "serviceidentity": [
                "projects/IAMMember",
                "pubsub/SubscriptionIAMBinding",
                "pubsub/TopicIAMBinding",
                "secretmanager/SecretIamBinding",
                "monitoring/AlertPolicy",
                "composer/Environment",
                "organizations/Project"
            ],
            "iamauditconfig": [
                "organizations/Project"
            ],
            "defaultserviceaccounts": [
                "organizations/Project"
            ],
            "organizationpolicy": [
                "projects/Service",
                "storage/Bucket",
                "organizations/Project"
            ]
        },
        "servicenetworking": {
            "connection": [
                "sql/DatabaseInstance",
                "compute/GlobalAddress",
                "compute/Network",
                "redis/Instance",
                "projects/Service",
                "sql/User",
                "organizations/Project",
                "vpcaccess/Connector"
            ]
        },
        "sql": {
            "databaseinstance": [
                "sql/User",
                "projects/Service",
                "sql/Database",
                "cloudrun/Service",
                "sql/SslCert",
                "cloudbuild/Trigger",
                "compute/Network",
                "cloudscheduler/Job"
            ],
            "user": [
                "sql/DatabaseInstance",
                "secretmanager/Secret",
                "secretmanager/SecretVersion",
                "sql/Database",
                "cloudrun/Service",
                "sql/SslCert",
                "projects/IAMBinding",
                "projects/Service"
            ],
            "database": [
                "sql/DatabaseInstance",
                "sql/User",
                "cloudrun/Service",
                "secretmanager/SecretVersion",
                "projects/Service",
                "bigquery/Connection",
                "organizations/Project",
                "cloudbuild/Trigger"
            ],
            "sslcert": [
                "sql/DatabaseInstance",
                "sql/User",
                "secretmanager/Secret",
                "secretmanager/SecretVersion",
                "servicenetworking/Connection"
            ]
        },
        "cloudtasks": {
            "queue": [
                "cloudfunctions/Function",
                "projects/Service",
                "organizations/Project",
                "appengine/StandardAppVersion",
                "workflows/Workflow",
                "projects/IAMMember",
                "monitoring/AlertPolicy",
                "secretmanager/SecretVersion"
            ]
        },
        "logging": {
            "metric": [
                "monitoring/AlertPolicy",
                "organizations/Project",
                "cloudrun/Service",
                "projects/Service"
            ],
            "projectsink": [
                "pubsub/Topic",
                "pubsub/TopicIAMBinding",
                "bigquery/Dataset",
                "storage/Bucket",
                "projects/IAMMember",
                "organizations/Project",
                "pubsub/TopicIAMMember",
                "bigquery/DatasetIamMember"
            ],
            "projectbucketconfig": [
                "logging/ProjectSink"
            ],
            "billingaccountsink": [
                "bigquery/Dataset"
            ]
        },
        "kms": {
            "keyring": [
                "kms/CryptoKey",
                "kms/KeyRingIAMMember",
                "projects/Service",
                "cloudrun/Service",
                "organizations/Project",
                "kms/CryptoKeyIAMMember",
                "container/Cluster",
                "kms/KeyRingIAMPolicy"
            ],
            "cryptokey": [
                "kms/KeyRing",
                "kms/CryptoKeyIAMBinding",
                "kms/CryptoKeyIAMMember",
                "appengine/StandardAppVersion",
                "pubsub/Topic",
                "container/Cluster",
                "storage/Bucket",
                "cloudrun/Service"
            ],
            "cryptokeyiammember": [
                "kms/CryptoKey",
                "projects/IAMMember",
                "serviceAccount/Account",
                "pubsub/Topic",
                "serviceAccount/IAMMember",
                "cloudrun/Service",
                "kms/KeyRing",
                "cloudidentity/Group"
            ],
            "keyringiammember": [
                "kms/KeyRing",
                "projects/IAMMember",
                "serviceAccount/Account",
                "serviceAccount/IAMMember",
                "container/Cluster",
                "organizations/Project"
            ],
            "cryptokeyiambinding": [
                "kms/CryptoKey",
                "serviceAccount/Account",
                "storage/Bucket",
                "storage/BucketIAMMember",
                "storage/BucketObject",
                "appengine/Application",
                "appengine/StandardAppVersion",
                "appengine/EngineSplitTraffic"
            ],
            "keyringiampolicy": [
                "kms/KeyRing"
            ],
            "cryptokeyiampolicy": [
                "kms/CryptoKey",
                "container/Cluster",
                "projects/Service"
            ]
        },
        "cloudscheduler": {
            "job": [
                "serviceAccount/Account",
                "cloudrun/Service",
                "projects/Service",
                "cloudfunctions/Function",
                "monitoring/AlertPolicy",
                "appengine/Application",
                "sql/DatabaseInstance",
                "pubsub/Topic"
            ]
        },
        "pubsub": {
            "topic": [
                "pubsub/Subscription",
                "pubsub/TopicIAMMember",
                "pubsub/TopicIAMBinding",
                "logging/ProjectSink",
                "cloudfunctions/Function",
                "organizations/Project",
                "projects/Service",
                "cloudrun/Service"
            ],
            "subscription": [
                "pubsub/Topic",
                "pubsub/SubscriptionIAMBinding",
                "pubsub/SubscriptionIAMMember",
                "serviceAccount/Account",
                "cloudrun/Service",
                "organizations/Project",
                "projects/Service",
                "monitoring/AlertPolicy"
            ],
            "topiciammember": [
                "serviceAccount/Account",
                "pubsub/Topic",
                "projects/IAMMember",
                "serviceAccount/IAMMember",
                "storage/Notification",
                "compute/InstanceFromTemplate",
                "organizations/Project",
                "logging/ProjectSink"
            ],
            "topiciambinding": [
                "serviceAccount/Account",
                "pubsub/Topic",
                "logging/ProjectSink",
                "projects/ServiceIdentity",
                "storage/Notification",
                "organizations/Project"
            ],
            "topiciampolicy": [
                "pubsub/Topic"
            ],
            "subscriptioniampolicy": [
                "pubsub/Subscription",
                "secretmanager/Secret"
            ],
            "subscriptioniambinding": [
                "pubsub/Subscription",
                "serviceAccount/Account",
                "projects/ServiceIdentity"
            ],
            "subscriptioniammember": [
                "pubsub/Subscription",
                "serviceAccount/Account",
                "organizations/Project",
                "projects/IAMMember",
                "serviceAccount/IAMMember",
                "projects/IAMCustomRole"
            ],
            "schema": [
                "pubsub/Topic"
            ]
        },
        "spanner": {
            "instance": [
                "cloudrun/Service",
                "spanner/Database",
                "spanner/DatabaseIAMPolicy"
            ],
            "database": [
                "cloudrun/Service",
                "spanner/DatabaseIAMPolicy",
                "spanner/Instance"
            ],
            "databaseiampolicy": [
                "spanner/Instance",
                "spanner/Database"
            ]
        },
        "bigquery": {
            "dataset": [
                "bigquery/Table",
                "bigquery/DataTransferConfig",
                "bigquery/Routine",
                "projects/Service",
                "logging/ProjectSink",
                "cloudfunctions/Function",
                "serviceAccount/Account",
                "bigquery/DatasetIamMember"
            ],
            "table": [
                "bigquery/Dataset",
                "bigquery/Routine",
                "bigquery/DataTransferConfig",
                "organizations/Project",
                "pubsub/Subscription",
                "storage/Bucket",
                "bigquery/Job",
                "bigquery/IamMember"
            ],
            "datasetiammember": [
                "serviceAccount/Account",
                "bigquery/Dataset",
                "logging/ProjectSink",
                "cloudfunctions/Function"
            ],
            "connection": [
                "sql/DatabaseInstance",
                "sql/Database",
                "projects/Service"
            ],
            "routine": [
                "bigquery/Dataset",
                "bigquery/DataTransferConfig",
                "bigquery/Table"
            ],
            "job": [
                "bigquery/Table"
            ],
            "datatransferconfig": [
                "bigquery/Dataset",
                "bigquery/Table",
                "bigquery/Routine",
                "serviceAccount/Account"
            ],
            "iammember": [
                "serviceAccount/Account",
                "bigquery/Dataset",
                "bigquery/Table"
            ],
            "datasetaccess": [
                "serviceAccount/Account",
                "bigquery/Dataset",
                "logging/ProjectSink"
            ],
            "datasetiambinding": [
                "serviceAccount/Account",
                "bigquery/Dataset"
            ]
        },
        "redis": {
            "instance": [
                "secretmanager/SecretVersion",
                "cloudrun/Service",
                "compute/Network",
                "projects/Service",
                "dns/RecordSet",
                "container/Cluster",
                "organizations/Project",
                "compute/Route"
            ]
        },
        "secretmanager": {
            "secret": [
                "secretmanager/SecretVersion",
                "secretmanager/SecretIamMember",
                "cloudrun/Service",
                "secretmanager/SecretIamBinding",
                "projects/Service",
                "organizations/Project",
                "cloudfunctions/Function",
                "secretmanager/SecretIamPolicy"
            ],
            "secretversion": [
                "secretmanager/Secret",
                "secretmanager/SecretIamMember",
                "cloudrun/Service",
                "projects/Service",
                "redis/Instance",
                "sql/User",
                "serviceAccount/Key",
                "sql/Database"
            ],
            "secretiambinding": [
                "serviceAccount/Account",
                "secretmanager/Secret",
                "dns/ManagedZone",
                "compute/Subnetwork",
                "organizations/Project",
                "compute/Network",
                "monitoring/NotificationChannel",
                "projects/ServiceIdentity"
            ],
            "secretiammember": [
                "secretmanager/Secret",
                "serviceAccount/Account",
                "secretmanager/SecretVersion",
                "projects/Service",
                "storage/BucketObject",
                "cloudrun/Service",
                "storage/Bucket",
                "compute/InstanceFromTemplate"
            ],
            "secretiampolicy": [
                "serviceAccount/Account",
                "secretmanager/Secret"
            ]
        },
        "cloudfunctions": {
            "function": [
                "storage/BucketObject",
                "cloudfunctions/FunctionIamMember",
                "serviceAccount/Account",
                "storage/Bucket",
                "cloudtasks/Queue",
                "organizations/Project",
                "projects/Service",
                "cloudscheduler/Job"
            ],
            "functioniammember": [
                "cloudfunctions/Function",
                "serviceAccount/Account",
                "cloudscheduler/Job",
                "billing/Budget"
            ],
            "functioniambinding": [
                "cloudfunctions/Function",
                "serviceAccount/Account",
                "organizations/Project"
            ],
            "callbackfunction": [
                "projects/Service"
            ]
        },
        "cloudrun": {
            "iampolicy": [
                "cloudrun/Service",
                "organizations/Project",
                "serviceAccount/Account",
                "projects/Service"
            ],
            "service": [
                "serviceAccount/Account",
                "compute/RegionNetworkEndpointGroup",
                "projects/Service",
                "cloudrun/IamBinding",
                "cloudrun/IamMember",
                "runtimeconfig/Variable",
                "compute/BackendService",
                "organizations/Project"
            ],
            "iammember": [
                "cloudrun/Service",
                "serviceAccount/Account"
            ],
            "domainmapping": [
                "cloudrun/Service",
                "dns/RecordSet",
                "dns/ManagedZone"
            ],
            "iambinding": [
                "serviceAccount/Account",
                "cloudrun/Service",
                "organizations/Project",
                "projects/IAMCustomRole"
            ]
        },
        "filestore": {
            "instance": [
                "projects/Service",
                "compute/Network",
                "organizations/Project"
            ]
        },
        "vpcaccess": {
            "connector": [
                "cloudrun/Service",
                "cloudfunctions/Function",
                "compute/Subnetwork",
                "compute/Network",
                "organizations/Project",
                "projects/Service",
                "cloudbuild/Trigger",
                "sql/DatabaseInstance"
            ]
        },
        "organizations": {
            "project": [
                "projects/Service",
                "projects/IAMMember",
                "projects/IAMBinding",
                "serviceAccount/Account",
                "cloudtasks/Queue",
                "storage/Bucket",
                "firestore/Index",
                "cloudrun/IamBinding"
            ],
            "iamcustomrole": [
                "projects/IAMMember",
                "folder/IAMBinding",
                "organizations/IAMMember"
            ],
            "folder": [
                "folder/IAMMember",
                "organizations/Project",
                "folder/IAMBinding",
                "essentialcontacts/Contact",
                "projects/Service",
                "compute/OrganizationSecurityPolicyAssociation",
                "compute/OrganizationSecurityPolicy"
            ],
            "iambinding": [
                "serviceAccount/Account"
            ],
            "iammember": [
                "serviceAccount/Account",
                "cloudidentity/Group",
                "organizations/IAMCustomRole"
            ]
        },
        "iam": {
            "workloadidentitypool": [
                "iam/WorkloadIdentityPoolProvider",
                "serviceAccount/IAMBinding",
                "serviceAccount/IAMMember",
                "projects/Service",
                "organizations/Project"
            ],
            "workloadidentitypoolprovider": [
                "iam/WorkloadIdentityPool",
                "organizations/Project"
            ]
        },
        "composer": {
            "environment": [
                "serviceAccount/Account",
                "dns/ManagedZone",
                "monitoring/AlertPolicy",
                "compute/Subnetwork",
                "storage/BucketIAMBinding",
                "compute/Instance",
                "compute/Network",
                "monitoring/NotificationChannel"
            ]
        },
        "iap": {
            "tunnelinstanceiambinding": [
                "compute/Instance",
                "organizations/Project",
                "serviceAccount/Account"
            ],
            "webbackendserviceiambinding": [
                "compute/BackendService",
                "organizations/Project"
            ],
            "tunnelinstanceiammember": [
                "serviceAccount/Account"
            ],
            "tunneliammember": [
                "serviceAccount/Account",
                "projects/Service",
                "organizations/Project"
            ],
            "brand": [
                "iap/Client",
                "projects/Service",
                "organizations/Project"
            ],
            "client": [
                "compute/BackendService",
                "projects/Service",
                "iap/Brand",
                "appengine/Application",
                "endpoints/Service"
            ],
            "webbackendserviceiammember": [
                "compute/BackendService",
                "container/Cluster"
            ],
            "appengineserviceiambinding": [
                "appengine/StandardAppVersion",
                "projects/Service"
            ]
        },
        "bigtable": {
            "instance": [
                "bigtable/Table",
                "bigtable/InstanceIamMember"
            ],
            "table": [
                "bigtable/Instance"
            ],
            "instanceiammember": [
                "serviceAccount/Account",
                "bigtable/Instance"
            ]
        },
        "cloudidentity": {
            "groupmembership": [
                "cloudidentity/Group",
                "serviceAccount/Account",
                "organizations/Project"
            ],
            "group": [
                "cloudidentity/GroupMembership",
                "projects/IAMMember",
                "folder/IAMMember",
                "organizations/IAMMember",
                "billing/AccountIamMember",
                "storage/BucketIAMMember",
                "kms/CryptoKeyIAMMember"
            ]
        },
        "appengine": {
            "application": [
                "firestore/Document",
                "cloudscheduler/Job",
                "projects/Service",
                "organizations/Project",
                "appengine/StandardAppVersion",
                "kms/CryptoKeyIAMBinding",
                "endpoints/Service",
                "iap/Client"
            ],
            "standardappversion": [
                "appengine/EngineSplitTraffic",
                "storage/Bucket",
                "storage/BucketObject",
                "storage/BucketIAMMember",
                "iap/AppEngineServiceIamBinding",
                "cloudscheduler/Job",
                "organizations/Project",
                "kms/CryptoKeyIAMBinding"
            ],
            "enginesplittraffic": [
                "appengine/StandardAppVersion",
                "kms/CryptoKeyIAMBinding"
            ],
            "domainmapping": [
                "appengine/ApplicationUrlDispatchRules",
                "dns/RecordSet"
            ],
            "applicationurldispatchrules": [
                "dns/RecordSet",
                "appengine/StandardAppVersion",
                "appengine/DomainMapping"
            ]
        },
        "endpoints": {
            "service": [
                "projects/Service",
                "endpoints/ServiceIamMember",
                "organizations/Project",
                "cloudrun/Service",
                "dns/RecordSet",
                "appengine/Application",
                "iap/Client",
                "appengine/StandardAppVersion"
            ],
            "serviceiammember": [
                "endpoints/Service"
            ]
        },
        "apigateway": {
            "api": [
                "apigateway/ApiConfig",
                "apigateway/Gateway",
                "projects/Service",
                "organizations/Project"
            ],
            "apiconfig": [
                "cloudrun/Service",
                "apigateway/Gateway",
                "serviceAccount/Account",
                "apigateway/Api",
                "cloudfunctions/Function"
            ],
            "gateway": [
                "compute/GlobalNetworkEndpoint",
                "compute/BackendService",
                "apigateway/ApiConfig",
                "apigateway/Api",
                "compute/RegionNetworkEndpointGroup"
            ]
        },
        "workflows": {
            "workflow": [
                "cloudfunctions/Function",
                "cloudscheduler/Job",
                "serviceAccount/Account",
                "cloudrun/Service",
                "projects/IAMBinding",
                "cloudtasks/Queue",
                "projects/Service",
                "compute/Address"
            ]
        },
        "cloudbuild": {
            "trigger": [
                "projects/Service",
                "organizations/Project",
                "sourcerepo/Repository",
                "projects/IAMBinding",
                "storage/Bucket",
                "sql/DatabaseInstance",
                "serviceAccount/Account",
                "projects/IAMMember"
            ],
            "workerpool": [
                "organizations/Project"
            ]
        },
        "firebase": {
            "project": [
                "firebase/WebApp",
                "projects/Service",
                "organizations/Project",
                "serviceAccount/Account"
            ],
            "webapp": [
                "firebase/Project",
                "organizations/Project"
            ]
        },
        "sourcerepo": {
            "repository": [
                "cloudbuild/Trigger",
                "projects/Service",
                "organizations/Project"
            ]
        },
        "folder": {
            "iammember": [
                "organizations/Folder",
                "compute/SharedVPCServiceProject",
                "organizations/Project",
                "cloudidentity/Group",
                "serviceAccount/Account"
            ],
            "iambinding": [
                "organizations/Folder",
                "organizations/IAMCustomRole"
            ]
        },
        "runtimeconfig": {
            "config": [
                "runtimeconfig/ConfigIamMember",
                "runtimeconfig/Variable",
                "cloudrun/Service",
                "projects/Service",
                "organizations/Project"
            ],
            "variable": [
                "runtimeconfig/Config",
                "cloudrun/Service"
            ],
            "configiammember": [
                "cloudrun/Service",
                "serviceAccount/Account",
                "runtimeconfig/Config"
            ]
        },
        "identityplatform": {
            "defaultsupportedidpconfig": [
                "organizations/Project"
            ],
            "tenant": [
                "identityplatform/TenantDefaultSupportedIdpConfig",
                "organizations/Project"
            ],
            "tenantdefaultsupportedidpconfig": [
                "identityplatform/Tenant"
            ]
        },
        "firestore": {
            "index": [
                "organizations/Project"
            ],
            "document": [
                "projects/Service",
                "appengine/Application"
            ]
        },
        "billing": {
            "budget": [
                "pubsub/Topic",
                "cloudfunctions/FunctionIamMember"
            ],
            "accountiammember": [
                "serviceAccount/Account",
                "cloudidentity/Group"
            ]
        },
        "orgpolicy": {
            "policy": [
                "projects/Service",
                "storage/BucketIAMPolicy",
                "organizations/Project"
            ]
        },
        "certificatemanager": {
            "dnsauthorization": [
                "certificatemanager/Certificate",
                "dns/RecordSet"
            ],
            "certificatemap": [
                "certificatemanager/CertificateMapEntry",
                "compute/TargetHttpsProxy"
            ],
            "certificate": [
                "certificatemanager/CertificateMapEntry",
                "certificatemanager/DnsAuthorization"
            ],
            "certificatemapentry": [
                "certificatemanager/CertificateMap",
                "certificatemanager/Certificate"
            ]
        },
        "certificateauthority": {
            "capool": [
                "certificateauthority/CaPoolIamMember",
                "certificateauthority/Authority",
                "projects/Service"
            ],
            "authority": [
                "certificateauthority/CaPool"
            ],
            "capooliammember": [
                "serviceAccount/Account",
                "certificateauthority/CaPool"
            ]
        },
        "eventarc": {
            "trigger": [
                "storage/Bucket",
                "serviceAccount/Account",
                "container/Cluster",
                "organizations/Project"
            ]
        },
        "essentialcontacts": {
            "contact": [
                "organizations/Folder"
            ]
        },
        "servicedirectory": {
            "namespace": [
                "servicedirectory/Service",
                "dns/ManagedZone"
            ],
            "service": [
                "servicedirectory/Endpoint",
                "servicedirectory/Namespace"
            ],
            "endpoint": [
                "compute/Network",
                "servicedirectory/Service",
                "redis/Instance",
                "compute/Address"
            ]
        },
        "cloudfunctionsv2": {
            "function": [
                "pubsub/Topic",
                "storage/BucketObject"
            ]
        }
    },
    "aws-native": {
        "s3": {
            "bucket": [
                "cloudfront/Distribution",
                "kinesisfirehose/DeliveryStream",
                "iam/Role",
                "kms/Key",
                "cloudtrail/Trail"
            ]
        },
        "ec2": {
            "vpc": [
                "ec2/Subnet",
                "ec2/RouteTable"
            ],
            "routetable": [
                "ec2/SubnetRouteTableAssociation",
                "ec2/VPC"
            ],
            "subnet": [
                "ec2/SubnetRouteTableAssociation",
                "ec2/VPC"
            ],
            "subnetroutetableassociation": [
                "ec2/RouteTable",
                "ec2/Subnet"
            ],
            "ipam": [
                "ec2/IPAMPool"
            ],
            "ipampool": [
                "ec2/IPAM",
                "ec2/IPAMAllocation"
            ],
            "ipamallocation": [
                "ec2/IPAMPool"
            ]
        },
        "cloudfront": {
            "cachepolicy": [
                "cloudfront/Distribution"
            ],
            "distribution": [
                "cloudfront/CachePolicy",
                "s3/Bucket",
                "cloudfront/Function",
                "cloudfront/CloudFrontOriginAccessIdentity",
                "cloudfront/KeyGroup"
            ],
            "function": [
                "cloudfront/Distribution"
            ],
            "cloudfrontoriginaccessidentity": [
                "cloudfront/Distribution"
            ],
            "publickey": [
                "cloudfront/KeyGroup"
            ],
            "keygroup": [
                "cloudfront/PublicKey",
                "cloudfront/Distribution"
            ]
        },
        "ecs": {
            "taskdefinition": [
                "ecs/Service"
            ],
            "service": [
                "ecs/TaskDefinition",
                "ecs/Cluster"
            ],
            "cluster": [
                "ecs/Service"
            ]
        },
        "wafv2": {
            "webacl": [
                "wafv2/WebACLAssociation",
                "wafv2/LoggingConfiguration",
                "wafv2/RuleGroup",
                "wafv2/IPSet"
            ],
            "webaclassociation": [
                "wafv2/WebACL"
            ],
            "rulegroup": [
                "wafv2/WebACL"
            ],
            "loggingconfiguration": [
                "wafv2/WebACL"
            ],
            "ipset": [
                "wafv2/WebACL"
            ]
        },
        "kms": {
            "key": [
                "kms/Alias",
                "iam/Role",
                "dynamodb/Table",
                "s3/Bucket",
                "cloudtrail/Trail"
            ],
            "alias": [
                "kms/Key"
            ]
        },
        "kinesis": {
            "stream": [
                "kinesisfirehose/DeliveryStream"
            ]
        },
        "kinesisfirehose": {
            "deliverystream": [
                "s3/Bucket",
                "kinesis/Stream"
            ]
        },
        "batch": {
            "computeenvironment": [
                "batch/JobQueue"
            ],
            "jobqueue": [
                "batch/ComputeEnvironment"
            ]
        },
        "iotevents": {
            "input": [
                "iot/TopicRule"
            ]
        },
        "iot": {
            "accountauditconfiguration": [
                "iot/ScheduledAudit"
            ],
            "topicrule": [
                "iotevents/Input"
            ],
            "scheduledaudit": [
                "iot/AccountAuditConfiguration"
            ]
        },
        "memorydb": {
            "subnetgroup": [
                "memorydb/Cluster"
            ],
            "cluster": [
                "memorydb/SubnetGroup",
                "memorydb/ParameterGroup",
                "memorydb/ACL"
            ],
            "user": [
                "memorydb/ACL"
            ],
            "parametergroup": [
                "memorydb/Cluster"
            ],
            "acl": [
                "memorydb/Cluster",
                "memorydb/User"
            ]
        },
        "eks": {
            "cluster": [
                "eks/FargateProfile",
                "eks/Addon"
            ],
            "addon": [
                "eks/Cluster"
            ],
            "fargateprofile": [
                "eks/Cluster"
            ]
        },
        "acmpca": {
            "certificateauthority": [
                "acmpca/Permission",
                "acmpca/Certificate",
                "acmpca/CertificateAuthorityActivation"
            ],
            "permission": [
                "acmpca/CertificateAuthority"
            ],
            "certificate": [
                "acmpca/CertificateAuthorityActivation",
                "acmpca/CertificateAuthority"
            ],
            "certificateauthorityactivation": [
                "acmpca/CertificateAuthority",
                "acmpca/Certificate"
            ]
        },
        "iam": {
            "role": [
                "kms/Key",
                "dynamodb/Table",
                "s3/Bucket"
            ]
        },
        "dynamodb": {
            "table": [
                "iam/Role",
                "kms/Key"
            ]
        },
        "cloudtrail": {
            "trail": [
                "s3/Bucket",
                "kms/Key"
            ]
        },
        "redshiftserverless": {
            "namespace": [
                "redshiftserverless/Workgroup"
            ],
            "workgroup": [
                "redshiftserverless/Namespace"
            ]
        },
        "sagemaker": {
            "domain": [
                "sagemaker/UserProfile"
            ],
            "userprofile": [
                "sagemaker/Domain"
            ]
        },
        "location": {
            "geofencecollection": [
                "location/TrackerConsumer"
            ],
            "tracker": [
                "location/TrackerConsumer"
            ],
            "trackerconsumer": [
                "location/GeofenceCollection",
                "location/Tracker"
            ]
        }
    }
};