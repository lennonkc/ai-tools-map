# [AI ToolMap ✨](https://kc-li.com/mytools) <br>[2026-08-17]

## Agents

### Agent Frameworks <!-- markmap: fold -->

- [AutoGen](https://github.com/microsoft/autogen)
  - A multi-agent application framework currently in maintenance mode; new Microsoft projects are directed to Agent Framework.
  - [MagenticLite (formerly Magentic-UI)](https://github.com/microsoft/magentic-ui)
  - [GraphFlow](https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/graph-flow.html)
    - Experimental directed-graph control for multi-agent workflows.
- [CrewAI](https://github.com/crewAIInc/crewAI)
- [Agno](https://github.com/agno-agi/agno)
- [Google Agent Development Kit (ADK)](https://adk.dev/)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)
  - Microsoft’s successor framework for building and orchestrating AI agents and multi-agent workflows.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python)
  - A lightweight framework for agent handoffs, guardrails, sessions, tracing, and tool use.
- LangManus

### Workflow Agents <!-- markmap: fold -->

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview) / [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)
  - LangChain provides high-level agent abstractions; LangGraph provides low-level orchestration for long-running, stateful agents and workflows.
  - examples
    - J.P. Morgan **Ask D.A.V.I.D**
    - [DeerFlow](https://github.com/bytedance/deer-flow)
    - [Gemini Fullstack LangGraph Quickstart](https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart)
    - [Email Assistant Agent](https://github.com/langchain-ai/agents-from-scratch)

#### MCP

- MCP directories
  - [Official MCP Registry](https://registry.modelcontextprotocol.io/)
  - [MCP.so](https://mcp.so/)
  - [Glama MCP Servers](https://glama.ai/mcp/servers)
  - [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Understanding MCP clients](https://modelcontextprotocol.io/docs/2026-07-28/learn/client-concepts)
  - open-source
    - [Open WebUI](https://github.com/open-webui/open-webui) ⭐
    - [5ire](https://github.com/nanbingxyz/5ire) Desktop
    - [ChatMCP](https://github.com/daodao97/chatmcp)
    - [Cherry Studio](https://github.com/CherryHQ/cherry-studio)
  - 3rd
    - 扣子空间
    - [360 纳米 AI](https://bot.n.cn/download)
  - [SillyTavern](https://github.com/SillyTavern/SillyTavern)
    - Advanced AI conversation tuning and extensible model integrations.
  - [Cline](https://github.com/cline/cline) ⭐
    - MCP-enabled coding agents embedded in the IDE.
  - [TRAE](https://www.trae.ai/) / [Cursor](https://www.cursor.com/)
    - AI-native development environments.
- MCP Development <!-- markmap: fold -->
  - [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
    - Official interactive developer tool for testing and debugging MCP servers.
  - [Official MCP SDKs](https://modelcontextprotocol.io/docs/2026-07-28/sdk)
  - [MCP reference servers](https://github.com/modelcontextprotocol/servers)
    - Educational reference implementations, not a complete production server directory.
  - [ACI.dev](https://github.com/aipotheosis-labs/aci)
    - Open-source agent tool-calling platform with authentication, permissions, discovery, and unified MCP/SDK interfaces.
  - [Mem0](https://github.com/mem0ai/mem0)
    - A long-term memory layer that persists agent context across sessions, tools, and runs.
  - [FastAPI-MCP](https://github.com/tadata-org/fastapi_mcp)
    - Exposes FastAPI endpoints as MCP tools while reusing schemas, dependencies, documentation, and authentication.
  - Docs
    - [MCP 开发精准控制](https://mp.weixin.qq.com/s/AFrOLt0MZPrv11WJGQE5zA?mpshare=1&scene=1&srcid=0516lrt6NmDfMTT8Kq0PcDvB&sharer_shareinfo=d8b588badd9f9283def218a8efddc067&sharer_shareinfo_first=d8b588badd9f9283def218a8efddc067&version=4.1.36.99603&platform=mac#rd)

#### Agent Interoperability Protocols

- [Agent2Agent (A2A) Protocol](https://github.com/a2aproject/A2A)
- [AG-UI](https://github.com/ag-ui-protocol/ag-ui)

#### Skills

- [claude-code-templates](https://github.com/davila7/claude-code-templates)
- [Anthropic Agent Skills](https://github.com/anthropics/skills)
  - Filesystem-based skill directories centered on `SKILL.md`, with instructions and optional scripts or resources loaded on demand.

#### Knowledge <!-- markmap: fold -->

- [Bessemer’s AI agent autonomy scale](https://www.bvp.com/atlas/bessemers-ai-agent-autonomy-scale)
- [全流程客制化一个 Agent](https://mp.weixin.qq.com/s/rX3J1f8V_-dvBYn1MAl1dg?version=4.1.36.99603&platform=mac)
- [Generative AI’s Act Two](https://www.sequoiacap.com/article/generative-ai-act-two/)
- [Foundation Agents](https://arxiv.org/abs/2504.01990)
- [The general charging models of AI companies](http://mp.weixin.qq.com/s?__biz=MzkyNTY1MjE2OA==&mid=2247489536&idx=1&sn=69a37a83b1cac9a31958d966445e21e3&chksm=c0c1c4e730cbac3846f9d3727e34df0f221e151a2eda1a9b17bbab8d06c6735bb82494bda0ae&mpshare=1&scene=1&srcid=0427c2NgTBGaxQnbjYOMOmik&sharer_shareinfo=abf2a9227030ccb80fe45ea1934fd791&sharer_shareinfo_first=abf2a9227030ccb80fe45ea1934fd791#rd)
- [What are agentic workflows?](https://weaviate.io/blog/what-are-agentic-workflows)
- [fast build MCP](https://mp.weixin.qq.com/s/NU62Dvq3SMO6O-He9lcQ4Q?mpshare=1&scene=1&srcid=0426SfJNX6rGDUxjcw5t0DvE&sharer_shareinfo=ba26840944e675d838911a6e4c6cec36&sharer_shareinfo_first=ba26840944e675d838911a6e4c6cec36&version=4.1.36.99603&platform=mac#rd)
- [building MCP](https://mp.weixin.qq.com/s/9J3pvrmC9r47QahjI7U1lA?mpshare=1&scene=1&srcid=04277UkUFRAbmkR2BrGfBKy1&sharer_shareinfo=9594d217dfe05e42f29d29f414976329&sharer_shareinfo_first=9594d217dfe05e42f29d29f414976329&version=4.1.36.99603&platform=mac#rd)
- [Some pain points from MCP developers](https://mp.weixin.qq.com/s/PCXaZzZsRBdBytG2YuwKiw?mpshare=1&scene=1&srcid=0427tGu6FH0QsucG4ke0YFfx&sharer_shareinfo=8f4b455ca8d5065828bfd26e65c55440&sharer_shareinfo_first=8f4b455ca8d5065828bfd26e65c55440&version=4.1.36.99603&platform=mac#rd)
- [Function calling vs MCP](https://mp.weixin.qq.com/s/Bs42mK8fQhDqLdm0ILtwSg?mpshare=1&scene=1&srcid=0427HGtLrFbF8oXncChCAadm&sharer_shareinfo=15a0e92260d2612e72f322b33a140649&sharer_shareinfo_first=15a0e92260d2612e72f322b33a140649&version=4.1.36.99603&platform=mac#rd)
- [Visions for Agent system](https://mp.weixin.qq.com/s/US1o7MULP4Ar_kGkSgRHuA?mpshare=1&scene=1&srcid=04275fRe8jNzwnigt7ILEg2r&sharer_shareinfo=c344b802fa4d7115c8979e3bd4d1a26d&sharer_shareinfo_first=c344b802fa4d7115c8979e3bd4d1a26d&version=4.1.36.99603&platform=mac#rd)


### GUI Agents <!-- markmap: fold -->

- Browser Operator
  - open-source
    - [UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop) ⭐
    - [Browser Use](https://github.com/browser-use/browser-use)
    - [Nanobrowser](https://github.com/nanobrowser/nanobrowser)
    - [Stagehand](https://github.com/browserbase/stagehand) ⭐
    - [Playwright MCP](https://github.com/microsoft/playwright-mcp)
      - Official Microsoft MCP server for browser automation through Playwright.
    - DOM Operation<br>(Operate the source code of the webpage)
      - [Playwright](https://github.com/microsoft/playwright) ⭐
      - [Selenium](https://github.com/SeleniumHQ/selenium)
      - [Puppeteer](https://github.com/puppeteer/puppeteer)
    - [SeleniumBase](https://github.com/seleniumbase/SeleniumBase)
      - A Python browser automation framework extending Selenium with test runners, reports, screenshots, and resilient automation helpers.
  - source-available
    - [Suna](https://github.com/kortix-ai/suna)
      - Source-available AI management system with browser automation, file management, crawling, and API integrations; licensed under Elastic License 2.0.
    - [Agent QA](https://github.com/vostride/agent-qa)
      - Source-available QA harness for natural-language web and mobile tests, with MCP integration, execution memory, and self-healing flows; FSL 1.1 with an Apache-2.0 future grant after two years.
  - 3rd
    - [Browserless](https://www.browserless.io/)
    - [Browse AI](https://www.browse.ai/)
    - [Induced AI](https://induced.ai/)
    - [axiom.ai](https://axiom.ai/)
  - AI Browser
    - [Dia](https://www.diabrowser.com/)
      - An AI-focused browser that organizes work context across tabs, meetings, documents, and connected tools.
    - [Fellou](https://fellou.ai/)
      - An agentic browser for multi-step research and cross-application workflows.

- Computer Operator
  - 3rd
    - [OpenAI Computer use](https://developers.openai.com/api/docs/guides/tools-computer-use)
    - [Manus](https://manus.im/)
  - open-source
    - [autoMate](https://github.com/yuruotong1/autoMate)
      - Circle a region on the screen and let the AI operate within that area.
    - [UFO³](https://github.com/microsoft/UFO)
      - Microsoft’s open-source Windows desktop automation framework for multi-application tasks.

- Computer Vision
  - open-source
    - [OmniParser](https://github.com/microsoft/OmniParser)
      - Parses UI screenshots into structured elements for vision-based computer-use agents.
    - [Supervision](https://github.com/roboflow/supervision)
      - Reusable computer-vision utilities for datasets, detections, annotations, and video processing.
  - source-available
    - [screenpipe](https://github.com/screenpipe/screenpipe)
      - Local screen and audio capture with OCR/transcription indexing for agent context and memory.

- Use Cases
  - Non-API tasks
    - Platforms that do not provide suitable APIs
    - Cases where API data is incomplete or inaccurate
    - Reasons
      - Cost
        - APIs are often developed and maintained separately from a product’s core interface, increasing implementation cost.
      - Complexity
        - Public APIs may not expose every operation or data field available in the product UI.
  - Highly repetitive tasks


### Good Examples <!-- markmap: fold -->

- J.P. Morgan **Ask D.A.V.I.D**
- [Agentic Company Researcher](https://github.com/guy-hartstein/company-research-agent)
  - Uses Tavily filtering to collect and integrate company websites, news, and financial reports.
- [FutureHouse](https://www.futurehouse.org/)
  - A nonprofit research organization developing AI agents for scientific research automation and end-to-end discovery.
- [OpenHands / Agent Canvas](https://github.com/OpenHands/OpenHands)
  - A self-hostable platform for running and orchestrating coding agents.
- [ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)
  - Educational and research proof of concept for multi-agent investment analysis and historical backtesting; it does not execute real trades and is not investment advice.
- Third-party agents
  - Genspark SuperAgent
  - [Manus](https://manus.im/)
  - [OpenManus](https://github.com/FoundationAgents/OpenManus)
  - [flowith](https://flowith.io/)
  - [Abacus AI Agent (formerly DeepAgent)](https://deepagent.abacus.ai/)

## Tools


### Deep Research <!-- markmap: fold -->

- 3rd
  - [SerpAPI](https://serpapi.com/)
  - [Exa](https://exa.ai/)
  - [Perplexity](https://www.perplexity.ai/)
  - atypica.AI ⭐
    - Multi-expert collaboration focused on conversational market analysis and research.
    - [example](https://atypica.musedam.cc/study/Miw9cmdmfLmdzxaq/share?replay=1)
- open-source
  - [Vane (formerly Perplexica)](https://github.com/ItzCrazyKns/Vane) ⭐
  - [deep-searcher](https://github.com/zilliztech/deep-searcher)
  - [DeerFlow](https://github.com/bytedance/deer-flow)
    - A long-horizon SuperAgent harness for research, coding, and content creation.
  - [OpenDeepResearcher](https://github.com/mshumer/OpenDeepResearcher)
  - [Jina DeepResearch](https://github.com/jina-ai/node-DeepResearch)
  - [deep-research](https://github.com/dzhng/deep-research)
  - [gpt-researcher](https://github.com/assafelovic/gpt-researcher)
  - [Open Deep Research](https://github.com/langchain-ai/open_deep_research)
    - A configurable LangGraph research agent with planning, web search, and report synthesis.

### Workflow Builder <!-- markmap: fold -->

- open-source
  - [Langflow](https://github.com/langflow-ai/langflow)
    - A visual framework for building and deploying AI agents and workflows.
  - [iii](https://github.com/iii-hq/iii)
    - An event-driven runtime for composing services and workflows from reusable workers.
  - Tars
  - [Activepieces](https://github.com/activepieces/activepieces)
  - bisheng
- source-available / fair-code
  - [n8n](https://github.com/n8n-io/n8n)
    - Workflow automation platform with extensive app integrations and AI workflow support.
  - [Dify](https://github.com/langgenius/dify)
    - Platform for building and operating LLM applications and agentic workflows.
- 3rd
  - [Coze](https://www.coze.com/)
  - [Microsoft Power Automate](https://www.microsoft.com/en-us/power-platform/products/power-automate)
  - Gumloop AI

### Media <!-- markmap: fold -->

- News Center
  - [Folo](https://github.com/RSSNext/Folo)
    - An information aggregator that combines articles, videos, and updates from followed sources into one timeline.
  - meridian
    - Collects and analyzes news from many sources to produce personalized daily briefings.
  - [NewsNow](https://github.com/ourongxing/newsnow)
  - [LingoWhale](https://lingowhale.com/)
    - Tracks information sources and generates AI summaries.

- Writing
  - [Writer AI Studio](https://writer.com/)
  - [Jenni](https://jenni.ai/)
  - [Resume Matcher](https://github.com/srbhr/Resume-Matcher)
    - AI-assisted resume tailoring and job-description matching.

- Voice & Video & Images
  - TTS
    - [MiniMax Audio](https://www.minimax.io/audio)
    - [Dia](https://github.com/nari-labs/dia)
      - Multi-speaker dialogue generation with non-verbal expressions such as laughter, sighing, and coughing.
    - [Spark-TTS](https://github.com/SparkAudio/Spark-TTS)
      - Open-source text-to-speech system for controllable, natural speech generation.
  - Video
    - [Veo 3](https://deepmind.google/models/veo/) ⭐
      - Video generation with native dialogue, sound effects, and ambient audio.
    - [HunyuanVideo](https://github.com/Tencent-Hunyuan/HunyuanVideo)
      - A systematic framework for a large video-generation model.
    - [FramePack](https://github.com/lllyasviel/FramePack)
      - Image- and prompt-driven video diffusion designed to run on supported consumer NVIDIA hardware.
    - [KrillinAI](https://github.com/krillinai/KrillinAI)
      - Video subtitle generation, translation, and automatic dubbing.
    - [Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)
      - Real-time face swapping for video streams.
    - [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
      - Automates short-video creation from scripts, stock media, voice-over, and subtitles.
    - Video to Text
      - [BiliNote](https://github.com/JefferyHcool/BiliNote)
        - Converts supported video content into structured notes.
      - Video2Blog
        - YouTube video to text.
    - Video download
      - datatool.vip
      - [cobalt](https://cobalt.tools/)
        - Web interface and API for saving openly accessible media from supported services.
      - [yt-dlp](https://github.com/yt-dlp/yt-dlp)
        - Command-line downloader supporting thousands of media sites.
  - Images
    - Nano Banana ⭐
      - Image generation and editing that combines visual synthesis with model reasoning.
    - Midjourney V7 ⭐
      - Strong lighting, artistic composition, and style consistency.
    - [FLUX](https://bfl.ai/flux-1-tools/)
      - Black Forest Labs image-generation and editing model family with open-weight and API-delivered variants.
    - Stable Diffusion, LoRA, ControlNet
      - Ecosystem for custom characters, styles, and precise pose or composition control.
    - [ComfyUI](https://github.com/Comfy-Org/ComfyUI)
      - Node-based interface and execution engine for generative AI workflows.
- Podcast
  - [Podcastfy](https://github.com/souzatharsis/podcastfy)
    - Open-source Python tool that transforms multimodal content into multilingual AI-generated audio conversations.
- WeChat
  - [chatlog](https://github.com/sjzar/chatlog)
  - [WeClone](https://github.com/xming521/WeClone)
    - Fine-tunes conversational models from exported chat history to reproduce a personal writing style.


### Coding <!-- markmap: fold -->

#### Vibe Coding ⭐

- AI IDE
  - [Cursor](https://www.cursor.com/)
  - [TRAE](https://www.trae.ai/)
  - Windsurf
  - [Zed](https://zed.dev/ai)
    - Open-source collaborative editor with integrated AI workflows.
- IDE Plugin
  - [Kilo Code](https://github.com/Kilo-Org/kilocode)
  - [Cline](https://github.com/cline/cline)
- CLI tool
  - [Claude Code](https://code.claude.com/docs/en/overview)
  - [Gemini CLI](https://github.com/google-gemini/gemini-cli)
  - [Codex CLI](https://github.com/openai/codex)
- Web IDE
  - [Lovable](https://lovable.dev/)
  - [Google AI Studio](https://aistudio.google.com/)
  - [Base44](https://base44.com/)
  - [v0](https://v0.dev/)
  - [Bolt.new](https://bolt.new/)

#### Docs

- helpful tools to read GitHub repositories
  - [PocketFlow Tutorial Codebase Knowledge](https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge)
    - Generates tutorials that help developers learn an unfamiliar repository.
  - [Context7](https://github.com/upstash/context7)
  - [DeepWiki](https://deepwiki.com/)
    - Repository documentation, architecture diagrams, sequence diagrams, API references, and research.
  - [Zread](https://zread.ai/)
  - [GitDiagram](https://gitdiagram.com/)
    - Generates an interactive architecture diagram from a GitHub repository.
- [DevDocs](https://devdocs.io/)
  - API documentation browser with centralized search and offline access.
- [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) ⭐
  - A curated collection of free and open-source software products.

#### Design & Front-end

- [A2UI](https://github.com/a2ui-project/a2ui)
  - Open standard and libraries for agent-generated declarative UI.
- [OpenUI](https://github.com/wandb/openui)
  - Conversational interface for building front-end UI.
- [Onlook](https://github.com/onlook-dev/onlook)
  - Open-source, AI-first visual builder and editor for React.
- [GrapesJS](https://grapesjs.com/)
  - Open-source web builder framework with drag-and-drop editing.
- Galileo AI
- [Anime.js](https://animejs.com/)
  - JavaScript animation engine for the web.
- [Akaza UI](https://akaza-ui.com/)
  - Unstyled, accessible headless UI components for Vue 3.
- Logo Design
  - [Arosade](https://github.com/JhojanGgarcia/arosade)
    - Logo design tool.
- Desktop & mobile app
  - [Tauri](https://tauri.app/)
    - Framework for building small, fast desktop and mobile applications with a web front end.
  - [PakePlus](https://pakeplus.com/)
    - Packages websites as desktop and mobile applications.
- Git
  - [GitMCP](https://github.com/idosal/git-mcp)
    - Converts a GitHub repository into an MCP endpoint for documentation and code retrieval.

#### Back-end

- servers
  - [ctop](https://github.com/bcicen/ctop)
    - Command-line monitoring interface for containers.
  - [kubectl-ai](https://github.com/GoogleCloudPlatform/kubectl-ai)
    - Uses natural-language instructions to help operate Kubernetes clusters.
  - [Nginx Proxy Manager](https://github.com/NginxProxyManager/nginx-proxy-manager)
    - Web interface for managing Nginx proxy hosts and certificates.
  - [JumpServer](https://github.com/jumpserver/jumpserver)
    - Open-source privileged access management platform.
- database / app platform
  - [Supabase](https://supabase.com/) ⭐
  - [Firebase](https://firebase.google.com/)
- developer tools
  - [public-apis](https://github.com/public-apis/public-apis)
    - Collaborative collection of public APIs.
  - [Meilisearch](https://www.meilisearch.com/)
    - Application-focused search engine with typo tolerance and fast search-as-you-type.
  - [Bruno](https://github.com/usebruno/bruno)
    - Open-source API client and testing tool.
- [Caddy](https://caddyserver.com/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Strapi](https://strapi.io/)
  - Open-source headless CMS for customizable content APIs and administration.
- [SQLPage](https://sql-page.com/)
  - Builds data-driven websites directly from SQL queries.

#### Network

- [NPS](https://github.com/ehang-io/nps)
  - Intranet proxy supporting TCP, UDP, HTTP(S), SOCKS5, and related protocols.

### Data <!-- markmap: fold -->

- Scraping
  - open-source
    - [Crawl4AI](https://github.com/unclecode/crawl4ai)
    - [Crawlee](https://github.com/apify/crawlee)
      - Combines web crawling with browser automation.
    - [Maxun](https://github.com/getmaxun/maxun)
    - [Firecrawl](https://github.com/firecrawl/firecrawl)
      - Crawls sites and converts pages into LLM-ready Markdown or structured data.
    - [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai)
  - 3rd
    - [Tavily](https://tavily.com/)
      - Search API for AI agents with result extraction and research workflows.
    - [ScrapingBee](https://www.scrapingbee.com/)
    - [WebScrapingAPI](https://www.webscrapingapi.com/)
    - [ScraperAPI](https://www.scraperapi.com/)
- AI Conversational Database
  - 3rd
    - [PandasAI](https://github.com/sinaptik-ai/pandas-ai)
    - [Google BigQuery](https://cloud.google.com/bigquery)
  - open-source
    - MongoDB + MCP
    - [Liam ERD](https://github.com/liam-hq/liam)
      - Generates interactive entity-relationship diagrams from database schemas.
- BI / Database Management
  - open-source
    - [Metabase](https://github.com/metabase/metabase) ⭐
      - Approachable business intelligence with AI-assisted querying and visualization.
    - [DataEase](https://github.com/dataease/dataease)
      - Chinese-friendly BI platform with AI integrations.
    - [Wren AI](https://github.com/Canner/WrenAI)
      - Semantic layer and text-to-SQL engine for embedded conversational analytics.
    - [DBeaver](https://github.com/dbeaver/dbeaver)
      - Cross-platform database client.
    - [Prisma](https://github.com/prisma/prisma)
      - Type-safe ORM and database toolkit for TypeScript.
    - [Apache Superset](https://superset.apache.org/)
      - Open-source data exploration and visualization platform.
    - [Teable](https://teable.io/)
      - PostgreSQL-based business data platform with spreadsheet-style collaboration and automation.
- Files and OCR
  - [LangExtract](https://github.com/google/langextract)
    - Extracts structured information from unstructured text with source grounding.
  - Docs
    - [ConvertX](https://github.com/C4illin/ConvertX) ⭐
      - Self-hosted file conversion service.
    - PPT
      - [MultiAgentPPT](https://github.com/johnson7788/MultiAgentPPT)
        - Uses multiple conversational agents to generate presentations.
    - PDF
      - [BabelDOC](https://github.com/funstory-ai/BabelDOC)
        - Translates PDFs while preserving layout.
      - [no-ocr](https://github.com/kyryl-opens-ml/no-ocr)
        - Processes PDF pages without OCR and supports visual question answering over charts and images.
      - [Docling](https://github.com/docling-project/docling)
        - Document parsing and conversion with PDF/Office support, OCR, layout, and table processing for AI and RAG content.
      - [MinerU](https://github.com/opendatalab/MinerU)
        - Converts complex PDFs into structured Markdown and JSON for downstream AI workflows.
  - OCR <!-- markmap: fold -->
    - [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) ⭐
    - [MonkeyOCR](https://github.com/Yuliang-Liu/MonkeyOCR)
    - [dots.ocr](https://github.com/studio-dots-ai/dots.ocr)
    - [OCRFlux](https://github.com/chatdoc-com/OCRFlux)
- Finance / Quantitative Trading
  - [ai_quant_trade](https://github.com/charliedream1/ai_quant_trade)
  - [QUANTAXIS](https://github.com/yutiansut/QUANTAXIS)
    - Quantitative research and trading framework with task scheduling and distributed deployment.
  - [Backtrader](https://github.com/mementum/backtrader)
    - Python backtesting and trading framework.
  - [Qlib](https://github.com/microsoft/qlib)
    - AI-oriented quantitative investment platform for research and production.
  - [FinGenius](https://github.com/HuaYaoAI/FinGenius)
    - Multi-agent financial research and investment analysis.
  - [OpenBB](https://github.com/OpenBB-finance/OpenBB) ⭐
    - Open financial-data platform for analysts, quantitative research, and AI agents.
  - [TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)
    - Chinese-enhanced multi-agent LLM financial trading framework.


### RAG & Knowledge Management <!-- markmap: fold -->

- [Google NotebookLM](https://notebooklm.google.com/) ⭐
- [Open Notebook](https://github.com/lfnovo/open-notebook)
  - Self-hosted research and knowledge-management tool with source ingestion, retrieval, citations, and configurable AI models.
- [Second Me](https://github.com/mindverse/Second-Me)
- [SurfSense](https://github.com/MODSetter/SurfSense)
  - Self-hostable research assistant that aggregates personal and team sources into a searchable knowledge base.
- [RAGFlow](https://github.com/infiniflow/ragflow)
  - Open-source RAG engine combining document understanding, retrieval, and agent workflows.

### What’s More Than Text <!-- markmap: fold -->

- [Mermaid](https://mermaid.ai/open-source/)
  - Text-based diagrams, charts, flowcharts, and sequence diagrams.
- [Markmap](https://markmap.js.org/)
  - Markdown to mind map.
- [Vega](https://vega.github.io/vega/)
  - Declarative grammar for interactive visualizations.
- [Slidev](https://sli.dev/)
  - Markdown-based presentation framework for developers.
- [GPT-Vis](https://github.com/antvis/GPT-Vis/blob/ai/README.zh-CN.md)
  - Framework-agnostic, AI-native visualization library for LLM applications.
- [Next AI Draw.io](https://github.com/DayuanJiang/next-ai-draw-io)
  - Creates and edits draw.io diagrams through natural language.
- [D2](https://d2lang.com/)
  - Declarative diagram scripting language with automatic layout.

## Knowledge

### Awesome Links <!-- markmap: fold -->

- [Vibe Coding 中文指南](https://github.com/tradecatlabs/vibe-coding-cn)
- [Vibe Vibe](https://github.com/datawhalechina/vibe-vibe)
  - 面向零编程基础学习者的 AI 辅助编程系统化教程，从「我有一个想法」到「我做出了一个产品」。
- [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
  - Curated examples of practical LLM applications across different domains.
- [OpenTools](https://opentools.ai/)
- [FMHY AI](https://fmhy.net/ai)
- [llm-course](https://github.com/mlabonne/llm-course)
  - Learning path for large-language-model fundamentals and engineering.
- [nb](https://github.com/xwmx/nb)
  - Command-line and local-web tool for plaintext notes, bookmarks, and archiving.
- Prompt Engineering <!-- markmap: fold -->
  - Rules
    - [System Prompts and Models of AI Tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)
    - [Cline Prompts Hints](https://mp.weixin.qq.com/s/Y7wXwq-anNCCxyeh0oSA6w)
    - [Claude Prompt](https://mp.weixin.qq.com/s/u2YhuunO9gRX9H8LklRTnA?mpshare=1&scene=1&srcid=0416ZD0S7awgqdtX2F3CBv6r&sharer_shareinfo=4f4d026b3bdcf446b4c9e32dad413dd0&sharer_shareinfo_first=4f4d026b3bdcf446b4c9e32dad413dd0&version=4.1.36.99603&platform=mac#rd)
  - Tools
    - [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
    - [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) 🌟
    - [Jinja](https://jinja.palletsprojects.com/)
    - [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/)
    - [Helicone](https://www.helicone.ai/)



### Learning Path <!-- markmap: fold -->

- [AI Engineer](https://roadmap.sh/ai-engineer)
- [AI Agents](https://roadmap.sh/ai-agents)
- [AI and Data Scientist](https://roadmap.sh/ai-data-scientist)
