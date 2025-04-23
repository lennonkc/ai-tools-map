# Issue Background

+ ## 方案 1

   ## **如何获取所有 FBA Shipments，并查看其详细信息（包含 SKU、发货数、接收数、状态、更新时间）**

   在使用 **FBA Inbound Shipments API** 时，Amazon 要求你**至少提供其中一个过滤条件**，否则就会报错：

   ```
   "At least one of ShipmentStatusList and ShipmentIdList must be provided"
   
   ```

   也就是说，**你不能直接用 `?QueryType=SHIPMENT` 什么都不带**，必须至少带上 **ShipmentStatusList**、或者 **ShipmentIdList**，或者 **时间过滤**（`LastUpdatedAfter` 等）。

   ---

   ## **1️⃣ 获取所有 Shipments 的最佳做法**

   ### **🔹 方式 A：通过状态列表获取**

   如果你想获取当前所有活跃或历史的 Inbound Shipments，可以**列出所有可能的状态**：

   **可用的 FBA Shipment 状态** 大致包括：

   - `WORKING`

   - `SHIPPED`

   - `IN_TRANSIT`

   - `DELIVERED`

   - `CHECKED_IN`

   - `RECEIVING`

   - `CLOSED`

   - `CANCELLED`

   - `DELETED`

   - `ERROR`

   一般你最关心的可能是：**`WORKING`, `SHIPPED`, `IN_TRANSIT`, `DELIVERED`, `RECEIVING`, `CLOSED`**，也就是从创建到结束的主要状态。

   #### **示例请求**

   ```
   curl --location \
   'https://sellingpartnerapi-na.amazon.com/fba/inbound/v0/shipments?QueryType=SHIPMENT&ShipmentStatusList=WORKING,SHIPPED,IN_TRANSIT,DELIVERED,RECEIVING,CLOSED' \
   --header 'x-amz-access-token: ***' \
   --header 'Accept: application/json'
   
   ```

   这样就能**一次性获取**所有处在这些状态的 Shipments。如果想要包括取消的货件，也可以把 `CANCELLED` 状态加上去。

   ---

   ### **🔹 方式 B：通过时间范围获取**

   如果你的店铺 Shipments 太多，你也可以用**时间范围**过滤，只查询最近一段时间更新过的货件：

   ```
   curl --location \
   'https://sellingpartnerapi-na.amazon.com/fba/inbound/v0/shipments?QueryType=SHIPMENT&LastUpdatedAfter=2024-01-01T00:00:00Z&LastUpdatedBefore=2025-03-10T00:00:00Z' \
   --header 'x-amz-access-token: ***' \
   --header 'Accept: application/json'
   
   ```

   - `LastUpdatedAfter`：只获取这个时间之后更新的货件

   - `LastUpdatedBefore`：只获取这个时间之前更新的货件

   当然，你可以和 `ShipmentStatusList` 组合使用。

   ---

   ## **2️⃣ 获取 Shipments 详情：ShipmentId、状态、最后更新时间**

   执行以上请求成功后，典型返回示例：

   ```
   {
     "ShipmentData": [
       {
         "ShipmentId": "FBA123456789",
         "ShipmentName": "March Restock",
         "ShipFromAddress": {...},
         "DestinationFulfillmentCenterId": "ABE8",
         "ShipmentStatus": "WORKING",
         "LabelPrepType": "SELLER_LABEL",
         "ConfirmedNeedByDate": "2025-03-01T00:00:00Z",
         "LastUpdatedDate": "2025-03-02T10:15:00Z"
       },
       {
         "ShipmentId": "FBA987654321",
         "ShipmentName": "Feb Restock",
         "ShipmentStatus": "SHIPPED",
         "LastUpdatedDate": "2025-03-02T11:20:00Z"
       }
     ]
   }
   
   ```

   从这里你就能拿到：

   - **`ShipmentId`**

   - **`ShipmentStatus`**

   - **`LastUpdatedDate`**

   ---

   ### **3️⃣ 获取每个 Shipment 内的 SKU、发出数量、接收数量**

   ### **🔹 Step A：获取 Shipment Items**

   对于每一个 `ShipmentId`，调用 `/shipments/{shipmentId}/items`：

   ```
   curl --location \
   "https://sellingpartnerapi-na.amazon.com/fba/inbound/v0/shipments/FBA123456789/items" \
   --header 'x-amz-access-token: ***' \
   --header 'Accept: application/json'
   
   ```

   **示例返回：**

   ```
   {
     "ItemData": [
       {
         "ShipmentId": "FBA123456789",
         "SellerSKU": "SKU123",
         "FulfillmentNetworkSKU": "X00123ABC",
         "QuantityShipped": 10,
         "QuantityReceived": 8,
         "QuantityInCase": 2
       },
       {
         "ShipmentId": "FBA123456789",
         "SellerSKU": "SKU456",
         "FulfillmentNetworkSKU": "X00456DEF",
         "QuantityShipped": 5,
         "QuantityReceived": 0,
         "QuantityInCase": 1
       }
     ]
   }
   
   ```

   这里就可以**拿到**：

   - **`SellerSKU`**（SKU）

   - **`QuantityShipped`**（发出数量）

   - **`QuantityReceived`**（Amazon 仓库已接收数量）

   结合前面拿到的 **`ShipmentStatus`** + **`LastUpdatedDate`**，就可以拼出你需要的结构了：

   ```
   ShipmentId  |  SKU    |  发出数量  |  已接收数量  |  ShipmentStatus  |  LastUpdateTime
   FBA123456789 | SKU123  |     10     |      8       |    WORKING       |  2025-03-02T10:15:00Z
   FBA123456789 | SKU456  |      5     |      0       |    WORKING       |  2025-03-02T10:15:00Z
   ...
   
   ```

   ---

   ## **4️⃣ 如果你想获取更多库存 & 入库数据**

   你也可以使用 **Reports API**，例如：

   - `GET_FBA_SHIPMENT_INVENTORY_RECEIPTS_DATA`：看 Amazon 仓库的接收明细

   - `GET_FBA_INVENTORY_AGED_DATA`：看哪些库存在仓库里滞留

   但大多数与 **发货队列**（Inbound Shipments）直接相关的信息，都可以通过 **Inbound Shipments API** 实时获取。

   ---

   ## **🚀 最佳实践总结**

   1. **先获取所有 Shipment**：

      - 传参至少要有 **`ShipmentStatusList`** 或 **`LastUpdatedAfter/Before`**

      - 这样就不会出现 `"At least one of ShipmentStatusList and ShipmentIdList must be provided"` 报错

   2. **再根据 `ShipmentId` 获取 Shipment Items**：

      - `/fba/inbound/v0/shipments/{shipmentId}/items`

      - 得到 SKU、发货数、接收数

   3. **组合信息**：

      - **ShipmentId**

      - **SKU**

      - **QuantityShipped** / **QuantityReceived**

      - **ShipmentStatus**

      - **LastUpdatedDate**

   **这样就能满足你要的输出！** ✨

   ---

   ## **🎯 参考请求示例**

   ### **1\. 获取所有在工作或已发货的 Shipment**

   ```
   curl --location "https://sellingpartnerapi-na.amazon.com/fba/inbound/v0/shipments?QueryType=SHIPMENT&ShipmentStatusList=WORKING,SHIPPED,IN_TRANSIT,RECEIVING,DELIVERED,CLOSED" \
   --header "x-amz-access-token: ***" \
   --header "Accept: application/json"
   
   ```

   ### **2\. 对每个 Shipment 获取 Items**

   ```
   curl --location "https://sellingpartnerapi-na.amazon.com/fba/inbound/v0/shipments/FBA123456789/items" \
   --header "x-amz-access-token: ***" \
   --header "Accept: application/json"
   
   ```

   ---

   **这样，你就能顺利获取并拼出 `shipmentID | SKU | 发出数量 | Amazon 仓库接收数量 | shipmentstatus | shipmentLastUpdateTime`！**\
   如果还有其他问题，欢迎再来交流。祝你一切顺利！

   

