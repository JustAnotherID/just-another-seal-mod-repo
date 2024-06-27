let filename = "跑团日志计时.js"

@scope(("process", "env")) @val
external nodeEnv: option<'a> = "NODE_ENV"

type platform = | @as("browser") Browser | @as("node") Node

type define = {"process.env.NODE_ENV": string}

type supported = {"async-await": bool}

type drop = {"debugger": bool}

type config = {
  bundle: bool,
  entryPoints: array<string>,
  minify: bool,
  outfile: string,
  platform: platform,
  color: bool,
  sourcemap: bool,
  \"external": array<string>,
  target: string,
  treeShaking: bool,
  logLevel: string,
  define: define,
  supported: supported,
  charset: string,
  drop: array<string>,
}

let dev: config = {
  bundle: true,
  entryPoints: ["src/Index.res.js"],
  minify: false,
  outfile: "dev/" ++ filename,
  platform: Node,
  color: true,
  sourcemap: true,
  \"external": ["csharp", "puerts"],
  target: "es2020",
  treeShaking: true,
  logLevel: "error",
  define: {
    "process.env.NODE_ENV": switch nodeEnv {
    | Some(x) => JSON.stringify(x)
    | None => "development"
    },
  },
  supported: {
    "async-await": true,
  },
  drop: ["debugger"],
  charset: "utf8",
}

let build: config = {
  ...dev,
  outfile: "dist/" ++ filename,
  sourcemap: false,
  target: "es6",
}
