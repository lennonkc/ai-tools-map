# SP-API

+ ## Amazon Selling Partner API（SP-API）详细介绍

   #### **1\. 什么是 Amazon Selling Partner API（SP-API）？**

   Amazon Selling Partner API（简称 SP-API）是亚马逊为第三方卖家和开发者提供的一套 API，允许他们与亚马逊商城的各种功能集成，从而实现自动化操作，提高运营效率。SP-API 是 Amazon Marketplace Web Service（MWS）的升级版本，提供更现代的 RESTful API 设计，支持 JSON 格式的数据交互，并增加了 OAuth 2.0 认证机制。

   SP-API 可用于：

   - 订单管理（获取订单详情、确认发货等）

   - 库存管理（更新库存、查询库存状态）

   - 商品信息管理（创建、更新、查询商品）

   - 广告管理（管理 Amazon Ads 账户、广告活动）

   - 财务数据（查询付款报告、交易对账）

   - 运输管理（创建发货计划、查询配送状态）

   - 绩效监控（获取账户绩效指标）

   ---

   #### **2\. SP-API 的主要功能模块**

   SP-API 由多个端点（Endpoints）组成，每个端点负责不同的业务功能：

   

   | **模块** | **功能** | 
   |---|---|
   | **Orders API** | 获取订单列表、订单详情、订单项、发货信息等 | 
   | **Listings API** | 创建、更新和删除商品 listing | 
   | **Reports API** | 获取销售、库存、财务等报告 | 
   | **Feeds API** | 提交批量数据（如商品更新、价格变更） | 
   | **Product Pricing API** | 查询商品价格、竞争对手价格 | 
   | **Inventory API** | 查询和更新库存信息 | 
   | **Finance API** | 获取交易、付款、退款等财务数据 | 
   | **Shipping API** | 创建和管理运输计划 | 
   | **Advertising API** | 管理 Amazon Ads 账户、广告活动 | 
   | **Notifications API** | 监听库存变化、订单更新等事件 | 
   

   ---

   #### **3\. SP-API 认证机制**

   SP-API 使用 **OAuth 2.0** 认证，主要包括以下几种角色：

   - **卖家应用（Seller applications）**：用于管理卖家账户中的数据，需要卖家授权后才能访问其信息。

   - **供应商应用（Vendor applications）**：适用于供应商（Vendors）与 Amazon 进行集成。

   - **内部应用（Self-auth applications）**：仅适用于开发者自己管理的 Amazon 账户，无需额外授权。

   ##### **OAuth 2.0 认证流程**

   1. **注册 AWS IAM 角色** 并申请 Amazon 开发者权限

   2. **获取 Authorization Code**（用户登录 Amazon 账号后授权）

   3. **使用 Authorization Code 交换 Access Token**

   4. **使用 Access Token 调用 API**

   ---

   #### **4\. SP-API 访问方式**

   SP-API 提供 **RESTful API** 访问方式，所有请求必须使用 **HTTPS**，并且大多数 API 需要进行身份认证。

   ##### **示例：获取订单**

   ```
   curl -X GET "https://sellingpartnerapi-na.amazon.com/orders/v0/orders?CreatedAfter=2024-02-01T00:00:00Z" \
   -H "x-amz-access-token: YOUR_ACCESS_TOKEN" \
   -H "x-amz-date: 20240227T120000Z" \
   -H "x-amz-security-token: YOUR_SESSION_TOKEN"
   
   ```

   ##### **示例：更新库存**

   ```
   curl -X PATCH "https://sellingpartnerapi-na.amazon.com/inventory/v1/fulfillmentNetworkSKU" \
   -H "Content-Type: application/json" \
   -H "x-amz-access-token: YOUR_ACCESS_TOKEN" \
   -d '{
     "sku": "YOUR_SKU",
     "available": 10
   }'
   
   ```

   ---

   #### **5\. 如何申请 SP-API 访问权限？**

   如果你想使用 SP-API，通常需要以下步骤：

   1. **注册开发者账户**

      - 登录 **Amazon Developer Console**（<https://developer.amazonservices.com）>

      - 申请 **SP-API Developer Access**

      - 需要填写企业信息、API 访问用途等

   2. **创建 IAM 角色**

      - 进入 **AWS IAM** 控制台

      - 配置 Amazon SP-API 所需权限（如 `AWSMarketplaceFullAccess`）

   3. **获取 API 访问密钥**

      - Amazon 会提供 **LWA Client ID / Secret** 作为 OAuth 2.0 认证信息

   4. **进行 API 认证**

      - 获取 **Access Token**

      - 使用 Access Token 进行 API 调用

   ---

   #### **6\. MWS 与 SP-API 的区别**

   Amazon SP-API 是 MWS（Marketplace Web Service）的替代方案，MWS 将在 2024 年 7 月 31 日正式停止服务。主要区别如下：

   

   | **比较项** | **SP-API** | **MWS** | 
   |---|---|---|
   | **API 类型** | RESTful | SOAP/XML | 
   | **认证机制** | OAuth 2.0 | AWS Access Key | 
   | **数据格式** | JSON | XML | 
   | **支持区域** | 全球 | 部分市场 | 
   | **性能** | 更高效、支持更多 API 端点 | 旧版本，较低效 | 
   | **安全性** | 支持 IAM 角色 | 需要 AWS 密钥 | 
   

   如果你的系统仍然在使用 MWS，建议尽快迁移到 SP-API。

   ---

   #### **7\. 适用场景**

   SP-API 适用于各种电商自动化场景，包括：

   - **ERP 系统对接**：集成 Amazon 订单、库存、财务数据

   - **智能定价**：根据市场竞争情况自动调整商品价格

   - **库存管理**：同步多个销售渠道的库存数据

   - **广告投放优化**：自动调整广告预算，提高 ROI

   - **数据分析**：定期获取销售、退货、财务报表进行数据分析

   ---

   #### **8\. 需要注意的事项**

   - **API 访问受限**：并非所有账户都能访问 SP-API，必须申请权限。

   - **API 调用限额（Rate Limits）**：不同 API 端点有不同的调用频率限制，避免超限。

   - **数据隐私合规**：SP-API 需要符合 Amazon 数据使用政策，开发者需妥善管理用户数据。

   - **迁移 MWS**：如果你的系统仍然在使用 MWS，需要尽快迁移到 SP-API。

   ---

   ### **总结**

   Amazon Selling Partner API（SP-API）是亚马逊提供的一套现代化 API，适用于自动化 Amazon 卖家业务流程。它相比 MWS 具有更高的安全性、灵活性和扩展性，适用于卖家、供应商、开发者等多种角色。要使用 SP-API，需要注册开发者账户、申请访问权限，并进行 OAuth 2.0 认证。如果你的业务依赖 Amazon 平台，集成 SP-API 可以大大提升运营效率。

