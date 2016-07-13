app.run(function(storage){

  var frontEndData = {
    "前端技术": {
      <!-- start of 工具 -->
      "工具":{
        "开发工具": {
          "编辑器": {
            "Atom":{},
            "Vim":{}
          },
          "调试工具":{
            "Chrome":{},
            "Firebug/Web developer":{}
          },
          "构建工具":{
            "Google Closure":{},
            "YUI Compressor":{}
          }
        },
        "学习工具":{
          "信息记录":{},
          "信息获取":{}
        },
        "版本管理工具":{}
      },
      <!-- end of 工具 -->
      <!-- start of 开发 -->
      "开发":{
        "视觉技术":{
          "HTML":{
            "HTML语义化":{},
            "HTML5":{},
            "DOCTYPE":{}
          },
          "CSS":{
            "_b": ["CSS权威指南"],
            "通用布局":{"_t":["float", "absolute", "block format context", "table"]},
            "通用样式":{},
            "CSS3":{"_t":["new selector", "new css style"]},
            "常见浏览器支持BUG":{},
            "图片":{"_t":["css font icon", "css spirite", "图片格式压缩率"]},
            "常见辅助库": {
              "Bootstrap":{}
            }
          },
          "流行布局技术":{
            "瀑布流":{}
          }
        },
        "Code技术":{
          "Javascript":{
            "语言基础": {},
            "设计模式": {},
            "兼容性BUG": {},
            "Node.js": {},
            "ES6":{}
          },
          "框架技术":{
            "AngularJS":{
              "基础应用":{"_f": true},
              "深入剖析":{"_dl": "2016/7/20"},
              "技术总结":{"_f": 0.5}
            },
            "jQuery": {
              "基础应用":{},
              "深入剖析":{},
              "技术总结":{}
            },
            "D3.js": {
              "基础应用":{_f: true},
              "深入剖析":{},
              "技术总结":{_f: 0.5}
            }
          }
        },
        "测试技术":{
          "自动化测试": {"selenium":{}, "PhantomJS":{}},
          "单元测试": {"QUnit":{}, "Jasmine":{}},
          "性能测试":{"_u":["yslow", "pageSpeed", "showSlow"]}
        }
      },
      <!-- end of 开发 -->
      <!-- start of Native应用 -->
      "Native应用":{
        "React Native": {
          "React": {
            "基础应用": {},
            "深入剖析": {},
            "技术总结": {}
          }
        },
        "Weex":{},
        "应用测试":{}
      },
      <!-- end of Native应用 -->
      <!-- start of 开发守则 -->
      "开发守则":{
        "优雅降级":{},
        "行为样式分离":{},
        "命名规范":{},
        "依赖管理":{},
        "注释":{}
      }
      <!-- end of 开发守则 -->
    }
  }

  storage.register("前端技术", frontEndData, false, "2016/6/1", "2016/10/30");
});
