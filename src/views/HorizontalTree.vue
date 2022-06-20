<template>
  <div>
    <div class="horizontal-tree">
      <ul>
        <li class="horizontal-tree-root">
          <div>
            性别：<input type="radio" name="sex" checked>女
            <input type="radio" name="sex" checked>男
          </div>
          <ul>
            <li v-for="(item, i) in treeModel.children" :key="i">
              <div v-for="(node, n) in item.thatNode" :key="n">
                {{ node }}
              </div>
              <ul v-if="item.children">
                <li v-for="(child, c) in item.children" :key="c">
                  {{ child }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "@vue/reactivity";
enum TYPES {
  "LABEL", "INPUT", "RADIO"
}
const treeModel = reactive({
  root: {
    type: TYPES.RADIO,
    model: 'sex',
  },
  children: [
    {
      thatNode: [
        {
          type: TYPES.LABEL,
          value: '输入测试1'
        },
        {
          type: TYPES.INPUT,
          model: 'input1'
        }
      ]
    },
    {
      thatNode: [
        {
          type: TYPES.RADIO,
          model: 'radio1',
          options: [
            { label: '苹果', value: 'apple' },
            { label: '香蕉', value: 'banana' }
          ]
        },
      ]
    },
    {
      thatNode: [
        {
          type: TYPES.RADIO,
          model: 'radio2',
          options: [
            { label: '红色', value: 'red' },
            { label: '蓝色', value: 'blue' }
          ]
        }
      ],
      children: [
        {
          thatNode: [
            {
              type: TYPES.LABEL,
              value: '输入测试2'
            },
            {
              type: TYPES.INPUT,
              model: 'input2'
            }
          ]
        },
        {
          thatNode: [
            {
              type: TYPES.LABEL,
              value: '输入测试2'
            },
            {
              type: TYPES.INPUT,
              model: 'input2'
            }
          ]
        }
      ]
    }
  ]
})
</script>

<style lang="scss" scoped>
@import "@/components/HorizontalTree.module.scss";
</style>