+ ## Reports API

   ## **🚀 Amazon SP-API Reports API 支持的所有报告类型**

   Amazon **Reports API** 允许卖家获取各种 **财务、库存、订单、商品、广告** 相关的数据。你可以使用不同的 `reportType` 获取特定的数据报告。

   ---

   ## **📌 1️⃣ 财务（Finance）相关报告**

   这些报告包含 **结算、付款、费用、交易记录等**，适用于 **收入/支出分析**。

   

   | **报告类型 (`reportType`)** | **描述** | 
   |---|---|
   | `GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE` | 结算报告（新版），包含销售收入、退款、佣金、FBA 费用等 | 
   | `GET_FLAT_FILE_SETTLEMENT_REPORT_DATA` | 结算报告（旧版），包含卖家账户结算明细 | 
   | `GET_V2_ALL_FINANCIAL_EVENT_DATA` | 所有财务交易，包括订单收入、退款、佣金、广告费等 | 
   | `GET_V2_FBA_REIMBURSEMENTS_DATA` | FBA 赔偿报告，包含 FBA 丢失/损坏的赔偿款 | 
   | `GET_V2_REFUNDS_DATA` | 退款交易报告 | 
   

   📌 **推荐使用**：

   - **如果你想获取结算数据**，首选 `GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE`（如果不可用，试试 `GET_FLAT_FILE_SETTLEMENT_REPORT_DATA`）。

   - **如果你想获取所有财务交易数据**，推荐 `GET_V2_ALL_FINANCIAL_EVENT_DATA`。

   ---

   ## **📌 2️⃣ 订单（Orders）相关报告**

   这些报告包含 **订单信息**，适用于 **销售分析、订单跟踪**。

   

   | **报告类型 (`reportType`)** | **描述** | 
   |---|---|
   | `GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL` | **所有订单报告**（按订单日期） | 
   | `GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL` | **所有订单报告**（按订单更新时间） | 
   | `GET_FLAT_FILE_PENDING_ORDERS_DATA` | 待处理订单报告 | 
   | `GET_CONVERGED_FLAT_FILE_ORDER_REPORT_DATA` | 汇总订单报告（包含订单和发货数据） | 
   

   📌 **推荐使用**：

   - **获取所有订单信息**：`GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL`

   - **获取最近更新的订单**：`GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL`

   ---

   ## **📌 3️⃣ 商品 Listing（Listings）相关报告**

   这些报告包含 **商品 Listing 详情**，适用于 **库存管理、Listing 优化**。

   

   | **报告类型 (`reportType`)** | **描述** | 
   |---|---|
   | `GET_MERCHANT_LISTINGS_ALL_DATA` | **所有商品 Listing 报告** | 
   | `GET_FLAT_FILE_OPEN_LISTINGS_DATA` | 仅包含 **在售商品** 的 Listing 报告 | 
   | `GET_MERCHANT_LISTINGS_INACTIVE_DATA` | 仅包含 **下架的商品** | 
   | `GET_MERCHANT_LISTINGS_DATA_LITE` | **精简版 Listing 数据**（包含 SKU、ASIN、价格） | 
   | `GET_MERCHANT_LISTINGS_DATA_LITER` | **更精简的 Listing 数据**（SKU、ASIN、库存） | 
   

   📌 **推荐使用**：

   - **获取所有 Listing**：`GET_MERCHANT_LISTINGS_ALL_DATA`

   - **仅获取在售商品**：`GET_FLAT_FILE_OPEN_LISTINGS_DATA`

   - **快速获取 SKU & ASIN 信息**：`GET_MERCHANT_LISTINGS_DATA_LITE`

   ---

   ## **📌 4️⃣ 库存（Inventory）相关报告**

   这些报告包含 **库存信息**，适用于 **库存管理、补货分析**。

   

   | **报告类型 (`reportType`)** | **描述** | 
   |---|---|
   | `GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA` | FBA 现有库存（详细） | 
   | `GET_FBA_MYI_ALL_INVENTORY_DATA` | FBA 现有库存（包含 0 库存） | 
   | `GET_FBA_INVENTORY_AGED_DATA` | FBA **滞销库存** 报告 | 
   | `GET_FBA_STORAGE_FEE_CHARGES_DATA` | FBA **仓储费用** 报告 | 
   | `GET_FBA_ESTIMATED_FBA_FEES_TXT_DATA` | FBA 预计费用报告 | 
   | `GET_FBA_RESTOCK_INVENTORY_RECOMMENDATIONS_REPORT` | FBA **补货建议** | 
   

   📌 **推荐使用**：

   - **获取 FBA 库存情况**：`GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA`

   - **获取滞销库存（长期未售）**：`GET_FBA_INVENTORY_AGED_DATA`

   - **获取补货建议**：`GET_FBA_RESTOCK_INVENTORY_RECOMMENDATIONS_REPORT`

   ---

   ## **📌 5️⃣ 退货 & 退款（Returns & Refunds）相关报告**

   这些报告包含 **退货 & 退款数据**，适用于 **退货率分析**。

   

   | **报告类型 (`reportType`)** | **描述** | 
   |---|---|
   | `GET_FBA_REIMBURSEMENTS_DATA` | FBA 赔偿（FBA 丢失/损坏的赔偿） | 
   | `GET_FBA_CUSTOMER_RETURNS_DATA` | FBA **客户退货报告** | 
   | `GET_FBA_STRANDED_INVENTORY_UI_DATA` | FBA **滞销库存（客户退货）** | 
   

   📌 **推荐使用**：

   - **获取客户退货详情**：`GET_FBA_CUSTOMER_RETURNS_DATA`

   - **获取 FBA 赔偿数据**：`GET_FBA_REIMBURSEMENTS_DATA`

   ---

   ## **📌 6️⃣ 价格 & 广告（Pricing & Advertising）相关报告**

   这些报告包含 **商品价格、广告数据**，适用于 **价格优化、广告投放分析**。

   

   | **报告类型 (`reportType`)** | **描述** | 
   |---|---|
   | `GET_FLAT_FILE_OPEN_LISTINGS_DATA` | 获取在售商品的 **价格数据** | 
   | `GET_SALES_AND_TRAFFIC_REPORT` | 销售 & 访问量数据（广告数据） | 
   | `GET_SALES_AND_TRAFFIC_REPORT_BY_DATE` | 销售数据（按日期） | 
   | `GET_SALES_AND_TRAFFIC_REPORT_BY_ASIN` | 销售数据（按 ASIN） | 
   

   📌 **推荐使用**：

   - **获取当前商品价格**：`GET_FLAT_FILE_OPEN_LISTINGS_DATA`

   - **分析店铺流量 & 销量**：`GET_SALES_AND_TRAFFIC_REPORT_BY_DATE`

   - **查看某个 ASIN 的销量数据**：`GET_SALES_AND_TRAFFIC_REPORT_BY_ASIN`

   ---

   ## **🚀 总结**

   

   | **需要的数据** | **推荐的 `reportType`** | 
   |---|---|
   | **财务数据（收入、支出、佣金）** | `GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE` | 
   | **订单数据（所有订单）** | `GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL` | 
   | **产品 Listing 数据** | `GET_MERCHANT_LISTINGS_ALL_DATA` | 
   | **库存数据（FBA 现有库存）** | `GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA` | 
   | **FBA 滞销库存** | `GET_FBA_INVENTORY_AGED_DATA` | 
   | **客户退货数据** | `GET_FBA_CUSTOMER_RETURNS_DATA` | 
   | **商品价格数据** | `GET_FLAT_FILE_OPEN_LISTINGS_DATA` | 
   | **广告销售 & 访问量数据** | `GET_SALES_AND_TRAFFIC_REPORT_BY_DATE` | 
   

   📌 **如果你主要关注财务状况**

   - **结算数据**：`GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE`

   - **所有财务交易**：`GET_V2_ALL_FINANCIAL_EVENT_DATA`

   📌 **如果你主要关注商品管理**

   - **所有 Listing**：`GET_MERCHANT_LISTINGS_ALL_DATA`

   - **在售商品**：`GET_FLAT_FILE_OPEN_LISTINGS_DATA`

   🎯 **使用这些 API，你可以轻松获取 Amazon 店铺的所有重要数据！🚀**

   

   获取商品信息 by ASIN

   ![image.png](./SP-API-assets/image.png)

   获取店铺所有 ASIN

   ![image 1.png](./SP-API-assets/image%201.png)