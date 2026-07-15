# Harness CI Repair Fixture

Isolated repository used to exercise the mini-agent-harness GitHub App,
required-check, failure-evidence, and bounded CI-repair workflow.

The first pull-request revision intentionally reports a compatibility failure.
A repair revision must implement the reported contract and acknowledge the
evidence in `ci-repair-proof.txt`.
