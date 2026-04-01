import type { DeniUsageInfo, DeniUsageBucket } from "./api.ts";

export function formatUsageReport(usage: DeniUsageInfo): string {
  const lines = [
    "Usage",
    `  Tier: ${usage.tier}`,
    `  Plan ID: ${usage.planId ?? "-"}`,
    `  Status: ${usage.status ?? "-"}`,
    `  Team: ${usage.isTeam ? "yes" : "no"}`,
    `  Billing period end: ${usage.periodEnd ?? "-"}`,
    `  Max mode: ${formatMaxMode(usage)}`,
  ];

  if (usage.usage.length === 0) {
    lines.push("", "No usage buckets returned.");
    return lines.join("\n");
  }

  lines.push("", "Limits");
  for (const bucket of usage.usage) {
    lines.push(...formatUsageBucket(bucket));
  }

  return lines.join("\n");
}

function formatUsageBucket(bucket: DeniUsageBucket): string[] {
  return [
    `  ${bucket.category} (${bucket.unit})`,
    `    used: ${bucket.used}`,
    `    limit: ${bucket.limit ?? "-"}`,
    `    remaining: ${bucket.remaining ?? "-"}`,
    `    period: ${bucket.periodStart} -> ${bucket.periodEnd ?? "-"}`,
  ];
}

function formatMaxMode(usage: DeniUsageInfo): string {
  if (usage.maxModeEnabled) {
    return "enabled";
  }

  if (usage.maxModeEligible) {
    return "eligible";
  }

  return "disabled";
}
