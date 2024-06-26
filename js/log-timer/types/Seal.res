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
  recentCommandTime: float,
  /** 入群时间(时间戳) */
  enteredTime: float,
  /** 邀请人ID */
  inviteUserId: string,
}

type groupPlayerInfo = {
  /** 用户昵称 */
  name: string,
  /** 用户ID */
  userId: string,
  /** 上次执行指令时间 */
  lastCommandTime: float,
  /** 上次发送指令时间(即sn) */
  autoSetNameTemplate: string,
}

type sender = {
  nickname: string,
  userId: string,
}

type messageType = | @as("group") Group | @as("private") Private

@unboxed
type rowId = String(string) | Int(int)

type message = {
  /** 当前平台，如QQ */
  platform: string,
  /** 消息内容 */
  message: string,
  /** 发送时间 */
  time: float,
  /** 群消息/私聊消息 */
  messageType: messageType,
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
  endPoint: endPointInfo,
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

@send
external _getKwargs: (cmdArgs, string) => Nullable.t<kwarg> = "getKwargs"

let getKwargs = (cmdArgs: cmdArgs, name: string) => Nullable.toOption(_getKwargs(cmdArgs, name))

@send
external _getArgN: (cmdArgs, int) => Nullable.t<string> = "getArgN"

let getArgN = (cmdArgs: cmdArgs, index: int) => Nullable.toOption(_getArgN(cmdArgs, index))

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
  "name": string,
  /** 版本 */
  "version": string,
  /** 作者 */
  "author": string,
  /** 指令映射 */
  "cmdMap": Dict.t<cmdItemInfo>,
  /** 非指令关键字回调 */
  @set
  "onNotCommandReceived": (msgContext, message) => unit,
  /** 指令执行后回调 */
  @set
  "onCommandReceived": (msgContext, message, cmdArgs) => unit,
}

@send
external storageSet: (extInfo, ~key: string, ~value: string) => unit = "storageSet"

@send
external _storageGet: (extInfo, string) => Nullable.t<string> = "storageGet"

let storageGet = (extInfo: extInfo, key: string) => Nullable.toOption(_storageGet(extInfo, key))

module Ext = {
  @scope(("seal", "ext")) @val
  external new: (~name: string, ~author: string, ~version: string) => extInfo = "new"

  @scope(("seal", "ext")) @val
  external newCmdExecuteResult: bool => cmdExecuteResult = "newCmdExecuteResult"

  @scope(("seal", "ext")) @val
  external register: extInfo => unit = "register"

  @scope(("seal", "ext")) @val
  external _find: string => Nullable.t<extInfo> = "find"

  let find = (name: string) => Nullable.toOption(_find(name))

  @scope(("seal", "ext")) @val
  external newCmdItemInfo: unit => cmdItemInfo = "newCmdItemInfo"

  @scope(("seal", "ext")) @val
  external registerFloatConfig: (extInfo, ~key: string, ~value: string) => unit =
    "registerFloatConfig"

  @scope(("seal", "ext")) @val
  external getFloatConfig: (extInfo, string) => string = "getFloatConfig"
}

/** 代骰模式下，获取被代理人信息 */
@scope("seal")
@val
external getCtxProxyFirst: (msgContext, message) => msgContext = "getCtxProxyFirst"

/** 回复发送者(发送者私聊即私聊回复，群内即群内回复) */
@scope("seal")
@val
external replyToSender: (msgContext, message, string) => unit = "replyToSender"

/** 回复发送者(私聊回复，典型应用场景如暗骰) */
@scope("seal")
@val
external replyPerson: (msgContext, message, string) => unit = "replyPerson"

/** 回复发送者(群内回复，私聊时无效，典型应用场景暗骰) */
@scope("seal")
@val
external replyGroup: (msgContext, message, string) => unit = "replyGroup"

/** 格式化文本 */
@scope("seal")
@val
external format: (msgContext, string) => string = "format"

/** 表示一个黑名单项目 */
type banListInfoItem = {
  /** 对象 ID */
  id: string,
  /** 对象名称 */
  name: string,
  /** 怒气值。*/
  score: int,
  /** 0 正常，-10 警告，-30 禁止，30 信任 */
  rank: int,
  /** 历史记录时间戳 */
  times: array<float>,
  /** 拉黑原因记录 */
  reasons: array<string>,
  /** 事发会话记录 */
  places: array<string>,
  /** 首次记录时间 */
  banTime: float,
}

module Ban = {
  /**
   * 拉黑指定 ID
   * @param ctx 上下文
   * @param id 黑名单用户或群组 ID
   * @param place 事发会话 ID
   * @param reason 拉黑原因
   */
  @scope(("seal", "ban"))
  @val
  external addBan: (msgContext, ~id: string, ~place: string, ~reason: string) => unit = "addBan"

  /**
   * 信任指定 ID
   * @param ctx 上下文
   * @param id 信任用户或群组 ID
   * @param place 事发会话 ID
   * @param reason 信任原因
   */
  @scope(("seal", "ban"))
  @val
  external addTrust: (msgContext, ~id: string, ~place: string, ~reason: string) => unit = "addTrust"

  /**
   * 从黑名单删除相关 ID
   * @param ctx 上下文
   * @param id 要移除的用户 ID
   */
  @scope(("seal", "ban"))
  @val
  external remove: (msgContext, string) => unit = "remove"

  /** 获取所有黑名单列表 */
  @scope(("seal", "ban"))
  @val
  external getList: unit => array<banListInfoItem> = "getList"

  @scope(("seal", "ban")) @val
  external _getUser: string => Nullable.t<banListInfoItem> = "getUser"

  /**
   * 获取指定 ID 的黑名单记录。返回值可能为空。
   * @param id 用户群组
   */
  let getUser = (id: string) => Nullable.toOption(_getUser(id))
}

module Vars = {
  @scope(("seal", "vars")) @val
  external _strGet: (msgContext, ~key: string) => (string, bool) = "strGet"

  let strGet = (msgContext: msgContext, key: string) => {
    let (value, exist) = _strGet(msgContext, ~key)
    if exist {
      Some(value)
    } else {
      None
    }
  }

  @scope(("seal", "vars")) @val
  external _strSet: (msgContext, ~key: string, ~value: string) => unit = "strSet"

  let strSet = (msgContext: msgContext, ~key: string, ~value: string) => {
    _strSet(msgContext, ~key, ~value)
  }
}
