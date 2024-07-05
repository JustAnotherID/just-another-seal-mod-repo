# 点歌（音乐卡片版）

[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)

点歌，返回能直接播放的音乐卡片（仅使用最新 Lagrange 测试可用，其他接入可能也能使用，不保证）

## 命令

- `.点歌 <歌名> (作者)`：QQ音乐
- `.网易云 <歌名> (作者)`

其中作者是可选的

## 配置项

网易云的 API 和 Token 可在「插件设置」中配置

## 使用注意

**Lagrange 想要发送音乐卡片，请自行在 `appsettings.json` 中配置音乐卡片签名（通常你需要为分离部署）**

## 鸣谢

- 感谢原作者星尘，编写了最初的插件代码
- 感谢二改作者 kakakumous，网易云查询使用的 API 和 Token 取自其二改