+ ## 方案 2

   ## **🚀 在 Inbound Shipments API 中查不到 `LastUpdateTime`，怎么办？**

   你在使用 `GET /fba/inbound/v0/shipments` 时，发现返回的字段里没有 `LastUpdatedDate`（或 `LastUpdateTime`）。这是 **正常现象**，因为 **SP-API 并不保证** 在所有场景都返回货件的 **最后更新时间**。下面详细解释原因，并提供一些替代方案。

   ---

   ## **1️⃣ 为什么 `LastUpdatedDate` 可能不返回？**

   - **官方文档并未明确声明** 一定会返回 `LastUpdatedDate` 字段。

   - 某些旧版本的 MWS（非 SP-API）接口可能会返回 `LastUpdatedDate`，但在新的 SP-API 中并没有在响应示例中列明这个字段。

   - 只有在 **特定状态/时间过滤** 下，Amazon 有时会返回 `LastUpdatedDate`，但这不是强制的，也不是所有账号都能见到。

   换言之，**SP-API 对“货件最后更新时间”并没有一个统一的字段可供获取**，多数情况下并不会返回。

   ---

   ## **2️⃣ 是否有 Report API 能一次性返回「ShipmentId | SKU | ShippedQty | ReceivedQty | ShipmentStatus | LastUpdateTime」？**

   **答案：没有**。\
   Amazon 的 Report API 并没有一个“合并了货件状态 + SKU + 数量 + 最后更新时间”的官方报告类型。你只能通过下列方式 **组合数据**：

   1. **Inbound Shipments API**

      - 获取所有或指定状态/时间范围内的 **ShipmentId**、**ShipmentStatus**、发货信息

      - 然后用 `/shipments/{shipmentId}/items` 获取每个货件中的 **SKU、发出数量、接收数量**

      - **缺点**：无 `LastUpdateTime` 字段

   2. **FBA Receipts/Inventory 类的 Report API**

      - 如 `GET_FBA_SHIPMENT_INVENTORY_RECEIPTS_DATA`，可以看到 Amazon 接收数量，但不包含 `ShipmentStatus` 或 `LastUpdateTime`

      - 如 `GET_FBA_INVENTORY_AGED_DATA`，可查看滞销库存等，但也不包含完整的发货队列信息

   因此，Amazon 并没有提供一个“一步到位”的报告满足你所有字段。

   ---

   ## **3️⃣ 如何获取近似“最后更新时间”？**

   如果你确实需要 **某种“更新时间”** 来排序或识别变动，常见做法是：

   1. **使用 Inbound Shipments API 的时间过滤**

      - 通过 **`LastUpdatedAfter` 和 `LastUpdatedBefore`** 参数来请求一段时间内有更新的货件

      - 这样可以大致知道哪些货件在这段时间里有变动，但在响应数据里不一定会返回“更新时间”字段。

      **示例**：

      ```
      curl -X GET \
      "https://sellingpartnerapi-na.amazon.com/fba/inbound/v0/shipments?QueryType=SHIPMENT&LastUpdatedAfter=2025-02-01T00%3A00%3A00Z&LastUpdatedBefore=2025-03-10T00%3A00%3A00Z" \
      -H "x-amz-access-token: YOUR_ACCESS_TOKEN" \
      -H "Accept: application/json"
      
      ```

      - 这可以让你筛选出在 2025-02-01 \~ 2025-03-10 之间有更新的货件，但不会明确告诉你具体那一天更新了。

   2. **自己维护“最后更新时间”**

      - **将每次从 SP-API 拉回的货件数据写入你自己的数据库**，记录“抓取的时间戳”。

      - 当再次抓取时，**对比前后数据**，如果发现货件状态或数量有变化，就可以判定“最后更新时间”。

      - 这种方式需要你在本地实现“增量同步”逻辑，但能获得更精准的“更新时间”追踪。

   ---

   ## **4️⃣ 综合：实现你想要的表格**

   你想要 **`ShipmentId | SKU | 发出数量 | 已接收数量 | ShipmentStatus | LastUpdateTime`**，可以按以下流程来：

   1. **列出货件**

      - 用 Inbound Shipments API

      - 带上 **`ShipmentStatusList`** 或时间过滤（`LastUpdatedAfter` / `LastUpdatedBefore`）来获取 **ShipmentId、ShipmentStatus**

      - 你会得到类似： 

         ```
         {
           "ShipmentData": [
             {
               "ShipmentId": "FBA2RPQMSN",
               "ShipmentStatus": "CLOSED",
               "ShipmentName": "...",
               ...
             },
             ...
           ]
         }
         
         ```

   2. **获取货件商品**

      - `/fba/inbound/v0/shipments/{shipmentId}/items`

      - 你会得到： 

         ```
         {
           "ItemData": [
             {
               "SellerSKU": "SKU123",
               "QuantityShipped": 10,
               "QuantityReceived": 8,
               ...
             },
             ...
           ]
         }
         
         ```

   3. **本地合并数据**

      - 以 `ShipmentId` 关联

      - 拼出： 

         ```
         ShipmentId: FBA2RPQMSN
         SKU: SKU123
         发出数量 (QuantityShipped): 10
         已接收数量 (QuantityReceived): 8
         ShipmentStatus: CLOSED
         LastUpdateTime: [本地自己定义或根据时间过滤判断]
         
         ```

   4. **维护“last update time”**

      - **SP-API 不会提供**一个明确的 “LastUpdateTime”

      - 你可以：

         - 用 `LastUpdatedAfter` / `LastUpdatedBefore` 做增量拉取

         - 在数据库里标记“抓取时间”，将其视为 **本地维护的“last update time”**

         - 或者，如果碰巧 `LastUpdatedDate` 出现在响应里（极少数情况下），就直接用它

   ---

   ## **🚀 结论**

   1. **Inbound Shipments API** **不会** 总是返回 `LastUpdatedDate` 字段；

   2. **没有** 单独的 Report API 整合了 “ShipmentId、SKU、发出数量、接收数量、ShipmentStatus、LastUpdateTime”；

   3. **最佳做法**：

      - **使用 Inbound Shipments API** 分别获取 “货件列表” 和 “货件商品” 信息；

      - **自己维护（或推断）最后更新时间**：

         - 通过 `LastUpdatedAfter` / `LastUpdatedBefore` 实现增量同步

         - 在本地数据库对比“上次抓取”与“本次抓取”

      - 将这几项信息组装到一起，形成你想要的表格/报告。

   这样，你就能在系统中 **近似模拟** “LastUpdateTime”的功能，同时得到 `ShipmentId | SKU | shippedQty | receivedQty | ShipmentStatus` 等关键信息。


