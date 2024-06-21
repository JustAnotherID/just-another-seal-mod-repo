type endPointInfo = {
  id: string,
  nickname: string,
  state: int,
  userId: string,
  platform: string,
  enable: bool,
}

/** 获取所有 EndPointInfo */
@scope("seal")
external getEndPoints: unit => array<endPointInfo> = "getEndPoints"

/** 群信息 */
type groupInfo = {
  active: bool,
  groupId: string,
  groupName: string,
  /** COC规则序号 */
  cocRuleIndex: int,
  /** 当前log名字，若未开启为空 */
  logCurName: string,
  /** 当前log是否开启 */
  logOn: bool,
  /** 是否显示入群迎新信息 */
  showGroupWelcome: bool,
  /** 入群迎新文本 */
  groupWelcomeMessage: string,
  /** 最后指令时间(时间戳) */
  recentCommandTime: int,
  /** 入群时间(时间戳) */
  enteredTime: int,
  /** 邀请人ID */
  inviteUserId: string,
}

type groupPlayerInfo = {
  /** 用户昵称 */
  name: string,
  /** 用户ID */
  userId: string,
  /** 上次执行指令时间 */
  lastCommandTime: int,
  /** 上次发送指令时间(即sn) */
  autoSetNameTemplate: string,
}

type sender = {
  nickname: string,
  userId: string,
}

@unboxed
type rowId = String(string) | Int(int)

type message = {
  /** 当前平台，如QQ */
  platform: string,
  /** 消息内容 */
  message: string,
  /** 发送时间 */
  time: int,
  /** 群消息/私聊消息 */
  messageType: [#group | #"private"],
  /** 群ID */
  groupId: string,
  /** 服务器ID */
  guildId: string,
  /** 发送者信息 */
  sender: sender,
  /** 原始ID，用于撤回等情况 */
  rawId: rowId,
}

/** 创建一个 Message 对象 */
@scope("seal")
external newMessage: unit => message = "newMessage"

type msgContext = {
  endPointInfo: endPointInfo,
  /** 当前群信息 */
  groupInfo: groupInfo,
  /** 当前群内是否启用bot（注:强制@时这个值也是true，此项是给特殊指令用的） */
  isCurGroupBotOn: bool,
  /** 是否私聊 */
  isPrivate: bool,
  /** 权限等级 40邀请者 50管理 60群主 100master */
  privilegeLevel: int,
}

/** 创建一个 ctx 对象 */
@scope("seal")
external createTempCtx: (endPointInfo, message) => msgContext = "createTempCtx"

type atInfo = {userId: string}

type kwarg = {
  /** 名称 */
  name: string,
  /** 是否存在value */
  valueExists: bool,
  /** value的值 */
  value: string,
  /** 将value转换为bool，如'0' ''等会自动转为false */
  asBool: bool,
}

type cmdArgs = {
  /** 当前命令，与指令的name相对，例如.ra时，command为ra */
  command: string,
  /** 指令参数，如“.ra 力量 测试”时，参数1为“力量”，参数2为“测试” */
  args: array<string>,
  /** 当前被at的有哪些 */
  at: array<atInfo>,
  /** 参数的原始文本 */
  rawArgs: string,
  /** 我被at了 */
  amIBeMentioned: bool,
  /** 同上，但要求是第一个被at的 */
  amIBeMentionedFirst: bool,
  /** 一种格式化后的参数，也就是中间所有分隔符都用一个空格替代 */
  cleanArgs: string,
}

@scope("seal") @send
external getKwargs: (cmdArgs, string) => kwarg = "getKwargs"

@scope("seal") @send
external getArgN: (cmdArgs, int) => string = "getArgN"

type cmdExecuteResult = {
  /** 是否顺利完成执行 */
  solved: bool,
  /** 是否返回帮助信息 */
  showHelp: bool,
}

type cmdItemInfo = {
  /** 指令名称 */
  @set
  "name": string,
  /** 长帮助，带换行的较详细说明  */
  @set
  "help": string,
  /** 允许代骰 */
  @set
  "allowDelegate": bool,
  /** 私聊不可用 */
  @set
  "disabledInPrivate": bool,
  /** 指令执行 */
  @set
  "solve": (msgContext, message, cmdArgs) => cmdExecuteResult,
}

type extInfo = {
  /** 名字 */
  name: string,
  /** 版本 */
  version: string,
  /** 作者 */
  author: string,
  /** 指令映射 */
  cmdMap: Js.Dict.t<cmdItemInfo>,
  /** 非指令关键字回调 */
  onNotCommandReceived: (msgContext, message) => unit,
}

@scope("seal") @send
external storageSet: (extInfo, ~key: string, ~value: string) => unit = "storageSet"

@scope("seal") @send
external storageGet: (extInfo, ~key: string) => string = "storageGet"

module Ext = {
  @scope(("seal", "ext")) @val
  external new: (~name: string, ~author: string, ~version: string) => extInfo = "new"

  @scope(("seal", "ext")) @val
  external newCmdExecuteResult: bool => cmdExecuteResult = "newCmdExecuteResult"

  @scope(("seal", "ext")) @val
  external register: extInfo => unit = "register"

  @scope(("seal", "ext")) @val
  external find: string => option<extInfo> = "find"

  @scope(("seal", "ext")) @val
  external newCmdItemInfo: unit => cmdItemInfo = "newCmdItemInfo"

  @scope(("seal", "ext")) @val
  external registerFloatConfig: (extInfo, ~key: string, ~value: string) => unit =
    "registerFloatConfig"

  @scope(("seal", "ext")) @val
  external getFloatConfig: (extInfo, string) => string = "getFloatConfig"
}
