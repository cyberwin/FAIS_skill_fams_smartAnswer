const fs = require("fs");
const path = require("path");

// FAMS 规则目录
const RULE_PATH = path.join(__dirname, "./fams_rules");
let famsRuleList = [];

// 加载全部 FAMS 规则
function loadFamsRules() {
  const fileList = fs.readdirSync(RULE_PATH);
  fileList.forEach(file => {
    if(file.startsWith("fams_rule_") && file.endsWith(".js")){
      const rule = require(path.join(RULE_PATH, file));
      famsRuleList.push(rule);
    }
  });
}

// FAMS 核心匹配方法
function famsSmartAnswer(msgText) {
  for(const rule of famsRuleList){
    for(const kw of rule.keywords){
      if(msgText.includes(kw)){
        return rule.reply;
      }
    }
  }
  return ""; // 无匹配返回空
}

// 初始化
loadFamsRules();

// FAMS 技能统一暴露出口
module.exports = {
  skillName: "fams_smartAnswer",
  skillVersion: "1.0.0",
  famsSmartAnswer
};
