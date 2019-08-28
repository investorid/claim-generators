/**
 * A claim generated by a [Generator] from a set of data and a configuration from a [ClaimTopic].
 * The claim remains to be signed. It might also not be associated to an Issuer or an Identity address yet.
 */
export interface GeneratedClaim<Topic extends ClaimTopic> {
  data: string;
  issuer?: Address;
  identity?: Address;
  privateData: { [key: string]: any };
  publicData: { [key: string]: any };
  scheme: number;
  topic: number;
  uri: string;
}

/**
 * A [UnparsedClaim] that was parsed by a [Parser].
 * A new field `parsedData` is added that contains the data of the claim parser as defined by the claim topic format.
 */
export interface ParsedClaim<Topic extends ClaimTopic> extends UnparsedClaim<Topic> {
  parsedData: { [key: string]: any };
}

/**
 * A [RawClaim] that was identified as of a specific [ClaimTopic] by a safe type check.
 */
export interface UnparsedClaim<Topic extends ClaimTopic> extends RawClaim {

}

/**
 * A claim as returned by the blockchain state.
 */
export interface RawClaim {
  data: string;
  issuer: string;
  scheme: number;
  signature: string;
  topic: number;
  uri: string;
}

/**
 * A claim topic basic definition.
 * Specific claim topic have `specific: true`.
 */
export abstract class ClaimTopic {
  static readonly topic: number;
  static readonly scheme: number;
  static readonly specific: boolean;
}
