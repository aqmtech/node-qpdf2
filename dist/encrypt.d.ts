type BaseYesNoOptions = "n" | "y";
type BasePrintOptions = "full" | "low" | "none";
interface BaseEncryptOptions {
    /** The location of the unencrypted pdf file */
    input: string;
    /** If defined, the output location of the encrypted pdf. If not defined, a Buffer will be returned. */
    output?: string;
    /**
     * If defined, will determine if the encrypted pdf will overwrite an existing file
     * @default true
     */
    overwrite?: boolean | undefined;
    /**
     * A string containing the password with will be used to decrypt the pdf.
     * Optionally, an object containing `user` and `owner` for setting different roles.
     * If undefined, will encrypt a pdf without requiring a password to decrypt
     */
    password?: {
        owner: string;
        user: string;
    } | string;
}
interface BaseRestrictionsOptions {
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-accessibility */
    accessibility?: BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-annotate */
    annotate?: BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-assemble */
    assemble?: BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-cleartext-metadata */
    cleartextMetadata?: boolean;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-extract */
    extract?: BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-form */
    form?: BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-modify */
    modify?: "all" | "annotate" | "assembly" | "form" | "none" | BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-modify-other */
    modifyOther?: BaseYesNoOptions;
    /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-use-aes */
    useAes?: BaseYesNoOptions;
}
interface Encrypt40bitOptions extends BaseEncryptOptions {
    /**
     * A number which defines the encryption algorithm to be used.
     * Using a keyLengh of 40 is insecure.
     * @default 256
     */
    keyLength?: 40;
    /** Restrictions for the encrypted pdf */
    restrictions?: {
        /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-print */
        print?: BasePrintOptions | BaseYesNoOptions;
    } & BaseRestrictionsOptions;
}
interface EncryptDefaultOptions extends BaseEncryptOptions {
    /**
     * A number which defines the encryption algorithm to be used.
     * Using a keyLengh of 40 is insecure.
     * @default 256
     */
    keyLength?: 128 | 256;
    /** Restrictions for the encrypted pdf */
    restrictions?: {
        /** Please see: https://qpdf.readthedocs.io/en/stable/cli.html#option-print */
        print?: BasePrintOptions;
    } & BaseRestrictionsOptions;
}
export type EncryptOptions = Encrypt40bitOptions | EncryptDefaultOptions;
/**
 * Encrypts a PDF file
 * @param userPayload The options for encryption
 * @returns The output of QPDF
 */
export declare const encrypt: (userPayload: EncryptOptions) => Promise<Buffer>;
export {};
//# sourceMappingURL=encrypt.d.ts.map