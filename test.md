# [AI ToolMap ✨](https://kc-li.com/mytools) <br>[by kc, 2025 Apr_28]<br>[weekly update]
## Agents
### Agents Control Platform ⭐ / MCP Clients <!-- markmap: fold -->
#### Agents
- AutoGen 
- AutoGPT ⭐
- [CrewAI](https://github.com/crewAIInc/crewAI)
- Google ADK 
- [AutoAgent](https://github.com/HKUDS/AutoAgent)
- Agno
- LangManus <!-- markmap: fold -->
  - pre-built tools
- Genspark SuperAgent(3rd)
#### MCP 
- MCP Market(all free) <!-- markmap: fold -->
  - <https://github.com/modelcontextprotocol/servers>
  - <https://mcp.so/>
  - <https://glama.ai/mcp/servers>
  - <https://github.com/punkpeye/awesome-mcp-servers>
- MCP Clients <!-- markmap: fold -->
  - open webui ⭐
  - [5fire](https://github.com/nanbingxyz/5ire) Desktop
  - [chatmcp](https://github.com/daodao97/chatmcp?tab=readme-ov-file)
  - [cherrystudio](https://github.com/CherryHQ/cherry-studio?tab=readme-ov-file)
  - SillyTavern
    - Provide advanced AI conversation tuning
  - Cline ⭐ /RooCode
    - Quick MCP invocation embedded in the IDE
  - Trae ⭐ /Cursor
    - AI IDE
- MCP developing <!-- markmap: fold -->
  - [FastAPI-MCP](https://github.com/tadata-org/fastapi_mcp)
    - [Convert FastAPI to MCP](https://mp.weixin.qq.com/s/wes_IEILNt2ZDqQWsauAnw?mpshare=1&scene=1&srcid=0425rWZoAq1o6fBvDsX5VNjZ&sharer_shareinfo=7889fece983b6f398e97a70a8ae51ec4&sharer_shareinfo_first=7889fece983b6f398e97a70a8ae51ec4&version=4.1.36.99603&platform=mac#rd)
#### Knowledge <!-- markmap: fold -->
- [what-are-agentic-workflows](https://weaviate.io/blog/what-are-agentic-workflows)
- [fast build MCP](https://mp.weixin.qq.com/s/NU62Dvq3SMO6O-He9lcQ4Q?mpshare=1&scene=1&srcid=0426SfJNX6rGDUxjcw5t0DvE&sharer_shareinfo=ba26840944e675d838911a6e4c6cec36&sharer_shareinfo_first=ba26840944e675d838911a6e4c6cec36&version=4.1.36.99603&platform=mac#rd)
- [building MCP](https://mp.weixin.qq.com/s/9J3pvrmC9r47QahjI7U1lA?mpshare=1&scene=1&srcid=04277UkUFRAbmkR2BrGfBKy1&sharer_shareinfo=9594d217dfe05e42f29d29f414976329&sharer_shareinfo_first=9594d217dfe05e42f29d29f414976329&version=4.1.36.99603&platform=mac#rd)
- [Some pain points from MCP developers](https://mp.weixin.qq.com/s/PCXaZzZsRBdBytG2YuwKiw?mpshare=1&scene=1&srcid=0427tGu6FH0QsucG4ke0YFfx&sharer_shareinfo=8f4b455ca8d5065828bfd26e65c55440&sharer_shareinfo_first=8f4b455ca8d5065828bfd26e65c55440&version=4.1.36.99603&platform=mac#rd)
- [function Call vs MCP](https://mp.weixin.qq.com/s/Bs42mK8fQhDqLdm0ILtwSg?mpshare=1&scene=1&srcid=0427HGtLrFbF8oXncChCAadm&sharer_shareinfo=15a0e92260d2612e72f322b33a140649&sharer_shareinfo_first=15a0e92260d2612e72f322b33a140649&version=4.1.36.99603&platform=mac#rd)
- [Visions for Agent system](https://mp.weixin.qq.com/s/US1o7MULP4Ar_kGkSgRHuA?mpshare=1&scene=1&srcid=04275fRe8jNzwnigt7ILEg2r&sharer_shareinfo=c344b802fa4d7115c8979e3bd4d1a26d&sharer_shareinfo_first=c344b802fa4d7115c8979e3bd4d1a26d&version=4.1.36.99603&platform=mac#rd)
### Vision-Based <!-- markmap: fold -->
- Browser Operator
  - Examples
    - Amazon Seller Center
      - Amazon's API system is too large, which has led to many APIs being deprecated; <br>it has also resulted in a lack of many highly accurate data APIs.<br> So in this situation, a browser agent is needed to bypass APIs in order to complete the task.
  - Solutions
    - open-source
      - UI_TAR Desktop⭐
      - BrowserUse
      - Nanobrowser
      - Stagehand ⭐️
      - [Suna](https://github.com/kortix-ai/suna)
        - By integrating powerful features such as browser automation, file management,<br> web crawling, and API integration through natural language dialogue,<br> complex tasks like market research, itinerary planning, and data analysis can be easily accomplished.
      - Dom Operation<br>(Operate the source code of the webpage)
        - PlayWright ⭐
        - Selenium
        - Puppeteer
    - 3rd
      - Browserless
      - [Browse.ai](Browse.ai)
      - [Induced.ai](Induced.ai)
      - [Axiom.ai](Axiom.ai) 
- Computer Operator
  - Solutions
    - 3rd
      - OPENAI Computer Use
      - Manus
    - open-source
      - [Automate](https://github.com/yuruotong1/autoMate)
        - Simply circle a spot on the screen, and the AI will take control of that area.
- Use Cases
  - Non API tasks
    - Some platforms not even provide APIs
    - API data inaccuracies
    - Reason
      - Cost
        - Unlike the WEB, Font Web is built 100% tightly integrated with a real database and genuine back-end logic. However, API 
        services are an additional component, typically developed separately from the main logic, which results in extra costs.
      - Complexity
        - API calling complexity causing most platform will not 1:1 100% provides exact API. 
    - Real Cases
      - Netsuite
        - Unable to fetch data from Customized Searchcan only read it by Suite_Script+API
      - Amazon Seller Center
        - FBAs details
        - users level order data
      - They are real cases I met in the past 2 months. I believe that must be more.
  - Handling highly repetitive tasks
### API-Based <!-- markmap: fold -->
- MCP ✅
    - More than thousands of pre-built MCPs, connected almost all known APPs or platform...<br>🚨 MCPs is gradually replacing all the known APIs
  - MCP vs API
    - AI decide what APIs to call and complete entire task,  human don\`t need to work on API to API. <br> Only focus on NATURAL LANGUAGE to talk with MCP, teach MCP to call correct APIs
- Function Call ❌ <br>(Technologies on the verge of obsolescence)
  - Examples
    - Using different APIs to provide data to AI directly
  - Use cases
    - Connect Different Software that providing Nice APIs
## Tools
### AI Work With DATA <!-- markmap: fold -->
- Scarping
  - open-source
    - crawl4AI
    - crawlee
    - maxun
    - Firecrawl
  - 3rd
    - Scrapegraph-ai
    - ScrapingBee
    - WebScrapingAPI
    - ScraperAPI
- AI Conversational Database
  - 3rd
    - pandasAI
    - Google BigQuery
  - open-source
    - MongoDB+MCP
    - metabase
- BI / Database management
  - open-source
    - DBeaver
    - Prisma
    - Apache Superset 
- Files
  - pdf
    - PDFGPT
    - [no-ocr](https://github.com/kyryl-opens-ml/no-ocr)It no longer relies on OCR, but instead uses multimodal AI and vector indexing to understand the entire PDF, <br>supporting mixed image-text search, visual Q&A, and content archiving queries. 
### Deep Reasearcher<br> <!-- markmap: fold -->
- 3rd
  - SerpAPI
  - Metaphor
  - preplexity
- open-source
  - deep-searcher
  - [OpenDeepResearcher](https://github.com/mshumer/OpenDeepResearcher)[ ](https://github.com/mshumer/OpenDeepResearcher)
  - Jina
  - [deep-research](https://github.com/dzhng/deep-research)
  - [gpt-researcher](https://github.com/assafelovic/gpt-researcher)
### Work Flow builder <!-- markmap: fold -->
- open-source
  - n8n 🌟
    - The most popular low-code workflow generation platform with the richest 3rd intergrations.
  - Flowise
    - Open source low-code tool to build customized LLM orchestration flow & AI agents
  - GrapesJS
    - drag-and-drop build website
  - Motia
    - AI help to build each step by step of a big workflow
  - Tars
  - [Activepieces](https://github.com/activepieces/activepieces)
- 3rd
  - Coze
  - Microsoft Automate
  - Google Firebase
  - Dify
  - Gumloop ai
### Media <!-- markmap: fold -->
- News Center
  - meridian
    - It collects news from hundreds of sources, uses artificial intelligence to analyze the news, and provides concise, 
    personalized daily briefings to help users filter out valuable information from the noise.
  - newsnow
- Writting
  - Writer
  - Jenni_AI
- Voice & Video
  - TTS
    - [Dia-1.6B](https://huggingface.co/spaces/nari-labs/Dia-1.6B)
      - • Multi-character dialogue generation: Use tags like [S1], [S2] <br>• Personified expressions: Supports non-verbal emotions such as laughter (laugh), sighing (sigh), coughing (cough), etc.
    - spark
      - Open-source anthropomorphic TTS
  - Krillin AI
    - Video subtitle generation, subtitle translation, automatic dubbing

  - Orpheus
    - Source text to speech system. Pre-trained to simulate human voice.
  - Video to Text
    - BiliNote
      - Transform bilibili video into text
    - Video2Blog
      - Youtube Video -> Text
### AI Browser <!-- markmap: fold -->
- dia
  - A browser specifically designed for AI systems
- Fellou
### Developing <!-- markmap: fold -->
- Docs
  - Context 7
  - DeepWiki
    - Help developers gain an in-depth understanding of GitHub project documentation,<br> and support the automatic generation of clear, easy-to-understand, <br>and standardized documentation for their own projects.
  - gitdiagram
    - Quickly understand the structure diagram of a GitHub project
  - devDocs
    - DevDocs = High-Quality Documentation Crawler + Intelligent Content Cleaner + AI Knowledge Integration Tool
  - jekyll
    - fast tech blog_ web builder
- Design & Font-end
  - [openui](https://github.com/wandb/openui)
    - conversational build Font web
  - GrapesJS
    - Zero-code web design tool
  - Galileo AI 
    - Zero-code web design tool
  - [animejs](https://animejs.com/%20)
    - Font-end component library
  - inspira-ui
    - Font-end component library
  - Logo Design
    - [Arosade](https://github.com/JhojanGgarcia/arosade)
      - Logo design tool
- Back-end
  - caddy
  - Gatsby
  - Strapi
    - open-source headless CMS that enables developers to build customizable APIs
     with flexible content structures and a powerful admin interface.
  - SQLPage
    - Quickly build a front-end visual website based on a database
### RAG <!-- markmap: fold -->
- Google NoteBookLM
- Second me
### What`s more then Text <!-- markmap: fold -->
- Mermaid
  - Text to diagram, chart, flowchart, sequence diagram, etc.
- Markmap
  - Markdown to mindmap
- Vega
  - Text to html  charts
- Slidev
  - Markdown to slide
## Foundation 
### Resources <!-- markmap: fold -->
#### Computing resources
- The HOST servers that run agents. 
- Developer Laptop
#### LLM AI model usage cost
- Build our own GPUs for LLM
- Register the Thrasio OpenRouter, OpenAI, Grok or Gemini developer platform
### Prompts Engineering <!-- markmap: fold -->
#### Rules
  - [Cline Prompts Hints](https://mp.weixin.qq.com/s/Y7wXwq-anNCCxyeh0oSA6w)
  - [Claude Prompt](https://mp.weixin.qq.com/s/u2YhuunO9gRX9H8LklRTnA?mpshare=1&scene=1&srcid=0416ZD0S7awgqdtX2F3CBv6r&sharer_shareinfo=4f4d026b3bdcf446b4c9e32dad413dd0&sharer_shareinfo_first=4f4d026b3bdcf446b4c9e32dad413dd0&version=4.1.36.99603&platform=mac#rd)
  - [Cline offical guide of prompt](https://docs.cline.bot/improving-your-prompting-skills/prompting)
#### Tools
  - LangChain
  - LangGraph
  - Jinja2
  - Cloudflare AI gateway
  - Helicone
#### Examples
##### Design logo <!-- markmap: fold -->
- Create image 专业 logo 设计图：
设计风格：采用苹果设计美学（简约、精致、高端）
背景要求：纯白色
主色调：亮天蓝色系
行业定位：人工智能/科技
Logo 文字："LangGPT"
传达理念：语言、创新、智能、可靠
设计元素：简洁几何形状，可融入抽象的 AI/语言相关元素
技术规格：高分辨率，确保文字清晰易读
##### Create Diagram <!-- markmap: fold -->
- Draw the key structural diagram of the MLP (SVG)
Elements should not overlap, and avoid overcrowding of content
Add small formulas to explain key calculations
Use precise professional terminology
Mathematical formulas should use a formula font, English should use Times New Roman font, and Chinese should use SimSun font