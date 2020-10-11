/**
 * The class for deep checking Types
 */
export declare class Type {
    /**
     * The value to generate a deep Type of
     */
    readonly value: unknown;
    /**
     * The shallow type of this
     */
    is: string;
    /**
     * The parent of this Type
     */
    private readonly parent;
    /**
     * The child keys of this Type
     */
    private readonly childKeys;
    /**
     * The child values of this Type
     */
    private readonly childValues;
    /**
     * @param value The value to generate a deep Type of
     * @param parent The parent value used in recursion
     */
    constructor(value: unknown, parent?: Type | null);
    /**
     * The type string for the children of this Type
     */
    private get childTypes();
    /**
     * The full type string generated.
     */
    toString(): string;
    /**
     * Walks the linked list backwards, for checking circulars.
     */
    private parents;
    /**
     * Checks if the value of this Type is a circular reference to any parent.
     */
    private isCircular;
    /**
     * The subtype to create based on this.value's sub value.
     * @param value The sub value
     */
    private addValue;
    /**
     * The subtype to create based on this.value's entries.
     * @param entry The entry
     */
    private addEntry;
    /**
     * Get the deep type name that defines the input.
     */
    private check;
    /**
     * Resolves the type name that defines the input.
     * @param value The value to get the type name of
     */
    static resolve(value: any): string;
    /**
     * Joins the list of child types.
     * @param values The values to list
     */
    private static list;
}
//# sourceMappingURL=index.d.ts.map