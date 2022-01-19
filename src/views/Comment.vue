<template>
    <div id="comment">
        <el-row style="height: 60px;" type="flex" align="middle">
            <el-col :offset="3" :span="9">
                <el-input placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <CommentItem class="commentStyle"/>
            <CommentItem class="commentStyle"/>
            <CommentItem class="commentStyle"/>
            <CommentItem class="commentStyle"/>
        </el-row>
    </div>
</template>
<script>
import CommentItem from "@/components/CommentItem";

export default {
    name: "Comment",
    components: {
        CommentItem,
    }
}
</script>
<style scoped>
.commentStyle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
