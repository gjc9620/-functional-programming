var cat = require("cat")
function construct(head, tail) {
    return cat([head], toArray(tail))
}