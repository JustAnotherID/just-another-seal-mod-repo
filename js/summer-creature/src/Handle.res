let startHandle = (
  ext: Seal.extInfo,
  ~epUserId: string,
  ~groupId: string,
  ~guildId: string,
  ~userId: string,
): string => {""}

let stopHandle = (ext: Seal.extInfo, ~groupId: string): string => {""}

module Release = {}

let manualHandle = (
  ext: Seal.extInfo,
  ~groupId: string,
  ~userId: string,
  ~userName: string,
  creature,
): string => {""}

let statusHandle = (ext: Seal.extInfo, ~groupId: string, ~userId: string): string => {""}

let defenseHandle = (
  ext: Seal.extInfo,
  ~groupId: string,
  ~userId: string,
  ~action: Types.action,
): string => {""}

let setConsumableHandle = (
  ext: Seal.extInfo,
  ~groupId: string,
  ~userId: string,
  ~consumable: Types.consumable,
): string => {""}

let timerGrowHandle = (ext: Seal.extInfo): unit => {
  ()
}

let timerAttackHandle = (ext: Seal.extInfo): unit => {
  ()
}

let timerUseConsumableHandle = (ext: Seal.extInfo): unit => {
  ()
}
