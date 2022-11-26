import { match } from "ts-pattern";

type Foo = { foo: string };
type Baz = { baz: string };
type Valid = { success: true; foo: Foo };
type Invalid = { success: false; baz: Baz };
type Result = Valid | Invalid;

function patternMatch(result: Result) {
  return match(result)
    .with({ success: true }, () => "valid")
    .with({ success: false }, () => "invalid")
    .exhaustive();
}

console.log(patternMatch({ success: true, foo: { foo: "bar" } }));
console.log(patternMatch({ success: false, baz: { baz: "qux" } }));
