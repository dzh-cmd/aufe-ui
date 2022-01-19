<template>

    <div id="postmsg" style="width: 100%;height: 100%">
        <div style="height: 500px;width: 100%;margin: 0 auto">
            <mavon-editor style="height: 500px;overflow-y: auto" v-model="content" />
        </div>
        <button class="button"><span>Submit </span></button>

    </div>

</template>

<script>
export default {
    name: "PostMsg",
    data(){
        return{
            content: "# 在此处编写你的讨论。\r\n \r\n### 此处开始编写正文",
        }
    }
}
</script>
<style scoped>

#postmsg{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button {
    display: inline-block;
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 30px;
    vertical-align:middle;
}

.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.button:hover span {
    padding-right: 25px;
}

.button:hover span:after {
    opacity: 1;
    right: 0;
}

</style>
