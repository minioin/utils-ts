import { parse, stringify } from "encoding/yaml.ts";
import { ld as _ } from "lodash";

function mergeArrays(objValue: any, srcValue: any) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
async function main() {
  const objs = await Promise.all(Deno.args.map(async (file) => {
    const content = await Deno.readTextFile(file);
    return parse(content);
  }));

  const result = {};
  objs.forEach((obj) => _.mergeWith(result, obj, mergeArrays));
  console.log(stringify(result));
}

main();
