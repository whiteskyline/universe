app.run(function(storage){

  var backEndTechData = {
    "服务端技术": {
      <!-- start of 开发 -->
      "开发技术":{
        "语言": {
          "Java": {
            "基础应用":{"_f": true},
            "深入探究":{"垃圾回收技术":{}}
          },
          "Scala": {
            "基础应用":{"_f": 0.6},
            "深入研究":{"函数编程技术":{}}
          },
          "SHELL": {
            "基础应用":{"_f": true, "_dl": "2016/7/12"},
            "深入研究":{}
          }
        },
        "程序组件": {
          "并发技术":{},
          "池化技术":{},
          "常见库":{},
          "日志技术":{}
        },
        "IDE环境":{
          "Intellij IDEA": {"_f": 0.5}
        },
        "开发流程":{
          "Scrum":{},
          "FDD":{}
        },
        "DEBUG技术":{
          "_dl": "2016/7/15",
          "远程DEBUG技术":{"_f": true},
          "Intellij DEBUG技术":{"_f": 0.5}
        }
      },
      <!-- end of 开发 -->
      <!-- start of 平台 -->
      "服务端平台":{
        "基础支撑":{
          "计算与服务能力":{
            "计算与服务提供": {
              "服务扩展": {
                "AWS Autoscaling":{},
                "OpenStack":{}
              },
              "负载均衡":{
                "AWS ELB":{},
                "HAProxy":{},
                "Nginx":{}
              },
              "虚拟化":{
                "Hypervisor":{},
                "Xen":{},
                "KVM":{},
                "Hyper-V":{}
              },
              "容器":{
                "Docker":{},
                "CoreOS":{},
                "UnixLXC":{}
              },
              "WEB容器": {
                "Apache Tomcat":{},
                "Resin":{}
              }
            },
            "通信":{
              "基础通信协议": {
                "应用层协议": {"HTTP协议":{"_f": 0.5}, "HTTPS":{}, "Thrift协议":{}},
                "网络层及下层协议": {
                  "UDP协议":{},
                  "TCP协议":{},
                  "IP协议":{}
                }
              },
              "网络接入": {
                "VLANs":{},
                "DNS":{},
                "CDN":{}
              }
            },
            "基础存储":{
              "网络存储":{},
              "块存储":{"AWS EBS":{}, "RAID":{}},
              "文件系统":{"ext4":{}, "XFS":{}}
            }
          }
        },
        "中间与支撑服务":{
          "分布式基础":{
            "RPC":{
              "Thrift":{"基础应用":{"_f": true}, "深入解析":{}, "总结整理":{"_f": 0.5}}
            },
            "消息队列":{
              "RabbitMQ":{},
              "AWS SQS":{},
              "ActiveMQ":{},
              "Kafka":{}
            },
            "架构与理论":{
              "CAP":{"基础知识":{"_f":true}, "系统应用研究对应":{"_t": ["MongoDB", "Redis"]}},
              "RESTFul":{},
              "MicroService":{}
            },
            "服务发现":{
            }
          },
          "支撑架构服务":{
            "数据服务":{
              "SQL":{
                "MySQL":{
                  "基础使用":{"_f": true, "_dl": "2016/5/1"},
                  "深入学习":{}
                },
                "AWS RDS":{},
              },
              "NoSQL":{
                "DynamoDB":{"_dl": "2016/4/1"},
                "MongoDB":{},
                "Cassandra":{}
              },
              "缓存":{
                "Memcached":{},
                "Redis":{},
                "AWS ElasticCache":{}
              },
              "检索":{
                "Solr":{},
                "ElasticSearch":{}
              },
              "大数据":{
                "语言工具":{"_t":["R", "Python", "Java", "Scala"]},
                "MapReduce":{
                  "Hadoop":{},
                  "HDFS":{},
                  "HBase":{},
                  "Hive":{},
                  "Spark":{}
                },
                "数据流处理":{
                  "AWS Kinesis":{},
                  "Storm":{}
                }
              },
              "机器学习":{
                "Spark ML":{},
                "AWS ML":{}
              }
            },
            "操作系统":{
              "本地Linux系统":{},
              "云端Linux系统":{}
            },
          }
        },
        "HA":{
          "服务容灾":{},
          "服务发现":{
            "中间层服务发现":{},
            "接入层服务发现":{}
          },
          "运维自动化":{}
        }
      },
      <!-- end of 平台 -->
      <!-- start of 安全 -->
      "安全":{
        "安全基础":{
          "原则与原理":{},
          "加解密技术":{
            "算法":{},
            "加解密系统解决方案":{}
          }
        },
        "身份认证":{
          "AWS IAM":{},
          "Kerberos":{},
          "OpenID":{}
        },
        "隔离与攻击防范":{
          "Firewall":{},
          "DDoS":{},
          "iptables":{},
          "VPS":{}
        }
      },
      <!-- end of 安全 -->
      <!-- start of 运维 -->
      "运维":{
        "DevOps":{
          "持续交付":{},
          "持续集成":{}
        },
        "部署":{
          "灰度发布":{},
          "金丝雀发布":{},
          "Canary部署":{}
        },
        "配置":{
          "Chef":{},
          "AWS OpsWorks":{}
        },
        "服务监控":{
          "PerfCounter":{
            "总体数据监控":{
              "ZABBIX":{},
              "AWS CloudWatch":{}
            },
            "报警系统":{"OpenFalcon":{}}
          },
          "日志":{
            "日志收集":{},
            "日志统一与存储":{}
          }
        }
      }
      <!-- end of 运维 -->
    }
  }

  storage.register("服务端技术", backEndTechData, true, "2016/3/1", "2016/10/1");
});
