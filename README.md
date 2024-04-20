PLANTE GEMS
===

![1130 01index](https://hackmd.io/_uploads/rJccfy-b0.png)

- [PLANTE GEMS](#plante-gems)
  - [網站介紹](#網站介紹)
  - [使用技術](#使用技術)
  - [資料夾說明](#資料夾說明)
  - [測試帳號密碼](#測試帳號密碼)
  - [在 Local 端的安裝＆運行步驟](#在-local-端的安裝運行步驟)
  - [聯絡作者](#聯絡作者)
  - [其他介紹資料](#其他介紹資料)


## 網站介紹
1. `遊客` 即可瀏覽品牌介紹與保證、分店資訊、珠寶產品、最新消息、常見問題等。
2. (預計之後增加功能)遊客可註冊成為`會員`，可以選擇Facebook、LINE、Google、輸入帳密等登入/註冊方式。

## 使用技術
* 專案開發與測試：使用 Visual Studio Code 的 Go Live 功能。
* 專案部屬上線： GitHub 建立遠端儲存庫後透過 GitHub Pages 服務完成。
  
| :pushpin: 類別 | :wrench: 技術 |
| ------------- | ------------ |
| 前端工具       | HTML 5、CSS 3、JavaScript、、jQuery、animate.css  |
| 程式環境與工具 | scss、VSCode |
| 版控工具 | git、GitHub、Sourcetree |
| 設計工具 | Figma、Canva |

## 資料夾說明
| :file_folder: 資料夾名稱 | :memo: 說明 |
| -------- | ------------- |
| CSS      | CSS 與 scss 轉檔後 css 檔案放置處 |
| about     | 圖片放置處    |
| public     | 圖片放置處(檔名不會隨打包改變) |
| src     | 資源放置處     |
| - components | vue 組件放置處 |
| - router | index.js 放置處   |
| - stores | pinia 檔案放置處   |
| - views | 畫面放置處     |
| - assets   | 靜態資源放置處    |
| -- images | 圖片放置處      |
| -- js     | 共用 .js 放置處 |
| -- scss   | scss 檔案放置處 |

## 測試帳號密碼
* [專案正式上線網址](https://tibamef2e.com/chd104/g4/)
```sh
帳號： PxZoOexample
密碼： PxZoOexample
```

* 前台需要登入才能使用的功能有: 
  * 會員中心
  * 首頁 | 評論、檢舉
  * 立即購票
  * 知識學堂 | 領取優惠券

## 在 Local 端的安裝＆運行步驟
1. 取得前台專案
```sh
git clone https://github.com/SkerLeon/pxzoo.git
```

2. 進入專案目錄
```sh
cd pxzoo
```

3. 前台安裝套件
```sh
npm install
```
4. 運行前台專案
```sh
npm run dev
```

## 聯絡作者
本專案開發者及主責頁面/功能:  

<a href="https://github.com/SkerLeon/pxzoo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SkerLeon/pxzoo" />
</a>  
  
  
1. [SkerLeon](https://github.com/SkerLeon): 園區介紹、知識學堂/優惠券產出、會員中心/購票紀錄的 QRCODE 產出
2. [yhkekeke](https://github.com/yhkekeke): 立即購票
3. [huang607](https://github.com/huang607) : 首頁、Header、Footer、Fixed
4. [Hsuan1128](https://github.com/Hsuan1128): 登入、註冊、會員中心(包含會員資訊、購票紀錄、優惠票券、會員留言)
5. [Ying-Jung189](https://github.com/Ying-Jung189) : 動物資訊、動物內頁、最新消息、消息內頁
6. [wenchieh0119](https://github.com/wenchieh0119) : 人氣投票、知識學堂

## 其他介紹資料
* [專案簡報](https://drive.google.com/file/d/1kjP9MviFWZCMTxuaUcBT9OXchDZdpxZf/view)
* [專案 Demo 影片](https://www.youtube.com/watch?v=wMNHY-WFYpA&ab_channel=%E7%B7%AF%E8%82%B2TibaMe%E5%B0%B1%E6%A5%AD%E9%A4%8A%E6%88%90%E7%8F%AD)
* [專案技術文件](https://drive.google.com/file/d/1EFl3E_D7THHsBP35CQ8ErgrPuUCdjhnD/view)
* [專案 UI/UX 設計稿](https://www.figma.com/file/YCfP69MYr9OBUSBmMqePIr/%E7%B7%AF%E8%82%B2-%7C-%E5%9C%98%E9%AB%94%E5%B0%88%E9%A1%8C-6-PxZoO?type=design&node-id=515%3A9347&mode=design&t=DTzDguwhyjsUlTiD-1)
