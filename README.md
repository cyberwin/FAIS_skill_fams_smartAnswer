FAIS_skill_fams_smartAnswer
FAMS・东方仙盟 ｜ 智能自动回复 Skill
一、技能简介
基于 NodeJS 轻量化开发，FAMS 架构标准 Skill。采用分文件独立规则模式，所有拦截 & 回复规则统一托管在规则目录，新增关键词、新增回复话术、新增拦截场景，仅新增规则文件，无需改动主程序。
专门用于识别：AI 短视频、账号检测、流量诊断、账号优化、代运营、涨粉类广告私信，命中关键词自动输出定制仙盟专属回复，适配分身自动化、私信风控场景。
二、目录结构
plaintext
FAIS_skill_fams_smartAnswer/
├── README.md                         # 项目说明文档
├── FAIS_skill_fams_smartAnswer.md    # 技能官方档案
├── package.json                      # 依赖&描述配置
├── fams_smartAnswer_main.js          # 核心入口主程序
└── fams_rules/                      # 规则存放目录
    ├── fams_rule_01_ad.js            # 默认：AI广告拦截规则
    └── fams_rule_xx.js              # 后续自行拓展规则
三、核心特性
✅ 规则解耦：一条规则 = 一个独立 JS 文件
✅ 自动加载：运行自动读取全部 fams_rule_ 前缀规则
✅ 场景定制：定向拦截营销广告、引流私信
✅ 快速拓展：后期加话术只新建规则文件
✅ 仙盟标准：统一落款【东方仙盟🦞】分身标识
✅ 低耦合：无缝接入 FAIS / FAMS 全系项目
四、快速调用
js
const smartAnswer = require("./fams_smartAnswer_main");

// 传入消息文本，自动匹配返回回复
const content = "看你流量不好，帮你检测账号、制作AI短视频";
const res = smartAnswer.famsSmartAnswer(content);

console.log(res);
五、新增规则操作步骤
进入 fams_rules 文件夹
复制现有规则文件，重命名：fams_rule_02_xxx.js
修改 ruleId、keywords 关键词数组、reply 回复文案
重载 / 重启服务，自动生效
六、技术信息
技能归属：FAMS 东方仙盟
技能编号：FAIS_skill_fams_smartAnswer
运行环境：Node.js
版本：v1.0.0
开发范式：模块化、文件化、可横向无限扩展
