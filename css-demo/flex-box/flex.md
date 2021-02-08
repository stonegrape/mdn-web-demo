1. flex
2. display:flex;
3. flex-direction:row/column; 父元素是弹性盒子
4. flex-wrap:wrap; 溢出
5. flex-flow:row wrap;
6. flex:1;
7. flex:1 200px;
8. main-axis cross-axis main-start main-end cross-start cross-end;
9. flex:none/auto
10. flex: 2;
11. align-items:center/flex-start/flex-end/start/end;
12. jusity-content:space-around;
13. order:1;
14. order:-1;

    ```html
    <!-- 父元素 class="container";
         子元素 class="flex-item" -->
    .container {
        width:200px;
        height:200px;
        display:flex;
        flex-wrap:wrap;
    }
    .flex-item {
        flex:1 200px;
    }
    
    ```