export const stages = [
  {
    id: 1,
    name: "基础认知",
    enName: "Basic Concepts",
    days: 7,
    color: "from-blue-500 to-cyan-400",
    description: "了解Agent核心概念与基础架构",
    enDescription: "Understand Agent core concepts and basic architecture",
    topics: [
      {
        day: 1,
        title: "Agent基础概念",
        enTitle: "Agent Basic Concepts",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🤖 什么是AI Agent？用大白话讲清楚！</span>",
          "Agent就像一个会思考、会行动的小助手，能自己想办法完成任务",
          "比如：你让它安排一次旅行，它会自动查机票、订酒店、做攻略！"
        ],
        detail: [
          {
            title: "📚 超级简单的Agent理解方式",
            description: "把Agent想象成你的智能助手，它有脑子、有记忆、会用工具！",
            steps: [
              "1️⃣ 观察 - 听清你的需求（比如：帮我订去北京的票）",
              "2️⃣ 思考 - 想想该怎么做（需要查机票、看时间、比价）",
              "3️⃣ 行动 - 用工具完成任务（调用机票查询API）",
              "4️⃣ 学习 - 记住你的偏好（知道你喜欢早班机）"
            ]
          },
          {
            title: "🎯 Agent和传统软件有啥区别？",
            description: "用个简单的例子对比一下！",
            steps: [
              "传统软件：你让它查天气，它只会查天气，不会举一反三",
              "AI Agent：你让它查天气，它会查完天气，还提醒你带伞，甚至帮你订车！",
              "关键区别：Agent能自己规划任务，不用你一步步教"
            ]
          },
          {
            title: "🚀 Agent的核心能力是什么？",
            description: "记住这4个核心，你就入门了！",
            steps: [
              "自主性 - 能自己决定做什么",
              "反应性 - 能根据环境变化调整",
              "主动性 - 能主动找事做",
              "社会性 - 能和其他Agent协作"
            ]
          }
        ],
        resources: [
          {
            title: "OpenAI Building Effective Agents",
            url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
            description: "OpenAI官方Agent开发指南（必读！）"
          },
          {
            title: "Anthropic Agent Research",
            url: "https://www.anthropic.com/research",
            description: "Anthropic的Agent研究文章"
          }
        ],
        practice: {
          tasks: [
            "想象一下：如果你有一个Agent，你想让它帮你做什么？",
            "举个你生活中的例子，看看Agent能不能帮上忙"
          ],
          hint: "从简单的开始，比如提醒喝水、整理日程等"
        },
        notes: "记住这句口诀：Agent = 脑子（LLM）+ 记忆 + 工具 + 行动！"
      },
      {
        day: 2,
        title: "Agent应用场景",
        enTitle: "Agent Applications",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💡 Agent都能用来干啥？举几个你马上能懂的例子！</span>",
          "从日常生活到工作学习，Agent无处不在！",
          "先搞清楚应用场景，学习才更有方向感！"
        ],
        detail: [
          {
            title: "👨‍💼 个人助理Agent - 你的专属秘书！",
            description: "就像电影里的智能助手一样！",
            steps: [
              "📅 日程管理：自动帮你安排会议、提醒重要事项",
              "📧 邮件处理：自动筛选重要邮件、智能回复",
              "✈️ 旅行规划：帮你订机票、酒店、做攻略",
              "🛒 购物助手：比价、推荐、自动下单买东西"
            ]
          },
          {
            title: "🏢 企业级Agent - 让公司效率翻倍！",
            description: "企业用Agent做什么？举几个真实例子！",
            steps: [
              "🤝 客户服务：24小时在线回答问题、处理投诉",
              "📊 数据分析：自动生成报表、发现数据异常",
              "💻 代码审查：帮程序员找bug、提优化建议",
              "📁 文档管理：自动整理文档、快速找到你要的"
            ]
          },
          {
            title: "🛠️ 开发工具Agent - 程序员的好帮手！",
            description: "写代码也有Agent帮忙！",
            steps: [
              "🔍 代码补全：根据你的需求自动写代码",
              "🐛 调试助手：帮你找bug、解释错误原因",
              "📝 文档生成：自动给代码写注释和文档",
              "📚 技术搜索：帮你找解决方案和最佳实践"
            ]
          }
        ],
        resources: [
          {
            title: "LangChain Use Cases",
            url: "https://python.langchain.com/docs/use_cases",
            description: "LangChain官方用例展示（有很多现成例子！）"
          }
        ],
        practice: {
          tasks: [
            "选一个你感兴趣的场景，想想Agent该怎么实现",
            "如果你是老板，你会用Agent做什么？"
          ],
          hint: "从你最痛的点入手，比如最费时间的任务是什么？"
        },
        notes: "好的Agent场景 = 高频需求 + 规则明确 + 可自动化！"
      },
      {
        day: 3,
        title: "Agent技术架构",
        enTitle: "Agent Architecture",
        type: "core",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🏗️ Agent内部长啥样？拆解给你看！</span>",
          "就像人体有各种器官一样，Agent也有核心组件",
          "搞懂这个，你就知道Agent是怎么工作的了！"
        ],
        detail: [
          {
            title: "🎯 Agent的4大核心组件（1+4黄金公式）",
            description: "记住这个公式：AI Agent = LLM + Memory + Planning + Tools + Action",
            steps: [
              "🧠 LLM（大脑）- 负责思考、理解、做决策",
              "💾 Memory（记忆）- 记住之前的对话和历史",
              "📋 Planning（规划）- 把大任务拆成小步骤",
              "🔧 Tools（工具）- 会用各种API和工具",
              "⚡ Action（行动）- 真正执行任务的部分"
            ]
          },
          {
            title: "🔄 ReAct工作模式 - Agent是怎么干活的？",
            description: "ReAct = Reasoning + Acting，思考+行动循环！",
            steps: [
              "1️⃣ Thought（思考）：我现在该做什么？",
              "2️⃣ Action（行动）：调用工具来执行",
              "3️⃣ Observation（观察）：看看结果怎么样",
              "4️⃣ 重复：继续思考-行动-观察，直到完成！"
            ]
          }
        ],
        resources: [
          {
            title: "LangChain Documentation",
            url: "https://www.langchain.com/docs",
            description: "LangChain完整文档（最好的学习资料！）"
          }
        ],
        practice: {
          tasks: [
            "画个流程图，展示ReAct是怎么工作的",
            "用一个简单任务（比如查天气）演示4大组件的配合"
          ],
          hint: "用生活中的例子理解，比如你去超市买东西也是ReAct过程！"
        },
        notes: "ReAct的核心：先想再做，看结果再决定下一步！"
      },
      {
        day: 4,
        title: "主流Agent框架",
        enTitle: "Mainstream Agent Frameworks",
        type: "practice",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🛠️ 开发Agent用什么工具？主流框架介绍！</span>",
          "不用从零开始写！有现成的框架帮你",
          "先了解各个框架的特点，再选择适合你的！"
        ],
        detail: [
          {
            title: "🌟 LangChain - 最流行的入门首选！",
            description: "就像搭积木一样简单，生态最丰富！",
            steps: [
              "适合：入门学习、快速原型、单Agent开发",
              "优点：文档多、例子多、社区大",
              "核心功能：Chains、Agents、Memory、Tools"
            ]
          },
          {
            title: "📊 LangGraph - 复杂流程专家！",
            description: "用图结构来编排Agent流程，想怎么连就怎么连！",
            steps: [
              "适合：需要循环、分支的复杂任务",
              "优点：状态管理、可视化、灵活",
              "核心功能：StateGraph、Nodes、Edges、Checkpointer"
            ]
          },
          {
            title: "👥 AutoGen - 多Agent协作王者！",
            description: "微软出品，让多个Agent像团队一样协作！",
            steps: [
              "适合：复杂任务拆解、多人协作场景",
              "优点：多Agent对话、自动代码生成、人工介入",
              "核心功能：ConversableAgent、GroupChat"
            ]
          },
          {
            title: "🎭 CrewAI - 角色驱动的轻量选择！",
            description: "给Agent分配角色，像拍电影一样写剧本！",
            steps: [
              "适合：内容创作、商业分析、快速落地",
              "优点：配置简单、角色清晰、自动分配任务",
              "核心功能：Agent、Task、Crew、Process"
            ]
          }
        ],
        resources: [
          {
            title: "LangGraph Tutorial",
            url: "https://www.langchain.com/langgraph",
            description: "LangGraph官方教程（必看！）"
          },
          {
            title: "AutoGen Documentation",
            url: "https://microsoft.github.io/autogen/",
            description: "AutoGen官方文档"
          },
          {
            title: "CrewAI Documentation",
            url: "https://docs.crewai.com/",
            description: "CrewAI官方文档"
          }
        ],
        practice: {
          tasks: [
            "去各个框架的官网逛一圈，看看哪个最对你胃口",
            "收藏几个你觉得不错的文档链接"
          ],
          hint: "初学者强烈建议从LangChain开始，例子最多！"
        },
        notes: "选择建议：单Agent用LangChain，复杂流程用LangGraph，多Agent用CrewAI/AutoGen！"
      },
      {
        day: 5,
        title: "开发环境搭建",
        enTitle: "Environment Setup",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💻 准备干活！一步步搭好开发环境！</span>",
          "工欲善其事，必先利其器！",
          "跟着这几个步骤走，保证0报错！"
        ],
        detail: [
          {
            title: "🐍 第一步：安装Python（必备！）",
            description: "Python是Agent开发的主要语言，先装上！",
            steps: [
              "1️⃣ 去Python官网（python.org）下载3.10或更高版本",
              "2️⃣ 运行安装程序，记得勾选“Add Python to PATH”",
              "3️⃣ 打开终端输入 python --version 检查是否安装成功",
              "4️⃣ Windows用户推荐用WSL2，Mac用户直接用Terminal"
            ]
          },
          {
            title: "🔑 第二步：获取API Key（这是钥匙！）",
            description: "没有API Key，LLM用不了！",
            steps: [
              "1️⃣ 推荐用OpenRouter（openrouter.ai），支持多个模型还有免费额度",
              "2️⃣ 注册账号，去Settings里生成API Key",
              "3️⃣ 或者用OpenAI、Claude、通义千问等官方API",
              "4️⃣ 把Key保存好，千万别上传到GitHub！"
            ]
          },
          {
            title: "📦 第三步：安装依赖包（准备材料！）",
            description: "用pip或uv安装需要的库！",
            steps: [
              "1️⃣ 推荐用uv来管理（速度快！）：pip install uv",
              "2️⃣ 安装核心包：uv add langchain langchain-openai langgraph python-dotenv",
              "3️⃣ 其他按需安装：chromadb（向量数据库）、beautifulsoup4（网页解析）",
              "4️⃣ 创建.env文件，把API Key放进去：OPENROUTER_API_KEY=你的key"
            ]
          }
        ],
        resources: [
          {
            title: "Python Official Site",
            url: "https://www.python.org/",
            description: "Python官方网站，下载最新版"
          },
          {
            title: "OpenAI API Documentation",
            url: "https://platform.openai.com/docs",
            description: "OpenAI API官方文档"
          }
        ],
        practice: {
          tasks: [
            "按照上面的步骤，把你的开发环境搭好",
            "写一个简单的Python程序测试LLM调用"
          ],
          hint: "遇到问题不要慌，复制错误信息去Google搜，肯定有人遇到过！"
        },
        notes: "环境搭好了，你就成功了一半！接下来就是大展身手！"
      },
      {
        day: 6,
        title: "第一个Agent实战",
        enTitle: "First Agent Practice",
        type: "core",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🚀 激动人心！写你的第一个Agent！</span>",
          "我们来做一个会查天气的小助手",
          "10行代码就能跑通，超级有成就感！"
        ],
        detail: [
          {
            title: "📝 完整代码示例（复制就能用！）",
            description: "用LangChain创建一个天气查询Agent",
            steps: [
              "# 1. 导入需要的包",
              "from langchain.agents import create_agent",
              "from langchain.tools import tool",
              "from langchain_openai import ChatOpenAI",
              "import os",
              "from dotenv import load_dotenv",
              "",
              "# 2. 加载环境变量",
              "load_dotenv()",
              "",
              "# 3. 定义一个天气工具（先模拟一个）",
              "@tool",
              "def get_current_weather(city: str) -> str:",
              "    \"\"\"查询指定城市的天气\"\"\"",
              "    weather_data = {",
              "        \"北京\": \"晴，-4℃\",",
              "        \"上海\": \"多云，10℃\",",
              "        \"深圳\": \"晴，22℃\"",
              "    }",
              "    return weather_data.get(city, f\"{city}的天气信息暂不支持查询\")",
              "",
              "# 4. 初始化Agent",
              "llm = ChatOpenAI(model=\"gpt-4\", temperature=0)",
              "agent = create_agent(",
              "    model=llm,",
              "    tools=[get_current_weather],",
              "    system_prompt=\"你是一个乐于助人的天气助手，用户问天气时请先调用天气工具！\"",
              ")",
              "",
              "# 5. 测试Agent！",
              "result = agent.invoke({\"messages\": [{\"role\": \"user\", \"content\": \"北京天气怎么样？\"}]})",
              "print(result[\"messages\"][-1].content)"
            ]
          },
          {
            title: "🎯 代码逐行解析（彻底搞懂！）",
            description: "每一行代码都在做什么？讲给你听！",
            steps: [
              "import - 导入需要的库，就像做饭前准备调料",
              "@tool - 这个装饰器把普通函数变成Agent能用的工具",
              "create_agent - 创建Agent的核心函数，传入模型和工具",
              "invoke - 调用Agent，就像对它说“干活！”",
              "messages - 对话历史，Agent根据这个来理解上下文"
            ]
          }
        ],
        resources: [
          {
            title: "LangChain Quickstart",
            url: "https://python.langchain.com/docs/get_started/quickstart",
            description: "LangChain快速入门指南（官方教程！）"
          }
        ],
        practice: {
          tasks: [
            "把上面的代码复制到你的电脑上运行",
            "自己再加一个工具，比如查时间的功能"
          ],
          hint: "先确保能跑通，再慢慢改！遇到报错仔细看错误信息！"
        },
        notes: "恭喜！你已经写出第一个Agent了！这是你AI开发之路的开始！"
      },
      {
        day: 7,
        title: "总结与答疑",
        enTitle: "Summary and Q&A",
        type: "extend",
        duration: "1小时",
        content: [
          "<span class='text-core font-bold'>🎉 第一阶段完成！回顾一下学到了什么！</span>",
          "花点时间消化消化，准备进入下一个阶段",
          "有问题也没关系，我们继续学习！"
        ],
        detail: [
          {
            title: "📋 第一阶段知识清单（检查一下）",
            description: "这些你都掌握了吗？",
            steps: [
              "✅ 理解什么是Agent，它和传统软件的区别",
              "✅ 知道Agent的核心组件：LLM、Memory、Planning、Tools、Action",
              "✅ 了解ReAct工作模式：思考-行动-观察循环",
              "✅ 知道主流框架：LangChain、LangGraph、AutoGen、CrewAI",
              "✅ 搭建好开发环境，写出第一个Agent"
            ]
          },
          {
            title: "🚀 接下来该学什么？（预告！）",
            description: "下一个阶段我们会深入学习：",
            steps: [
              "📋 规划能力 - Agent怎么把大任务拆成小步骤",
              "💾 记忆系统 - Agent怎么记住之前的对话",
              "🔧 工具调用 - Agent怎么用各种工具",
              "💬 思维链 - Agent怎么一步步思考"
            ]
          }
        ],
        practice: {
          tasks: [
            "写一篇学习笔记，记录你这一周学到了什么",
            "想想你最感兴趣的方向是什么？规划、记忆还是工具？"
          ],
          hint: "好记性不如烂笔头，写下来能帮你更好地理解！"
        },
        notes: "第一阶段完成！你已经入门Agent了！继续加油，下一关更精彩！"
      }
    ]
  },
  {
    id: 2,
    name: "三大基础组件",
    enName: "Three Core Components",
    days: 10,
    color: "from-purple-500 to-pink-400",
    description: "掌握规划、记忆、工具调用三大核心能力",
    enDescription: "Master planning, memory, and tool calling capabilities",
    topics: [
      {
        day: 1,
        title: "规划能力概述",
        enTitle: "Planning Overview",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📋 规划能力：Agent怎么把复杂任务拆成小步骤？</span>",
          "就像你做菜需要菜谱一样，Agent也需要规划",
          "搞懂这个，Agent就能处理复杂任务了！"
        ],
        detail: [
          {
            title: "🍳 用做菜理解任务分解！",
            description: "把大任务拆成小步骤，一步步来！",
            steps: [
              "大任务：做一顿饭",
              "分解成：1. 看冰箱有什么菜 2. 决定做什么 3. 准备食材 4. 做菜 5. 摆盘",
              "Agent也是这么做的！把复杂任务拆解成可执行的小步骤"
            ]
          },
          {
            title: "🎯 规划的核心方法有哪些？",
            description: "常见的几种规划策略，各有各的好！",
            steps: [
              "📝 ToT（ToDo List）- 直接列清单，最简单",
              "🌲 Tree of Thoughts - 树状探索，多个方案对比选最好的",
              "🔄 Reflexion - 反思优化，做完之后想想怎么改进"
            ]
          }
        ],
        resources: [
          {
            title: "LangChain Task Planning",
            url: "https://python.langchain.com/docs/modules/agents/",
            description: "LangChain Agent规划模块"
          }
        ],
        practice: {
          tasks: [
            "选择一个你日常的任务，比如整理房间，把它拆成小步骤",
            "想想如果Agent来做这个任务，它会怎么规划？"
          ],
          hint: "从你每天都做的事情开始，比如早上起床到出门的流程！"
        },
        notes: "规划的核心：把大任务拆小，把小任务做对！"
      },
      {
        day: 2,
        title: "思维链与思维树",
        enTitle: "CoT and ToT Reasoning",
        type: "core",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🧠 思维链（CoT）vs 思维树（ToT）- 让Agent会思考！</span>",
          "不是直接给答案，而是一步步推导",
          "就像数学题写过程，思路更清晰！"
        ],
        detail: [
          {
            title: "🔗 思维链（Chain of Thought）- 一步步想！",
            description: "让Agent把思考过程说出来，就像你做题打草稿！",
            steps: [
              "问题：小明有10个苹果，给了小红3个，又买了5个，现在有几个？",
              "不用直接说答案，而是一步步：",
              "Step 1: 10个给了3个，10-3=7个",
              "Step 2: 又买了5个，7+5=12个",
              "Step 3: 所以最后有12个！"
            ]
          },
          {
            title: "🌳 思维树（Tree of Thoughts）- 多个思路一起试！",
            description: "不只是一条路走到黑，而是多个方案对比选最优！",
            steps: [
              "就像下棋：先想几种走法，每个都想想后果",
              "思路1：这样走，可能会输",
              "思路2：那样走，好像能赢",
              "思路3：换个方式试试？",
              "最后选最好的那个思路！"
            ]
          },
          {
            title: "💡 怎么写思维链Prompt？给你个模板！",
            description: "这个模板超好用，直接套就行！",
            steps: [
              "系统提示词示例：",
              "请一步步思考解决问题，不要直接给答案。",
              "你的回答格式应该是：",
              "思考：[在这里写下你的思考过程]",
              "答案：[在这里给出最终答案]"
            ]
          }
        ],
        resources: [
          {
            title: "Hugging Face Agents Course",
            url: "https://huggingface.co/learn/agents-course/zh-CN",
            description: "Hugging Face官方Agent课程（中文！）"
          }
        ],
        practice: {
          tasks: [
            "找一个数学题，用思维链的方式自己解一遍",
            "写一个思维链的Prompt，让LLM按照这个格式回答"
          ],
          hint: "思维链虽然字多，但准确率高很多！这就是“慢思考”的力量！"
        },
        notes: "思维链的秘密：让思考过程“可见”，准确率大幅提升！"
      },
      {
        day: 3,
        title: "记忆系统基础",
        enTitle: "Memory System Basics",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💾 记忆系统：Agent怎么记住之前说过的话？</span>",
          "没记忆的Agent就像金鱼，每次都要重新问",
          "好的记忆系统让对话更自然！"
        ],
        detail: [
          {
            title: "🧠 人的记忆vsAgent的记忆 - 有趣的对比！",
            description: "Agent的记忆系统也是模仿人的！",
            steps: [
              "📝 短期记忆（工作记忆）- 就像你打电话时记住对方说的号码",
              "📚 长期记忆（持久记忆）- 就像你记住自己的生日",
              "🎬 情景记忆 - 就像你记得昨天吃了什么大餐"
            ]
          },
          {
            title: "🔄 对话历史管理 - 最简单的记忆！",
            description: "把之前的对话存下来，传给LLM就行！",
            steps: [
              "用户：你好！",
              "助手：你好呀！有什么我能帮你的？",
              "用户：我叫小明",
              "助手：你好小明！很高兴认识你！",
              "用户：我叫什么？（有记忆的话会记得是小明！）"
            ]
          },
          {
            title: "📦 记忆太长怎么办？几个实用技巧！",
            description: "LLM有输入长度限制，记忆不能无限存！",
            steps: [
              "🪟 滑动窗口 - 只保留最近N条消息",
              "📝 摘要记忆 - 把旧对话总结成摘要，节省空间",
              "🎯 重要性筛选 - 只记住重要的信息"
            ]
          }
        ],
        resources: [
          {
            title: "LangChain Memory",
            url: "https://python.langchain.com/docs/modules/memory/",
            description: "LangChain记忆模块（各种记忆方式都有！）"
          }
        ],
        practice: {
          tasks: [
            "写一个带记忆的对话程序，让Agent能记住你的名字",
            "试试对话多了之后会怎么样？会有问题吗？"
          ],
          hint: "试试和Agent聊很久，看看它什么时候会“失忆”！"
        },
        notes: "记忆的难点：既要记住重要的，又不能超过长度限制！"
      },
      {
        day: 4,
        title: "向量数据库基础",
        enTitle: "Vector Database Basics",
        type: "core",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🔢 向量数据库：怎么让Agent“理解”内容并快速找到？</span>",
          "普通数据库存的是文字，向量数据库存的是“意思”",
          "这是RAG（检索增强生成）的核心！"
        ],
        detail: [
          {
            title: "🎯 向量是什么？用大白话解释！",
            description: "把文字变成一串数字，就像给内容发个“身份证”！",
            steps: [
              "例子：",
              "\"猫咪\" 变成 [0.1, 0.5, -0.3, ...]（简化版）",
              "\"小狗\" 变成 [0.12, 0.48, -0.28, ...]",
              "你看，这两个向量很像，因为猫和狗都是宠物！",
              "相似度计算：看两个向量的距离，近的就是相关的！"
            ]
          },
          {
            title: "🏗️ 向量数据库工作流程（图解！）",
            description: "存入和查询的完整流程，一看就懂！",
            steps: [
              "存数据：文档 → 切分小块 → 转成向量 → 存入数据库",
              "查数据：用户问题 → 转成向量 → 找最相似的几个 → 返回给LLM",
              "LLM：根据相关内容 + 用户问题 → 生成回答！"
            ]
          },
          {
            title: "🛠️ 常用向量数据库推荐！",
            description: "初学者用哪个？都在这里了！",
            steps: [
              "🟢 Chroma - 轻量级，本地运行，学习首选！",
              "🔴 Pinecone - 托管服务，不用自己搭，适合生产",
              "🟠 Milvus - 功能强大，企业级选择",
              "🟡 Weaviate - 云原生，功能丰富"
            ]
          }
        ],
        resources: [
          {
            title: "ChromaDB",
            url: "https://www.trychroma.com/",
            description: "ChromaDB向量数据库（最简单的！）"
          },
          {
            title: "LlamaIndex Documentation",
            url: "https://docs.llamaindex.ai/",
            description: "LlamaIndex官方文档（做RAG超好用！）"
          }
        ],
        practice: {
          tasks: [
            "安装ChromaDB，试试存几个文档进去",
            "写一个简单程序，用相似度搜索找相关内容"
          ],
          hint: "从Chroma开始，最简单！pip install chromadb就能用！"
        },
        notes: "向量数据库的核心：把“意思”存下来，用“意思”搜索！"
      },
      {
        day: 5,
        title: "工具调用基础",
        enTitle: "Tool Calling Basics",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔧 工具调用：Agent怎么用各种“超能力”？</span>",
          "LLM本身不会查天气、不会算数学，但会用工具！",
          "学会这个，Agent的能力就能无限扩展！"
        ],
        detail: [
          {
            title: "📞 函数调用是怎么工作的？举个例子！",
            description: "LLM不直接做事，而是告诉我们“用这个工具，传这些参数”！",
            steps: [
              "用户：北京天气怎么样？",
              "LLM思考：我需要查天气，调用get_weather工具，参数是city=北京",
              "LLM输出：{\"tool\": \"get_weather\", \"params\": {\"city\": \"北京\"}}",
              "我们的代码：收到，去调用这个工具，拿到结果",
              "我们的代码：把结果传给LLM，LLM生成自然语言回答！"
            ]
          },
          {
            title: "📋 工具怎么定义？给你个模板！",
            description: "好的工具定义需要这几个要素！",
            steps: [
              "1️⃣ name（名字）- 工具叫什么，比如get_weather",
              "2️⃣ description（描述）- 这个工具是做什么的，LLM靠这个决定用不用",
              "3️⃣ parameters（参数）- 需要什么输入，每个参数的类型和描述",
              "4️⃣ 函数实现 - 真正执行的代码"
            ]
          }
        ],
        resources: [
          {
            title: "OpenAI Function Calling",
            url: "https://platform.openai.com/docs/guides/function-calling",
            description: "OpenAI函数调用官方指南（最权威！）"
          }
        ],
        practice: {
          tasks: [
            "按照模板定义一个你自己的工具，比如计算器",
            "让Agent调用你的工具，看看能不能正常工作"
          ],
          hint: "工具的description很重要！写得越清楚，LLM用得越好！"
        },
        notes: "工具调用的关键：描述要清楚，参数要明确！"
      },
      {
        day: 6,
        title: "自定义工具开发",
        enTitle: "Custom Tool Development",
        type: "practice",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🛠️ 自己写工具！让Agent拥有专属能力！</span>",
          "LangChain的@tool装饰器超好用",
          "写个工具没你想的那么难！"
        ],
        detail: [
          {
            title: "🎯 完整例子：写一个计算器工具！",
            description: "一步步来，跟着写就行！",
            steps: [
              "from langchain.tools import tool",
              "",
              "@tool",
              "def calculator(expression: str) -> str:",
              "    \"\"\"一个计算器工具，可以执行基本的数学运算。",
              "    ",
              "    Args:",
              "        expression: 数学表达式，比如 \"2+2\" 或 \"10*5\"",
              "    \"\"\"",
              "    try:",
              "        result = eval(expression)",
              "        return f\"计算结果: {result}\"",
              "    except Exception as e:",
              "        return f\"计算出错: {str(e)}\"",
              "",
              "# 这样就定义好了！然后传给Agent就行！"
            ]
          },
          {
            title: "💡 工具开发的最佳实践（避坑指南！）",
            description: "这些技巧能让你的工具更好用！",
            steps: [
              "1️⃣ 文档字符串要写清楚！LLM是靠这个理解工具的",
              "2️⃣ 参数要明确类型！用str、int、float这些",
              "3️⃣ 错误处理要做好！别让工具报错让Agent尴尬",
              "4️⃣ 返回结果要简洁！太长的话LLM记不住",
              "5️⃣ 一个工具只做一件事！太复杂的话拆成多个"
            ]
          },
          {
            title: "🌐 进阶：调用第三方API！",
            description: "让Agent能上网查资料！",
            steps: [
              "常用的API：",
              "🌤️ 天气API - OpenWeatherMap",
              "🔍 搜索API - Serper、Google Search",
              "📰 新闻API - NewsAPI",
              "💾 数据库 - PostgreSQL、MySQL",
              "提示：用requests库来调用这些API！"
            ]
          }
        ],
        practice: {
          tasks: [
            "写3个工具：计算器、待办事项管理、天气查询",
            "让Agent能同时使用这3个工具"
          ],
          hint: "先写最简单的，跑通了再慢慢加功能！"
        },
        notes: "好的工具：单一职责、明确文档、良好错误处理！"
      },
      {
        day: 7,
        title: "工具组合使用",
        enTitle: "Tool Composition",
        type: "practice",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🔗 多个工具一起用！Agent变成全能选手！</span>",
          "单个工具不够强，组合起来才厉害",
          "就像瑞士军刀，工具多才好用！"
        ],
        detail: [
          {
            title: "🎬 场景举例：帮我策划一次约会！",
            description: "看看多个工具是怎么配合的！",
            steps: [
              "用户：帮我策划一次周六的约会！",
              "Agent思考：我需要知道天气、推荐餐厅、规划路线",
              "1️⃣ 调用天气工具：查周六天气怎么样",
              "2️⃣ 调用搜索工具：搜索附近适合约会的餐厅",
              "3️⃣ 调用地图工具：查去餐厅的路线",
              "4️⃣ 整合信息，给用户一个完整的计划！"
            ]
          },
          {
            title: "🎯 Agent怎么选择用哪个工具？",
            description: "揭秘Agent的决策过程！",
            steps: [
              "1️⃣ 理解用户的需求是什么",
              "2️⃣ 看看我有哪些工具，每个工具是做什么的",
              "3️⃣ 决定先用哪个工具",
              "4️⃣ 拿到结果后，决定下一步用哪个工具",
              "5️⃣ 重复，直到任务完成！"
            ]
          }
        ],
        practice: {
          tasks: [
            "想一个需要3个以上工具配合的任务",
            "写代码实现这个场景，让Agent自己决定用什么工具"
          ],
          hint: "从你的生活中找灵感！比如安排旅行、策划聚会等！"
        },
        notes: "工具组合的威力：1+1>2！Agent能力上限取决于你给它多少工具！"
      },
      {
        day: 8,
        title: "三大组件综合实战",
        enTitle: "Three Components Integration",
        type: "core",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>🎯 把规划、记忆、工具都用上！做一个完整的Agent！</span>",
          "我们来做一个研究助手Agent",
          "整合这阶段学的所有知识！"
        ],
        detail: [
          {
            title: "📝 项目目标：研究助手Agent",
            description: "这个Agent能帮你查资料、整理信息、写报告！",
            steps: [
              "📋 规划能力：把研究任务拆成步骤",
              "💾 记忆能力：记住之前查了什么，避免重复",
              "🔧 工具能力：搜索、抓取网页、总结内容",
              "🧠 思维链：一步步思考，给出合理的研究计划"
            ]
          },
          {
            title: "💻 核心代码框架（参考！）",
            description: "可以在这个基础上扩展！",
            steps: [
              "from langchain.agents import create_agent",
              "from langchain.tools import tool",
              "from langgraph.checkpoint import MemorySaver",
              "",
              "# 1. 定义工具（搜索、总结等）",
              "# 2. 初始化带记忆的Agent",
              "checkpointer = MemorySaver()  # 加入记忆！",
              "agent = create_agent(",
              "    model=llm,",
              "    tools=tools,",
              "    checkpointer=checkpointer,  # 这行加上就有记忆了！",
              "    system_prompt=\"你是一个专业研究助手...\"",
              ")",
              "# 3. 调用Agent！"
            ]
          }
        ],
        practice: {
          tasks: [
            "完整实现这个研究助手Agent",
            "测试一下：让它帮你研究一个你感兴趣的话题"
          ],
          hint: "先做MVP（最小可用产品），能跑通再慢慢加功能！"
        },
        notes: "整合完成！你现在已经掌握Agent开发的三大核心能力了！"
      },
      {
        day: 9,
        title: "常见问题与调试",
        enTitle: "Common Issues and Debugging",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🐛 Agent出问题了怎么办？调试技巧大全！</span>",
          "做开发肯定会遇到bug，别慌！",
          "这些技巧帮你快速定位和解决问题！"
        ],
        detail: [
          {
            title: "❓ 常见问题1：Agent不用工具怎么办？",
            description: "明明有工具，但Agent就是不用，直接瞎回答！",
            steps: [
              "1️⃣ 检查工具的description是不是写得不清楚",
              "2️⃣ 在system prompt里强调：必须用工具！",
              "3️⃣ 给few-shot例子，示范怎么用工具",
              "4️⃣ 降低temperature，让Agent更听话"
            ]
          },
          {
            title: "❓ 常见问题2：Agent陷入死循环！",
            description: "Agent一直在想，但就是完不成任务！",
            steps: [
              "1️⃣ 设置最大迭代次数限制",
              "2️⃣ 在prompt里要求Agent完成任务后明确说“完成”",
              "3️⃣ 检查是不是工具返回的结果有问题",
              "4️⃣ 简化任务，拆成更小的步骤"
            ]
          },
          {
            title: "❓ 常见问题3：Agent失忆了！",
            description: "之前说过的话，Agent转头就忘！",
            steps: [
              "1️⃣ 检查是不是没加checkpointer",
              "2️⃣ 检查是不是每次调用都新建了一个Agent",
              "3️⃣ 对话是不是太长，超过上下文窗口了？",
              "4️⃣ 改用摘要记忆或者滑动窗口"
            ]
          },
          {
            title: "🔍 调试的通用方法！",
            description: "这些方法90%的问题都能解决！",
            steps: [
              "1️⃣ 打印中间状态：看看Agent每一步在做什么",
              "2️⃣ 简化问题：先试最简单的场景，慢慢加复杂度",
              "3️⃣ 单步调试：手动模拟Agent的思考过程",
              "4️⃣ 去GitHub issues搜：你遇到的问题可能别人也遇到过！"
            ]
          }
        ],
        practice: {
          tasks: [
            "故意弄出几个bug，试试用上面的方法调试",
            "记录一下你遇到的问题和解决方案，以后能用上！"
          ],
          hint: "每个开发者都是从无数bug中成长起来的！遇到问题是好事，说明你在进步！"
        },
        notes: "调试心得：问题出现时，先看日志，再简化，最后单步走！"
      },
      {
        day: 10,
        title: "第二阶段总结",
        enTitle: "Second Stage Summary",
        type: "extend",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🎉 第二阶段完成！你已经掌握了Agent的核心！</span>",
          "回顾一下我们学了什么",
          "准备好进入更高级的主题了！"
        ],
        detail: [
          {
            title: "🏆 第二阶段成就解锁！",
            description: "看看你学会了哪些技能！",
            steps: [
              "✅ 规划能力：会用CoT、ToT，把大任务拆小",
              "✅ 记忆系统：知道短期、长期记忆，会用checkpointer",
              "✅ 向量数据库：了解Chroma、Pinecone，会存会查",
              "✅ 工具调用：会写工具，会用装饰器，能多个工具组合",
              "✅ 调试技巧：能解决常见问题，会看日志"
            ]
          },
          {
            title: "🚀 预告：下一站更精彩！",
            description: "接下来我们会学什么？",
            steps: [
              "🔗 LangGraph - 复杂流程编排",
              "👥 多Agent - 多个Agent协作",
              "📚 RAG深入 - 企业级知识库",
              "🚀 生产部署 - 把Agent上线！"
            ]
          }
        ],
        practice: {
          tasks: [
            "回顾一下这10天的学习，写一份总结",
            "想想你最感兴趣的方向是什么？后面可以深入研究！"
          ],
          hint: "可以开始想一个完整的项目了！后面几阶段我们会做一个大项目！"
        },
        notes: "第二阶段完成！你的Agent现在会思考、会记忆、会用工具了！继续加油！"
      }
    ]
  },
  {
    id: 3,
    name: "单Agent基础架构",
    enName: "Single Agent Architecture",
    days: 7,
    color: "from-green-500 to-emerald-400",
    description: "深入理解单Agent的完整运行机制",
    enDescription: "Deep understanding of single Agent operation mechanism",
    topics: [
      {
        day: 1,
        title: "Agent循环机制",
        enTitle: "Agent Loop Mechanism",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔄 Agent的核心循环：就像一个自动驾驶汽车！</span>",
          "观察环境 → 思考决策 → 执行行动 → 观察结果 → 继续循环",
          "这个循环就是Agent能自主工作的秘密！"
        ],
        detail: [
          {
            title: "🚗 用自动驾驶理解Agent循环！",
            description: "你开车的过程就是完美的Agent循环例子！",
            steps: [
              "1️⃣ 观察：看路况、看导航、看周围车辆",
              "2️⃣ 思考：判断该加速、减速、还是变道",
              "3️⃣ 行动：踩油门、转方向盘、打转向灯",
              "4️⃣ 观察：看操作后的结果，继续下一轮循环",
              "Agent就是这么工作的！是不是很容易理解？"
            ]
          },
          {
            title: "🎯 ReAct循环拆解：每一步都做什么？",
            description: "让我们把这个循环拆解开来看看！",
            steps: [
              "🤔 Thought（思考）：分析当前情况，决定下一步做什么",
              "🛠️ Action（行动）：调用工具，执行具体操作",
              "👀 Observation（观察）：看工具返回了什么结果",
              "🔄 Repeat（重复）：根据结果继续思考-行动-观察",
              "✅ Finish（完成）：任务完成，给用户最终答案"
            ]
          }
        ],
        practice: {
          tasks: [
            "选一个你每天做的事情，比如做早餐，把它拆分成ReAct循环",
            "想想每一步的观察、思考、行动分别是什么"
          ],
          hint: "从简单的日常任务开始，慢慢体会这个循环的过程！"
        },
        notes: "记住：Agent不是一次性给出答案，而是一步步解决问题！"
      },
      {
        day: 2,
        title: "Prompt工程",
        enTitle: "Prompt Engineering",
        type: "core",
        duration: "3小时",
        content: [
          "<span class='text-core font-bold'>✍️ Prompt就像给Agent写的岗位说明书！</span>",
          "好的Prompt能让Agent表现得像个专家，差的Prompt会让Agent一脸懵",
          "这一课我们来学习怎么写好Agent的Prompt！"
        ],
        detail: [
          {
            title: "📋 好的Agent Prompt应该包含什么？",
            description: "就像招聘启事一样，要把职责说清楚！",
            steps: [
              "🎭 角色定义：你是一个什么类型的助手？（如：你是一个专业的Python开发专家）",
              "📝 任务描述：你的主要工作是什么？（如：帮用户编写和调试代码）",
              "🔧 工具说明：你有哪些工具可以用？怎么用？",
              "🎨 输出格式：你应该怎么回答？（如：先分析问题，再给出代码）",
              "⚠️ 约束条件：什么事情不能做？（如：不要编造API文档）"
            ]
          },
          {
            title: "💡 给你一个好用的Prompt模板！",
            description: "这个模板经过验证，直接填内容就行！",
            steps: [
              "你是一个【你的Agent角色】，专门帮助用户【任务目标】。",
              "",
              "你可以使用以下工具：",
              "- 【工具1名称】：【工具1描述】",
              "- 【工具2名称】：【工具2描述】",
              "",
              "请按照以下格式回复：",
              "1. 首先分析用户的问题",
              "2. 如果需要使用工具，明确说明使用哪个工具",
              "3. 执行后给出最终答案",
              "",
              "记住：【重要的约束条件】"
            ]
          },
          {
            title: "🚫 Prompt常见错误示范！",
            description: "这些错误要避免！",
            steps: [
              "❌ 太简短：\"帮我写代码\"（缺少上下文和具体要求）",
              "❌ 太模糊：\"尽量做好一点\"（什么是\"好\"？）",
              "❌ 太复杂：把所有细节堆在一起（重要信息会被淹没）",
              "✅ 正确做法：清晰、具体、分点列出要求"
            ]
          }
        ],
        practice: {
          tasks: [
            "为一个\"数学家教Agent\"写一个Prompt",
            "包含角色定义、工具说明、输出格式"
          ],
          hint: "想想如果请一个真人数学家教，你会怎么跟他描述工作要求？"
        },
        notes: "好的Prompt：角色清晰、任务明确、格式规范、约束具体！"
      },
      {
        day: 3,
        title: "Agent输出解析",
        enTitle: "Agent Output Parsing",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📝 让Agent用固定格式回答：像填空一样简单！</span>",
          "如果Agent每次回答格式都不一样，我们很难处理",
          "这一课学习怎么让Agent输出结构化数据！"
        ],
        detail: [
          {
            title: "🎯 为什么需要结构化输出？",
            description: "用个例子你就明白了！",
            steps: [
              "❌ 非结构化：\"我觉得应该用搜索工具，查一下北京的天气\"",
              "✅ 结构化：{\"tool\": \"search\", \"query\": \"北京天气\"}",
              "结构化输出能让代码自动处理，不用手动去抠文字！"
            ]
          },
          {
            title: "📐 几种常用的输出格式！",
            description: "根据需要选择合适的格式！",
            steps: [
              "📄 JSON：最常用，结构清晰，程序容易解析",
              "📋 XML：适合复杂嵌套结构",
              "📝 YAML：人类可读性好，也能被程序解析",
              "🎨 自定义格式：比如用---分割，用##标记章节"
            ]
          },
          {
            title: "💻 怎么让Agent输出JSON？给你个模板！",
            description: "这招超好用，试试看！",
            steps: [
              "请严格按照以下JSON格式输出：",
              "{",
              "  \"thought\": \"你的思考过程\",",
              "  \"action\": \"要使用的工具名称\",",
              "  \"action_input\": \"工具的输入参数\",",
              "  \"answer\": \"最终答案（如果不需要用工具）\"",
              "}",
              "",
              "记住：只输出JSON，不要有其他文字！"
            ]
          }
        ],
        practice: {
          tasks: [
            "写一个Prompt，让Agent以固定格式输出天气查询结果",
            "要求包含：城市名、天气情况、温度、建议事项"
          ],
          hint: "可以用JSON也可以用其他格式，只要结构清晰就行！"
        },
        notes: "结构化输出：让Agent的回答机器能懂，人也能懂！"
      },
      {
        day: 4,
        title: "状态管理",
        enTitle: "State Management",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💾 Agent的大脑内存：把重要信息存起来！</span>",
          "就像你工作时需要笔记本一样，Agent也需要记住状态",
          "这一课学习怎么设计和管理Agent的状态！"
        ],
        detail: [
          {
            title: "🧠 Agent状态里应该存什么？",
            description: "想想如果你是Agent，你会记什么？",
            steps: [
              "💬 对话历史：用户之前说了什么，我之前回答了什么",
              "🎯 当前任务：我现在正在做什么任务",
              "⚙️ 中间结果：工具返回的结果，还没整理成最终答案",
              "📊 进度信息：任务完成了多少，还有什么要做"
            ]
          },
          {
            title: "📦 用Python字典做状态管理，简单又好用！",
            description: "给你一个常用的状态结构模板！",
            steps: [
              "{",
              "  \"messages\": [],  // 对话历史",
              "  \"task\": \"\",      // 当前任务描述",
              "  \"results\": {},     // 收集的结果",
              "  \"step\": 0,         // 当前步骤",
              "  \"max_steps\": 10,   // 最大步骤数",
              "  \"finished\": false  // 是否完成",
              "}"
            ]
          },
          {
            title: "🔄 状态流转的完整流程！",
            description: "看看状态是怎么一步步变化的！",
            steps: [
              "1️⃣ 初始状态：空状态，只有用户的问题",
              "2️⃣ 执行中：状态不断更新，记录每一步的结果",
              "3️⃣ 完成时：标记finished=True，保存最终结果",
              "4️⃣ 持久化：可选，把状态存到数据库或文件"
            ]
          }
        ],
        practice: {
          tasks: [
            "设计一个待办事项Agent的状态结构",
            "想想需要存哪些信息"
          ],
          hint: "从用户需求出发：待办列表、完成状态、添加时间、优先级..."
        },
        notes: "好的状态设计：够用但不冗余，能回溯，易扩展！"
      },
      {
        day: 5,
        title: "错误处理",
        enTitle: "Error Handling",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>⚠️ Agent也会犯错：教它优雅地处理错误！</span>",
          "工具调用可能失败、API可能超时、用户输入可能奇怪",
          "好的Agent即使出错也能优雅恢复，不会直接崩溃！"
        ],
        detail: [
          {
            title: "🦠 Agent可能遇到哪些错误？",
            description: "提前了解这些坑，才能做好应对！",
            steps: [
              "🌐 API错误：网络超时、限流、认证失败",
              "🔧 工具错误：工具调用参数不对、工具内部报错",
              "🧠 推理错误：Agent理解错了、输出格式不对",
              "⏰ 超时错误：Agent一直循环，停不下来"
            ]
          },
          {
            title: "🛡️ 错误处理的黄金法则！",
            description: "这些原则能帮你写出健壮的Agent！",
            steps: [
              "1️⃣ 捕获错误：try-except把错误包住，别让程序崩了",
              "2️⃣ 记录日志：把错误记下来，方便后续调试",
              "3️⃣ 友好反馈：用自然语言告诉用户出了什么问题",
              "4️⃣ 自动重试：有些错误可以重试几次",
              "5️⃣ 降级方案：这个工具不行，试试另一个"
            ]
          },
          {
            title: "💻 一个实用的错误处理代码模板！",
            description: "可以直接用到你的项目里！",
            steps: [
              "try:",
              "    result = agent.invoke(input)",
              "    return result",
              "except APIError as e:",
              "    logger.error(f\"API调用失败: {e}\")",
              "    return \"抱歉，网络有点问题，请稍后再试\"",
              "except Exception as e:",
              "    logger.error(f\"未知错误: {e}\")",
              "    return \"抱歉，遇到了一些问题，请稍后再试或联系管理员\""
            ]
          }
        ],
        practice: {
          tasks: [
            "为你的天气查询Agent添加错误处理",
            "想想可能出什么问题，怎么处理"
          ],
          hint: "API调用失败怎么办？用户输入奇怪的城市名怎么办？"
        },
        notes: "错误处理原则：不崩溃、有反馈、能重试、留记录！"
      },
      {
        day: 6,
        title: "日志与调试",
        enTitle: "Logging and Debugging",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔍 Agent在想什么？日志帮你看透它！</span>",
          "Agent是个黑盒子，有了日志就能看到它每一步做了什么",
          "好的日志系统让调试效率翻倍！"
        ],
        detail: [
          {
            title: "📝 应该记录哪些日志信息？",
            description: "像写日记一样，重要的事情都记下来！",
            steps: [
              "🗣️ 用户输入：用户说了什么、问了什么",
              "🤔 Agent思考：每一步的Thought是什么",
              "🛠️ 工具调用：用了什么工具、传了什么参数",
              "📊 工具结果：工具返回了什么结果",
              "✅ 最终答案：Agent给用户的回复是什么"
            ]
          },
          {
            title: "🎨 日志级别：不同重要程度用不同颜色！",
            description: "这样一眼就能看出问题！",
            steps: [
              "🔵 DEBUG：最详细的信息，比如所有中间状态",
              "🟢 INFO：普通信息，任务开始、完成等",
              "🟡 WARNING：警告，可能有问题但还能继续",
              "🔴 ERROR：错误，需要关注和修复的问题"
            ]
          },
          {
            title: "🐛 调试技巧：Agent出问题了怎么查？",
            description: "这些方法能帮你快速定位问题！",
            steps: [
              "1️⃣ 看日志：一步一步看它做了什么，哪一步开始错的",
              "2️⃣ 简化：把问题简化，找最小复现案例",
              "3️⃣ 单步：让Agent一步一步走，看每一步对不对",
              "4️⃣ 对比：同样的输入，好的Agent和坏的Agent有什么区别"
            ]
          }
        ],
        practice: {
          tasks: [
            "给你的Agent添加日志记录功能",
            "记录用户输入、思考过程、工具调用、最终答案"
          ],
          hint: "可以用Python的logging模块，也可以简单地print到文件！"
        },
        notes: "好的日志：让你能回放Agent的完整思考过程！"
      },
      {
        day: 7,
        title: "单Agent项目实战",
        enTitle: "Single Agent Project",
        type: "core",
        duration: "4小时",
        content: [
          "<span class='text-core font-bold'>🚀 整合所学，做一个完整的项目！</span>",
          "这是检验你学习成果的时刻，把这几天学的都用上！",
          "我们来做一个「智能生活助手」！"
        ],
        detail: [
          {
            title: "💡 项目建议：智能生活助手！",
            description: "这个Agent能帮你查天气、看新闻、记事情，全能！",
            steps: [
              "功能1：天气查询（实时天气、未来预报）",
              "功能2：新闻摘要（今天有什么大事）",
              "功能3：待办事项（添加、查询、标记完成）",
              "功能4：闲聊陪伴（没事也能聊两句）"
            ]
          },
          {
            title: "📐 项目架构建议：怎么组织代码？",
            description: "好的代码结构让项目更容易维护！",
            steps: [
              "📁 tools/：放所有工具（天气工具、新闻工具...）",
              "📁 config/：配置文件（API Key、模型设置...）",
              "📁 utils/：辅助函数（日志、错误处理...）",
              "📁 main.py：主程序入口，把所有东西拼起来"
            ]
          },
          {
            title: "🎯 完整的开发步骤：一步步来！",
            description: "按照这个步骤来，项目很快就能完成！",
            steps: [
              "1️⃣ 环境搭建：安装依赖、配置API Key",
              "2️⃣ 工具开发：一个一个实现工具，单独测试",
              "3️⃣ Agent组装：把工具都集成到Agent里",
              "4️⃣ 测试优化：找朋友测测，根据反馈优化",
              "5️⃣ 部署上线：做成网页或聊天机器人"
            ]
          }
        ],
        practice: {
          tasks: [
            "完成这个智能生活助手项目",
            "写下你开发过程中遇到的问题和解决方案"
          ],
          hint: "别追求完美，先让MVP（最小可用产品）跑起来，再慢慢优化！"
        },
        notes: "项目完成！你现在已经是一名合格的Agent开发者了！"
      }
    ]
  },
  {
    id: 4,
    name: "常用工具接入",
    enName: "Tool Integration",
    days: 7,
    color: "from-orange-500 to-amber-400",
    description: "掌握主流工具与API的集成方法",
    enDescription: "Master mainstream tool and API integration methods",
    topics: [
      {
        day: 1,
        title: "搜索工具",
        enTitle: "Search Tools",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔍 给Agent一双能上网的眼睛：搜索工具！</span>",
          "LLM的知识有时效性，搜索工具能让Agent获得最新信息",
          "这一课学习如何给Agent接入搜索能力！"
        ],
        detail: [
          {
            title: "🌐 免费搜索API推荐：不花钱也能用！",
            description: "这些API对初学者很友好！",
            steps: [
              "🦆 DuckDuckGo API：完全免费，但功能较简单",
              "🔍 Serper API：免费额度够用，结果质量好",
              "🌊 Tavily：专门为Agent设计的搜索API",
              "🟢 Bing Search：微软提供，有免费额度"
            ]
          },
          {
            title: "💻 搜索工具代码示例：拿来就能用！",
            description: "以Serper为例，其他API也是类似用法！",
            steps: [
              "from langchain.tools import tool",
              "import requests",
              "",
              "@tool",
              "def web_search(query: str) -> str:",
              "    \"\"\"通过搜索引擎查询最新信息\"\"\"",
              "    url = \"https://google.serper.dev/search\"",
              "    headers = {\"X-API-KEY\": \"你的API_KEY\"}",
              "    params = {\"q\": query}",
              "    response = requests.post(url, headers=headers, json=params)",
              "    results = response.json()",
              "    ",
              "    # 整理搜索结果",
              "    formatted_results = []",
              "    for item in results.get('organic', [])[:3]:",
              "        formatted_results.append(f\"- {item['title']}\\n  {item['snippet']}\\n  {item['link']}\")",
              "    ",
              "    return '\\n'.join(formatted_results)"
            ]
          },
          {
            title: "🎯 搜索技巧：怎么让Agent搜得更准？",
            description: "这些提示词技巧能提升搜索质量！",
            steps: [
              "✅ 明确意图：在搜索前让Agent分析用户到底想知道什么",
              "✅ 改写查询：把自然语言改成搜索引擎喜欢的关键词",
              "✅ 多重搜索：一个问题可能需要搜好几次，组合结果",
              "✅ 结果筛选：过滤掉不相关的，只保留有用的"
            ]
          }
        ],
        resources: [
          {
            title: "Serper官网",
            url: "https://serper.dev/",
            description: "申请免费API Key"
          }
        ],
        practice: {
          tasks: [
            "注册一个搜索服务，获取API Key",
            "实现搜索工具，让Agent能用它查资料"
          ],
          hint: "先手动测试API能用，再集成到Agent里！"
        },
        notes: "搜索工具：让Agent的知识能实时更新！"
      },
      {
        day: 2,
        title: "计算工具",
        enTitle: "Calculation Tools",
        type: "practice",
        duration: "1小时",
        content: [
          "<span class='text-core font-bold'>🧮 让Agent能做数学题：计算工具！</span>",
          "LLM虽然聪明，但数学计算不一定准，用工具更可靠",
          "这一课学习如何给Agent接入计算能力！"
        ],
        detail: [
          {
            title: "🎯 什么时候用计算工具？",
            description: "这些情况让Agent用工具算！",
            steps: [
              "➕ 四则运算：加、减、乘、除",
              "📊 复杂数学：代数、几何、统计",
              "📈 单位转换：货币、长度、重量",
              "🔢 公式计算：面积、体积、利息等"
            ]
          },
          {
            title: "💻 计算器工具实现：超简单！",
            description: "Python有个强大的计算库，直接用！",
            steps: [
              "from langchain.tools import tool",
              "",
              "@tool",
              "def calculator(expression: str) -> str:",
              "    \"\"\"执行数学计算，如2+2或10*5或2^10\"\"\"",
              "    try:",
              "        # 使用eval，但要注意安全，实际项目建议用更安全的库",
              "        import ast",
              "        import operator",
              "        ",
              "        # 安全的表达式求值器",
              "        def safe_eval(expr):",
              "            allowed_ops = {",
              "                ast.Add: operator.add, ast.Sub: operator.sub,",
              "                ast.Mult: operator.mul, ast.Div: operator.truediv,",
              "                ast.Pow: operator.pow, ast.USub: operator.neg",
              "            }",
              "            node = ast.parse(expr, mode='eval')",
              "            def _eval(node):",
              "                if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):",
              "                    return node.value",
              "                elif isinstance(node, ast.BinOp):",
              "                    return allowed_ops[type(node.op)](_eval(node.left), _eval(node.right))",
              "                elif isinstance(node, ast.UnaryOp):",
              "                    return allowed_ops[type(node.op)](_eval(node.operand))",
              "                else:",
              "                    raise ValueError(f\"不支持的操作: {expr}\")",
              "            return _eval(node.body)",
              "        ",
              "        result = safe_eval(expression)",
              "        return f\"计算结果: {result}\"",
              "    except Exception as e:",
              "        return f\"计算出错: {str(e)}\""
            ]
          },
          {
            title: "🚀 进阶：专业计算工具！",
            description: "需要更强大的计算能力？用这些库！",
            steps: [
              "🔢 SymPy：符号计算，能做代数、微积分",
              "📊 NumPy/SciPy：科学计算、统计分析",
              "📈 Pandas：数据分析、表格处理",
              "🎨 Matplotlib：画图、数据可视化"
            ]
          }
        ],
        practice: {
          tasks: [
            "实现一个计算器工具",
            "测试一下，让Agent算几道数学题"
          ],
          hint: "注意安全！不要直接用eval执行用户输入的任意代码！"
        },
        notes: "计算工具：让Agent的数学不再出错！"
      },
      {
        day: 3,
        title: "文档处理",
        enTitle: "Document Processing",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📄 让Agent能读文档：PDF、Word、TXT都不是问题！</span>",
          "用户经常会上传文档让Agent处理，这是很实用的功能",
          "这一课学习如何让Agent读取和理解各种文档！"
        ],
        detail: [
          {
            title: "📑 常用文档格式处理库！",
            description: "Python生态丰富，什么格式都能读！",
            steps: [
              "📄 PDF：PyPDF2、pdfplumber、PyMuPDF（fitz）",
              "📝 Word：python-docx",
              "📊 Excel：openpyxl、pandas",
              "📜 纯文本：直接open()读，注意编码"
            ]
          },
          {
            title: "💻 PDF读取工具实现！",
            description: "以PDF为例，其他文档也是类似思路！",
            steps: [
              "from langchain.tools import tool",
              "from pathlib import Path",
              "",
              "@tool",
              "def read_pdf(file_path: str) -> str:",
              "    \"\"\"读取PDF文档内容\"\"\"",
              "    try:",
              "        import PyPDF2",
              "        ",
              "        text = \"\"",
              "        with open(file_path, 'rb') as file:",
              "            reader = PyPDF2.PdfReader(file)",
              "            for page_num, page in enumerate(reader.pages):",
              "                text += f\"--- 第{page_num + 1}页 ---\\n\"",
              "                text += page.extract_text() + \"\\n\"",
              "        ",
              "        return text[:5000]  # 限制长度，避免超出token",
              "    except Exception as e:",
              "        return f\"读取PDF失败: {str(e)}\"",
              "",
              "@tool",
              "def read_txt(file_path: str) -> str:",
              "    \"\"\"读取TXT文本文件\"\"\"",
              "    try:",
              "        with open(file_path, 'r', encoding='utf-8') as f:",
              "            text = f.read()",
              "        return text[:5000]",
              "    except Exception as e:",
              "        return f\"读取文件失败: {str(e)}\""
            ]
          },
          {
            title: "✨ 文档处理进阶技巧！",
            description: "让Agent能更智能地处理文档！",
            steps: [
              "📝 摘要：先把文档读出来，让LLM做个摘要",
              "🔍 问答：对文档内容提问，用RAG的方式回答",
              "📊 提取信息：从文档里提取特定信息（比如名字、日期、金额）",
              "✍️ 改写：翻译、润色、简化文档内容"
            ]
          }
        ],
        practice: {
          tasks: [
            "实现一个能读取PDF和TXT的工具",
            "让Agent能回答文档相关的问题"
          ],
          hint: "大文档建议先做切分和向量化，用上RAG技术！"
        },
        notes: "文档工具：让Agent能帮你处理各种文档！"
      },
      {
        day: 4,
        title: "API调用工具",
        enTitle: "API Calling Tools",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🌐 万物皆可API：Agent的超能力来源！</span>",
          "世界上有无数的API，天气、股票、快递、酒店...",
          "学会这一课，你能让Agent接入任何API！"
        ],
        detail: [
          {
            title: "📋 HTTP请求基础：什么是GET/POST？",
            description: "这些是调用API的基础！",
            steps: [
              "🔵 GET：获取数据，参数在URL里",
              "🔴 POST：提交数据，参数在请求体里",
              "🟡 PUT：更新数据",
              "🟢 DELETE：删除数据",
              "📎 Headers：放API Key、Content-Type等信息"
            ]
          },
          {
            title: "💻 通用API调用工具模板！",
            description: "稍微改一改就能调用各种API！",
            steps: [
              "from langchain.tools import tool",
              "import requests",
              "",
              "@tool",
              "def call_api(url: str, method: str = 'GET', params: dict = None, headers: dict = None) -> str:",
              "    \"\"\"调用外部API获取数据\"\"\"",
              "    try:",
              "        if method.upper() == 'GET':",
              "            response = requests.get(url, params=params, headers=headers, timeout=10)",
              "        elif method.upper() == 'POST':",
              "            response = requests.post(url, json=params, headers=headers, timeout=10)",
              "        else:",
              "            return f\"不支持的HTTP方法: {method}\"",
              "        ",
              "        if response.status_code == 200:",
              "            return str(response.json())",
              "        else:",
              "            return f\"API调用失败，状态码: {response.status_code}\"",
              "    except Exception as e:",
              "        return f\"调用API出错: {str(e)}\""
            ]
          },
          {
            title: "✨ API调用最佳实践！",
            description: "这些经验能帮你少走弯路！",
            steps: [
              "🔑 安全：API Key要放在环境变量里，不要写死在代码里",
              "⏰ 超时：设置合理的超时时间，避免卡死",
              "🔄 重试：网络不稳定时可以自动重试",
              "📊 限流：尊重API的频率限制，不要调用太频繁"
            ]
          }
        ],
        practice: {
          tasks: [
            "找一个你感兴趣的免费API（天气、新闻、图片等）",
            "给Agent接入这个API，让它能调用"
          ],
          hint: "去Public APIs网站上找，有各种有趣的免费API！"
        },
        notes: "API工具：Agent能力的边界就是API的边界！"
      },
      {
        day: 5,
        title: "数据库工具",
        enTitle: "Database Tools",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💾 让Agent能读写数据库：持久化你的数据！</span>",
          "Agent生产环境通常需要数据库来存数据",
          "这一课学习如何让Agent安全地操作数据库！"
        ],
        detail: [
          {
            title: "🗃️ 常用数据库选型：根据需要选择！",
            description: "不同场景用不同数据库！",
            steps: [
              "🟢 SQLite：最简单，文件式，不用安装，适合学习和小项目",
              "🔵 PostgreSQL：功能强大，开源免费，生产环境常用",
              "🟠 MySQL：同样流行，与PostgreSQL各有千秋",
              "🔴 Redis：内存数据库，速度快，适合缓存和临时数据"
            ]
          },
          {
            title: "💻 SQLite工具示例：简单好用！",
            description: "SQLite不需要安装，Python自带支持！",
            steps: [
              "from langchain.tools import tool",
              "import sqlite3",
              "from pathlib import Path",
              "",
              "DB_PATH = \"agent.db\"",
              "",
              "def init_db():",
              "    \"\"\"初始化数据库，建表\"\"\"",
              "    conn = sqlite3.connect(DB_PATH)",
              "    c = conn.cursor()",
              "    c.execute('''CREATE TABLE IF NOT EXISTS todos",
              "                 (id INTEGER PRIMARY KEY AUTOINCREMENT,",
              "                  task TEXT, completed INTEGER DEFAULT 0,",
              "                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')",
              "    conn.commit()",
              "    conn.close()",
              "",
              "init_db()  # 程序启动时初始化",
              "",
              "@tool",
              "def add_todo(task: str) -> str:",
              "    \"\"\"添加待办事项\"\"\"",
              "    try:",
              "        conn = sqlite3.connect(DB_PATH)",
              "        c = conn.cursor()",
              "        c.execute(\"INSERT INTO todos (task) VALUES (?)\", (task,))",
              "        conn.commit()",
              "        todo_id = c.lastrowid",
              "        conn.close()",
              "        return f\"添加成功！待办事项 #{todo_id}: {task}\"",
              "    except Exception as e:",
              "        return f\"添加失败: {str(e)}\"",
              "",
              "@tool",
              "def list_todos() -> str:",
              "    \"\"\"列出所有待办事项\"\"\"",
              "    try:",
              "        conn = sqlite3.connect(DB_PATH)",
              "        c = conn.cursor()",
              "        c.execute(\"SELECT id, task, completed FROM todos ORDER BY created_at DESC\")",
              "        todos = c.fetchall()",
              "        conn.close()",
              "        ",
              "        result = \"待办事项列表:\\n\"",
              "        for todo in todos:",
              "            status = \"✅\" if todo[2] else \"⬜\"",
              "            result += f\"{status} #{todo[0]}: {todo[1]}\\n\"",
              "        return result",
              "    except Exception as e:",
              "        return f\"查询失败: {str(e)}\""
            ]
          },
          {
            title: "⚠️ 数据库安全注意事项！",
            description: "安全第一！千万别让Agent执行任意SQL！",
            steps: [
              "❌ 绝对不要：让Agent直接写SQL执行，太危险了！",
              "✅ 正确做法：预定义几个工具函数，Agent只能调用这些函数",
              "✅ 参数绑定：用?占位符，避免SQL注入",
              "✅ 权限最小化：数据库用户权限只给需要的，别给admin"
            ]
          }
        ],
        practice: {
          tasks: [
            "用SQLite实现一个简单的待办事项系统",
            "让Agent能添加、查询、完成待办"
          ],
          hint: "先设计表结构，再写工具函数，最后集成到Agent里！"
        },
        notes: "数据库工具：让Agent能记住数据，下次重启还在！"
      },
      {
        day: 6,
        title: "文件系统工具",
        enTitle: "File System Tools",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📁 让Agent能操作文件：你的智能文件助手！</span>",
          "Agent可以帮你整理文件、生成报告、批量重命名",
          "这一课学习如何让Agent安全地操作文件系统！"
        ],
        detail: [
          {
            title: "📋 常用文件操作功能！",
            description: "这些是最实用的！",
            steps: [
              "🔍 列出目录：看看某个文件夹里有什么",
              "📝 读取文件：查看文件内容",
              "✍️ 写入文件：创建新文件或修改文件",
              "🗑️ 删除文件：删除不需要的（要小心！）",
              "📋 搜索文件：按文件名或内容找文件"
            ]
          },
          {
            title: "💻 文件工具实现示例！",
            description: "记住要加安全限制！",
            steps: [
              "from langchain.tools import tool",
              "from pathlib import Path",
              "",
              "# 安全设置：只允许在这个目录下操作",
              "SAFE_DIR = Path(\"./agent_workspace\")",
              "SAFE_DIR.mkdir(exist_ok=True)",
              "",
              "def is_safe(file_path: str) -> bool:",
              "    \"\"\"检查路径是否在安全目录内\"\"\"",
              "    try:",
              "        target_path = (SAFE_DIR / file_path).resolve()",
              "        return SAFE_DIR in target_path.parents or target_path == SAFE_DIR",
              "    except:",
              "        return False",
              "",
              "@tool",
              "def list_files(dir_path: str = '.') -> str:",
              "    \"\"\"列出目录下的文件\"\"\"",
              "    if not is_safe(dir_path):",
              "        return \"抱歉，只能操作指定目录下的文件\"",
              "    try:",
              "        full_path = SAFE_DIR / dir_path",
              "        files = list(full_path.iterdir())",
              "        result = f\"目录 '{dir_path}' 内容:\\n\"",
              "        for f in files:",
              "            type_char = \"📁\" if f.is_dir() else \"📄\"",
              "            result += f\"  {type_char} {f.name}\\n\"",
              "        return result",
              "    except Exception as e:",
              "        return f\"操作失败: {str(e)}\"",
              "",
              "@tool",
              "def write_file(file_path: str, content: str) -> str:",
              "    \"\"\"写入文件内容\"\"\"",
              "    if not is_safe(file_path):",
              "        return \"抱歉，只能操作指定目录下的文件\"",
              "    try:",
              "        full_path = SAFE_DIR / file_path",
              "        full_path.parent.mkdir(parents=True, exist_ok=True)",
              "        full_path.write_text(content, encoding='utf-8')",
              "        return f\"成功写入文件: {file_path}\"",
              "    except Exception as e:",
              "        return f\"写入失败: {str(e)}\"",
              "",
              "@tool",
              "def read_file(file_path: str) -> str:",
              "    \"\"\"读取文件内容\"\"\"",
              "    if not is_safe(file_path):",
              "        return \"抱歉，只能操作指定目录下的文件\"",
              "    try:",
              "        full_path = SAFE_DIR / file_path",
              "        return full_path.read_text(encoding='utf-8')",
              "    except Exception as e:",
              "        return f\"读取失败: {str(e)}\""
            ]
          },
          {
            title: "🛡️ 文件操作安全重中之重！",
            description: "这些安全措施一定要有！",
            steps: [
              "🔒 沙箱机制：Agent只能操作指定目录，不能到处乱跑",
              "⏪ 操作确认：危险操作前让用户确认",
              "📝 操作日志：记录所有文件操作，可追溯",
              "🚫 黑名单：禁止删除重要文件、禁止写系统目录"
            ]
          }
        ],
        practice: {
          tasks: [
            "实现一套安全的文件操作工具",
            "让Agent能在安全目录下读、写、列文件"
          ],
          hint: "安全第一！宁可功能少一点，也不要出安全问题！"
        },
        notes: "文件工具：安全第一，功能第二！"
      },
      {
        day: 7,
        title: "工具组合项目",
        enTitle: "Tool Composition Project",
        type: "core",
        duration: "4小时",
        content: [
          "<span class='text-core font-bold'>🚀 工具大集合：做一个全能Agent！</span>",
          "把前面学的工具都整合起来，让Agent无所不能",
          "这是这个阶段的最终项目！"
        ],
        detail: [
          {
            title: "💡 项目建议：你的专属AI助手！",
            description: "一个能帮你处理各种事情的Agent！",
            steps: [
              "🔍 能上网查资料：搜索工具",
              "🧮 能做数学计算：计算工具",
              "📄 能读各种文档：文档工具",
              "💾 能存待办事项：数据库工具",
              "📁 能帮你写文件：文件工具"
            ]
          },
          {
            title: "🎯 怎么让Agent知道用哪个工具？",
            description: "工具多了，选择也是个问题！",
            steps: [
              "1️⃣ 在Prompt里详细描述每个工具的用途",
              "2️⃣ 让Agent先分析问题，再决定用什么工具",
              "3️⃣ 可以同时调用多个工具（并行）",
              "4️⃣ 工具返回结果后，再决定下一步用什么工具"
            ]
          },
          {
            title: "✨ 项目验收清单！",
            description: "你的项目完成了这些功能吗？",
            steps: [
              "✅ 所有工具都能正常工作",
              "✅ Agent能正确选择工具",
              "✅ 错误处理完善，不会崩溃",
              "✅ 有日志记录，方便调试",
              "✅ 有完整的README说明怎么用"
            ]
          }
        ],
        practice: {
          tasks: [
            "完成这个全能Agent项目",
            "给你的Agent起个名字，写个README"
          ],
          hint: "一个一个工具集成，集成一个测试一个，不要一下全加！"
        },
        notes: "工具整合完成！你的Agent现在身怀绝技了！"
      }
    ]
  },
  {
    id: 5,
    name: "LangGraph进阶",
    enName: "Advanced LangGraph",
    days: 7,
    color: "from-blue-500 to-cyan-400",
    description: "掌握复杂工作流编排，构建真正的智能体应用",
    enDescription: "Master complex workflow orchestration, build real agent applications",
    topics: [
      {
        day: 1,
        title: "LangGraph基础",
        enTitle: "LangGraph Basics",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🎯 LangGraph是什么？让Agent工作流可视化！</span>",
          "LangChain团队专为复杂Agent工作流设计的框架",
          "用节点和边来描述Agent的思考和行动过程！"
        ],
        detail: [
          {
            title: "🧩 核心概念：节点(Nodes)和边(Edges)",
            description: "像画流程图一样设计Agent！",
            steps: [
              "⚪ 节点(Node)：执行具体任务的地方，比如LLM调用、工具执行",
              "➡️ 边(Edge)：连接节点，决定下一步走哪条路",
              "📊 状态(State)：在节点之间传递的数据，记录当前进度",
              "🔄 循环(Cycle)：支持重试、反思等需要循环的场景"
            ]
          },
          {
            title: "💻 Hello LangGraph：第一个图！",
            description: "最简单的LangGraph例子，一看就懂！",
            steps: [
              "from langgraph.graph import StateGraph, START, END",
              "from typing import TypedDict",
              "",
              "class State(TypedDict):",
              "    message: str",
              "",
              "def node1(state: State):",
              "    return {'message': state['message'] + ' → 节点1处理'}",
              "",
              "def node2(state: State):",
              "    return {'message': state['message'] + ' → 节点2处理'}",
              "",
              "# 构建图",
              "graph = StateGraph(State)",
              "graph.add_node('node1', node1)",
              "graph.add_node('node2', node2)",
              "graph.add_edge(START, 'node1')",
              "graph.add_edge('node1', 'node2')",
              "graph.add_edge('node2', END)",
              "",
              "# 运行！",
              "app = graph.compile()",
              "result = app.invoke({\"message\": \"开始\"})",
              "print(result)  # 输出：开始 -> 节点1处理 -> 节点2处理"
            ]
          }
        ],
        resources: [
          {
            title: "LangGraph官方文档",
            url: "https://langchain-ai.github.io/langgraph/",
            description: "最权威的LangGraph学习资料"
          }
        ],
        practice: {
          tasks: [
            "运行上面的Hello LangGraph代码",
            "试着加一个新节点，连成3个节点的链"
          ],
          hint: "LangGraph的核心就是『状态流转』，每个节点都能读取和修改状态！"
        },
        notes: "LangGraph = 流程图 + 状态机 + Agent！"
      },
      {
        day: 2,
        title: "条件分支与循环",
        enTitle: "Conditional Branching & Looping",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔀 Agent不是单线程！让它会做选择！</span>",
          "条件分支：根据情况走不同的路",
          "循环：让Agent学会『重试』和『反思』！"
        ],
        detail: [
          {
            title: "🚦 条件边：让Agent会做选择题！",
            description: "根据状态决定下一步去哪！",
            steps: [
              "def router(state: State):",
              "    # 这就是条件路由函数",
              "    if '需要搜索' in state['message']:",
              "        return 'search_node'",
              "    elif '需要计算' in state['message']:",
              "        return 'calculate_node'",
              "    else:",
              "        return END",
              "",
              "# 注册条件边",
              "graph.add_conditional_edges(",
              "    'thinking_node',",
              "    router,",
              "    ['search_node', 'calculate_node', END]",
              ")"
            ]
          },
          {
            title: "🔄 循环：让Agent学会『再试一次』！",
            description: "就像你做数学题，做不对就再算一遍！",
            steps: [
              "def should_continue(state: State):",
              "    attempts = state.get('attempts', 0)",
              "    if attempts >= 3:",
              "        return END  # 试3次还不行就放弃",
              "    elif state.get('success'):",
              "        return END  # 成功了就结束",
              "    else:",
              "        return 'agent_node'  # 再试一次！",
              "",
              "# 这样就构成了循环"
            ]
          }
        ],
        practice: {
          tasks: [
            "实现一个带重试机制的Agent",
            "让它失败后自动重试2次"
          ],
          hint: "循环 + 计数器 = 简单有效的重试机制！"
        },
        notes: "有了条件和循环，Agent就能处理复杂场景了！"
      },
      {
        day: 3,
        title: "状态管理与记忆",
        enTitle: "State Management & Memory",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💾 状态是Agent的『大脑内存』！</span>",
          "StateGraph的状态可以包含任何数据",
          "Checkpointer让Agent重启后还记得之前的事！"
        ],
        detail: [
          {
            title: "📦 设计一个实用的State类型！",
            description: "根据你的需求设计状态结构！",
            steps: [
              "from typing import TypedDict, Annotated, Sequence",
              "from langchain_core.messages import BaseMessage",
              "import operator",
              "",
              "class AgentState(TypedDict):",
              "    messages: Annotated[Sequence[BaseMessage], operator.add]",
              "    current_task: str",
              "    task_results: dict",
              "    attempts: int",
              "    # 用operator.add表示消息列表是『追加』而不是『覆盖』"
            ]
          },
          {
            title: "💾 Checkpointer：让Agent有『长期记忆』！",
            description: "即使程序重启，对话历史还在！",
            steps: [
              "from langgraph.checkpoint.sqlite import SqliteSaver",
              "",
              "# 创建一个基于SQLite的Checkpointer",
              "checkpointer = SqliteSaver.from_conn_string(':memory:')",
              "",
              "# 编译时加上它",
              "app = graph.compile(checkpointer=checkpointer)",
              "",
              "# 调用时传入thread_id，同一个id会继续之前的对话",
              "config = {\"configurable\": {\"thread_id\": \"user-123\"}}",
              "result = app.invoke({\"messages\": [...]}, config=config)"
            ]
          }
        ],
        practice: {
          tasks: [
            "给你的LangGraph加上Checkpointer",
            "测试一下：打断对话，用同一个thread_id继续"
          ],
          hint: "Checkpointer就像游戏存档，随时可以读档继续！"
        },
        notes: "State是当前状态，Checkpoint是历史存档！"
      },
      {
        day: 4,
        title: "集成工具调用",
        enTitle: "Integrate Tool Calling",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🛠️ LangGraph + 工具 = 超级Agent！</span>",
          "LangGraph有专门的ToolNode帮你处理工具调用",
          "让Agent自动决定用什么工具！"
        ],
        detail: [
          {
            title: "💻 完整的工具调用工作流！",
            description: "这是最常用的LangGraph模式！",
            steps: [
              "from langgraph.prebuilt import ToolNode",
              "",
              "# 1. 定义工具",
              "tools = [search_tool, calculator_tool]",
              "",
              "# 2. 创建ToolNode",
              "tool_node = ToolNode(tools)",
              "",
              "# 3. LLM绑定工具",
              "llm_with_tools = llm.bind_tools(tools)",
              "",
              "# 4. Agent节点：调用LLM决定用不用工具",
              "def agent_node(state):",
              "    return {'messages': [llm_with_tools.invoke(state['messages'])]}",
              "",
              "# 5. 路由：判断LLM是否想调用工具",
              "def should_use_tools(state):",
              "    last_message = state['messages'][-1]",
              "    if last_message.tool_calls:",
              "        return 'tools'",
              "    return END",
              "",
              "# 6. 构建图",
              "graph.add_node('agent', agent_node)",
              "graph.add_node('tools', tool_node)",
              "graph.add_edge(START, 'agent')",
              "graph.add_conditional_edges('agent', should_use_tools)",
              "graph.add_edge('tools', 'agent')"
            ]
          }
        ],
        practice: {
          tasks: [
            "实现这个带工具的LangGraph",
            "测试Agent能否正确调用工具"
          ],
          hint: "这就是经典的『思考→工具→思考→...→结束』循环！"
        },
        notes: "ToolNode帮你处理所有工具调用细节，很省心！"
      },
      {
        day: 5,
        title: "人工介入与确认",
        enTitle: "Human-in-the-Loop",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>👤 关键操作让人来把把关！</span>",
          "Agent不是要完全代替人，而是和人协作",
          "LangGraph的interrupt_before/after让你可以暂停流程！"
        ],
        detail: [
          {
            title: "🛑 中断点：在关键步骤前让人确认！",
            description: "比如Agent要发邮件前，先给你看看内容！",
            steps: [
              "# 编译时设置中断点",
              "app = graph.compile(",
              "    checkpointer=checkpointer,",
              "    interrupt_before=['send_email_node']  # 在发邮件前暂停",
              ")",
              "",
              "# 第一次调用，会在send_email_node前停下",
              "result = app.invoke(..., config=config)",
              "",
              "# 人来查看、确认、甚至修改状态",
              "# 确认后继续",
              "result = app.invoke(None, config=config)  # 继续执行"
            ]
          },
          {
            title: "✏️ 人可以修改状态再继续！",
            description: "觉得Agent写得不好？你可以改！",
            steps: [
              "# 获取当前状态",
              "state = app.get_state(config)",
              "",
              "# 修改状态，比如把邮件内容改得更礼貌",
              "new_values = {",
              "    'email_content': '修改后的邮件内容...'",
              "}",
              "",
              "# 更新状态",
              "app.update_state(config, new_values)",
              "",
              "# 继续执行",
              "result = app.invoke(None, config=config)"
            ]
          }
        ],
        practice: {
          tasks: [
            "给你的Agent加一个人工确认步骤",
            "测试中断、修改、继续的完整流程"
          ],
          hint: "Human-in-the-loop让Agent更可靠、更安全！"
        },
        notes: "关键操作有人把把关，用着更放心！"
      },
      {
        day: 6,
        title: "子图与图组合",
        enTitle: "Subgraph & Graph Composition",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📦 大图拆小图，代码更清晰！</span>",
          "复杂的Graph可以拆成几个Subgraph",
          "就像函数可以调用其他函数一样！"
        ],
        detail: [
          {
            title: "🎯 子图：把相关节点打包在一起！",
            description: "比如『搜索+摘要』可以做成一个子图！",
            steps: [
              "# 1. 定义子图",
              "subgraph = StateGraph(SubState)",
              "subgraph.add_node('search', search_node)",
              "subgraph.add_node('summarize', summarize_node)",
              "subgraph.add_edge(START, 'search')",
              "subgraph.add_edge('search', 'summarize')",
              "subgraph.add_edge('summarize', END)",
              "",
              "# 2. 把子图编译成一个节点",
              "subgraph_node = subgraph.compile()",
              "",
              "# 3. 在主图里像普通节点一样用！",
              "main_graph.add_node('search_summarize', subgraph_node)"
            ]
          }
        ],
        practice: {
          tasks: [
            "把你之前的某个功能拆成子图",
            "在主图里调用这个子图"
          ],
          hint: "代码复用、逻辑清晰，子图是个好东西！"
        },
        notes: "子图让复杂的Graph也能保持整洁！"
      },
      {
        day: 7,
        title: "LangGraph综合项目",
        enTitle: "LangGraph Comprehensive Project",
        type: "core",
        duration: "4小时",
        content: [
          "<span class='text-core font-bold'>🚀 终极挑战：用LangGraph做个完整应用！</span>",
          "整合你学到的所有知识：节点、边、条件、循环、工具、Checkpoint、HITL",
          "做一个能帮你完成复杂任务的智能体！"
        ],
        detail: [
          {
            title: "💡 项目建议：智能研究助手！",
            description: "一个能帮你查资料、整理、写报告的Agent！",
            steps: [
              "1️⃣ 需求分析：理解用户想研究什么",
              "2️⃣ 搜索规划：决定搜什么关键词",
              "3️⃣ 并行搜索：同时搜索多个来源",
              "4️⃣ 内容筛选：挑出最相关的信息",
              "5️⃣ 报告撰写：生成研究报告",
              "6️⃣ 人工确认：让人看一眼再最终输出"
            ]
          },
          {
            title: "🎯 验收清单：你的项目够格吗？",
            description: "检查一下这些功能都有了没！",
            steps: [
              "✅ 用LangGraph构建，不是普通的Agent",
              "✅ 有条件分支，能根据情况做选择",
              "✅ 有Checkpoint，支持对话持久化",
              "✅ 集成了至少3个工具",
              "✅ 有人工介入确认的步骤",
              "✅ 代码结构清晰，有注释"
            ]
          }
        ],
        practice: {
          tasks: [
            "完成这个LangGraph综合项目",
            "写个README，告诉别人怎么用"
          ],
          hint: "先画流程图，再写代码！图画清楚了，代码就出来了！"
        },
        notes: "LangGraph掌握！你现在能构建复杂的Agent应用了！"
      }
    ]
  },
  {
    id: 6,
    name: "多Agent系统",
    enName: "Multi-Agent Systems",
    days: 7,
    color: "from-purple-500 to-pink-400",
    description: "让多个Agent协作完成任务，模拟团队工作",
    enDescription: "Let multiple agents collaborate, simulating teamwork",
    topics: [
      {
        day: 1,
        title: "多Agent基础概念",
        enTitle: "Multi-Agent Basic Concepts",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>👥 一个Agent不够？让一群Agent一起干！</span>",
          "就像公司里不同岗位的人协作",
          "每个Agent有自己的专长，配合起来效率更高！"
        ],
        detail: [
          {
            title: "🤔 为什么需要多Agent？",
            description: "单Agent vs 多Agent，什么时候用哪个？",
            steps: [
              "📋 任务太复杂：一个Agent忙不过来，拆给多个",
              "🎭 需要不同视角：不同角色看问题不一样",
              "⚡ 并行执行：多个Agent同时干活，更快",
              "🔄 相互校验：Agent之间可以互相检查、纠错"
            ]
          },
          {
            title: "👥 常见的多Agent协作模式！",
            description: "这几种模式最常用！",
            steps: [
              "🏢 层级模式：老板→经理→员工，层层分配",
              "💬 圆桌模式：几个Agent平等讨论",
              "🔗 流水线模式：Agent1做完传给Agent2，像工厂流水线",
              "🎯 主从模式：一个主Agent指挥多个从Agent"
            ]
          }
        ],
        resources: [
          {
            title: "AutoGen官方文档",
            url: "https://microsoft.github.io/autogen/",
            description: "微软的多Agent框架"
          }
        ],
        practice: {
          tasks: [
            "想一个你觉得适合用多Agent的场景",
            "设计一下有几个Agent，分别干什么"
          ],
          hint: "就像组织一个小团队，想想需要什么角色！"
        },
        notes: "多Agent = 团队协作，1+1>2！"
      },
      {
        day: 2,
        title: "CrewAI入门",
        enTitle: "CrewAI Introduction",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🚀 CrewAI：给Agent分配角色，像拍电影！</span>",
          "CrewAI让你定义Agent的『角色』、『目标』、『背景故事』",
          "就像给演员发剧本，然后让他们演戏！"
        ],
        detail: [
          {
            title: "🎭 CrewAI三要素：Agent、Task、Crew",
            description: "记住这三个概念，CrewAI就掌握了！",
            steps: [
              "👤 Agent：定义角色，比如『你是资深Python开发工程师...』",
              "📋 Task：分配任务，比如『写一个爬虫脚本...』",
              "👥 Crew：把Agent和Task组合起来，开始执行！"
            ]
          },
          {
            title: "💻 Hello CrewAI：你的第一个团队！",
            description: "让两个Agent协作写一篇文章！",
            steps: [
              "from crewai import Agent, Task, Crew",
              "",
              "# 1. 创建Agent",
              "researcher = Agent(",
              "    role='资深研究员',",
              "    goal='研究AI Agent的最新发展',",
              "    backstory='你在AI行业工作了10年，对技术趋势非常敏感'",
              ")",
              "",
              "writer = Agent(",
              "    role='专业写手',",
              "    goal='把研究结果写成一篇易懂的文章',",
              "    backstory='你是知名科技博主，擅长把复杂技术讲得简单有趣'",
              ")",
              "",
              "# 2. 创建Task",
              "task1 = Task(",
              "    description='研究AI Agent的最新应用场景',",
              "    agent=researcher",
              ")",
              "",
              "task2 = Task(",
              "    description='根据研究结果写一篇博客文章',",
              "    agent=writer",
              ")",
              "",
              "# 3. 创建Crew并运行！",
              "crew = Crew(agents=[researcher, writer], tasks=[task1, task2])",
              "result = crew.kickoff()",
              "print(result)"
            ]
          }
        ],
        practice: {
          tasks: [
            "运行上面的代码",
            "再加点创意，加第三个Agent角色"
          ],
          hint: "给Agent的角色设定越具体，表现越好！"
        },
        notes: "CrewAI：给Agent一个『人设』，它会更入戏！"
      },
      {
        day: 3,
        title: "Agent之间的沟通",
        enTitle: "Inter-Agent Communication",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>💬 Agent之间怎么聊天？</span>",
          "Agent不是各干各的，需要沟通协作",
          "良好的沟通机制是多Agent成功的关键！"
        ],
        detail: [
          {
            title: "📨 共享上下文：让大家都知道发生了什么！",
            description: "这是最基础的沟通方式！",
            steps: [
              "📋 共享Message列表：所有Agent都能看到完整对话",
              "📦 共享State：像LangGraph那样，状态在Agent间传递",
              "📝 共享Memory：大家共用一个记忆库"
            ]
          },
          {
            title: "🎯 结构化沟通：别说废话，说重点！",
            description: "让Agent用特定格式沟通，效率更高！",
            steps: [
              "📝 报告格式：『任务完成情况：...，遇到问题：...，下一步建议：...』",
              "✅ 确认机制：『我理解你的需求是...，对吗？』",
              "❓ 请求帮助：『我卡壳了，需要XXX方面的帮助！』"
            ]
          }
        ],
        practice: {
          tasks: [
            "设计一个Agent之间的沟通协议",
            "让Agent按这个格式沟通"
          ],
          hint: "结构化沟通让交流更高效，减少误解！"
        },
        notes: "Agent沟通也是一门学问！"
      },
      {
        day: 4,
        title: "任务分配与协调",
        enTitle: "Task Assignment & Coordination",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📋 谁来干什么？让对的人做对的事！</span>",
          "任务分配是门艺术：根据能力分配，避免重复工作",
          "就像项目经理一样，你需要协调团队！"
        ],
        detail: [
          {
            title: "🎯 任务分配策略：怎么派活？",
            description: "几种常用的方法！",
            steps: [
              "📝 预定义：提前定好谁干什么，简单直接",
              "🏆 竞标：Agent『投标』，谁最适合谁来干",
              "👑 主Agent分配：一个老大来决定谁干什么",
              "🔄 流水线：一个做完传给下一个"
            ]
          },
          {
            title: "⚠️ 常见问题及解法！",
            description: "多Agent协作时容易遇到这些坑！",
            steps: [
              "🚫 重复工作：大家做了一样的事 → 共享进度，及时同步",
              "🚫 互相等待：A等B，B等A → 设定超时机制，有备选方案",
              "🚫 意见分歧：Agent们吵起来了 → 引入投票或让人工决定"
            ]
          }
        ],
        practice: {
          tasks: [
            "设计一个任务分配机制",
            "想想如何避免重复工作"
          ],
          hint: "协调得好，多Agent如虎添翼；协调不好，反而更乱！"
        },
        notes: "好的协调让1+1>2，坏的协调让1+1<1！"
      },
      {
        day: 5,
        title: "AutoGen深入",
        enTitle: "Deep Dive into AutoGen",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🤖 AutoGen：微软的多Agent框架！</span>",
          "AutoGen的Agent会自动对话、写代码、执行代码",
          "适合复杂的编程任务！"
        ],
        detail: [
          {
            title: "💻 AutoGen的代码执行能力！",
            description: "这是AutoGen的杀手锏！",
            steps: [
              "from autogen import AssistantAgent, UserProxyAgent",
              "",
              "# 1. 创建AssistantAgent：会写代码的助手",
              "assistant = AssistantAgent(",
              "    name='assistant',",
              "    llm_config={'config_list': config_list}",
              ")",
              "",
              "# 2. 创建UserProxyAgent：帮你执行代码的代理",
              "user_proxy = UserProxyAgent(",
              "    name='user_proxy',",
              "    code_execution_config={'work_dir': 'coding'}",
              ")",
              "",
              "# 3. 开始！让他们对话解决问题",
              "user_proxy.initiate_chat(",
              "    assistant,",
              "    message='画一张y=x²的图，保存为plot.png'",
              ")"
            ]
          }
        ],
        practice: {
          tasks: [
            "用AutoGen实现一个简单的编程助手",
            "让它帮你写一段代码并执行"
          ],
          hint: "AutoGen很适合需要写代码的场景！"
        },
        notes: "AutoGen = 会对话 + 会写代码 + 会执行代码！"
      },
      {
        day: 6,
        title: "多Agent模式设计",
        enTitle: "Multi-Agent Pattern Design",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🎯 这几种多Agent模式，收好不谢！</span>",
          "这些是从实践中总结出来的经典模式",
          "根据你的场景套用就行！"
        ],
        detail: [
          {
            title: "🎭 模式一：产品团队！",
            description: "就像真实的产品团队一样协作！",
            steps: [
              "👨‍💼 产品经理：理解需求，写PRD",
              "👨‍💻 开发工程师：根据PRD写代码",
              "🧪 测试工程师：测试代码，提bug",
              "📝 文档工程师：写使用文档"
            ]
          },
          {
            title: "🏢 模式二：评审委员会！",
            description: "多个专家一起审核，更严谨！",
            steps: [
              "🔍 安全专家：检查安全问题",
              "🎨 设计专家：看设计好不好",
              "💼 业务专家：看是否符合业务需求",
              "⚖️ 最终决策者：综合大家意见拍板"
            ]
          },
          {
            title: "🔄 模式三：自我提升循环！",
            description: "让Agent自己写、自己审、自己改！",
            steps: [
              "✍️ 创作者：生成第一版内容",
              "🔍 评审者：挑毛病，提修改意见",
              "✏️ 修改者：根据意见修改",
              "🔄 循环：直到满意为止！"
            ]
          }
        ],
        practice: {
          tasks: [
            "选一个你感兴趣的模式",
            "用CrewAI或AutoGen实现出来"
          ],
          hint: "这些模式都是经过验证的，直接套用就行！"
        },
        notes: "模式是前人经验的总结，站在巨人肩膀上！"
      },
      {
        day: 7,
        title: "多Agent综合项目",
        enTitle: "Multi-Agent Comprehensive Project",
        type: "core",
        duration: "4小时",
        content: [
          "<span class='text-core font-bold'>🚀 多Agent大项目：建一个虚拟公司！</span>",
          "让多个Agent扮演不同角色，协作完成复杂任务",
          "这是你展示多Agent能力的好机会！"
        ],
        detail: [
          {
            title: "💡 项目建议：AI内容工作室！",
            description: "一个能帮你生成各种内容的团队！",
            steps: [
              "🎨 创意策划：想选题、想角度",
              "📚 资料研究员：查资料、找素材",
              "✍️ 主笔：写初稿",
              "🔍 审稿编辑：修改润色、检查错误",
              "🖼️ 视觉设计：配图、做海报",
              "📱 社交媒体运营：改成适合不同平台的版本"
            ]
          },
          {
            title: "🎯 验收清单！",
            description: "你的项目应该有这些！",
            steps: [
              "✅ 至少3个Agent，角色各异",
              "✅ Agent之间有明确的协作流程",
              "✅ 有沟通机制，Agent之间会互相反馈",
              "✅ 最终能产出一个完整的成果",
              "✅ 代码有注释，结构清晰"
            ]
          }
        ],
        practice: {
          tasks: [
            "完成这个多Agent项目",
            "录个demo视频，展示它怎么工作"
          ],
          hint: "先设计每个Agent的角色和任务，再想他们怎么配合！"
        },
        notes: "多Agent掌握！你现在能组织AI团队了！"
      }
    ]
  },
  {
    id: 7,
    name: "RAG与知识库",
    enName: "RAG & Knowledge Base",
    days: 7,
    color: "from-green-500 to-emerald-400",
    description: "让Agent拥有自己的知识库，基于文档回答问题",
    enDescription: "Give agents their own knowledge base, answer from documents",
    topics: [
      {
        day: 1,
        title: "RAG基础概念",
        enTitle: "RAG Basic Concepts",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📚 RAG是什么？让Agent『读书』！</span>",
          "Retrieval-Augmented Generation = 检索 + 生成",
          "就像考试开卷，先找资料，再答题！"
        ],
        detail: [
          {
            title: "🤔 为什么需要RAG？",
            description: "LLM的局限性和RAG的作用！",
            steps: [
              "⏰ 知识过时：LLM的训练数据是截止到某个时间点的",
              "🏢 私有知识：你公司的内部文档LLM没见过",
              "💰 减少幻觉：LLM有时会瞎编，用RAG给它参考资料",
              "📖 可溯源：答案来自哪篇文档，可以查"
            ]
          },
          {
            title: "🔄 RAG工作流程：一图看懂！",
            description: "存储阶段 + 查询阶段，两步走！",
            steps: [
              "【存储阶段】📄 文档 → ✂️ 切分 → 🔢 向量化 → 💾 存入向量数据库",
              "【查询阶段】❓ 用户问题 → 🔢 向量化 → 🔍 搜索相似内容 → 📝 拼成Prompt → 🤖 LLM生成答案",
              "关键点：把用户问题和文档都转成『向量』，比『意思』是不是一样！"
            ]
          }
        ],
        resources: [
          {
            title: "LlamaIndex文档",
            url: "https://docs.llamaindex.ai/",
            description: "最流行的RAG框架之一"
          }
        ],
        practice: {
          tasks: [
            "画一张RAG流程图，自己能讲明白",
            "举一个你觉得适合用RAG的场景"
          ],
          hint: "RAG = 开卷考试，先翻书，再答题！"
        },
        notes: "RAG让Agent能用上LLM没学过的知识！"
      },
      {
        day: 2,
        title: "文档加载与切分",
        enTitle: "Document Loading & Splitting",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>✂️ 先把书拆成一页一页的！</span>",
          "文档太长，不能直接塞给LLM",
          "切分成合适的小块，才能精准检索！"
        ],
        detail: [
          {
            title: "📂 各种格式的文档都能读！",
            description: "LangChain有各种Loader！",
            steps: [
              "📄 PDF：PyPDFLoader、PyMuPDFLoader",
              "📝 TXT：TextLoader、DirectoryLoader",
              "📊 CSV/Excel：CSVLoader",
              "🌐 网页：WebBaseLoader、SeleniumURLLoader",
              "📎 Word：Docx2txtLoader",
              "提示：不同格式用不同的Loader！"
            ]
          },
          {
            title: "✂️ 怎么切分是个技术活！",
            description: "切太大太小都不好，要合适！",
            steps: [
              "📏 按字符切分：CharacterTextSplitter，简单但可能切断句子",
              "📝 按Token切分：TokenTextSplitter，考虑LLM的上下文限制",
              "📄 按Markdown切分：MarkdownHeaderTextSplitter，保留标题结构",
              "📄 按代码切分：RecursiveCharacterTextSplitter，对代码友好",
              "💡 建议： chunk_size=512~1024，chunk_overlap=50~100，留点重叠避免内容被切断！"
            ]
          }
        ],
        practice: {
          tasks: [
            "找几篇你感兴趣的文档",
            "用LangChain加载并切分它们"
          ],
          hint: "切分要注意：不要切断完整的语义单元！"
        },
        notes: "文档处理是RAG的第一步，基础要打牢！"
      },
      {
        day: 3,
        title: "向量数据库",
        enTitle: "Vector Databases",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔢 向量数据库：存『意思』，不存『文字』！</span>",
          "普通数据库存的是『北京是中国首都』",
          "向量数据库存的是这句话的『意思向量』，搜的时候比意思！"
        ],
        detail: [
          {
            title: "🎯 常用向量数据库选型！",
            description: "初学者推荐这些！",
            steps: [
              "🟢 Chroma：轻量级，Python原生，本地运行，学习首选！",
              "🟠 Milvus：功能全，企业级，稍微复杂点",
              "🔴 Pinecone：托管服务，不用自己搭，生产环境常用",
              "🔵 Weaviate：云原生，生态好",
              "💡 建议：先从Chroma开始入门！"
            ]
          },
          {
            title: "💻 Chroma十分钟上手！",
            description: "真的很简单！",
            steps: [
              "import chromadb",
              "from langchain.vectorstores import Chroma",
              "from langchain.embeddings import OpenAIEmbeddings",
              "",
              "# 1. 初始化",
              "persist_directory = './chroma_db'",
              "embedding = OpenAIEmbeddings()",
              "",
              "# 2. 存文档",
              "vectordb = Chroma.from_documents(",
              "    documents=split_docs,",
              "    embedding=embedding,",
              "    persist_directory=persist_directory",
              ")",
              "",
              "# 3. 检索！",
              "question = '什么是RAG？'",
              "docs = vectordb.similarity_search(question, k=3)  # 找最相关的3条"
            ]
          }
        ],
        practice: {
          tasks: [
            "用Chroma把你之前切分的文档存进去",
            "试几个查询，看看检索效果"
          ],
          hint: "Embedding模型的选择也很重要！"
        },
        notes: "向量数据库是RAG的核心组件！"
      },
      {
        day: 4,
        title: "检索策略优化",
        enTitle: "Retrieval Strategy Optimization",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🎯 怎么搜得更准？这里有技巧！</span>",
          "RAG效果好不好，检索是关键",
          "搜不到相关内容，后面生成再好也白搭！"
        ],
        detail: [
          {
            title: "🔍 检索方法不只有一种！",
            description: "多试几种，找到最好的！",
            steps: [
              "📐 向量相似度检索：最常用，比『意思』",
              "🔤 关键词检索：BM25，比『字』，适合找特定术语",
              "🔀 混合检索：向量+关键词，双管齐下！",
              "🎯 重排序(Re-rank)：先粗筛，再用小模型精排"
            ]
          },
          {
            title: "✨ 提升检索效果的技巧！",
            description: "这些小技巧能让效果大幅提升！",
            steps: [
              "1️⃣ 查询改写：让LLM把用户问题改得更适合检索",
              "2️⃣ 多查询：生成几个不同的查询，一起搜",
              "3️⃣ 父文档检索：搜小块，返回大块（完整上下文）",
              "4️⃣ 元数据过滤：按时间、类别过滤，缩小范围"
            ]
          }
        ],
        practice: {
          tasks: [
            "试试不同的检索方法",
            "用查询改写，看看效果会不会更好"
          ],
          hint: "检索是RAG的瓶颈，多花时间优化这里！"
        },
        notes: "检索质量决定了RAG的上限！"
      },
      {
        day: 5,
        title: "提示工程与上下文构建",
        enTitle: "Prompt Engineering & Context Building",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>📝 把检索到的内容好好用上！</span>",
          "光搜到还不够，要拼成好的Prompt给LLM",
          "告诉LLM怎么用这些资料！"
        ],
        detail: [
          {
            title: "🎯 RAG提示词模板！",
            description: "这个模板很好用，直接套用！",
            steps: [
              "system_prompt = \"\"\"你是一个乐于助人的AI助手。",
              "请基于以下参考资料回答用户的问题。",
              "如果参考资料里没有答案，请说『我在资料里没找到相关内容』，不要编造。",
              "",
              "【参考资料】",
              "{context}",
              "",
              "请用简洁明了的语言回答。\"\"\"",
              "",
              "# 把检索到的docs拼成context字符串"
            ]
          },
          {
            title: "⚠️ 常见的坑要避开！",
            description: "这些错误很常见！",
            steps: [
              "❌ 直接把一堆文档扔给LLM，不做整理",
              "❌ 不告诉LLM『不知道就说不知道』",
              "❌ 上下文太长，超过LLM窗口",
              "✅ 正确做法：相关文档排序好，用清晰的格式，加上明确的指令"
            ]
          }
        ],
        practice: {
          tasks: [
            "设计一个你自己的RAG提示词",
            "对比一下不同提示词的效果"
          ],
          hint: "好的提示词能让LLM更好地利用检索到的资料！"
        },
        notes: "提示词是连接检索和生成的桥梁！"
      },
      {
        day: 6,
        title: "高级RAG技术",
        enTitle: "Advanced RAG Techniques",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🚀 RAG也能玩出花！高级技巧！</span>",
          "基础RAG不够用？试试这些进阶方法",
          "让你的RAG更智能、更准确！"
        ],
        detail: [
          {
            title: "🔄 RAG-Fusion：查询融合！",
            description: "一个问题生成多个查询，检索结果合并去重！",
            steps: [
              "1️⃣ 用户问：'如何学习AI Agent？'",
              "2️⃣ LLM生成多个查询：",
              "   - AI Agent入门教程",
              "   - Agent学习路线图",
              "   - 从零开始学Agent",
              "3️⃣ 分别检索，合并结果，去重，再rerank"
            ]
          },
          {
            title: "📊 GraphRAG：用知识图谱增强！",
            description: "微软的新方法，适合结构化知识！",
            steps: [
              "1️⃣ 从文档中提取实体和关系",
              "2️⃣ 构建知识图谱",
              "3️⃣ 查询时同时检索相关文档和图谱信息",
              "4️⃣ 结合起来生成答案"
            ]
          },
          {
            title: "🔀 Self-RAG：让LLM自己决定要不要检索！",
            description: "不是所有问题都需要搜，让LLM自己判断！",
            steps: [
              "1️⃣ 先让LLM判断：这个问题需要检索吗？",
              "2️⃣ 需要 → 去搜，用搜来的内容回答",
              "3️⃣ 不需要 → 直接用LLM自己的知识回答"
            ]
          }
        ],
        practice: {
          tasks: [
            "选一个高级RAG技术了解一下",
            "说说它的适用场景是什么"
          ],
          hint: "先把基础RAG做好，再玩高级的！"
        },
        notes: "RAG技术发展很快，保持学习！"
      },
      {
        day: 7,
        title: "RAG综合项目",
        enTitle: "RAG Comprehensive Project",
        type: "core",
        duration: "4小时",
        content: [
          "<span class='text-core font-bold'>🚀 RAG大项目：建一个你的专属知识库！</span>",
          "把你的笔记、文档、书籍都存进去",
          "问它问题，它能从你的资料里找答案！"
        ],
        detail: [
          {
            title: "💡 项目建议：个人知识库问答！",
            description: "一个能回答你各种问题的智能知识库！",
            steps: [
              "📂 收集你的资料：笔记、文章、读书笔记...",
              "✂️ 处理文档：加载、切分、向量化",
              "💾 存入向量数据库",
              "🔍 实现检索逻辑",
              "🤖 整合成一个问答界面",
              "✨ 可选：加个网页界面，方便用！"
            ]
          },
          {
            title: "🎯 验收清单！",
            description: "你的RAG系统够格吗？",
            steps: [
              "✅ 能加载并处理多种格式的文档",
              "✅ 有向量数据库，能存储和检索",
              "✅ 检索质量不错，能找到相关内容",
              "✅ LLM能基于检索内容回答问题",
              "✅ 有基本的UI，方便使用"
            ]
          }
        ],
        practice: {
          tasks: [
            "完成这个RAG知识库项目",
            "把你真正用得上的资料放进去"
          ],
          hint: "这是一个你真的能用得上的项目，认真做！"
        },
        notes: "RAG掌握！你现在能让Agent『读』你的资料了！"
      }
    ]
  },
  {
    id: 8,
    name: "生产部署",
    enName: "Production Deployment",
    days: 7,
    color: "from-orange-500 to-amber-400",
    description: "把Agent从demo变成真正能用的产品",
    enDescription: "Turn agents from demos into real products",
    topics: [
      {
        day: 1,
        title: "部署基础概念",
        enTitle: "Deployment Basics",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🚀 从『跑通』到『上线』！</span>",
          "本地能跑只是第一步，要让人能用才是产品",
          "这一阶段学习怎么把Agent变成服务！"
        ],
        detail: [
          {
            title: "🏗️ 典型的Agent服务架构！",
            description: "一个上线的Agent系统长什么样？",
            steps: [
              "🌐 前端：用户界面，网页/App/小程序",
              "🔌 API后端：提供接口，处理请求",
              "🤖 Agent服务：真正跑Agent逻辑的地方",
              "💾 数据库：存用户数据、对话历史",
              "📊 监控：看系统运行状态"
            ]
          },
          {
            title: "🎯 部署前要考虑的问题！",
            description: "这些问题没弄好，上线会踩坑！",
            steps: [
              "👥 多少人用？并发量多少？",
              "⏱️ 响应速度要多快？",
              "💰 预算多少？LLM API可不便宜！",
              "🔒 安全怎么保障？数据会不会泄露？",
              "📈 用户量涨了怎么扩容？"
            ]
          }
        ],
        practice: {
          tasks: [
            "想想你的Agent要怎么部署",
            "列一个需要解决的问题清单"
          ],
          hint: "部署是个系统工程，提前规划好！"
        },
        notes: "部署让Agent从demo变成真正的产品！"
      },
      {
        day: 2,
        title: "API服务开发",
        enTitle: "API Service Development",
        type: "core",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔌 把Agent变成API！</span>",
          "用FastAPI或Flask写个后端",
          "前端通过HTTP请求调用Agent！"
        ],
        detail: [
          {
            title: "💻 FastAPI：现代、快速、好用！",
            description: "Python开发者首选！",
            steps: [
              "from fastapi import FastAPI",
              "from pydantic import BaseModel",
              "",
              "app = FastAPI()",
              "",
              "class QueryRequest(BaseModel):",
              "    question: str",
              "    user_id: str",
              "",
              "@app.post('/ask')",
              "async def ask_agent(request: QueryRequest):",
              "    # 调用你的Agent",
              "    answer = your_agent.invoke(request.question)",
              "    return {'answer': answer}",
              "",
              "# 运行：uvicorn main:app --reload"
            ]
          },
          {
            title: "✨ API设计的最佳实践！",
            description: "好的API用起来舒服！",
            steps: [
              "✅ RESTful风格：GET/POST/PUT/DELETE用对",
              "✅ 合理的状态码：200成功，400参数错，500服务器错",
              "✅ 清晰的错误信息：别只返回『出错了』，告诉用户为什么错",
              "✅ 接口文档：自动生成，别人知道怎么用"
            ]
          }
        ],
        practice: {
          tasks: [
            "用FastAPI把你的Agent封装成API",
            "用Postman或curl测试一下"
          ],
          hint: "FastAPI自带Swagger文档，访问 /docs 就能看到！"
        },
        notes: "API是Agent的接口，设计好很重要！"
      },
      {
        day: 3,
        title: "Web前端开发",
        enTitle: "Web Frontend Development",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🎨 给Agent做个漂亮的界面！</span>",
          "不能只有API，还得有UI让用户用",
          "用你喜欢的前端框架做个聊天界面！"
        ],
        detail: [
          {
            title: "💻 一个简单的聊天界面！",
            description: "用HTML+CSS+JavaScript就能做！",
            steps: [
              "<!-- 聊天消息区域 -->",
              "<div id='chat-container'></div>",
              "",
              "<!-- 输入框 -->",
              "<div class='input-area'>",
              "    <input type='text' id='user-input' placeholder='输入你的问题...'>",
              "    <button onclick='sendMessage()'>发送</button>",
              "</div>",
              "",
              "<script>",
              "async function sendMessage() {",
              "    const question = document.getElementById('user-input').value;",
              "    const response = await fetch('/ask', {",
              "        method: 'POST',",
              "        body: JSON.stringify({question})",
              "    });",
              "    // 显示返回的答案",
              "}",
              "</script>"
            ]
          },
          {
            title: "✨ 让聊天体验更好！",
            description: "这些小细节让用户体验大幅提升！",
            steps: [
              "⌨️ 回车发送，不用点按钮",
              "⏳ 打字机效果：LLM返回内容逐字显示",
              "🔄 加载状态：请求中显示『正在思考...』",
              "📜 历史记录：刷新页面还能看到之前的对话",
              "📱 手机适配：手机上也能用得舒服"
            ]
          }
        ],
        practice: {
          tasks: [
            "给你的Agent做一个Web界面",
            "加上打字机效果和历史记录"
          ],
          hint: "好的UI能让你的Agent显得更专业！"
        },
        notes: "界面是产品的脸面，要重视！"
      },
      {
        day: 4,
        title: "云平台部署",
        enTitle: "Cloud Platform Deployment",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>☁️ 上线！把你的Agent放到云端！</span>",
          "本地跑的别人用不了，得部署到云服务器",
          "推荐几个简单又好用的平台！"
        ],
        detail: [
          {
            title: "🚀 快速部署首选：Vercel / Railway！",
            description: "对个人开发者最友好！",
            steps: [
              "📦 准备好你的代码，上传GitHub",
              "🔗 用Vercel/Railway导入这个仓库",
              "⚙️ 配置环境变量（API Key等）",
              "🚀 点击部署，几分钟就好了！",
              "💡 优点：免费额度够个人用，自动HTTPS，自动更新"
            ]
          },
          {
            title: "📦 Docker：一次打包，处处运行！",
            description: "专业部署的标配！",
            steps: [
              "# Dockerfile示例",
              "FROM python:3.11",
              "WORKDIR /app",
              "COPY requirements.txt .",
              "RUN pip install -r requirements.txt",
              "COPY . .",
              "CMD ['uvicorn', 'main:app', '--host', '0.0.0.0', '--port', '8000']",
              "",
              "# 构建并运行",
              "# docker build -t my-agent .",
              "# docker run -p 8000:8000 my-agent"
            ]
          }
        ],
        practice: {
          tasks: [
            "把你的Agent部署到一个云平台",
            "分享链接给朋友试试"
          ],
          hint: "先从简单的平台开始，Vercel/Railway对新手很友好！"
        },
        notes: "部署到云端，你的Agent就能被全世界访问了！"
      },
      {
        day: 5,
        title: "监控与日志",
        enTitle: "Monitoring & Logging",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔍 Agent运行得怎么样？要能看到！</span>",
          "上线不是结束，只是开始",
          "你需要知道它什么时候出错、为什么出错！"
        ],
        detail: [
          {
            title: "📝 日志：记录发生了什么！",
            description: "用好Python的logging模块！",
            steps: [
              "import logging",
              "",
              "logging.basicConfig(",
              "    level=logging.INFO,",
              "    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'",
              ")",
              "",
              "logger = logging.getLogger(__name__)",
              "",
              "logger.info('用户发起请求')",
              "logger.error('API调用失败', exc_info=True)"
            ]
          },
          {
            title: "📊 监控：系统状态一目了然！",
            description: "这些指标要关注！",
            steps: [
              "⏱️ 响应时间：Agent回答要多久",
              "📈 请求量：一天有多少人用",
              "❌ 错误率：失败的请求占多少",
              "💰 成本：今天API花了多少钱",
              "💡 推荐工具：Prometheus + Grafana，或者直接用云平台自带的监控"
            ]
          }
        ],
        practice: {
          tasks: [
            "给你的Agent加上日志",
            "记录每个请求的输入、输出、耗时"
          ],
          hint: "没有日志和监控，上线了就是『盲飞』！"
        },
        notes: "监控和日志让你对系统状态心里有数！"
      },
      {
        day: 6,
        title: "安全与成本优化",
        enTitle: "Security & Cost Optimization",
        type: "practice",
        duration: "2小时",
        content: [
          "<span class='text-core font-bold'>🔒 安全第一！省钱第二！</span>",
          "上线后安全问题很重要，别被攻击了",
          "LLM API不便宜，能省则省！"
        ],
        detail: [
          {
            title: "🛡️ 安全要注意这些！",
            description: "这些坑别踩！",
            steps: [
              "🔑 API Key别提交到GitHub！用环境变量",
              "🚫 防范Prompt注入：别让用户控制你的系统提示词",
              "👤 用户认证：谁都能调用？还是要登录？",
              "⏱️ 限流：防止有人疯狂调用刷爆你的额度",
              "🚫 过滤敏感内容：防止生成不好的东西"
            ]
          },
          {
            title: "💰 怎么省钱？这些技巧！",
            description: "LLM API花钱如流水，这些方法能省！",
            steps: [
              "1️⃣ 选合适的模型：GPT-4很强但贵，有些场景GPT-3.5就够",
              "2️⃣ 缓存：同样的问题别让LLM答两次",
              "3️⃣ 精简Prompt：没用的话别加，省Token",
              "4️⃣ 设置max_tokens：别让它说太多没用的",
              "5️⃣ 流式输出：用户中途打断就可以停止"
            ]
          }
        ],
        practice: {
          tasks: [
            "检查你的代码有没有安全隐患",
            "想几个能省钱的优化点"
          ],
          hint: "安全无小事，成本要重视！"
        },
        notes: "安全和成本是生产环境必须考虑的！"
      },
      {
        day: 7,
        title: "毕业项目：你的Agent正式上线！",
        enTitle: "Graduation Project: Launch Your Agent!",
        type: "core",
        duration: "4小时",
        content: [
          "<span class='text-core font-bold'>🎓 恭喜！到了最后一步！</span>",
          "整合你学到的所有知识，做一个完整的Agent产品",
          "上线让别人用，收集反馈，持续迭代！"
        ],
        detail: [
          {
            title: "🚀 你的毕业项目应该有这些！",
            description: "一个真正可用的Agent产品！",
            steps: [
              "🤖 核心功能：你的Agent能帮用户做什么？（要具体！）",
              "🌐 后端API：用FastAPI或你喜欢的框架",
              "🎨 前端界面：网页、小程序、App都可以",
              "☁️ 上线部署：让别人能访问",
              "📊 监控日志：知道运行得怎么样",
              "🔒 基本的安全措施"
            ]
          },
          {
            title: "🎯 毕业验收清单！",
            description: "检查一下这些都做到了吗？",
            steps: [
              "✅ 有明确的使用场景，能解决实际问题",
              "✅ 代码整洁，有基本的文档",
              "✅ 已上线，能正常访问使用",
              "✅ 有人真的在用（至少你的朋友试过）",
              "✅ 你能说出：下一步想优化什么"
            ]
          }
        ],
        practice: {
          tasks: [
            "完成你的毕业项目，正式上线！",
            "分享给朋友们，收集反馈",
            "🎉 恭喜你完成了从0到1的Agent学习之旅！"
          ],
          hint: "这不是结束，而是你Agent开发之路的开始！继续学习，不断迭代！"
        },
        notes: "毕业啦！你现在是一名合格的AI Agent开发者了！🚀"
      }
    ]
  }
]
