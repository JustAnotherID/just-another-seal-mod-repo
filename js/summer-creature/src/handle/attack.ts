import { getGroups, getGroupState, setGroupState } from "../store";
import { Creature, GroupState } from "../types";
import { CreatureIntervals } from "../config";
import { getCreature, getCreatures } from "../utils";
import { dayjs } from "../utils/dayjs";

/**
 * 生物攻击群内用户
 * @param ext
 * @param groupId 群号
 * @param creature 生物
 * @param groupStatus
 */
const attackGroupUsers = (ext: seal.ExtInfo, groupId: string, creature: Creature, groupStatus: GroupState = undefined): string => {
  let state = groupStatus ?? getGroupState(ext, groupId);
  const count = state?.attacked?.[creature] ?? 0
  if (count > 0) {
    state.lastAttacked = { ...state.lastAttacked, [creature]: dayjs().unix() }
    setGroupState(ext, groupId, state)

    // TODO: 根据当前生物数量与群内活跃程度，挑选被攻击的用户
    const attackedUsers = []

    return getCreatures(creature, count) + '\n' + attackedUsers.map(attackedUser => `[CQ:at,qq=${attackedUser}]被${getCreature(creature, true)}袭击了`)
  }
  return ''
}

export const timerAttackHandle = (ext: seal.ExtInfo) => {
  const nowRow = dayjs();
  const now = nowRow.unix()
  const epMap: { [key: string]: seal.EndPointInfo } = {}
  const eps = seal.getEndPoints()
  for (let ep of eps) {
    epMap[ep.userId] = ep
  }

  for (let groupId of getGroups(ext)) {
    const groupState = getGroupState(ext, groupId)
    if (groupState.installed) {
      for (let creature in Creature) {
        const c = Creature[creature];
        const interval = CreatureIntervals[c](ext)
        const lastTime = groupState.lastAttacked?.[c] ?? (now - interval)
        if (lastTime + interval <= now) {
          const ep = epMap[groupState.endpointUserId]
          if (ep) {
            autoAttackHandle(ext, ep, c, groupState)
          }
        }
      }
    }
  }
}

const autoAttackHandle = (ext: seal.ExtInfo, ep: seal.EndPointInfo, c: Creature, groupState: GroupState,
                          mode: 'auto' | 'other-group' = 'auto') => {
  const now = dayjs();
  console.log(`夏季生物袭击：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(c)}，模式 ${mode}`);
  const result = attackGroupUsers(ext, groupState.targetGroupId, c, groupState);
  if (result !== '') {
    // 发送生物袭击消息
    const msg = seal.newMessage();
    msg.messageType = 'group'
    msg.groupId = groupState.targetGroupId
    msg.guildId = groupState.targetGuildId
    msg.sender.userId = groupState.targetUserId

    const ctx = seal.createTempCtx(ep, msg);
    seal.replyToSender(ctx, msg, result)
  }
}
