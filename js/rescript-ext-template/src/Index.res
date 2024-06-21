let helpDesc = `\
rescript 插件模板
`

let main = () => {
  let ext = switch Seal.Ext.find("rescript-ext-template") {
  | None =>
    let temp = Seal.Ext.new(
      ~name="rescript-ext-template",
      ~author="JustAnotherID",
      ~version="0.1.0",
    )
    Seal.Ext.register(temp)
    temp
  | Some(e) => e
  }

  let cmdDemo = Seal.Ext.newCmdItemInfo()
  cmdDemo["name"] = "demo"
  cmdDemo["help"] = helpDesc
  cmdDemo["solve"] = (_ctx, _msg, _cmdArgs) => {
    Seal.Ext.newCmdExecuteResult(true)
  }

  Js.Dict.set(ext.cmdMap, "demo", cmdDemo)
}

main()
