/**
 * @amlplugins/google-cloud-dataform
 *
 * Thin namespaced re-export of the native @google-cloud/dataform SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Dataform.
 */

import * as _sdk from "@google-cloud/dataform";
export * from "@google-cloud/dataform";
export { _sdk as sdk };
export default _sdk;
