@scope("JSON") @val
external parseJsonArray: string => array<'t> = "parse"

@scope("JSON") @val
external parseJsonObject: string => 't = "parse"

@module("lodash") @val
external uniq: array<'t> => array<'t> = "uniq"

let storageGroupsKey = "summer_creature_groups"
let storageGroupInfoKeyPrefix = "summer_creature_group_info::"
let storagePlayerInfoKeyPrefix = "summer_creature_player_info::"

let getGroups = (ext: Seal.extInfo): array<string> => {
  let temp = Seal.storageGet(ext, storageGroupsKey)
  switch temp {
  | Some(data) =>
    try {
      parseJsonArray(data)
    } catch {
    | Exn.Error(_) => []
    }
  | None => []
  }
}

let setGroups = (ext: Seal.extInfo, groups: array<string>) => {
  let newGroups = uniq(groups)
  switch JSON.stringifyAny(newGroups) {
  | Some(json) => Seal.storageSet(ext, ~key=storageGroupsKey, ~value=json)
  | None => ()
  }
}

let addGroup = (ext: Seal.extInfo, group: string) => {
  let groups = getGroups(ext)
  let newGroups = uniq([...groups, group])
  setGroups(ext, newGroups)
}

let removeGroup = (ext: Seal.extInfo, group: string) => {
  let groups = getGroups(ext)
  setGroups(ext, Array.filter(groups, g => g !== group))
}

let getGroupState = (ext: Seal.extInfo, group: string): option<Types.groupInfo> => {
  let temp = Seal.storageGet(ext, storageGroupInfoKeyPrefix ++ group)
  switch temp {
  | Some(data) => parseJsonObject(data)
  | None => None
  }
}

let setGroupState = (ext: Seal.extInfo, group: string, state: Types.groupInfo) => {
  let data = JSON.stringifyAny(state)
  switch data {
  | Some(json) => {
      addGroup(ext, group)
      Seal.storageSet(ext, ~key=storageGroupInfoKeyPrefix ++ group, ~value=json)
    }
  | None => ()
  }
}

let getPlayerInfo = (ext: Seal.extInfo, playerId: string): option<Types.playerInfo> => {
  let temp = Seal.storageGet(ext, storagePlayerInfoKeyPrefix ++ playerId)
  switch temp {
  | Some(data) => parseJsonObject(data)
  | None => None
  }
}

let setPlayerInfo = (ext: Seal.extInfo, playerId: string, info: Types.playerInfo) => {
  let data = JSON.stringifyAny(info)
  switch data {
  | Some(json) => Seal.storageSet(ext, ~key=storagePlayerInfoKeyPrefix ++ playerId, ~value=json)
  | None => ()
  }
}
