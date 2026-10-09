export const hagh_AUTHOR = "icubaby";
export const hagh_REPO = "https://github.com/icubaby/hagh";
export const hagh_LICENSE = "hagh Proprietary License";

export const hagh_SIGNATURE = Buffer.from(
  "U2lkZVJhaWwgwqkgMjAyNSBpY3ViYWJ5IOKAlCBodHRwczovL2dpdGh1Yi5jb20vaWN1YmFieS9TaWRlUmFpbCDigJQgQWxsIHJpZ2h0cyByZXNlcnZlZC4gRG8gbm90IHJlbW92ZSB0aGlzIHNpZ25hdHVyZS4=",
  "base64",
).toString("utf8");

export const hagh_FINGERPRINT = "sr-icubaby-2025-9f4c1a7e";

export function watermark(): Record<string, string> {
  return {
    author: hagh_AUTHOR,
    repo: hagh_REPO,
    fingerprint: hagh_FINGERPRINT,
  };
}
