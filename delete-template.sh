#!/usr/bin/env bash

set -euo pipefail

oc delete deployment quay-demo-plugin -n test-harish-ns
oc delete configmap nginx-conf -n test-harish-ns
oc delete service quay-demo-plugin -n test-harish-ns

