例子一：
在Flex容器中，当项目边距设置为“auto”时，设置自动的垂直边距将使该项目完全集中两个轴。
<style>
    body{
        padding: 0;
        margin: 0;
    }

    .parent {
        display: flex;
        height: 300px; /* Or whatever */
        background-color: black;
    }

    .child {
        width: 100px;  /* Or whatever */
        height: 100px; /* Or whatever */
        margin: auto;  /* Magic! */
        background-color: white;
    }
</style>

<div class="parent"><div class="child"></div></div>


例子二：
body{
    margin: 0;
    padding: 0;
}

ul {
    margin: 0;
    padding: 0;
}

li{
    list-style: none;
}

.flex-container {
    /* We first create a flex layout context */
    display: flex;

    /* Then we define the flow direction and if we allow the items to wrap
    * Remember this is the same as:
    * flex-direction: row;
    * flex-wrap: wrap;
    */
    flex-flow: row wrap;
    /* Then we define how is distributed the remaining space */
    justify-content: space-around;
}
.flex-item {
    background: tomato;
    padding: 5px;
    width: 200px;
    height: 150px;
    margin-top: 10px;

    line-height: 150px;
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
}