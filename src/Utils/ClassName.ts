export type ClassName = string | ((baseClassName: string) => string) | undefined | null;

export const buildClassName = (className: ClassName, baseClassName: string): string => {
    if (typeof className === "function") {
        return className(baseClassName);
    }
    if (className === undefined || className === null || className === "") {
        return baseClassName;
    }
    return `${baseClassName} ${className}`;
}