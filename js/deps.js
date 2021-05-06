goog.addDependency(
  "binary/arith.js",
  ["jspb.arith.Int64", "jspb.arith.UInt64"],
  []
);
goog.addDependency(
  "binary/constants.js",
  [
    "jspb.AnyFieldType",
    "jspb.BinaryConstants",
    "jspb.BinaryMessage",
    "jspb.BuilderFunction",
    "jspb.ByteSource",
    "jspb.ClonerFunction",
    "jspb.ComparerFunction",
    "jspb.ConstBinaryMessage",
    "jspb.PrunerFunction",
    "jspb.ReaderFunction",
    "jspb.RecyclerFunction",
    "jspb.RepeatedFieldType",
    "jspb.ScalarFieldType",
    "jspb.WriterFunction",
  ],
  []
);
goog.addDependency(
  "binary/decoder.js",
  ["jspb.BinaryDecoder"],
  ["goog.asserts", "goog.crypt", "jspb.utils"]
);
goog.addDependency(
  "binary/encoder.js",
  ["jspb.BinaryEncoder"],
  ["goog.asserts", "jspb.BinaryConstants", "jspb.utils"]
);
goog.addDependency(
  "binary/reader.js",
  ["jspb.BinaryReader"],
  ["goog.asserts", "jspb.BinaryConstants", "jspb.BinaryDecoder", "jspb.utils"]
);
goog.addDependency(
  "binary/utils.js",
  ["jspb.utils"],
  [
    "goog.asserts",
    "goog.crypt",
    "goog.crypt.base64",
    "goog.string",
    "jspb.BinaryConstants",
  ]
);
goog.addDependency(
  "binary/writer.js",
  ["jspb.BinaryWriter"],
  [
    "goog.asserts",
    "goog.crypt.base64",
    "jspb.BinaryConstants",
    "jspb.BinaryEncoder",
    "jspb.arith.Int64",
    "jspb.arith.UInt64",
    "jspb.utils",
  ]
);
goog.addDependency(
  "debug.js",
  ["jspb.debug"],
  ["goog.array", "goog.asserts", "goog.object", "jspb.Map", "jspb.Message"]
);
goog.addDependency("map.js", ["jspb.Map"], ["goog.asserts"]);
goog.addDependency(
  "message.js",
  ["jspb.ExtensionFieldBinaryInfo", "jspb.ExtensionFieldInfo", "jspb.Message"],
  [
    "goog.array",
    "goog.asserts",
    "goog.crypt.base64",
    "jspb.BinaryReader",
    "jspb.Map",
  ],
  { lang: "es6" }
);
goog.addDependency("node_loader.js", [], []);
goog.addDependency("test_bootstrap.js", [], []);
